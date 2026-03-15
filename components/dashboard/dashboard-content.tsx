import { WelcomeBanner } from "./welcome-banner";
import { StatsOverview } from "./stats-overview";
import { PerformanceCard } from "./performance-card";
import { TodayTasks } from "./today-tasks";
import { ProjectsTable } from "./projects-table";

export function DashboardContent() {
  return (
    <main className="flex-1 overflow-y-auto">
      <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 py-5 space-y-5">
        {/* Welcome */}
        <WelcomeBanner />

        {/* Stats row */}
        <StatsOverview />

        {/* Middle row: performance chart + today tasks */}
        <div className="grid grid-cols-1 lg:grid-cols-[340px_1fr] gap-5">
          <PerformanceCard />
          <div className="min-h-[320px]">
            <TodayTasks />
          </div>
        </div>

        {/* Projects table */}
        <ProjectsTable />
      </div>
    </main>
  );
}
