import Link from "next/link";

import { formatAddress, site } from "@/config/site";
import type { LegalPageContent } from "@/content/types";
import { ui } from "@/content/ui";

type LegalDocumentProps = {
  content: LegalPageContent;
  currentPath: string;
};

export function LegalDocument({ content, currentPath }: LegalDocumentProps) {
  return (
    <div className="mx-auto grid w-full min-w-0 max-w-[1320px] justify-center gap-[clamp(32px,5vw,96px)] min-[981px]:grid-cols-[240px_minmax(0,680px)]">
      <aside className="min-w-0 min-[981px]:sticky min-[981px]:top-28 min-[981px]:max-h-[calc(100vh-8rem)] min-[981px]:self-start min-[981px]:overflow-y-auto">
        <p className="mb-4 text-[13px] font-semibold tracking-[0.14em] text-primary uppercase">
          {ui.footerLegal}
        </p>
        <nav
          aria-label={ui.legalNav}
          className="grid gap-2.5 border-b border-line pb-6 text-[15px] font-medium"
        >
          {site.footerNavigation.map((item) => {
            const current = item.href === currentPath;
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={current ? "page" : undefined}
                className={
                  current
                    ? "border-l-2 border-primary py-1 pl-3 text-ink"
                    : "border-l-2 border-transparent py-1 pl-3 text-secondary hover:text-ink"
                }
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <nav aria-label={ui.onThisPage} className="grid gap-2.5 pt-6 text-sm">
          {content.articles.map((article) => (
            <a key={article.id} href={`#${article.id}`} className="text-secondary hover:text-ink">
              {article.heading}
            </a>
          ))}
        </nav>
      </aside>
      <article className="max-w-[680px] min-w-0 wrap-break-word">
        <p className="mb-5 text-sm text-secondary">
          {ui.lastUpdated}: {site.legal.lastUpdated}
        </p>
        <h1 className="mb-5 font-heading text-[clamp(36px,4.2vw,56px)] leading-[1.08] font-medium tracking-[-0.025em] text-ink">
          {content.title}
        </h1>
        <p className="mb-14 text-[19px] leading-[1.65] text-body">{content.intro}</p>
        {content.notice ? (
          <div className="mb-10 border-l-2 border-primary bg-surface-warm px-5 py-4" role="note">
            <p className="font-medium text-ink">{content.notice.title}</p>
            <p className="mt-2 text-[15px] leading-[1.7] text-body">{content.notice.text}</p>
          </div>
        ) : null}
        {content.articles.map((article) => (
          <section
            key={article.id}
            id={article.id}
            aria-labelledby={`${article.id}-kop`}
            className="scroll-mt-24 border-t border-line pt-10"
          >
            <h2
              id={`${article.id}-kop`}
              className="mb-5 font-heading text-[26px] font-medium tracking-[-0.015em] text-ink"
            >
              {article.heading}
            </h2>
            <div className="mb-10 grid gap-5 text-[17px] leading-[1.75] text-body">
              {article.blocks.map((block, index) => {
                if (block.type === "paragraph") {
                  return <p key={`${article.id}-${index}`}>{block.text}</p>;
                }
                if (block.type === "subheading") {
                  return (
                    <h3 key={`${article.id}-${index}`} className="text-lg font-semibold text-ink">
                      {block.text}
                    </h3>
                  );
                }
                if (block.type === "bullets") {
                  return (
                    <ul key={`${article.id}-${index}`} className="list-disc space-y-2.5 pl-5">
                      {block.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  );
                }
                return (
                  <ol
                    key={`${article.id}-${index}`}
                    start={block.start}
                    className="list-decimal space-y-2.5 pl-[22px]"
                  >
                    {block.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ol>
                );
              })}
            </div>
          </section>
        ))}
        <div className="rounded-[4px] border border-line bg-surface-warm px-8 py-7 text-[15px] leading-[1.7]">
          <p className="font-medium text-ink">{content.contactLead}</p>
          <p className="mt-1">
            {site.legalName} ·{" "}
            <a href={`tel:${site.contact.phone}`} className="font-medium text-ink hover:text-primary-hover">
              {site.contact.phoneDisplay}
            </a>{" "}
            ·{" "}
            <a
              href={`mailto:${site.contact.email}`}
              className="font-medium text-ink hover:text-primary-hover"
            >
              {site.contact.email}
            </a>
            <br />
            {formatAddress()} · {ui.kvkLabel} {site.kvk}
            {site.vat ? ` · ${ui.vatLabel} ${site.vat}` : ""}
          </p>
        </div>
      </article>
    </div>
  );
}
