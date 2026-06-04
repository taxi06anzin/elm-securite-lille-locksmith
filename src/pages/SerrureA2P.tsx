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
import { ShieldCheck, Lock, Star, CheckCircle, Euro, Phone, Award } from "lucide-react";

const faqItems = [
  {
    question: "Qu'est-ce qu'une serrure A2P 3 étoiles ?",
    answer:
      "Une serrure A2P★★★ est une serrure ayant obtenu le plus haut niveau de la certification A2P délivrée par le CNPP. Soumise à des tests d'effraction normalisés, elle résiste au minimum 15 minutes aux tentatives de fracture, perçage, crochetage ou arrachement. C'est le niveau de référence recommandé pour les portes d'entrée exposées et les habitations en rez-de-chaussée. Chez ELM Sécurité, concessionnaire officiel Point Fort Fichet, nous posons des serrures A2P★★★ certifiées dans toute la métropole lilloise.",
  },
  {
    question: "Quelle différence entre A2P 1, 2 et 3 étoiles ?",
    answer:
      "La différence tient au temps de résistance certifié face à un cambrioleur équipé. Une serrure A2P★ (niveau BP1) résiste au minimum 5 minutes, une A2P★★ (BP2) au minimum 10 minutes, et une A2P★★★ (BP3) au minimum 15 minutes. Plus le nombre d'étoiles est élevé, plus la serrure résiste longtemps et plus elle dissuade. Le bon niveau dépend de votre niveau de risque : nous le déterminons ensemble lors du diagnostic.",
  },
  {
    question: "Une serrure A2P réduit-elle ma prime d'assurance ?",
    answer:
      "Une serrure A2P est souvent exigée ou recommandée par les compagnies d'assurance habitation pour garantir la couverture vol, et certaines accordent une réduction de prime lorsque la porte est équipée d'une serrure multipoints certifiée A2P★★ ou A2P★★★. Nous fournissons une facture détaillée mentionnant le niveau de certification, conforme aux exigences des assureurs. ELM Sécurité est agréé par les principales compagnies.",
  },
  {
    question: "Combien coûte une serrure 3 points à Lille ?",
    answer:
      "Le prix d'une serrure 3 points certifiée A2P à Lille démarre à 180€ pose comprise pour une A2P★, environ 230€ pour une A2P★★ et 280€ pour une A2P★★★, à titre indicatif. Le montant final dépend de la marque, du nombre de points de verrouillage (3 ou 5) et de l'état de votre porte. Un devis gratuit et précis vous est remis avant toute intervention.",
  },
  {
    question: "Faut-il une porte blindée pour poser une serrure A2P ?",
    answer:
      "Non, une serrure A2P certifiée peut être posée sur une porte standard en bon état et améliore immédiatement votre niveau de sécurité. Pour une protection maximale, l'idéal reste d'associer une serrure A2P★★★ à une porte blindée ou à un blindage de porte, car la sécurité globale dépend de l'ensemble bloc-porte. Nous vous conseillons la solution adaptée selon votre porte existante et votre budget.",
  },
];

const SerrureA2P = () => {
  return (
    <>
      <SeoHead
        title="Serrure A2P & 3 points Lille — haute sécurité certifiée | ELM SÉCURITÉ"
        description="Pose de serrures A2P et serrures 3 points certifiées à Lille. Concessionnaire officiel Point Fort Fichet, agréé assurances, garantie 2 ans. Devis gratuit ☎ 06 21 66 08 67"
        canonical="https://serrurier-urgence-lille.fr/serrure-a2p-3-points-lille"
      />
      <JsonLd pageName="Serrure A2P et 3 points Lille" pageUrl="/serrure-a2p-3-points-lille" />
      <ServiceSchema
        serviceName="Pose de serrure A2P et serrure 3 points à Lille"
        description="Installation de serrures certifiées A2P (1, 2 et 3 étoiles) et de serrures multipoints à Lille. Concessionnaire officiel Point Fort Fichet, agréé assurances, garantie 2 ans."
        serviceType="Installation de serrure de sécurité"
        priceRange="€€"
        areaServed={["Lille", "Roubaix", "Tourcoing", "Villeneuve-d'Ascq", "Marcq-en-Barœul", "La Madeleine"]}
      />

      <div className="min-h-screen bg-background">
        <Breadcrumb
          items={[
            { label: "Changement de serrure", path: "/changement-serrure" },
            { label: "Serrure A2P & 3 points", path: "/serrure-a2p-3-points-lille" },
          ]}
        />

        {/* Hero */}
        <section className="relative bg-gradient-to-br from-secondary to-primary text-secondary-foreground py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full text-sm font-semibold mb-4">
                <Award className="h-4 w-4" aria-hidden="true" /> Concessionnaire officiel Point Fort Fichet
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">
                Serrure A2P et 3 points à Lille — haute sécurité certifiée
              </h1>
              <p className="text-lg md:text-xl opacity-90 mb-6">
                Protégez votre domicile avec une serrure <strong>anti-effraction certifiée A2P</strong> et un
                verrouillage <strong>multipoints</strong>. ELM Sécurité installe des serrures 3 points homologuées
                par le CNPP à Lille et dans toute la MEL, avec conseil personnalisé, pose propre et garantie 2 ans.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <CallButton size="lg" className="text-lg" />
                <CtaButton variant="accent" size="lg" href="#contact">
                  Devis gratuit
                </CtaButton>
              </div>
              <ul className="flex flex-wrap gap-x-6 gap-y-2 mt-6 text-sm">
                <li className="flex items-center gap-2"><ShieldCheck className="h-4 w-4" aria-hidden="true" /> Certifié A2P / CNPP</li>
                <li className="flex items-center gap-2"><Euro className="h-4 w-4" aria-hidden="true" /> Dès 180€ posée</li>
                <li className="flex items-center gap-2"><Award className="h-4 w-4" aria-hidden="true" /> Agréé assurances</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Certification A2P */}
        <section className="container mx-auto px-4 py-14">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Qu'est-ce que la certification A2P ?</h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              La certification <strong>A2P</strong> (« Assurance Prévention Protection ») est délivrée par le
              <strong> CNPP</strong>, organisme indépendant de référence en France. Elle atteste qu'une serrure a
              passé avec succès une batterie de tests d'effraction normalisés : perçage, crochetage, arrachement,
              sciage et fracture. Concrètement, l'A2P certifie le <strong>temps de résistance</strong> de la serrure
              face à un cambrioleur outillé. Plus ce temps est élevé, plus la tentative d'effraction devient longue,
              bruyante et dissuasive. Il existe <strong>trois niveaux</strong>, matérialisés par des étoiles.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {[
                { icon: Star, title: "A2P★ (BP1)", time: "5 minutes", text: "Niveau d'entrée de gamme certifié. Résistance minimale de 5 min à l'effraction. Adapté aux portes peu exposées et aux étages." },
                { icon: Star, title: "A2P★★ (BP2)", time: "10 minutes", text: "Niveau intermédiaire très répandu. 10 min de résistance certifiée. Bon compromis sécurité / budget, souvent demandé par les assurances." },
                { icon: Star, title: "A2P★★★ (BP3)", time: "15 minutes", text: "Niveau maximal. 15 min de résistance certifiée. Recommandé pour les portes d'entrée exposées et les rez-de-chaussée." },
              ].map((b) => (
                <div key={b.title} className="bg-card border rounded-lg p-6 shadow-card">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                    <b.icon className="h-6 w-6 text-primary" aria-hidden="true" />
                  </div>
                  <h3 className="font-bold mb-1">{b.title}</h3>
                  <p className="text-sm font-semibold text-primary mb-2">{b.time} de résistance</p>
                  <p className="text-sm text-muted-foreground">{b.text}</p>
                </div>
              ))}
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm bg-background border rounded-lg overflow-hidden">
                <thead className="bg-primary text-primary-foreground">
                  <tr>
                    <th className="text-left p-3">Niveau A2P</th>
                    <th className="text-left p-3">Résistance certifiée</th>
                    <th className="text-right p-3">Tarif posé (indicatif)</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["A2P★ (BP1)", "5 minutes minimum", "dès 180€"],
                    ["A2P★★ (BP2)", "10 minutes minimum", "dès 230€"],
                    ["A2P★★★ (BP3)", "15 minutes minimum", "dès 280€"],
                  ].map((r) => (
                    <tr key={r[0]} className="border-t">
                      <td className="p-3 font-medium">{r[0]}</td>
                      <td className="p-3">{r[1]}</td>
                      <td className="p-3 text-right">{r[2]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              Tarifs pose comprise, donnés à titre indicatif. Le prix final dépend de la marque et de l'état de la porte.
              Voir la <Link to="/tarifs" className="text-primary font-semibold hover:underline">grille tarifaire complète</Link>.
            </p>
          </div>
        </section>

        {/* Serrure multipoints */}
        <section className="bg-muted/40 py-14">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-4">Serrure 3 points / multipoints : comment ça marche ?</h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Une serrure classique ne verrouille la porte qu'en un seul point, généralement au centre. Il suffit alors
                d'un effort de levier concentré à cet endroit pour faire céder l'ensemble. Une <strong>serrure
                multipoints</strong> répartit au contraire le verrouillage sur <strong>plusieurs points simultanés</strong> :
                en haut, en bas et au centre du dormant pour une serrure <strong>3 points</strong>, et jusqu'à
                <strong> 5 points</strong> pour les modèles haute sécurité.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-background border rounded-lg p-6 shadow-card">
                  <Lock className="h-8 w-8 text-primary mb-3" aria-hidden="true" />
                  <h3 className="font-bold text-lg mb-2">Serrure 1 point</h3>
                  <p className="text-sm text-muted-foreground">
                    Un seul pêne engagé au centre. La pression d'un pied-de-biche se concentre sur un point unique :
                    la porte peut être déformée et ouverte en quelques secondes. Sécurité limitée, à proscrire sur une porte d'entrée.
                  </p>
                </div>
                <div className="bg-background border rounded-lg p-6 shadow-card">
                  <ShieldCheck className="h-8 w-8 text-primary mb-3" aria-hidden="true" />
                  <h3 className="font-bold text-lg mb-2">Serrure 3 à 5 points</h3>
                  <p className="text-sm text-muted-foreground">
                    Les points de verrouillage haut, bas et centre solidarisent la porte sur toute sa hauteur. La force
                    d'arrachement se disperse, la résistance grimpe nettement et l'effraction devient bien plus longue.
                    Associée à une certification A2P, c'est la solution recommandée.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pourquoi A2P */}
        <section className="container mx-auto px-4 py-14">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Pourquoi choisir une serrure A2P ?</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: ShieldCheck, title: "Exigée par les assurances", text: "De nombreux contrats habitation imposent ou recommandent une serrure A2P pour couvrir le vol. Certains assureurs réduisent la prime quand la porte est équipée d'une A2P★★ ou A2P★★★." },
                { icon: Lock, title: "Dissuasion réelle", text: "Un cambrioleur abandonne dans la majorité des cas si l'effraction dépasse quelques minutes. Le temps de résistance certifié A2P est votre meilleur rempart." },
                { icon: Award, title: "Durabilité garantie", text: "Mécanismes haut de gamme, cylindres anti-perçage et anti-crochetage, clés protégées contre la reproduction : une serrure A2P dure des années." },
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
            <p className="text-muted-foreground mt-6 leading-relaxed">
              Vous cherchez un installateur reconnu par votre compagnie ? ELM Sécurité est agréé par les principales
              assurances : découvrez notre page
              {" "}
              <Link to="/serrurier-agree-assurance-lille" className="text-primary font-semibold hover:underline">serrurier agréé assurance à Lille</Link>
              {" "}pour la prise en charge et la conformité de la facture.
            </p>
          </div>
        </section>

        {/* Marques posées */}
        <section className="bg-muted/40 py-14">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-4">Les marques de serrures A2P que nous posons</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Nous installons uniquement des serrures de fabricants reconnus, dont les gammes haute sécurité sont
                certifiées A2P. Notre expertise s'appuie sur notre statut de <strong>concessionnaire officiel Point
                Fort Fichet</strong>, gage d'un savoir-faire reconnu et d'un accès aux modèles les plus performants.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
                {["Fichet", "Bricard", "Vachette", "Mul-T-Lock", "Mottura"].map((m) => (
                  <div key={m} className="bg-background border rounded-lg p-4 text-center font-semibold flex items-center justify-center min-h-14">
                    {m}
                  </div>
                ))}
              </div>
              <p className="text-muted-foreground leading-relaxed">
                En tant que point de vente agréé, nous proposons l'ensemble des serrures multipoints Fichet et assurons
                leur pose dans les règles de l'art. Pour tout savoir sur cette gamme premium, consultez notre page
                {" "}
                <Link to="/fichet-lille" className="text-primary font-semibold hover:underline">Point Fort Fichet à Lille</Link>.
              </p>
            </div>
          </div>
        </section>

        {/* Notre intervention */}
        <section className="container mx-auto px-4 py-14">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Notre intervention, étape par étape</h2>
            <ol className="space-y-4">
              {[
                ["Diagnostic de votre porte", "Nous examinons votre porte, votre serrure actuelle et votre environnement (étage, exposition, copropriété) pour évaluer précisément votre niveau de risque."],
                ["Conseil selon le niveau de risque", `Nous vous recommandons le niveau A2P adapté (★, ★★ ou ★★★) et le nombre de points de verrouillage. Un appel au ${PHONE_DISPLAY} suffit pour démarrer.`],
                ["Devis gratuit avant intervention", "Le tarif est annoncé clairement avant toute pose, sans engagement ni frais cachés. La facture est conforme aux exigences des assurances."],
                ["Pose propre et garantie 2 ans", "Installation soignée par un serrurier qualifié, vérification du bon fonctionnement et garantie 2 ans pièces et main d'œuvre."],
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
            <div className="grid md:grid-cols-2 gap-3 mt-8">
              {[
                "Concessionnaire officiel Point Fort Fichet de Lille",
                "Serrures certifiées A2P par le CNPP",
                "Devis gratuit annoncé avant intervention",
                "Agréé par les assurances habitation",
                "Garantie 2 ans pièces et main d'œuvre",
                "Intervention 24h/24, 7j/7 dans toute la MEL",
              ].map((t) => (
                <div key={t} className="flex items-start gap-2 text-muted-foreground">
                  <CheckCircle className="h-5 w-5 text-accent shrink-0 mt-0.5" aria-hidden="true" />
                  <span className="text-sm">{t}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-muted/40 py-14">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-8">Serrure A2P & 3 points — questions fréquentes</h2>
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
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                ["Porte blindée", "/porte-blindee"],
                ["Point Fort Fichet", "/fichet-lille"],
                ["Changement de serrure", "/changement-serrure"],
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
              <h2 className="text-3xl font-bold mb-3">Demandez votre devis serrure A2P gratuit</h2>
              <p className="text-muted-foreground mb-6">
                Parlez-nous de votre porte et de votre besoin de sécurité. Nous vous conseillons le bon niveau de
                certification et vous remettons un devis clair, sans engagement.
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

export default SerrureA2P;
