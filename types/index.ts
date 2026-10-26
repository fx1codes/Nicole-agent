export type NavItem = {
  href: string;
  label: string;
};

export type AgentStatusSummary = {
  configured: boolean;
  apiReachable: boolean;
  status: "ready" | "degraded" | "missing-config" | "error";
  message: string;
};

export type CallRequest = {
  destination: string;
  confirmed: boolean;
};
