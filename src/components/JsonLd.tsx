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
    "@type": "LocalBusiness",
    "name": "ELM Sécurité - Serrurier Lille",
    "alternateName": "Serrurier Urgence Lille",
    "image": `${baseUrl}/og-image.jpg`,
    "@id": baseUrl,
    "url": fullUrl,
    "telephone": "+33621660867",
    "priceRange": "€€",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "143 Rue du Molinel",
      "addressLocality": "Lille",
      "postalCode": "59800",
      "addressCountry": "FR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 50.6326385,
      "longitude": 3.0640484
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
        "Sunday"
      ],
      "opens": "00:00",
      "closes": "23:59"
    },
    "areaServed": [
      { "@type": "City", "name": "Lille" },
      { "@type": "City", "name": "Roubaix" },
      { "@type": "City", "name": "Tourcoing" },
      { "@type": "City", "name": "Villeneuve-d'Ascq" },
      { "@type": "City", "name": "Marcq-en-Barœul" },
      { "@type": "City", "name": "Lomme" },
      { "@type": "City", "name": "Hellemmes" }
    ],
    "sameAs": [baseUrl, GOOGLE_BUSINESS_URL]
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
