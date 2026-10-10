import type { LegalNotice } from "@/content/types";

export const ui = {
  skipToContent: "Naar inhoud",
  mainNav: "Hoofdmenu",
  mobileNav: "Mobiel menu",
  openMenu: "Menu",
  closeMenu: "Sluiten",
  cookieSettings: "Cookie-instellingen",
  footerCompany: "Bedrijf",
  footerContact: "Contact",
  footerLegal: "Juridisch",
  kvkLabel: "KvK",
  vatLabel: "BTW",
  lastUpdated: "Laatst bijgewerkt",
  homeLabel: "Home",
  breadcrumbLabel: "Kruimelpad",
  opensInNewTab: "opent in een nieuw venster",
  backToSite: "Terug naar de website",
  mobileCall: "Bel Rob",
  footerCredit: "Website gerealiseerd door",
  legalNav: "Juridische pagina's",
  onThisPage: "Inhoud",
  mapCredit: "Kaartgegevens © OpenStreetMap",
} as const;

export const legalNotice: LegalNotice = {
  title: "Voorbeeldtekst",
  text: "Dit is een voorbeeld voor het template, geen juridisch advies. Vervang deze tekst door een versie die bij de klant past, of laat een jurist ernaar kijken.",
};
