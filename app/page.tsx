import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "StatusApp — System status",
  description:
    "StatusApp displays a single, instrument-style status panel to verify the AEGIS pipeline. Static content only; not a monitoring service.",
};

export default function Home() {
  return (
    <section className="status-page">
      <div className="status-panel animate-fade-up">
        <div className="status-indicator-row">
          <span className="status-dot" aria-hidden="true" />
          <h1
            className="status-heading"
            role="status"
            aria-live="polite"
            aria-label="System status: All Systems Operational"
          >
            All Systems Operational
          </h1>
        </div>

        <p className="status-subheadline">Minimal verification view for the AEGIS pipeline.</p>

        <p className="status-timestamp">Last checked: just now</p>

        <span className="sr-only">
          System status: All Systems Operational. Last checked: just now.
        </span>
      </div>
    </section>
  );
}
