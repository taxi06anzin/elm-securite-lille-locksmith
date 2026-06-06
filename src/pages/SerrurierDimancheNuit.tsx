import { Link } from "react-router-dom";
import SeoHead from "@/components/SeoHead";
import JsonLd from "@/components/JsonLd";
import ServiceSchema from "@/components/ServiceSchema";
import Breadcrumb from "@/components/Breadcrumb";
import FAQ from "@/components/FAQ";
import Reviews from "@/components/Reviews";
import ContactForm from "@/components/ContactForm";
import { CallButton, CtaButton } from "@/components/ui/button-variants";
import { PHONE_DISPLAY, PHONE_HREF } from "@/config/site";
import { Moon, Clock, Calendar, Phone, ShieldCheck, Euro, MapPin, CheckCircle } from "lucide-react";

const faqItems = [
  {
    question: "Un serrurier intervient-il vraiment la nuit à Lille ?",
    answer:
      "Oui. ELM Sécurité dispose d'un serrurier de garde 24h/24, y compris la nuit, le dimanche et les jours fériés à Lille et dans toute la MEL. Après votre appel au 06 21 66 08 67, l'intervention démarre immédiatement, avec un délai moyen de 20 à 30 minutes sur Lille-Centre.",
  },
  {
    question: "Quel est le tarif d'un serrurier la nuit ou le dimanche ?",
    answer:
      "Une ouverture de porte claquée démarre à 89€ en journée. La nuit (20h-8h), une majoration de 30% s'applique ; le dimanche et les jours fériés, la majoration est de 50%. Le prix exact est annoncé au téléphone et confirmé par un devis avant toute intervention : aucune surprise.",
  },
  {
    question: "Faut-il payer un supplément pour le déplacement de nuit ?",
    answer:
      "Le forfait de déplacement est déjà inclus dans le tarif annoncé. Nous ne facturons jamais de frais cachés : le montant communiqué avant l'intervention est celui qui figure sur la facture, conforme pour votre assurance.",
  },
  {
    question: "Mon assurance rembourse-t-elle une intervention de nuit ?",
    answer:
      "Dans la plupart des cas oui, notamment après une effraction ou un sinistre. Nous fournissons systématiquement une facture détaillée et conforme aux exigences des assurances habitation. ELM Sécurité est agréé par les principales compagnies.",
  },
  {
    question: "Intervenez-vous le dimanche dans toute la métropole lilloise ?",
    answer:
      "Oui, le dimanche comme en semaine, nous couvrons Lille et toutes les communes de la MEL : Roubaix, Tourcoing, Villeneuve-d'Ascq, Marcq-en-Barœul, La Madeleine, Lambersart, Lomme, Hellemmes et l'ensemble de la métropole.",
  },
];

const SerrurierDimancheNuit = () => {
  return (
    <>
      <SeoHead
        title="Serrurier nuit & dimanche à Lille | ELM SÉCURITÉ"
        description="Serrurier disponible la nuit, le dimanche et les jours fériés à Lille. Intervention en 20-30 min, tarif annoncé avant. Devis gratuit ☎ 06 21 66 08 67"
        canonical="https://serrurier-urgence-lille.fr/serrurier-dimanche-nuit-lille"
      />
      <JsonLd pageName="Serrurier Nuit et Dimanche Lille" pageUrl="/serrurier-dimanche-nuit-lille" />
      <ServiceSchema
        serviceName="Serrurier d'urgence nuit et dimanche à Lille"
        description="Dépannage serrurerie 24h/24 et 7j/7 à Lille : nuit, dimanche et jours fériés. Intervention en 20-30 min, tarif transparent annoncé avant."
        serviceType="Serrurier d'urgence"
        priceRange="€€"
        areaServed={["Lille", "Roubaix", "Tourcoing", "Villeneuve-d'Ascq", "Marcq-en-Barœul", "La Madeleine"]}
      />

      <div className="min-h-screen bg-background">
        <Breadcrumb
          items={[
            { label: "Dépannage serrurerie", path: "/depannage-serrurerie" },
            { label: "Serrurier nuit & dimanche", path: "/serrurier-dimanche-nuit-lille" },
          ]}
        />

        {/* Hero */}
        <section className="relative bg-gradient-to-br from-secondary to-primary text-secondary-foreground py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full text-sm font-semibold mb-4">
                <Moon className="h-4 w-4" aria-hidden="true" /> Disponible quand les autres sont fermés
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">
                Serrurier nuit et dimanche à Lille — disponible 24h/24, 7j/7
              </h1>
              <p className="text-lg md:text-xl opacity-90 mb-6">
                Porte claquée à 2h du matin, clé perdue un dimanche soir, serrure bloquée un jour férié ?
                Notre serrurier de garde intervient en <strong>20 à 30 minutes</strong> à Lille et dans toute la MEL,
                avec un tarif annoncé <strong>avant</strong> l'intervention.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <CallButton size="lg" className="text-lg" />
                <CtaButton variant="accent" size="lg" href="#contact">
                  Devis gratuit immédiat
                </CtaButton>
              </div>
              <ul className="flex flex-wrap gap-x-6 gap-y-2 mt-6 text-sm">
                <li className="flex items-center gap-2"><Clock className="h-4 w-4" aria-hidden="true" /> Garde 24h/24</li>
                <li className="flex items-center gap-2"><Euro className="h-4 w-4" aria-hidden="true" /> Dès 89€ (jour)</li>
                <li className="flex items-center gap-2"><ShieldCheck className="h-4 w-4" aria-hidden="true" /> Agréé assurances</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Quand on intervient */}
        <section className="container mx-auto px-4 py-14">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Un serrurier de garde, toutes les nuits et tous les dimanches</h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              La majorité des serruriers de Lille ferment le soir et le week-end. Pourtant, c'est précisément la nuit,
              le dimanche et les jours fériés que surviennent le plus d'urgences de serrurerie. ELM Sécurité,
              concessionnaire officiel <Link to="/fichet-lille" className="text-primary font-semibold hover:underline">Point Fort Fichet</Link>,
              maintient un serrurier de garde en permanence pour ne jamais vous laisser bloqué dehors.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: Moon, title: "La nuit (20h-8h)", text: "Porte claquée en rentrant, clé restée à l'intérieur, serrure forcée : intervention nocturne sans casse dès que possible." },
                { icon: Calendar, title: "Le dimanche", text: "Aucune attente jusqu'au lundi : un serrurier se déplace le dimanche dans toute la métropole lilloise." },
                { icon: Calendar, title: "Jours fériés", text: "1er mai, 14 juillet, fêtes de fin d'année… nous restons joignables et disponibles 365 jours par an." },
              ].map((b) => (
                <div key={b.title} className="bg-card border rounded-lg p-6 shadow-card">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                    <b.icon className="h-6 w-6 text-primary" aria-hidden="true" />
                  </div>
                  <h3 className="font-bold mb-2">{b.title}</h3>
                  <p className="text-sm text-muted-foreground">{b.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tarifs nuit/dimanche */}
        <section className="bg-muted/40 py-14">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-4">Tarifs serrurier nuit et dimanche à Lille</h2>
              <p className="text-muted-foreground mb-6">
                Nos prix sont transparents et annoncés <strong>avant</strong> l'intervention. La majoration appliquée
                en horaires spéciaux est encadrée et toujours communiquée au téléphone.
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm bg-background border rounded-lg overflow-hidden">
                  <thead className="bg-primary text-primary-foreground">
                    <tr>
                      <th className="text-left p-3">Prestation</th>
                      <th className="text-right p-3">Jour</th>
                      <th className="text-right p-3">Nuit (+30%)</th>
                      <th className="text-right p-3">Dimanche / férié (+50%)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["Ouverture porte claquée", "89€", "dès 119€", "dès 139€"],
                      ["Ouverture porte verrouillée", "dès 139€", "dès 179€", "dès 199€"],
                      ["Changement de cylindre", "dès 149€", "dès 190€", "dès 220€"],
                    ].map((r) => (
                      <tr key={r[0]} className="border-t">
                        <td className="p-3 font-medium">{r[0]}</td>
                        <td className="p-3 text-right">{r[1]}</td>
                        <td className="p-3 text-right">{r[2]}</td>
                        <td className="p-3 text-right">{r[3]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                Déplacement inclus · Devis avant intervention · Facture conforme assurance.
                Voir la <Link to="/tarifs" className="text-primary font-semibold hover:underline">grille tarifaire complète</Link>.
              </p>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="container mx-auto px-4 py-14">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Comment se passe une intervention de nuit ?</h2>
            <ol className="space-y-4">
              {[
                ["Vous appelez", `Un appel au ${PHONE_DISPLAY}, de jour comme de nuit. Vous décrivez la situation (porte claquée, clé perdue, effraction).`],
                ["On annonce le prix", "Le tarif est communiqué immédiatement, majoration nuit/dimanche comprise. Aucun engagement, aucun acompte."],
                ["On se déplace", "Le serrurier de garde le plus proche part aussitôt : 20-30 min en moyenne sur Lille-Centre."],
                ["On ouvre sans casse", "Méthode non destructive privilégiée dans 95% des portes claquées. Paiement après intervention."],
              ].map((s, i) => (
                <li key={s[0]} className="flex gap-4 bg-card border rounded-lg p-5 shadow-card">
                  <span className="flex-shrink-0 w-9 h-9 rounded-full bg-urgent text-urgent-foreground font-bold flex items-center justify-center">{i + 1}</span>
                  <div>
                    <h3 className="font-bold mb-1">{s[0]}</h3>
                    <p className="text-sm text-muted-foreground">{s[1]}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Réassurance + zones */}
        <section className="bg-muted/40 py-14">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-bold mb-4">Pourquoi nous appeler la nuit ?</h2>
                <ul className="space-y-2 text-muted-foreground">
                  {[
                    "Concessionnaire officiel Point Fort Fichet de Lille",
                    "Serrurier de garde réel, pas un centre d'appel",
                    "Tarif annoncé avant : zéro arnaque nocturne",
                    "Agréé par les assurances habitation",
                    "Garantie 2 ans pièces et main d'œuvre",
                  ].map((t) => (
                    <li key={t} className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-accent shrink-0 mt-0.5" aria-hidden="true" />{t}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><MapPin className="h-6 w-6 text-primary" aria-hidden="true" /> Zones couvertes la nuit</h2>
                <p className="text-muted-foreground">
                  Lille (Centre, Vieux-Lille, Wazemmes, Fives, Moulins), Roubaix, Tourcoing, Villeneuve-d'Ascq,
                  Marcq-en-Barœul, La Madeleine, Lambersart, Lomme, Hellemmes, Mons-en-Barœul, Wasquehal, Croix
                  et toutes les communes de la MEL. Besoin pour une autre urgence ?
                  Voir le <Link to="/depannage-serrurerie" className="text-primary font-semibold hover:underline">dépannage serrurerie 24/7</Link>.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="container mx-auto px-4 py-14">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Questions fréquentes — serrurier nuit & dimanche</h2>
            <FAQ items={faqItems} />
          </div>
        </section>

        {/* Reviews */}
        <section className="container mx-auto px-4">
          <Reviews />
        </section>

        {/* Maillage interne */}
        <section className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-center">Services liés</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                ["Dépannage 24/7", "/depannage-serrurerie"],
                ["Ouverture de porte", "/ouverture-porte"],
                ["Agréé assurance", "/serrurier-agree-assurance-lille"],
                ["Nos tarifs", "/tarifs"],
              ].map(([label, to]) => (
                <Link key={to} to={to} className="bg-card border rounded-lg p-4 text-center hover:shadow-elegant hover:border-primary transition-all text-sm font-medium">
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="bg-muted/40 py-14">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center mb-8">
              <h2 className="text-3xl font-bold mb-3">Bloqué cette nuit ou ce dimanche ?</h2>
              <p className="text-muted-foreground mb-6">
                Appelez directement, c'est le plus rapide. Notre serrurier de garde vous répond immédiatement.
              </p>
              <a href={PHONE_HREF} className="inline-flex items-center gap-2 bg-urgent text-urgent-foreground font-bold text-lg px-6 min-h-14 rounded-lg hover:bg-urgent/90 transition-colors">
                <Phone className="h-5 w-5" aria-hidden="true" /> {PHONE_DISPLAY}
              </a>
            </div>
            <div className="max-w-2xl mx-auto">
              <ContactForm />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default SerrurierDimancheNuit;
