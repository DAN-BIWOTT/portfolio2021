import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";

import "@/app/globals.css";

import { ThemeProvider } from "@/components/theme-provider";
import { NavMenuContent } from "@/components/nav-menu-content";
import { MobileNavbar } from "@/components/mobile-navbar";
import { KeyboardRouter } from "@/components/keyboard-router";

export const metadata: Metadata = {
  metadataBase: new URL("https://dankibiwott.com/"),
  title: "Dan Kibiwott | Home",
  description: "Dan Kibiwott's portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable}`}
      suppressHydrationWarning
    >
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <main
            vaul-drawer-wrapper=""
            className="flex h-screen overflow-hidden bg-background text-foreground"
          >
            {/* Desktop Screen Sidebar  */}
            <div className="hidden shadow-lg dark:border-r lg:block">
              <KeyboardRouter />
              <NavMenuContent />
            </div>
            {/* Page content  */}
            <div className="scrollbar-hide w-full overflow-scroll outline-none lg:px-8">
              <div className="fixed left-0 right-0 top-0 z-50 lg:hidden">
                <MobileNavbar />
              </div>
              <div className="mb-4 px-5 pt-16 lg:pt-28">
                {children}
                <Analytics />
                <SpeedInsights />
              </div>
            </div>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
