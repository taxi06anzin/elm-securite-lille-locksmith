import { Helmet } from "react-helmet";
import { GOOGLE_BUSINESS_URL } from "@/config/site";

interface JsonLdProps {
  pageName?: string;
  pageUrl?: string;
}

const JsonLd = ({ pageName, pageUrl }: JsonLdProps) => {
  const baseUrl = "https://serrurier-urgence-lille.fr";
  const fullUrl = pageUrl ? `${baseUrl}${pageUrl}` : baseUrl;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "Locksmith"],
    "name": "POINT FORT FICHET - ELM SÉCURITÉ",
    "alternateName": [
      "ELM Sécurité",
      "Serrurier Urgence Lille",
      "Point Fort Fichet Lille",
      // Graphie exacte de la fiche Google Business (pour la résolution d'entité)
      "POINT FORT FICHET - ELM SÉCURITÉ serrurier urgence lille",
    ],
    "image": `${baseUrl}/og-image.jpg`,
    "@id": `${baseUrl}/#business`,
    "url": fullUrl,
    "telephone": "+33621660867",
    "legalName": "ELM SÉCURITÉ",
    "vatID": "FR13948562095",
    "foundingDate": "2023-02-01",
    "identifier": [
      { "@type": "PropertyValue", "name": "SIRET", "value": "94856209500018" },
      { "@type": "PropertyValue", "name": "SIREN", "value": "948562095" },
    ],
    "priceRange": "€€",
    "description":
      "Concessionnaire officiel Point Fort Fichet à Lille, ELM Sécurité est le seul Point Fort Fichet de Lille disponible 24h/24 et 7j/7. Certifié par les assurances. Intervention en 15-30 minutes.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "143 Rue du Molinel",
      "addressLocality": "Lille",
      "postalCode": "59800",
      "addressRegion": "Hauts-de-France",
      "addressCountry": "FR",
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 50.6326385,
      "longitude": 3.0640484,
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      "opens": "00:00",
      "closes": "24:00",
    },
    "areaServed": [
      { "@type": "City", "name": "Lille" },
      { "@type": "City", "name": "Roubaix" },
      { "@type": "City", "name": "Tourcoing" },
      { "@type": "City", "name": "Villeneuve-d'Ascq" },
      { "@type": "City", "name": "Marcq-en-Barœul" },
      { "@type": "City", "name": "La Madeleine" },
      { "@type": "City", "name": "Lambersart" },
      { "@type": "City", "name": "Lomme" },
      { "@type": "City", "name": "Loos" },
      { "@type": "City", "name": "Hellemmes" },
      { "@type": "City", "name": "Mons-en-Barœul" },
      { "@type": "City", "name": "Wasquehal" },
      { "@type": "City", "name": "Croix" },
      { "@type": "City", "name": "Mouvaux" },
      { "@type": "City", "name": "Ronchin" },
      { "@type": "City", "name": "Faches-Thumesnil" },
      { "@type": "City", "name": "Wattignies" },
      { "@type": "City", "name": "Hem" },
      { "@type": "City", "name": "Pérenchies" },
      { "@type": "City", "name": "Bondues" },
      { "@type": "City", "name": "Wambrechies" },
      { "@type": "City", "name": "Halluin" },
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Services serrurerie",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Ouverture de porte claquée",
            "description": "Ouverture sans casse en 20 minutes",
          },
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Changement de serrure",
            "description": "Cylindre standard ou haute sécurité A2P",
          },
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Pose de porte blindée Point Fort Fichet",
            "description": "Installation porte blindée certifiée Fichet",
          },
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Sécurisation après effraction",
            "description": "Mise en sécurité urgence 24/7",
          },
        },
      ],
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.7",
      "reviewCount": 65,
      "bestRating": "5",
      "worstRating": "1",
    },
    "sameAs": [
      GOOGLE_BUSINESS_URL,
      // Fiche officielle du réseau Point Fort Fichet (preuve du statut de
      // concessionnaire agréé — backlink/citation à la plus forte autorité).
      "https://reseau.fichet-pointfort.com/fr/fr/france/hauts-de-france/nord/lille/point-fort-fichet-elm-securite-164",
      "https://www.118000.fr/e_C0070091701",
    ],
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

export default JsonLd;
