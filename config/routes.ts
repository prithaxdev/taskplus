import {
  Activity01Icon,
  Archive01Icon,
  Bug01Icon,
  Calendar01Icon,
  CheckListIcon,
  CheckmarkCircle02Icon,
  Clock01Icon,
  DashboardSquare01Icon,
  FolderOpenIcon,
  GitBranchIcon,
  GitCommitHorizontal,
  GitMergeIcon,
  GitPullRequestIcon,
  HelpCircleIcon,
  InboxIcon,
  KanbanIcon,
  ListTodo,
  Notification01Icon,
  Rocket01Icon,
  Settings01Icon,
  SparklesIcon,
} from "@hugeicons/core-free-icons";
import type { IconType } from "./nav";

export const routeConfig: Record<string, { label: string; icon: IconType }> = {
  "/": { label: "Dashboard", icon: DashboardSquare01Icon },
  "/projects": { label: "Projects", icon: FolderOpenIcon },
  "/tasks": { label: "Tasks", icon: CheckListIcon },
  "/board": { label: "Board", icon: KanbanIcon },
  "/repository": { label: "Repository", icon: GitBranchIcon },
  "/analytics": { label: "Analytics", icon: Activity01Icon },
  "/inbox": { label: "Inbox", icon: InboxIcon },
  "/calendar": { label: "Calendar", icon: Calendar01Icon },
  "/ai": { label: "AI Assistant", icon: SparklesIcon },
  "/notifications": { label: "Notifications", icon: Notification01Icon },
  "/help": { label: "Help & Docs", icon: HelpCircleIcon },
  "/settings": { label: "Settings", icon: Settings01Icon },
  // Sub-routes
  "/projects/active": { label: "Active Projects", icon: Rocket01Icon },
  "/projects/archived": { label: "Archived", icon: Archive01Icon },
  "/tasks/today": { label: "Today", icon: Clock01Icon },
  "/tasks/backlog": { label: "Backlog", icon: ListTodo },
  "/tasks/completed": { label: "Completed Tasks", icon: CheckmarkCircle02Icon },
  "/board/all": { label: "All Boards", icon: KanbanIcon },
  "/board/milestones": { label: "Milestones", icon: GitMergeIcon },
  "/repository/pull-requests": { label: "Pull Requests", icon: GitPullRequestIcon },
  "/repository/issues": { label: "Issues", icon: Bug01Icon },
  "/repository/commits": { label: "Commits", icon: GitCommitHorizontal },
  "/analytics/reports": { label: "Reports", icon: CheckListIcon },
};

/** Resolve the best matching route entry for a given pathname. */
export function resolveRoute(pathname: string) {
  return (
    routeConfig[pathname] ??
    Object.entries(routeConfig)
      .filter(([k]) => k !== "/" && pathname.startsWith(k))
      .sort((a, b) => b[0].length - a[0].length)[0]?.[1] ??
    routeConfig["/"]
  );
}
