import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import OptimizedImage from "@/components/OptimizedImage";
import TrustBadges from "@/components/TrustBadges";
import ContactForm from "@/components/ContactForm";
import JsonLd from "@/components/JsonLd";
import InternalLinks from "@/components/InternalLinks";
import FAQ from "@/components/FAQ";
import Reviews from "@/components/Reviews";
import { CallButton } from "@/components/ui/button-variants";
import { PHONE_DISPLAY, PHONE_HREF } from "@/config/site";
import { MapPin, CheckCircle, Lock, Clock } from "lucide-react";
import ouvertureFine from "@/assets/ouverture-fine.png";
import changementCylindre from "@/assets/changement-cylindre.jpg";

const SerrurierCroix = () => {
  const faqItems = [
    {
      question: "En combien de temps un serrurier intervient-il à Croix ?",
      answer: "Le déplacement à Croix s'effectue généralement en 20 à 30 minutes. Croix étant limitrophe de Roubaix, l'accès aux quartiers Croix-Centre, Beaumont ou au secteur du parc Barbieux reste rapide à toute heure. Dès votre appel au " + PHONE_DISPLAY + ", un technicien est orienté vers votre adresse.",
    },
    {
      question: "Combien coûte une ouverture de porte à Croix ?",
      answer: "L'ouverture de porte à Croix démarre à 89€ en journée, déplacement et diagnostic compris. Sur les belles demeures bourgeoises proches du parc Barbieux comme sur les résidences rénovées de Croix-Centre, le tarif est annoncé avant toute intervention, sans surprise.",
    },
    {
      question: "Intervenez-vous la nuit et le dimanche à Croix ?",
      answer: "Oui, le service couvre Croix 24h/24 et 7j/7, y compris la nuit, le dimanche et les jours fériés. Une porte claquée à Beaumont un dimanche soir ou une serrure bloquée la nuit du côté de la Villa Cavrois sont traitées en urgence sans attendre le lendemain.",
    },
    {
      question: "Quels quartiers de Croix sont couverts ?",
      answer: "L'intervention couvre l'ensemble de Croix : Croix-Centre, Beaumont, le secteur de Barbieux, les abords du parc Mallet-Stevens et la proximité de la Villa Cavrois. Les rues résidentielles bordant Roubaix sont également desservies.",
    },
  ];
  const situations = [
    "Clé perdue",
    "Porte bloquée",
    "Mécanisme défaillant",
    "Cylindre impossible à tourner"
  ];

  const zones = [
    "Croix-Centre", "Beaumont", "Barbieux", "Zone Parc Mallet-Stevens", "Proximité Villa Cavrois"
  ];

  return (
    <>
      <Helmet>
        <title>Serrurier Croix – Intervention locale rapide | ELM SÉCURITÉ</title>
        <meta 
          name="description" 
          content="Serrurier à Croix 24/7. Intervention Croix-Centre, Beaumont, Barbieux, Mallet-Stevens. Ouverture porte, changement cylindre ☎ 06 21 66 08 67" 
        />
        <link rel="canonical" href="https://serrurier-urgence-lille.fr/serrurier-croix" />
      </Helmet>
      <JsonLd />
      
      <div className="min-h-screen bg-background">
        
        <section className="relative py-20 bg-gradient-to-br from-secondary to-primary">
          <div className="container mx-auto px-4 text-secondary-foreground">
            <div className="max-w-3xl">
              <h1 className="text-5xl font-bold mb-6">
                Serrurier Croix – Intervention locale rapide
              </h1>
              <p className="text-xl mb-8 opacity-90">
                Croix est une zone résidentielle avec de nombreux logements à sécurisation variée, 
                allant des maisons anciennes à des résidences rénovées. Le service couvre l'ouverture de portes
                et les remplacements de mécanismes.
              </p>
              <div className="inline-flex items-center gap-2 bg-background/15 border border-secondary-foreground/20 rounded-lg px-4 py-2 mb-8">
                <Clock className="h-5 w-5" />
                <span className="font-semibold">Ouverture de porte dès 89€ · intervention en 20-30 min à Croix</span>
              </div>
              <CallButton size="lg" />
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4">
          <div className="-mt-8">
            <TrustBadges />
          </div>

          <section className="py-16">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-center">
                Un serrurier qui connaît Croix
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Accolée à Roubaix, Croix garde un caractère résidentiel et bourgeois marqué par ses larges
                avenues arborées et la proximité immédiate du parc Barbieux. Autour de Croix-Centre et de
                Beaumont, le bâti mêle hôtels particuliers, villas de famille et maisons de maître dont les
                portes anciennes sont souvent équipées de serrures à gorges ou de cylindres d'origine,
                délicats à manipuler sans abîmer une menuiserie de valeur.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                À quelques pas, le secteur de la Villa Cavrois et les abords du parc Mallet-Stevens
                rassemblent des copropriétés rénovées équipées de serrures multipoints plus récentes.
                Cette diversité demande des techniques d'ouverture adaptées : on ne traite pas une porte
                d'hôtel particulier comme une porte blindée de résidence. L'objectif reste le même partout
                à Croix : ouvrir proprement, sans dégât inutile, puis sécuriser à nouveau le logement quand
                la situation l'exige.
              </p>
            </div>
          </section>

          <section className="py-16">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Dépannage serrurier Croix
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
              <div className="relative h-80 rounded-lg overflow-hidden shadow-elegant">
                <OptimizedImage src={ouvertureFine} alt="Dépannage serrurier Croix" className="w-full h-full object-cover" />
              </div>

              <div>
                <p className="text-muted-foreground mb-6">
                  Le service prend en charge :
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
                Zones traitées
              </h2>

              <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
                {zones.map((zone, index) => (
                  <div key={index} className="bg-background border rounded-lg p-4 text-center shadow-card hover:shadow-elegant transition-shadow">
                    <MapPin className="h-5 w-5 text-primary mx-auto mb-2" />
                    <span className="text-sm font-medium">{zone}</span>
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
                    Un cylindre adapté peut être posé immédiatement après ouverture si la sécurité doit être rétablie.
                  </p>

                  <div className="bg-card p-6 rounded-lg border shadow-card">
                    <Lock className="h-12 w-12 text-primary mb-4" />
                    <h3 className="font-bold mb-2">Installation rapide</h3>
                    <p className="text-sm text-muted-foreground">
                      Cylindres européens, renforcés ou haute sécurité selon vos besoins
                    </p>
                  </div>
                </div>

                <div className="relative h-80 rounded-lg overflow-hidden shadow-elegant">
                  <OptimizedImage src={changementCylindre} alt="Changement cylindre Croix" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </section>

          <section className="py-16">
            <div className="max-w-3xl mx-auto">
              <p className="text-muted-foreground leading-relaxed text-center">
                Besoin d'un dépannage précis à Croix ? Découvrez notre service d'{" "}
                <Link to="/ouverture-porte" className="text-primary font-semibold hover:underline">ouverture de porte</Link>,
                nos interventions de{" "}
                <Link to="/serrurier-dimanche-nuit-lille" className="text-primary font-semibold hover:underline">serrurier le dimanche et la nuit</Link>{" "}
                ou consultez notre{" "}
                <Link to="/tarifs" className="text-primary font-semibold hover:underline">grille tarifaire</Link>{" "}
                avant toute demande.
              </p>
            </div>
          </section>

          <section className="py-16">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">
                Questions fréquentes à Croix
              </h2>
              <FAQ items={faqItems} />
            </div>
          </section>

          <Reviews />

          <InternalLinks currentCity="serrurier-croix" />

          <section id="contact" className="py-16">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold mb-4 text-center">
                Contact
              </h2>
              <p className="text-center text-muted-foreground mb-8">
                Téléphone : <a href={PHONE_HREF} className="text-primary font-bold hover:underline">{PHONE_DISPLAY}</a>
              </p>
              <ContactForm />
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default SerrurierCroix;
