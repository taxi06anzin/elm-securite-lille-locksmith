import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Breadcrumb from "@/components/Breadcrumb";
import JsonLd from "@/components/JsonLd";
import SeoHead from "@/components/SeoHead";
import { MapPin, CheckCircle } from "lucide-react";

const VillesCouvertes = () => {
  const villes = [
    { name: "Lille", slug: "serrurier-lille", description: "Centre MEL - Intervention 24/7" },
    { name: "Roubaix", slug: "serrurier-roubaix", description: "Secteur Est - Dépannage immédiat" },
    { name: "Tourcoing", slug: "serrurier-tourcoing", description: "Proximité frontalière - Service rapide" },
    { name: "Villeneuve-d'Ascq", slug: "serrurier-villeneuve-ascq", description: "Zone universitaire - Intervention rapide" },
    { name: "Marcq-en-Barœul", slug: "serrurier-marcq-en-baroeul", description: "Secteur résidentiel premium" },
    { name: "La Madeleine", slug: "serrurier-la-madeleine", description: "Centre-ville actif - Service 24/7" },
    { name: "Lambersart", slug: "serrurier-lambersart", description: "Zone résidentielle - Dépannage rapide" },
    { name: "Lomme", slug: "serrurier-lomme", description: "Secteur Ouest - Intervention 24/7" },
    { name: "Hellemmes", slug: "serrurier-hellemmes", description: "Proximité Lille - Service immédiat" },
    { name: "Mons-en-Barœul", slug: "serrurier-mons-en-baroeul", description: "Secteur résidentiel - Dépannage 24/7" },
    { name: "Wasquehal", slug: "serrurier-wasquehal", description: "Zone Est - Service rapide" },
    { name: "Croix", slug: "serrurier-croix", description: "Proximité Roubaix - Intervention immédiate" },
    { name: "Mouvaux", slug: "serrurier-mouvaux", description: "Secteur calme - Dépannage 24/7" },
    { name: "Ronchin", slug: "serrurier-ronchin", description: "Sud Lille - Service rapide" },
    { name: "Loos", slug: "serrurier-loos", description: "Secteur Sud - Intervention 24/7" },
    { name: "Faches-Thumesnil", slug: "serrurier-faches-thumesnil", description: "Zone commerciale - Service immédiat" },
    { name: "Wattignies", slug: "serrurier-wattignies", description: "Secteur Sud-Est - Dépannage rapide" },
    { name: "Hem", slug: "serrurier-hem", description: "Proximité Roubaix - Intervention 24/7" },
    { name: "Perenchies", slug: "serrurier-perenchies", description: "Ouest MEL - Service rapide" },
    { name: "Bondues", slug: "serrurier-bondues", description: "Secteur premium - Haute sécurité" },
    { name: "Wambrechies", slug: "serrurier-wambrechies", description: "Zone Nord - Dépannage immédiat" },
    { name: "Halluin", slug: "serrurier-halluin", description: "Frontière belge - Service 24/7" },
  ];

  return (
    <>
      <SeoHead 
        title="Serrurier Métropole Lilloise – Villes | ELM SÉCURITÉ"
        description="Serrurier intervenant dans 22 communes de la MEL : Lille, Roubaix, Tourcoing, Villeneuve-d'Ascq et plus. Dépannage 24/7 en 20-30 min ☎ 06 21 66 08 67"
        canonical="https://serrurier-urgence-lille.fr/villes-couvertes"
      />
      <JsonLd pageName="Villes Couvertes" pageUrl="/villes-couvertes" />
      
      <div className="min-h-screen bg-background">
        <Breadcrumb 
          items={[
            { label: "Accueil", path: "/" },
            { label: "Villes Couvertes", path: "/villes-couvertes" }
          ]} 
        />
        
        <section className="relative py-20 bg-gradient-to-br from-secondary to-primary">
          <div className="container mx-auto px-4 text-secondary-foreground">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl font-bold mb-6">
                Villes et communes couvertes par ELM Sécurité
              </h1>
              <p className="text-xl mb-4 opacity-90">
                Intervention rapide 24h/24 et 7j/7 dans toute la Métropole Européenne de Lille
              </p>
              <p className="text-lg opacity-80">
                22 communes couvertes • Temps d'intervention : 20-30 minutes
              </p>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 py-16">
          <section className="mb-16">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                Zone d'intervention complète
              </h2>
              <p className="text-muted-foreground text-lg">
                Notre équipe intervient rapidement dans l'ensemble de la Métropole Lilloise. 
                Chaque ville bénéficie d'un service de qualité adapté aux spécificités locales.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {villes.map((ville) => (
                <Link
                  key={ville.slug}
                  to={`/${ville.slug}`}
                  className="bg-card border rounded-lg p-6 hover:shadow-elegant transition-all hover:border-primary group"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">
                        Serrurier {ville.name}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {ville.description}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          <section className="py-12 bg-muted/30 -mx-4 px-4 md:mx-0 md:rounded-lg mb-16">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">
                Pourquoi choisir ELM Sécurité ?
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold mb-2">Intervention rapide garantie</h3>
                    <p className="text-muted-foreground text-sm">
                      Temps d'arrivée de 20 à 30 minutes dans toute la MEL
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold mb-2">Service 24h/24 et 7j/7</h3>
                    <p className="text-muted-foreground text-sm">
                      Disponible jour et nuit, week-ends et jours fériés
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold mb-2">Tarifs transparents</h3>
                    <p className="text-muted-foreground text-sm">
                      Devis gratuit avant intervention, pas de frais cachés
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold mb-2">Expertise locale</h3>
                    <p className="text-muted-foreground text-sm">
                      Connaissance parfaite des communes et de leurs spécificités
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="max-w-3xl mx-auto text-center">
            <div className="bg-gradient-primary text-primary-foreground p-8 rounded-lg">
              <h2 className="text-3xl font-bold mb-4">
                Besoin d'un serrurier maintenant ?
              </h2>
              <p className="text-lg mb-6 opacity-90">
                Appelez-nous immédiatement pour une intervention rapide
              </p>
              <a 
                href="tel:0621660867"
                className="inline-block bg-background text-foreground px-8 py-4 rounded-lg font-bold text-lg hover:shadow-elegant transition-shadow"
              >
                06 21 66 08 67
              </a>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default VillesCouvertes;
