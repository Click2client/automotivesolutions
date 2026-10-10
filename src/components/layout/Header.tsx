"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import { site } from "@/config/site";
import { ui } from "@/content/ui";

export function Header() {
  const [compact, setCompact] = useState(false);

  useEffect(() => {
    const onScroll = () => setCompact(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 flex items-center justify-between bg-[rgba(255,255,255,0.92)] px-[clamp(20px,5vw,72px)] backdrop-blur-[12px] motion-safe:transition-[height,box-shadow] motion-safe:duration-[350ms] motion-safe:ease-in-out ${
        compact
          ? "h-[76px] shadow-[0_1px_0_#E6E4E0] max-[980px]:h-[68px]"
          : "h-[104px] max-[980px]:h-[84px]"
      }`}
    >
      <Link href="/#main" aria-label="Automotive Solutions – naar boven" className="flex items-center">
        <Image
          src="/images/logo.png"
          alt="Automotive Solutions – Bedrijfsorganisatie en advies"
          width={600}
          height={242}
          priority
          className={`w-auto max-w-[42vw] object-contain ${
            compact
              ? "h-[52px] max-[980px]:h-11"
              : "h-[72px] max-[980px]:h-14"
          }`}
        />
      </Link>
      <nav aria-label={ui.mainNav} className="hidden min-[981px]:block">
        <ul className="flex items-center gap-9">
          {site.navigation.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="inline-flex min-h-11 items-center text-[15px] font-medium text-ink"
              >
                <span className="relative after:absolute after:right-0 after:-bottom-1.5 after:left-0 after:h-px after:origin-left after:scale-x-0 after:bg-primary after:transition-transform after:duration-300 hover:after:scale-x-100">
                  {item.label}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <a
        href={`tel:${site.contact.phone}`}
        className="focus-on-primary inline-flex h-11 shrink-0 items-center gap-2.5 rounded-[3px] bg-primary px-5 text-[15px] font-semibold tracking-[0.01em] text-white motion-safe:transition-colors hover:bg-primary-hover"
      >
        <span aria-hidden="true" className="size-2 rounded-full bg-white opacity-90" />
        {site.contact.phoneDisplay}
      </a>
    </header>
  );
}
