import { DashboardShell } from "@/components/dashboard/shell";
import { PlaceholderPage } from "@/components/dashboard/placeholder-page";
import { Rocket01Icon } from "@hugeicons/core-free-icons";

export const metadata = { title: "Active Projects — Taskplus" };

export default function ActiveProjectsPage() {
  return (
    <DashboardShell>
      <PlaceholderPage
        icon={Rocket01Icon}
        title="Active Projects"
        description="All projects currently in progress. Track progress, deadlines, and team ownership across your active work."
        iconColor="text-amber-400"
        iconBg="bg-amber-400/10 border-amber-400/20"
      />
    </DashboardShell>
  );
}
