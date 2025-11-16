import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TrustBadges from "@/components/TrustBadges";
import ContactForm from "@/components/ContactForm";
import JsonLd from "@/components/JsonLd";
import { CallButton } from "@/components/ui/button-variants";
import { Lock, Shield, Key, CheckCircle } from "lucide-react";
import changementSerrure from "@/assets/changement-serrure.jpg";
import changementCylindre from "@/assets/changement-cylindre.jpg";
import installationSerrure from "@/assets/installation-serrure.png";

const ChangementSerrure = () => {
  const raisons = [
    "Serrure endommagée ou cassée",
    "Clé perdue ou volée",
    "Après une tentative d'effraction",
    "Déménagement dans un nouveau logement",
    "Amélioration de la sécurité",
    "Serrure usée ou défectueuse"
  ];

  const typesSerrures = [
    {
      nom: "Serrure 3 points",
      prix: "À partir de 150€",
      description: "Protection standard, idéale pour appartements"
    },
    {
      nom: "Serrure 5 points",
      prix: "À partir de 250€",
      description: "Sécurité renforcée pour maisons"
    },
    {
      nom: "Serrure haute sécurité A2P",
      prix: "À partir de 350€",
      description: "Protection maximale certifiée"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Changement de Serrure à Lille - Toutes Marques | ELM SÉCURITÉ</title>
        <meta 
          name="description" 
          content="Changement de serrure à Lille. Installation serrure 3, 5 points, haute sécurité. Intervention rapide, devis gratuit ☎ 06 26 16 06 87" 
        />
        <link rel="canonical" href="https://serrurier-urgence-lille.fr/changement-serrure" />
      </Helmet>
      <JsonLd />
      
      <div className="min-h-screen bg-background">
        <Header />
        
        <section className="relative py-20 bg-gradient-to-br from-secondary to-primary">
          <div className="container mx-auto px-4 text-secondary-foreground">
            <div className="max-w-3xl">
              <h1 className="text-5xl font-bold mb-6">
                Changement de serrure Lille – Cylindres et verrous sécurisés
              </h1>
              <p className="text-xl mb-8 opacity-90">
                Installation rapide de systèmes compatibles avec les portes standard et blindées. 
                Cylindres européens, multipoints, verrous haute résistance, systèmes compatibles Fichet.
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
              <img src={changementSerrure} alt="Changement de serrure multipoint" className="w-full h-full object-cover" />
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6">
                Quand faut-il changer sa serrure ?
              </h2>
              
              <div className="space-y-3 mb-8">
                {raisons.map((raison, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>{raison}</span>
                  </div>
                ))}
              </div>

              <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-2">Conseil de votre serrurier</h3>
                <p className="text-muted-foreground text-sm">
                  Nous recommandons de changer vos serrures tous les 10 ans, ou immédiatement après 
                  toute perte de clés ou tentative d'effraction pour garantir votre sécurité.
                </p>
              </div>
            </div>
          </section>

          <section className="py-16 bg-muted -mx-4 px-4 md:mx-0 md:rounded-lg">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-center">
                Types de serrures que nous installons
              </h2>
              
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                {typesSerrures.map((serrure, index) => (
                  <div key={index} className="bg-background p-6 rounded-lg shadow-card border-2 border-transparent hover:border-primary transition-colors">
                    <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4 mx-auto">
                      <Lock className="h-7 w-7 text-primary" />
                    </div>
                    <h3 className="font-bold text-xl mb-2 text-center">{serrure.nom}</h3>
                    <div className="text-3xl font-bold text-primary text-center mb-3">{serrure.prix}</div>
                    <p className="text-sm text-muted-foreground text-center">{serrure.description}</p>
                  </div>
                ))}
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="relative h-72 rounded-lg overflow-hidden shadow-elegant">
                  <img src={changementCylindre} alt="Changement de cylindre" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 to-transparent flex items-end p-6">
                    <h3 className="text-white font-bold text-xl">Changement de cylindre</h3>
                  </div>
                </div>
                <div className="relative h-72 rounded-lg overflow-hidden shadow-elegant">
                  <img src={installationSerrure} alt="Installation serrure" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 to-transparent flex items-end p-6">
                    <h3 className="text-white font-bold text-xl">Installation complète</h3>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="py-16">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">
                Notre procédure de changement de serrure
              </h2>

              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                    1
                  </div>
                  <h3 className="font-bold mb-2">Diagnostic</h3>
                  <p className="text-sm text-muted-foreground">
                    Analyse de votre porte et de vos besoins en sécurité
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                    2
                  </div>
                  <h3 className="font-bold mb-2">Conseil</h3>
                  <p className="text-sm text-muted-foreground">
                    Recommandation du type de serrure adapté
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                    3
                  </div>
                  <h3 className="font-bold mb-2">Devis gratuit</h3>
                  <p className="text-sm text-muted-foreground">
                    Prix fixe annoncé avant intervention
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                    4
                  </div>
                  <h3 className="font-bold mb-2">Installation</h3>
                  <p className="text-sm text-muted-foreground">
                    Pose professionnelle avec garantie
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="py-16 bg-primary/5 -mx-4 px-4 md:mx-0 md:rounded-lg">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">
                Marques de serrures installées
              </h2>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                {["Fichet", "Vachette", "Bricard", "Picard", "JPM", "Pollux", "Mul-T-Lock", "ABUS"].map((marque, index) => (
                  <div key={index} className="bg-background p-4 rounded-lg text-center font-bold shadow-card">
                    {marque}
                  </div>
                ))}
              </div>

              <p className="text-center text-muted-foreground">
                Nous travaillons avec les meilleures marques de serrurerie pour garantir 
                votre sécurité et la longévité de vos installations.
              </p>
            </div>
          </section>

          <section id="contact" className="py-16">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">
                Demander un devis pour changement de serrure
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

export default ChangementSerrure;
