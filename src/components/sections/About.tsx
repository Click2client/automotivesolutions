type AboutContent = {
  eyebrow: string;
  title: string;
  paragraphs: string[];
  link: string;
};

export function About({ about }: { about: AboutContent }) {
  return (
    <section id="over" className="scroll-mt-[100px] px-[clamp(20px,5vw,72px)] py-[clamp(80px,10vw,140px)]">
      <div className="mx-auto grid max-w-[1320px] items-start gap-[clamp(40px,6vw,120px)] min-[981px]:grid-cols-2">
        <div data-reveal>
          <p className="mb-5 text-[13px] font-semibold tracking-[0.14em] text-primary uppercase">
            {about.eyebrow}
          </p>
          <h2 className="font-heading text-[clamp(32px,3.6vw,52px)] leading-[1.1] font-medium tracking-[-0.02em] text-ink">
            {about.title}
          </h2>
        </div>
        <div data-reveal className="max-w-[560px] text-lg leading-[1.7] text-body">
          {about.paragraphs.map((paragraph, index) => (
            <p key={paragraph} className={index === about.paragraphs.length - 1 ? "mb-9" : "mb-6"}>
              {paragraph}
            </p>
          ))}
          <a
            href="#contact"
            className="relative inline-block font-semibold text-ink after:absolute after:right-0 after:-bottom-1.5 after:left-0 after:h-px after:origin-left after:scale-x-0 after:bg-primary after:transition-transform after:duration-300 hover:text-primary-hover hover:after:scale-x-100"
          >
            {about.link}
          </a>
        </div>
      </div>
    </section>
  );
}
