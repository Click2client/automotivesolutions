import type { Metadata } from "next";

import { LegalDocument } from "@/components/sections/LegalDocument";
import { JsonLd } from "@/components/seo/JsonLd";
import { termsContent } from "@/content/leveringsvoorwaarden";
import { ui } from "@/content/ui";
import { breadcrumbJsonLd, createMetadata } from "@/lib/seo";

const path = "/leveringsvoorwaarden";

export const metadata: Metadata = createMetadata({
  title: termsContent.metadata.title,
  description: termsContent.metadata.description,
  path,
});

export default function TermsPage() {
  return (
    <>
      <LegalDocument content={termsContent} currentPath={path} />
      <JsonLd
        data={breadcrumbJsonLd([
          { label: ui.homeLabel, href: "/" },
          { label: termsContent.title, href: path },
        ])}
      />
    </>
  );
}
