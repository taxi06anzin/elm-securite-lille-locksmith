import { Link } from "react-router-dom";

interface InternalLinksProps {
  currentCity?: string;
}

const InternalLinks = ({ currentCity }: InternalLinksProps) => {
  const cities = [
    { name: "Lille", slug: "serrurier-lille" },
    { name: "Roubaix", slug: "serrurier-roubaix" },
    { name: "Tourcoing", slug: "serrurier-tourcoing" },
    { name: "Villeneuve-d'Ascq", slug: "serrurier-villeneuve-ascq" },
    { name: "Marcq-en-Barœul", slug: "serrurier-marcq-en-baroeul" },
    { name: "La Madeleine", slug: "serrurier-la-madeleine" },
    { name: "Lambersart", slug: "serrurier-lambersart" },
    { name: "Lomme", slug: "serrurier-lomme" },
    { name: "Hellemmes", slug: "serrurier-hellemmes" },
    { name: "Mons-en-Barœul", slug: "serrurier-mons-en-baroeul" },
    { name: "Wasquehal", slug: "serrurier-wasquehal" },
    { name: "Croix", slug: "serrurier-croix" },
    { name: "Mouvaux", slug: "serrurier-mouvaux" },
    { name: "Ronchin", slug: "serrurier-ronchin" },
    { name: "Loos", slug: "serrurier-loos" },
  ];

  // Filter out current city
  const filteredCities = cities.filter(city => city.slug !== currentCity).slice(0, 8);

  return (
    <section className="py-12 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold mb-6 text-center">
            Interventions également disponibles dans les communes proches
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {filteredCities.map((city) => (
              <Link
                key={city.slug}
                to={`/${city.slug}`}
                className="bg-background border rounded-lg p-4 text-center hover:shadow-elegant transition-shadow hover:border-primary"
              >
                <span className="text-sm font-medium">Serrurier {city.name}</span>
              </Link>
            ))}
          </div>
          <div className="mt-8 text-center space-x-4">
            <Link to="/tarifs" className="text-primary hover:underline font-medium">
              Voir nos tarifs
            </Link>
            <Link to="/contact" className="text-primary hover:underline font-medium">
              Nous contacter
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InternalLinks;
