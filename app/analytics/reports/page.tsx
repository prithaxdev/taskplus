import { DashboardShell } from "@/components/dashboard/shell";
import { PlaceholderPage } from "@/components/dashboard/placeholder-page";
import { CheckListIcon } from "@hugeicons/core-free-icons";

export const metadata = { title: "Reports — Taskplus" };

export default function ReportsPage() {
  return (
    <DashboardShell>
      <PlaceholderPage
        icon={CheckListIcon}
        title="Reports"
        description="Export detailed reports on team velocity, project burndown, task completion rates, and sprint retrospectives."
        iconColor="text-rose-400"
        iconBg="bg-rose-400/10 border-rose-400/20"
      />
    </DashboardShell>
  );
}
