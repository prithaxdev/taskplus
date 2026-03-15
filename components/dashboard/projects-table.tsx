"use client";

import { projects } from "@/mock-data/dashboard";
import { useDashboardStore } from "@/store/dashboard-store";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Search01Icon,
  FilterIcon,
  UserIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { cn } from "@/lib/utils";
import type { ProjectStatus } from "@/mock-data/dashboard";

const colorMap: Record<string, string> = {
  blue: "bg-blue-400",
  violet: "bg-violet-400",
  cyan: "bg-cyan-400",
  pink: "bg-pink-400",
  amber: "bg-amber-400",
};

const statusConfig: Record<
  ProjectStatus,
  { label: string; className: string }
> = {
  in_progress: {
    label: "In Progress",
    className:
      "text-sky-400 bg-sky-400/10 border-sky-400/20",
  },
  completed: {
    label: "Completed",
    className:
      "text-emerald-400 bg-emerald-400/10 border-emerald-400/20",
  },
  on_hold: {
    label: "On Hold",
    className:
      "text-amber-400 bg-amber-400/10 border-amber-400/20",
  },
};

const progressColorMap: Record<string, string> = {
  blue: "bg-blue-400",
  violet: "bg-violet-400",
  cyan: "bg-cyan-400",
  pink: "bg-pink-400",
  amber: "bg-amber-400",
};

export function ProjectsTable() {
  const {
    projectsSearchQuery,
    projectStatusFilter,
    setProjectsSearchQuery,
    setProjectStatusFilter,
  } = useDashboardStore();

  const filtered = projects.filter((p) => {
    const matchesSearch =
      p.name.toLowerCase().includes(projectsSearchQuery.toLowerCase()) ||
      p.ownerName.toLowerCase().includes(projectsSearchQuery.toLowerCase());
    const matchesStatus =
      projectStatusFilter === "all" || p.status === projectStatusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="flex flex-col rounded-xl border border-border bg-card overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between gap-3 px-4 py-3 border-b border-border shrink-0 flex-wrap">
        <div>
          <h2 className="text-sm font-semibold">Projects</h2>
          <p className="text-xs text-muted-foreground mt-0.5">
            {filtered.length} of {projects.length} projects
          </p>
        </div>
        <div className="flex items-center gap-2">
          <div className="relative">
            <HugeiconsIcon
              icon={Search01Icon}
              className="absolute left-2.5 top-1/2 -translate-y-1/2 size-3.5 text-muted-foreground pointer-events-none"
            />
            <Input
              className="h-7 pl-8 pr-3 text-xs w-44 bg-muted/50 border-transparent focus:border-border focus:bg-background"
              placeholder="Search projects..."
              value={projectsSearchQuery}
              onChange={(e) => setProjectsSearchQuery(e.target.value)}
            />
          </div>
          <Select
            value={projectStatusFilter}
            onValueChange={(v) =>
              setProjectStatusFilter(v as ProjectStatus | "all")
            }
          >
            <SelectTrigger className="h-7 text-xs w-32 bg-muted/50 border-transparent gap-1.5">
              <HugeiconsIcon icon={FilterIcon} className="size-3.5" />
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All status</SelectItem>
              <SelectItem value="in_progress">In Progress</SelectItem>
              <SelectItem value="completed">Completed</SelectItem>
              <SelectItem value="on_hold">On Hold</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Table */}
      <div className="flex-1 overflow-auto">
        <Table>
          <TableHeader>
            <TableRow className="border-border/60 hover:bg-transparent">
              <TableHead className="text-xs font-medium text-muted-foreground pl-4">
                Project
              </TableHead>
              <TableHead className="text-xs font-medium text-muted-foreground">
                Status
              </TableHead>
              <TableHead className="text-xs font-medium text-muted-foreground">
                Progress
              </TableHead>
              <TableHead className="text-xs font-medium text-muted-foreground">
                Tasks
              </TableHead>
              <TableHead className="text-xs font-medium text-muted-foreground">
                Owner
              </TableHead>
              <TableHead className="text-xs font-medium text-muted-foreground">
                Due Date
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filtered.slice(0, 8).map((project) => {
              const status = statusConfig[project.status];
              const dotColor = colorMap[project.color] ?? "bg-foreground";
              const progressColor =
                progressColorMap[project.color] ?? "bg-primary";

              return (
                <TableRow
                  key={project.id}
                  className="border-border/40 hover:bg-muted/30 cursor-pointer group"
                >
                  {/* Name */}
                  <TableCell className="pl-4">
                    <div className="flex items-center gap-2.5">
                      <span
                        className={cn("size-2 rounded-full shrink-0", dotColor)}
                      />
                      <span className="text-sm font-medium group-hover:text-foreground transition-colors">
                        {project.name}
                      </span>
                    </div>
                  </TableCell>

                  {/* Status */}
                  <TableCell>
                    <span
                      className={cn(
                        "inline-flex items-center px-2 py-0.5 rounded border text-xs font-medium",
                        status.className,
                      )}
                    >
                      {status.label}
                    </span>
                  </TableCell>

                  {/* Progress */}
                  <TableCell>
                    <div className="flex items-center gap-2 min-w-[100px]">
                      <div className="flex-1 h-1.5 rounded-full bg-muted overflow-hidden">
                        <div
                          className={cn(
                            "h-full rounded-full transition-all",
                            progressColor,
                          )}
                          style={{ width: `${project.progress}%` }}
                        />
                      </div>
                      <span className="text-xs tabular-nums text-muted-foreground w-8 text-right">
                        {project.progress}%
                      </span>
                    </div>
                  </TableCell>

                  {/* Tasks */}
                  <TableCell>
                    <span className="text-xs tabular-nums">
                      <span className="text-foreground font-medium">
                        {project.completedTasks}
                      </span>
                      <span className="text-muted-foreground">
                        /{project.totalTasks}
                      </span>
                    </span>
                  </TableCell>

                  {/* Owner */}
                  <TableCell>
                    <div className="flex items-center gap-1.5">
                      <div className="size-5 rounded-full bg-muted flex items-center justify-center shrink-0">
                        <HugeiconsIcon
                          icon={UserIcon}
                          className="size-3 text-muted-foreground"
                        />
                      </div>
                      <span className="text-xs text-muted-foreground">
                        {project.ownerName}
                      </span>
                    </div>
                  </TableCell>

                  {/* Due Date */}
                  <TableCell>
                    <span className="text-xs text-muted-foreground tabular-nums">
                      {project.dueDate}
                    </span>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>

        {filtered.length === 0 && (
          <div className="flex items-center justify-center py-12 text-muted-foreground text-xs">
            No projects match your filters
          </div>
        )}
      </div>

      {filtered.length > 8 && (
        <div className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
          Showing 8 of {filtered.length} projects
        </div>
      )}
    </div>
  );
}
