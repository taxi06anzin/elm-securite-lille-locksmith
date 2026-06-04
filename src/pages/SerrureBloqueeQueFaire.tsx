import { Link } from "react-router-dom";
import SeoHead from "@/components/SeoHead";
import JsonLd from "@/components/JsonLd";
import ServiceSchema from "@/components/ServiceSchema";
import Breadcrumb from "@/components/Breadcrumb";
import FAQ from "@/components/FAQ";
import { CallButton } from "@/components/ui/button-variants";
import { PHONE_DISPLAY, PHONE_HREF } from "@/config/site";
import { KeyRound, AlertTriangle, CheckCircle, XCircle, Euro, Phone, Wrench, Snowflake } from "lucide-react";

const faqItems = [
  {
    question: "Pourquoi ma clé ne tourne plus dans la serrure ?",
    answer:
      "Le plus souvent, le cylindre est encrassé ou les goupilles sont grippées par la poussière et l'usure : la clé entre mais bute. Cela peut aussi venir d'une porte légèrement désalignée qui crée un point dur, d'un pêne coincé dans la gâche, ou d'une clé de mauvais double mal taillée. Un dégrippant adapté résout les cas bénins ; si la clé reste bloquée, un serrurier débloque la serrure sans la casser dans la grande majorité des cas.",
  },
  {
    question: "Que faire si ma clé est cassée dans la serrure ?",
    answer:
      "Surtout, ne tentez pas de la recoller ni de l'extraire à la colle : vous risquez de bloquer définitivement le cylindre. Ne forcez pas non plus avec une pince qui enfoncerait le morceau plus profond. Si un bout dépasse, une pince fine tirée bien droit peut parfois suffire. Sinon, un serrurier dispose d'extracteurs spécifiques pour retirer le fragment proprement et, dans la plupart des cas, conserver votre serrure.",
  },
  {
    question: "Peut-on débloquer une serrure sans la changer ?",
    answer:
      "Oui, dans 95% des cas chez ELM Sécurité. Un cylindre encrassé ou grippé se nettoie et se lubrifie ; un point dur se règle ; une clé coincée s'extrait. Le remplacement du cylindre n'est nécessaire que si le mécanisme est cassé, forcé ou trop usé. Notre priorité est toujours l'intervention sans casse, devis annoncé avant.",
  },
  {
    question: "Combien coûte le déblocage d'une serrure à Lille ?",
    answer:
      "L'intervention démarre dès 89€ TTC en journée, déplacement inclus, pour débloquer une serrure ou extraire une clé cassée. Si le cylindre doit être remplacé, comptez dès 149€. Une majoration s'applique la nuit et le dimanche. Le tarif est toujours annoncé au téléphone et confirmé par devis avant intervention : aucune surprise.",
  },
  {
    question: "Une serrure qui tourne dans le vide, est-ce réparable ?",
    answer:
      "Une clé qui tourne sans actionner le pêne signale presque toujours un mécanisme interne cassé (came, panneton, ou tringlerie d'une serrure multipoints). La serrure n'assure alors plus la sécurité et doit être réparée ou remplacée. Un serrurier ouvre la porte sans casse si possible, puis change l'élément défaillant. Ne laissez jamais une porte dans cet état la nuit.",
  },
];

const SerrureBloqueeQueFaire = () => {
  return (
    <>
      <SeoHead
        title="Serrure bloquée : que faire ? Le guide + déblocage Lille | ELM SÉCURITÉ"
        description="Serrure bloquée, clé qui ne tourne plus ou cassée ? Les gestes sûrs, les erreurs à éviter et le prix d'un déblocage (dès 89€) à Lille. ☎ 06 21 66 08 67"
        canonical="https://serrurier-urgence-lille.fr/serrure-bloquee-que-faire"
      />
      <JsonLd pageName="Serrure bloquée : que faire" pageUrl="/serrure-bloquee-que-faire" />
      <ServiceSchema
        serviceName="Déblocage de serrure à Lille"
        description="Déblocage de serrure et extraction de clé cassée sans casse à Lille en 20-30 min, dès 89€. Méthode non destructive privilégiée, devis avant intervention."
        serviceType="Dépannage serrurerie"
        priceRange="€€"
        areaServed={["Lille", "Roubaix", "Tourcoing", "Villeneuve-d'Ascq", "Marcq-en-Barœul", "La Madeleine"]}
      />

      <div className="min-h-screen bg-background">
        <Breadcrumb
          items={[
            { label: "Ouverture de porte", path: "/ouverture-porte" },
            { label: "Serrure bloquée que faire", path: "/serrure-bloquee-que-faire" },
          ]}
        />

        {/* Hero */}
        <section className="bg-gradient-to-br from-secondary to-primary text-secondary-foreground py-14">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full text-sm font-semibold mb-4">
                <KeyRound className="h-4 w-4" aria-hidden="true" /> Clé qui ne tourne plus ? On vous débloque
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">
                Serrure bloquée : que faire ?
              </h1>
              <p className="text-lg md:text-xl opacity-90 mb-6">
                Votre clé n'entre plus, refuse de tourner, ou s'est cassée dans le barillet ? Avant de forcer
                et d'aggraver les choses, suivez les bons gestes. Voici comment identifier la panne, ce que vous
                pouvez tenter sans rien casser, et quand appeler un serrurier à Lille qui débloque
                <strong> sans casse dans 95% des cas</strong>, en 20 à 30 minutes.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <CallButton size="lg" className="text-lg" />
              </div>
            </div>
          </div>
        </section>

        {/* Pourquoi une serrure se bloque */}
        <section className="container mx-auto px-4 py-14">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Pourquoi une serrure se bloque ?</h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Une serrure bloquée n'est presque jamais un hasard : elle vous avertissait sans doute déjà
              par un point dur ou une clé de plus en plus dure à tourner. Identifier la cause permet de choisir
              le bon geste — et d'éviter le réflexe fatal qui consiste à forcer. Voici les origines les plus
              fréquentes d'un <strong>cylindre bloqué</strong> ou d'une <strong>clé qui ne tourne plus</strong>.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: Wrench, title: "Cylindre encrassé ou usé", text: "Poussière, limaille et usure des goupilles : avec le temps, le barillet accroche et la clé peine à tourner. C'est la cause n°1." },
                { icon: KeyRound, title: "Mécanisme grippé", text: "Un manque de lubrification fait gripper les ressorts et le panneton. La clé entre mais bute à mi-course." },
                { icon: AlertTriangle, title: "Clé tordue ou cassée", text: "Une clé usée, faussée ou un double mal taillé peuvent se coincer, voire se rompre net à l'intérieur du cylindre." },
                { icon: Snowflake, title: "Gel en hiver", text: "Par grand froid, l'humidité gèle dans le barillet d'une porte extérieure ou d'un portail : la clé ne tourne plus." },
                { icon: KeyRound, title: "Point dur multipoints", text: "Sur une serrure multipoints, un crémone mal réglé ou un point haut/bas grippé crée une résistance qui bloque le verrouillage." },
                { icon: AlertTriangle, title: "Porte désalignée ou gonflée", text: "Une porte qui a gonflé (humidité) ou s'est affaissée désaligne le pêne et la gâche : la serrure force et finit par se bloquer." },
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

        {/* Les gestes à essayer */}
        <section className="bg-muted/40 py-14">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-4">Les gestes à essayer (sans rien casser)</h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Avant tout appel, quelques gestes simples débloquent souvent une serrure récalcitrante.
                La règle d'or : <strong>opérez en douceur</strong>. Une clé que l'on force se tord, puis casse,
                et transforme un déblocage à 89€ en remplacement complet.
              </p>
              <ol className="space-y-4">
                {[
                  ["Ne forcez jamais la clé", "C'est l'erreur la plus coûteuse. Si la clé résiste, n'appuyez pas comme une brute : vous risquez de la tordre, de la rompre dans le cylindre, ou de casser le panneton. Arrêtez-vous au premier point dur."],
                  ["Lubrifiez le cylindre", "Pulvérisez un dégrippant adapté serrure ou, mieux, du lubrifiant au graphite (poudre) dans le canon. N'utilisez JAMAIS d'huile ni de WD-40 gras : ils encrassent et collent la poussière, aggravant le blocage à terme."],
                  ["Testez une autre clé", "Essayez le double d'origine : une clé usée ou un mauvais double mal taillé est souvent le seul vrai coupable. Si l'autre clé tourne, faites refaire un jeu chez un vrai serrurier."],
                  ["Vérifiez l'alignement de la porte", "Soulevez légèrement la porte par la poignée, ou poussez/tirez le battant tout en tournant la clé. Si la porte a gonflé ou s'est affaissée, ce léger réalignement libère souvent le pêne."],
                  ["Dégelez doucement en cas de gel", "En hiver, réchauffez la clé (jamais au chalumeau) ou approchez un sèche-cheveux du cylindre. Ne versez surtout pas d'eau chaude : elle regèle aussitôt et aggrave tout."],
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
              <div className="mt-6 bg-background border-l-4 border-accent rounded-lg p-5 flex gap-3">
                <AlertTriangle className="h-6 w-6 text-accent shrink-0" aria-hidden="true" />
                <p className="text-sm text-muted-foreground">
                  <strong>Attention :</strong> forcer une clé bloquée est la cause n°1 de casse irréparable.
                  Une clé rompue dans le cylindre ou un panneton brisé transforment une simple intervention
                  en remplacement complet. Au moindre doute, arrêtez et appelez un professionnel.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Clé cassée dans la serrure */}
        <section className="container mx-auto px-4 py-14">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
              <KeyRound className="h-7 w-7 text-primary" aria-hidden="true" /> Clé cassée dans la serrure : la bonne réaction
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Une clé qui se brise nette dans le barillet est un grand classique, surtout sur les vieilles
              clés ou les doubles fragiles. Le réflexe naturel — bricoler à tout prix — est justement
              ce qui condamne le plus souvent la serrure. Voici quoi faire, et surtout quoi éviter.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-card border rounded-lg p-5">
                <h3 className="font-bold mb-3 flex items-center gap-2"><XCircle className="h-5 w-5 text-destructive" aria-hidden="true" /> À ne surtout pas faire</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>Tenter de recoller les deux morceaux et réintroduire la clé : la colle bloque le cylindre.</li>
                  <li>Enfoncer le fragment avec une autre clé ou un tournevis.</li>
                  <li>Tourner le morceau coincé : vous risquez de casser le panneton à l'intérieur.</li>
                  <li>Inonder de WD-40 gras : la poussière vient coller et empire tout.</li>
                </ul>
              </div>
              <div className="bg-card border rounded-lg p-5">
                <h3 className="font-bold mb-3 flex items-center gap-2"><CheckCircle className="h-5 w-5 text-accent" aria-hidden="true" /> Les bons gestes</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>Si un bout dépasse, saisissez-le à la pince fine et tirez bien droit, sans tourner.</li>
                  <li>Un peu de dégrippant graphite peut faciliter l'extraction.</li>
                  <li>Si rien ne dépasse, n'insistez pas : un serrurier a des extracteurs dédiés.</li>
                  <li>Dans la plupart des cas, le fragment se retire et la serrure est conservée.</li>
                </ul>
              </div>
            </div>
            <p className="text-muted-foreground mt-6 leading-relaxed">
              Un serrurier dispose d'<strong>extracteurs de clé</strong> (crochets fins glissés le long du
              canon) qui retirent le morceau proprement, sans démonter ni casser le cylindre dans la majorité
              des cas. Découvrez nos méthodes sur la page{" "}
              <Link to="/ouverture-porte" className="text-primary font-semibold hover:underline">ouverture de porte</Link>.
            </p>
          </div>
        </section>

        {/* Quand appeler un serrurier */}
        <section className="bg-muted/40 py-14">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">Quand appeler un serrurier ?</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Tous les blocages ne se résolvent pas avec un dégrippant. Certains signaux indiquent qu'il faut
                arrêter d'insister et faire intervenir un professionnel — avant d'aggraver la casse.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  ["La clé ne tourne plus du tout", "Malgré la lubrification et le test du double, la clé reste bloquée : le cylindre est grippé ou usé en interne. Un serrurier le débloque ou le remplace sans abîmer la porte."],
                  ["Une clé est cassée dedans", "Rien ne dépasse, ou le fragment résiste : seuls des extracteurs spécifiques retirent le morceau proprement, en conservant la serrure dans la plupart des cas."],
                  ["La serrure tourne dans le vide", "La clé tourne mais n'actionne plus le pêne : le mécanisme interne est cassé. La porte n'est plus sécurisée et doit être ouverte puis réparée rapidement."],
                ].map(([title, text]) => (
                  <div key={title} className="bg-background border rounded-lg p-6 shadow-card">
                    <CheckCircle className="h-6 w-6 text-accent mb-3" aria-hidden="true" />
                    <h3 className="font-bold mb-2">{title}</h3>
                    <p className="text-sm text-muted-foreground">{text}</p>
                  </div>
                ))}
              </div>
              <p className="text-muted-foreground mt-6 leading-relaxed">
                Dans tous ces cas, ELM Sécurité privilégie l'<strong>ouverture et le déblocage sans casse</strong>{" "}
                (réussite dans 95% des interventions). Le remplacement n'intervient que si le mécanisme est
                réellement hors d'usage. Pour un cylindre cassé ou forcé, voir notre service de{" "}
                <Link to="/changement-serrure" className="text-primary font-semibold hover:underline">changement de serrure</Link>{" "}
                et nos cylindres haute sécurité <Link to="/fichet-lille" className="text-primary font-semibold hover:underline">Point Fort Fichet</Link>.
              </p>
            </div>
          </div>
        </section>

        {/* Prix */}
        <section className="container mx-auto px-4 py-14">
          <div className="max-w-3xl mx-auto text-center">
            <Euro className="h-10 w-10 text-primary mx-auto mb-3" aria-hidden="true" />
            <h2 className="text-3xl font-bold mb-3">Combien coûte le déblocage d'une serrure ?</h2>
            <p className="text-muted-foreground mb-6">
              À Lille, comptez une <strong>intervention dès 89€</strong> en journée (déplacement inclus) pour
              débloquer une serrure ou extraire une clé cassée, et un{" "}
              <strong>changement de cylindre dès 149€</strong> si le mécanisme est hors d'usage. Une majoration
              s'applique la nuit et le dimanche. Le prix exact est annoncé au téléphone et confirmé par devis
              avant intervention. Consultez la{" "}
              <Link to="/tarifs" className="text-primary font-semibold hover:underline">grille tarifaire</Link>.
            </p>
            <a href={PHONE_HREF} className="inline-flex items-center gap-2 bg-urgent text-urgent-foreground font-bold text-lg px-6 min-h-14 rounded-lg hover:bg-urgent/90 transition-colors">
              <Phone className="h-5 w-5" aria-hidden="true" /> {PHONE_DISPLAY}
            </a>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-muted/40 py-14">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-8">Serrure bloquée — questions fréquentes</h2>
              <FAQ items={faqItems} />
            </div>
          </div>
        </section>

        {/* Maillage interne */}
        <section className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-center">Pour aller plus loin</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                ["Ouverture de porte", "/ouverture-porte"],
                ["Changement de serrure", "/changement-serrure"],
                ["Point Fort Fichet", "/fichet-lille"],
                ["Nous contacter", "/contact"],
              ].map(([label, to]) => (
                <Link key={to} to={to} className="bg-card border rounded-lg p-4 text-center hover:shadow-elegant hover:border-primary transition-all text-sm font-medium">
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Soft CTA */}
        <section className="bg-muted/40 py-14">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-3">Serrure toujours bloquée ?</h2>
              <p className="text-muted-foreground mb-6">
                N'insistez pas au risque de casser votre clé ou votre cylindre. Concessionnaire officiel
                Point Fort Fichet, notre serrurier intervient 24h/24 à Lille en 20-30 min, devis annoncé avant.
              </p>
              <a href={PHONE_HREF} className="inline-flex items-center gap-2 bg-urgent text-urgent-foreground font-bold text-lg px-6 min-h-14 rounded-lg hover:bg-urgent/90 transition-colors">
                <Phone className="h-5 w-5" aria-hidden="true" /> {PHONE_DISPLAY}
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default SerrureBloqueeQueFaire;
