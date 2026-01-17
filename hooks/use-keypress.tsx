import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";

import { keysUsedInNavigation } from "@/lib/constants";

export function useKeyPress() {
  const router = useRouter();
  const { theme, setTheme } = useTheme();

  const themeRef = useRef(theme);
  useEffect(() => {
    themeRef.current = theme;
  }, [theme]);

  useEffect(() => {
    const keypressHandler = (event: KeyboardEvent) => {
      // e.g. I still want 'Tab + Enter' keyboard navigation on the website
      if (!keysUsedInNavigation.includes(event.code)) {
        return;
      }

      event.preventDefault();

      if (event.code === "Digit1") {
        router.push("/");
      } else if (event.code === "Digit2") {
        router.push("/writing");
      } else if (event.code === "Digit3") {
        router.push("/reading");
      } else if (event.code === "Digit4") {
        router.push("/shooting");
      } else if (event.code === "Digit5") {
        router.push("/all-projects");
      } else if (event.code === "Digit6") {
        router.push("/more-about-me");
      } else if (event.code === "KeyG") {
        window.open("https://github.com/dankibiwott", "_blank");
      } else if (event.code === "KeyE") {
        window.open("mailto:dankibiwottcb4@gmail.com", "_blank");
      } else if (event.code === "KeyL") {
        window.open("https://www.linkedin.com/in/dankibiwott/", "_blank");
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
