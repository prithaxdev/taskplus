"use client";

import {
  CheckmarkSquare03Icon,
  FolderLibraryIcon,
  Loading03Icon,
  TaskDone01Icon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { dashboardStats } from "@/mock-data/dashboard";
import { cn } from "@/lib/utils";

const stats = [
  {
    label: "Total Projects",
    key: "totalProjects" as const,
    icon: FolderLibraryIcon,
    accent: "text-amber-400",
    bg: "bg-amber-400/8",
    border: "border-amber-400/20",
  },
  {
    label: "Total Tasks",
    key: "totalTasks" as const,
    icon: CheckmarkSquare03Icon,
    accent: "text-sky-400",
    bg: "bg-sky-400/8",
    border: "border-sky-400/20",
  },
  {
    label: "In Review",
    key: "inReviews" as const,
    icon: Loading03Icon,
    accent: "text-violet-400",
    bg: "bg-violet-400/8",
    border: "border-violet-400/20",
  },
  {
    label: "Completed",
    key: "completedTasks" as const,
    icon: TaskDone01Icon,
    accent: "text-emerald-400",
    bg: "bg-emerald-400/8",
    border: "border-emerald-400/20",
  },
];

export function StatsOverview() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
      {stats.map((stat, i) => {
        const data = dashboardStats[stat.key];
        const isPositive = data.change > 0;
        return (
          <div
            key={stat.key}
            className={cn(
              "relative flex flex-col gap-3 rounded-xl border bg-card p-4 overflow-hidden",
              "transition-all duration-200 hover:ring-1 hover:ring-foreground/10",
              stat.border,
            )}
            style={{ animationDelay: `${i * 60}ms` }}
          >
            {/* Background accent blob */}
            <div
              className={cn(
                "absolute -top-4 -right-4 size-20 rounded-full blur-2xl opacity-30",
                stat.bg.replace("/8", "/40"),
              )}
            />

            <div className="flex items-center justify-between relative">
              <div
                className={cn(
                  "flex size-8 items-center justify-center rounded-lg",
                  stat.bg,
                  stat.border,
                  "border",
                )}
              >
                <HugeiconsIcon
                  icon={stat.icon}
                  className={cn("size-4", stat.accent)}
                />
              </div>
              <span
                className={cn(
                  "text-xs font-medium tabular-nums px-1.5 py-0.5 rounded-md",
                  isPositive
                    ? "text-emerald-400 bg-emerald-400/10"
                    : "text-rose-400 bg-rose-400/10",
                )}
              >
                {isPositive ? "+" : ""}
                {data.change}
              </span>
            </div>

            <div className="relative">
              <div className="text-3xl font-bold tabular-nums tracking-tight leading-none">
                {data.value}
              </div>
              <div className="text-xs text-muted-foreground mt-1.5 font-medium">
                {stat.label}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
