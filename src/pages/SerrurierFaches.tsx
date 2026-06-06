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
import cleCassee from "@/assets/cle-cassee.png";
import installationSerrure from "@/assets/installation-serrure.png";

const SerrurierFaches = () => {
  const situations = [
    "Blocage total du mécanisme",
    "Clé cassée",
    "Porte claquée",
    "Perte de clés",
    "Cylindre impossible à tourner"
  ];

  const secteurs = [
    "Centre", "Cheminots", "Saint-Exupéry", "Mairie", "Limite Ronchin / Lille Sud"
  ];

  const faqItems = [
    {
      question: "Quel délai pour un serrurier à Faches-Thumesnil ?",
      answer: "Frontalière de Lille-Sud et de Ronchin, Faches-Thumesnil est l'une de nos communes les plus accessibles : nos serruriers y arrivent souvent en moins de 25 minutes. Le centre, le quartier des Cheminots et le secteur Saint-Exupéry sont rejoints rapidement via les grands axes. Composez le " + PHONE_DISPLAY + " pour un départ immédiat."
    },
    {
      question: "Combien coûte une ouverture de porte à Faches-Thumesnil ?",
      answer: "À Faches-Thumesnil, l'ouverture d'une porte démarre à 89€ TTC en journée, déplacement et diagnostic inclus. Dans les immeubles du centre et près de la zone commerciale, beaucoup de portes palières sont équipées de serrures multipoints : le devis correspondant vous est remis avant toute manipulation, sans frais caché."
    },
    {
      question: "Intervenez-vous la nuit et le dimanche à Faches-Thumesnil ?",
      answer: "Oui, notre serrurier dépanne Faches-Thumesnil 24h/24 et 7j/7, y compris la nuit, le dimanche et les jours fériés. En appartement comme en maison, du quartier de la Mairie aux Cheminots, une porte claquée ou une clé perdue trouve une solution à toute heure grâce à notre service d'urgence permanent."
    },
    {
      question: "Quels quartiers de Faches-Thumesnil couvrez-vous ?",
      answer: "Nous couvrons l'ensemble de Faches-Thumesnil : le centre, les Cheminots, Saint-Exupéry, le secteur de la Mairie ainsi que la limite avec Ronchin et Lille-Sud. Habitat collectif, pavillons et locaux de la zone commerciale du sud lillois entrent tous dans notre périmètre d'intervention."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Serrurier Faches-Thumesnil 24/7 | ELM SÉCURITÉ</title>
        <meta 
          name="description" 
          content="Serrurier à Faches-Thumesnil 24/7. Intervention Centre, Cheminots, Saint-Exupéry. Proximité aéroport. Ouverture porte ☎ 06 21 66 08 67" 
        />
        <link rel="canonical" href="https://serrurier-urgence-lille.fr/serrurier-faches-thumesnil/" />
      </Helmet>
      <JsonLd />
      
      <div className="min-h-screen bg-background">
        
        <section className="relative py-20 bg-gradient-to-br from-secondary to-primary">
          <div className="container mx-auto px-4 text-secondary-foreground">
            <div className="max-w-3xl">
              <h1 className="text-5xl font-bold mb-6">
                Serrurier Faches-Thumesnil – Dépannage sur tous les secteurs
              </h1>
              <p className="text-xl mb-8 opacity-90">
                Commune très demandée en raison de sa proximité avec les grands axes et l'aéroport.
                Intervention sur portes bloquées, systèmes multipoints, barillets et cylindres endommagés.
              </p>
              <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-lg bg-white/15 text-secondary-foreground font-semibold">
                <Clock className="h-5 w-5" />
                Ouverture de porte dès 89€ · intervention en 20-30 min à Faches-Thumesnil
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
                Situations prises en charge
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
              <OptimizedImage src={cleCassee} alt="Dépannage Faches-Thumesnil" className="w-full h-full object-cover" />
            </div>
          </section>

          <section className="py-16 bg-muted -mx-4 px-4 md:mx-0 md:rounded-lg">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-center">
                Secteurs couverts
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
                Remplacement de cylindre
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="relative h-80 rounded-lg overflow-hidden shadow-elegant">
                  <OptimizedImage src={installationSerrure} alt="Remplacement cylindre Faches" className="w-full h-full object-cover" />
                </div>

                <div>
                  <p className="text-muted-foreground mb-6">
                    Pose immédiate d'un cylindre adapté lorsque l'accès doit être sécurisé.
                  </p>

                  <div className="bg-card p-6 rounded-lg border shadow-card">
                    <Lock className="h-12 w-12 text-primary mb-4" />
                    <h3 className="font-bold mb-2">Sécurisation rapide</h3>
                    <p className="text-sm text-muted-foreground">
                      Installation immédiate de cylindres adaptés aux besoins de sécurité
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="py-16">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">
                Serrurier à Faches-Thumesnil, aux portes de Lille-Sud
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Accolée à Lille-Sud et à Ronchin, Faches-Thumesnil se distingue par un
                habitat plus dense que ses voisines du sud : résidences et immeubles
                collectifs autour du centre et du quartier de la Mairie côtoient les maisons
                des Cheminots et de Saint-Exupéry, sans oublier une zone commerciale très
                fréquentée le long des grands axes. Cette mixité génère des interventions
                variées : ouverture de portes palières en copropriété, dépannage de serrures
                multipoints en appartement, mais aussi sécurisation de pavillons et de
                locaux commerciaux. Nos serruriers maîtrisent aussi bien les portes blindées
                d'immeuble que les barillets de maisons individuelles. La desserte par
                l'A1 et la proximité de l'aéroport de Lesquin font de cette commune l'une
                des plus rapides à atteindre depuis Lille. Voir notre{" "}
                <Link to="/ouverture-porte" className="text-primary font-medium hover:underline">ouverture de porte</Link>{" "}
                et nos <Link to="/tarifs" className="text-primary font-medium hover:underline">tarifs</Link>.
              </p>
            </div>
          </section>

          <section className="py-16">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">
                Questions fréquentes — Serrurier Faches-Thumesnil
              </h2>
              <FAQ items={faqItems} />
            </div>
          </section>

          <Reviews />

          <InternalLinks currentCity="serrurier-faches-thumesnil" />

          <section id="contact" className="py-16">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold mb-4 text-center">
                Contact
              </h2>
              <p className="text-center text-muted-foreground mb-4">
                Téléphone : <a href={PHONE_HREF} className="text-primary font-bold hover:underline">{PHONE_DISPLAY}</a>
              </p>
              <p className="text-center text-muted-foreground mb-8">
                Besoin d'un dépannage de nuit à Faches-Thumesnil ? Voir notre{" "}
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

export default SerrurierFaches;
