import type { Metadata } from "next";

import { LegalDocument } from "@/components/sections/LegalDocument";
import { JsonLd } from "@/components/seo/JsonLd";
import { privacyStatementContent } from "@/content/privacy-statement";
import { ui } from "@/content/ui";
import { breadcrumbJsonLd, createMetadata } from "@/lib/seo";

const path = "/privacy-statement";

export const metadata: Metadata = createMetadata({
  title: privacyStatementContent.metadata.title,
  description: privacyStatementContent.metadata.description,
  path,
});

export default function PrivacyStatementPage() {
  return (
    <>
      <LegalDocument content={privacyStatementContent} currentPath={path} />
      <JsonLd
        data={breadcrumbJsonLd([
          { label: ui.homeLabel, href: "/" },
          { label: privacyStatementContent.title, href: path },
        ])}
      />
    </>
  );
}
