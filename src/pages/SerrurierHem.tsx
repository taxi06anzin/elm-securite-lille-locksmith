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
import ouvertureFine from "@/assets/ouverture-fine.png";
import changementCylindre from "@/assets/changement-cylindre.jpg";

const SerrurierHem = () => {
  const faqItems = [
    {
      question: "Quel délai pour faire venir un serrurier à Hem ?",
      answer: "À Hem, le délai d'intervention est généralement de 20 à 30 minutes. Située à l'est de la métropole, près de Roubaix et de Lannoy, la commune est rapidement accessible, que vous habitiez le Centre, la Lionderie ou le quartier de Longchamp. Un appel au " + PHONE_DISPLAY + " suffit à déclencher le déplacement.",
    },
    {
      question: "Quel est le prix d'une ouverture de porte à Hem ?",
      answer: "L'ouverture de porte à Hem débute à 89€ en journée, déplacement inclus. Sur les pavillons des Trois Baudets comme sur les portes d'immeubles collectifs du Centre, le tarif est communiqué avant l'intervention. Le paiement n'intervient qu'une fois la porte ouverte.",
    },
    {
      question: "Le serrurier intervient-il la nuit et le dimanche à Hem ?",
      answer: "Oui, le dépannage à Hem fonctionne 24h/24 et 7j/7. Nuit, dimanche et jours fériés compris, une clé restée à l'intérieur d'un pavillon de la Lionderie ou un barillet bloqué dans un collectif de Beaumont sont pris en charge sans report au lendemain.",
    },
    {
      question: "Quels quartiers de Hem couvrez-vous ?",
      answer: "Toute la commune de Hem est desservie : le Centre, la Lionderie, Longchamp, le secteur Beaumont et le quartier des Trois Baudets. L'habitat y est mixte, entre lotissements pavillonnaires et immeubles collectifs, et chaque type de serrure est traité avec la méthode adaptée.",
    },
  ];
  const situations = [
    "Porte impossible à ouvrir",
    "Mécanisme multipoints bloqué",
    "Clé cassée dans le cylindre",
    "Perte de clés",
    "Barillet endommagé"
  ];

  const quartiers = [
    "Centre Hem", "Lionderie", "Longchamp", "Beaumont", "Les 3 Baudets"
  ];

  return (
    <>
      <Helmet>
        <title>Serrurier Hem – Dépannage immédiat sur toute la commune | ELM SÉCURITÉ</title>
        <meta 
          name="description" 
          content="Serrurier à Hem 24/7. Intervention Centre, Lionderie, Longchamp, Beaumont, 3 Baudets. Ouverture porte, cylindre renforcé ☎ 06 21 66 08 67" 
        />
        <link rel="canonical" href="https://serrurier-urgence-lille.fr/serrurier-hem" />
      </Helmet>
      <JsonLd />
      
      <div className="min-h-screen bg-background">
        
        <section className="relative py-20 bg-gradient-to-br from-secondary to-primary">
          <div className="container mx-auto px-4 text-secondary-foreground">
            <div className="max-w-3xl">
              <h1 className="text-5xl font-bold mb-6">
                Serrurier Hem – Dépannage immédiat sur toute la commune
              </h1>
              <p className="text-xl mb-8 opacity-90">
                Hem présente une zone résidentielle composée de lotissements récents, maisons individuelles 
                et immeubles étagés. Les interventions couvrent les ouvertures de portes, remplacements de cylindres 
                et toutes les urgences liées aux mécanismes de fermeture.
              </p>
              <div className="inline-flex items-center gap-2 bg-background/15 border border-secondary-foreground/20 rounded-lg px-4 py-2 mb-8">
                <Clock className="h-5 w-5" />
                <span className="font-semibold">Ouverture de porte dès 89€ · intervention en 20-30 min à Hem</span>
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
                Le dépannage adapté au tissu urbain de Hem
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                À l'est de la Métropole Européenne de Lille, Hem prolonge l'agglomération roubaisienne avec
                un visage bien à elle : de vastes quartiers pavillonnaires aux jardins clos côtoient des
                ensembles de logements collectifs hérités des grandes opérations d'urbanisme des dernières
                décennies. Cette dualité se retrouve jusque dans les serrures : portes d'entrée individuelles
                à cylindre européen d'un côté, halls et appartements équipés de serrures multipoints de
                l'autre.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Dans les lotissements de la Lionderie ou des Trois Baudets, les interventions concernent
                surtout des clés perdues et des portes claquées au retour du jardin. Du côté de Longchamp et
                des résidences collectives proches du Centre, ce sont davantage des barillets fatigués ou des
                mécanismes multipoints désynchronisés qui réclament un remplacement. Connaître ces réalités
                locales permet d'arriver avec le bon matériel et d'éviter les déplacements à blanc, pour une
                remise en sécurité rapide partout à Hem.
              </p>
            </div>
          </section>

          <section className="py-16">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Ouverture de porte Hem
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
              <div className="relative h-80 rounded-lg overflow-hidden shadow-elegant">
                <OptimizedImage src={ouvertureFine} alt="Ouverture porte Hem" className="w-full h-full object-cover" />
              </div>

              <div>
                <p className="text-muted-foreground mb-6">
                  Traitement des situations suivantes :
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
                Remplacement de cylindre
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <p className="text-muted-foreground mb-6">
                    Installation d'un cylindre standard ou renforcé selon la configuration de la porte 
                    et le niveau de sécurité recherché.
                  </p>

                  <div className="bg-muted border-l-4 border-primary p-4 rounded-lg">
                    <h3 className="font-bold mb-2">Intervention 7j/7</h3>
                    <p className="text-sm text-muted-foreground">
                      Déplacement possible en journée, soirée ou nuit selon la situation rencontrée
                    </p>
                  </div>
                </div>

                <div className="relative h-80 rounded-lg overflow-hidden shadow-elegant">
                  <OptimizedImage src={changementCylindre} alt="Remplacement cylindre Hem" className="w-full h-full object-cover" />
                </div>
              </div>

              <div className="mt-12 text-center">
                <div className="bg-card p-6 rounded-lg border shadow-card inline-block">
                  <Clock className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-bold mb-2">Disponibilité totale</h3>
                  <p className="text-sm text-muted-foreground">
                    Service accessible 24h/24 sur toute la commune de Hem
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="py-16">
            <div className="max-w-3xl mx-auto">
              <p className="text-muted-foreground leading-relaxed text-center">
                Pour aller plus loin : notre service d'{" "}
                <Link to="/ouverture-porte" className="text-primary font-semibold hover:underline">ouverture de porte</Link>,
                le{" "}
                <Link to="/serrurier-dimanche-nuit-lille" className="text-primary font-semibold hover:underline">dépannage de nuit et le dimanche</Link>{" "}
                et le détail de nos{" "}
                <Link to="/tarifs" className="text-primary font-semibold hover:underline">tarifs</Link>{" "}
                sont disponibles avant votre appel.
              </p>
            </div>
          </section>

          <section className="py-16">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">
                Questions fréquentes à Hem
              </h2>
              <FAQ items={faqItems} />
            </div>
          </section>

          <Reviews />

          <InternalLinks currentCity="serrurier-hem" />

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

export default SerrurierHem;
