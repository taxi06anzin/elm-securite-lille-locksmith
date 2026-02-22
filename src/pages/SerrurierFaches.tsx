import { Helmet } from "react-helmet";
import TrustBadges from "@/components/TrustBadges";
import ContactForm from "@/components/ContactForm";
import JsonLd from "@/components/JsonLd";
import { CallButton } from "@/components/ui/button-variants";
import { MapPin, CheckCircle, Lock } from "lucide-react";
import cleCassee from "@/assets/cle-cassee.png";
import installationSerrure from "@/assets/installation-serrure.png";

const SerrurierFaches = () => {
  const situations = [
    "Blocage total du mécanisme",
    "Clé cassée",
    "Porte claquée",
    "Perte de clés",
    "Cylindre impossible à tourner"
  ];

  const secteurs = [
    "Centre", "Cheminots", "Saint-Exupéry", "Mairie", "Limite Ronchin / Lille Sud"
  ];

  return (
    <>
      <Helmet>
        <title>Serrurier Faches-Thumesnil – Dépannage sur tous les secteurs | ELM SÉCURITÉ</title>
        <meta 
          name="description" 
          content="Serrurier à Faches-Thumesnil 24/7. Intervention Centre, Cheminots, Saint-Exupéry. Proximité aéroport. Ouverture porte ☎ 06 21 66 08 67" 
        />
        <link rel="canonical" href="https://serrurier-urgence-lille.fr/serrurier-faches-thumesnil" />
      </Helmet>
      <JsonLd />
      
      <div className="min-h-screen bg-background">
        
        <section className="relative py-20 bg-gradient-to-br from-secondary to-primary">
          <div className="container mx-auto px-4 text-secondary-foreground">
            <div className="max-w-3xl">
              <h1 className="text-5xl font-bold mb-6">
                Serrurier Faches-Thumesnil – Dépannage sur tous les secteurs
              </h1>
              <p className="text-xl mb-8 opacity-90">
                Commune très demandée en raison de sa proximité avec les grands axes et l'aéroport. 
                Intervention sur portes bloquées, systèmes multipoints, barillets et cylindres endommagés.
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
                Situations prises en charge
              </h2>
              
              <div className="space-y-3">
                {situations.map((situation, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>{situation}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative h-96 rounded-lg overflow-hidden shadow-elegant">
              <img src={cleCassee} alt="Dépannage Faches-Thumesnil" className="w-full h-full object-cover" />
            </div>
          </section>

          <section className="py-16 bg-muted -mx-4 px-4 md:mx-0 md:rounded-lg">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-center">
                Secteurs couverts
              </h2>

              <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
                {secteurs.map((secteur, index) => (
                  <div key={index} className="bg-background border rounded-lg p-4 text-center shadow-card hover:shadow-elegant transition-shadow">
                    <MapPin className="h-5 w-5 text-primary mx-auto mb-2" />
                    <span className="text-sm font-medium">{secteur}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="py-16">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">
                Remplacement de cylindre
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="relative h-80 rounded-lg overflow-hidden shadow-elegant">
                  <img src={installationSerrure} alt="Remplacement cylindre Faches" className="w-full h-full object-cover" />
                </div>

                <div>
                  <p className="text-muted-foreground mb-6">
                    Pose immédiate d'un cylindre adapté lorsque l'accès doit être sécurisé.
                  </p>

                  <div className="bg-card p-6 rounded-lg border shadow-card">
                    <Lock className="h-12 w-12 text-primary mb-4" />
                    <h3 className="font-bold mb-2">Sécurisation rapide</h3>
                    <p className="text-sm text-muted-foreground">
                      Installation immédiate de cylindres adaptés aux besoins de sécurité
                    </p>
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
      </div>
    </>
  );
};

export default SerrurierFaches;
