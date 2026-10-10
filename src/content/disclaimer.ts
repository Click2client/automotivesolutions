import type { LegalPageContent } from "@/content/types";

export const disclaimerContent = {
  metadata: {
    title: "Disclaimer van Automotive Solutions",
    description:
      "Disclaimer van Automotive Solutions over de informatie op de website, inhoud van derden, auteursrecht en de beschikbaarheid van de site.",
  },
  title: "Disclaimer",
  intro:
    "Ondanks de zorg die door Automotive Solutions aan de correcte invoer van gegevens wordt besteed kan Automotive Solutions niet verantwoordelijk en/of aansprakelijk worden gehouden dat de informatie niet juist, onvolledig en/of niet up-to-date is.",
  contactLead: "Vragen over deze disclaimer?",
  articles: [
    {
      id: "derden",
      heading: "1. Informatie van derden",
      blocks: [
        {
          type: "paragraph",
          text: "Een deel van de informatie wordt door derden ingevoerd en Automotive Solutions is op geen enkele wijze aansprakelijk voor de inhoud en/of juistheid van deze informatie.",
        },
        {
          type: "paragraph",
          text: "Automotive Solutions is dan ook niet aansprakelijk voor door derden op www.automotive-solutions.info website geplaatste informatie zoals bijvoorbeeld, maar niet uitsluitend, mededelingen, prijzen, productspecificaties en/of de gevolgen van transacties die op basis van de op www.automotive-solutions.info website vermelde informatie zijn verricht. Indien door derden geplaatste informatie in strijd is met de advertentie voorwaarden voor het plaatsen van die informatie, behoudt Automotive Solutions zich het recht voor om zonder opgave van redenen deze informatie te verwijderen.",
        },
      ],
    },
    {
      id: "auteursrecht",
      heading: "2. Auteursrecht",
      blocks: [
        {
          type: "paragraph",
          text: "Op alle op de Automotive Solutions website aanwezige informatie berust auteursrecht. Het is niet toegestaan om informatie afkomstig van Automotive Solutions zonder voorafgaande schriftelijke toestemming te kopiëren en/of te verspreiden in welke vorm dan ook.",
        },
      ],
    },
    {
      id: "beschikbaarheid",
      heading: "3. Beschikbaarheid en wijzigingen",
      blocks: [
        {
          type: "paragraph",
          text: "Automotive Solutions zal de www.automotive-solutions.info website zo veel mogelijk beschikbaar stellen, d.w.z. 24 uur per dag 7 dagen per week, maar aanvaardt geen enkele aansprakelijkheid voor eventuele gevolgen van (tijdelijke) niet-beschikbaarheid van de Automotive Solutions website. Automotive Solutions behoudt zich het recht voor de Automotive Solutions website alsmede de voorwaarden die op het gebruik daarvan van toepassing zijn aan te passen en/of te wijzigen.",
        },
      ],
    },
  ],
} satisfies LegalPageContent;
