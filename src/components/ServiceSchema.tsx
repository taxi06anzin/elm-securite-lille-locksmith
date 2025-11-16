import { Helmet } from "react-helmet";

interface ServiceSchemaProps {
  serviceName: string;
  description: string;
  serviceType: string;
  priceRange?: string;
  areaServed?: string[];
}

const ServiceSchema = ({ 
  serviceName, 
  description, 
  serviceType,
  priceRange = "€€",
  areaServed = ["Lille", "Roubaix", "Tourcoing", "Villeneuve-d'Ascq"]
}: ServiceSchemaProps) => {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": serviceType,
    "name": serviceName,
    "description": description,
    "provider": {
      "@type": "LocalBusiness",
      "name": "ELM Sécurité - Serrurier Lille",
      "telephone": "+33621660867",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "143 Rue du Molinel",
        "addressLocality": "Lille",
        "postalCode": "59800",
        "addressCountry": "FR"
      },
      "priceRange": priceRange,
      "image": "https://serrurier-urgence-lille.fr/og-image.jpg",
      "url": "https://serrurier-urgence-lille.fr"
    },
    "areaServed": areaServed.map(city => ({
      "@type": "City",
      "name": city
    })),
    "availableChannel": {
      "@type": "ServiceChannel",
      "serviceUrl": "https://serrurier-urgence-lille.fr",
      "servicePhone": {
        "@type": "ContactPoint",
        "telephone": "+33621660867",
        "contactType": "customer service",
        "availableLanguage": "French",
        "areaServed": "FR"
      }
    },
    "hoursAvailable": {
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
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(serviceSchema)}
      </script>
    </Helmet>
  );
};

export default ServiceSchema;
