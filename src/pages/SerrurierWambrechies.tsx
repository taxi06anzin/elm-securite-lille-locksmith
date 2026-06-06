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
import { MapPin, CheckCircle, Clock } from "lucide-react";
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

  const faqItems = [
    {
      question: "Quel délai pour faire venir un serrurier à Wambrechies ?",
      answer: "Nous arrivons généralement en 20 à 30 minutes à Wambrechies. Depuis le bourg ancien jusqu'aux maisons longeant la Deûle, en passant par le secteur de Marque-Église, notre serrurier connaît les accès et rejoint rapidement votre adresse, même aux abords du Château de Robersart ou de la zone portuaire.",
    },
    {
      question: "Combien coûte une ouverture de porte à Wambrechies ?",
      answer: "À Wambrechies, l'ouverture de porte débute à 89€ en journée, déplacement et diagnostic inclus. Sur les maisons de caractère du centre ancien, nous privilégions toujours l'ouverture fine sans dégât. Le prix est fixé avant l'intervention avec un devis gratuit, sans surprise une fois sur place.",
    },
    {
      question: "Êtes-vous disponibles la nuit et le week-end à Wambrechies ?",
      answer: "Oui, notre dépannage à Wambrechies fonctionne 24h/24 et 7j/7, week-ends et jours fériés compris. Que vous soyez bloqué un dimanche dans une maison du bord de Deûle ou de nuit près de Marque-Église, un serrurier se déplace pour ouvrir, dépanner ou sécuriser votre porte.",
    },
    {
      question: "Quels secteurs de Wambrechies desservez-vous ?",
      answer: "Nous intervenons dans tout Wambrechies : le centre-bourg historique, le Château de Robersart, Marque-Église, la zone portuaire le long de la Deûle, ainsi qu'aux limites de Marquette-lez-Lille et Verlinghem.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Serrurier Wambrechies – Dépannage 24/7 | ELM SÉCURITÉ</title>
        <meta 
          name="description" 
          content="Serrurier à Wambrechies 24/7. Intervention Centre, Robersart, Marque-Église. Ouverture porte, sécurisation après incident ☎ 06 21 66 08 67" 
        />
        <link rel="canonical" href="https://serrurier-urgence-lille.fr/serrurier-wambrechies/" />
      </Helmet>
      <JsonLd />
      
      <div className="min-h-screen bg-background">
        
        <section className="relative py-20 bg-gradient-to-br from-secondary to-primary">
          <div className="container mx-auto px-4 text-secondary-foreground">
            <div className="max-w-3xl">
              <h1 className="text-5xl font-bold mb-6">
                Serrurier Wambrechies – Dépannage sur tous les quartiers
              </h1>
              <p className="text-xl mb-6 opacity-90">
                Wambrechies possède un bâtiment ancien au centre-ville, des maisons récentes autour de la Deûle
                et des zones pavillonnaires. Le service s'adapte à chaque type d'ouverture.
              </p>
              <div className="inline-flex items-center gap-3 bg-background/15 border border-background/25 rounded-lg px-5 py-3 mb-8 backdrop-blur-sm">
                <Clock className="h-5 w-5 flex-shrink-0" />
                <span className="font-semibold">
                  Ouverture de porte dès 89€ · intervention en 20-30 min à Wambrechies
                </span>
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
              <OptimizedImage src={interventionImage} alt="Serrurier Wambrechies intervention" className="w-full h-full object-cover" />
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
                  <OptimizedImage src={installationSerrure} alt="Sécurisation Wambrechies" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </section>

          <section className="py-16">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-center">
                Le savoir-faire serrurerie sur un bourg de caractère
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Au nord de la métropole, Wambrechies cultive son identité de bourg ancien : ruelles
                du centre, façades en brique, distillerie historique et maisons de caractère qui
                descendent jusqu'aux quais de la Deûle. Ce patrimoine impose une approche soignée.
                Sur une porte d'entrée d'époque, parfois équipée d'une serrure encastrée d'origine
                ou d'un cylindre ancien, on évite le perçage tant que l'ouverture fine reste
                possible afin de préserver le bois et les ferrures.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                À l'inverse, les programmes plus récents près de la zone portuaire et vers
                Marque-Église sont équipés de serrures multipoints modernes qui réclament un
                diagnostic précis du point de blocage. Entre le Château de Robersart et les limites
                de Marquette-lez-Lille et Verlinghem, nous adaptons l'outillage à chaque type de
                menuiserie. Un doute, une urgence ? Appelez le{" "}
                <a href={PHONE_HREF} className="text-primary font-semibold hover:underline">
                  {PHONE_DISPLAY}
                </a>{" "}
                ou parcourez nos pages{" "}
                <Link to="/ouverture-porte" className="text-primary font-semibold hover:underline">
                  ouverture de porte
                </Link>
                ,{" "}
                <Link to="/serrurier-dimanche-nuit-lille" className="text-primary font-semibold hover:underline">
                  serrurier dimanche et nuit
                </Link>{" "}
                et{" "}
                <Link to="/tarifs" className="text-primary font-semibold hover:underline">
                  tarifs
                </Link>
                .
              </p>
            </div>
          </section>

          <section className="py-16">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">
                Questions fréquentes — Serrurier Wambrechies
              </h2>
              <FAQ items={faqItems} />
            </div>
          </section>

          <Reviews />

          <InternalLinks currentCity="serrurier-wambrechies" />

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
      </div>
    </>
  );
};

export default SerrurierWambrechies;
