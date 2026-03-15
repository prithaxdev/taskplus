"use client";

import { usePathname } from "next/navigation";
import { HugeiconsIcon } from "@hugeicons/react";
import { SidebarTrigger } from "../ui/sidebar";
import { ThemeToggle } from "../theme-toggle";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { resolveRoute } from "@/config/routes";
import { currentUser } from "@/config/user";
import { UserMenu } from "./user-menu";

export function DashboardHeader() {
  const pathname = usePathname();
  const current = resolveRoute(pathname);

  return (
    <header className="flex items-center justify-between gap-4 px-4 sm:px-6 py-3 border-b bg-card sticky top-0 z-10 w-full shrink-0">
      <div className="flex items-center gap-3">
        <SidebarTrigger className="-ml-2" />
        <div className="flex items-center gap-2 text-muted-foreground">
          <HugeiconsIcon icon={current.icon} className="size-4" />
          <span className="text-sm font-medium">{current.label}</span>
        </div>
      </div>
      <div className="flex items-center gap-2 sm:gap-3">
        <ThemeToggle />
        <UserMenu side="bottom" align="end">
          <Avatar size="sm">
            <AvatarImage
              src={currentUser.avatarUrl}
              alt={`@${currentUser.name}`}
              className="grayscale"
            />
            <AvatarFallback>{currentUser.avatarFallback}</AvatarFallback>
          </Avatar>
        </UserMenu>
      </div>
    </header>
  );
}
