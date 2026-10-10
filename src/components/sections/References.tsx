type ReferencesContent = {
  eyebrow: string;
  quotes: { text: string; by: string }[];
};

export function References({ references }: { references: ReferencesContent }) {
  return (
    <section className="border-y border-line bg-surface-warm px-[clamp(20px,5vw,72px)] py-[clamp(80px,10vw,140px)]">
      <div className="mx-auto max-w-[1320px]">
        <p
          data-reveal
          className="mb-[clamp(40px,5vw,64px)] text-[13px] font-semibold tracking-[0.14em] text-primary uppercase"
        >
          {references.eyebrow}
        </p>
        <div className="grid gap-6 min-[981px]:grid-cols-2">
          {references.quotes.map((quote) => (
            <blockquote
              key={quote.text}
              data-reveal
              className="rounded-[4px] border border-dashed border-[#C9C7C3] bg-surface p-10"
            >
              <p className="mb-6 font-heading text-2xl leading-[1.4] tracking-[-0.01em] text-ink">
                “{quote.text}”
              </p>
              <footer className="text-sm text-secondary">{quote.by}</footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
