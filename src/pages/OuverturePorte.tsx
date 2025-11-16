import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TrustBadges from "@/components/TrustBadges";
import ContactForm from "@/components/ContactForm";
import JsonLd from "@/components/JsonLd";
import { CallButton } from "@/components/ui/button-variants";
import { DoorOpen, Key, AlertCircle, CheckCircle } from "lucide-react";
import ouverturePorte1 from "@/assets/ouverture-porte-1.png";
import ouvertureFine from "@/assets/ouverture-fine.png";
import cleCassee from "@/assets/cle-cassee.png";

const OuverturePorte = () => {
  const situations = [
    "Porte claquée avec les clés à l'intérieur",
    "Porte fermée sans clé",
    "Serrure bloquée ou grippée",
    "Clé cassée dans la serrure",
    "Serrure endommagée après effraction",
    "Problème de cylindre ou de canon de serrure"
  ];

  const techniques = [
    {
      title: "Ouverture fine",
      description: "Technique non destructive pour serrures standards. Préservation de votre serrure et de votre porte.",
      icon: Key
    },
    {
      title: "Déblocage de serrure",
      description: "Déblocage des mécanismes grippés ou bloqués sans casse si possible.",
      icon: DoorOpen
    },
    {
      title: "Extraction de clé",
      description: "Retrait de clés cassées dans la serrure avec outils professionnels.",
      icon: AlertCircle
    }
  ];

  return (
    <>
      <Helmet>
        <title>Ouverture de Porte à Lille - Serrurier 24/7 | ELM SÉCURITÉ</title>
        <meta 
          name="description" 
          content="Ouverture de porte à Lille 24h/24. Porte claquée, bloquée ou sans clé ? Intervention rapide en 20-30 min. Sans casse si possible ☎ 06 26 16 06 87" 
        />
        <link rel="canonical" href="https://serrurier-urgence-lille.fr/ouverture-porte" />
      </Helmet>
      <JsonLd />
      
      <div className="min-h-screen bg-background">
        <Header />
        
        <section className="relative py-20 bg-gradient-to-br from-secondary to-primary">
          <div className="container mx-auto px-4 text-secondary-foreground">
            <div className="max-w-3xl">
              <h1 className="text-5xl font-bold mb-6">
                Ouverture de porte Lille – Intervention express
              </h1>
              <p className="text-xl mb-8 opacity-90">
                Ouverture de toutes portes fermées. Porte claquée, clé perdue, mécanisme bloqué. 
                Intervention rapide avec méthodes adaptées au type de serrure.
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
              Types de portes prises en charge
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {situations.map((situation, index) => (
                <div key={index} className="flex items-start gap-3 bg-card p-5 rounded-lg border shadow-card">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>{situation}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="py-16 bg-muted -mx-4 px-4 md:mx-0 md:rounded-lg">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-center">
                Nos techniques d'ouverture de porte
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="relative h-80 rounded-lg overflow-hidden shadow-elegant">
                  <img src={ouvertureFine} alt="Technique ouverture fine" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 to-transparent flex items-end p-6">
                    <div>
                      <h3 className="text-white font-bold text-xl mb-2">Ouverture fine</h3>
                      <p className="text-white/90 text-sm">Technique non destructive pour préserver votre serrure</p>
                    </div>
                  </div>
                </div>
                
                <div className="relative h-80 rounded-lg overflow-hidden shadow-elegant">
                  <img src={cleCassee} alt="Extraction de clé cassée" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 to-transparent flex items-end p-6">
                    <div>
                      <h3 className="text-white font-bold text-xl mb-2">Extraction de clé</h3>
                      <p className="text-white/90 text-sm">Retrait de clés cassées avec outils professionnels</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-12 bg-primary/5 border-l-4 border-primary p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-2">Notre priorité : ouverture sans casse</h3>
                <p className="text-muted-foreground">
                  Notre serrurier à Lille privilégie toujours les techniques d'ouverture fine pour 
                  préserver votre serrure et votre porte. L'ouverture destructive n'est utilisée qu'en 
                  dernier recours, après votre accord et avec un devis préalable.
                </p>
              </div>
            </div>
          </section>

          <section className="py-16">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-center">
                Tarifs ouverture de porte à Lille
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-card border-2 border-primary rounded-lg p-6 text-center">
                  <h3 className="font-bold text-xl mb-4">Ouverture simple</h3>
                  <div className="text-4xl font-bold text-primary mb-4">À partir de 89€</div>
                  <p className="text-muted-foreground text-sm">
                    Porte claquée, ouverture fine sans dégât, horaires normaux
                  </p>
                </div>

                <div className="bg-card border rounded-lg p-6 text-center">
                  <h3 className="font-bold text-xl mb-4">Ouverture complexe</h3>
                  <div className="text-4xl font-bold text-primary mb-4">Sur devis</div>
                  <p className="text-muted-foreground text-sm">
                    Serrure haute sécurité, multi-points, ou nécessitant des outils spécifiques
                  </p>
                </div>
              </div>

              <div className="text-center">
                <p className="text-sm text-muted-foreground mb-6">
                  Devis gratuit sur place avant toute intervention • Tarifs TTC sans surprise
                </p>
                <CallButton size="lg" />
              </div>
            </div>
          </section>

          <section id="contact" className="py-16">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">
                Besoin d'une ouverture de porte à Lille ?
              </h2>
              <ContactForm />
            </div>
          </section>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default OuverturePorte;
