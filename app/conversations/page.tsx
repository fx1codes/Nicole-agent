import { AppShell } from "@/components/layout/app-shell";
import { Card } from "@/components/ui/card";

export default function ConversationsPage() {
  return (
    <AppShell>
      <div className="space-y-6">
        <section className="flex flex-col gap-2">
          <p className="muted-label">History</p>
          <h1 className="text-3xl font-semibold text-slate-900">Conversations</h1>
        </section>

        <Card className="p-8 text-center">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-indigo-100 text-xl text-indigo-600">○</div>
          <h2 className="text-xl font-semibold text-slate-900">No conversation history yet</h2>
          <p className="mt-2 max-w-md mx-auto text-sm text-slate-600">
            Conversation records will appear here after a real user interaction is captured by the application.
          </p>
        </Card>
      </div>
    </AppShell>
  );
}
