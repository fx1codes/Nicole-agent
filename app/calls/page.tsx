import { AppShell } from "@/components/layout/app-shell";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function CallsPage() {
  return (
    <AppShell>
      <div className="space-y-6">
        <section className="flex flex-col gap-2">
          <p className="muted-label">Calling</p>
          <h1 className="text-3xl font-semibold text-slate-900">Calls</h1>
        </section>

        <div className="grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">
          <Card className="p-5">
            <h2 className="mb-4 text-lg font-semibold text-slate-900">Authorized call controls</h2>
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">Destination</label>
                <input className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900 focus:border-indigo-400 focus:outline-none" placeholder="+1 555 123 4567" />
              </div>
              <div className="flex flex-wrap gap-3">
                <Button>Request confirmation</Button>
                <Button variant="secondary">Clear</Button>
              </div>
            </div>
          </Card>

          <Card className="p-5">
            <h2 className="mb-3 text-lg font-semibold text-slate-900">Guardrails</h2>
            <ul className="space-y-2 text-sm text-slate-600">
              <li>• No automatic outbound calls.</li>
              <li>• Explicit user action is required.</li>
              <li>• Number validation is enforced.</li>
              <li>• Provider responses are required before claiming success.</li>
            </ul>
          </Card>
        </div>
      </div>
    </AppShell>
  );
}
