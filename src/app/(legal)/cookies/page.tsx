import type { Metadata } from "next";

import { LegalDocument } from "@/components/sections/LegalDocument";
import { JsonLd } from "@/components/seo/JsonLd";
import { cookiesContent } from "@/content/cookies";
import { ui } from "@/content/ui";
import { breadcrumbJsonLd, createMetadata } from "@/lib/seo";

const path = "/cookies";

export const metadata: Metadata = createMetadata({
  title: cookiesContent.metadata.title,
  description: cookiesContent.metadata.description,
  path,
});

export default function CookiesPage() {
  return (
    <>
      <LegalDocument content={cookiesContent} currentPath={path} />
      <JsonLd
        data={breadcrumbJsonLd([
          { label: ui.homeLabel, href: "/" },
          { label: cookiesContent.title, href: path },
        ])}
      />
    </>
  );
}
