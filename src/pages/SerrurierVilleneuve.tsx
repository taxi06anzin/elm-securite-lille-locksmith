import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TrustBadges from "@/components/TrustBadges";
import ContactForm from "@/components/ContactForm";
import JsonLd from "@/components/JsonLd";
import InternalLinks from "@/components/InternalLinks";
import Breadcrumb from "@/components/Breadcrumb";
import OptimizedImage from "@/components/OptimizedImage";
import { CallButton } from "@/components/ui/button-variants";
import { MapPin, CheckCircle } from "lucide-react";
import installationSerrure from "@/assets/installation-serrure.png";

const SerrurierVilleneuve = () => {
  const situations = [
    "Ouverture de porte",
    "Clé cassée",
    "Mécanisme multipoints défaillant",
    "Perte de clés",
    "Sécurisation d'accès",
    "Remplacement de barillet"
  ];

  const zones = [
    "Triolo", "Pont-de-Bois", "Cité Scientifique", "Hôtel-de-Ville", 
    "Recueil", "Ascq", "Cousinerie", "Flers-Bourg", "Babylone"
  ];

  return (
    <>
      <Helmet>
        <title>Serrurier Villeneuve-d'Ascq – Dépannage sur toute la ville | ELM SÉCURITÉ</title>
        <meta 
          name="description" 
          content="Serrurier à Villeneuve-d'Ascq 24/7. Intervention tous quartiers : Triolo, Pont-de-Bois, Cité Scientifique, Ascq. Dépannage urgent ☎ 06 21 66 08 67" 
        />
        <link rel="canonical" href="https://serrurier-urgence-lille.fr/serrurier-villeneuve-ascq" />
      </Helmet>
      <JsonLd />
      
      <div className="min-h-screen bg-background">
        <Header />
        
        <section className="relative py-20 bg-gradient-to-br from-secondary to-primary">
          <div className="container mx-auto px-4 text-secondary-foreground">
            <div className="max-w-3xl">
              <h1 className="text-5xl font-bold mb-6">
                Serrurier Villeneuve-d'Ascq – Dépannage sur toute la ville
              </h1>
              <p className="text-xl mb-8 opacity-90">
                La ville présente un habitat varié entre résidences, logements étudiants, maisons familiales 
                et quartiers technologiques. Chaque zone nécessite des techniques adaptées selon le type d'accès.
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
              Situations prises en charge
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {situations.map((situation, index) => (
                <div key={index} className="flex items-start gap-3 bg-card p-5 rounded-lg border shadow-card">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="font-medium">{situation}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="py-16 bg-muted -mx-4 px-4 md:mx-0 md:rounded-lg">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">
                Publication optimisée pour les zones suivantes
              </h2>
              
              <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
                Triolo, Pont-de-Bois, Cité Scientifique, Hôtel-de-Ville, Recueil, Ascq, Cousinerie, Flers-Bourg, Babylone.
              </p>

              <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
                {zones.map((zone, index) => (
                  <div key={index} className="bg-background border rounded-lg p-4 text-center shadow-card hover:shadow-elegant transition-shadow">
                    <MapPin className="h-5 w-5 text-primary mx-auto mb-2" />
                    <span className="text-sm font-medium">{zone}</span>
                  </div>
                ))}
              </div>

              <div className="max-w-2xl mx-auto mt-12">
                <div className="relative h-80 rounded-lg overflow-hidden shadow-elegant">
                  <img src={installationSerrure} alt="Intervention serrurier Villeneuve-d'Ascq" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </section>

          <section className="py-16">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">
                Adaptation aux différents types d'habitat
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-card p-6 rounded-lg border">
                  <h3 className="font-bold text-lg mb-3">Résidences étudiantes</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Intervention adaptée aux portes standardisées et systèmes d'accès collectifs.
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Ouverture rapide</li>
                    <li>• Remplacement cylindre standard</li>
                    <li>• Intervention discrète</li>
                  </ul>
                </div>

                <div className="bg-card p-6 rounded-lg border">
                  <h3 className="font-bold text-lg mb-3">Maisons individuelles</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Techniques adaptées aux portes blindées et systèmes haute sécurité.
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Ouverture fine privilégiée</li>
                    <li>• Installation serrure renforcée</li>
                    <li>• Conseil sécurisation</li>
                  </ul>
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

        <Footer />
      </div>
    </>
  );
};

export default SerrurierVilleneuve;
