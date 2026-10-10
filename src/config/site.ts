export type NavItem = {
  label: string;
  href: string;
};

export type SitePage = {
  path: string;
  changeFrequency: "weekly" | "monthly" | "yearly";
  priority: number;
};

const hasTerms = true;

export const site = {
  name: "Automotive Solutions",
  legalName: "Rob Nieman",
  url: "https://automotive-solutions.nl",
  description:
    "Rob Nieman licht uw automotive-bedrijf door en begeleidt u bij logistiek, administratie en management. Bel hem in Twisk voor een vrijblijvend gesprek.",
  locale: "nl-NL",
  logo: "/images/logo.png",
  contact: {
    email: "organisatie@quicknet.nl",
    phone: "+31645682968",
    phoneDisplay: "06-45682968",
  },
  address: {
    street: "Dorpsweg 23",
    postalCode: "1676 GC",
    city: "Twisk",
    country: "Nederland",
    countryCode: "NL",
  },
  kvk: "37122225",
  vat: "NL187527453B01",
  socials: [] as { name: string; url: string }[],
  navigation: [
    { label: "Over Rob", href: "#over" },
    { label: "Wat ik doe", href: "#diensten" },
    { label: "Werkwijze", href: "#werkwijze" },
    { label: "Contact", href: "#contact" },
  ],
  footerNavigation: [
    { label: "Leveringsvoorwaarden", href: "/leveringsvoorwaarden" },
    { label: "Privacy statement", href: "/privacy-statement" },
    { label: "Disclaimer", href: "/disclaimer" },
    { label: "Cookies", href: "/cookies" },
  ],
  pages: [
    { path: "/", changeFrequency: "weekly", priority: 1 },
    { path: "/leveringsvoorwaarden", changeFrequency: "yearly", priority: 0.3 },
    { path: "/privacy-statement", changeFrequency: "yearly", priority: 0.3 },
    { path: "/disclaimer", changeFrequency: "yearly", priority: 0.3 },
    { path: "/cookies", changeFrequency: "yearly", priority: 0.3 },
  ],
  legal: {
    hasTerms,
    lastUpdated: "10 oktober 2026",
  },
  features: {
    showReferences: true,
    showForm: true,
    showMap: true,
  },
  verification: {
    google: "",
  },
  credit: {
    label: "Click2Client",
    url: "https://click2client.nl",
  },
} satisfies {
  name: string;
  legalName: string;
  url: string;
  description: string;
  locale: string;
  logo: string;
  contact: { email: string; phone: string; phoneDisplay: string };
  address: {
    street: string;
    postalCode: string;
    city: string;
    country: string;
    countryCode: string;
  };
  kvk: string;
  vat: string;
  socials: { name: string; url: string }[];
  navigation: NavItem[];
  footerNavigation: NavItem[];
  pages: SitePage[];
  legal: { hasTerms: boolean; lastUpdated: string };
  features: { showReferences: boolean; showForm: boolean; showMap: boolean };
  verification: { google: string };
  credit: { label: string; url: string };
};

export function formatAddress(): string {
  const { street, postalCode, city } = site.address;
  return `${street}, ${postalCode} ${city}`;
}
