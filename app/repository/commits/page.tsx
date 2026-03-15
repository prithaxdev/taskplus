import { DashboardShell } from "@/components/dashboard/shell";
import { PlaceholderPage } from "@/components/dashboard/placeholder-page";
import { GitCommitHorizontal } from "@hugeicons/core-free-icons";

export const metadata = { title: "Commits — Taskplus" };

export default function CommitsPage() {
  return (
    <DashboardShell>
      <PlaceholderPage
        icon={GitCommitHorizontal}
        title="Commits"
        description="Browse the full commit history, filter by author or branch, and link commits directly to tasks and issues."
        iconColor="text-emerald-400"
        iconBg="bg-emerald-400/10 border-emerald-400/20"
      />
    </DashboardShell>
  );
}
