import { DashboardShell } from "@/components/dashboard/shell";
import { PlaceholderPage } from "@/components/dashboard/placeholder-page";
import { Notification01Icon } from "@hugeicons/core-free-icons";

export const metadata = { title: "Notifications — Taskplus" };

export default function NotificationsPage() {
  return (
    <DashboardShell>
      <PlaceholderPage
        icon={Notification01Icon}
        title="Notifications"
        description="You have 5 unread notifications — task updates, mentions, deadline reminders, and team activity."
        iconColor="text-amber-400"
        iconBg="bg-amber-400/10 border-amber-400/20"
      />
    </DashboardShell>
  );
}
