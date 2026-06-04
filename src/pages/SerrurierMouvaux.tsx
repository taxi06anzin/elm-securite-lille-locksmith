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
import { MapPin, CheckCircle, Shield, Clock } from "lucide-react";
import { PHONE_DISPLAY, PHONE_HREF } from "@/config/site";
import cleCassee from "@/assets/cle-cassee.png";
import changementSerrure from "@/assets/changement-serrure.jpg";

const SerrurierMouvaux = () => {
  const situations = [
    "Porte claquée",
    "Barillet bloqué",
    "Clé cassée",
    "Perte de clé",
    "Mécanisme multipoints impossible à activer"
  ];

  const secteurs = [
    "Hauts-Champs", "Zone centre", "Parc du Hautmont", "Secteurs proches Tourcoing / Bondues"
  ];

  const faqItems = [
    {
      question: "Quel délai pour un serrurier à Mouvaux ?",
      answer: "Notre serrurier intervient à Mouvaux en 20 à 30 minutes en moyenne. Depuis les axes reliant Tourcoing et Bondues, nous rejoignons rapidement les Hauts-Champs, le centre ou le secteur du Parc du Hautmont. Dès votre appel au " + PHONE_DISPLAY + ", un artisan se met en route vers votre adresse pavillonnaire."
    },
    {
      question: "Combien coûte une ouverture de porte à Mouvaux ?",
      answer: "À Mouvaux, l'ouverture d'une porte claquée démarre à 89€ TTC en journée, déplacement et diagnostic compris. Sur les maisons et villas des Hauts-Champs ou du Parc du Hautmont, équipées de portes multipoints, un devis gratuit est établi avant toute intervention, sans surprise sur le tarif final."
    },
    {
      question: "Intervenez-vous la nuit et le dimanche à Mouvaux ?",
      answer: "Oui, nous dépannons à Mouvaux 24h/24 et 7j/7, y compris la nuit, le dimanche et les jours fériés. Que vous habitiez le centre ou un lotissement résidentiel proche de Bondues, un serrurier reste joignable en permanence pour les urgences : porte claquée, clé perdue ou cylindre bloqué."
    },
    {
      question: "Quels quartiers de Mouvaux couvrez-vous ?",
      answer: "Nous couvrons l'ensemble de Mouvaux : les Hauts-Champs, la zone centre, le Parc du Hautmont ainsi que les secteurs pavillonnaires limitrophes de Tourcoing et de Bondues. Aucun quartier résidentiel de la commune n'est exclu de notre zone d'intervention."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Serrurier Mouvaux – Dépannage portes et cylindres | ELM SÉCURITÉ</title>
        <meta 
          name="description" 
          content="Serrurier à Mouvaux 24/7. Intervention Hauts-Champs, centre, Hautmont. Ouverture porte, remplacement cylindre, renforcement sécurité ☎ 06 21 66 08 67" 
        />
        <link rel="canonical" href="https://serrurier-urgence-lille.fr/serrurier-mouvaux" />
      </Helmet>
      <JsonLd />
      
      <div className="min-h-screen bg-background">
        
        <section className="relative py-20 bg-gradient-to-br from-secondary to-primary">
          <div className="container mx-auto px-4 text-secondary-foreground">
            <div className="max-w-3xl">
              <h1 className="text-5xl font-bold mb-6">
                Serrurier Mouvaux – Dépannage portes et cylindres
              </h1>
              <p className="text-xl mb-8 opacity-90">
                Mouvaux possède un habitat composé de maisons, villas et immeubles récents.
                Les interventions tiennent compte du niveau de sécurité des portes d'entrée.
              </p>
              <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-lg bg-white/15 text-secondary-foreground font-semibold">
                <Clock className="h-5 w-5" />
                Ouverture de porte dès 89€ · intervention en 20-30 min à Mouvaux
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
                Ouverture de porte à Mouvaux
              </h2>
              
              <p className="text-muted-foreground mb-6">
                Situations traitées :
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

            <div className="relative h-96 rounded-lg overflow-hidden shadow-elegant">
              <OptimizedImage src={cleCassee} alt="Dépannage serrurier Mouvaux" className="w-full h-full object-cover" />
            </div>
          </section>

          <section className="py-16 bg-muted -mx-4 px-4 md:mx-0 md:rounded-lg">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-center">
                Secteurs de Mouvaux couverts
              </h2>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
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
                Renforcement et remplacement
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="relative h-80 rounded-lg overflow-hidden shadow-elegant">
                  <OptimizedImage src={changementSerrure} alt="Renforcement sécurité Mouvaux" className="w-full h-full object-cover" />
                </div>

                <div>
                  <p className="text-muted-foreground mb-6">
                    Si la porte nécessite une sécurisation, des cylindres renforcés ou plus résistants 
                    peuvent être installés.
                  </p>

                  <div className="bg-card p-6 rounded-lg border shadow-card">
                    <Shield className="h-12 w-12 text-primary mb-4" />
                    <h3 className="font-bold mb-2">Cylindres renforcés</h3>
                    <p className="text-sm text-muted-foreground">
                      Installation de systèmes haute sécurité adaptés aux villas et maisons
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="py-16">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">
                La serrurerie à Mouvaux, commune résidentielle de la MEL
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Mouvaux est avant tout une ville pavillonnaire : maisons individuelles,
                villas et lotissements paisibles structurent les Hauts-Champs et les abords
                du Parc du Hautmont. Cet habitat de standing implique des portes d'entrée
                souvent équipées de serrures multipoints A2P et de cylindres de sécurité,
                que nos serruriers savent ouvrir sans dégât. Les sollicitations les plus
                fréquentes restent la porte claquée au retour du jardin et la clé oubliée
                à l'intérieur. À deux pas de Tourcoing et de Bondues, nous accédons vite
                aux rues résidentielles de la commune, même celles en retrait des grands
                axes. Pour une effraction ou une serrure forcée, nous remettons la maison
                en sécurité immédiatement, en remplaçant le cylindre par un modèle renforcé
                adapté à la valeur du bien. Découvrez aussi nos prestations d'{" "}
                <Link to="/ouverture-porte" className="text-primary font-medium hover:underline">ouverture de porte</Link>{" "}
                et nos <Link to="/tarifs" className="text-primary font-medium hover:underline">tarifs détaillés</Link>.
              </p>
            </div>
          </section>

          <section className="py-16">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">
                Questions fréquentes — Serrurier Mouvaux
              </h2>
              <FAQ items={faqItems} />
            </div>
          </section>

          <Reviews />

          <InternalLinks currentCity="serrurier-mouvaux" />

          <section id="contact" className="py-16">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold mb-4 text-center">
                Contact
              </h2>
              <p className="text-center text-muted-foreground mb-4">
                Téléphone : <a href={PHONE_HREF} className="text-primary font-bold hover:underline">{PHONE_DISPLAY}</a>
              </p>
              <p className="text-center text-muted-foreground mb-8">
                Urgence en soirée ou le week-end à Mouvaux ? Voir notre{" "}
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

export default SerrurierMouvaux;
