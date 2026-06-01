"use client";

import {
  CameraIcon,
  HammerIcon,
  HomeIcon,
  NewspaperIcon,
  PencilLineIcon,
  SparklesIcon,
  Wand2Icon,
  type LucideIcon,
} from "lucide-react";
import { usePathname } from "next/navigation";

import { Button } from "@/components/ui/button";
import type { NavigationItem } from "@/lib/navigation";

const navigationIcons: Record<string, LucideIcon> = {
  Home: HomeIcon,
  Writing: PencilLineIcon,
  Reading: NewspaperIcon,
  Shooting: CameraIcon,
  "All projects": HammerIcon,
  "More about me": Wand2Icon,
};

function isNavigationItemActive(item: NavigationItem, pathname: string) {
  return item.href === "/writing"
    ? pathname.startsWith("/writing")
    : pathname === item.href;
}

export const NavigationButton = ({ item }: { item: NavigationItem }) => {
  const pathname = usePathname();
  const Icon = navigationIcons[item.label] ?? SparklesIcon;
  const isActive = isNavigationItemActive(item, pathname);

  return (
    <Button
      className="w-full justify-start"
      variant={isActive ? "default" : "ghost"}
      size="sm"
      tabIndex={-1}
    >
      <Icon className="mr-2 h-4 w-4" />
      <span>{item.label}</span>
      <span className="ml-auto rounded-sm border bg-secondary px-1.5 text-muted-foreground">
        {item.keyboardShortcut}
      </span>
    </Button>
  );
};
