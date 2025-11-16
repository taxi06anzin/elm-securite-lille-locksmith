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
import { MapPin, Shield, Lock } from "lucide-react";
import porteBlindee from "@/assets/porte-blindee-installation.png";

const SerrurierMarcq = () => {
  const secteurs = [
    "Croisé-Laroche", "Bourg", "Briqueterie", "Marais"
  ];

  return (
    <>
      <Helmet>
        <title>Serrurier Marcq-en-Barœul – Intervention secteurs résidentiels | ELM SÉCURITÉ</title>
        <meta 
          name="description" 
          content="Serrurier à Marcq-en-Barœul 24/7. Intervention Croisé-Laroche, Bourg, Briqueterie, Marais. Ouverture porte, renforcement sécurité ☎ 06 21 66 08 67" 
        />
        <link rel="canonical" href="https://serrurier-urgence-lille.fr/serrurier-marcq-en-baroeul" />
      </Helmet>
      <JsonLd />
      
      <div className="min-h-screen bg-background">
        <Header />
        
        <section className="relative py-20 bg-gradient-to-br from-secondary to-primary">
          <div className="container mx-auto px-4 text-secondary-foreground">
            <div className="max-w-3xl">
              <h1 className="text-5xl font-bold mb-6">
                Serrurier Marcq-en-Barœul – Intervention dans les secteurs résidentiels
              </h1>
              <p className="text-xl mb-8 opacity-90">
                Intervention disponible dans les secteurs du Croisé-Laroche, du Bourg, de la Briqueterie et de la zone Marais. 
                Les maisons et immeubles du secteur nécessitent des techniques d'ouverture variées en fonction du niveau de sécurité.
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
            <h2 className="text-3xl font-bold mb-12 text-center">
              Secteurs d'intervention à Marcq-en-Barœul
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
              {secteurs.map((secteur, index) => (
                <div key={index} className="bg-card border rounded-lg p-6 text-center shadow-card hover:shadow-elegant transition-shadow">
                  <MapPin className="h-8 w-8 text-primary mx-auto mb-3" />
                  <span className="font-bold">{secteur}</span>
                </div>
              ))}
            </div>

            <p className="text-center text-muted-foreground max-w-2xl mx-auto">
              Chaque secteur présente des caractéristiques spécifiques nécessitant une approche adaptée 
              selon le type d'habitat et le niveau de sécurité installé.
            </p>
          </section>

          <section className="py-16 grid md:grid-cols-2 gap-12 items-center bg-muted -mx-4 px-4 md:mx-0 md:rounded-lg">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                Ouverture de porte
              </h2>
              <p className="text-muted-foreground mb-6">
                Techniques adaptées pour préserver le matériel quand cela est possible.
              </p>

              <div className="space-y-4">
                <div className="bg-background p-4 rounded-lg border-l-4 border-primary">
                  <h3 className="font-bold mb-2">Méthode douce prioritaire</h3>
                  <p className="text-sm text-muted-foreground">
                    Utilisation de techniques non destructives pour préserver la porte et la serrure
                  </p>
                </div>

                <div className="bg-background p-4 rounded-lg border-l-4 border-primary">
                  <h3 className="font-bold mb-2">Adaptation au type de porte</h3>
                  <p className="text-sm text-muted-foreground">
                    Approche spécifique selon qu'il s'agisse d'une porte standard, blindée ou ancienne
                  </p>
                </div>
              </div>
            </div>

            <div className="relative h-96 rounded-lg overflow-hidden shadow-elegant">
              <img src={porteBlindee} alt="Ouverture porte Marcq-en-Barœul" className="w-full h-full object-cover" />
            </div>
          </section>

          <section className="py-16">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-center">
                Renforcement de sécurité
              </h2>

              <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Pose de cylindres renforcés si l'accès doit être protégé.
              </p>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-card p-6 rounded-lg border shadow-card text-center">
                  <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-bold mb-2">Cylindre haute sécurité</h3>
                  <p className="text-sm text-muted-foreground">
                    Protection anti-perçage, anti-crochetage et anti-arrachement
                  </p>
                </div>

                <div className="bg-card p-6 rounded-lg border shadow-card text-center">
                  <Lock className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-bold mb-2">Serrure renforcée</h3>
                  <p className="text-sm text-muted-foreground">
                    Installation de systèmes multipoints certifiés
                  </p>
                </div>

                <div className="bg-card p-6 rounded-lg border shadow-card text-center">
                  <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-bold mb-2">Blindage complet</h3>
                  <p className="text-sm text-muted-foreground">
                    Renforcement de porte ou installation bloc-porte blindé
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

export default SerrurierMarcq;
