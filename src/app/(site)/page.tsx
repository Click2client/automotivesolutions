import type { Metadata } from "next";

import { About } from "@/components/sections/About";
import { Approach } from "@/components/sections/Approach";
import { ContactSection } from "@/components/sections/ContactSection";
import { FactStrip } from "@/components/sections/FactStrip";
import { Hero } from "@/components/sections/Hero";
import { Process } from "@/components/sections/Process";
import { Services } from "@/components/sections/Services";
import { JsonLd } from "@/components/seo/JsonLd";
import { homeContent } from "@/content/home";
import { createMetadata, servicesJsonLd } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: homeContent.metadata.title,
  description: homeContent.metadata.description,
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <Hero hero={homeContent.hero} />
      <FactStrip items={homeContent.strip} />
      <About about={homeContent.about} />
      <Services services={homeContent.services} />
      <Approach approach={homeContent.approach} />
      <Process process={homeContent.process} />
      <ContactSection contact={homeContent.contact} />
      <JsonLd
        data={servicesJsonLd(
          homeContent.services.items.map((item) => ({
            title: item.title,
            description: item.intro,
          })),
        )}
      />
    </>
  );
}
