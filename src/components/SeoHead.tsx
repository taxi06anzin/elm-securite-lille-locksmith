import { Helmet } from "react-helmet";

interface SeoHeadProps {
  title: string;
  description: string;
  canonical: string;
}

const SeoHead = ({ title, description, canonical }: SeoHeadProps) => {
  // Slash final pour correspondre à l'URL réellement servie par Netlify
  // (react-snap génère route/index.html → Netlify sert /route/).
  const canonicalUrl = canonical.endsWith("/") ? canonical : `${canonical}/`;
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph — image (og:image) + twitter:card/image : défaut site-wide dans index.html */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:locale" content="fr_FR" />

      {/* Twitter Card */}
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  );
};

export default SeoHead;
