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
import { MapPin, CheckCircle, Lock, Clock } from "lucide-react";
import { PHONE_DISPLAY, PHONE_HREF } from "@/config/site";
import interventionImage from "@/assets/intervention-urgence.png";
import changementSerrure from "@/assets/changement-serrure.jpg";

const SerrurierWattignies = () => {
  const depannages = [
    "Ouverture de porte",
    "Remplacement de cylindre",
    "Extraction de clé cassée",
    "Ouverture après perte de clés",
    "Mécanisme coincé"
  ];

  const zones = [
    "Noirignon", "Centre", "Mont-à-Leux", "Secteur Seclin/Wattignies", "Corneille"
  ];

  const faqItems = [
    {
      question: "Quel délai pour un serrurier à Wattignies ?",
      answer: "Au sud de Lille, notre serrurier rejoint Wattignies en 20 à 30 minutes en moyenne. Le centre, le quartier de Noirignon, le Mont-à-Leux et les abords commerçants vers Seclin sont desservis sans détour. Un appel au " + PHONE_DISPLAY + " suffit pour qu'un artisan parte immédiatement vers votre domicile ou votre local."
    },
    {
      question: "Combien coûte une ouverture de porte à Wattignies ?",
      answer: "À Wattignies, comptez à partir de 89€ TTC pour une ouverture de porte en journée, déplacement inclus. Sur les pavillons de Noirignon comme sur les commerces du centre, le devis est communiqué avant l'intervention. Le tarif d'un changement de cylindre dépend du modèle posé, du standard au renforcé."
    },
    {
      question: "Intervenez-vous la nuit et le dimanche à Wattignies ?",
      answer: "Oui, nous intervenons à Wattignies 24h/24 et 7j/7, nuits, dimanches et jours fériés compris. Un commerçant du centre confronté à un rideau ou une serrure bloquée, comme un particulier du Mont-à-Leux avec une porte claquée, peut compter sur un serrurier disponible à toute heure."
    },
    {
      question: "Quels quartiers de Wattignies couvrez-vous ?",
      answer: "Nous couvrons l'ensemble de Wattignies : le centre, Noirignon, le Mont-à-Leux, le secteur Corneille et les zones limitrophes vers Seclin. Qu'il s'agisse d'un lotissement pavillonnaire ou d'un local commercial, aucun quartier de la commune n'échappe à notre périmètre d'intervention."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Serrurier Wattignies – Dépannage 24/7 | ELM SÉCURITÉ</title>
        <meta 
          name="description" 
          content="Serrurier à Wattignies 24/7. Intervention Noirignon, Centre, Mont-à-Leux, Corneille. Ouverture porte, cylindre renforcé ☎ 06 21 66 08 67" 
        />
        <link rel="canonical" href="https://serrurier-urgence-lille.fr/serrurier-wattignies/" />
      </Helmet>
      <JsonLd />
      
      <div className="min-h-screen bg-background">
        
        <section className="relative py-20 bg-gradient-to-br from-secondary to-primary">
          <div className="container mx-auto px-4 text-secondary-foreground">
            <div className="max-w-3xl">
              <h1 className="text-5xl font-bold mb-6">
                Serrurier Wattignies – Dépannage de jour comme de nuit
              </h1>
              <p className="text-xl mb-8 opacity-90">
                Commune résidentielle composée de lotissements, maisons individuelles et immeubles récents.
                Interventions rapides pour portes bloquées, cylindres défaillants et mécanismes multipoints.
              </p>
              <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-lg bg-white/15 text-secondary-foreground font-semibold">
                <Clock className="h-5 w-5" />
                Ouverture de porte dès 89€ · intervention en 20-30 min à Wattignies
              </div>
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
              <OptimizedImage src={interventionImage} alt="Dépannage Wattignies" className="w-full h-full object-cover" />
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6">
                Types de dépannages
              </h2>
              
              <div className="space-y-3">
                {depannages.map((depannage, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>{depannage}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="py-16 bg-muted -mx-4 px-4 md:mx-0 md:rounded-lg">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-center">
                Zones desservies
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
                Sécurisation
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <p className="text-muted-foreground mb-6">
                    Si la porte doit être protégée, pose immédiate d'un cylindre renforcé.
                  </p>

                  <div className="bg-card p-6 rounded-lg border shadow-card">
                    <Lock className="h-12 w-12 text-primary mb-4" />
                    <h3 className="font-bold mb-2">Cylindre renforcé</h3>
                    <p className="text-sm text-muted-foreground">
                      Protection optimale pour maisons individuelles et lotissements
                    </p>
                  </div>
                </div>

                <div className="relative h-80 rounded-lg overflow-hidden shadow-elegant">
                  <OptimizedImage src={changementSerrure} alt="Sécurisation Wattignies" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </section>

          <section className="py-16">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">
                Serrurier à Wattignies, au sud de la métropole
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Wattignies, au sud de Lille, mêle larges zones pavillonnaires et un tissu
                commercial actif. Les lotissements de Noirignon et du Mont-à-Leux alignent
                des maisons individuelles aux portes d'entrée modernes, tandis que le centre
                et les axes vers Seclin concentrent commerces, locaux professionnels et
                petits collectifs. Cette double vocation, résidentielle et commerçante,
                oriente nos interventions : portes d'habitation claquées et clés perdues
                d'un côté, rideaux métalliques et serrures de locaux à dépanner ou sécuriser
                de l'autre. Nos serruriers extraient les clés cassées, débloquent les
                cylindres grippés et posent des barillets renforcés lorsqu'un commerce ou un
                pavillon doit être protégé après une tentative d'effraction. La proximité de
                la D549 et des grands axes du sud lillois nous permet d'atteindre chaque
                quartier rapidement. Voir nos <Link to="/tarifs" className="text-primary font-medium hover:underline">tarifs</Link> et
                notre service d'<Link to="/ouverture-porte" className="text-primary font-medium hover:underline">ouverture de porte</Link>.
              </p>
            </div>
          </section>

          <section className="py-16">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">
                Questions fréquentes — Serrurier Wattignies
              </h2>
              <FAQ items={faqItems} />
            </div>
          </section>

          <Reviews />

          <InternalLinks currentCity="serrurier-wattignies" />

          <section id="contact" className="py-16">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold mb-4 text-center">
                Contact
              </h2>
              <p className="text-center text-muted-foreground mb-4">
                Téléphone : <a href={PHONE_HREF} className="text-primary font-bold hover:underline">{PHONE_DISPLAY}</a>
              </p>
              <p className="text-center text-muted-foreground mb-8">
                Urgence nocturne ou dominicale à Wattignies ? Voir notre{" "}
                <Link to="/serrurier-dimanche-nuit-lille" className="text-primary font-medium hover:underline">serrurier dimanche et nuit</Link>.
              </p>
              <ContactForm />
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default SerrurierWattignies;
