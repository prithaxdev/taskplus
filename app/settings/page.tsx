import { DashboardShell } from "@/components/dashboard/shell";
import { PlaceholderPage } from "@/components/dashboard/placeholder-page";
import { Settings01Icon } from "@hugeicons/core-free-icons";

export const metadata = { title: "Settings — Taskplus" };

export default function SettingsPage() {
  return (
    <DashboardShell>
      <PlaceholderPage
        icon={Settings01Icon}
        title="Settings"
        description="Configure your workspace preferences, manage integrations, notification rules, and account security."
        iconColor="text-muted-foreground"
        iconBg="bg-muted border-border"
      />
    </DashboardShell>
  );
}
