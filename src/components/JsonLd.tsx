import { Helmet } from "react-helmet";

const JsonLd = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "ELM Securite",
    "image": "",
    "@id": "",
    "url": "https://serrurier-urgence-lille.fr/",
    "telephone": "06 26 16 06 87",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "143 RUE DU MOLINEL",
      "addressLocality": "LILLE",
      "postalCode": "59800",
      "addressCountry": "FR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 50.6326385,
      "longitude": 3.0640484
    }
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
