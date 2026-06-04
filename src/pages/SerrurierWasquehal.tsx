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
import installationSerrure from "@/assets/installation-serrure.png";

const SerrurierWasquehal = () => {
  const depannages = [
    "Porte claquée",
    "Clé cassée ou inaccessible",
    "Mécanisme multipoints impossible à actionner",
    "Barillet tournant dans le vide"
  ];

  const zones = [
    "Centre", "Noir Bonnet", "Pavé de Lille", "Grand Cottignies", "Triez"
  ];

  const faqItems = [
    {
      question: "Quel temps d'intervention à Wasquehal ?",
      answer: "Comptez 20 à 30 minutes pour qu'un serrurier arrive à Wasquehal. Positionnée à l'est de la métropole entre Roubaix et Croix, la commune est facilement accessible par la rocade : nous rejoignons aussi bien le Centre que Noir Bonnet, le Pavé de Lille, le Grand Cottignies ou le Triez sans perdre de temps.",
    },
    {
      question: "Quel prix pour une ouverture de porte à Wasquehal ?",
      answer: "L'ouverture de porte à Wasquehal commence à 89€ en journée, déplacement et diagnostic compris. Sur un pavillon du Triez comme sur un appartement proche du centre, nous tentons d'abord l'ouverture sans casse. Le tarif est communiqué à l'avance et confirmé par un devis gratuit avant toute manipulation.",
    },
    {
      question: "Dépannez-vous la nuit et le dimanche à Wasquehal ?",
      answer: "Oui, ELM Sécurité assure le dépannage à Wasquehal 24h/24 et 7j/7, nuit, dimanche et jours fériés inclus. Une porte claquée le soir au Grand Cottignies ou un barillet qui tourne dans le vide un dimanche au Pavé de Lille : nous intervenons sans attendre la réouverture des commerces.",
    },
    {
      question: "Quelles zones de Wasquehal couvrez-vous ?",
      answer: "Nous couvrons tout Wasquehal : le Centre, le quartier Noir Bonnet, le Pavé de Lille, le Grand Cottignies et le Triez, ainsi que les secteurs résidentiels et les zones d'activités proches de Roubaix et Croix.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Serrurier Wasquehal – Dépannage immédiat | ELM SÉCURITÉ</title>
        <meta 
          name="description" 
          content="Serrurier à Wasquehal 24/7. Intervention Centre, Noir Bonnet, Pavé de Lille, Cottignies, Triez. Ouverture porte, cylindres renforcés ☎ 06 21 66 08 67" 
        />
        <link rel="canonical" href="https://serrurier-urgence-lille.fr/serrurier-wasquehal" />
      </Helmet>
      <JsonLd />
      
      <div className="min-h-screen bg-background">
        
        <section className="relative py-20 bg-gradient-to-br from-secondary to-primary">
          <div className="container mx-auto px-4 text-secondary-foreground">
            <div className="max-w-3xl">
              <h1 className="text-5xl font-bold mb-6">
                Serrurier Wasquehal – Dépannage immédiat
              </h1>
              <p className="text-xl mb-6 opacity-90">
                Wasquehal est composé de zones pavillonnaires, immeubles récents et intersections via la rocade.
                Les interventions sont organisées selon l'accès le plus rapide.
              </p>
              <div className="inline-flex items-center gap-3 bg-background/15 border border-background/25 rounded-lg px-5 py-3 mb-8 backdrop-blur-sm">
                <Clock className="h-5 w-5 flex-shrink-0" />
                <span className="font-semibold">
                  Ouverture de porte dès 89€ · intervention en 20-30 min à Wasquehal
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
            <div>
              <h2 className="text-3xl font-bold mb-6">
                Dépannages fréquents
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

            <div className="relative h-96 rounded-lg overflow-hidden shadow-elegant">
              <OptimizedImage src={ouvertureFine} alt="Dépannage serrurier Wasquehal" className="w-full h-full object-cover" />
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
                Installation de nouveaux cylindres
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="relative h-80 rounded-lg overflow-hidden shadow-elegant">
                  <OptimizedImage src={installationSerrure} alt="Installation cylindre Wasquehal" className="w-full h-full object-cover" />
                </div>

                <div>
                  <p className="text-muted-foreground mb-6">
                    Possibilité de monter un cylindre renforcé ou un modèle standard selon la porte.
                  </p>

                  <div className="space-y-4">
                    <div className="bg-card p-4 rounded-lg border shadow-card">
                      <Lock className="h-8 w-8 text-primary mb-2" />
                      <h3 className="font-bold mb-1">Cylindre renforcé</h3>
                      <p className="text-sm text-muted-foreground">
                        Protection optimale pour zones pavillonnaires
                      </p>
                    </div>

                    <div className="bg-card p-4 rounded-lg border shadow-card">
                      <Lock className="h-8 w-8 text-primary mb-2" />
                      <h3 className="font-bold mb-1">Cylindre standard</h3>
                      <p className="text-sm text-muted-foreground">
                        Solution économique pour sécurité de base
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="py-16">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-center">
                Dépannage serrurerie entre Roubaix et Croix
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                À l'est de la MEL, coincée entre Roubaix et Croix, Wasquehal a la particularité de
                juxtaposer des quartiers résidentiels paisibles et de véritables zones d'activités.
                Cette double identité se retrouve dans nos interventions : portes pavillonnaires
                classiques au Triez ou au Grand Cottignies d'un côté, accès professionnels,
                rideaux et serrures haute sécurité dans les secteurs d'entreprises du Pavé de Lille
                de l'autre. On ne traite pas un barillet domestique comme une fermeture de local.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Le maillage de la commune par la rocade et les grands boulevards facilite nos
                déplacements vers Noir Bonnet et le centre, ce qui réduit les délais quelle que soit
                l'heure. Porte claquée, clé inaccessible, mécanisme multipoints récalcitrant : un
                appel au{" "}
                <a href={PHONE_HREF} className="text-primary font-semibold hover:underline">
                  {PHONE_DISPLAY}
                </a>{" "}
                suffit à lancer l'intervention. Pour préparer votre demande, consultez nos pages{" "}
                <Link to="/ouverture-porte" className="text-primary font-semibold hover:underline">
                  ouverture de porte
                </Link>
                ,{" "}
                <Link to="/serrurier-dimanche-nuit-lille" className="text-primary font-semibold hover:underline">
                  dépannage de nuit et le dimanche
                </Link>{" "}
                et nos{" "}
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
                Questions fréquentes — Serrurier Wasquehal
              </h2>
              <FAQ items={faqItems} />
            </div>
          </section>

          <Reviews />

          <InternalLinks currentCity="serrurier-wasquehal" />

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

export default SerrurierWasquehal;
