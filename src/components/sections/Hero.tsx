import Image from "next/image";

import { site } from "@/config/site";
import type { ImageAsset } from "@/content/types";

type HeroContent = {
  eyebrow: string;
  title: string;
  intro: string;
  primaryCta: string;
  secondaryCta: string;
  image: ImageAsset;
  captionName: string;
  captionMeta: string;
};

export function Hero({ hero }: { hero: HeroContent }) {
  return (
    <section className="overflow-hidden bg-surface-dark text-white">
      <div className="mx-auto grid max-w-[1320px] items-center gap-[clamp(40px,6vw,96px)] px-[clamp(20px,5vw,72px)] py-[clamp(64px,8vw,120px)] min-[981px]:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
        <div data-reveal>
          <p className="mb-7 text-[13px] font-medium tracking-[0.14em] text-hero-muted uppercase">
            {hero.eyebrow}
          </p>
          <h1 className="mb-8 font-heading text-[clamp(40px,5.2vw,76px)] leading-[1.04] font-medium tracking-[-0.025em] text-white">
            {hero.title}
          </h1>
          <p className="mb-11 max-w-[520px] text-[19px] leading-[1.6] text-on-dark">{hero.intro}</p>
          <div className="flex flex-wrap items-center gap-3.5">
            <a
              href={`tel:${site.contact.phone}`}
              className="focus-on-primary inline-flex h-[54px] items-center rounded-[3px] bg-primary px-7 text-base font-semibold text-white motion-safe:transition-colors hover:bg-primary-hover"
            >
              {hero.primaryCta}
            </a>
            <a
              href="#werkwijze"
              className="inline-flex h-[54px] items-center rounded-[3px] border border-white/35 px-7 text-base font-medium text-white motion-safe:transition-colors hover:border-white hover:bg-white/6"
            >
              {hero.secondaryCta}
            </a>
          </div>
        </div>
        <div data-reveal className="relative w-full min-[981px]:max-w-[520px] min-[981px]:justify-self-end">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[4px] bg-[#0E0F11] min-[641px]:max-[980px]:aspect-[16/10]">
            <Image
              src={hero.image.src}
              alt={hero.image.alt}
              fill
              priority
              sizes="(max-width: 980px) 100vw, 520px"
              className="object-cover object-[50%_20%] grayscale-[0.3] contrast-105 saturate-[0.85]"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-[linear-gradient(180deg,transparent_55%,rgba(22,24,27,0.65)),rgba(28,38,52,0.14)]"
            />
            <div className="absolute bottom-[22px] left-6 text-white">
              <p className="font-heading text-xl font-medium tracking-[-0.01em]">{hero.captionName}</p>
              <p className="mt-1 text-[13px] text-on-dark">{hero.captionMeta}</p>
            </div>
          </div>
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-[18px] -right-[18px] size-[120px] rounded-[4px] border border-white/12 max-[980px]:hidden"
          />
          <div
            aria-hidden="true"
            className="absolute -bottom-3.5 left-0 h-[3px] w-[72px] bg-[linear-gradient(90deg,#E23A58,#A8122E)]"
          />
        </div>
      </div>
    </section>
  );
}
