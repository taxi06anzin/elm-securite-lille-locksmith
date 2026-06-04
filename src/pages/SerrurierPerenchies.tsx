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

const SerrurierPerenchies = () => {
  const situations = [
    "Clé perdue",
    "Ouverture de porte claquée",
    "Mécanisme bloqué",
    "Cylindre qui tourne dans le vide",
    "Clé cassée"
  ];

  const zones = [
    "Centre", "Route de la bassée", "Bourg", "Secteur Verlinghem", "Quartiers limitrophes Saint-André et Lompret"
  ];

  const faqItems = [
    {
      question: "Quel délai pour un serrurier à Pérenchies ?",
      answer: "À Pérenchies, dans l'ouest de la métropole lilloise, notre serrurier arrive généralement sous 20 à 30 minutes. En passant par la Route de la Bassée, nous desservons rapidement le Bourg, le centre et les abords de Verlinghem. Un simple appel au " + PHONE_DISPLAY + " déclenche le départ immédiat de l'artisan le plus proche."
    },
    {
      question: "Combien coûte une ouverture de porte à Pérenchies ?",
      answer: "Une ouverture de porte à Pérenchies débute à 89€ TTC en journée, déplacement compris. Sur le bâti mixte de la commune — maisons anciennes du Bourg comme pavillons récents près de Lompret — le devis est annoncé avant l'intervention, qu'il s'agisse d'un cylindre standard ou d'une serrure multipoints à remplacer."
    },
    {
      question: "Intervenez-vous la nuit et le dimanche à Pérenchies ?",
      answer: "Oui, nous sommes disponibles à Pérenchies 24h/24 et 7j/7. Nuit, dimanche et jours fériés inclus, un serrurier reste mobilisable pour le centre, la Route de la Bassée ou les secteurs limitrophes de Saint-André. Les urgences comme une clé cassée dans le barillet ou un cylindre qui tourne dans le vide sont traitées sans attendre."
    },
    {
      question: "Quels quartiers de Pérenchies couvrez-vous ?",
      answer: "Notre zone couvre tout Pérenchies : le centre, le Bourg, la Route de la Bassée et les quartiers proches de Verlinghem, Lompret et Saint-André. Cette position dans l'ouest de la MEL nous permet d'intervenir aussi bien dans l'habitat ancien que dans les zones pavillonnaires récentes de la commune."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Serrurier Pérenchies – Dépannage rapide 7j/7 | ELM SÉCURITÉ</title>
        <meta 
          name="description" 
          content="Serrurier à Pérenchies 24/7. Intervention Centre, Route de la bassée, Bourg, Verlinghem. Ouverture porte, changement cylindre ☎ 06 21 66 08 67" 
        />
        <link rel="canonical" href="https://serrurier-urgence-lille.fr/serrurier-perenchies" />
      </Helmet>
      <JsonLd />
      
      <div className="min-h-screen bg-background">
        
        <section className="relative py-20 bg-gradient-to-br from-secondary to-primary">
          <div className="container mx-auto px-4 text-secondary-foreground">
            <div className="max-w-3xl">
              <h1 className="text-5xl font-bold mb-6">
                Serrurier Pérenchies – Dépannage rapide 7j/7
              </h1>
              <p className="text-xl mb-8 opacity-90">
                Pérenchies combine maisons anciennes, constructions récentes et zones pavillonnaires.
                Le service couvre l'ensemble des besoins liés aux portes et verrous.
              </p>
              <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-lg bg-white/15 text-secondary-foreground font-semibold">
                <Clock className="h-5 w-5" />
                Ouverture de porte dès 89€ · intervention en 20-30 min à Pérenchies
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
              <OptimizedImage src={interventionImage} alt="Dépannage Pérenchies" className="w-full h-full object-cover" />
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6">
                Dépannage serrurier Pérenchies
              </h2>
              
              <p className="text-muted-foreground mb-6">
                Situations prises en charge :
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
                Changement de cylindre
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <p className="text-muted-foreground mb-6">
                    Pose directe selon modèle nécessaire : standard, renforcé ou multipoints.
                  </p>

                  <div className="bg-card p-6 rounded-lg border shadow-card">
                    <Lock className="h-12 w-12 text-primary mb-4" />
                    <h3 className="font-bold mb-2">Solutions variées</h3>
                    <p className="text-sm text-muted-foreground">
                      Cylindres adaptés aux maisons anciennes et constructions récentes
                    </p>
                  </div>
                </div>

                <div className="relative h-80 rounded-lg overflow-hidden shadow-elegant">
                  <OptimizedImage src={changementSerrure} alt="Changement cylindre Pérenchies" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </section>

          <section className="py-16">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">
                Serrurier à Pérenchies, à l'ouest de la métropole lilloise
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Située à l'ouest de la MEL, Pérenchies présente un habitat mixte
                caractéristique : courées et maisons de ville anciennes héritées du passé
                textile autour du Bourg, côtoient des constructions plus récentes et des
                lotissements en bordure de Verlinghem et de Lompret. Cette diversité se
                retrouve dans les serrures rencontrées — du verrou ancien à gorges jusqu'au
                cylindre européen multipoints. Nos serruriers s'adaptent à chacun de ces
                mécanismes, de l'ouverture fine d'une porte d'époque au remplacement d'un
                barillet grippé. La proximité de la Route de la Bassée, axe structurant de
                la commune, facilite un accès rapide à chaque rue. Les demandes courantes
                concernent la clé perdue, le cylindre qui tourne dans le vide ou le besoin
                de sécuriser un logement après un déménagement. Besoin d'un{" "}
                <Link to="/serrurier-dimanche-nuit-lille" className="text-primary font-medium hover:underline">dépannage en soirée ou le dimanche</Link> ?
                Consultez aussi nos <Link to="/tarifs" className="text-primary font-medium hover:underline">tarifs</Link>.
              </p>
            </div>
          </section>

          <section className="py-16">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">
                Questions fréquentes — Serrurier Pérenchies
              </h2>
              <FAQ items={faqItems} />
            </div>
          </section>

          <Reviews />

          <InternalLinks currentCity="serrurier-perenchies" />

          <section id="contact" className="py-16">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold mb-4 text-center">
                Contact
              </h2>
              <p className="text-center text-muted-foreground mb-4">
                Téléphone : <a href={PHONE_HREF} className="text-primary font-bold hover:underline">{PHONE_DISPLAY}</a>
              </p>
              <p className="text-center text-muted-foreground mb-8">
                Porte claquée à Pérenchies ? Voir notre service d'{" "}
                <Link to="/ouverture-porte" className="text-primary font-medium hover:underline">ouverture de porte</Link>.
              </p>
              <ContactForm />
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default SerrurierPerenchies;
