export const contactLinks = {
  github: "https://github.com/DAN-BIWOTT",
  email: "mailto:dankibiwottcb4@gmail.com",
  linkedin: "https://www.linkedin.com/in/dankibiwott/",
};

export type NavigationItem = {
  label: string;
  href: string;
  keyboardShortcut: number;
};

export const navigationItems: NavigationItem[] = [
  {
    label: "Home",
    href: "/",
    keyboardShortcut: 1,
  },
  {
    label: "Writing",
    href: "/writing",
    keyboardShortcut: 2,
  },
  {
    label: "Reading",
    href: "/reading",
    keyboardShortcut: 3,
  },
  {
    label: "Shooting",
    href: "/shooting",
    keyboardShortcut: 4,
  },
  {
    label: "All projects",
    href: "/all-projects",
    keyboardShortcut: 5,
  },
  {
    label: "More about me",
    href: "/more-about-me",
    keyboardShortcut: 6,
  },
];

export const externalNavigationItems = [
  {
    label: "GitHub",
    href: contactLinks.github,
    keyboardShortcut: "G",
    keyCode: "KeyG",
  },
  {
    label: "Email",
    href: contactLinks.email,
    keyboardShortcut: "E",
    keyCode: "KeyE",
  },
];

export const keyboardRoutes = new Map(
  navigationItems.map((item) => [`Digit${item.keyboardShortcut}`, item.href]),
);

export const keyboardExternalLinks = new Map(
  externalNavigationItems.map((item) => [item.keyCode, item.href]),
);

export const keysUsedInNavigation = [
  ...Array.from(keyboardRoutes.keys()),
  ...Array.from(keyboardExternalLinks.keys()),
  "KeyL",
  "KeyT",
];
