import { site } from "@/config/site";
import type { LegalPageContent } from "@/content/types";

export const cookiesContent = {
  metadata: {
    title: "Uitleg over cookies op deze site",
    description:
      "Welke cookies Automotive Solutions gebruikt, waarvoor ze dienen en hoe u uw keuze later wijzigt. Statistiek start pas na uw toestemming.",
  },
  title: "Cookies",
  intro:
    "Deze site plaatst analytische of marketingcookies pas nadat u daar toestemming voor geeft. Noodzakelijke cookies zijn nodig om de site te laten werken.",
  contactLead: "Vragen over cookies?",
  articles: [
    {
      id: "noodzakelijk",
      heading: "1. Noodzakelijk",
      blocks: [
        {
          type: "paragraph",
          text: "Deze cookies of vergelijkbare opslag zijn nodig voor de werking van de site, bijvoorbeeld om uw cookiekeuze te onthouden of om het formulier te beveiligen tegen spam.",
        },
        {
          type: "paragraph",
          text: "Hiervoor is geen toestemming nodig. Ze worden niet gebruikt om u over andere websites te volgen.",
        },
      ],
    },
    {
      id: "statistiek",
      heading: "2. Statistiek",
      blocks: [
        {
          type: "paragraph",
          text: "Met statistiekcookies, via Google Analytics 4 en Google Tag Manager, zien we hoeveel mensen de site bezoeken en welke pagina's ze openen.",
        },
        {
          type: "paragraph",
          text: "Die cookies worden pas geplaatst als u statistieken accepteert in de cookiemelder.",
        },
      ],
    },
    {
      id: "marketing",
      heading: "3. Marketing",
      blocks: [
        {
          type: "paragraph",
          text: "Marketingcookies zijn niet standaard actief. Ze worden alleen gebruikt als daarvoor een aparte keuze in de cookiemelder staat, en alleen via Google Tag Manager.",
        },
        {
          type: "paragraph",
          text: "Er staan geen losse advertentiepixels in de code van deze website.",
        },
      ],
    },
    {
      id: "keuze",
      heading: "4. Uw keuze wijzigen",
      blocks: [
        {
          type: "paragraph",
          text: "Onder aan elke pagina staat de knop Cookie-instellingen. Daarmee opent u de cookiemelder opnieuw en kunt u uw keuze aanpassen.",
        },
        {
          type: "paragraph",
          text: "Weigeren hoort even beschikbaar te zijn als accepteren. Er staan geen vakjes vooraf aan.",
        },
      ],
    },
    {
      id: "lijst",
      heading: "5. Actuele cookielijst",
      blocks: [
        {
          type: "paragraph",
          text: `${site.name} gebruikt CookieYes als cookiemelder. Daar kan een actuele lijst van cookies worden getoond. Zolang die lijst nog niet op deze pagina staat, kunt u uw keuze altijd wijzigen via Cookie-instellingen.`,
        },
      ],
    },
  ],
} satisfies LegalPageContent;
