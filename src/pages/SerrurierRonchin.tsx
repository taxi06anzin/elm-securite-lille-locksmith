import { Helmet } from "react-helmet";
import OptimizedImage from "@/components/OptimizedImage";
import TrustBadges from "@/components/TrustBadges";
import ContactForm from "@/components/ContactForm";
import JsonLd from "@/components/JsonLd";
import { CallButton } from "@/components/ui/button-variants";
import { MapPin, CheckCircle, Shield } from "lucide-react";
import ouvertureFine from "@/assets/ouverture-fine.png";
import changementCylindre from "@/assets/changement-cylindre.jpg";

const SerrurierRonchin = () => {
  const interventions = [
    "Blocage multipoints",
    "Clé perdue",
    "Clé cassée",
    "Mécanisme impossible à activer",
    "Cylindre grippé"
  ];

  const quartiers = [
    "Nouveau Ronchin", "Vieux Ronchin", "Les 5 Bonniers", "La Marlière", "Zones proches du Stade Pierre-Mauroy"
  ];

  return (
    <>
      <Helmet>
        <title>Serrurier Ronchin – Dépannage immédiat | ELM SÉCURITÉ</title>
        <meta 
          name="description" 
          content="Serrurier à Ronchin 24/7. Intervention Nouveau Ronchin, Vieux Ronchin, 5 Bonniers, Marlière. Ouverture porte ☎ 06 21 66 08 67" 
        />
        <link rel="canonical" href="https://serrurier-urgence-lille.fr/serrurier-ronchin" />
      </Helmet>
      <JsonLd />
      
      <div className="min-h-screen bg-background">
        
        <section className="relative py-20 bg-gradient-to-br from-secondary to-primary">
          <div className="container mx-auto px-4 text-secondary-foreground">
            <div className="max-w-3xl">
              <h1 className="text-5xl font-bold mb-6">
                Serrurier Ronchin – Dépannage immédiat
              </h1>
              <p className="text-xl mb-8 opacity-90">
                Ronchin est composé de quartiers résidentiels et d'immeubles récents. 
                Les interventions s'adaptent aux portes d'appartements, maisons, accès de garage et entrées principales.
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
              Interventions fréquentes
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
              <div className="relative h-80 rounded-lg overflow-hidden shadow-elegant">
                <OptimizedImage src={ouvertureFine} alt="Dépannage serrurier Ronchin" className="w-full h-full object-cover" />
              </div>

              <div className="space-y-3">
                {interventions.map((intervention, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>{intervention}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="py-16 bg-muted -mx-4 px-4 md:mx-0 md:rounded-lg">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-center">
                Quartiers couverts
              </h2>

              <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
                {quartiers.map((quartier, index) => (
                  <div key={index} className="bg-background border rounded-lg p-4 text-center shadow-card hover:shadow-elegant transition-shadow">
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
                Pose d'un nouveau cylindre
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <p className="text-muted-foreground mb-6">
                    Possibilité de monter un modèle plus résistant pour sécuriser le logement.
                  </p>

                  <div className="bg-card p-6 rounded-lg border shadow-card">
                    <Shield className="h-12 w-12 text-primary mb-4" />
                    <h3 className="font-bold mb-2">Sécurité renforcée</h3>
                    <p className="text-sm text-muted-foreground">
                      Installation de cylindres résistants pour portes d'appartements et maisons
                    </p>
                  </div>
                </div>

                <div className="relative h-80 rounded-lg overflow-hidden shadow-elegant">
                  <OptimizedImage src={changementCylindre} alt="Cylindre Ronchin" className="w-full h-full object-cover" />
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
      </div>
    </>
  );
};

export default SerrurierRonchin;
