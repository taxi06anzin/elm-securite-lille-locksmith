import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TrustBadges from "@/components/TrustBadges";
import ContactForm from "@/components/ContactForm";
import JsonLd from "@/components/JsonLd";
import { CallButton } from "@/components/ui/button-variants";
import { MapPin, CheckCircle, Lock } from "lucide-react";
import ouvertureFine from "@/assets/ouverture-fine.png";
import installationSerrure from "@/assets/installation-serrure.png";

const SerrurierWasquehal = () => {
  const depannages = [
    "Porte claquée",
    "Clé cassée ou inaccessible",
    "Mécanisme multipoints impossible à actionner",
    "Barillet tournant dans le vide"
  ];

  const zones = [
    "Centre", "Noir Bonnet", "Pavé de Lille", "Grand Cottignies", "Triez"
  ];

  return (
    <>
      <Helmet>
        <title>Serrurier Wasquehal – Dépannage immédiat | ELM SÉCURITÉ</title>
        <meta 
          name="description" 
          content="Serrurier à Wasquehal 24/7. Intervention Centre, Noir Bonnet, Pavé de Lille, Cottignies, Triez. Ouverture porte, cylindres renforcés ☎ 06 26 16 06 87" 
        />
        <link rel="canonical" href="https://serrurier-urgence-lille.fr/serrurier-wasquehal" />
      </Helmet>
      <JsonLd />
      
      <div className="min-h-screen bg-background">
        <Header />
        
        <section className="relative py-20 bg-gradient-to-br from-secondary to-primary">
          <div className="container mx-auto px-4 text-secondary-foreground">
            <div className="max-w-3xl">
              <h1 className="text-5xl font-bold mb-6">
                Serrurier Wasquehal – Dépannage immédiat
              </h1>
              <p className="text-xl mb-8 opacity-90">
                Wasquehal est composé de zones pavillonnaires, immeubles récents et intersections via la rocade. 
                Les interventions sont organisées selon l'accès le plus rapide.
              </p>
              <CallButton size="lg" />
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4">
          <div className="-mt-8">
            <TrustBadges />
          </div>

          <section className="py-16 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                Dépannages fréquents
              </h2>
              
              <div className="space-y-3">
                {depannages.map((depannage, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>{depannage}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative h-96 rounded-lg overflow-hidden shadow-elegant">
              <img src={ouvertureFine} alt="Dépannage serrurier Wasquehal" className="w-full h-full object-cover" />
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
                Installation de nouveaux cylindres
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="relative h-80 rounded-lg overflow-hidden shadow-elegant">
                  <img src={installationSerrure} alt="Installation cylindre Wasquehal" className="w-full h-full object-cover" />
                </div>

                <div>
                  <p className="text-muted-foreground mb-6">
                    Possibilité de monter un cylindre renforcé ou un modèle standard selon la porte.
                  </p>

                  <div className="space-y-4">
                    <div className="bg-card p-4 rounded-lg border shadow-card">
                      <Lock className="h-8 w-8 text-primary mb-2" />
                      <h3 className="font-bold mb-1">Cylindre renforcé</h3>
                      <p className="text-sm text-muted-foreground">
                        Protection optimale pour zones pavillonnaires
                      </p>
                    </div>

                    <div className="bg-card p-4 rounded-lg border shadow-card">
                      <Lock className="h-8 w-8 text-primary mb-2" />
                      <h3 className="font-bold mb-1">Cylindre standard</h3>
                      <p className="text-sm text-muted-foreground">
                        Solution économique pour sécurité de base
                      </p>
                    </div>
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
                Téléphone : <a href="tel:0626160687" className="text-primary font-bold hover:underline">06 26 16 06 87</a>
              </p>
              <ContactForm />
            </div>
          </section>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default SerrurierWasquehal;
