import { Helmet } from "react-helmet";
import OptimizedImage from "@/components/OptimizedImage";
import { Link } from "react-router-dom";
import TrustBadges from "@/components/TrustBadges";
import ContactForm from "@/components/ContactForm";
import JsonLd from "@/components/JsonLd";
import InternalLinks from "@/components/InternalLinks";
import FAQ from "@/components/FAQ";
import Reviews from "@/components/Reviews";
import { CallButton } from "@/components/ui/button-variants";
import { PHONE_DISPLAY, PHONE_HREF } from "@/config/site";
import { MapPin, CheckCircle, Lock, Clock } from "lucide-react";
import ouverturePorte from "@/assets/ouverture-porte-1.png";
import installationSerrure from "@/assets/installation-serrure.png";

const SerrurierHalluin = () => {
  const depannages = [
    "Porte bloquée",
    "Clé cassée",
    "Perte de clés",
    "Mécanisme multipoints impossible à activer",
    "Cylindre défaillant"
  ];

  const zones = [
    "Halluin Centre", "Mont d'Halluin", "Colbras", "Salengro", "Quartiers proches Menin / Bousbecque"
  ];

  const faqItems = [
    {
      question: "En combien de temps intervenez-vous à Halluin ?",
      answer: "Notre serrurier rejoint Halluin en 20 à 30 minutes. Commune frontalière à l'extrême nord de la MEL, Halluin est desservie via Tourcoing et Roncq : nous couvrons aussi rapidement le centre, le Mont d'Halluin, Colbras et Salengro que les quartiers proches de Menin et Bousbecque.",
    },
    {
      question: "Quel est le tarif d'une ouverture de porte à Halluin ?",
      answer: "À Halluin, l'ouverture de porte démarre à 89€ en journée, déplacement et diagnostic inclus. Sur les maisons ouvrières mitoyennes du centre comme sur les pavillons du Mont d'Halluin, nous cherchons toujours l'ouverture sans casse en priorité. Le prix est annoncé à l'avance avec un devis gratuit.",
    },
    {
      question: "Êtes-vous joignables la nuit et le dimanche à Halluin ?",
      answer: "Oui, notre dépannage à Halluin est disponible 24h/24 et 7j/7, nuit, dimanche et jours fériés compris. Une porte claquée un dimanche à Colbras ou une effraction à sécuriser de nuit près de la frontière belge : nous nous déplaçons immédiatement, sans majoration cachée.",
    },
    {
      question: "Quels quartiers d'Halluin couvrez-vous ?",
      answer: "Nous intervenons dans tout Halluin : Halluin Centre, le Mont d'Halluin, Colbras, Salengro et les secteurs limitrophes de Menin et Bousbecque, sur l'habitat mixte ouvrier comme sur les zones pavillonnaires.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Serrurier Halluin – Dépannage rapide 24/7 | ELM SÉCURITÉ</title>
        <meta 
          name="description" 
          content="Serrurier à Halluin 24/7. Intervention Centre, Mont d'Halluin, Colbras, Salengro. Ouverture porte, changement cylindre ☎ 06 21 66 08 67" 
        />
        <link rel="canonical" href="https://serrurier-urgence-lille.fr/serrurier-halluin/" />
      </Helmet>
      <JsonLd />
      
      <div className="min-h-screen bg-background">
        
        <section className="relative py-20 bg-gradient-to-br from-secondary to-primary">
          <div className="container mx-auto px-4 text-secondary-foreground">
            <div className="max-w-3xl">
              <h1 className="text-5xl font-bold mb-6">
                Serrurier Halluin – Dépannage rapide 24/7
              </h1>
              <p className="text-xl mb-8 opacity-90">
                Halluin possède un tissu résidentiel varié composé de maisons mitoyennes, logements collectifs 
                et pavillons. Le service couvre les dépannages liés aux portes et cylindres.
              </p>
              <p className="text-lg opacity-90 max-w-3xl">
                Un serrurier à Halluin doit pouvoir intervenir rapidement sur l'ensemble de la commune, du centre-ville 
                aux quartiers du Mont d'Halluin, de Colbras à Salengro. ELM SÉCURITÉ assure un dépannage serrurier 
                à Halluin 24h/24 et 7j/7 : ouverture de porte claquée, clé cassée dans la serrure, changement de 
                cylindre ou de serrure multipoints, sécurisation après effraction. Nos interventions sont réalisées 
                avec des tarifs annoncés à l'avance et un devis gratuit. Que vous soyez en maison individuelle ou en 
                immeuble, notre serrurier à Halluin adapte ses méthodes (ouverture fine, remplacement de barillet) 
                pour limiter les dégâts et vous garantir une remise en état durable. La proximité avec la frontière 
                belge et les villes de la MEL (Roubaix, Tourcoing, Bousbecque) nous permet d'intervenir dans un 
                délai de 20 à 30 minutes après votre appel.
              </p>
              <div className="inline-flex items-center gap-3 bg-background/15 border border-background/25 rounded-lg px-5 py-3 mb-8 backdrop-blur-sm">
                <Clock className="h-5 w-5 flex-shrink-0" />
                <span className="font-semibold">
                  Ouverture de porte dès 89€ · intervention en 20-30 min à Halluin
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
              <OptimizedImage src={ouverturePorte} alt="Dépannage Halluin" className="w-full h-full object-cover" />
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6">
                Dépannages fréquents à Halluin
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
                Changement de cylindre
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <p className="text-muted-foreground mb-6">
                    Pose immédiate d'un modèle compatible avec la porte en place.
                  </p>

                  <div className="bg-card p-6 rounded-lg border shadow-card">
                    <Lock className="h-12 w-12 text-primary mb-4" />
                    <h3 className="font-bold mb-2">Installation rapide</h3>
                    <p className="text-sm text-muted-foreground">
                      Cylindres adaptés aux maisons mitoyennes et logements collectifs d'Halluin
                    </p>
                  </div>
                </div>

                <div className="relative h-80 rounded-lg overflow-hidden shadow-elegant">
                  <OptimizedImage src={installationSerrure} alt="Changement cylindre Halluin" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </section>

          <section className="py-16 bg-muted -mx-4 px-4 md:mx-0 md:rounded-lg">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-center">
                Nos autres services
              </h2>
              <p className="text-center text-muted-foreground mb-8">
                Dépannage, ouverture de porte, changement de serrure dans toute la MEL.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/depannage-serrurerie" className="px-5 py-3 bg-background border rounded-lg font-medium hover:border-primary hover:shadow-card transition-all">
                  Dépannage 24/7
                </Link>
                <Link to="/ouverture-porte" className="px-5 py-3 bg-background border rounded-lg font-medium hover:border-primary hover:shadow-card transition-all">
                  Ouverture de porte
                </Link>
                <Link to="/changement-serrure" className="px-5 py-3 bg-background border rounded-lg font-medium hover:border-primary hover:shadow-card transition-all">
                  Changement serrure
                </Link>
                <Link to="/tarifs" className="px-5 py-3 bg-background border rounded-lg font-medium hover:border-primary hover:shadow-card transition-all">
                  Tarifs
                </Link>
                <Link to="/serrurier-lille" className="px-5 py-3 bg-background border rounded-lg font-medium hover:border-primary hover:shadow-card transition-all">
                  Serrurier Lille
                </Link>
              </div>
            </div>
          </section>

          <section className="py-16">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-center">
                Serrurier à la frontière belge
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Tout au nord de la métropole, Halluin vit collée à la frontière belge, face à
                Menin. Son histoire industrielle a façonné un habitat mixte : longues rangées de
                maisons ouvrières mitoyennes héritées du textile, courées du centre, mais aussi
                lotissements pavillonnaires plus récents qui grimpent vers le Mont d'Halluin. Cette
                variété se traduit par des serrures très différentes d'une rue à l'autre — vieilles
                serrures à gorges sur les portes anciennes, multipoints A2P sur les rénovations —
                et chaque dépannage commence donc par un diagnostic précis avant toute manipulation.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Le caractère transfrontalier de la commune influe aussi sur la sécurisation : après
                une effraction à Colbras ou Salengro, beaucoup d'habitants souhaitent renforcer
                rapidement leur porte. Nous posons cylindres et serrures adaptés, en urgence si
                nécessaire. Un besoin immédiat ? Composez le{" "}
                <a href={PHONE_HREF} className="text-primary font-semibold hover:underline">
                  {PHONE_DISPLAY}
                </a>
                . Vous pouvez aussi consulter nos pages{" "}
                <Link to="/ouverture-porte" className="text-primary font-semibold hover:underline">
                  ouverture de porte
                </Link>
                ,{" "}
                <Link to="/serrurier-dimanche-nuit-lille" className="text-primary font-semibold hover:underline">
                  serrurier dimanche et nuit
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
                Questions fréquentes — Serrurier Halluin
              </h2>
              <FAQ items={faqItems} />
            </div>
          </section>

          <Reviews />

          <InternalLinks currentCity="serrurier-halluin" />

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

export default SerrurierHalluin;
