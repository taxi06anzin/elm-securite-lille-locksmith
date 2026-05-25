import TrustBadges from "@/components/TrustBadges";
import ContactForm from "@/components/ContactForm";
import JsonLd from "@/components/JsonLd";
import ServiceSchema from "@/components/ServiceSchema";
import FAQ from "@/components/FAQ";
import InternalLinks from "@/components/InternalLinks";
import Breadcrumb from "@/components/Breadcrumb";
import Reviews from "@/components/Reviews";
import SeoHead from "@/components/SeoHead";
import { CallButton } from "@/components/ui/button-variants";
import { Clock, MapPin, Shield, CheckCircle, Award } from "lucide-react";

const SerrurierLilleCentre = () => {
  const quartiersCouverts = [
    { nom: "Grand Place / Place du Général de Gaulle", distance: "12 min" },
    { nom: "Rue Faidherbe", distance: "10 min" },
    { nom: "Place Rihour", distance: "10 min" },
    { nom: "Rue de Béthune", distance: "11 min" },
    { nom: "Gare Lille-Flandres / Lille-Europe", distance: "10 min" },
    { nom: "République / Beaux-Arts", distance: "7 min" },
    { nom: "Vieux-Lille", distance: "15 min" },
    { nom: "Saint-Maurice-Pellevoisin", distance: "12 min" },
  ];

  const interventionsTypes = [
    {
      titre: "Ouverture porte claquée",
      prix: "89 €",
      desc: "Méthode non destructive (radio, crochetage). 95% des portes du centre s'ouvrent sans aucune dégradation.",
    },
    {
      titre: "Changement de cylindre A2P",
      prix: "Dès 149 €",
      desc: "Gamme complète Point Fort Fichet (Vertige, Forge, Primlock) + A2P★ à A2P★★★. Pose en 15 min.",
    },
    {
      titre: "Pose porte blindée Fichet",
      prix: "Sur devis",
      desc: "Gamme officielle Fichet (Forstyl, Spheris, Foxeo). Garantie constructeur 10 ans + pose 2 ans.",
    },
    {
      titre: "Sécurisation après effraction",
      prix: "Urgence 24/7",
      desc: "Fermeture provisoire immédiate, remise en sécurité sous 24-48h, facture conforme assurance.",
    },
  ];

  const faqCentre = [
    {
      question: "Combien de temps pour qu'un serrurier arrive à Lille-Centre ?",
      answer:
        "Notre boutique est située 143 Rue du Molinel, à 5 minutes en voiture du Grand Place. Notre délai d'intervention en centre-ville est de 15 à 25 minutes en moyenne, 7j/7 et 24h/24, y compris dimanches et jours fériés.",
    },
    {
      question: "Quel est le prix d'une ouverture de porte claquée dans le centre de Lille ?",
      answer:
        "Une ouverture de porte claquée non verrouillée à Lille-Centre démarre à 89€ TTC en journée (8h-19h, lundi-samedi). Une majoration de 30% s'applique le soir et la nuit (20h-8h), 50% les dimanches et jours fériés. Le tarif est toujours annoncé avant intervention.",
    },
    {
      question: "Êtes-vous concessionnaire officiel Point Fort Fichet à Lille ?",
      answer:
        "Oui, ELM Sécurité est concessionnaire officiel Point Fort Fichet à Lille. Nous sommes le seul Point Fort Fichet de Lille à intervenir en urgence 24h/24 et 7j/7. Cela garantit la pose certifiée des serrures Fichet (Vertige, Forge, Primlock) et le respect de la garantie constructeur 10 ans.",
    },
    {
      question: "Intervenez-vous dans les immeubles haussmanniens du centre de Lille ?",
      answer:
        "Oui, nous intervenons sur tous types de portes du centre : portes anciennes en bois massif des immeubles haussmanniens (rue Esquermoise, rue Royale, Vieux-Lille), portes palières modernes des résidences récentes (Euralille, Saint-Maurice). Nos techniciens sont formés à l'ouverture sans casse des serrures à pompe anciennes comme des cylindres modernes.",
    },
    {
      question: "Acceptez-vous le paiement par carte bancaire sur place ?",
      answer:
        "Oui, tous nos techniciens disposent d'un terminal de paiement bancaire mobile. Vous pouvez régler en CB, espèces ou virement après intervention. Une facture conforme assurances vous est systématiquement remise.",
    },
    {
      question: "Êtes-vous agréés par les assurances pour les sinistres serrurerie à Lille ?",
      answer:
        "Oui, ELM Sécurité est certifié par les compagnies d'assurance pour les interventions de dépannage et sécurisation après effraction. Notre facture détaillée et conforme permet le remboursement direct par votre assurance habitation.",
    },
  ];

  return (
    <>
      <SeoHead
        title="Serrurier Lille-Centre 24/7 — Intervention 15 min | Point Fort Fichet"
        description="Serrurier à Lille-Centre disponible 24h/24 et 7j/7. Concessionnaire officiel Point Fort Fichet. Intervention en 15 min : Grand Place, Faidherbe, Rihour, Gare. ☎ 06 21 66 08 67"
        canonical="https://serrurier-urgence-lille.fr/serrurier-lille-centre"
      />
      <JsonLd pageName="Serrurier Lille-Centre" pageUrl="/serrurier-lille-centre" />
      <ServiceSchema
        serviceName="Serrurier Lille-Centre — Dépannage 24/7"
        description="Intervention serrurier 24h/24 et 7j/7 dans tous les quartiers du centre de Lille : Grand Place, Rihour, Béthune, Faidherbe, Gare Lille-Flandres, République-Beaux-Arts. Délai moyen : 15 à 25 minutes."
        serviceType="Serrurerie d'urgence"
        areaServed={["Lille-Centre", "Grand Place Lille", "Vieux-Lille", "Lille Faidherbe", "Lille Rihour"]}
      />

      <div className="min-h-screen bg-background">
        <Breadcrumb
          items={[
            { label: "Zones d'intervention", path: "/villes-couvertes" },
            { label: "Lille-Centre", path: "/serrurier-lille-centre" },
          ]}
        />

        {/* HERO */}
        <section className="relative py-20 bg-gradient-to-br from-secondary to-primary">
          <div className="container mx-auto px-4 text-secondary-foreground">
            <div className="max-w-3xl">
              <div className="inline-block bg-white/15 px-4 py-1.5 rounded-full text-sm font-medium mb-4">
                🔐 Concessionnaire officiel Point Fort Fichet
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Serrurier Lille-Centre — Intervention en 15 minutes
              </h1>
              <p className="text-xl mb-8 opacity-95">
                Bloqué devant votre porte à Lille-Centre ? ELM Sécurité,
                <strong> seul Point Fort Fichet de Lille disponible 24h/24 et 7j/7</strong>,
                intervient en <strong>15 à 25 minutes</strong> dans tous les quartiers
                du centre : Grand Place, Faidherbe, Rihour, Béthune, Gare
                Lille-Flandres, République.
              </p>
              <CallButton size="lg" />

              <ul className="mt-8 flex flex-wrap gap-4 text-sm">
                <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4" /> Concessionnaire Point Fort Fichet</li>
                <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4" /> Agréé assurances</li>
                <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4" /> Devis avant intervention</li>
                <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4" /> Garantie 2 ans</li>
              </ul>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4">
          <div className="-mt-8">
            <TrustBadges />
          </div>

          {/* ANCRAGE LOCAL (E-E-A-T Experience) */}
          <section className="py-16">
            <h2 className="text-3xl font-bold mb-6">
              Notre boutique à 5 minutes du Grand Place
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div className="space-y-4 text-muted-foreground">
                <p>
                  ELM Sécurité a installé sa boutique au{" "}
                  <strong>143 Rue du Molinel</strong>, à la lisière du quartier
                  Moulins et du centre-ville, à équidistance entre la{" "}
                  <strong>Gare Lille-Flandres</strong> (10 min à pied), la{" "}
                  <strong>Place du Théâtre</strong> (8 min) et le{" "}
                  <strong>Grand Place</strong> (12 min).
                </p>
                <p>
                  Cette implantation stratégique nous permet d'intervenir en
                  moins de 15 minutes dans la majorité des rues du centre.
                </p>
                <p>
                  Notre équipe connaît parfaitement la typologie des serrures
                  du centre de Lille : des <strong>portes anciennes en bois
                  massif</strong> des immeubles haussmanniens de la rue
                  Esquermoise et de la rue Royale, aux <strong>portes
                  palières modernes</strong> des résidences récentes
                  d'Euralille ou de Saint-Maurice-Pellevoisin.
                </p>
              </div>

              <div className="bg-muted/40 rounded-lg p-6 border">
                <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  Quartiers du centre — délai moyen
                </h3>
                <ul className="space-y-2">
                  {quartiersCouverts.map((q) => (
                    <li key={q.nom} className="flex items-start justify-between gap-3 text-sm border-b pb-2 last:border-0">
                      <span>{q.nom}</span>
                      <span className="font-semibold text-primary whitespace-nowrap">{q.distance}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* SERVICES */}
          <section className="py-16 bg-muted -mx-4 px-4 md:mx-0 md:rounded-lg">
            <div className="container mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">
                Nos interventions à Lille-Centre
              </h2>
              <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                {interventionsTypes.map((s) => (
                  <div key={s.titre} className="bg-background rounded-lg p-6 border-l-4 border-primary shadow-sm">
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <h3 className="font-bold text-lg">{s.titre}</h3>
                      <span className="text-primary font-bold whitespace-nowrap">{s.prix}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{s.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* USPs vs concurrents */}
          <section className="py-16">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Pourquoi choisir ELM Sécurité à Lille-Centre ?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-6 rounded-lg border bg-background">
                <Award className="h-10 w-10 text-primary mx-auto mb-3" />
                <h3 className="font-bold mb-2">SEUL Point Fort Fichet 24/7 à Lille</h3>
                <p className="text-sm text-muted-foreground">
                  Label premium + disponibilité 24h/24 — combo que les concurrents indépendants ne peuvent pas offrir.
                </p>
              </div>
              <div className="text-center p-6 rounded-lg border bg-background">
                <Shield className="h-10 w-10 text-primary mx-auto mb-3" />
                <h3 className="font-bold mb-2">Certifiés par les assurances</h3>
                <p className="text-sm text-muted-foreground">
                  Facture détaillée conforme, remboursement direct dans la plupart des cas.
                </p>
              </div>
              <div className="text-center p-6 rounded-lg border bg-background">
                <Clock className="h-10 w-10 text-primary mx-auto mb-3" />
                <h3 className="font-bold mb-2">15 min de moyenne sur Lille-Centre</h3>
                <p className="text-sm text-muted-foreground">
                  Boutique 143 Rue du Molinel = avantage géographique vs concurrents en périphérie.
                </p>
              </div>
              <div className="text-center p-6 rounded-lg border bg-background">
                <CheckCircle className="h-10 w-10 text-primary mx-auto mb-3" />
                <h3 className="font-bold mb-2">Garantie 2 ans pièces & MO</h3>
                <p className="text-sm text-muted-foreground">
                  + Garantie constructeur Fichet 10 ans sur les portes blindées posées.
                </p>
              </div>
            </div>
          </section>

          {/* Reviews */}
          <Reviews />

          {/* FAQ */}
          <section className="py-16">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Questions fréquentes — Serrurier Lille-Centre
            </h2>
            <div className="max-w-3xl mx-auto">
              <FAQ items={faqCentre} />
            </div>
          </section>

          {/* CTA Final */}
          <section id="contact" className="py-16">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">
                Besoin d'un serrurier à Lille-Centre maintenant ?
              </h2>
              <p className="text-muted-foreground mb-8">
                Notre standard est ouvert 24h/24, 7j/7. Un technicien décroche en
                moins de 60 secondes et vous annonce le tarif avant tout déplacement.
              </p>
              <CallButton size="lg" />
              <p className="mt-6 text-sm text-muted-foreground flex items-center justify-center gap-2">
                <MapPin className="h-4 w-4" />
                POINT FORT FICHET - ELM SÉCURITÉ — 143 Rue du Molinel, 59800 Lille
              </p>
            </div>

            <div className="mt-12 max-w-2xl mx-auto">
              <ContactForm />
            </div>
          </section>
        </div>

        <InternalLinks currentCity="serrurier-lille-centre" />
      </div>
    </>
  );
};

export default SerrurierLilleCentre;
