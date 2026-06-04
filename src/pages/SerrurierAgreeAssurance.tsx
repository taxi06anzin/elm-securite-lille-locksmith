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
import { ShieldCheck, FileText, CheckCircle, Euro, Phone, Clock, FileCheck } from "lucide-react";

const faqItems = [
  {
    question: "Quels serruriers sont agréés par les assurances ?",
    answer:
      "Aucune assurance ne délivre un « agrément officiel » universel à un serrurier. Est considéré comme agréé un professionnel dont les factures détaillées et conformes sont acceptées sans difficulté par les compagnies d'assurance habitation, et qui dispose d'une entreprise déclarée (SIRET), d'une assurance responsabilité civile professionnelle et d'une adresse physique vérifiable. ELM Sécurité, concessionnaire officiel Point Fort Fichet à Lille, répond à tous ces critères et travaille au quotidien avec les principales compagnies après un sinistre.",
  },
  {
    question: "Mon assurance rembourse-t-elle une porte fracturée ?",
    answer:
      "Oui, dans la grande majorité des contrats multirisques habitation, les dégâts consécutifs à une effraction ou une tentative de cambriolage sont pris en charge : porte forcée, serrure arrachée, cylindre détruit, encadrement endommagé. Le remboursement dépend de votre contrat (garantie vol, franchise éventuelle) et nécessite un dépôt de plainte ainsi qu'une facture détaillée. Une porte simplement claquée, sans effraction, n'est en revanche généralement pas couverte.",
  },
  {
    question: "Quel délai pour déclarer le sinistre ?",
    answer:
      "Vous disposez en principe de 5 jours ouvrés pour déclarer un sinistre à votre assureur, mais ce délai est réduit à 2 jours ouvrés en cas de vol ou de cambriolage. Il est donc essentiel de déclarer rapidement, idéalement le jour même ou le lendemain, et de déposer plainte dans la foulée. Conservez précieusement la facture de l'intervention de mise en sécurité.",
  },
  {
    question: "Faut-il un dépôt de plainte ?",
    answer:
      "Oui, en cas d'effraction, de cambriolage ou de vandalisme, le dépôt de plainte au commissariat ou à la gendarmerie est obligatoire pour obtenir un remboursement. C'est ce document, associé à la facture du serrurier et au constat des dégâts, qui déclenche la prise en charge par votre assurance. Sans plainte, l'assureur refuse généralement d'indemniser un sinistre lié à une effraction.",
  },
  {
    question: "ELM Sécurité est-il agréé par mon assurance ?",
    answer:
      "ELM Sécurité travaille avec l'ensemble des grandes compagnies d'assurance habitation et fournit systématiquement une facture conforme reprenant toutes les mentions obligatoires exigées pour le remboursement. Nos clients sont remboursés sans difficulté après effraction. Appelez le " + PHONE_DISPLAY + " : nous vous indiquons précisément les documents à réunir pour votre contrat avant même de nous déplacer.",
  },
];

const SerrurierAgreeAssurance = () => {
  return (
    <>
      <SeoHead
        title="Serrurier agréé assurance à Lille — Facture conforme & remboursement | ELM SÉCURITÉ"
        description="Serrurier agréé assurance à Lille : facture conforme, prise en charge après effraction, accompagnement remboursement. Concessionnaire Point Fort Fichet ☎ 06 21 66 08 67"
        canonical="https://serrurier-urgence-lille.fr/serrurier-agree-assurance-lille"
      />
      <JsonLd pageName="Serrurier agréé assurance Lille" pageUrl="/serrurier-agree-assurance-lille" />
      <ServiceSchema
        serviceName="Serrurier agréé assurance à Lille"
        description="Serrurier agréé par les assurances habitation à Lille : facture détaillée conforme, prise en charge des sinistres après effraction, accompagnement pour le remboursement."
        serviceType="Serrurier agréé assurance"
        priceRange="€€"
        areaServed={["Lille", "Roubaix", "Tourcoing", "Villeneuve-d'Ascq", "Marcq-en-Barœul", "La Madeleine"]}
      />

      <div className="min-h-screen bg-background">
        <Breadcrumb
          items={[
            { label: "Dépannage serrurerie", path: "/depannage-serrurerie" },
            { label: "Serrurier agréé assurance", path: "/serrurier-agree-assurance-lille" },
          ]}
        />

        {/* Hero */}
        <section className="relative bg-gradient-to-br from-secondary to-primary text-secondary-foreground py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full text-sm font-semibold mb-4">
                <ShieldCheck className="h-4 w-4" aria-hidden="true" /> Facture conforme &amp; remboursement
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">
                Serrurier agréé assurance à Lille
              </h1>
              <p className="text-lg md:text-xl opacity-90 mb-6">
                Après une effraction ou un cambriolage, vous avez besoin d'un serrurier dont la facture est{" "}
                <strong>acceptée et remboursée</strong> par votre assurance habitation. ELM Sécurité,
                concessionnaire officiel <Link to="/fichet-lille" className="underline font-semibold">Point Fort Fichet</Link>,
                fournit une facture détaillée conforme et vous accompagne dans toutes les démarches de remboursement.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <CallButton size="lg" className="text-lg" />
                <CtaButton variant="accent" size="lg" href="#contact">
                  Devis gratuit immédiat
                </CtaButton>
              </div>
              <ul className="flex flex-wrap gap-x-6 gap-y-2 mt-6 text-sm">
                <li className="flex items-center gap-2"><FileCheck className="h-4 w-4" aria-hidden="true" /> Facture conforme</li>
                <li className="flex items-center gap-2"><ShieldCheck className="h-4 w-4" aria-hidden="true" /> Agréé assurances</li>
                <li className="flex items-center gap-2"><Clock className="h-4 w-4" aria-hidden="true" /> Intervention 20-30 min</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Définition */}
        <section className="container mx-auto px-4 py-14">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Qu'est-ce qu'un serrurier agréé assurance ?</h2>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Un <strong>serrurier agréé assurance</strong> est un professionnel dont les interventions et les factures
              sont acceptées, puis remboursées, par les compagnies d'assurance habitation après un sinistre. Contrairement
              à une idée répandue, il n'existe pas d'« agrément » unique délivré par une seule autorité : être agréé signifie
              concrètement que le serrurier remplit les conditions exigées par les assureurs pour valider une prise en charge.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              En pratique, un serrurier agréé est une entreprise déclarée (SIRET et adresse physique vérifiables), couverte
              par une assurance responsabilité civile professionnelle, qui établit une facture détaillée et conforme et sait
              dialoguer avec les assureurs après une effraction. ELM Sécurité intervient au quotidien dans ce cadre auprès des
              principales compagnies : nous savons exactement quelles mentions doivent figurer sur la facture pour que votre
              dossier soit accepté sans relance.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: FileCheck, title: "Entreprise déclarée", text: "SIRET, adresse physique à Lille et assurance RC professionnelle : la base d'un dossier recevable." },
                { icon: FileText, title: "Facture conforme", text: "Mentions obligatoires, détail des pièces et de la main d'œuvre, TVA : tout ce qu'exige l'assureur." },
                { icon: ShieldCheck, title: "Dialogue assureur", text: "Habitude des sinistres effraction : nous connaissons les attentes des grandes compagnies." },
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

        {/* Sinistres pris en charge */}
        <section className="bg-muted/40 py-14">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-4">Quels sinistres sont pris en charge ?</h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Tous les contrats multirisques habitation ne couvrent pas les mêmes situations. Voici les cas les plus
                courants pris en charge — et celui qui, le plus souvent, ne l'est pas.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-background border rounded-lg p-5">
                  <h3 className="font-bold mb-3 flex items-center gap-2"><CheckCircle className="h-5 w-5 text-accent" aria-hidden="true" /> Généralement couverts</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li><strong>Effraction et cambriolage</strong> : serrure arrachée, cylindre détruit, porte forcée.</li>
                    <li><strong>Tentative d'effraction</strong> : dégâts sur la serrure ou l'encadrement, même sans vol.</li>
                    <li><strong>Vandalisme</strong> : serrure dégradée, colle dans le barillet, porte abîmée.</li>
                    <li><strong>Perte ou vol de clés</strong> : remplacement du cylindre, selon les options de votre contrat.</li>
                  </ul>
                </div>
                <div className="bg-background border rounded-lg p-5">
                  <h3 className="font-bold mb-3 flex items-center gap-2"><Euro className="h-5 w-5 text-primary" aria-hidden="true" /> Souvent non couvert</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li><strong>Porte simplement claquée</strong>, sans effraction ni dommage : l'ouverture reste à votre charge.</li>
                    <li>Clés oubliées à l'intérieur sans sinistre.</li>
                    <li>Usure normale d'une serrure ancienne.</li>
                  </ul>
                  <p className="text-xs text-muted-foreground mt-3">
                    En cas de doute, vérifiez votre garantie « vol » et le montant de la franchise auprès de votre assureur.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Facture conforme */}
        <section className="container mx-auto px-4 py-14">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">La facture conforme assurance</h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              La pièce maîtresse de votre remboursement, c'est la facture. ELM Sécurité fournit{" "}
              <strong>systématiquement</strong> une facture détaillée qui reprend toutes les mentions obligatoires
              attendues par les assureurs. Une facture incomplète ou manuscrite est la première cause de refus de prise
              en charge : nous vous évitons cet écueil.
            </p>
            <div className="bg-card border rounded-lg p-6 shadow-card">
              <h3 className="font-bold mb-3">Ce qui figure sur votre facture ELM Sécurité</h3>
              <ul className="grid sm:grid-cols-2 gap-2 text-sm text-muted-foreground">
                {[
                  "Identité et SIRET de l'entreprise",
                  "Adresse du chantier et date d'intervention",
                  "Détail des pièces remplacées (cylindre, serrure)",
                  "Détail de la main d'œuvre et du déplacement",
                  "Montant HT, TVA et total TTC",
                  "Nature du sinistre (effraction, vandalisme…)",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-accent shrink-0 mt-0.5" aria-hidden="true" />{t}
                  </li>
                ))}
              </ul>
            </div>
            <p className="text-muted-foreground mt-6">
              Après un cambriolage, la priorité est la <Link to="/mise-en-securite-effraction-lille" className="text-primary font-semibold hover:underline">mise en sécurité après effraction</Link> :
              nous sécurisons immédiatement votre logement, puis nous établissons la facture conforme nécessaire à votre dossier.
            </p>
          </div>
        </section>

        {/* Étapes remboursement */}
        <section className="bg-muted/40 py-14">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8">Comment se faire rembourser — les étapes</h2>
              <ol className="space-y-4">
                {[
                  ["Déclarez le sinistre à votre assureur", "Vous disposez de 5 jours ouvrés en général, mais seulement 2 jours ouvrés en cas de vol ou de cambriolage. Déclarez le plus tôt possible, par téléphone puis par écrit."],
                  ["Déposez plainte en cas d'effraction", "Rendez-vous au commissariat ou à la gendarmerie pour déposer plainte. Ce document est indispensable au remboursement d'un sinistre lié à une effraction ou un vol."],
                  ["Faites intervenir un serrurier agréé", "Appelez ELM Sécurité pour la mise en sécurité et le remplacement de la serrure. Nous établissons une facture détaillée et conforme aux exigences de votre assurance."],
                  ["Transmettez facture, plainte et constat", "Envoyez à votre assureur la facture, le récépissé de dépôt de plainte, le constat des dégâts et les photos. Votre dossier est alors complet pour l'indemnisation."],
                ].map((s, i) => (
                  <li key={s[0]} className="flex gap-4 bg-background border rounded-lg p-5 shadow-card">
                    <span className="flex-shrink-0 w-9 h-9 rounded-full bg-urgent text-urgent-foreground font-bold flex items-center justify-center">{i + 1}</span>
                    <div>
                      <h3 className="font-bold mb-1">{s[0]}</h3>
                      <p className="text-sm text-muted-foreground">{s[1]}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* Checklist documents */}
        <section className="container mx-auto px-4 py-14">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-4 flex items-center gap-2">
              <FileText className="h-7 w-7 text-primary" aria-hidden="true" /> Checklist des documents à réunir
            </h2>
            <p className="text-muted-foreground mb-6">
              Pour un remboursement rapide et sans relance, préparez ces pièces avant de transmettre votre dossier.
            </p>
            <div className="bg-card border rounded-lg p-6 shadow-card">
              <ul className="grid sm:grid-cols-2 gap-3 text-sm">
                {[
                  "La facture détaillée du serrurier (conforme)",
                  "Le récépissé de dépôt de plainte",
                  "Le constat des dégâts (assureur ou expert)",
                  "Les photos de la porte et de la serrure forcées",
                  "Votre numéro de contrat d'assurance habitation",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-2">
                    <FileCheck className="h-5 w-5 text-primary shrink-0 mt-0.5" aria-hidden="true" />
                    <span className="text-muted-foreground">{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Pourquoi ELM */}
        <section className="bg-muted/40 py-14">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-bold mb-4">Pourquoi choisir ELM Sécurité</h2>
                <ul className="space-y-2 text-muted-foreground">
                  {[
                    "Concessionnaire officiel Point Fort Fichet de Lille",
                    "Factures acceptées par les principales compagnies",
                    "Devis avant intervention, sans surprise",
                    "Garantie 2 ans pièces et main d'œuvre",
                    "Note de 4,7/5 sur 65 avis clients",
                  ].map((t) => (
                    <li key={t} className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-accent shrink-0 mt-0.5" aria-hidden="true" />{t}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-background border rounded-lg p-6 shadow-card">
                <h3 className="font-bold mb-3 flex items-center gap-2"><ShieldCheck className="h-5 w-5 text-primary" aria-hidden="true" /> Attention aux faux « agréés »</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  De nombreux dépanneurs affichent abusivement la mention « agréé toutes assurances » pour rassurer,
                  puis remettent une facture incomplète qui sera refusée par l'assureur. Quelques réflexes :
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>Vérifiez l'existence d'un SIRET et d'une adresse réelle.</li>
                  <li>Exigez un devis détaillé <strong>avant</strong> toute intervention.</li>
                  <li>Refusez les paiements en espèces sans facture conforme.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Prix */}
        <section className="container mx-auto px-4 py-14">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Tarifs transparents, facture toujours fournie</h2>
            <p className="text-muted-foreground mb-6">
              Nos prix sont annoncés <strong>avant</strong> l'intervention et chaque prestation donne lieu à une facture
              conforme remboursable par votre assurance après un sinistre.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm bg-background border rounded-lg overflow-hidden">
                <thead className="bg-primary text-primary-foreground">
                  <tr>
                    <th className="text-left p-3">Prestation</th>
                    <th className="text-right p-3">À partir de</th>
                    <th className="text-right p-3">Facture conforme</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Ouverture de porte", "89€", "Oui"],
                    ["Changement de cylindre", "149€", "Oui"],
                    ["Mise en sécurité après effraction", "Sur devis", "Oui"],
                  ].map((r) => (
                    <tr key={r[0]} className="border-t">
                      <td className="p-3 font-medium">{r[0]}</td>
                      <td className="p-3 text-right">{r[1]}</td>
                      <td className="p-3 text-right">{r[2]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              Déplacement inclus · Devis avant intervention · Garantie 2 ans.
              Voir la <Link to="/tarifs" className="text-primary font-semibold hover:underline">grille tarifaire complète</Link>.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-muted/40 py-14">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-8">Serrurier agréé assurance — questions fréquentes</h2>
              <FAQ items={faqItems} />
            </div>
          </div>
        </section>

        {/* Reviews */}
        <section className="container mx-auto px-4">
          <Reviews />
        </section>

        {/* Maillage interne */}
        <section className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-center">Pour aller plus loin</h2>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {[
                ["Mise en sécurité effraction", "/mise-en-securite-effraction-lille"],
                ["Porte blindée", "/porte-blindee"],
                ["Nos tarifs", "/tarifs"],
                ["Accueil", "/"],
                ["Contact", "/contact"],
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
              <h2 className="text-3xl font-bold mb-3">Sinistre serrurerie à déclarer ?</h2>
              <p className="text-muted-foreground mb-6">
                Appelez-nous : nous sécurisons votre logement et préparons la facture conforme dont votre assurance a besoin.
                Intervention en 20-30 minutes à Lille et dans toute la MEL.
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

export default SerrurierAgreeAssurance;
