import { DashboardShell } from "@/components/dashboard/shell";
import { PlaceholderPage } from "@/components/dashboard/placeholder-page";
import { KanbanIcon } from "@hugeicons/core-free-icons";

export const metadata = { title: "All Boards — Taskplus" };

export default function AllBoardsPage() {
  return (
    <DashboardShell>
      <PlaceholderPage
        icon={KanbanIcon}
        title="All Boards"
        description="Browse every Kanban board across all projects. Switch between team boards, personal boards, and archived sprints."
        iconColor="text-violet-400"
        iconBg="bg-violet-400/10 border-violet-400/20"
      />
    </DashboardShell>
  );
}
