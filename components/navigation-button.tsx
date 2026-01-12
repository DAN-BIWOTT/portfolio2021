"use client";

import { usePathname } from "next/navigation";
import {
  SparklesIcon,
  Wand2Icon,
  HammerIcon,
  NewspaperIcon,
  CameraIcon,
  PencilLineIcon,
  type LucideIcon,
} from "lucide-react";

import { Button } from "@/components/ui/button";

export const NavigationButton = ({
  label,
  keyboardShortcut,
}: {
  label: string;
  keyboardShortcut: number;
}) => {
  const pathname = usePathname();

  let Icon: LucideIcon;
  let isActive = false;

  switch (label) {
    case "Home":
      Icon = SparklesIcon;
      isActive = pathname === "/";
      break;
    case "Writing":
      Icon = PencilLineIcon;
      isActive = pathname.startsWith("/writing") || pathname.startsWith("/drafts");
      break;
    case "Reading":
      Icon = NewspaperIcon;
      isActive = pathname === "/reading";
      break;
    case "Shooting":
      Icon = CameraIcon;
      isActive = pathname === "/shooting";
      break;
    case "All projects":
      Icon = HammerIcon;
      isActive = pathname === "/all-projects";
      break;
    case "More about me":
      Icon = Wand2Icon;
      isActive = pathname === "/more-about-me";
      break;
    default:
      Icon = SparklesIcon;
  }

  return (
    <Button
      className="w-full justify-start"
      variant={isActive ? "default" : "ghost"}
      size="sm"
      tabIndex={-1}
    >
      <Icon className="mr-2 h-4 w-4" />
      <span>{label}</span>
      <span className="ml-auto rounded-sm border bg-secondary px-1.5 text-muted-foreground">
        {keyboardShortcut}
      </span>
    </Button>
  );
};
