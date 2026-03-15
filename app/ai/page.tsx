import { DashboardShell } from "@/components/dashboard/shell";
import { PlaceholderPage } from "@/components/dashboard/placeholder-page";
import { SparklesIcon } from "@hugeicons/core-free-icons";

export const metadata = { title: "AI Assistant — Taskplus" };

export default function AIPage() {
  return (
    <DashboardShell>
      <PlaceholderPage
        icon={SparklesIcon}
        title="AI Assistant"
        description="Generate task breakdowns, summarize project status, write docs, and get smart suggestions — powered by Taskplus AI."
        iconColor="text-violet-400"
        iconBg="bg-violet-400/10 border-violet-400/20"
      />
    </DashboardShell>
  );
}
