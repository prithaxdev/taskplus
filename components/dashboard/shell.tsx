import { DashboardSidebar } from "./sidebar";
import { DashboardHeader } from "./header";
import { SidebarProvider } from "@/components/ui/sidebar";

export function DashboardShell({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider className="bg-sidebar">
      <DashboardSidebar />
      <div className="h-svh overflow-hidden lg:pt-2 w-full">
        <div className="lg:border lg:rounded-md overflow-hidden flex flex-col h-full w-full bg-background">
          <DashboardHeader />
          {children}
        </div>
      </div>
    </SidebarProvider>
  );
}
