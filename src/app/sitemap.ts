import type { MetadataRoute } from "next";

import { site } from "@/config/site";
import { getSiteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  return site.pages.map((page) => ({
    url: new URL(page.path, getSiteUrl()).toString(),
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));
}
