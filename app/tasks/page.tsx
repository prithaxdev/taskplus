import { DashboardShell } from "@/components/dashboard/shell";
import { TodayTasks } from "@/components/dashboard/today-tasks";

export const metadata = { title: "Tasks — Taskplus" };

export default function TasksPage() {
  return (
    <DashboardShell>
      <main className="flex-1 overflow-y-auto p-4 sm:p-6">
        <div className="mx-auto max-w-2xl h-full min-h-[500px] flex flex-col">
          <TodayTasks />
        </div>
      </main>
    </DashboardShell>
  );
}
