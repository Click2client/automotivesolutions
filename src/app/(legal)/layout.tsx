import type { ReactNode } from "react";

import { Footer } from "@/components/layout/Footer";
import { LegalHeader } from "@/components/layout/LegalHeader";

export default function LegalLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-full flex-1 flex-col">
      <LegalHeader />
      <main
        id="main"
        tabIndex={-1}
        className="flex-1 px-[clamp(20px,5vw,72px)] pt-[clamp(56px,7vw,96px)] pb-[clamp(80px,10vw,140px)] outline-none"
      >
        {children}
      </main>
      <Footer compact />
    </div>
  );
}
