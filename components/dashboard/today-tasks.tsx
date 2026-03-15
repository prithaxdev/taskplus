"use client";

import { todayTasks } from "@/mock-data/dashboard";
import { useDashboardStore } from "@/store/dashboard-store";
import { Input } from "@/components/ui/input";
import {
  CheckmarkSquare01Icon,
  Search01Icon,
  Clock01Icon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { cn } from "@/lib/utils";
import { useState } from "react";

const colorMap: Record<string, { dot: string; badge: string; text: string }> = {
  blue: {
    dot: "bg-blue-400",
    badge: "bg-blue-400/10 border-blue-400/20",
    text: "text-blue-400",
  },
  violet: {
    dot: "bg-violet-400",
    badge: "bg-violet-400/10 border-violet-400/20",
    text: "text-violet-400",
  },
  cyan: {
    dot: "bg-cyan-400",
    badge: "bg-cyan-400/10 border-cyan-400/20",
    text: "text-cyan-400",
  },
  pink: {
    dot: "bg-pink-400",
    badge: "bg-pink-400/10 border-pink-400/20",
    text: "text-pink-400",
  },
  amber: {
    dot: "bg-amber-400",
    badge: "bg-amber-400/10 border-amber-400/20",
    text: "text-amber-400",
  },
  emerald: {
    dot: "bg-emerald-400",
    badge: "bg-emerald-400/10 border-emerald-400/20",
    text: "text-emerald-400",
  },
};

export function TodayTasks() {
  const { tasksSearchQuery, setTasksSearchQuery } = useDashboardStore();
  const [checked, setChecked] = useState<Set<string>>(new Set());

  const filtered = todayTasks.filter(
    (t) =>
      t.name.toLowerCase().includes(tasksSearchQuery.toLowerCase()) ||
      t.projectName.toLowerCase().includes(tasksSearchQuery.toLowerCase()),
  );

  const toggle = (id: string) =>
    setChecked((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });

  return (
    <div className="flex flex-col rounded-xl border border-border bg-card overflow-hidden h-full">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-border shrink-0">
        <div>
          <h2 className="text-sm font-semibold">Today&apos;s Tasks</h2>
          <p className="text-xs text-muted-foreground mt-0.5">
            {filtered.length} task{filtered.length !== 1 ? "s" : ""} remaining
          </p>
        </div>
        <div className="relative">
          <HugeiconsIcon
            icon={Search01Icon}
            className="absolute left-2.5 top-1/2 -translate-y-1/2 size-3.5 text-muted-foreground pointer-events-none"
          />
          <Input
            className="h-7 pl-8 pr-3 text-xs w-40 bg-muted/50 border-transparent focus:border-border focus:bg-background"
            placeholder="Search tasks..."
            value={tasksSearchQuery}
            onChange={(e) => setTasksSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {/* Task list */}
      <div className="flex-1 overflow-y-auto divide-y divide-border/60">
        {filtered.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full py-8 text-muted-foreground">
            <HugeiconsIcon
              icon={CheckmarkSquare01Icon}
              className="size-8 mb-2 opacity-30"
            />
            <p className="text-xs">No tasks found</p>
          </div>
        ) : (
          filtered.map((task) => {
            const done = checked.has(task.id);
            const colors = colorMap[task.projectColor] ?? colorMap.blue;
            return (
              <button
                key={task.id}
                onClick={() => toggle(task.id)}
                className={cn(
                  "w-full flex items-start gap-3 px-4 py-3 text-left",
                  "transition-colors hover:bg-muted/40 group",
                  done && "opacity-50",
                )}
              >
                {/* Custom checkbox */}
                <div
                  className={cn(
                    "mt-0.5 shrink-0 size-4 rounded border flex items-center justify-center transition-all",
                    done
                      ? "bg-emerald-400 border-emerald-400"
                      : "border-border group-hover:border-foreground/40 bg-transparent",
                  )}
                >
                  {done && (
                    <svg
                      viewBox="0 0 10 8"
                      className="size-2.5"
                      fill="none"
                      stroke="oklch(0.145 0 0)"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M1 4l3 3 5-6" />
                    </svg>
                  )}
                </div>

                <div className="flex-1 min-w-0">
                  <p
                    className={cn(
                      "text-sm font-medium truncate leading-tight",
                      done && "line-through text-muted-foreground",
                    )}
                  >
                    {task.name}
                  </p>
                  <div className="flex items-center gap-2 mt-1.5">
                    <span
                      className={cn(
                        "inline-flex items-center gap-1 text-xs px-1.5 py-0.5 rounded border font-medium",
                        colors.badge,
                        colors.text,
                      )}
                    >
                      <span
                        className={cn("size-1.5 rounded-full", colors.dot)}
                      />
                      {task.projectName}
                    </span>
                  </div>
                </div>

                <div className="shrink-0 flex items-center gap-1 text-xs text-muted-foreground mt-0.5">
                  <HugeiconsIcon icon={Clock01Icon} className="size-3" />
                  <span className="tabular-nums">{task.dueDate}</span>
                </div>
              </button>
            );
          })
        )}
      </div>
    </div>
  );
}
