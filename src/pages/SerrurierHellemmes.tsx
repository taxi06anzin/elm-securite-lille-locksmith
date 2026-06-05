import { Helmet } from "react-helmet";
import TrustBadges from "@/components/TrustBadges";
import ContactForm from "@/components/ContactForm";
import JsonLd from "@/components/JsonLd";
import InternalLinks from "@/components/InternalLinks";
import Breadcrumb from "@/components/Breadcrumb";
import OptimizedImage from "@/components/OptimizedImage";
import { CallButton } from "@/components/ui/button-variants";
import { MapPin, CheckCircle, Lock } from "lucide-react";
import ouverturePorte from "@/assets/ouverture-porte-1.png";
import installationSerrure from "@/assets/installation-serrure.png";

const SerrurierHellemmes = () => {
  const situations = [
    "Porte claquée",
    "Clé cassée",
    "Perte de clés",
    "Mécanisme multipoints bloqué",
    "Barillet coincé"
  ];

  const secteurs = [
    "Square Faidherbe", "Éléphant", "Centre Hellemmes", "Limite Villeneuve-d'Ascq / Lille-Fives"
  ];

  return (
    <>
      <Helmet>
        <title>Serrurier Hellemmes – Intervention technique 7j/7 | ELM SÉCURITÉ</title>
        <meta 
          name="description" 
          content="Serrurier à Hellemmes 24/7. Intervention Faidherbe, Éléphant, Centre. Ouverture porte, remplacement cylindre ☎ 06 21 66 08 67"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://serrurier-urgence-lille.fr/serrurier-hellemmes/" />
        
        <meta property="og:title" content="Serrurier Hellemmes – Intervention technique 7j/7 | ELM SÉCURITÉ" />
        <meta property="og:description" content="Serrurier à Hellemmes 24/7. Intervention Faidherbe, Éléphant, Centre. Ouverture porte, remplacement cylindre ☎ 06 21 66 08 67" />
        <meta property="og:url" content="https://serrurier-urgence-lille.fr/serrurier-hellemmes/" />
        <meta property="og:type" content="website" />

        <meta name="twitter:title" content="Serrurier Hellemmes – Intervention technique 7j/7 | ELM SÉCURITÉ" />
        <meta name="twitter:description" content="Serrurier à Hellemmes 24/7. Intervention Faidherbe, Éléphant, Centre. Ouverture porte, remplacement cylindre ☎ 06 21 66 08 67" />
      </Helmet>
      <JsonLd pageName="Serrurier Hellemmes" pageUrl="/serrurier-hellemmes" />
      
      <div className="min-h-screen bg-background">
        <Breadcrumb 
          items={[
            { label: "Villes couvertes", path: "/villes-couvertes" },
            { label: "Serrurier Hellemmes", path: "/serrurier-hellemmes" }
          ]}
        />
        
        <section className="relative py-20 bg-gradient-to-br from-secondary to-primary">
          <div className="container mx-auto px-4 text-secondary-foreground">
            <div className="max-w-3xl">
              <h1 className="text-5xl font-bold mb-6">
                Serrurier Hellemmes – Intervention technique 7j/7
              </h1>
              <p className="text-xl mb-8 opacity-90">
                Hellemmes fait partie intégrante de Lille, avec un habitat mixte et de nombreux immeubles récents. 
                Les interventions s'adaptent aux portes d'appartements, maisons et locaux professionnels.
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
            <div>
              <h2 className="text-3xl font-bold mb-6">
                Situations gérées
              </h2>
              
              <div className="space-y-3">
                {situations.map((situation, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>{situation}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative h-96 rounded-lg overflow-hidden shadow-elegant">
              <OptimizedImage src={ouverturePorte} alt="Dépannage serrurier Hellemmes – ouverture de porte 24/7" className="w-full h-full object-cover" />
            </div>
          </section>

          <section className="py-16 bg-muted -mx-4 px-4 md:mx-0 md:rounded-lg">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-center">
                Secteurs couverts
              </h2>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
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
                Remplacement de cylindre
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="relative h-80 rounded-lg overflow-hidden shadow-elegant">
                  <OptimizedImage src={installationSerrure} alt="Remplacement cylindre Hellemmes – installation serrure sécurisée" className="w-full h-full object-cover" />
                </div>

                <div>
                  <p className="text-muted-foreground mb-6">
                    Pose d'un modèle adapté aux portes du secteur, avec renforcement si nécessaire.
                  </p>

                  <div className="bg-card p-6 rounded-lg border shadow-card">
                    <Lock className="h-12 w-12 text-primary mb-4" />
                    <h3 className="font-bold mb-2">Installation adaptée</h3>
                    <p className="text-sm text-muted-foreground">
                      Cylindres pour appartements et locaux professionnels d'Hellemmes
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
                Téléphone : <a href="tel:0621660867" className="text-primary font-bold hover:underline">06 21 66 08 67</a>
              </p>
              <ContactForm />
            </div>
          </section>

          <InternalLinks currentCity="serrurier-hellemmes" />
        </div>
      </div>
    </>
  );
};

export default SerrurierHellemmes;
