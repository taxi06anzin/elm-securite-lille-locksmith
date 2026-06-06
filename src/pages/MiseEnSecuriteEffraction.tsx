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
import { ShieldAlert, Lock, Hammer, CheckCircle, Phone, Clock, FileText, AlertTriangle } from "lucide-react";

const faqItems = [
  {
    question: "Que faire juste après un cambriolage ?",
    answer:
      "Ne touchez à rien afin de préserver les preuves, prévenez immédiatement la police en composant le 17, photographiez les dégâts et l'état des lieux, puis déposez plainte au commissariat. Appelez ensuite un serrurier agréé pour la mise en sécurité de votre logement : ELM Sécurité intervient à Lille en 20 à 30 minutes, 24h/24, au 06 21 66 08 67.",
  },
  {
    question: "Combien coûte une mise en sécurité après effraction ?",
    answer:
      "La sécurisation est réalisée sur devis gratuit, car chaque effraction est différente (porte forcée, serrure arrachée, encadrement endommagé). À titre indicatif, une ouverture débute à 89€ et un remplacement de serrure dès 149€. Le tarif exact est toujours annoncé avant l'intervention, et la facture conforme est fournie pour votre assurance.",
  },
  {
    question: "Intervenez-vous la nuit après une effraction ?",
    answer:
      "Oui. Un cambriolage ne s'arrête pas aux heures ouvrables : notre serrurier de garde se déplace la nuit, le dimanche et les jours fériés pour condamner et sécuriser votre logement sans attendre. Consultez la page serrurier nuit & dimanche pour le détail des interventions nocturnes.",
  },
  {
    question: "L'assurance prend-elle en charge la mise en sécurité ?",
    answer:
      "Dans la grande majorité des cas, oui. Après le dépôt de plainte, vous disposez d'un délai de 2 jours ouvrés pour déclarer le sinistre à votre assureur. Nous remettons une facture détaillée et conforme aux exigences des assurances habitation. ELM Sécurité est agréé par les principales compagnies.",
  },
  {
    question: "Pouvez-vous remplacer une porte forcée le jour même ?",
    answer:
      "Nous sécurisons votre logement immédiatement (condamnation provisoire, remplacement de serrure, blindage temporaire) puis établissons un devis pour la solution définitive. Concessionnaire officiel Point Fort Fichet, nous pouvons remplacer la serrure le jour même et, selon le modèle, poser une porte blindée Fichet sous court délai.",
  },
];

const MiseEnSecuriteEffraction = () => {
  return (
    <>
      <SeoHead
        title="Mise en sécurité après effraction Lille | ELM SÉCURITÉ"
        description="Cambriolage à Lille ? Mise en sécurité d'urgence après effraction 24h/24 : sécurisation porte, serrure forcée, facture assurance ☎ 06 21 66 08 67"
        canonical="https://serrurier-urgence-lille.fr/mise-en-securite-effraction-lille"
      />
      <JsonLd pageName="Mise en sécurité après effraction Lille" pageUrl="/mise-en-securite-effraction-lille" />
      <ServiceSchema
        serviceName="Mise en sécurité après effraction à Lille"
        description="Sécurisation d'urgence après cambriolage à Lille : porte forcée, serrure arrachée, encadrement endommagé. Intervention 24h/24 en 20-30 min, agréé assurances."
        serviceType="Serrurier d'urgence"
        priceRange="€€"
        areaServed={["Lille", "Roubaix", "Tourcoing", "Villeneuve-d'Ascq", "Marcq-en-Barœul", "La Madeleine"]}
      />

      <div className="min-h-screen bg-background">
        <Breadcrumb
          items={[
            { label: "Dépannage serrurerie", path: "/depannage-serrurerie" },
            { label: "Mise en sécurité effraction", path: "/mise-en-securite-effraction-lille" },
          ]}
        />

        {/* Hero */}
        <section className="relative bg-gradient-to-br from-secondary to-primary text-secondary-foreground py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full text-sm font-semibold mb-4">
                <ShieldAlert className="h-4 w-4" aria-hidden="true" /> Intervention d'urgence après cambriolage
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">
                Mise en sécurité après effraction à Lille
              </h1>
              <p className="text-lg md:text-xl opacity-90 mb-6">
                Vous rentrez chez vous et découvrez une porte forcée, une serrure arrachée, un logement cambriolé ?
                Ne restez pas seul face à cette situation. ELM Sécurité intervient <strong>24h/24</strong> à Lille
                pour sécuriser immédiatement votre domicile, avec un délai moyen de <strong>20 à 30 minutes</strong> et
                un devis annoncé avant toute intervention.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <CallButton size="lg" className="text-lg" />
                <CtaButton variant="accent" size="lg" href="#contact">
                  Demander une intervention
                </CtaButton>
              </div>
              <ul className="flex flex-wrap gap-x-6 gap-y-2 mt-6 text-sm">
                <li className="flex items-center gap-2"><Clock className="h-4 w-4" aria-hidden="true" /> Urgence 24h/24</li>
                <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4" aria-hidden="true" /> Devis gratuit</li>
                <li className="flex items-center gap-2"><FileText className="h-4 w-4" aria-hidden="true" /> Agréé assurances</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Intervention d'urgence après cambriolage */}
        <section className="container mx-auto px-4 py-14">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Intervention d'urgence après cambriolage</h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Après une effraction, votre logement n'est plus protégé : la moindre ouverture forcée le laisse
              vulnérable à une nouvelle intrusion. Notre priorité est de <strong>rétablir la sécurité</strong> sans
              attendre. ELM Sécurité, concessionnaire officiel{" "}
              <Link to="/fichet-lille" className="text-primary font-semibold hover:underline">Point Fort Fichet</Link>,
              prend en charge tous les dégâts liés au cambriolage et condamne ou répare chaque point d'entrée forcé.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { icon: Hammer, title: "Porte forcée ou enfoncée", text: "Vantail forcé, panneau enfoncé, charnières faussées : nous remettons la porte en état de fermeture sécurisée ou la condamnons provisoirement." },
                { icon: Lock, title: "Serrure arrachée ou cassée", text: "Cylindre arraché, barillet percé, serrure fracturée : remplacement immédiat par une serrure neuve, A2P si nécessaire." },
                { icon: ShieldAlert, title: "Gâche & encadrement endommagés", text: "Gâche descellée, montant ou encadrement abîmé par le pied-de-biche : renforcement et reprise pour une fermeture fiable." },
                { icon: AlertTriangle, title: "Volet & menuiserie forcés", text: "Volet roulant forcé, fenêtre ou menuiserie fracturée : mise en sécurité du point d'accès en attendant la réparation définitive." },
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

        {/* Ce que comprend la mise en sécurité */}
        <section className="bg-muted/40 py-14">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-4">Ce que comprend la mise en sécurité</h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Sur place, le serrurier évalue l'ampleur des dégâts et applique la solution la plus adaptée pour que
                votre logement soit de nouveau verrouillé et protégé dès la fin de l'intervention. Voici les
                prestations couvertes par une mise en sécurité après effraction.
              </p>
              <ul className="space-y-3">
                {[
                  ["Blocage et condamnation provisoire", "Quand la porte ne peut être réparée immédiatement, nous la condamnons de manière sûre pour fermer l'accès sans tarder."],
                  ["Remplacement de la serrure forcée", "Toute serrure arrachée, percée ou fracturée est remplacée par un mécanisme neuf et fonctionnel."],
                  ["Pose d'un cylindre neuf", "Installation d'un cylindre de sécurité neuf : vos anciennes clés ne fonctionnent plus, l'accès est de nouveau maîtrisé."],
                  ["Blindage temporaire", "Renforcement provisoire de la porte ou du point d'entrée pour dissuader une nouvelle tentative d'intrusion."],
                  ["Devis pour la solution définitive", "Établissement d'un devis gratuit pour la réparation ou le remplacement durable (porte blindée, serrure A2P)."],
                ].map(([title, text]) => (
                  <li key={title} className="flex items-start gap-3 bg-background border rounded-lg p-5 shadow-card">
                    <CheckCircle className="h-6 w-6 text-accent shrink-0 mt-0.5" aria-hidden="true" />
                    <div>
                      <h3 className="font-bold mb-1">{title}</h3>
                      <p className="text-sm text-muted-foreground">{text}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Les bons réflexes juste après une effraction */}
        <section className="container mx-auto px-4 py-14">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Les bons réflexes juste après une effraction</h2>
            <ol className="space-y-4">
              {[
                ["Ne touchez à rien", "Préservez les preuves : ne déplacez aucun objet et n'entrez pas si vous suspectez la présence des cambrioleurs. Les indices laissés sur place sont précieux pour l'enquête."],
                ["Prévenez la police (17)", "Composez immédiatement le 17. Les forces de l'ordre vous indiqueront la marche à suivre et pourront se déplacer pour constater l'effraction."],
                ["Photographiez les dégâts", "Prenez des photos de la porte forcée, de la serrure arrachée et de chaque dommage. Ces clichés appuieront votre déclaration d'assurance."],
                ["Déposez plainte", "Rendez-vous au commissariat pour déposer plainte. Le récépissé est indispensable pour être indemnisé par votre assurance habitation."],
                ["Appelez un serrurier agréé", `Contactez un serrurier agréé assurances pour la mise en sécurité. Au ${PHONE_DISPLAY}, ELM Sécurité intervient 24h/24 avec devis avant toute intervention.`],
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

        {/* Déclaration et remboursement assurance */}
        <section className="bg-muted/40 py-14">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-4 flex items-center gap-2">
                <FileText className="h-7 w-7 text-primary" aria-hidden="true" /> Déclaration et remboursement assurance
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Après une effraction, la rapidité de votre déclaration conditionne votre indemnisation. Vous disposez
                d'un délai de <strong>2 jours ouvrés</strong> pour déclarer le cambriolage à votre assureur, accompagné
                du <strong>dépôt de plainte</strong>. La plupart des contrats d'assurance habitation couvrent les frais
                de serrurerie liés à la mise en sécurité, à condition de fournir une facture conforme.
              </p>
              <div className="bg-background border rounded-lg p-6 shadow-card">
                <ul className="space-y-2 text-muted-foreground">
                  {[
                    "Déclaration sous 2 jours ouvrés après la découverte de l'effraction",
                    "Dépôt de plainte obligatoire pour l'indemnisation",
                    "Facture détaillée et conforme fournie systématiquement",
                    "ELM Sécurité agréé par les principales compagnies d'assurance",
                  ].map((t) => (
                    <li key={t} className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-accent shrink-0 mt-0.5" aria-hidden="true" />{t}
                    </li>
                  ))}
                </ul>
                <p className="text-sm text-muted-foreground mt-4">
                  En savoir plus sur la prise en charge :{" "}
                  <Link to="/serrurier-agree-assurance-lille" className="text-primary font-semibold hover:underline">serrurier agréé assurance à Lille</Link>.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Solution définitive : renforcer la sécurité */}
        <section className="container mx-auto px-4 py-14">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Solution définitive : renforcer la sécurité</h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Une fois l'urgence passée, il est essentiel de ne pas en rester à une réparation provisoire. Un
              cambriolage révèle souvent la faiblesse d'une porte ou d'une serrure standard. Pour éviter une
              récidive, ELM Sécurité, <strong>concessionnaire officiel Fichet</strong>, vous accompagne vers une
              protection durable et certifiée.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-card border rounded-lg p-6 shadow-card">
                <Lock className="h-8 w-8 text-primary mb-3" aria-hidden="true" />
                <h3 className="font-bold text-lg mb-2">Porte blindée Fichet</h3>
                <p className="text-sm text-muted-foreground">
                  La solution la plus dissuasive : une{" "}
                  <Link to="/porte-blindee" className="text-primary font-semibold hover:underline">porte blindée Fichet</Link>{" "}
                  résiste aux tentatives d'effraction et restaure durablement votre tranquillité. Pose par un
                  installateur agréé du réseau Point Fort Fichet.
                </p>
              </div>
              <div className="bg-card border rounded-lg p-6 shadow-card">
                <ShieldAlert className="h-8 w-8 text-primary mb-3" aria-hidden="true" />
                <h3 className="font-bold text-lg mb-2">Serrure certifiée A2P</h3>
                <p className="text-sm text-muted-foreground">
                  Le remplacement par une serrure de sécurité <strong>certifiée A2P</strong> (résistance à l'effraction
                  testée et labellisée) augmente fortement le niveau de protection de votre logement, souvent exigé
                  par les assureurs après un sinistre.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Tarifs / Prix */}
        <section className="bg-muted/40 py-14">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <ShieldAlert className="h-10 w-10 text-primary mx-auto mb-3" aria-hidden="true" />
              <h2 className="text-3xl font-bold mb-3">Combien coûte une mise en sécurité ?</h2>
              <p className="text-muted-foreground mb-6">
                La <strong>sécurisation est réalisée sur devis gratuit</strong>, car chaque effraction est différente.
                À titre indicatif, une ouverture débute <strong>dès 89€</strong> et un remplacement de serrure{" "}
                <strong>dès 149€</strong>, déplacement inclus. L'intervention est possible la nuit comme le jour :
                découvrez le{" "}
                <Link to="/serrurier-dimanche-nuit-lille" className="text-primary font-semibold hover:underline">serrurier nuit & dimanche</Link>.
                Le prix exact est toujours annoncé avant l'intervention.
              </p>
              <a href={PHONE_HREF} className="inline-flex items-center gap-2 bg-urgent text-urgent-foreground font-bold text-lg px-6 min-h-14 rounded-lg hover:bg-urgent/90 transition-colors">
                <Phone className="h-5 w-5" aria-hidden="true" /> {PHONE_DISPLAY}
              </a>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="container mx-auto px-4 py-14">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Effraction — questions fréquentes</h2>
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
                ["Porte blindée Fichet", "/porte-blindee"],
                ["Agréé assurance", "/serrurier-agree-assurance-lille"],
                ["Nuit & dimanche", "/serrurier-dimanche-nuit-lille"],
                ["Nous contacter", "/contact"],
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
              <h2 className="text-3xl font-bold mb-3">Logement cambriolé ? Sécurisons-le maintenant</h2>
              <p className="text-muted-foreground mb-6">
                Appelez directement, c'est le plus rapide. Notre serrurier de garde intervient en 20-30 minutes à
                Lille pour mettre votre domicile en sécurité.
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

export default MiseEnSecuriteEffraction;
