"use client";

import { welcomeSummary } from "@/mock-data/dashboard";

export function WelcomeBanner() {
  return (
    <div className="relative flex items-center justify-between gap-4 rounded-xl border border-amber-400/20 bg-linear-to-r from-amber-400/5 via-amber-400/3 to-transparent px-5 py-4 overflow-hidden">
      {/* Decorative line */}
      <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-linear-to-b from-amber-400/60 via-amber-400/30 to-transparent rounded-l-xl" />

      <div className="pl-2">
        <p className="text-xs text-amber-400/80 font-medium uppercase tracking-widest mb-1">
          Good morning
        </p>
        <h1 className="text-xl font-bold tracking-tight">
          Welcome back, {welcomeSummary.userName} 👋
        </h1>
        <p className="text-xs text-muted-foreground mt-1">
          Here&apos;s a quick look at your workspace today.
        </p>
      </div>
    </div>
  );
}
