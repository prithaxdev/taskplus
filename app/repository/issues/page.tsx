import { DashboardShell } from "@/components/dashboard/shell";
import { PlaceholderPage } from "@/components/dashboard/placeholder-page";
import { Bug01Icon } from "@hugeicons/core-free-icons";

export const metadata = { title: "Issues — Taskplus" };

export default function IssuesPage() {
  return (
    <DashboardShell>
      <PlaceholderPage
        icon={Bug01Icon}
        title="Issues"
        description="Track bugs, feature requests, and technical debt. Label, assign, and prioritize issues to keep the backlog clean."
        iconColor="text-rose-400"
        iconBg="bg-rose-400/10 border-rose-400/20"
      />
    </DashboardShell>
  );
}
