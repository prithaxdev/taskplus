import { HugeiconsIcon } from "@hugeicons/react";
import { cn } from "@/lib/utils";

type IconType = React.ComponentProps<typeof HugeiconsIcon>["icon"];

interface PlaceholderPageProps {
  icon: IconType;
  title: string;
  description: string;
  iconColor: string;
  iconBg: string;
}

export function PlaceholderPage({
  icon,
  title,
  description,
  iconColor,
  iconBg,
}: PlaceholderPageProps) {
  return (
    <main className="flex-1 overflow-y-auto flex items-center justify-center">
      <div className="flex flex-col items-center text-center max-w-sm px-6 py-16">
        <div
          className={cn(
            "size-16 rounded-2xl flex items-center justify-center mb-5 border",
            iconBg,
          )}
        >
          <HugeiconsIcon icon={icon} className={cn("size-8", iconColor)} />
        </div>
        <h1 className="text-2xl font-bold tracking-tight mb-2">{title}</h1>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {description}
        </p>
      </div>
    </main>
  );
}
