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
import { CheckCircle, Lock, Shield, Clock } from "lucide-react";
import ouverturePorte from "@/assets/ouverture-porte-1.png";
import changementCylindre from "@/assets/changement-cylindre.jpg";

const SerrurierMons = () => {
  const faqItems = [
    {
      question: "Quel est le délai d'intervention à Mons-en-Barœul ?",
      answer: "À Mons-en-Barœul, le délai habituel est de 20 à 30 minutes. La commune étant directement reliée à Lille et à Villeneuve-d'Ascq par le métro et les grands axes, l'accès au Nouveau Mons comme au Vieux Mons reste fluide. Un appel au " + PHONE_DISPLAY + " déclenche le déplacement immédiat.",
    },
    {
      question: "Combien coûte une ouverture de porte à Mons-en-Barœul ?",
      answer: "L'ouverture de porte à Mons-en-Barœul commence à 89€ en journée, déplacement et diagnostic compris. Que ce soit pour un appartement d'une résidence rénovée du Nouveau Mons ou une maison du Vieux Mons, le tarif est annoncé clairement avant d'intervenir.",
    },
    {
      question: "Intervenez-vous la nuit et le dimanche à Mons-en-Barœul ?",
      answer: "Oui, le service fonctionne 24h/24 et 7j/7 à Mons-en-Barœul, nuit, dimanche et jours fériés inclus. Une porte d'appartement claquée un soir près du Fort de Mons ou une serrure bloquée le dimanche dans le Vieux Mons sont traitées en urgence.",
    },
    {
      question: "Quels secteurs de Mons-en-Barœul sont desservis ?",
      answer: "L'ensemble de Mons-en-Barœul est couvert : le Nouveau Mons et ses résidences rénovées, le Vieux Mons et ses maisons de ville, ainsi que les abords du Fort et la limite vers Lille et Villeneuve-d'Ascq. Chaque type de porte y est traité avec la technique adaptée.",
    },
  ];
  const typesPortes = [
    "Portes d'appartements",
    "Maisons du Nouveau Mons",
    "Résidences récentes du Vieux Mons"
  ];

  const situations = [
    "Blocage complet",
    "Cylindre bloqué",
    "Perte de clés",
    "Clé cassée",
    "Problème de verrouillage"
  ];

  return (
    <>
      <Helmet>
        <title>Serrurier Mons-en-Barœul – Intervention technique 7j/7 | ELM SÉCURITÉ</title>
        <meta 
          name="description" 
          content="Serrurier à Mons-en-Barœul 24/7. Intervention Nouveau Mons, Vieux Mons. Ouverture porte, changement cylindre, dépannage urgent ☎ 06 21 66 08 67" 
        />
        <link rel="canonical" href="https://serrurier-urgence-lille.fr/serrurier-mons-en-baroeul" />
      </Helmet>
      <JsonLd />
      
      <div className="min-h-screen bg-background">
        
        <section className="relative py-20 bg-gradient-to-br from-secondary to-primary">
          <div className="container mx-auto px-4 text-secondary-foreground">
            <div className="max-w-3xl">
              <h1 className="text-5xl font-bold mb-6">
                Serrurier Mons-en-Barœul – Intervention technique 7j/7
              </h1>
              <p className="text-xl mb-8 opacity-90">
                Population dense, nombreux immeubles et maisons mitoyennes : Mons-en-Barœul est une zone 
                où la demande de dépannage est élevée. Le service couvre toutes les situations liées aux portes et cylindres.
              </p>
              <div className="inline-flex items-center gap-2 bg-background/15 border border-secondary-foreground/20 rounded-lg px-4 py-2 mb-8">
                <Clock className="h-5 w-5" />
                <span className="font-semibold">Ouverture de porte dès 89€ · intervention en 20-30 min à Mons-en-Barœul</span>
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
                Mons-en-Barœul, une commune rénovée aux portes de Lille
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Coincée entre Lille et Villeneuve-d'Ascq, Mons-en-Barœul a profondément changé de visage au fil
                des programmes de rénovation urbaine. Le Nouveau Mons aligne aujourd'hui des résidences
                requalifiées et des immeubles réhabilités où les portes palières modernes sont presque toutes
                équipées de serrures multipoints à crémone, plus résistantes mais aussi plus complexes à
                débloquer lorsqu'un point de verrouillage se grippe.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Le Vieux Mons conserve à l'inverse ses maisons de ville mitoyennes et ses portes plus
                anciennes, parfois équipées de serrures encastrées d'origine. Cette mixité, doublée d'une forte
                densité de population et de la proximité immédiate du métro, explique le volume soutenu de
                dépannages : clés oubliées en partant travailler, portes claquées dans les cages d'escalier,
                cylindres usés par un usage intensif. Adapter la méthode d'ouverture à chaque génération de
                serrure permet d'intervenir vite sans endommager une menuiserie récente comme ancienne.
              </p>
            </div>
          </section>

          <section className="py-16">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Ouverture de porte à Mons-en-Barœul
            </h2>
            
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Méthodes ajustées à chaque modèle :
            </p>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
              <div className="relative h-96 rounded-lg overflow-hidden shadow-elegant">
                <OptimizedImage src={ouverturePorte} alt="Ouverture porte Mons-en-Barœul" className="w-full h-full object-cover" />
              </div>

              <div className="space-y-6">
                {typesPortes.map((type, index) => (
                  <div key={index} className="bg-card p-4 rounded-lg border shadow-card">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="font-medium">{type}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="py-16 bg-muted -mx-4 px-4 md:mx-0 md:rounded-lg">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">
                Situations traitées
              </h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {situations.map((situation, index) => (
                  <div key={index} className="bg-background border rounded-lg p-4 shadow-card">
                    <div className="flex items-start gap-3">
                      <Shield className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm font-medium">{situation}</span>
                    </div>
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
                    Pose immédiate d'un modèle adapté si nécessaire.
                  </p>

                  <div className="bg-card p-6 rounded-lg border shadow-card">
                    <Lock className="h-12 w-12 text-primary mb-4" />
                    <h3 className="font-bold mb-2">Installation rapide</h3>
                    <p className="text-sm text-muted-foreground">
                      Cylindres adaptés aux immeubles et maisons mitoyennes de Mons-en-Barœul
                    </p>
                  </div>
                </div>

                <div className="relative h-80 rounded-lg overflow-hidden shadow-elegant">
                  <OptimizedImage src={changementCylindre} alt="Changement cylindre Mons-en-Barœul" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </section>

          <section className="py-16">
            <div className="max-w-3xl mx-auto">
              <p className="text-muted-foreground leading-relaxed text-center">
                À consulter également : notre service d'{" "}
                <Link to="/ouverture-porte" className="text-primary font-semibold hover:underline">ouverture de porte</Link>,
                le{" "}
                <Link to="/serrurier-dimanche-nuit-lille" className="text-primary font-semibold hover:underline">serrurier de garde le dimanche et la nuit</Link>{" "}
                et nos{" "}
                <Link to="/tarifs" className="text-primary font-semibold hover:underline">tarifs détaillés</Link>.
              </p>
            </div>
          </section>

          <section className="py-16">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">
                Questions fréquentes à Mons-en-Barœul
              </h2>
              <FAQ items={faqItems} />
            </div>
          </section>

          <Reviews />

          <InternalLinks currentCity="serrurier-mons-en-baroeul" />

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

export default SerrurierMons;
