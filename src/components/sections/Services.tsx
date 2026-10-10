type ServiceItem = {
  number: string;
  title: string;
  intro: string;
  points: string[];
};

type ServicesContent = {
  eyebrow: string;
  title: string;
  intro: string;
  items: ServiceItem[];
};

export function Services({ services }: { services: ServicesContent }) {
  return (
    <section
      id="diensten"
      className="scroll-mt-[100px] border-y border-line bg-surface-warm px-[clamp(20px,5vw,72px)] py-[clamp(80px,10vw,140px)]"
    >
      <div className="mx-auto max-w-[1320px]">
        <div data-reveal className="mb-[clamp(48px,6vw,80px)] max-w-[720px]">
          <p className="mb-5 text-[13px] font-semibold tracking-[0.14em] text-primary uppercase">
            {services.eyebrow}
          </p>
          <h2 className="mb-6 font-heading text-[clamp(32px,3.6vw,52px)] leading-[1.1] font-medium tracking-[-0.02em] text-ink">
            {services.title}
          </h2>
          <p className="text-lg leading-[1.7] text-body">{services.intro}</p>
        </div>
        <div className="grid gap-6 min-[981px]:grid-cols-3">
          {services.items.map((item) => (
            <article
              key={item.number}
              data-reveal
              className="flex flex-col rounded-[4px] border border-line bg-surface px-9 py-10 motion-safe:transition-[transform,box-shadow] motion-safe:duration-[350ms] motion-safe:ease-out hover:-translate-y-[3px] hover:shadow-[0_18px_40px_-24px_rgba(22,24,27,0.25)]"
            >
              <p className="mb-7 font-heading text-sm text-secondary tabular-nums">{item.number}</p>
              <h3 className="mb-4 font-heading text-[26px] font-medium tracking-[-0.015em] text-ink">
                {item.title}
              </h3>
              <p className="mb-6 text-base leading-[1.65] text-body">{item.intro}</p>
              <ul className="mt-auto grid gap-3 text-[15px] leading-normal text-body">
                {item.points.map((point) => (
                  <li key={point} className="border-t border-line pt-3">
                    {point}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
