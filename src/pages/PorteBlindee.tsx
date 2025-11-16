import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TrustBadges from "@/components/TrustBadges";
import ContactForm from "@/components/ContactForm";
import JsonLd from "@/components/JsonLd";
import { CallButton } from "@/components/ui/button-variants";
import { Shield, Lock, CheckCircle } from "lucide-react";
import porteBlindeeImage from "@/assets/porte-blindee.jpg";
import porteBlindeeInstallation from "@/assets/porte-blindee-installation.png";

const PorteBlindee = () => {
  const avantages = [
    "Résistance accrue",
    "Retardement d'effraction",
    "Sécurisation complète du logement",
    "Isolation thermique et phonique renforcée",
    "Valorisation du bien immobilier"
  ];

  return (
    <>
      <Helmet>
        <title>Blindage de Porte Lille – Renforcement et Installation | ELM SÉCURITÉ</title>
        <meta 
          name="description" 
          content="Blindage de porte à Lille. Renforcement sur porte existante ou installation porte blindée neuve. Intervention MEL ☎ 06 26 16 06 87" 
        />
        <link rel="canonical" href="https://serrurier-urgence-lille.fr/porte-blindee" />
      </Helmet>
      <JsonLd />
      
      <div className="min-h-screen bg-background">
        <Header />
        
        <section className="relative py-20 bg-gradient-to-br from-secondary to-primary">
          <div className="container mx-auto px-4 text-secondary-foreground">
            <div className="max-w-3xl">
              <h1 className="text-5xl font-bold mb-6">
                Blindage de porte Lille – Renforcement et installation
              </h1>
              <p className="text-xl mb-8 opacity-90">
                Solutions adaptées aux besoins de sécurité des logements et commerces. 
                Blindage sur porte existante ou installation de porte blindée neuve.
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
            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-elegant">
              <img src={porteBlindeeImage} alt="Porte blindée haute sécurité" className="w-full h-full object-cover" />
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6">
                Blindage sur porte existante
              </h2>
              <p className="mb-6 text-muted-foreground">
                Pose d'une tôle de renfort, système anti-dégondage et plaque acier. 
                Solution économique pour renforcer une porte standard sans remplacement complet.
              </p>

              <h3 className="text-2xl font-bold mb-4">Avantages du blindage</h3>
              <div className="space-y-3">
                {avantages.map((avantage, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>{avantage}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="py-16 bg-muted -mx-4 px-4 md:mx-0 md:rounded-lg">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-center">
                Porte blindée neuve
              </h2>
              
              <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
                <div>
                  <p className="text-muted-foreground mb-6">
                    Installation conforme aux normes actuelles. Options anti-effraction 
                    et isolations renforcées disponibles selon les besoins.
                  </p>

                  <h3 className="font-bold text-xl mb-4">Composition d'une porte blindée :</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Bloc-porte en acier renforcé</li>
                    <li>• Serrure multipoints haute sécurité</li>
                    <li>• Paumelles anti-arrachement</li>
                    <li>• Joint d'isolation périphérique</li>
                    <li>• Cornières anti-pince</li>
                    <li>• Cylindre haute sécurité</li>
                  </ul>
                </div>

                <div className="relative h-96 rounded-lg overflow-hidden shadow-elegant">
                  <img src={porteBlindeeInstallation} alt="Installation porte blindée professionnelle" className="w-full h-full object-cover" />
                </div>
              </div>

              <div className="bg-background border-l-4 border-primary p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-2">Intervention MEL</h3>
                <p className="text-muted-foreground">
                  Installation possible dans tous les quartiers de Lille et communes voisines. 
                  Délai d'installation variable selon configuration de la porte et niveau de sécurité choisi.
                </p>
              </div>
            </div>
          </section>

          <section className="py-16">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">
                Différences blindage / porte blindée
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-card border-2 border-primary rounded-lg p-6">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Shield className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-bold text-xl mb-3">Blindage de porte</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>✓ Conservation de la porte existante</li>
                    <li>✓ Ajout de renforts métalliques</li>
                    <li>✓ Solution économique</li>
                    <li>✓ Installation rapide</li>
                    <li>✓ Idéal pour appartements</li>
                  </ul>
                  <div className="mt-6 text-center">
                    <div className="text-2xl font-bold text-primary">À partir de 800€</div>
                  </div>
                </div>

                <div className="bg-card border-2 border-accent rounded-lg p-6">
                  <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                    <Lock className="h-7 w-7 text-accent" />
                  </div>
                  <h3 className="font-bold text-xl mb-3">Porte blindée neuve</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>✓ Bloc-porte complet en acier</li>
                    <li>✓ Sécurité maximale</li>
                    <li>✓ Isolation optimale</li>
                    <li>✓ Garantie constructeur</li>
                    <li>✓ Esthétique au choix</li>
                  </ul>
                  <div className="mt-6 text-center">
                    <div className="text-2xl font-bold text-accent">Sur devis</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="contact" className="py-16">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">
                Demander un devis blindage ou porte blindée
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

export default PorteBlindee;
