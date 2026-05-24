import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About StatusApp",
  description:
    "StatusApp is a minimal, static status display used to verify the AEGIS pipeline. It contains hardcoded content and does not perform real monitoring.",
};

export default function About() {
  return (
    <section className="about-page">
      <div className="about-content">
        <h1 className="about-heading">About StatusApp</h1>

        <p className="about-body">
          This is a minimal status display used to verify the AEGIS pipeline.
          It contains only static, hardcoded content and does not perform real
          monitoring. Use this app for visual verification only.
        </p>

        <p className="about-support">
          For production monitoring or integrations, contact the AEGIS pipeline
          team.
        </p>
      </div>
    </section>
  );
}
