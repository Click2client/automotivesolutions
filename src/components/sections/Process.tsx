"use client";

import { useEffect, useRef, useState } from "react";

const barWidths = ["w-1/5", "w-2/5", "w-3/5", "w-4/5", "w-full"] as const;

type ProcessContent = {
  eyebrow: string;
  title: string;
  intro: string;
  steps: { label: string; title: string; text: string }[];
};

export function Process({ process }: { process: ProcessContent }) {
  const sectionRef = useRef<HTMLElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(1);
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const update = () => {
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const narrow = window.innerWidth <= 980;
      const section = sectionRef.current;
      const inner = innerRef.current;
      if (reduce || narrow || !section || !inner) {
        setAnimated(false);
        setActiveStep(5);
        return;
      }

      const range = section.offsetHeight - inner.offsetHeight;
      if (range <= 0) {
        setAnimated(false);
        setActiveStep(5);
        return;
      }

      const progress = Math.min(1, Math.max(0, -section.getBoundingClientRect().top / range));
      const step = Math.max(1, Math.min(5, Math.floor(progress * 5.999)));
      setAnimated(true);
      setActiveStep(step);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <section
      id="werkwijze"
      ref={sectionRef}
      className="scroll-mt-[100px] motion-safe:min-[981px]:h-[280vh]"
    >
      <div
        ref={innerRef}
        className="mx-auto box-border flex w-full max-w-[1320px] flex-col justify-center px-[clamp(20px,5vw,72px)] py-[clamp(80px,10vw,140px)] motion-safe:min-[981px]:sticky motion-safe:min-[981px]:top-0 motion-safe:min-[981px]:min-h-screen motion-safe:min-[981px]:pt-[104px] motion-safe:min-[981px]:pb-12"
      >
        <div className="mb-[clamp(40px,5vw,72px)] max-w-[720px]">
          <p className="mb-5 text-[13px] font-semibold tracking-[0.14em] text-primary uppercase">
            {process.eyebrow}
          </p>
          <h2 className="mb-6 font-heading text-[clamp(32px,3.6vw,52px)] leading-[1.1] font-medium tracking-[-0.02em] text-ink">
            {process.title}
          </h2>
          <p className="text-lg leading-[1.7] text-body">{process.intro}</p>
        </div>
        <div className="relative mb-7 h-0.5 bg-line" aria-hidden="true">
          <div
            className={`absolute inset-y-0 left-0 bg-primary motion-safe:transition-[width] motion-safe:duration-[450ms] max-[980px]:w-full motion-reduce:w-full ${barWidths[activeStep - 1]}`}
          />
        </div>
        <ol
          className="grid list-none grid-cols-1 gap-8 min-[981px]:max-[1200px]:grid-cols-3 min-[1201px]:grid-cols-5"
        >
          {process.steps.map((step, index) => {
            const lit = index < activeStep;
            const highlighted = animated && lit;
            return (
              <li
                key={step.label}
                className={`rounded-[3px] px-5 py-6 motion-safe:transition-[background-color,opacity,box-shadow] motion-safe:duration-[450ms] max-[980px]:opacity-100 motion-reduce:opacity-100 ${
                  highlighted ? "bg-primary shadow-[0_16px_36px_rgba(201,29,58,0.22)]" : "bg-transparent"
                } ${lit ? "opacity-100" : "opacity-[0.38]"}`}
              >
                <p
                  className={`mb-[18px] font-heading text-sm font-semibold motion-safe:transition-colors motion-safe:duration-[450ms] ${
                    highlighted ? "text-white" : "text-primary"
                  }`}
                >
                  {step.label}
                </p>
                <h3
                  className={`mb-3 font-heading text-[21px] font-medium tracking-[-0.01em] motion-safe:transition-colors motion-safe:duration-[450ms] ${
                    highlighted ? "text-white" : "text-ink"
                  }`}
                >
                  {step.title}
                </h3>
                <p
                  className={`text-[15px] leading-[1.6] motion-safe:transition-colors motion-safe:duration-[450ms] ${
                    highlighted ? "text-white" : "text-body"
                  }`}
                >
                  {step.text}
                </p>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
