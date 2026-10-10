import type { Metadata } from "next";

import { LegalDocument } from "@/components/sections/LegalDocument";
import { JsonLd } from "@/components/seo/JsonLd";
import { disclaimerContent } from "@/content/disclaimer";
import { ui } from "@/content/ui";
import { breadcrumbJsonLd, createMetadata } from "@/lib/seo";

const path = "/disclaimer";

export const metadata: Metadata = createMetadata({
  title: disclaimerContent.metadata.title,
  description: disclaimerContent.metadata.description,
  path,
});

export default function DisclaimerPage() {
  return (
    <>
      <LegalDocument content={disclaimerContent} currentPath={path} />
      <JsonLd
        data={breadcrumbJsonLd([
          { label: ui.homeLabel, href: "/" },
          { label: disclaimerContent.title, href: path },
        ])}
      />
    </>
  );
}
