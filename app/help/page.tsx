import { DashboardShell } from "@/components/dashboard/shell";
import { PlaceholderPage } from "@/components/dashboard/placeholder-page";
import { HelpCircleIcon } from "@hugeicons/core-free-icons";

export const metadata = { title: "Help & Docs — Taskplus" };

export default function HelpPage() {
  return (
    <DashboardShell>
      <PlaceholderPage
        icon={HelpCircleIcon}
        title="Help & Docs"
        description="Browse documentation, keyboard shortcuts, tutorials, and reach out to support when you need a hand."
        iconColor="text-sky-400"
        iconBg="bg-sky-400/10 border-sky-400/20"
      />
    </DashboardShell>
  );
}
