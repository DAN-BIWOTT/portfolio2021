import Link from "next/link";
import {
  ArrowUpRightIcon,
  CommandIcon,
  GithubIcon,
  MailIcon,
  type LucideIcon,
} from "lucide-react";

import { ThemeToggleIcon } from "@/components/theme-toggle-icon";
import { ThemeToggleButton } from "@/components/theme-toggle-button";
import { NavigationButton } from "@/components/navigation-button";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { externalNavigationItems, navigationItems } from "@/lib/navigation";
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerClose,
} from "@/components/ui/drawer";

const externalNavigationIcons: Record<string, LucideIcon> = {
  GitHub: GithubIcon,
  Email: MailIcon,
};

export const MobileNavbar = () => {
  return (
    <nav className="flex h-14 items-center justify-between border-b bg-background px-4 py-4">
      <Drawer>
        <DrawerTrigger asChild>
          <CommandIcon className="h-5 w-5 cursor-pointer" />
        </DrawerTrigger>
        <DrawerContent>
          <div className="max-h-[28rem] overflow-y-scroll">
            <div className="flex h-full flex-col justify-between">
              {/* Top  */}
              <div className="flex min-w-60 flex-col gap-3 px-4 pt-6">
                <DrawerClose asChild>
                  <Link href="/">
                    <div className="mb-2 flex cursor-pointer items-center gap-2 rounded-md py-2 pl-1.5 pr-4 text-sm font-medium hover:bg-accent">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src="/android-chrome-512x512.png" />
                        <AvatarFallback>MB</AvatarFallback>
                      </Avatar>
                      <div className="flex flex-col gap-1">
                        <span className="">Dan Kibiwott</span>
                        <span className="font-light text-muted-foreground">
                          Software Engineer
                        </span>
                      </div>
                    </div>
                  </Link>
                </DrawerClose>
                {navigationItems.map((item) => (
                  <DrawerClose asChild key={item.href}>
                    <Link href={item.href}>
                      <NavigationButton item={item} />
                    </Link>
                  </DrawerClose>
                ))}
              </div>

              {/* Bottom  */}
              <div className="flex min-w-60 flex-col gap-3 px-4 pb-6 pt-8">
                {externalNavigationItems.map((item) => {
                  const Icon = externalNavigationIcons[item.label];

                  return (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      tabIndex={-1}
                      key={item.href}
                    >
                      <Button
                        variant="ghost"
                        className="w-full justify-start"
                        size="sm"
                      >
                        <Icon className="mr-2 h-4 w-4" />
                        <span>{item.label}</span>
                        <ArrowUpRightIcon className="ml-1.5 h-4 w-4" />
                        <span className="ml-auto mr-1.5 rounded-sm border bg-secondary px-1.5 text-muted-foreground">
                          {item.keyboardShortcut}
                        </span>
                      </Button>
                    </a>
                  );
                })}
                {/* <a
                  href="https://www.linkedin.com/in/dankibiwott/"
                  target="_blank"
                  rel="noopener noreferrer"
                  tabIndex={-1}
                >
                  <Button
                    variant="ghost"
                    className="w-full justify-start"
                    size="sm"
                  >
                    <LinkedinIcon className="mr-2 h-4 w-4" />
                    <span>LinkedIn</span>
                    <ArrowUpRightIcon className="ml-1.5 h-4 w-4" />
                    <span className="ml-auto mr-1.5 rounded-sm border bg-secondary px-1.5 text-muted-foreground">
                      L
                    </span>
                  </Button>
                </a> */}

                <hr className="-mx-4" />

                <ThemeToggleButton />
              </div>
            </div>
          </div>
        </DrawerContent>
      </Drawer>

      <ThemeToggleIcon />
    </nav>
  );
};
