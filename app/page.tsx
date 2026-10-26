import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-20">
        <nav className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500/20 text-lg font-semibold text-indigo-200">N</div>
            <div>
              <div className="text-sm uppercase tracking-[0.2em] text-indigo-200">Nicole</div>
              <div className="text-xl font-semibold">AI Agent</div>
            </div>
          </div>
          <Link
            href="/dashboard"
            className="rounded-full border border-indigo-400/40 bg-indigo-500/10 px-4 py-2 text-sm font-medium text-indigo-100 transition hover:bg-indigo-500/20"
          >
            Open dashboard
          </Link>
        </nav>

        <section className="grid gap-8 rounded-3xl border border-slate-800 bg-slate-900/80 p-8 shadow-2xl shadow-indigo-950/30 md:grid-cols-[1.3fr_0.7fr] md:p-12">
          <div className="space-y-6">
            <span className="inline-flex rounded-full border border-indigo-400/30 bg-indigo-500/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.22em] text-indigo-200">
              Secure voice operations
            </span>
            <h1 className="max-w-xl text-4xl font-semibold tracking-tight text-white md:text-6xl">
              A premium control center for your Cartesia voice agent.
            </h1>
            <p className="max-w-xl text-base text-slate-300 md:text-lg">
              Monitor health, manage agent settings, validate prompts, review conversations, and prepare approved calling workflows without exposing credentials.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/dashboard"
                className="rounded-xl bg-indigo-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-600/40 transition hover:bg-indigo-400"
              >
                Launch dashboard
              </Link>
              <Link
                href="/agent"
                className="rounded-xl border border-slate-700 bg-slate-950/50 px-5 py-3 text-sm font-semibold text-slate-200 transition hover:border-slate-500"
              >
                Configure agent
              </Link>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-5">
            <div className="mb-4 flex items-center justify-between">
              <div className="text-sm text-slate-300">Operational status</div>
              <div className="rounded-full border border-emerald-500/40 bg-emerald-500/10 px-2 py-1 text-xs font-medium text-emerald-200">
                Ready for setup
              </div>
            </div>

            <div className="space-y-4 text-sm text-slate-300">
              <div className="rounded-xl border border-slate-800 bg-slate-900 p-4">
                <div className="text-slate-400">Agent ID</div>
                <div className="mt-1 font-mono text-xs text-slate-100">agent_i3hygTDTSTHXngRQxAWdsn</div>
              </div>
              <div className="rounded-xl border border-slate-800 bg-slate-900 p-4">
                <div className="text-slate-400">Voice profile</div>
                <div className="mt-1 font-medium text-slate-100">Cartesia voice configured</div>
              </div>
              <div className="rounded-xl border border-slate-800 bg-slate-900 p-4">
                <div className="text-slate-400">Delivery model</div>
                <div className="mt-1 font-medium text-slate-100">Secure server-side architecture</div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
