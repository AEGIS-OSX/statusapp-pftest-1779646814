import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "StatusApp \u2014 System status",
    template: "%s | StatusApp",
  },
  description:
    "StatusApp displays a single, instrument-style status panel to verify the AEGIS pipeline. Static content only; not a monitoring service.",
  openGraph: {
    title: "StatusApp \u2014 System status",
    description:
      "StatusApp displays a single, instrument-style status panel to verify the AEGIS pipeline. Static content only; not a monitoring service.",
    siteName: "StatusApp",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "StatusApp \u2014 System status",
    description:
      "StatusApp displays a single, instrument-style status panel to verify the AEGIS pipeline. Static content only; not a monitoring service.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        {/* Google Fonts with font-display: swap via URL param */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Sora:wght@500;600;700&family=IBM+Plex+Sans:wght@400;500;600&family=JetBrains+Mono:wght@400;600&display=swap"
        />
      </head>
      <body
        style={{
          backgroundColor: "var(--color-bg)",
          color: "var(--color-text)",
          fontFamily: "var(--font-body)",
        }}
      >
        <header>
          <div className="site-nav-inner">
            <a
              href="/"
              className="site-nav-wordmark focus-ring"
              aria-label="StatusApp home"
            >
              StatusApp
            </a>
            <nav aria-label="Primary navigation">
              <a href="/about" className="site-nav-link focus-ring">
                About
              </a>
            </nav>
          </div>
        </header>

        <main className="page-main">{children}</main>

        <footer>
          <p className="site-footer-text">{"\u00A9 2026 ZRS Enterprises."}</p>
        </footer>
      </body>
    </html>
  );
}
