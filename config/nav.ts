import {
  Activity01Icon,
  Archive01Icon,
  Bug01Icon,
  Calendar01Icon,
  CheckListIcon,
  CheckmarkCircle02Icon,
  Clock01Icon,
  ComputerTerminal01Icon,
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
  Target01Icon,
} from "@hugeicons/core-free-icons";
import type { HugeiconsIcon } from "@hugeicons/react";

export type IconType = React.ComponentProps<typeof HugeiconsIcon>["icon"];

export type SubItem = {
  title: string;
  href: string;
  icon?: IconType;
};

export type NavItem = {
  title: string;
  icon: IconType;
  iconColor: string;
  href: string;
  badge?: string;
  items?: SubItem[];
};

export const navMain: NavItem[] = [
  {
    title: "Dashboard",
    icon: DashboardSquare01Icon,
    href: "/",
    iconColor: "text-primary",
  },
  {
    title: "Projects",
    icon: FolderOpenIcon,
    href: "/projects",
    iconColor: "text-amber-400",
    items: [
      { title: "All Projects", href: "/projects", icon: FolderOpenIcon },
      { title: "Active", href: "/projects/active", icon: Rocket01Icon },
      { title: "Archived", href: "/projects/archived", icon: Archive01Icon },
    ],
  },
  {
    title: "Tasks",
    icon: CheckListIcon,
    href: "/tasks",
    iconColor: "text-sky-400",
    items: [
      { title: "My Tasks", href: "/tasks", icon: CheckListIcon },
      { title: "Today", href: "/tasks/today", icon: Clock01Icon },
      { title: "Backlog", href: "/tasks/backlog", icon: ListTodo },
      { title: "Completed", href: "/tasks/completed", icon: CheckmarkCircle02Icon },
    ],
  },
  {
    title: "Board",
    icon: KanbanIcon,
    href: "/board",
    iconColor: "text-violet-400",
    items: [
      { title: "Active Sprint", href: "/board", icon: Target01Icon },
      { title: "All Boards", href: "/board/all", icon: KanbanIcon },
      { title: "Milestones", href: "/board/milestones", icon: GitMergeIcon },
    ],
  },
  {
    title: "Repository",
    icon: GitBranchIcon,
    href: "/repository",
    iconColor: "text-emerald-400",
    items: [
      { title: "Code", href: "/repository", icon: ComputerTerminal01Icon },
      { title: "Pull Requests", href: "/repository/pull-requests", icon: GitPullRequestIcon },
      { title: "Issues", href: "/repository/issues", icon: Bug01Icon },
      { title: "Commits", href: "/repository/commits", icon: GitCommitHorizontal },
    ],
  },
  {
    title: "Analytics",
    icon: Activity01Icon,
    href: "/analytics",
    iconColor: "text-rose-400",
    items: [
      { title: "Performance", href: "/analytics", icon: Activity01Icon },
      { title: "Reports", href: "/analytics/reports", icon: CheckListIcon },
    ],
  },
];

export const navUtils: NavItem[] = [
  {
    title: "Inbox",
    icon: InboxIcon,
    href: "/inbox",
    iconColor: "text-cyan-400",
    badge: "3",
  },
  {
    title: "Calendar",
    icon: Calendar01Icon,
    href: "/calendar",
    iconColor: "text-orange-400",
  },
  {
    title: "AI Assistant",
    icon: SparklesIcon,
    href: "/ai",
    iconColor: "text-violet-400",
  },
];

export const navFooter: NavItem[] = [
  {
    title: "Notifications",
    icon: Notification01Icon,
    href: "/notifications",
    iconColor: "text-amber-400",
    badge: "5",
  },
  {
    title: "Help & Docs",
    icon: HelpCircleIcon,
    href: "/help",
    iconColor: "text-muted-foreground",
  },
  {
    title: "Settings",
    icon: Settings01Icon,
    href: "/settings",
    iconColor: "text-muted-foreground",
  },
];
