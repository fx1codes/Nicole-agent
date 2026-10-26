import { AppShell } from "@/components/layout/app-shell";
import { SidebarNav } from "@/components/layout/sidebar-nav";
import { TopBar } from "@/components/layout/topbar";
import { cn } from "@/lib/utils";

export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-100 text-slate-900">
      <div className="mx-auto flex max-w-[1600px] gap-4 p-4">
        <aside className="hidden w-72 shrink-0 xl:block">
          <SidebarNav />
        </aside>

        <div className="flex min-h-[calc(100vh-2rem)] w-full flex-1 flex-col rounded-3xl border border-slate-200 bg-slate-50 shadow-sm">
          <TopBar />
          <main className="flex-1 p-4 md:p-6">{children}</main>
        </div>
      </div>
    </div>
  );
}

export { cn };
