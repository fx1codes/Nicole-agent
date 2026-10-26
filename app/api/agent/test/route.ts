import { NextResponse } from "next/server";
import { getCartesiaStatus } from "@/lib/cartesia/client";
import { rateLimit } from "@/lib/security/rate-limit";
import { agentTestSchema } from "@/lib/validation/schemas";

export async function POST(request: Request) {
  const forwarded = request.headers.get("x-forwarded-for") ?? "unknown";
  if (!rateLimit(forwarded, 20, 60_000)) {
    return NextResponse.json({ ok: false, error: "Rate limit exceeded." }, { status: 429 });
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON body." }, { status: 400 });
  }

  const parsed = agentTestSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      {
        ok: false,
        error: parsed.error.flatten().fieldErrors,
      },
      { status: 400 },
    );
  }

  const status = await getCartesiaStatus();

  if (!status.configured) {
    return NextResponse.json(
      {
        ok: false,
        mode: parsed.data.mode,
        message: "Cartesia is not fully configured. Provide CARTESIA_API_KEY and CARTESIA_AGENT_ID to enable a live connection check.",
        status,
      },
      { status: 503 },
    );
  }

  if (parsed.data.mode === "live") {
    return NextResponse.json({
      ok: true,
      mode: "live",
      available: false,
      message: "Live voice conversations are intentionally disabled in this build. The app is prepared for authorized call workflows and requires explicit confirmation and provider support before any call begins.",
      status,
    });
  }

  if (parsed.data.mode === "audio") {
    return NextResponse.json({
      ok: true,
      mode: "audio",
      available: false,
      message: "Generated audio is not enabled until the configured Cartesia account exposes the required documented TTS workflow for this application.",
      status,
    });
  }

  return NextResponse.json({
    ok: true,
    mode: "text",
    accepted: true,
    message: "Prompt received and validated on the server. The current implementation intentionally does not invoke undocumented Cartesia agent endpoints without explicit provider support.",
    prompt: parsed.data.prompt,
    status,
  });
}
