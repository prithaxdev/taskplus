"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { ChevronDown } from "@hugeicons/core-free-icons";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarSeparator,
  useSidebar,
} from "../ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { HugeiconsIcon } from "@hugeicons/react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { navFooter, navMain, navUtils } from "@/config/nav";
import { currentUser } from "@/config/user";
import { UserMenu } from "./user-menu";

export function DashboardSidebar(props: React.ComponentProps<typeof Sidebar>) {
  const pathname = usePathname();
  const { state, setOpen } = useSidebar();

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(href + "/");
  };

  const [openSections, setOpenSections] = useState<Set<string>>(() => {
    const open = new Set<string>();
    for (const item of navMain) {
      if (item.href !== "/" && item.items && pathname.startsWith(item.href)) {
        open.add(item.title);
      }
    }
    if (open.size === 0) open.add("Projects");
    return open;
  });

  useEffect(() => {
    setOpenSections((prev) => {
      const next = new Set(prev);
      for (const item of navMain) {
        if (item.href !== "/" && item.items && pathname.startsWith(item.href)) {
          next.add(item.title);
        }
      }
      return next;
    });
  }, [pathname]);

  const toggle = (title: string) =>
    setOpenSections((prev) => {
      const next = new Set(prev);
      next.has(title) ? next.delete(title) : next.add(title);
      return next;
    });

  return (
    <Sidebar collapsible="icon" className="lg:border-r-0!" {...props}>
      {/* ── Header ── */}
      <SidebarHeader className="px-3 py-4">
        <div className="flex items-center w-full gap-2 group-data-[collapsible=icon]:justify-center">
          <div className="size-8 rounded-lg bg-amber-400 flex items-center justify-center shrink-0">
            <span className="text-sm font-black text-black">S</span>
          </div>
          <div className="flex flex-col min-w-0 group-data-[collapsible=icon]:hidden">
            <span className="font-bold text-sm text-sidebar-foreground truncate leading-tight">
              Syntax
            </span>
            <span className="text-[10px] text-muted-foreground truncate leading-tight">
              Personal workspace
            </span>
          </div>
        </div>
      </SidebarHeader>

      {/* ── Main nav ── */}
      <SidebarContent className="px-2">
        <SidebarGroup className="p-0 pt-1">
          <SidebarGroupContent>
            <SidebarMenu>
              {navMain.map((item) => {
                const hasItems = !!item.items?.length;
                const isOpen = openSections.has(item.title);
                const active = isActive(item.href);

                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      tooltip={item.title}
                      isActive={active}
                      className="h-9"
                      render={!hasItems ? <Link href={item.href} /> : undefined}
                      onClick={
                        hasItems
                          ? () => {
                              if (state === "collapsed") setOpen(true);
                              toggle(item.title);
                            }
                          : undefined
                      }
                    >
                      <HugeiconsIcon
                        icon={item.icon}
                        className={cn("size-4 shrink-0", item.iconColor)}
                      />
                      <span className="text-sm flex-1">{item.title}</span>
                      {hasItems && (
                        <HugeiconsIcon
                          icon={ChevronDown}
                          className={cn(
                            "size-3.5 text-muted-foreground transition-transform duration-200 group-data-[collapsible=icon]:hidden",
                            isOpen ? "rotate-0" : "-rotate-90",
                          )}
                        />
                      )}
                    </SidebarMenuButton>

                    {hasItems && isOpen && (
                      <SidebarMenuSub>
                        {item.items!.map((sub) => (
                          <SidebarMenuSubItem key={sub.title}>
                            <SidebarMenuSubButton
                              render={<Link href={sub.href} />}
                              isActive={pathname === sub.href}
                            >
                              {sub.icon && (
                                <HugeiconsIcon
                                  icon={sub.icon}
                                  className="size-3.5 text-muted-foreground shrink-0"
                                />
                              )}
                              <span>{sub.title}</span>
                            </SidebarMenuSubButton>
                          </SidebarMenuSubItem>
                        ))}
                      </SidebarMenuSub>
                    )}
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarSeparator />

        {/* ── Utility nav ── */}
        <SidebarGroup className="p-0">
          <SidebarGroupContent>
            <SidebarMenu>
              {navUtils.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    tooltip={item.title}
                    isActive={isActive(item.href)}
                    className="h-9"
                    render={<Link href={item.href} />}
                  >
                    <HugeiconsIcon
                      icon={item.icon}
                      className={cn("size-4 shrink-0", item.iconColor)}
                    />
                    <span className="text-sm flex-1">{item.title}</span>
                    {item.badge && (
                      <NavBadge>{item.badge}</NavBadge>
                    )}
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      {/* ── Footer nav + user row ── */}
      <SidebarFooter className="px-2 pb-3 gap-0">
        <SidebarSeparator className="mb-2" />
        <SidebarMenu>
          {navFooter.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton
                tooltip={item.title}
                isActive={isActive(item.href)}
                className="h-9"
                render={<Link href={item.href} />}
              >
                <HugeiconsIcon
                  icon={item.icon}
                  className={cn("size-4 shrink-0", item.iconColor)}
                />
                <span className="text-sm flex-1">{item.title}</span>
                {item.badge && (
                  <NavBadge>{item.badge}</NavBadge>
                )}
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>

        <SidebarSeparator className="mt-2 mb-2" />
        <UserMenu
          side="top"
          align="start"
          triggerClassName="flex items-center gap-2.5 px-2 py-1.5 rounded-lg hover:bg-sidebar-accent transition-colors w-full group-data-[collapsible=icon]:justify-center"
        >
          <Avatar size="sm" className="shrink-0">
            <AvatarImage
              src={currentUser.avatarUrl}
              alt={`@${currentUser.name}`}
              className="grayscale"
            />
            <AvatarFallback>{currentUser.avatarFallback}</AvatarFallback>
          </Avatar>
          <div className="flex flex-col min-w-0 text-left group-data-[collapsible=icon]:hidden">
            <span className="text-xs font-semibold text-sidebar-foreground truncate leading-tight">
              {currentUser.name}
            </span>
            <span className="text-[10px] text-muted-foreground truncate leading-tight">
              {currentUser.email}
            </span>
          </div>
          <HugeiconsIcon
            icon={ChevronDown}
            className="size-3 text-muted-foreground ml-auto rotate-180 group-data-[collapsible=icon]:hidden"
          />
        </UserMenu>
      </SidebarFooter>
    </Sidebar>
  );
}

function NavBadge({ children }: { children: React.ReactNode }) {
  return (
    <span className="ml-auto flex h-4 min-w-4 items-center justify-center rounded-full bg-amber-400/15 px-1 text-[10px] font-semibold text-amber-400 tabular-nums group-data-[collapsible=icon]:hidden">
      {children}
    </span>
  );
}
