import type { ImageAsset, PageMeta } from "@/content/types";

const portrait: ImageAsset = {
  src: "/images/home/rob-nieman.jpg",
  alt: "Portret van Rob Nieman",
  width: 1067,
  height: 1600,
};

const approachImage: ImageAsset = {
  src: "/images/home/overleg-aan-tafel.jpg",
  alt: "Overleg aan tafel met documenten",
  width: 1400,
  height: 935,
};

const mapImage: ImageAsset = {
  src: "/images/home/kaart-twisk.jpg",
  alt: "Gedesatureerde kaart van Dorpsweg in Twisk, met een rode markering bij Automotive Solutions",
  width: 960,
  height: 320,
};

export const homeContent = {
  metadata: {
    title: "De frisse blik voor uw organisatie",
    description:
      "Rob Nieman licht uw automotive-bedrijf door en begeleidt u bij logistiek, administratie en management. Bel hem in Twisk voor een vrijblijvend gesprek.",
  } satisfies PageMeta,
  hero: {
    eyebrow: "Rob Nieman · Onafhankelijk adviseur bedrijfsorganisatie",
    title: "De frisse blik die uw organisatie nodig heeft.",
    intro:
      "Ik licht uw bedrijf door en begeleid u bij logistieke, administratieve en managementzaken. Zo krijgt u uw handen vrij voor wat u het beste kunt: uw onderneming runnen.",
    primaryCta: "Bel Rob direct",
    secondaryCta: "Bekijk werkwijze",
    image: portrait,
    captionName: "Rob Nieman",
    captionMeta: "Automotive Solutions · Twisk",
  },
  strip: [
    { label: "Voor wie", value: "Directies en organisaties in de automotive" },
    { label: "Hoe", value: "Onafhankelijk, op basis van uw eigen kengetallen" },
    { label: "Uitgangspunt", value: "U blijft verantwoordelijk, ik werk mee" },
  ],
  about: {
    eyebrow: "Over Rob",
    title: "Ik ken de werkplaats van binnenuit. Daarom kijk ik anders naar uw cijfers.",
    paragraphs: [
      "Ik werk al mijn hele loopbaan in de automotive. In de werkplaats, bij dealers en in de leiding van bedrijven. Ik weet wat een drukke maandagochtend doet met planning, marge en humeur.",
      "Sinds een aantal jaren werk ik onafhankelijk, onder de naam Automotive Solutions. Dat betekent: geen importeur, geen softwareleverancier en geen keten achter mij. Ik adviseer alleen in uw belang.",
      "Mijn aanpak is praktisch. Ik begin bij de cijfers die er al zijn en kijk mee op de vloer. Daarna maken we samen een plan dat past bij uw bedrijf en uw mensen.",
    ],
    link: "Maak kennis met Rob",
  },
  services: {
    eyebrow: "Wat ik doe",
    title: "Drie pijlers. Eén doel: een gezond bedrijf dat blijft draaien.",
    intro: "Elk traject start bij uw eigen cijfers. Daarna kijken we waar de grootste winst zit.",
    items: [
      {
        number: "01",
        title: "Omzet verhogen",
        intro: "Meer uit de uren en werkorders die u al heeft.",
        points: [
          "Omzet per werkorder en per dag",
          "Capaciteit en afsprakenplanning",
          "Marge per omzettype",
        ],
      },
      {
        number: "02",
        title: "Bedrijfsvergelijking",
        intro: "Weten waar u staat ten opzichte van vergelijkbare bedrijven.",
        points: [
          "Budget- en margeanalyse per monteur",
          "Analyse per werkorder",
          "Benchmark met andere bedrijven en binnen de groep",
        ],
      },
      {
        number: "03",
        title: "Positie versterken",
        intro: "Zekerheid regelen op de punten die u niet dagelijks ziet.",
        points: [
          "Claims, verzekeringen en garantieclaims richting leveranciers",
          "Personeelscontracten en functioneringsgesprekken",
          "Detachering, noodopvang personeel en technisch callcenter",
        ],
      },
    ],
  },
  approach: {
    eyebrow: "Mijn aanpak",
    title: "Uw bedrijf blijft uw bedrijf.",
    intro:
      "Ik kom niet met een blauwdruk. Ik kijk mee, stel vragen en help u keuzes maken die bij uw bedrijf passen.",
    image: approachImage,
    points: [
      {
        number: "01",
        title: "Onafhankelijk en fris",
        text: "Geen belangen bij leveranciers of ketens. Ik zeg wat ik zie.",
      },
      {
        number: "02",
        title: "Identiteit en imago blijven behouden",
        text: "Uw klanten herkennen uw bedrijf. Dat verandert niet.",
      },
      {
        number: "03",
        title: "De directie houdt de regie",
        text: "U blijft verantwoordelijk. Continuïteit staat voorop.",
      },
      {
        number: "04",
        title: "Medewerkers doen mee",
        text: "Verbeteringen die op de vloer ontstaan, houden stand.",
      },
      {
        number: "05",
        title: "Klaar voor een veranderende markt",
        text: "Elektrificatie, nieuwe merken, krappe arbeidsmarkt. Ik help u voorsorteren.",
      },
    ],
  },
  process: {
    eyebrow: "Werkwijze",
    title: "In vijf stappen van kennismaking naar resultaat.",
    intro: "Het eerste gesprek is vrijblijvend. Daarna bepaalt u het tempo.",
    steps: [
      {
        label: "Stap 1",
        title: "Kennismaking",
        text: "Een vrijblijvend gesprek over uw situatie en uw vraag.",
      },
      {
        label: "Stap 2",
        title: "Analyse",
        text: "Kengetallen, processen en een vergelijking met andere bedrijven.",
      },
      {
        label: "Stap 3",
        title: "Doel en plan",
        text: "Samen met de directie een concreet en meetbaar doel formuleren.",
      },
      {
        label: "Stap 4",
        title: "Samen uitvoeren",
        text: "Met de medewerkers, terwijl de directie de regie houdt.",
      },
      {
        label: "Stap 5",
        title: "Evalueren en borgen",
        text: "Resultaten meten en verbeteringen vastleggen.",
      },
    ],
  },
  contact: {
    eyebrow: "Contact",
    title: "Bellen werkt het snelst.",
    intro:
      "Een eerste gesprek is vrijblijvend. Zit ik in een werkplaats, dan bel ik u dezelfde dag terug.",
    addressLines: ["Rob Nieman · Automotive Solutions", "Dorpsweg 23, 1676 GC Twisk"],
    map: mapImage,
  },
};
