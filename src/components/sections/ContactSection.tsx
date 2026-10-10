import Image from "next/image";

import { ContactForm } from "@/components/forms/ContactForm";
import { site } from "@/config/site";
import type { ImageAsset } from "@/content/types";
import { ui } from "@/content/ui";
import { env } from "@/lib/env";
import { contactFallback } from "@/lib/mail";

type ContactContent = {
  eyebrow: string;
  title: string;
  intro: string;
  addressLines: string[];
  map: ImageAsset;
};

export function ContactSection({ contact }: { contact: ContactContent }) {
  return (
    <section id="contact" className="scroll-mt-[100px] px-[clamp(20px,5vw,72px)] py-[clamp(80px,10vw,140px)]">
      <div className="mx-auto grid max-w-[1320px] items-start gap-[clamp(40px,6vw,120px)] min-[981px]:grid-cols-2">
        <div data-reveal>
          <p className="mb-5 text-[13px] font-semibold tracking-[0.14em] text-primary uppercase">
            {contact.eyebrow}
          </p>
          <h2 className="mb-7 font-heading text-[clamp(32px,3.6vw,52px)] leading-[1.1] font-medium tracking-[-0.02em] text-ink">
            {contact.title}
          </h2>
          <p className="mb-10 max-w-[480px] text-lg leading-[1.7] text-body">{contact.intro}</p>
          <a
            href={`tel:${site.contact.phone}`}
            className="inline-block border-b-2 border-primary pb-2 font-heading text-[clamp(34px,4vw,56px)] leading-none font-medium tracking-[-0.025em] text-ink hover:border-primary-hover hover:text-primary-hover"
          >
            {site.contact.phoneDisplay}
          </a>
          <div className="mt-10 grid gap-3.5 text-base leading-normal text-body">
            <a
              href={`mailto:${site.contact.email}`}
              className="relative justify-self-start font-medium text-ink after:absolute after:right-0 after:-bottom-1.5 after:left-0 after:h-px after:origin-left after:scale-x-0 after:bg-primary after:transition-transform after:duration-300 hover:text-primary-hover hover:after:scale-x-100"
            >
              {site.contact.email}
            </a>
            <p>
              {contact.addressLines[0]}
              <br />
              {contact.addressLines[1]}
            </p>
          </div>
          {site.features.showMap ? (
            <figure className="relative mt-10 max-w-[480px]">
              <div className="relative aspect-[3/1] overflow-hidden rounded-[4px] border border-line">
                <Image
                  src={contact.map.src}
                  alt={contact.map.alt}
                  fill
                  sizes="480px"
                  className="object-cover"
                />
                <a
                  href="https://www.openstreetmap.org/copyright"
                  className="absolute bottom-2 left-3 bg-surface/90 px-1 text-xs text-secondary underline-offset-2 hover:text-ink"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {ui.mapCredit}
                  <span className="sr-only"> ({ui.opensInNewTab})</span>
                </a>
              </div>
            </figure>
          ) : null}
        </div>
        {site.features.showForm ? (
          <div data-reveal className="relative">
            <ContactForm
              siteKey={env.NEXT_PUBLIC_TURNSTILE_SITE_KEY}
              fallbackContact={contactFallback()}
            />
          </div>
        ) : null}
      </div>
    </section>
  );
}
