import { DashboardShell } from "@/components/dashboard/shell";
import { PlaceholderPage } from "@/components/dashboard/placeholder-page";
import { Calendar01Icon } from "@hugeicons/core-free-icons";

export const metadata = { title: "Calendar — Taskplus" };

export default function CalendarPage() {
  return (
    <DashboardShell>
      <PlaceholderPage
        icon={Calendar01Icon}
        title="Calendar"
        description="Plan your week, schedule deadlines, and sync with your team's availability in one unified calendar view."
        iconColor="text-orange-400"
        iconBg="bg-orange-400/10 border-orange-400/20"
      />
    </DashboardShell>
  );
}
