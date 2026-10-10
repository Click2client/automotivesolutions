import { site } from "@/config/site";
import type { PageMeta } from "@/content/types";

export const notFoundContent = {
  metadata: {
    title: "Pagina niet gevonden",
    description: `Deze pagina bestaat niet of is verplaatst. Ga terug naar de website van ${site.name}.`,
  } satisfies PageMeta,
  heading: "Deze pagina bestaat niet",
  intro:
    "Het adres klopt niet, of de pagina is verplaatst. Ga terug naar de website en kies daar een onderwerp.",
  homeLink: "Naar de website",
};
