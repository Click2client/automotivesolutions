import Image from "next/image";
import Link from "next/link";

import { formatAddress, site } from "@/config/site";
import { ui } from "@/content/ui";

const linkClass =
  "inline-flex min-h-11 items-center text-white motion-safe:transition-colors hover:text-accent";

type FooterProps = {
  compact?: boolean;
};

export function Footer({ compact = false }: FooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-surface-dark px-[clamp(20px,5vw,72px)] text-on-dark">
      <div className={`mx-auto max-w-[1320px] ${compact ? "py-12" : "pt-16 pb-10"}`}>
        {compact ? null : (
          <div className="grid items-start gap-10 border-b border-white/12 pb-12 min-[981px]:grid-cols-3">
            <Image
              src="/images/logo-wit.png"
              alt="Automotive Solutions"
              width={600}
              height={242}
              className="h-11 w-auto"
            />
            <div className="text-[15px] leading-[1.7]">
              <p className="font-medium text-white">{site.legalName}</p>
              <p>{formatAddress()}</p>
              <a href={`tel:${site.contact.phone}`} className={linkClass}>
                {site.contact.phoneDisplay}
              </a>
              <br />
              <a href={`mailto:${site.contact.email}`} className={linkClass}>
                {site.contact.email}
              </a>
            </div>
            <div className="text-[15px] leading-[1.7]">
              <p>
                {ui.kvkLabel} {site.kvk}
              </p>
              {site.vat ? (
                <p>
                  {ui.vatLabel} {site.vat}
                </p>
              ) : null}
            </div>
          </div>
        )}
        <div
          className={`flex flex-wrap items-center justify-between gap-x-8 gap-y-4 text-sm ${
            compact ? "" : "pt-7"
          }`}
        >
          {compact ? (
            <Image
              src="/images/logo-wit.png"
              alt="Automotive Solutions"
              width={600}
              height={242}
              className="h-9 w-auto"
            />
          ) : null}
          <nav aria-label={ui.footerLegal} className="flex flex-wrap gap-x-6">
            {site.footerNavigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="inline-flex min-h-11 items-center text-on-dark hover:text-white"
              >
                {item.label}
              </Link>
            ))}
            <button
              type="button"
              className="cky-banner-element inline-flex min-h-11 items-center text-left text-on-dark hover:text-white"
            >
              {ui.cookieSettings}
            </button>
          </nav>
          <p>
            © {year} {site.name} · {ui.footerCredit}{" "}
            <a
              href={site.credit.url}
              className="text-on-dark underline decoration-1 underline-offset-[3px] hover:text-white"
              rel="noopener noreferrer"
              target="_blank"
            >
              {site.credit.label}
              <span className="sr-only"> ({ui.opensInNewTab})</span>
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
