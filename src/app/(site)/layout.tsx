import type { ReactNode } from "react";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { MobileCallButton } from "@/components/layout/MobileCallButton";
import { RevealController } from "@/components/layout/RevealController";

export default function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-full flex-1 flex-col max-[980px]:pb-[72px]">
      <Header />
      <main id="main" tabIndex={-1} className="flex-1 pt-[104px] outline-none max-[980px]:pt-[84px]">
        {children}
      </main>
      <Footer />
      <MobileCallButton />
      <RevealController />
    </div>
  );
}
