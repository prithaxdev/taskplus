import { DashboardShell } from "@/components/dashboard/shell";
import { StatsOverview } from "@/components/dashboard/stats-overview";
import { PerformanceCard } from "@/components/dashboard/performance-card";

export const metadata = { title: "Analytics — Taskplus" };

export default function AnalyticsPage() {
  return (
    <DashboardShell>
      <main className="flex-1 overflow-y-auto">
        <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 py-5 space-y-5">
          <StatsOverview />
          <div className="max-w-lg">
            <PerformanceCard />
          </div>
        </div>
      </main>
    </DashboardShell>
  );
}
