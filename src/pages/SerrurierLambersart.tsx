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
import { MapPin, CheckCircle, Lock } from "lucide-react";
import ouverturePorte from "@/assets/ouverture-porte-1.png";
import changementCylindre from "@/assets/changement-cylindre.jpg";

const SerrurierLambersart = () => {
  const zones = [
    "Canon d'Or", "Bourg", "Pacot-Vandracq", "Canteleu", "Secteur Hippodrome / Colysée"
  ];

  const interventions = [
    "Portes standards",
    "Portes renforcées",
    "Systèmes multipoints",
    "Cylindres européens",
    "Modèles haute sécurité"
  ];

  return (
    <>
      <Helmet>
        <title>Serrurier Lambersart – Dépannage disponible 7j/7 | ELM SÉCURITÉ</title>
        <meta 
          name="description" 
          content="Serrurier à Lambersart 24/7. Intervention tous secteurs : Canon d'Or, Bourg, Pacot, Canteleu, Hippodrome. Ouverture porte, changement cylindre ☎ 06 26 16 06 87" 
        />
        <link rel="canonical" href="https://serrurier-urgence-lille.fr/serrurier-lambersart" />
      </Helmet>
      <JsonLd />
      
      <div className="min-h-screen bg-background">
        <Header />
        
        <section className="relative py-20 bg-gradient-to-br from-secondary to-primary">
          <div className="container mx-auto px-4 text-secondary-foreground">
            <div className="max-w-3xl">
              <h1 className="text-5xl font-bold mb-6">
                Serrurier Lambersart – Dépannage disponible 7j/7
              </h1>
              <p className="text-xl mb-8 opacity-90">
                Intervention dans l'ensemble de Lambersart, secteur résidentiel composé de maisons individuelles, 
                habitats récents et zones plus anciennes proches de Lille. Le service couvre les ouvertures de portes, 
                remplacements de cylindres et dépannages urgents.
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
              <img src={ouverturePorte} alt="Serrurier Lambersart intervention" className="w-full h-full object-cover" />
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6">
                Intervention sur tous types de portes
              </h2>
              
              <p className="text-muted-foreground mb-6">
                Les techniques appliquées permettent d'intervenir sur les portes standards, portes renforcées 
                et systèmes multipoints. L'objectif est de limiter les dégâts lors de l'ouverture, 
                selon la configuration du mécanisme.
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
          </section>

          <section className="py-16 bg-muted -mx-4 px-4 md:mx-0 md:rounded-lg">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-center">
                Zones couvertes à Lambersart
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
                Changement de cylindre ou système de verrouillage
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="relative h-80 rounded-lg overflow-hidden shadow-elegant">
                  <img src={changementCylindre} alt="Changement cylindre Lambersart" className="w-full h-full object-cover" />
                </div>

                <div>
                  <p className="text-muted-foreground mb-6">
                    Remplacement adapté selon le niveau de sécurité recherché. Cylindres européens, 
                    modèles renforcés, ou systèmes multipoints selon la porte concernée.
                  </p>

                  <div className="bg-muted border-l-4 border-primary p-4 rounded-lg">
                    <h3 className="font-bold mb-2">Dépannage urgent Lambersart</h3>
                    <p className="text-sm text-muted-foreground">
                      Prise en charge possible suite à blocage, perte de clés, clé cassée ou problème de fermeture
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

export default SerrurierLambersart;
