// Utility functions for SEO optimizations across all pages

export const generateMetaTags = (
  title: string,
  description: string,
  canonical: string
) => {
  return {
    title,
    description,
    robots: "index, follow",
    canonical,
    og: {
      title,
      description,
      url: canonical,
      image: "https://serrurier-urgence-lille.fr/og-image.jpg",
      type: "website" as const,
      locale: "fr_FR"
    },
    twitter: {
      card: "summary_large_image" as const,
      title: title.substring(0, 70),
      description: description.substring(0, 200)
    }
  };
};

export const localPages = [
  { name: "Lille", slug: "serrurier-lille", label: "Serrurier Lille" },
  { name: "Roubaix", slug: "serrurier-roubaix", label: "Serrurier Roubaix" },
  { name: "Tourcoing", slug: "serrurier-tourcoing", label: "Serrurier Tourcoing" },
  { name: "Villeneuve-d'Ascq", slug: "serrurier-villeneuve-ascq", label: "Serrurier Villeneuve-d'Ascq" },
  { name: "Marcq-en-Barœul", slug: "serrurier-marcq-en-baroeul", label: "Serrurier Marcq-en-Barœul" },
  { name: "La Madeleine", slug: "serrurier-la-madeleine", label: "Serrurier La Madeleine" },
  { name: "Lambersart", slug: "serrurier-lambersart", label: "Serrurier Lambersart" },
  { name: "Mouvaux", slug: "serrurier-mouvaux", label: "Serrurier Mouvaux" },
  { name: "Croix", slug: "serrurier-croix", label: "Serrurier Croix" },
  { name: "Wambrechies", slug: "serrurier-wambrechies", label: "Serrurier Wambrechies" },
  { name: "Mons-en-Barœul", slug: "serrurier-mons-en-baroeul", label: "Serrurier Mons-en-Barœul" },
  { name: "Wasquehal", slug: "serrurier-wasquehal", label: "Serrurier Wasquehal" },
  { name: "Lomme", slug: "serrurier-lomme", label: "Serrurier Lomme" },
  { name: "Loos", slug: "serrurier-loos", label: "Serrurier Loos" },
  { name: "Faches-Thumesnil", slug: "serrurier-faches-thumesnil", label: "Serrurier Faches-Thumesnil" },
  { name: "Ronchin", slug: "serrurier-ronchin", label: "Serrurier Ronchin" },
  { name: "Wattignies", slug: "serrurier-wattignies", label: "Serrurier Wattignies" },
  { name: "Hellemmes", slug: "serrurier-hellemmes", label: "Serrurier Hellemmes" },
  { name: "Hem", slug: "serrurier-hem", label: "Serrurier Hem" },
  { name: "Pérenchies", slug: "serrurier-perenchies", label: "Serrurier Pérenchies" },
  { name: "Bondues", slug: "serrurier-bondues", label: "Serrurier Bondues" },
  { name: "Halluin", slug: "serrurier-halluin", label: "Serrurier Halluin" }
];

export const servicePages = [
  { name: "Dépannage", slug: "depannage-serrurerie", label: "Dépannage Serrurerie" },
  { name: "Ouverture", slug: "ouverture-porte", label: "Ouverture de Porte" },
  { name: "Changement", slug: "changement-serrure", label: "Changement de Serrure" },
  { name: "Porte Blindée", slug: "porte-blindee", label: "Porte Blindée" },
  { name: "Pas Cher", slug: "serrurier-pas-cher", label: "Serrurier Pas Cher" },
  { name: "Tarifs", slug: "tarifs", label: "Nos Tarifs" },
  { name: "Contact", slug: "contact", label: "Contact" }
];
