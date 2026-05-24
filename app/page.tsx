import type { Metadata } from "next";
import StatusPanel from "@/app/components/StatusPanel";

export const metadata: Metadata = {
  title: {
    default: "StatusApp — System status",
    template: "%s | StatusApp",
  },
  description:
    "StatusApp displays a single, instrument-style status panel to verify the AEGIS pipeline. Static content only; not a monitoring service.",
};

export default function Home() {
  return (
    <main className="page-main">
      <StatusPanel />
    </main>
  );
}
