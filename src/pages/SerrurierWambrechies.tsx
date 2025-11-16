import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TrustBadges from "@/components/TrustBadges";
import ContactForm from "@/components/ContactForm";
import JsonLd from "@/components/JsonLd";
import { CallButton } from "@/components/ui/button-variants";
import { MapPin, CheckCircle } from "lucide-react";
import interventionImage from "@/assets/intervention-urgence.png";
import installationSerrure from "@/assets/installation-serrure.png";

const SerrurierWambrechies = () => {
  const interventions = [
    "Porte impossible à ouvrir",
    "Clé cassée",
    "Perte de clé",
    "Système multipoints bloqué"
  ];

  const secteurs = [
    "Centre", "Château de Robersart", "Marque-Église", "Zone portuaire", "Limite Marquette-lez-Lille et Verlinghem"
  ];

  return (
    <>
      <Helmet>
        <title>Serrurier Wambrechies – Dépannage sur tous les quartiers | ELM SÉCURITÉ</title>
        <meta 
          name="description" 
          content="Serrurier à Wambrechies 24/7. Intervention Centre, Robersart, Marque-Église. Ouverture porte, sécurisation après incident ☎ 06 26 16 06 87" 
        />
        <link rel="canonical" href="https://serrurier-urgence-lille.fr/serrurier-wambrechies" />
      </Helmet>
      <JsonLd />
      
      <div className="min-h-screen bg-background">
        <Header />
        
        <section className="relative py-20 bg-gradient-to-br from-secondary to-primary">
          <div className="container mx-auto px-4 text-secondary-foreground">
            <div className="max-w-3xl">
              <h1 className="text-5xl font-bold mb-6">
                Serrurier Wambrechies – Dépannage sur tous les quartiers
              </h1>
              <p className="text-xl mb-8 opacity-90">
                Wambrechies possède un bâtiment ancien au centre-ville, des maisons récentes autour de la Deûle 
                et des zones pavillonnaires. Le service s'adapte à chaque type d'ouverture.
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
              <img src={interventionImage} alt="Serrurier Wambrechies intervention" className="w-full h-full object-cover" />
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6">
                Interventions fréquentes
              </h2>
              
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
                Couverture des secteurs
              </h2>

              <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
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
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">
                Sécurisation après incident
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <p className="text-muted-foreground mb-6">
                    Pose d'un cylindre provisoire ou définitif selon l'état de la porte.
                  </p>

                  <div className="bg-muted border-l-4 border-primary p-4 rounded-lg">
                    <h3 className="font-bold mb-2">Solution adaptée</h3>
                    <p className="text-sm text-muted-foreground">
                      Intervention rapide pour rétablir la sécurité de votre logement après effraction ou incident
                    </p>
                  </div>
                </div>

                <div className="relative h-80 rounded-lg overflow-hidden shadow-elegant">
                  <img src={installationSerrure} alt="Sécurisation Wambrechies" className="w-full h-full object-cover" />
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

export default SerrurierWambrechies;
