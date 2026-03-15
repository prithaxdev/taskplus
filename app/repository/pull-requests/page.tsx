import { DashboardShell } from "@/components/dashboard/shell";
import { PlaceholderPage } from "@/components/dashboard/placeholder-page";
import { GitPullRequestIcon } from "@hugeicons/core-free-icons";

export const metadata = { title: "Pull Requests — Taskplus" };

export default function PullRequestsPage() {
  return (
    <DashboardShell>
      <PlaceholderPage
        icon={GitPullRequestIcon}
        title="Pull Requests"
        description="Review open PRs, leave feedback, approve changes, and track merge status across all branches."
        iconColor="text-emerald-400"
        iconBg="bg-emerald-400/10 border-emerald-400/20"
      />
    </DashboardShell>
  );
}
