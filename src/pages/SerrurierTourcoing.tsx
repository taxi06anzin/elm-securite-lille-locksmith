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

const SerrurierTourcoing = () => {
  const situations = [
    "Portes bloquées",
    "Systèmes multipoints bloqués",
    "Clés perdues",
    "Barillets endommagés",
    "Blocages d'entrée principale ou de garage"
  ];

  const secteurs = [
    "Brun-Pain", "Epidème", "Bourgogne", "Pont de Neuville", 
    "Orions", "Phalempins", "Marlière", "Centre-Ville"
  ];

  return (
    <>
      <Helmet>
        <title>Serrurier Tourcoing – Intervention locale et rapide | ELM SÉCURITÉ</title>
        <meta 
          name="description" 
          content="Serrurier à Tourcoing 24/7. Dépannage urgent tous secteurs : Brun-Pain, Epidème, Bourgogne. Ouverture porte, changement serrure ☎ 06 21 66 08 67" 
        />
        <link rel="canonical" href="https://serrurier-urgence-lille.fr/serrurier-tourcoing" />
      </Helmet>
      <JsonLd />
      
      <div className="min-h-screen bg-background">
        <Header />
        
        <section className="relative py-20 bg-gradient-to-br from-secondary to-primary">
          <div className="container mx-auto px-4 text-secondary-foreground">
            <div className="max-w-3xl">
              <h1 className="text-5xl font-bold mb-6">
                Serrurier Tourcoing – Intervention locale et rapide
              </h1>
              <p className="text-xl mb-8 opacity-90">
                Intervention dans l'ensemble de Tourcoing pour les dépannages urgents liés aux portes bloquées, 
                serrures défaillantes et clés perdues.
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
              <img src={ouverturePorte} alt="Serrurier Tourcoing intervention" className="w-full h-full object-cover" />
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6">
                Dépannage serrurier Tourcoing
              </h2>
              
              <p className="text-muted-foreground mb-6">
                Les interventions courantes concernent :
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
          </section>

          <section className="py-16 bg-muted -mx-4 px-4 md:mx-0 md:rounded-lg">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">
                Secteurs couverts à Tourcoing
              </h2>
              
              <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
                Le service couvre le Brun-Pain, l'Epidème, la Bourgogne, Pont de Neuville, Orions, Phalempins, 
                la Marlière, tout en tenant compte des accès spécifiques selon le type de bâtiment.
              </p>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
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
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-8">
                Changement de mécanisme
              </h2>
              
              <p className="text-muted-foreground mb-12 max-w-2xl mx-auto">
                Lorsque la sécurité doit être renforcée, un cylindre ou système plus résistant peut être installé 
                directement lors de l'intervention.
              </p>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-card p-6 rounded-lg border shadow-card">
                  <Lock className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-bold mb-2">Cylindre renforcé</h3>
                  <p className="text-sm text-muted-foreground">
                    Installation de systèmes haute sécurité
                  </p>
                </div>

                <div className="bg-card p-6 rounded-lg border shadow-card">
                  <Lock className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-bold mb-2">Serrure multipoints</h3>
                  <p className="text-sm text-muted-foreground">
                    Pose de mécanismes 3, 5 ou 7 points
                  </p>
                </div>

                <div className="bg-card p-6 rounded-lg border shadow-card">
                  <Lock className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-bold mb-2">Barillet sécurisé</h3>
                  <p className="text-sm text-muted-foreground">
                    Remplacement par barillet anti-perçage
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

export default SerrurierTourcoing;
