import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";

import {
  contactLinks,
  keyboardExternalLinks,
  keyboardRoutes,
  keysUsedInNavigation,
} from "@/lib/navigation";

export function useKeyPress() {
  const router = useRouter();
  const { theme, setTheme } = useTheme();

  const themeRef = useRef(theme);
  useEffect(() => {
    themeRef.current = theme;
  }, [theme]);

  useEffect(() => {
    const keypressHandler = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement | null;
      const tagName = target?.tagName;
      if (
        target?.isContentEditable ||
        tagName === "INPUT" ||
        tagName === "TEXTAREA" ||
        tagName === "SELECT"
      ) {
        return;
      }

      // e.g. I still want 'Tab + Enter' keyboard navigation on the website
      if (!keysUsedInNavigation.includes(event.code)) {
        return;
      }

      event.preventDefault();

      const route = keyboardRoutes.get(event.code);
      const externalLink = keyboardExternalLinks.get(event.code);

      if (route) {
        router.push(route);
      } else if (externalLink) {
        window.open(externalLink, "_blank", "noopener,noreferrer");
      } else if (event.code === "KeyL") {
        window.open(contactLinks.linkedin, "_blank", "noopener,noreferrer");
      } else if (event.code === "KeyT") {
        setTheme(themeRef.current === "light" ? "dark" : "light");
      }
    };

    window.addEventListener("keydown", keypressHandler);

    return () => {
      window.removeEventListener("keydown", keypressHandler);
    };
  }, []);
}
