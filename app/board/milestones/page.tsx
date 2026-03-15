import { DashboardShell } from "@/components/dashboard/shell";
import { PlaceholderPage } from "@/components/dashboard/placeholder-page";
import { GitMergeIcon } from "@hugeicons/core-free-icons";

export const metadata = { title: "Milestones — Taskplus" };

export default function MilestonesPage() {
  return (
    <DashboardShell>
      <PlaceholderPage
        icon={GitMergeIcon}
        title="Milestones"
        description="Track major project milestones, release targets, and key deliverables. See what's on track and what needs attention."
        iconColor="text-violet-400"
        iconBg="bg-violet-400/10 border-violet-400/20"
      />
    </DashboardShell>
  );
}
