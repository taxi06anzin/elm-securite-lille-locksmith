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
import { MapPin, CheckCircle, Shield, Clock } from "lucide-react";
import ouvertureFine from "@/assets/ouverture-fine.png";
import changementCylindre from "@/assets/changement-cylindre.jpg";

const SerrurierRonchin = () => {
  const interventions = [
    "Blocage multipoints",
    "Clé perdue",
    "Clé cassée",
    "Mécanisme impossible à activer",
    "Cylindre grippé"
  ];

  const quartiers = [
    "Nouveau Ronchin", "Vieux Ronchin", "Les 5 Bonniers", "La Marlière", "Zones proches du Stade Pierre-Mauroy"
  ];

  const faqItems = [
    {
      question: "En combien de temps un serrurier arrive-t-il à Ronchin ?",
      answer: "À Ronchin, notre serrurier intervient en 20 à 30 minutes après votre appel. La position de la commune au sud de Lille, à proximité immédiate du périphérique et de l'A1, nous permet de rejoindre rapidement le Nouveau Ronchin, le Vieux Ronchin comme les abords des 5 Bonniers et du Stade Pierre-Mauroy.",
    },
    {
      question: "Quel est le prix d'une ouverture de porte à Ronchin ?",
      answer: "L'ouverture de porte à Ronchin démarre à 89€ en journée, déplacement et diagnostic compris, avec une ouverture sans casse chaque fois que c'est possible. Le tarif vous est annoncé avant l'intervention et un devis gratuit vous est remis, que vous habitiez un pavillon du Vieux Ronchin ou un appartement en collectif près de la Marlière.",
    },
    {
      question: "Intervenez-vous la nuit et le dimanche à Ronchin ?",
      answer: "Oui, ELM Sécurité dépanne à Ronchin 24h/24 et 7j/7, y compris la nuit, le dimanche et les jours fériés. Une porte claquée à La Marlière un soir de match au Stade Pierre-Mauroy ou un cylindre grippé un dimanche matin : nous nous déplaçons sans attendre les heures ouvrables.",
    },
    {
      question: "Quels quartiers de Ronchin couvrez-vous ?",
      answer: "Nous couvrons l'ensemble de Ronchin : le Nouveau Ronchin et ses immeubles récents, le Vieux Ronchin et son habitat pavillonnaire, le secteur des 5 Bonniers, La Marlière et les zones proches du Stade Pierre-Mauroy et du périphérique.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Serrurier Ronchin – Dépannage immédiat | ELM SÉCURITÉ</title>
        <meta 
          name="description" 
          content="Serrurier à Ronchin 24/7. Intervention Nouveau Ronchin, Vieux Ronchin, 5 Bonniers, Marlière. Ouverture porte ☎ 06 21 66 08 67" 
        />
        <link rel="canonical" href="https://serrurier-urgence-lille.fr/serrurier-ronchin" />
      </Helmet>
      <JsonLd />
      
      <div className="min-h-screen bg-background">
        
        <section className="relative py-20 bg-gradient-to-br from-secondary to-primary">
          <div className="container mx-auto px-4 text-secondary-foreground">
            <div className="max-w-3xl">
              <h1 className="text-5xl font-bold mb-6">
                Serrurier Ronchin – Dépannage immédiat
              </h1>
              <p className="text-xl mb-6 opacity-90">
                Ronchin est composé de quartiers résidentiels et d'immeubles récents.
                Les interventions s'adaptent aux portes d'appartements, maisons, accès de garage et entrées principales.
              </p>
              <div className="inline-flex items-center gap-3 bg-background/15 border border-background/25 rounded-lg px-5 py-3 mb-8 backdrop-blur-sm">
                <Clock className="h-5 w-5 flex-shrink-0" />
                <span className="font-semibold">
                  Ouverture de porte dès 89€ · intervention en 20-30 min à Ronchin
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

          <section className="py-16">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Interventions fréquentes
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
              <div className="relative h-80 rounded-lg overflow-hidden shadow-elegant">
                <OptimizedImage src={ouvertureFine} alt="Dépannage serrurier Ronchin" className="w-full h-full object-cover" />
              </div>

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
                Quartiers couverts
              </h2>

              <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
                {quartiers.map((quartier, index) => (
                  <div key={index} className="bg-background border rounded-lg p-4 text-center shadow-card hover:shadow-elegant transition-shadow">
                    <MapPin className="h-5 w-5 text-primary mx-auto mb-2" />
                    <span className="text-sm font-medium">{quartier}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="py-16">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">
                Pose d'un nouveau cylindre
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <p className="text-muted-foreground mb-6">
                    Possibilité de monter un modèle plus résistant pour sécuriser le logement.
                  </p>

                  <div className="bg-card p-6 rounded-lg border shadow-card">
                    <Shield className="h-12 w-12 text-primary mb-4" />
                    <h3 className="font-bold mb-2">Sécurité renforcée</h3>
                    <p className="text-sm text-muted-foreground">
                      Installation de cylindres résistants pour portes d'appartements et maisons
                    </p>
                  </div>
                </div>

                <div className="relative h-80 rounded-lg overflow-hidden shadow-elegant">
                  <OptimizedImage src={changementCylindre} alt="Cylindre Ronchin" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </section>

          <section className="py-16">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-center">
                Un serrurier de proximité au sud de Lille
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Adossée à la frontière sud de Lille et bordée par le périphérique, Ronchin mêle
                l'habitat pavillonnaire du Vieux Ronchin aux résidences collectives plus récentes
                du Nouveau Ronchin. Cette mixité change tout pour un dépannage de serrurerie :
                une porte d'entrée de maison ancienne près de la mairie ne se travaille pas comme
                la porte palière blindée d'un immeuble des 5 Bonniers. Sur le terrain, nous
                rencontrons surtout des serrures multipoints récentes côté collectif et des
                cylindres usés sur les pavillons d'avant les années 80.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                La proximité du Stade Pierre-Mauroy et des grands axes nous permet de rejoindre
                vite La Marlière comme les rues calmes du centre, sans rester bloqués dans les
                ralentissements. Pour une porte claquée, une clé cassée dans le barillet ou un
                besoin de sécurisation après tentative d'effraction, vous pouvez nous joindre
                directement au{" "}
                <a href={PHONE_HREF} className="text-primary font-semibold hover:underline">
                  {PHONE_DISPLAY}
                </a>
                . Besoin d'en savoir plus ? Consultez nos pages{" "}
                <Link to="/ouverture-porte" className="text-primary font-semibold hover:underline">
                  ouverture de porte
                </Link>
                ,{" "}
                <Link to="/serrurier-dimanche-nuit-lille" className="text-primary font-semibold hover:underline">
                  dépannage dimanche et nuit
                </Link>{" "}
                et nos{" "}
                <Link to="/tarifs" className="text-primary font-semibold hover:underline">
                  tarifs détaillés
                </Link>
                .
              </p>
            </div>
          </section>

          <section className="py-16">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">
                Questions fréquentes — Serrurier Ronchin
              </h2>
              <FAQ items={faqItems} />
            </div>
          </section>

          <Reviews />

          <InternalLinks currentCity="serrurier-ronchin" />

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

export default SerrurierRonchin;
