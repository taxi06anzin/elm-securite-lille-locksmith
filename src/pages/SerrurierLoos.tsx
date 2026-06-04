import { Helmet } from "react-helmet";
import OptimizedImage from "@/components/OptimizedImage";
import TrustBadges from "@/components/TrustBadges";
import ContactForm from "@/components/ContactForm";
import JsonLd from "@/components/JsonLd";
import InternalLinks from "@/components/InternalLinks";
import { CallButton } from "@/components/ui/button-variants";
import { MapPin, CheckCircle } from "lucide-react";
import ouverturePorte from "@/assets/ouverture-porte-1.png";
import changementSerrure from "@/assets/changement-serrure.jpg";

const SerrurierLoos = () => {
  const interventions = [
    "Porte bloquée",
    "Clé cassée",
    "Barillet défaillant",
    "Porte claquée",
    "Perte de clés"
  ];

  const zones = [
    "Centre-ville", "CHU / Eurasanté", "Les Oliveaux", "Quartier de la Mairie", "Secteur Loos-lès-Lille"
  ];

  return (
    <>
      <Helmet>
        <title>Serrurier Loos – Intervention rapide 7j/7 | ELM SÉCURITÉ</title>
        <meta 
          name="description" 
          content="Serrurier à Loos 24/7. Intervention Centre-ville, CHU Eurasanté, Oliveaux. Ouverture porte, changement cylindre ☎ 06 21 66 08 67" 
        />
        <link rel="canonical" href="https://serrurier-urgence-lille.fr/serrurier-loos" />
      </Helmet>
      <JsonLd />
      
      <div className="min-h-screen bg-background">
        
        <section className="relative py-20 bg-gradient-to-br from-secondary to-primary">
          <div className="container mx-auto px-4 text-secondary-foreground">
            <div className="max-w-3xl">
              <h1 className="text-5xl font-bold mb-6">
                Serrurier Loos – Intervention rapide 7j/7
              </h1>
              <p className="text-xl mb-8 opacity-90">
                Loos concentre un habitat dense autour du centre, avec des interventions fréquentes 
                en raison des immeubles, maisons anciennes et rues étroites du secteur. 
                Le service couvre toutes les situations urgentes.
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
              Ouverture de porte Loos
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
              <div>
                <p className="text-muted-foreground mb-6">
                  Interventions réalisées sur :
                </p>
                <div className="space-y-3">
                  {interventions.map((intervention, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>{intervention}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative h-80 rounded-lg overflow-hidden shadow-elegant">
                <OptimizedImage src={ouverturePorte} alt="Ouverture porte Loos" className="w-full h-full object-cover" />
              </div>
            </div>
          </section>

          <section className="py-16 bg-muted -mx-4 px-4 md:mx-0 md:rounded-lg">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-center">
                Zones desservies
              </h2>

              <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
                {zones.map((zone, index) => (
                  <div key={index} className="bg-background border rounded-lg p-4 text-center shadow-card hover:shadow-elegant transition-shadow">
                    <MapPin className="h-5 w-5 text-primary mx-auto mb-2" />
                    <span className="text-sm font-medium">{zone}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="py-16">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">
                Changement de cylindre
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="relative h-80 rounded-lg overflow-hidden shadow-elegant">
                  <OptimizedImage src={changementSerrure} alt="Changement cylindre Loos" className="w-full h-full object-cover" />
                </div>

                <div>
                  <p className="text-muted-foreground mb-6">
                    Pose adaptée selon le niveau de sécurité souhaité.
                  </p>

                  <div className="bg-muted border-l-4 border-primary p-4 rounded-lg">
                    <h3 className="font-bold mb-2">Installation professionnelle</h3>
                    <p className="text-sm text-muted-foreground">
                      Cylindres adaptés aux immeubles et maisons anciennes du secteur de Loos
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <InternalLinks currentCity="serrurier-loos" />

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
      </div>
    </>
  );
};

export default SerrurierLoos;
