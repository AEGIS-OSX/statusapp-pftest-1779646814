import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "StatusApp — System status",
    template: "%s | StatusApp",
  },
  description:
    "StatusApp displays a single, instrument-style status panel to verify the AEGIS pipeline. Static content only; not a monitoring service.",
  openGraph: {
    title: "StatusApp — System status",
    description:
      "StatusApp displays a single, instrument-style status panel to verify the AEGIS pipeline. Static content only; not a monitoring service.",
    siteName: "StatusApp",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "StatusApp — System status",
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
      <body className="layout-body">
        <header className="site-nav" role="banner">
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

        <footer className="site-footer" role="contentinfo">
          <p className="site-footer-text">{"\u00A9 2026 ZRS Enterprises."}</p>
        </footer>
      </body>
    </html>
  );
}
