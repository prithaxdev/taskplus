import { DashboardShell } from "@/components/dashboard/shell";
import { PlaceholderPage } from "@/components/dashboard/placeholder-page";
import { Archive01Icon } from "@hugeicons/core-free-icons";

export const metadata = { title: "Archived Projects — Taskplus" };

export default function ArchivedProjectsPage() {
  return (
    <DashboardShell>
      <PlaceholderPage
        icon={Archive01Icon}
        title="Archived Projects"
        description="Projects that have been completed or put on indefinite hold. Browse history and restore any project when needed."
        iconColor="text-muted-foreground"
        iconBg="bg-muted border-border"
      />
    </DashboardShell>
  );
}
