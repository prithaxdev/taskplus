import { DashboardShell } from "@/components/dashboard/shell";
import { PlaceholderPage } from "@/components/dashboard/placeholder-page";
import { InboxIcon } from "@hugeicons/core-free-icons";

export const metadata = { title: "Inbox — Taskplus" };

export default function InboxPage() {
  return (
    <DashboardShell>
      <PlaceholderPage
        icon={InboxIcon}
        title="Inbox"
        description="Stay on top of mentions, task assignments, and project updates. 3 unread messages waiting for you."
        iconColor="text-cyan-400"
        iconBg="bg-cyan-400/10 border-cyan-400/20"
      />
    </DashboardShell>
  );
}
