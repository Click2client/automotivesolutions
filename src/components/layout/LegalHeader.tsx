import Image from "next/image";
import Link from "next/link";

import { site } from "@/config/site";
import { ui } from "@/content/ui";

export function LegalHeader() {
  return (
    <header className="sticky top-0 z-50 flex min-h-16 flex-wrap items-center justify-between gap-x-7 gap-y-2 bg-[rgba(255,255,255,0.92)] px-[clamp(20px,5vw,72px)] py-3 shadow-[0_1px_0_#E6E4E0] backdrop-blur-[12px]">
      <Link href="/" className="flex items-center">
        <Image
          src="/images/logo.png"
          alt="Automotive Solutions"
          width={600}
          height={242}
          priority
          className="h-8 w-auto"
        />
      </Link>
      <div className="flex flex-wrap items-center gap-x-7 gap-y-2">
        <Link href="/" className="inline-flex min-h-11 items-center text-[15px] font-medium text-ink">
          ← {ui.backToSite}
        </Link>
        <a
          href={`tel:${site.contact.phone}`}
          className="focus-on-primary inline-flex h-11 items-center rounded-[3px] bg-primary px-5 text-[15px] font-semibold text-white motion-safe:transition-colors hover:bg-primary-hover"
        >
          {site.contact.phoneDisplay}
        </a>
      </div>
    </header>
  );
}
