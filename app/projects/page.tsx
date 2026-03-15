import { DashboardShell } from "@/components/dashboard/shell";
import { ProjectsTable } from "@/components/dashboard/projects-table";

export const metadata = { title: "Projects — Taskplus" };

export default function ProjectsPage() {
  return (
    <DashboardShell>
      <main className="flex-1 overflow-y-auto">
        <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 py-5">
          <ProjectsTable />
        </div>
      </main>
    </DashboardShell>
  );
}
