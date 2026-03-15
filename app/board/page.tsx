import { DashboardShell } from "@/components/dashboard/shell";
import { PlaceholderPage } from "@/components/dashboard/placeholder-page";
import { KanbanIcon } from "@hugeicons/core-free-icons";

export const metadata = { title: "Board — Taskplus" };

export default function BoardPage() {
  return (
    <DashboardShell>
      <PlaceholderPage
        icon={KanbanIcon}
        title="Board"
        description="Visualize your sprint progress with Kanban boards. Drag cards across columns, track milestones, and manage active sprints."
        iconColor="text-violet-400"
        iconBg="bg-violet-400/10 border-violet-400/20"
      />
    </DashboardShell>
  );
}
