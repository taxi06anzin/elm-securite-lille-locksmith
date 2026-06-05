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
import ouverturePorte from "@/assets/ouverture-porte-1.png";
import changementSerrure from "@/assets/changement-serrure.jpg";

const SerrurierLoos = () => {
  const faqItems = [
    {
      question: "En combien de temps un serrurier arrive-t-il à Loos ?",
      answer: "À Loos, le délai d'intervention est généralement de 20 à 30 minutes. Au sud immédiat de Lille, la commune bénéficie d'un accès rapide, qu'il s'agisse du Centre-ville, du quartier des Oliveaux ou du pôle hospitalier Eurasanté. Dès l'appel au " + PHONE_DISPLAY + ", un technicien est envoyé sur place.",
    },
    {
      question: "Quel est le tarif d'une ouverture de porte à Loos ?",
      answer: "L'ouverture de porte à Loos démarre à 89€ en journée, déplacement compris. Sur les maisons anciennes du Centre comme dans les logements proches du CHU de Lille et d'Eurasanté, le prix est annoncé avant l'intervention, et le règlement se fait une fois la porte ouverte.",
    },
    {
      question: "Intervenez-vous la nuit et le dimanche à Loos ?",
      answer: "Oui, le dépannage à Loos est assuré 24h/24 et 7j/7, nuit, dimanche et jours fériés inclus. Avec un secteur hospitalier où l'on vit à toute heure, une clé perdue la nuit aux abords du CHR ou une porte claquée le dimanche aux Oliveaux est prise en charge sans attendre.",
    },
    {
      question: "Quels quartiers de Loos sont couverts ?",
      answer: "Toute la commune de Loos est desservie : le Centre-ville et la Mairie, le quartier des Oliveaux, le secteur du CHU de Lille et d'Eurasanté, ainsi que les abords vers Loos-lès-Lille. L'habitat y est mixte, des maisons anciennes aux résidences plus récentes, et chaque serrure est traitée en conséquence.",
    },
  ];
  const interventions = [
    "Porte bloquée",
    "Clé cassée",
    "Barillet défaillant",
    "Porte claquée",
    "Perte de clés"
  ];

  const zones = [
    "Centre-ville", "CHU / Eurasanté", "Les Oliveaux", "Quartier de la Mairie", "Secteur Loos-lès-Lille"
  ];

  return (
    <>
      <Helmet>
        <title>Serrurier Loos – Intervention rapide 7j/7 | ELM SÉCURITÉ</title>
        <meta 
          name="description" 
          content="Serrurier à Loos 24/7. Intervention Centre-ville, CHU Eurasanté, Oliveaux. Ouverture porte, changement cylindre ☎ 06 21 66 08 67" 
        />
        <link rel="canonical" href="https://serrurier-urgence-lille.fr/serrurier-loos/" />
      </Helmet>
      <JsonLd />
      
      <div className="min-h-screen bg-background">
        
        <section className="relative py-20 bg-gradient-to-br from-secondary to-primary">
          <div className="container mx-auto px-4 text-secondary-foreground">
            <div className="max-w-3xl">
              <h1 className="text-5xl font-bold mb-6">
                Serrurier Loos – Intervention rapide 7j/7
              </h1>
              <p className="text-xl mb-8 opacity-90">
                Loos concentre un habitat dense autour du centre, avec des interventions fréquentes 
                en raison des immeubles, maisons anciennes et rues étroites du secteur.
                Le service couvre toutes les situations urgentes.
              </p>
              <div className="inline-flex items-center gap-2 bg-background/15 border border-secondary-foreground/20 rounded-lg px-4 py-2 mb-8">
                <Clock className="h-5 w-5" />
                <span className="font-semibold">Ouverture de porte dès 89€ · intervention en 20-30 min à Loos</span>
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
                Loos, ville hospitalière au sud de Lille
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Directement accolée à Lille par le sud, Loos est marquée par la présence du vaste pôle
                hospitalier et universitaire du CHR de Lille et du parc d'activités Eurasanté. Cette
                particularité façonne le rythme de la commune : entre les soignants en horaires décalés, les
                familles de patients et les chercheurs, le besoin d'un dépannage à toute heure y est
                particulièrement fréquent, jusqu'au cœur de la nuit.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                L'habitat de Loos est résolument mixte. Autour du Centre-ville et de la Mairie subsistent des
                maisons de ville anciennes en brique, souvent dotées de serrures encastrées d'origine, tandis
                que le quartier des Oliveaux et les programmes plus récents alignent des appartements équipés
                de serrures multipoints modernes. À cela s'ajoutent des rues étroites et un stationnement
                tendu près du CHU, qui imposent d'arriver bien préparé. Adapter la technique d'ouverture à
                chaque type de porte garantit une intervention propre et rapide partout à Loos.
              </p>
            </div>
          </section>

          <section className="py-16">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Ouverture de porte Loos
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
              <div>
                <p className="text-muted-foreground mb-6">
                  Interventions réalisées sur :
                </p>
                <div className="space-y-3">
                  {interventions.map((intervention, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>{intervention}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative h-80 rounded-lg overflow-hidden shadow-elegant">
                <OptimizedImage src={ouverturePorte} alt="Ouverture porte Loos" className="w-full h-full object-cover" />
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
                <div className="relative h-80 rounded-lg overflow-hidden shadow-elegant">
                  <OptimizedImage src={changementSerrure} alt="Changement cylindre Loos" className="w-full h-full object-cover" />
                </div>

                <div>
                  <p className="text-muted-foreground mb-6">
                    Pose adaptée selon le niveau de sécurité souhaité.
                  </p>

                  <div className="bg-muted border-l-4 border-primary p-4 rounded-lg">
                    <h3 className="font-bold mb-2">Installation professionnelle</h3>
                    <p className="text-sm text-muted-foreground">
                      Cylindres adaptés aux immeubles et maisons anciennes du secteur de Loos
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="py-16">
            <div className="max-w-3xl mx-auto">
              <p className="text-muted-foreground leading-relaxed text-center">
                Pour préparer votre demande : notre service d'{" "}
                <Link to="/ouverture-porte" className="text-primary font-semibold hover:underline">ouverture de porte</Link>,
                le{" "}
                <Link to="/serrurier-dimanche-nuit-lille" className="text-primary font-semibold hover:underline">dépannage le dimanche et la nuit</Link>{" "}
                et nos{" "}
                <Link to="/tarifs" className="text-primary font-semibold hover:underline">tarifs</Link>{" "}
                sont consultables en détail.
              </p>
            </div>
          </section>

          <section className="py-16">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">
                Questions fréquentes à Loos
              </h2>
              <FAQ items={faqItems} />
            </div>
          </section>

          <Reviews />

          <InternalLinks currentCity="serrurier-loos" />

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

export default SerrurierLoos;
