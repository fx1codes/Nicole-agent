import { NextResponse } from "next/server";
import { getCartesiaStatus } from "@/lib/cartesia/client";

export async function GET() {
  const cartesia = await getCartesiaStatus();

  return NextResponse.json({
    ok: cartesia.status !== "error",
    service: "nicole-ai-agent",
    cartesia,
    timestamp: new Date().toISOString(),
  });
}
