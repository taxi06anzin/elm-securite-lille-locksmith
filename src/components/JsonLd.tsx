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
    ],
    "image": `${baseUrl}/og-image.jpg`,
    "@id": `${baseUrl}/#business`,
    "url": fullUrl,
    "telephone": "+33621660867",
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
      "closes": "23:59",
    },
    "areaServed": [
      { "@type": "City", "name": "Lille" },
      { "@type": "City", "name": "Roubaix" },
      { "@type": "City", "name": "Tourcoing" },
      { "@type": "City", "name": "Villeneuve-d'Ascq" },
      { "@type": "City", "name": "Marcq-en-Barœul" },
      { "@type": "City", "name": "Lomme" },
      { "@type": "City", "name": "Hellemmes" },
      { "@type": "City", "name": "La Madeleine" },
      { "@type": "City", "name": "Lambersart" },
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
      "reviewCount": "64",
      "bestRating": "5",
      "worstRating": "1",
    },
    "sameAs": [
      baseUrl,
      GOOGLE_BUSINESS_URL,
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
