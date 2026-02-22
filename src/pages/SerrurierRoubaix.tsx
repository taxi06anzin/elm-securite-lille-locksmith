import { Helmet } from "react-helmet";
import TrustBadges from "@/components/TrustBadges";
import ContactForm from "@/components/ContactForm";
import JsonLd from "@/components/JsonLd";
import InternalLinks from "@/components/InternalLinks";
import Breadcrumb from "@/components/Breadcrumb";
import OptimizedImage from "@/components/OptimizedImage";
import { CallButton } from "@/components/ui/button-variants";
import { MapPin, CheckCircle } from "lucide-react";
import ouvertureFine from "@/assets/ouverture-fine.png";
import changementCylindre from "@/assets/changement-cylindre.jpg";

const SerrurierRoubaix = () => {
  const situations = [
    "Porte impossible à ouvrir",
    "Clé cassée dans le cylindre",
    "Perte totale de clés",
    "Serrure multipoints inopérante",
    "Mécanisme bloqué après tentative d'ouverture"
  ];

  const quartiers = [
    "Alma", "Pile", "3 Ponts", "Nouveau Roubaix", 
    "Edouard Vaillant", "Centre-Ville", "Barbieux", 
    "Epeule", "Fresnoy-Mackellerie"
  ];

  return (
    <>
      <Helmet>
        <title>Serrurier Roubaix – Service rapide et disponible 7j/7 | ELM SÉCURITÉ</title>
        <meta 
          name="description" 
          content="Serrurier à Roubaix 24/7. Intervention rapide tous quartiers : Alma, Pile, 3 Ponts, Centre. Ouverture porte, dépannage urgent ☎ 06 21 66 08 67" 
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://serrurier-urgence-lille.fr/serrurier-roubaix" />
        <meta property="og:title" content="Serrurier Roubaix – Service rapide et disponible 7j/7 | ELM SÉCURITÉ" />
        <meta property="og:description" content="Serrurier à Roubaix 24/7. Intervention rapide tous quartiers." />
        <meta property="og:url" content="https://serrurier-urgence-lille.fr/serrurier-roubaix" />
        <meta property="og:image" content="https://serrurier-urgence-lille.fr/og-image.jpg" />
      </Helmet>
      <JsonLd pageName="Serrurier Roubaix" pageUrl="/serrurier-roubaix" />
      
      <div className="min-h-screen bg-background">
        <Breadcrumb items={[{ label: "Serrurier Roubaix", path: "/serrurier-roubaix" }]} />
        
        <section className="relative py-20 bg-gradient-to-br from-secondary to-primary">
          <div className="container mx-auto px-4 text-secondary-foreground">
            <div className="max-w-3xl">
              <h1 className="text-5xl font-bold mb-6">
                Serrurier Roubaix – Service rapide et disponible 7j/7
              </h1>
              <p className="text-xl mb-8 opacity-90">
                Intervention dans tous les secteurs de Roubaix pour les ouvertures de portes, 
                remplacements de mécanismes et dépannages urgents. Le service s'adapte aux immeubles anciens, 
                habitats rénovés, maisons mitoyennes et bâtiments récents.
              </p>
              <CallButton size="lg" />
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4">
          <div className="-mt-8">
            <TrustBadges />
          </div>

          <section className="py-16">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Dépannage serrurier Roubaix
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
              <div>
                <h3 className="font-bold text-lg mb-4">Traitement des situations suivantes :</h3>
                <div className="space-y-3">
                  {situations.map((situation, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>{situation}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative h-80 rounded-lg overflow-hidden shadow-elegant">
                <OptimizedImage src={ouvertureFine} alt="Dépannage serrurier Roubaix - intervention urgente" className="w-full h-full object-cover" />
              </div>
            </div>
          </section>

          <section className="py-16 bg-muted -mx-4 px-4 md:mx-0 md:rounded-lg">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">
                Interventions fréquentes à Roubaix
              </h2>
              
              <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
                Le tissu urbain roubaixien présente une forte diversité d'habitats. Les interventions s'adaptent 
                aux spécificités des maisons en enfilade, immeubles collectifs, résidences récentes proches du centre 
                ou quartiers comme l'Alma, le Pile, les 3 Ponts, Nouveau Roubaix ou Edouard Vaillant.
              </p>

              <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
                {quartiers.map((quartier, index) => (
                  <div key={index} className="bg-background border rounded-lg p-4 text-center shadow-card">
                    <MapPin className="h-5 w-5 text-primary mx-auto mb-2" />
                    <span className="text-sm font-medium">{quartier}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="py-16">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">
                Installation de nouveaux cylindres
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="relative h-80 rounded-lg overflow-hidden shadow-elegant">
                  <OptimizedImage src={changementCylindre} alt="Installation cylindre Roubaix - changement serrure" className="w-full h-full object-cover" />
                </div>

                <div>
                  <p className="text-muted-foreground mb-6">
                    Si l'accès doit être sécurisé, la pose d'un cylindre adapté au logement peut être réalisée 
                    immédiatement après l'ouverture de porte.
                  </p>

                  <div className="bg-muted border-l-4 border-primary p-4 rounded-lg">
                    <h3 className="font-bold mb-2">Types de cylindres installés</h3>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Cylindre européen standard</li>
                      <li>• Cylindre haute sécurité</li>
                      <li>• Cylindre anti-perçage</li>
                      <li>• Cylindre compatible multipoints</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="contact" className="py-16">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold mb-4 text-center">
                Contact
              </h2>
              <p className="text-center text-muted-foreground mb-8">
                Téléphone : <a href="tel:0621660867" className="text-primary font-bold hover:underline">06 21 66 08 67</a>
              </p>
              <ContactForm />
            </div>
          </section>
        </div>

        <InternalLinks currentCity="serrurier-roubaix" />
      </div>
    </>
  );
};

export default SerrurierRoubaix;
