import { Link } from "react-router-dom";
import SeoHead from "@/components/SeoHead";
import JsonLd from "@/components/JsonLd";
import ServiceSchema from "@/components/ServiceSchema";
import Breadcrumb from "@/components/Breadcrumb";
import FAQ from "@/components/FAQ";
import { CallButton } from "@/components/ui/button-variants";
import { PHONE_DISPLAY, PHONE_HREF } from "@/config/site";
import { DoorClosed, KeyRound, AlertTriangle, CheckCircle, XCircle, Euro, Phone } from "lucide-react";

const faqItems = [
  {
    question: "Quelle est la différence entre une porte claquée et une porte fermée à clé ?",
    answer:
      "Une porte claquée est simplement tirée derrière soi : seul le pêne demi-tour (le loquet) est engagé, sans tour de clé. Elle s'ouvre généralement sans casse en quelques minutes. Une porte fermée à clé a son pêne dormant verrouillé : l'ouverture est plus technique et un peu plus longue. Préciser ce point au téléphone permet d'annoncer un tarif juste.",
  },
  {
    question: "Peut-on ouvrir une porte claquée soi-même avec une radio ou une carte ?",
    answer:
      "La technique de la carte ou de la radiographie ne fonctionne que sur les serrures à pêne biseauté très simples et risque d'abîmer la porte ou la gâche. Sur une serrure récente, multipoints ou de sécurité, elle est inefficace et peut aggraver le blocage. Mieux vaut faire appel à un serrurier qui ouvre sans casse dans 95% des cas.",
  },
  {
    question: "Combien coûte l'ouverture d'une porte claquée à Lille ?",
    answer:
      "À partir de 89€ TTC en journée, déplacement inclus. La nuit, une majoration de 30% s'applique, et 50% le dimanche et les jours fériés. Le prix est annoncé au téléphone et confirmé par un devis avant l'intervention. Méfiez-vous des annonces « 19€ » : ce sont presque toujours des arnaques.",
  },
  {
    question: "Combien de temps faut-il pour ouvrir une porte claquée ?",
    answer:
      "Comptez 5 à 15 minutes d'intervention une fois le serrurier sur place, pour une porte claquée standard. À Lille, le délai d'arrivée moyen est de 20 à 30 minutes après votre appel au 06 21 66 08 67.",
  },
  {
    question: "Mes clés sont restées à l'intérieur, est-ce un problème ?",
    answer:
      "Non. Que vos clés soient restées sur la table ou sur la serrure intérieure, un serrurier peut ouvrir une porte claquée sans elles, sans endommager le cylindre dans la grande majorité des cas.",
  },
];

const PorteClaqueeQueFaire = () => {
  return (
    <>
      <SeoHead
        title="Porte claquée : que faire ? Le guide + ouverture Lille | ELM SÉCURITÉ"
        description="Porte claquée, clés à l'intérieur ? Les bons réflexes, ce qu'il ne faut pas faire, le prix d'une ouverture (dès 89€) et comment éviter les arnaques. ☎ 06 21 66 08 67"
        canonical="https://serrurier-urgence-lille.fr/porte-claquee-que-faire"
      />
      <JsonLd pageName="Porte claquée : que faire" pageUrl="/porte-claquee-que-faire" />
      <ServiceSchema
        serviceName="Ouverture de porte claquée à Lille"
        description="Ouverture de porte claquée sans casse à Lille en 20-30 min, dès 89€. Méthode non destructive privilégiée."
        serviceType="Ouverture de porte"
        priceRange="€€"
      />

      <div className="min-h-screen bg-background">
        <Breadcrumb
          items={[
            { label: "Ouverture de porte", path: "/ouverture-porte" },
            { label: "Porte claquée : que faire", path: "/porte-claquee-que-faire" },
          ]}
        />

        {/* Hero */}
        <section className="bg-gradient-to-br from-secondary to-primary text-secondary-foreground py-14">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">
                Porte claquée : que faire ? Le guide pas-à-pas
              </h1>
              <p className="text-lg md:text-xl opacity-90 mb-6">
                Vous venez de claquer votre porte, parfois avec les clés à l'intérieur ? Pas de panique :
                voici les bons réflexes, les erreurs à éviter, le prix d'une ouverture et comment faire venir
                un serrurier de confiance à Lille en 20-30 minutes.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <CallButton size="lg" className="text-lg" />
              </div>
            </div>
          </div>
        </section>

        {/* Claquée vs fermée à clé */}
        <section className="container mx-auto px-4 py-14">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Porte claquée ou porte fermée à clé ?</h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Avant tout, identifiez votre situation : cela change la méthode d'ouverture et le prix.
              C'est la première question que vous posera le serrurier.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-card border rounded-lg p-6 shadow-card">
                <DoorClosed className="h-8 w-8 text-primary mb-3" aria-hidden="true" />
                <h3 className="font-bold text-lg mb-2">Porte claquée</h3>
                <p className="text-sm text-muted-foreground">
                  Vous avez simplement tiré la porte derrière vous. Seul le <strong>pêne demi-tour (loquet)</strong> est
                  engagé, sans tour de clé. Ouverture <strong>sans casse</strong> dans la grande majorité des cas,
                  en quelques minutes. C'est le cas le plus fréquent et le moins cher (dès 89€).
                </p>
              </div>
              <div className="bg-card border rounded-lg p-6 shadow-card">
                <KeyRound className="h-8 w-8 text-primary mb-3" aria-hidden="true" />
                <h3 className="font-bold text-lg mb-2">Porte fermée à clé</h3>
                <p className="text-sm text-muted-foreground">
                  Le <strong>pêne dormant</strong> est verrouillé (un ou plusieurs tours de clé). L'ouverture est plus
                  technique, surtout sur une serrure multipoints ou de sécurité. Le tarif est légèrement supérieur
                  (dès 139€). Découvrez nos méthodes sur la page <Link to="/ouverture-porte" className="text-primary font-semibold hover:underline">ouverture de porte</Link>.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Les bons réflexes */}
        <section className="bg-muted/40 py-14">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8">Les 4 bons réflexes immédiats</h2>
              <ol className="space-y-4">
                {[
                  ["Respirez et vérifiez les autres accès", "Une fenêtre entrouverte, une porte de service, un balcon accessible en toute sécurité ? Ne prenez jamais de risque (pas d'escalade)."],
                  ["Demandez au gardien ou à un proche", "Gardien d'immeuble, propriétaire, voisin possédant un double : c'est la solution la plus rapide et gratuite."],
                  ["Ne forcez pas la serrure", "Forcer, crocheter avec un objet ou « bricoler » le barillet aggrave le blocage et transforme une ouverture à 89€ en remplacement à plusieurs centaines d'euros."],
                  ["Appelez un serrurier qui annonce son prix", `Un professionnel qui ouvre sans casse. Au ${PHONE_DISPLAY}, le tarif vous est communiqué avant le déplacement.`],
                ].map((s, i) => (
                  <li key={s[0]} className="flex gap-4 bg-background border rounded-lg p-5 shadow-card">
                    <span className="flex-shrink-0 w-9 h-9 rounded-full bg-primary text-primary-foreground font-bold flex items-center justify-center">{i + 1}</span>
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

        {/* À ne pas faire */}
        <section className="container mx-auto px-4 py-14">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
              <AlertTriangle className="h-7 w-7 text-accent" aria-hidden="true" /> Ce qu'il ne faut surtout pas faire
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-card border rounded-lg p-5">
                <h3 className="font-bold mb-3 flex items-center gap-2"><XCircle className="h-5 w-5 text-destructive" aria-hidden="true" /> À éviter</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>Tenter la « carte bancaire » sur une serrure récente (inefficace et risqué).</li>
                  <li>Forcer ou percer le cylindre soi-même.</li>
                  <li>Appeler un numéro affichant « ouverture 19€ » : surcoût garanti sur place.</li>
                  <li>Payer en espèces sans facture.</li>
                </ul>
              </div>
              <div className="bg-card border rounded-lg p-5">
                <h3 className="font-bold mb-3 flex items-center gap-2"><CheckCircle className="h-5 w-5 text-accent" aria-hidden="true" /> Les bons signes d'un vrai pro</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>Tarif annoncé clairement <strong>avant</strong> l'intervention.</li>
                  <li>Adresse physique et SIRET vérifiables (concessionnaire Fichet).</li>
                  <li>Facture conforme pour l'assurance.</li>
                  <li>Méthode non destructive privilégiée.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Prix */}
        <section className="bg-muted/40 py-14">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <Euro className="h-10 w-10 text-primary mx-auto mb-3" aria-hidden="true" />
              <h2 className="text-3xl font-bold mb-3">Combien coûte l'ouverture d'une porte claquée ?</h2>
              <p className="text-muted-foreground mb-6">
                À Lille, comptez <strong>dès 89€ en journée</strong> (déplacement inclus), avec majoration de 30% la nuit
                et 50% le dimanche et jours fériés. Le prix exact est confirmé par devis avant intervention.
                Consultez la <Link to="/tarifs" className="text-primary font-semibold hover:underline">grille tarifaire</Link> ou,
                pour une urgence nocturne, la page <Link to="/serrurier-dimanche-nuit-lille" className="text-primary font-semibold hover:underline">serrurier nuit & dimanche</Link>.
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
            <h2 className="text-3xl font-bold text-center mb-8">Porte claquée — questions fréquentes</h2>
            <FAQ items={faqItems} />
          </div>
        </section>

        {/* Maillage interne */}
        <section className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-center">Pour aller plus loin</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                ["Ouverture de porte", "/ouverture-porte"],
                ["Dépannage 24/7", "/depannage-serrurerie"],
                ["Nuit & dimanche", "/serrurier-dimanche-nuit-lille"],
                ["Nos tarifs", "/tarifs"],
              ].map(([label, to]) => (
                <Link key={to} to={to} className="bg-card border rounded-lg p-4 text-center hover:shadow-elegant hover:border-primary transition-all text-sm font-medium">
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default PorteClaqueeQueFaire;
