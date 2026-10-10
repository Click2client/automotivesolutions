import Image from "next/image";

import type { ImageAsset } from "@/content/types";

type ApproachContent = {
  eyebrow: string;
  title: string;
  intro: string;
  image: ImageAsset;
  points: { number: string; title: string; text: string }[];
};

export function Approach({ approach }: { approach: ApproachContent }) {
  return (
    <section className="bg-surface-dark px-[clamp(20px,5vw,72px)] py-[clamp(80px,10vw,140px)] text-white">
      <div className="mx-auto grid max-w-[1320px] items-start gap-[clamp(40px,6vw,120px)] min-[981px]:grid-cols-2">
        <div data-reveal>
          <p className="mb-5 text-[13px] font-semibold tracking-[0.14em] text-accent-on-dark uppercase">
            {approach.eyebrow}
          </p>
          <h2 className="mb-7 font-heading text-[clamp(32px,3.6vw,52px)] leading-[1.1] font-medium tracking-[-0.02em]">
            {approach.title}
          </h2>
          <p className="max-w-[480px] text-lg leading-[1.7] text-on-dark">{approach.intro}</p>
          <div className="relative mt-12 aspect-[4/3] max-w-[520px] overflow-hidden rounded-[4px] bg-[#1E2024]">
            <Image
              src={approach.image.src}
              alt={approach.image.alt}
              fill
              sizes="(max-width: 980px) 100vw, 520px"
              className="object-cover grayscale-[0.3] contrast-105 saturate-[0.85]"
            />
            <div aria-hidden="true" className="absolute inset-0 bg-[rgba(28,38,52,0.14)]" />
          </div>
        </div>
        <ul data-reveal className="grid">
          {approach.points.map((point, index) => (
            <li
              key={point.number}
              className={`grid grid-cols-[48px_minmax(0,1fr)] gap-4 border-t border-white/12 py-7 ${
                index === approach.points.length - 1 ? "border-b" : ""
              }`}
            >
              <span className="font-heading text-sm text-on-dark-subtle tabular-nums">{point.number}</span>
              <div>
                <p className="mb-1.5 text-[19px] font-medium text-white">{point.title}</p>
                <p className="text-base leading-[1.6] text-on-dark">{point.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
