export function TopBar() {
  return (
    <header className="flex items-center justify-between border-b border-slate-200 bg-white/80 px-4 py-3 backdrop-blur-sm md:px-6">
      <div className="flex items-center gap-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-50 text-indigo-700 xl:hidden">N</div>
        <div>
          <div className="text-[10px] uppercase tracking-[0.2em] text-slate-500">Status</div>
          <div className="text-sm font-semibold text-slate-900">Nicole AI Agent</div>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <span className="rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-emerald-700">
          Secure
        </span>
      </div>
    </header>
  );
}
