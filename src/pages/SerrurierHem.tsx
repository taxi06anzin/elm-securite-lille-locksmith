import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TrustBadges from "@/components/TrustBadges";
import ContactForm from "@/components/ContactForm";
import JsonLd from "@/components/JsonLd";
import { CallButton } from "@/components/ui/button-variants";
import { MapPin, CheckCircle, Clock } from "lucide-react";
import ouvertureFine from "@/assets/ouverture-fine.png";
import changementCylindre from "@/assets/changement-cylindre.jpg";

const SerrurierHem = () => {
  const situations = [
    "Porte impossible à ouvrir",
    "Mécanisme multipoints bloqué",
    "Clé cassée dans le cylindre",
    "Perte de clés",
    "Barillet endommagé"
  ];

  const quartiers = [
    "Centre Hem", "Lionderie", "Longchamp", "Beaumont", "Les 3 Baudets"
  ];

  return (
    <>
      <Helmet>
        <title>Serrurier Hem – Dépannage immédiat sur toute la commune | ELM SÉCURITÉ</title>
        <meta 
          name="description" 
          content="Serrurier à Hem 24/7. Intervention Centre, Lionderie, Longchamp, Beaumont, 3 Baudets. Ouverture porte, cylindre renforcé ☎ 06 21 66 08 67" 
        />
        <link rel="canonical" href="https://serrurier-urgence-lille.fr/serrurier-hem" />
      </Helmet>
      <JsonLd />
      
      <div className="min-h-screen bg-background">
        <Header />
        
        <section className="relative py-20 bg-gradient-to-br from-secondary to-primary">
          <div className="container mx-auto px-4 text-secondary-foreground">
            <div className="max-w-3xl">
              <h1 className="text-5xl font-bold mb-6">
                Serrurier Hem – Dépannage immédiat sur toute la commune
              </h1>
              <p className="text-xl mb-8 opacity-90">
                Hem présente une zone résidentielle composée de lotissements récents, maisons individuelles 
                et immeubles étagés. Les interventions couvrent les ouvertures de portes, remplacements de cylindres 
                et toutes les urgences liées aux mécanismes de fermeture.
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
              Ouverture de porte Hem
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
              <div className="relative h-80 rounded-lg overflow-hidden shadow-elegant">
                <img src={ouvertureFine} alt="Ouverture porte Hem" className="w-full h-full object-cover" />
              </div>

              <div>
                <p className="text-muted-foreground mb-6">
                  Traitement des situations suivantes :
                </p>
                <div className="space-y-3">
                  {situations.map((situation, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>{situation}</span>
                    </div>
                  ))}
                </div>
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
                Remplacement de cylindre
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <p className="text-muted-foreground mb-6">
                    Installation d'un cylindre standard ou renforcé selon la configuration de la porte 
                    et le niveau de sécurité recherché.
                  </p>

                  <div className="bg-muted border-l-4 border-primary p-4 rounded-lg">
                    <h3 className="font-bold mb-2">Intervention 7j/7</h3>
                    <p className="text-sm text-muted-foreground">
                      Déplacement possible en journée, soirée ou nuit selon la situation rencontrée
                    </p>
                  </div>
                </div>

                <div className="relative h-80 rounded-lg overflow-hidden shadow-elegant">
                  <img src={changementCylindre} alt="Remplacement cylindre Hem" className="w-full h-full object-cover" />
                </div>
              </div>

              <div className="mt-12 text-center">
                <div className="bg-card p-6 rounded-lg border shadow-card inline-block">
                  <Clock className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-bold mb-2">Disponibilité totale</h3>
                  <p className="text-sm text-muted-foreground">
                    Service accessible 24h/24 sur toute la commune de Hem
                  </p>
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

export default SerrurierHem;
