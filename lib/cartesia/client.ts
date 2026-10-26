export const CARTESIA_BASE_URL = "https://api.cartesia.ai";

export type CartesiaStatus = {
  configured: boolean;
  keyPresent: boolean;
  agentIdPresent: boolean;
  apiReachable: boolean;
  version?: string;
  status: "ready" | "degraded" | "missing-config" | "error";
  message: string;
};

export async function getCartesiaStatus(): Promise<CartesiaStatus> {
  const hasKey = Boolean(process.env.CARTESIA_API_KEY);
  const hasAgentId = Boolean(process.env.CARTESIA_AGENT_ID);

  if (!hasKey || !hasAgentId) {
    return {
      configured: false,
      keyPresent: hasKey,
      agentIdPresent: hasAgentId,
      apiReachable: false,
      status: "missing-config",
      message: "Add CARTESIA_API_KEY and CARTESIA_AGENT_ID to continue. The app will not pretend the connection succeeded.",
    };
  }

  try {
    const response = await fetch(`${CARTESIA_BASE_URL}/`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${process.env.CARTESIA_API_KEY}`,
      },
      cache: "no-store",
    });

    if (!response.ok) {
      return {
        configured: true,
        keyPresent: true,
        agentIdPresent: true,
        apiReachable: false,
        status: "error",
        message: `Cartesia API responded with status ${response.status}. Check the key and account permissions.`,
      };
    }

    const payload = (await response.json().catch(() => ({}))) as { ok?: boolean; version?: string };

    return {
      configured: true,
      keyPresent: true,
      agentIdPresent: true,
      apiReachable: payload.ok === true,
      version: payload.version,
      status: payload.ok === true ? "ready" : "degraded",
      message:
        payload.ok === true
          ? "Cartesia API is responding and the server-side configuration is active."
          : "Cartesia responded but did not report a successful health state.",
    };
  } catch (error) {
    return {
      configured: true,
      keyPresent: true,
      agentIdPresent: true,
      apiReachable: false,
      status: "error",
      message: error instanceof Error ? error.message : "Cartesia connection check failed.",
    };
  }
}
