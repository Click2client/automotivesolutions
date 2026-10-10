import { formatAddress, site } from "@/config/site";
import type { LegalPageContent } from "@/content/types";

export const privacyStatementContent = {
  metadata: {
    title: "Privacy statement van Rob Nieman",
    description:
      "Lees welke gegevens Automotive Solutions verwerkt, waarvoor, met wie die worden gedeeld en welke rechten u heeft. Inclusief het contactformulier op deze website.",
  },
  title: "Privacy statement",
  intro:
    "Bij Automotive Solutions begrijpen wij dat de bezoekers van onze website grote waarde hechten aan hun privacy en dat de verwerking van persoonsgegevens plaats dient te vinden overeenkomstig de geldende regelgeving. De volgende informatie is opgesteld om de bezoekers van onze website te informeren over welke gegevens wij verzamelen en hoe wij met deze verzamelde gegevens omgaan.",
  contactLead: "Vragen over dit privacy statement?",
  articles: [
    {
      id: "verantwoordelijke",
      heading: "1. Wie is verantwoordelijk",
      blocks: [
        {
          type: "paragraph",
          text: `${site.legalName}, handelend onder de naam ${site.name}, is verantwoordelijk voor de verwerking van persoonsgegevens via deze website.`,
        },
        {
          type: "paragraph",
          text: `Adres: ${formatAddress()}. E-mail: ${site.contact.email}. Telefoon: ${site.contact.phoneDisplay}. KvK: ${site.kvk}. Btw: ${site.vat}.`,
        },
      ],
    },
    {
      id: "verwerking",
      heading: "2. Verwerking en gebruik van persoonsgegevens",
      blocks: [
        {
          type: "paragraph",
          text: "Automotive Solutions is de exclusieve eigenaar van de door haar verzamelde persoonsgegevens die van u zijn ontvangen na het invullen van het daarvoor bestemde scherm op onze website. Uw gegevens zullen niet verkocht, gedeeld met of op andere wijze aan derden bekend worden gemaakt, tenzij u hier toestemming voor gegeven heeft, anders dan de gevallen als genoemd in deze privacy statement.",
        },
        {
          type: "paragraph",
          text: "De door ons verwerkte persoonsgegevens kunnen onder meer de volgende gegevens betreffen: naam, adres, woonplaats, telefoonnummer(s) en e-mailadres.",
        },
        {
          type: "paragraph",
          text: "Wij verwerken uw persoonsgegevens voor de volgende doeleinden: verwerken van marktinformatie, het toesturen van nieuwsbrieven en directmail activiteiten van automotive partners. Wij verwerken alleen die persoonsgegevens die in het voorkomende geval noodzakelijk zijn. Met andere woorden: wij zorgen ervoor dat voor elk soort verwerking alleen die persoonsgegevens worden verwerkt die accuraat, toereikend, terzake dienend en niet bovenmatig zijn.",
        },
        {
          type: "paragraph",
          text: "Alleen als u ons bij uw registratie daartoe toestemming hebt gegeven, zullen wij uw persoonsgegevens aan derden, dat wil zeggen niet aan ons gelieerde bedrijven, of derde landen, dat wil zeggen landen buiten de EU, doorgeven. Anders dan in de hiervoor beschreven gevallen vindt zonder uw voorafgaande toestemming geen doorgifte aan derden van uw persoonsgegevens plaats, tenzij dit noodzakelijk is voor de uitvoering van de diensten waarvan u gebruik wenst te maken, of indien wij hiertoe op grond van een wettelijke verplichting zijn gehouden.",
        },
        {
          type: "paragraph",
          text: "Tenzij u ons heeft medegedeeld dat u daarop geen prijs stelt, zullen wij uw persoonsgegevens tevens verwerken om u te kunnen informeren over producten en diensten van ons bedrijf en aan ons gelieerde bedrijven. De door u versterkte gegevens stellen ons in staat u te benaderen met en te interesseren voor producten die op uw persoonlijke situatie of die van de instelling die u vertegenwoordigd zijn toegesneden. Voorts kunnen uw gegevens gebruikt worden voor onderzoek dat wij doen naar mogelijkheden voor verdere optimalisering van onze dienstverlening en de dienstverlening van de aan ons gelieerde bedrijven. Uw persoonsgegevens worden in dat kader geanonimiseerd en zijn dus niet meer tot u herleidbaar.",
        },
      ],
    },
    {
      id: "formulier",
      heading: "3. Contactformulier op deze website",
      blocks: [
        {
          type: "paragraph",
          text: "Via het formulier op deze website vraagt Automotive Solutions uw naam, uw telefoonnummer en, als u dat invult, een korte omschrijving van uw vraag. Die gegevens worden gebruikt om u terug te bellen.",
        },
        {
          type: "paragraph",
          text: "Het formulier bevat een verborgen veld tegen spam en een controle van Cloudflare Turnstile. Zonder die controle wordt het bericht niet verstuurd.",
        },
      ],
    },
    {
      id: "bewaartermijnen",
      heading: "4. Bewaartermijnen",
      blocks: [
        {
          type: "paragraph",
          text: "In het privacy statement van Automotive Solutions staat geen vaste bewaartermijn. Gegevens uit het contactformulier worden gebruikt om u terug te bellen. Er is op deze website geen aparte termijn vastgelegd.",
        },
      ],
    },
    {
      id: "verwerkers",
      heading: "5. Delen met derden",
      blocks: [
        {
          type: "paragraph",
          text: "Voor de werking van deze website kunnen gegevens worden verwerkt door partijen die een taak voor Automotive Solutions uitvoeren:",
        },
        {
          type: "bullets",
          items: [
            "Vercel, voor het hosten van de website.",
            "Resend, voor het afleveren van e-mail uit het contactformulier.",
            "Cloudflare, voor de spamcontrole (Turnstile) op het formulier.",
            "Google, voor Tag Manager en Analytics, alleen nadat u daarvoor toestemming heeft gegeven via de cookiemelder.",
          ],
        },
      ],
    },
    {
      id: "rechten",
      heading: "6. Wijziging, verwijderen en overige rechten",
      blocks: [
        {
          type: "paragraph",
          text: "Op uw verzoek zullen wij uw gegevens verbeteren, aanvullen, verwijderen of afschermen in geval de gegevens feitelijk onjuist zijn. Dit kan tot gevolg hebben dat u geen gebruik meer kunt maken van (een deel van) onze diensten.",
        },
        {
          type: "paragraph",
          text: "U kunt ook vragen om inzage, beperking of overdracht van uw gegevens, en bezwaar maken tegen een verwerking. Stuur daarvoor een e-mail naar het adres op deze pagina. We kunnen vragen uw identiteit te bevestigen voordat we een verzoek uitvoeren.",
        },
      ],
    },
    {
      id: "beveiliging",
      heading: "7. Beveiliging van gegevens",
      blocks: [
        {
          type: "paragraph",
          text: "Ten behoeve van de beveiliging van de door ons verwerkte gegevens gebruiken wij veiligheidsprocedures ten aanzien van het vastleggen en verstrekken van de gegevens, onder meer om te voorkomen dat onbevoegden toegang krijgen tot deze gegevens.",
        },
      ],
    },
    {
      id: "wijzigingen",
      heading: "8. Wijzigingen",
      blocks: [
        {
          type: "paragraph",
          text: "Automotive Solutions behoudt zich het recht voor deze privacy statement van tijd tot tijd aan te passen. Wij raden u derhalve aan onze website regelmatig te bezoeken voor een update van ons privacy beleid.",
        },
      ],
    },
    {
      id: "klachten",
      heading: "9. Klachten",
      blocks: [
        {
          type: "paragraph",
          text: "Bent u het niet eens met hoe wij met uw gegevens omgaan, dan kunt u een klacht indienen bij de Autoriteit Persoonsgegevens.",
        },
      ],
    },
  ],
} satisfies LegalPageContent;
