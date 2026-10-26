import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/dashboard", label: "Dashboard" },
  { href: "/agent", label: "Agent" },
  { href: "/conversations", label: "Conversations" },
  { href: "/calls", label: "Calls" },
  { href: "/settings", label: "Settings" },
];

export function SidebarNav() {
  "use client";

  const pathname = usePathname();

  return (
    <div className="h-full rounded-3xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="mb-6 flex items-center gap-3 px-2">
        <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-indigo-600 text-sm font-semibold text-white">N</div>
        <div>
          <div className="text-[10px] uppercase tracking-[0.2em] text-slate-500">Nicole</div>
          <div className="text-lg font-semibold text-slate-900">AI Agent</div>
        </div>
      </div>

      <nav className="space-y-2">
        {navItems.map((item) => {
          const active = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={[
                "flex items-center rounded-xl px-3 py-2.5 text-sm font-medium transition",
                active ? "bg-indigo-600 text-white shadow-sm" : "text-slate-600 hover:bg-slate-100 hover:text-slate-900",
              ].join(" ")}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
