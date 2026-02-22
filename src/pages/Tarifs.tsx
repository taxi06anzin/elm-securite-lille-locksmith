import { Helmet } from "react-helmet";
import ContactForm from "@/components/ContactForm";
import JsonLd from "@/components/JsonLd";
import FAQ from "@/components/FAQ";
import { CallButton } from "@/components/ui/button-variants";
import { Euro, Clock, Shield, CheckCircle } from "lucide-react";

const prestationsFrequentes = [
  { prestation: "Ouverture porte claquée", jour: "89 €", nuit: "129 €" },
  { prestation: "Ouverture porte simple fermée", jour: "109 €", nuit: "149 €" },
  { prestation: "Ouverture porte blindée", jour: "150 €", nuit: "190 €" },
  { prestation: "Ouverture porte Fichet", jour: "220 €", nuit: "260 €" },
  { prestation: "Changement cylindre standard", jour: "100–150 €", nuit: "+30 %" },
  { prestation: "Changement cylindre renforcé", jour: "150–220 €", nuit: "+30 %" },
  { prestation: "Changement cylindre haute sécu", jour: "220–350 €", nuit: "+30 %" },
  { prestation: "Réparation serrure", jour: "100–150 €", nuit: "+30 %" },
  { prestation: "Mise en sécurité après effraction", jour: "Sur devis", nuit: "Sur devis" },
  { prestation: "Devis / Diagnostic", jour: "Gratuit", nuit: "Gratuit" }
];

const grilleBase = [
  { element: "Main d'œuvre (horaire)", tarif: "60 €/h" },
  { element: "Déplacement Lille", tarif: "30 €" },
  { element: "Déplacement hors Lille", tarif: "40 €" },
  { element: "Majoration nuit (20h–8h)", tarif: "+30 %" },
  { element: "Majoration dimanche/fériés", tarif: "+50 %" }
];

const faqTarifs = [
  {
    question: "Le déplacement est-il inclus dans le prix ?",
    answer: "Non, un forfait déplacement de 30€ s'ajoute sur Lille (40€ hors Lille). Il vous est indiqué avant toute intervention."
  },
  {
    question: "Les tarifs sont-ils majorés la nuit ?",
    answer: "Oui, une majoration de 30% s'applique entre 20h et 8h, et 50% les dimanches et jours fériés."
  },
  {
    question: "Acceptez-vous les prises en charge assurance ?",
    answer: "Oui, nous sommes agréés par les assurances et pouvons vous accompagner dans votre déclaration de sinistre."
  }
];

const Tarifs = () => {
  const garanties = [
    "Devis gratuit et détaillé avant toute intervention",
    "Pas de frais cachés, tarifs annoncés à l'avance",
    "Paiement après intervention seulement",
    "Garantie sur toutes nos prestations",
    "Facture détaillée remise après travaux",
    "Matériel de qualité professionnelle"
  ];

  return (
    <>
      <Helmet>
        <title>Tarifs Serrurier Lille - Prix Transparents | ELM SÉCURITÉ</title>
        <meta 
          name="description" 
          content="Tarifs serrurier Lille : ouverture porte dès 89€, changement serrure dès 100€. Grille complète TTC, devis gratuit. Appelez le 06 21 66 08 67" 
        />
        <link rel="canonical" href="https://serrurier-urgence-lille.fr/tarifs" />
      </Helmet>
      <JsonLd />
      
      <div className="min-h-screen bg-background">
        
        <section className="relative py-20 bg-gradient-to-br from-secondary to-primary">
          <div className="container mx-auto px-4 text-secondary-foreground">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-5xl font-bold mb-6">
                Tarifs serrurier Lille – Prix annoncés avant intervention
              </h1>
              <p className="text-xl mb-8 opacity-90">
                Grille tarifaire indicative. Forfait journée, nuit, dimanche et jours fériés. 
                Surcoûts encadrés. Aucun ajout non annoncé.
              </p>
              <CallButton size="lg" />
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4">
          <section className="py-16">
            <div className="grid md:grid-cols-3 gap-6 mb-16">
              <div className="text-center p-6 bg-card border rounded-lg shadow-card">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Euro className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-bold text-lg mb-2">Prix fixes</h3>
                <p className="text-sm text-muted-foreground">
                  Tarifs annoncés à l'avance, pas de surprise
                </p>
              </div>

              <div className="text-center p-6 bg-card border rounded-lg shadow-card">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-bold text-lg mb-2">Devis gratuit</h3>
                <p className="text-sm text-muted-foreground">
                  Établi gratuitement avant intervention
                </p>
              </div>

              <div className="text-center p-6 bg-card border rounded-lg shadow-card">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-bold text-lg mb-2">Déplacement inclus</h3>
                <p className="text-sm text-muted-foreground">
                  Gratuit à Lille et dans toute la MEL
                </p>
              </div>
            </div>

            <div className="max-w-5xl mx-auto">
              <p className="text-muted-foreground mb-8 text-center max-w-2xl mx-auto">
                Tous nos tarifs sont communiqués avant intervention sous forme de devis écrit et signé. Pas de frais cachés, pas de mauvaise surprise.
              </p>

              <h2 className="text-3xl font-bold mb-4 text-center">
                Prestations fréquentes (TTC)
              </h2>
              <div className="bg-card border rounded-lg shadow-card overflow-hidden mb-10">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-primary text-primary-foreground">
                      <tr>
                        <th className="px-6 py-4 text-left font-bold">Prestation</th>
                        <th className="px-6 py-4 text-left font-bold">Jour (8h–20h)</th>
                        <th className="px-6 py-4 text-left font-bold">Nuit / Week-end</th>
                      </tr>
                    </thead>
                    <tbody>
                      {prestationsFrequentes.map((row, index) => (
                        <tr key={index} className={index % 2 === 0 ? "bg-muted/50" : ""}>
                          <td className="px-6 py-4 font-medium">{row.prestation}</td>
                          <td className="px-6 py-4 text-primary font-bold">{row.jour}</td>
                          <td className="px-6 py-4 text-primary font-bold">{row.nuit}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <h2 className="text-3xl font-bold mb-4 text-center">
                Grille tarifaire de base
              </h2>
              <div className="bg-card border rounded-lg shadow-card overflow-hidden mb-10">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-primary text-primary-foreground">
                      <tr>
                        <th className="px-6 py-4 text-left font-bold">Élément</th>
                        <th className="px-6 py-4 text-left font-bold">Tarif</th>
                      </tr>
                    </thead>
                    <tbody>
                      {grilleBase.map((row, index) => (
                        <tr key={index} className={index % 2 === 0 ? "bg-muted/50" : ""}>
                          <td className="px-6 py-4 font-medium">{row.element}</td>
                          <td className="px-6 py-4 text-primary font-bold">{row.tarif}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="mt-8 bg-accent/10 border-l-4 border-accent p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                  <Clock className="h-5 w-5 text-accent" />
                  Tarifs variables selon urgence
                </h3>
                <p className="text-muted-foreground mb-2">
                  Nos tarifs peuvent varier selon le moment de l'intervention :
                </p>
                <ul className="space-y-1 text-sm text-muted-foreground ml-4">
                  <li>• <strong>Horaires normaux</strong> (lundi-vendredi 8h-19h) : tarifs standards</li>
                  <li>• <strong>Nuit, week-end, jours fériés</strong> : majoration 30% ou 50% selon le cas</li>
                  <li>• <strong>Intervention complexe</strong> : devis personnalisé gratuit</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="py-16 bg-muted -mx-4 px-4 md:mx-0 md:rounded-lg">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-center">
                Nos garanties tarifaires
              </h2>
              
              <div className="grid md:grid-cols-2 gap-4">
                {garanties.map((garantie, index) => (
                  <div key={index} className="flex items-start gap-3 bg-background p-4 rounded-lg">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>{garantie}</span>
                  </div>
                ))}
              </div>

              <div className="text-center mt-12">
                <h3 className="font-bold text-xl mb-4">
                  Pourquoi nos tarifs sont-ils compétitifs ?
                </h3>
                <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
                  Chez ELM SÉCURITÉ, nous croyons en la transparence totale. Pas d'intermédiaires, 
                  pas de frais cachés : vous payez uniquement le service rendu avec un matériel de qualité 
                  professionnelle. Notre objectif est de vous offrir le meilleur rapport qualité-prix 
                  pour tous vos besoins serrurier à Lille.
                </p>
                <CallButton size="lg" />
              </div>
            </div>
          </section>

          <section className="py-16">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-center">
                Comment sont calculés nos tarifs ?
              </h2>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-card p-6 rounded-lg border shadow-card">
                  <div className="text-4xl font-bold text-primary mb-2">1</div>
                  <h3 className="font-bold mb-2">Diagnostic</h3>
                  <p className="text-sm text-muted-foreground">
                    Évaluation du problème et de la solution adaptée sur place
                  </p>
                </div>

                <div className="bg-card p-6 rounded-lg border shadow-card">
                  <div className="text-4xl font-bold text-primary mb-2">2</div>
                  <h3 className="font-bold mb-2">Devis gratuit</h3>
                  <p className="text-sm text-muted-foreground">
                    Présentation du tarif fixe incluant main d'œuvre et matériel
                  </p>
                </div>

                <div className="bg-card p-6 rounded-lg border shadow-card">
                  <div className="text-4xl font-bold text-primary mb-2">3</div>
                  <h3 className="font-bold mb-2">Intervention</h3>
                  <p className="text-sm text-muted-foreground">
                    Réalisation des travaux après votre accord, paiement à la fin
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="py-16 bg-muted -mx-4 px-4 md:mx-0 md:rounded-lg">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">
                Questions fréquentes sur nos tarifs
              </h2>
              <FAQ items={faqTarifs} />
            </div>
          </section>

          <section id="contact" className="py-16">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">
                Demander un devis gratuit
              </h2>
              <ContactForm />
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Tarifs;
