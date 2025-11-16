import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TrustBadges from "@/components/TrustBadges";
import ContactForm from "@/components/ContactForm";
import JsonLd from "@/components/JsonLd";
import { CallButton } from "@/components/ui/button-variants";
import { MapPin, CheckCircle, Lock } from "lucide-react";
import interventionImage from "@/assets/intervention-urgence.png";
import changementSerrure from "@/assets/changement-serrure.jpg";

const SerrurierWattignies = () => {
  const depannages = [
    "Ouverture de porte",
    "Remplacement de cylindre",
    "Extraction de clé cassée",
    "Ouverture après perte de clés",
    "Mécanisme coincé"
  ];

  const zones = [
    "Noirignon", "Centre", "Mont-à-Leux", "Secteur Seclin/Wattignies", "Corneille"
  ];

  return (
    <>
      <Helmet>
        <title>Serrurier Wattignies – Dépannage de jour comme de nuit | ELM SÉCURITÉ</title>
        <meta 
          name="description" 
          content="Serrurier à Wattignies 24/7. Intervention Noirignon, Centre, Mont-à-Leux, Corneille. Ouverture porte, cylindre renforcé ☎ 06 21 66 08 67" 
        />
        <link rel="canonical" href="https://serrurier-urgence-lille.fr/serrurier-wattignies" />
      </Helmet>
      <JsonLd />
      
      <div className="min-h-screen bg-background">
        <Header />
        
        <section className="relative py-20 bg-gradient-to-br from-secondary to-primary">
          <div className="container mx-auto px-4 text-secondary-foreground">
            <div className="max-w-3xl">
              <h1 className="text-5xl font-bold mb-6">
                Serrurier Wattignies – Dépannage de jour comme de nuit
              </h1>
              <p className="text-xl mb-8 opacity-90">
                Commune résidentielle composée de lotissements, maisons individuelles et immeubles récents. 
                Interventions rapides pour portes bloquées, cylindres défaillants et mécanismes multipoints.
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
            <div className="relative h-96 rounded-lg overflow-hidden shadow-elegant">
              <img src={interventionImage} alt="Dépannage Wattignies" className="w-full h-full object-cover" />
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6">
                Types de dépannages
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
                Sécurisation
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <p className="text-muted-foreground mb-6">
                    Si la porte doit être protégée, pose immédiate d'un cylindre renforcé.
                  </p>

                  <div className="bg-card p-6 rounded-lg border shadow-card">
                    <Lock className="h-12 w-12 text-primary mb-4" />
                    <h3 className="font-bold mb-2">Cylindre renforcé</h3>
                    <p className="text-sm text-muted-foreground">
                      Protection optimale pour maisons individuelles et lotissements
                    </p>
                  </div>
                </div>

                <div className="relative h-80 rounded-lg overflow-hidden shadow-elegant">
                  <img src={changementSerrure} alt="Sécurisation Wattignies" className="w-full h-full object-cover" />
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

export default SerrurierWattignies;
