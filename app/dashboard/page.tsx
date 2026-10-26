import { AppShell } from "@/components/layout/app-shell";
import { StatusCard } from "@/components/dashboard/status-card";
import { getCartesiaStatus } from "@/lib/cartesia/client";

export default async function DashboardPage() {
  const cartesia = await getCartesiaStatus();

  return (
    <AppShell>
      <div className="space-y-6">
        <section className="flex flex-col gap-2">
          <p className="muted-label">Overview</p>
          <h1 className="text-3xl font-semibold text-slate-900">Agent dashboard</h1>
        </section>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          <StatusCard
            title="Agent status"
            value={cartesia.status === "ready" ? "Ready" : "Needs setup"}
            tone={cartesia.status === "ready" ? "success" : "warning"}
            detail={cartesia.message}
          />
          <StatusCard
            title="Cartesia health"
            value={cartesia.apiReachable ? "Reachable" : "Not verified"}
            tone={cartesia.apiReachable ? "success" : "warning"}
            detail={cartesia.version ? `API v${cartesia.version}` : "No live check yet"}
          />
          <StatusCard
            title="Prompts ready"
            value="2" 
            tone="neutral"
            detail="Test modes enabled"
          />
          <StatusCard
            title="Calls"
            value="Disabled"
            tone="neutral"
            detail="Requires explicit authorization"
          />
        </div>

        <section className="grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="shell-surface p-5">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-lg font-semibold text-slate-900">Environment summary</h2>
              <span className="rounded-full border border-indigo-200 bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700">
                Server-safe
              </span>
            </div>
            <div className="space-y-3 text-sm text-slate-600">
              <div className="flex items-center justify-between border-b border-slate-200 pb-2">
                <span>Agent configured</span>
                <span className={cartesia.agentIdPresent ? "font-medium text-emerald-600" : "font-medium text-amber-600"}>
                  {cartesia.agentIdPresent ? "Yes" : "No"}
                </span>
              </div>
              <div className="flex items-center justify-between border-b border-slate-200 pb-2">
                <span>API key present</span>
                <span className={cartesia.keyPresent ? "font-medium text-emerald-600" : "font-medium text-amber-600"}>
                  {cartesia.keyPresent ? "Yes" : "No"}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span>Phone capability</span>
                <span className="font-medium text-slate-500">Prepared, not enabled</span>
              </div>
            </div>
          </div>

          <div className="shell-surface p-5">
            <h2 className="mb-4 text-lg font-semibold text-slate-900">Operational notes</h2>
            <ul className="space-y-3 text-sm text-slate-600">
              <li>• Keep Cartesia credentials on the server only.</li>
              <li>• Verify the provider health route before testing prompts.</li>
              <li>• Use explicit consent before initiating any call attempt.</li>
              <li>• Do not claim a call happened without provider confirmation.</li>
            </ul>
          </div>
        </section>
      </div>
    </AppShell>
  );
}
