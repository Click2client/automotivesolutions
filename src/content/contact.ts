import type { PageMeta } from "@/content/types";

export const contactContent = {
  metadata: {
    title: "Bel Rob Nieman in Twisk",
    description:
      "Bellen werkt het snelst. Laat uw naam en telefoonnummer achter als u liever teruggebeld wordt door Rob Nieman van Automotive Solutions.",
  } satisfies PageMeta,
  heading: "Contact",
  intro:
    "Een eerste gesprek is vrijblijvend. Zit ik in een werkplaats, dan bel ik u dezelfde dag terug.",
  breadcrumb: "Contact",
  detailsTitle: "Bedrijfsgegevens",
  form: {
    title: "Liever dat ik u bel? Laat uw gegevens achter.",
    name: "Naam",
    phone: "Telefoonnummer",
    message: "Waar gaat het over?",
    requiredMark: "(verplicht)",
    optionalMark: "(optioneel)",
    honeypot: "Website",
    submit: "Bel mij terug",
    sending: "Bezig met versturen…",
    privacyText: "Uw gegevens gebruik ik alleen om u terug te bellen. Meer daarover staat in het",
    privacyLink: "privacy statement",
    success: "Dank u. Ik bel u zo snel mogelijk terug.",
    invalid: "Controleer de gemarkeerde velden en probeer het opnieuw.",
    turnstileMissing: "Bevestig eerst de spamcontrole onder het formulier.",
    turnstileFailed:
      "De spamcontrole is niet gelukt. Vernieuw de pagina en probeer het opnieuw.",
    notConfigured:
      "Verzenden is nog niet ingesteld. Uw bericht is niet verstuurd. Mail of bel via",
    sendFailed:
      "Het bericht kon niet worden verstuurd. Uw vraag is niet aangekomen. Mail of bel via",
    turnstileNotReady:
      "De spamcontrole is nog niet ingesteld op deze site. Mail of bel via",
    errors: {
      name: "Vul uw naam in, met minimaal 2 tekens.",
      nameLength: "Deze naam is te lang. Gebruik maximaal 100 tekens.",
      phone: "Vul een geldig Nederlands telefoonnummer in, bijvoorbeeld 06-45682968.",
      messageLength: "Dit bericht is te lang. Gebruik maximaal 5000 tekens.",
    },
  },
};
