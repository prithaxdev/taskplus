"use client";

import { useTheme } from "next-themes";
import { useRouter } from "next/navigation";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  AccountSetting01Icon,
  KeyboardIcon,
  LaptopIcon,
  Logout01Icon,
  Moon02Icon,
  Sun01Icon,
  UserCircleIcon,
  UserEdit01Icon,
} from "@hugeicons/core-free-icons";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { cn } from "@/lib/utils";
import { currentUser } from "@/config/user";

interface UserMenuProps {
  children: React.ReactNode;
  side?: "top" | "bottom" | "left" | "right";
  align?: "start" | "center" | "end";
  triggerClassName?: string;
}

export function UserMenu({
  children,
  side = "bottom",
  align = "end",
  triggerClassName,
}: UserMenuProps) {
  const { theme, setTheme } = useTheme();
  const router = useRouter();

  const themeIcon =
    theme === "dark" ? Moon02Icon : theme === "light" ? Sun01Icon : LaptopIcon;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        className={cn(
          "outline-none focus:outline-none cursor-pointer",
          triggerClassName,
        )}
      >
        {children}
      </DropdownMenuTrigger>
      <DropdownMenuContent side={side} align={align} className="w-56">
        {/* User info — non-interactive */}
        <div className="flex items-center gap-2.5 px-2 py-1.5">
          <Avatar size="sm" className="shrink-0">
            <AvatarImage
              src={currentUser.avatarUrl}
              alt={`@${currentUser.name}`}
              className="grayscale"
            />
            <AvatarFallback>{currentUser.avatarFallback}</AvatarFallback>
          </Avatar>
          <div className="flex flex-col min-w-0">
            <span className="text-xs font-semibold text-foreground truncate leading-tight">
              {currentUser.name}
            </span>
            <span className="text-[10px] text-muted-foreground truncate leading-tight">
              {currentUser.email}
            </span>
          </div>
        </div>

        <DropdownMenuSeparator />

        <DropdownMenuGroup>
          <DropdownMenuItem onClick={() => router.push("/profile")}>
            <HugeiconsIcon icon={UserCircleIcon} />
            View Profile
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => router.push("/profile/edit")}>
            <HugeiconsIcon icon={UserEdit01Icon} />
            Edit Profile
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => router.push("/settings")}>
            <HugeiconsIcon icon={AccountSetting01Icon} />
            Settings
          </DropdownMenuItem>
        </DropdownMenuGroup>

        <DropdownMenuSeparator />

        <DropdownMenuGroup>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>
              <HugeiconsIcon icon={themeIcon} />
              Appearance
            </DropdownMenuSubTrigger>
            <DropdownMenuSubContent>
              <DropdownMenuRadioGroup
                value={theme ?? "system"}
                onValueChange={setTheme}
              >
                <DropdownMenuRadioItem value="light">
                  <HugeiconsIcon icon={Sun01Icon} />
                  Light
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="dark">
                  <HugeiconsIcon icon={Moon02Icon} />
                  Dark
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="system">
                  <HugeiconsIcon icon={LaptopIcon} />
                  System
                </DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuSubContent>
          </DropdownMenuSub>
          <DropdownMenuItem>
            <HugeiconsIcon icon={KeyboardIcon} />
            Keyboard Shortcuts
            <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>

        <DropdownMenuSeparator />

        <DropdownMenuItem variant="destructive">
          <HugeiconsIcon icon={Logout01Icon} />
          Sign Out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
