import { DashboardShell } from "@/components/dashboard/shell";
import { PlaceholderPage } from "@/components/dashboard/placeholder-page";
import { ListTodo } from "@hugeicons/core-free-icons";

export const metadata = { title: "Backlog — Taskplus" };

export default function BacklogPage() {
  return (
    <DashboardShell>
      <PlaceholderPage
        icon={ListTodo}
        title="Backlog"
        description="Unscheduled tasks waiting to be prioritized. Groom your backlog, estimate effort, and pull into the next sprint."
        iconColor="text-sky-400"
        iconBg="bg-sky-400/10 border-sky-400/20"
      />
    </DashboardShell>
  );
}
