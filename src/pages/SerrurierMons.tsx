import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TrustBadges from "@/components/TrustBadges";
import ContactForm from "@/components/ContactForm";
import JsonLd from "@/components/JsonLd";
import { CallButton } from "@/components/ui/button-variants";
import { CheckCircle, Lock, Shield } from "lucide-react";
import ouverturePorte from "@/assets/ouverture-porte-1.png";
import changementCylindre from "@/assets/changement-cylindre.jpg";

const SerrurierMons = () => {
  const typesPortes = [
    "Portes d'appartements",
    "Maisons du Nouveau Mons",
    "Résidences récentes du Vieux Mons"
  ];

  const situations = [
    "Blocage complet",
    "Cylindre bloqué",
    "Perte de clés",
    "Clé cassée",
    "Problème de verrouillage"
  ];

  return (
    <>
      <Helmet>
        <title>Serrurier Mons-en-Barœul – Intervention technique 7j/7 | ELM SÉCURITÉ</title>
        <meta 
          name="description" 
          content="Serrurier à Mons-en-Barœul 24/7. Intervention Nouveau Mons, Vieux Mons. Ouverture porte, changement cylindre, dépannage urgent ☎ 06 26 16 06 87" 
        />
        <link rel="canonical" href="https://serrurier-urgence-lille.fr/serrurier-mons-en-baroeul" />
      </Helmet>
      <JsonLd />
      
      <div className="min-h-screen bg-background">
        <Header />
        
        <section className="relative py-20 bg-gradient-to-br from-secondary to-primary">
          <div className="container mx-auto px-4 text-secondary-foreground">
            <div className="max-w-3xl">
              <h1 className="text-5xl font-bold mb-6">
                Serrurier Mons-en-Barœul – Intervention technique 7j/7
              </h1>
              <p className="text-xl mb-8 opacity-90">
                Population dense, nombreux immeubles et maisons mitoyennes : Mons-en-Barœul est une zone 
                où la demande de dépannage est élevée. Le service couvre toutes les situations liées aux portes et cylindres.
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
              Ouverture de porte à Mons-en-Barœul
            </h2>
            
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Méthodes ajustées à chaque modèle :
            </p>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
              <div className="relative h-96 rounded-lg overflow-hidden shadow-elegant">
                <img src={ouverturePorte} alt="Ouverture porte Mons-en-Barœul" className="w-full h-full object-cover" />
              </div>

              <div className="space-y-6">
                {typesPortes.map((type, index) => (
                  <div key={index} className="bg-card p-4 rounded-lg border shadow-card">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="font-medium">{type}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="py-16 bg-muted -mx-4 px-4 md:mx-0 md:rounded-lg">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">
                Situations traitées
              </h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {situations.map((situation, index) => (
                  <div key={index} className="bg-background border rounded-lg p-4 shadow-card">
                    <div className="flex items-start gap-3">
                      <Shield className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm font-medium">{situation}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="py-16">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">
                Changement de cylindre
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <p className="text-muted-foreground mb-6">
                    Pose immédiate d'un modèle adapté si nécessaire.
                  </p>

                  <div className="bg-card p-6 rounded-lg border shadow-card">
                    <Lock className="h-12 w-12 text-primary mb-4" />
                    <h3 className="font-bold mb-2">Installation rapide</h3>
                    <p className="text-sm text-muted-foreground">
                      Cylindres adaptés aux immeubles et maisons mitoyennes de Mons-en-Barœul
                    </p>
                  </div>
                </div>

                <div className="relative h-80 rounded-lg overflow-hidden shadow-elegant">
                  <img src={changementCylindre} alt="Changement cylindre Mons-en-Barœul" className="w-full h-full object-cover" />
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

export default SerrurierMons;
