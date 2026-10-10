import type { MetadataRoute } from "next";

import { env } from "@/lib/env";
import { getSiteUrl } from "@/lib/seo";

export default function robots(): MetadataRoute.Robots {
  if (env.VERCEL_ENV !== "production") {
    return {
      rules: {
        userAgent: "*",
        disallow: "/",
      },
    };
  }

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: new URL("/sitemap.xml", getSiteUrl()).toString(),
    host: getSiteUrl(),
  };
}
