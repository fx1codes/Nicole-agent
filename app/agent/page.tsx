import { AppShell } from "@/components/layout/app-shell";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function AgentPage() {
  return (
    <AppShell>
      <div className="space-y-6">
        <section className="flex flex-col gap-2">
          <p className="muted-label">Configuration</p>
          <h1 className="text-3xl font-semibold text-slate-900">Agent settings</h1>
        </section>

        <div className="grid gap-4 xl:grid-cols-[1.25fr_0.75fr]">
          <Card className="p-5">
            <h2 className="mb-4 text-lg font-semibold text-slate-900">Voice agent configuration</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">Agent name</label>
                <input className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900 focus:border-indigo-400 focus:outline-none" defaultValue="Nicole AI Agent" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">Agent ID</label>
                <input className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 font-mono text-xs text-slate-900 focus:border-indigo-400 focus:outline-none" defaultValue="agent_i3hygTDTSTHXngRQxAWdsn" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">Voice ID</label>
                <input className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 font-mono text-xs text-slate-900 focus:border-indigo-400 focus:outline-none" defaultValue="a2d119f3-d814-42d9-8ad8-0ba1e90a3156" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">Primary model</label>
                <input className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900 focus:border-indigo-400 focus:outline-none" defaultValue="Cartesia managed agent" />
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <Button>Save changes</Button>
              <Button variant="secondary">Reset</Button>
            </div>
          </Card>

          <Card className="p-5">
            <h2 className="mb-3 text-lg font-semibold text-slate-900">Status</h2>
            <div className="space-y-3 text-sm text-slate-600">
              <div className="flex items-center justify-between rounded-xl border border-slate-200 bg-slate-50 p-3">
                <span>Connection</span>
                <span className="font-medium text-emerald-600">Verified when API key is present</span>
              </div>
              <div className="flex items-center justify-between rounded-xl border border-slate-200 bg-slate-50 p-3">
                <span>Phone calling</span>
                <span className="font-medium text-amber-600">Prepared</span>
              </div>
              <div className="flex items-center justify-between rounded-xl border border-slate-200 bg-slate-50 p-3">
                <span>AI identity</span>
                <span className="font-medium text-slate-700">Transparent</span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </AppShell>
  );
}
