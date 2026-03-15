import { DashboardShell } from "@/components/dashboard/shell";
import { PlaceholderPage } from "@/components/dashboard/placeholder-page";
import { CheckmarkCircle02Icon } from "@hugeicons/core-free-icons";

export const metadata = { title: "Completed Tasks — Taskplus" };

export default function CompletedTasksPage() {
  return (
    <DashboardShell>
      <PlaceholderPage
        icon={CheckmarkCircle02Icon}
        title="Completed Tasks"
        description="All tasks you've shipped. Review your velocity, celebrate wins, and use history to improve future estimates."
        iconColor="text-emerald-400"
        iconBg="bg-emerald-400/10 border-emerald-400/20"
      />
    </DashboardShell>
  );
}
