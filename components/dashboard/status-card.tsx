type Tone = "success" | "warning" | "neutral";

export function StatusCard({
  title,
  value,
  tone,
  detail,
}: {
  title: string;
  value: string;
  tone: Tone;
  detail: string;
}) {
  const toneStyles = {
    success: "border-emerald-200 bg-emerald-50 text-emerald-700",
    warning: "border-amber-200 bg-amber-50 text-amber-700",
    neutral: "border-slate-200 bg-slate-100 text-slate-700",
  };

  return (
    <div className="shell-surface p-4">
      <div className="text-xs font-medium uppercase tracking-[0.18em] text-slate-500">{title}</div>
      <div className="mt-4 flex items-center justify-between gap-4">
        <div className="text-2xl font-semibold text-slate-900">{value}</div>
        <span className={`rounded-full border px-2 py-1 text-[10px] font-medium uppercase tracking-[0.18em] ${toneStyles[tone]}`}>
          {tone}
        </span>
      </div>
      <p className="mt-3 text-sm text-slate-600">{detail}</p>
    </div>
  );
}
