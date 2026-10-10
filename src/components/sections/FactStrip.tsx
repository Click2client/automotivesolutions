type Fact = { label: string; value: string };

export function FactStrip({ items }: { items: Fact[] }) {
  return (
    <section aria-label="In het kort" className="border-b border-line">
      <ul
        data-reveal
        className="mx-auto grid max-w-[1320px] grid-cols-1 px-[clamp(20px,5vw,72px)] min-[981px]:grid-cols-3"
      >
        {items.map((item, index) => (
          <li
            key={item.label}
            className={`border-line py-7 ${
              index < items.length - 1 ? "border-b min-[981px]:border-r min-[981px]:border-b-0" : ""
            } ${index === 1 ? "min-[981px]:px-8" : ""} ${index === 2 ? "min-[981px]:pl-8" : ""} ${
              index === 0 ? "min-[981px]:pr-8" : ""
            }`}
          >
            <p className="text-sm text-secondary">{item.label}</p>
            <p className="mt-1.5 text-[17px] font-medium text-ink">{item.value}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
