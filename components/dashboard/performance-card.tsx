"use client";

import {
  Area,
  AreaChart,
  CartesianGrid,
  ReferenceLine,
  XAxis,
  YAxis,
} from "recharts";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";
import {
  performanceChartData,
  performanceScore,
  performanceChange,
} from "@/mock-data/dashboard";
import { TrendingUp } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

const chartConfig = {
  value: {
    label: "Score",
    color: "oklch(0.85 0.17 75)",
  },
} satisfies ChartConfig;

const maxValue = Math.max(...performanceChartData.map((d) => d.value));

export function PerformanceCard() {
  return (
    <div className="flex flex-col gap-4 rounded-xl border border-amber-400/20 bg-card p-4 h-full">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-xs text-muted-foreground font-medium uppercase tracking-widest">
            Performance Score
          </p>
          <div className="flex items-end gap-2 mt-1">
            <span className="text-4xl font-bold tabular-nums tracking-tight leading-none">
              {performanceScore}
            </span>
            <span className="text-sm text-muted-foreground mb-0.5">/100</span>
          </div>
        </div>
        <div className="flex items-center gap-1.5 text-emerald-400 bg-emerald-400/10 px-2 py-1 rounded-lg text-xs font-semibold">
          <HugeiconsIcon icon={TrendingUp} className="size-3.5" />
          +{performanceChange}%
        </div>
      </div>

      {/* Thin horizontal rule */}
      <div className="h-px bg-border" />

      <ChartContainer
        config={chartConfig}
        className="h-[130px] w-full flex-1 min-h-0"
      >
        <AreaChart
          data={performanceChartData}
          margin={{ top: 4, right: 4, bottom: 0, left: -28 }}
        >
          <defs>
            <linearGradient id="perfGradient" x1="0" y1="0" x2="0" y2="1">
              <stop
                offset="5%"
                stopColor="oklch(0.85 0.17 75)"
                stopOpacity={0.35}
              />
              <stop
                offset="95%"
                stopColor="oklch(0.85 0.17 75)"
                stopOpacity={0.02}
              />
            </linearGradient>
          </defs>
          <CartesianGrid
            strokeDasharray="3 3"
            stroke="oklch(1 0 0 / 6%)"
            vertical={false}
          />
          <XAxis
            dataKey="day"
            tick={{ fontSize: 10, fill: "oklch(0.556 0 0)" }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            domain={[70, 100]}
            tick={{ fontSize: 10, fill: "oklch(0.556 0 0)" }}
            axisLine={false}
            tickLine={false}
          />
          <ReferenceLine
            y={maxValue}
            stroke="oklch(0.85 0.17 75)"
            strokeDasharray="4 4"
            strokeOpacity={0.4}
          />
          <ChartTooltip
            content={
              <ChartTooltipContent
                indicator="dot"
                labelClassName="font-medium"
              />
            }
            cursor={{ stroke: "oklch(0.85 0.17 75)", strokeOpacity: 0.4 }}
          />
          <Area
            type="monotone"
            dataKey="value"
            stroke="oklch(0.85 0.17 75)"
            strokeWidth={2}
            fill="url(#perfGradient)"
            dot={(props) => {
              const { cx, cy, payload } = props;
              if (!payload.isHighlight) return <g key={`dot-${cx}`} />;
              return (
                <g key={`dot-${cx}`}>
                  <circle
                    cx={cx}
                    cy={cy}
                    r={5}
                    fill="oklch(0.85 0.17 75)"
                    stroke="oklch(0.145 0 0)"
                    strokeWidth={2}
                  />
                </g>
              );
            }}
            activeDot={{ r: 5, fill: "oklch(0.85 0.17 75)" }}
          />
        </AreaChart>
      </ChartContainer>

      <div className="flex items-center gap-4 text-xs text-muted-foreground pt-1 border-t border-border">
        <span>
          Peak:{" "}
          <span className="text-amber-400 font-semibold tabular-nums">
            {maxValue}
          </span>
        </span>
        <span>
          This week:{" "}
          <span className="text-foreground font-medium">
            {performanceChartData.length} days tracked
          </span>
        </span>
      </div>
    </div>
  );
}
