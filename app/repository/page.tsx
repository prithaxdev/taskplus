import { DashboardShell } from "@/components/dashboard/shell";
import { PlaceholderPage } from "@/components/dashboard/placeholder-page";
import { GitBranchIcon } from "@hugeicons/core-free-icons";

export const metadata = { title: "Repository — Taskplus" };

export default function RepositoryPage() {
  return (
    <DashboardShell>
      <PlaceholderPage
        icon={GitBranchIcon}
        title="Repository"
        description="Browse code, review pull requests, track issues, and explore commit history — all in one place."
        iconColor="text-emerald-400"
        iconBg="bg-emerald-400/10 border-emerald-400/20"
      />
    </DashboardShell>
  );
}
