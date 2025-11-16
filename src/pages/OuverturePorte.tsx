import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TrustBadges from "@/components/TrustBadges";
import ContactForm from "@/components/ContactForm";
import JsonLd from "@/components/JsonLd";
import { CallButton } from "@/components/ui/button-variants";
import { DoorOpen, Key, AlertCircle, CheckCircle } from "lucide-react";

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
                Ouverture de Porte à Lille
              </h1>
              <p className="text-xl mb-8 opacity-90">
                Service professionnel d'ouverture de porte 24h/24 et 7j/7 à Lille. 
                Porte claquée ou bloquée ? Notre serrurier intervient en 20-30 minutes.
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
              Situations d'ouverture de porte à Lille
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
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-center">
                Nos techniques d'ouverture de porte
              </h2>
              
              <div className="grid md:grid-cols-3 gap-8">
                {techniques.map((technique, index) => {
                  const Icon = technique.icon;
                  return (
                    <div key={index} className="bg-background p-6 rounded-lg shadow-card">
                      <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                        <Icon className="h-7 w-7 text-primary" />
                      </div>
                      <h3 className="font-bold text-xl mb-2">{technique.title}</h3>
                      <p className="text-muted-foreground">{technique.description}</p>
                    </div>
                  );
                })}
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
