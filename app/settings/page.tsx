import { AppShell } from "@/components/layout/app-shell";
import { Card } from "@/components/ui/card";

export default function SettingsPage() {
  return (
    <AppShell>
      <div className="space-y-6">
        <section className="flex flex-col gap-2">
          <p className="muted-label">Preferences</p>
          <h1 className="text-3xl font-semibold text-slate-900">Settings</h1>
        </section>

        <div className="grid gap-4 lg:grid-cols-2">
          <Card className="p-5">
            <h2 className="mb-4 text-lg font-semibold text-slate-900">Security</h2>
            <div className="space-y-4 text-sm text-slate-600">
              <div className="flex items-center justify-between rounded-xl border border-slate-200 bg-slate-50 p-3">
                <span>Authentication integration</span>
                <span className="font-medium text-amber-600">Planned</span>
              </div>
              <div className="flex items-center justify-between rounded-xl border border-slate-200 bg-slate-50 p-3">
                <span>Rate limiting</span>
                <span className="font-medium text-emerald-600">Enabled</span>
              </div>
              <div className="flex items-center justify-between rounded-xl border border-slate-200 bg-slate-50 p-3">
                <span>Secrets handling</span>
                <span className="font-medium text-emerald-600">Server-only</span>
              </div>
            </div>
          </Card>

          <Card className="p-5">
            <h2 className="mb-4 text-lg font-semibold text-slate-900">Operational limits</h2>
            <ul className="space-y-2 text-sm text-slate-600">
              <li>• Public routes do not expose personal data.</li>
              <li>• Private settings require future auth enforcement.</li>
              <li>• All call operations remain permission-gated.</li>
              <li>• The current app is intentionally conservative by default.</li>
            </ul>
          </Card>
        </div>
      </div>
    </AppShell>
  );
}
