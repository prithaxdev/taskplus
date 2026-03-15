# Taskplus

A developer-focused project management dashboard for tracking tasks, sprints, repository activity, and team analytics — all in one workspace.

![Next.js](https://img.shields.io/badge/Next.js-16-black?style=flat-square&logo=next.js)
![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-38BDF8?style=flat-square&logo=tailwindcss)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript)

## Overview

Taskplus is a full-featured developer dashboard built with Next.js 16 and React 19. It provides a unified interface for managing side projects — from sprint boards and task lists to repository tracking and performance analytics.

## Features

- **Dashboard** — Stats overview, performance chart, today's tasks, and active projects at a glance
- **Projects** — Track all projects with status, progress, due dates, and owner assignment
- **Tasks** — Manage tasks across My Tasks, Today, Backlog, and Completed views
- **Board** — Kanban-style sprint board with milestone tracking
- **Repository** — Browse code, pull requests, issues, and commit history
- **Analytics** — Performance metrics and detailed reports
- **Inbox / Calendar / AI Assistant** — Utility views for communications and scheduling
- **User Menu** — Avatar dropdown with appearance switcher (Light / Dark / System) and account actions
- **Collapsible Sidebar** — Icon-only collapse mode with tooltip navigation
- **Dark Mode** — Default dark theme with full light mode support via `next-themes`

## Tech Stack

| Layer | Library |
|---|---|
| Framework | [Next.js 16](https://nextjs.org) (App Router) |
| UI | [React 19](https://react.dev) |
| Styling | [Tailwind CSS v4](https://tailwindcss.com) |
| Components | [Base UI](https://base-ui.com) via shadcn |
| Icons | [HugeIcons](https://hugeicons.com) |
| Charts | [Recharts](https://recharts.org) |
| State | [Zustand](https://zustand-demo.pmnd.rs) |
| Theme | [next-themes](https://github.com/pacocoursey/next-themes) |
| Language | TypeScript 5 |
| Package Manager | pnpm |

## Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── page.tsx            # Dashboard home
│   ├── projects/           # Projects + sub-routes
│   ├── tasks/              # Tasks + sub-routes
│   ├── board/              # Sprint board + sub-routes
│   ├── repository/         # Repo, PRs, issues, commits
│   ├── analytics/          # Performance + reports
│   └── ...                 # inbox, calendar, ai, settings, etc.
├── components/
│   ├── dashboard/          # Feature components
│   │   ├── shell.tsx       # Shared layout wrapper
│   │   ├── sidebar.tsx     # Collapsible navigation
│   │   ├── header.tsx      # Sticky header with breadcrumb
│   │   ├── user-menu.tsx   # Avatar dropdown
│   │   └── ...             # Dashboard widgets
│   └── ui/                 # Base UI primitives
├── config/
│   ├── nav.ts              # Sidebar nav items and types
│   ├── routes.ts           # Route → breadcrumb mapping
│   └── user.ts             # Current user profile
├── store/
│   └── dashboard-store.ts  # Zustand store for filters
├── mock-data/
│   └── dashboard.ts        # Static mock data
└── hooks/
    └── use-mobile.ts       # useIsMobile hook
```

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm

### Installation

```bash
git clone https://github.com/prithaxdev/taskplus.git
cd taskplus
pnpm install
```

### Development

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
pnpm build
pnpm start
```

## Routes

| Path | Page |
|---|---|
| `/` | Dashboard |
| `/projects` | All Projects |
| `/projects/active` | Active Projects |
| `/projects/archived` | Archived Projects |
| `/tasks` | My Tasks |
| `/tasks/today` | Today |
| `/tasks/backlog` | Backlog |
| `/tasks/completed` | Completed |
| `/board` | Active Sprint |
| `/board/all` | All Boards |
| `/board/milestones` | Milestones |
| `/repository` | Code |
| `/repository/pull-requests` | Pull Requests |
| `/repository/issues` | Issues |
| `/repository/commits` | Commits |
| `/analytics` | Performance |
| `/analytics/reports` | Reports |
| `/inbox` | Inbox |
| `/calendar` | Calendar |
| `/ai` | AI Assistant |
| `/notifications` | Notifications |
| `/settings` | Settings |
| `/help` | Help & Docs |

## License

MIT
