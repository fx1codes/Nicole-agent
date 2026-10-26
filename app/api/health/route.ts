import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    ok: true,
    service: "nicole-ai-agent",
    timestamp: new Date().toISOString(),
    status: "healthy",
  });
}
