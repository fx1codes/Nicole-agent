import { Button } from "@/components/ui/button";

export function ConfigForm() {
  return (
    <form className="space-y-4">
      <div className="grid gap-4 md:grid-cols-2">
        <label className="space-y-2 text-sm text-slate-700">
          <span>Agent name</span>
          <input defaultValue="Nicole AI Agent" className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-slate-900 focus:border-indigo-400 focus:outline-none" />
        </label>
        <label className="space-y-2 text-sm text-slate-700">
          <span>Cartesia agent ID</span>
          <input defaultValue="agent_i3hygTDTSTHXngRQxAWdsn" className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 font-mono text-xs text-slate-900 focus:border-indigo-400 focus:outline-none" />
        </label>
      </div>
      <div className="flex gap-3">
        <Button type="button">Save settings</Button>
        <Button type="button" variant="secondary">Revert</Button>
      </div>
    </form>
  );
}
