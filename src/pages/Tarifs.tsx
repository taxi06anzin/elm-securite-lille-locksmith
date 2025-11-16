import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import JsonLd from "@/components/JsonLd";
import { CallButton } from "@/components/ui/button-variants";
import { Euro, Clock, Shield, CheckCircle } from "lucide-react";

const Tarifs = () => {
  const prestations = [
    {
      service: "Ouverture de porte claquée",
      tarif: "À partir de 89€",
      details: "Sans casse si possible, horaires normaux"
    },
    {
      service: "Changement de serrure standard",
      tarif: "À partir de 150€",
      details: "Pose comprise, serrure 3 points"
    },
    {
      service: "Changement de cylindre",
      tarif: "À partir de 90€",
      details: "Cylindre européen standard"
    },
    {
      service: "Installation serrure haute sécurité",
      tarif: "À partir de 300€",
      details: "Serrure certifiée A2P, pose incluse"
    },
    {
      service: "Blindage de porte",
      tarif: "À partir de 800€",
      details: "Tôle d'acier + serrure renforcée"
    },
    {
      service: "Porte blindée complète",
      tarif: "Sur devis",
      details: "Certification A2P, plusieurs niveaux disponibles"
    },
    {
      service: "Dépannage urgence (nuit/week-end)",
      tarif: "Supplément +40€",
      details: "En dehors des horaires normaux"
    },
    {
      service: "Déplacement à Lille et MEL",
      tarif: "Inclus",
      details: "Gratuit pour toute intervention"
    }
  ];

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
          content="Tarifs serrurier à Lille : ouverture porte dès 89€, changement serrure dès 150€. Devis gratuit, prix fixes sans surprise ☎ 06 21 66 08 67" 
        />
        <link rel="canonical" href="https://serrurier-urgence-lille.fr/tarifs" />
      </Helmet>
      <JsonLd />
      
      <div className="min-h-screen bg-background">
        <Header />
        
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
              <h2 className="text-3xl font-bold mb-8 text-center">
                Grille tarifaire serrurier Lille
              </h2>

              <div className="bg-card border rounded-lg shadow-card overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-primary text-primary-foreground">
                      <tr>
                        <th className="px-6 py-4 text-left font-bold">Prestation</th>
                        <th className="px-6 py-4 text-left font-bold">Tarif TTC</th>
                        <th className="px-6 py-4 text-left font-bold">Détails</th>
                      </tr>
                    </thead>
                    <tbody>
                      {prestations.map((prestation, index) => (
                        <tr key={index} className={index % 2 === 0 ? "bg-muted/50" : ""}>
                          <td className="px-6 py-4 font-medium">{prestation.service}</td>
                          <td className="px-6 py-4 text-primary font-bold">{prestation.tarif}</td>
                          <td className="px-6 py-4 text-sm text-muted-foreground">{prestation.details}</td>
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
                  <li>• <strong>Nuit, week-end, jours fériés</strong> : supplément urgence de 40€</li>
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

          <section id="contact" className="py-16">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">
                Demander un devis gratuit
              </h2>
              <ContactForm />
            </div>
          </section>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Tarifs;
