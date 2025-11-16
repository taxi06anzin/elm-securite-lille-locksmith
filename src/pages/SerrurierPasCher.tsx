import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import JsonLd from "@/components/JsonLd";
import { CallButton } from "@/components/ui/button-variants";
import { Euro, TrendingDown, CheckCircle } from "lucide-react";

const SerrurierPasCher = () => {
  return (
    <>
      <Helmet>
        <title>Serrurier Pas Cher Lille – Tarifs Accessibles | ELM SÉCURITÉ</title>
        <meta 
          name="description" 
          content="Serrurier pas cher à Lille. Tarifs accessibles et annoncés à l'avance. Tarification transparente, déplacements optimisés ☎ 06 21 66 08 67" 
        />
        <link rel="canonical" href="https://serrurier-urgence-lille.fr/serrurier-pas-cher" />
      </Helmet>
      <JsonLd />
      
      <div className="min-h-screen bg-background">
        <Header />
        
        <section className="relative py-20 bg-gradient-to-br from-secondary to-primary">
          <div className="container mx-auto px-4 text-secondary-foreground">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-5xl font-bold mb-6">
                Serrurier pas cher Lille – Tarifs accessibles et annoncés à l'avance
              </h1>
              <p className="text-xl mb-8 opacity-90">
                Objectif : fournir un tarif annoncé avant toute intervention. 
                Prix forfaitaires selon le type d'action.
              </p>
              <CallButton size="lg" />
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 py-16">
          <section className="mb-16">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-card border rounded-lg shadow-card">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Euro className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-bold text-lg mb-2">Tarification transparente</h3>
                <p className="text-sm text-muted-foreground">
                  Prix forfaitaires annoncés avant intervention
                </p>
              </div>

              <div className="text-center p-6 bg-card border rounded-lg shadow-card">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <TrendingDown className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-bold text-lg mb-2">Déplacements optimisés</h3>
                <p className="text-sm text-muted-foreground">
                  Intervention dans un périmètre défini pour limiter les coûts
                </p>
              </div>

              <div className="text-center p-6 bg-card border rounded-lg shadow-card">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-bold text-lg mb-2">Sans surprise</h3>
                <p className="text-sm text-muted-foreground">
                  Aucun ajout non annoncé
                </p>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">
                Comparaison de prix jour / nuit
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-card border-2 border-primary rounded-lg p-6">
                  <h3 className="font-bold text-xl mb-4 text-center">Tarifs de jour</h3>
                  <p className="text-sm text-muted-foreground text-center mb-6">
                    Lundi au vendredi, 8h-19h
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between items-center pb-3 border-b">
                      <span>Ouverture porte claquée</span>
                      <span className="font-bold text-primary">89€</span>
                    </div>
                    <div className="flex justify-between items-center pb-3 border-b">
                      <span>Changement cylindre</span>
                      <span className="font-bold text-primary">90€</span>
                    </div>
                    <div className="flex justify-between items-center pb-3 border-b">
                      <span>Changement serrure</span>
                      <span className="font-bold text-primary">150€</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Déplacement Lille/MEL</span>
                      <span className="font-bold text-primary">Inclus</span>
                    </div>
                  </div>
                </div>

                <div className="bg-card border-2 border-accent rounded-lg p-6">
                  <h3 className="font-bold text-xl mb-4 text-center">Tarifs de nuit</h3>
                  <p className="text-sm text-muted-foreground text-center mb-6">
                    Soirs, nuits, week-ends, jours fériés
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between items-center pb-3 border-b">
                      <span>Ouverture porte claquée</span>
                      <span className="font-bold text-accent">129€</span>
                    </div>
                    <div className="flex justify-between items-center pb-3 border-b">
                      <span>Changement cylindre</span>
                      <span className="font-bold text-accent">130€</span>
                    </div>
                    <div className="flex justify-between items-center pb-3 border-b">
                      <span>Changement serrure</span>
                      <span className="font-bold text-accent">190€</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Déplacement Lille/MEL</span>
                      <span className="font-bold text-accent">Inclus</span>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-center mt-8 text-sm text-muted-foreground">
                Présentation claire des écarts jour/nuit sans incitation commerciale
              </p>
            </div>
          </section>

          <section className="mb-16 bg-muted -mx-4 px-4 py-16 md:mx-0 md:rounded-lg">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">
                Notre engagement tarifaire
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-background p-6 rounded-lg">
                  <h3 className="font-bold text-lg mb-3">Avant l'intervention</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>✓ Diagnostic téléphonique du problème</li>
                    <li>✓ Annonce du tarif applicable</li>
                    <li>✓ Confirmation du délai d'arrivée</li>
                    <li>✓ Pas de frais de déplacement facturés séparément</li>
                  </ul>
                </div>

                <div className="bg-background p-6 rounded-lg">
                  <h3 className="font-bold text-lg mb-3">Pendant l'intervention</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>✓ Confirmation du tarif sur place</li>
                    <li>✓ Explication des opérations nécessaires</li>
                    <li>✓ Validation avant début des travaux</li>
                    <li>✓ Pas de facturation au temps passé</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">
                Comment limiter les coûts ?
              </h2>
              
              <div className="grid md:grid-cols-3 gap-6 mt-12">
                <div className="bg-card p-6 rounded-lg border">
                  <div className="text-4xl font-bold text-primary mb-2">1</div>
                  <h3 className="font-bold mb-2">Appeler en journée</h3>
                  <p className="text-sm text-muted-foreground">
                    Les interventions en horaires normaux sont moins coûteuses
                  </p>
                </div>

                <div className="bg-card p-6 rounded-lg border">
                  <div className="text-4xl font-bold text-primary mb-2">2</div>
                  <h3 className="font-bold mb-2">Décrire précisément</h3>
                  <p className="text-sm text-muted-foreground">
                    Une bonne description permet un diagnostic rapide
                  </p>
                </div>

                <div className="bg-card p-6 rounded-lg border">
                  <div className="text-4xl font-bold text-primary mb-2">3</div>
                  <h3 className="font-bold mb-2">Comparer</h3>
                  <p className="text-sm text-muted-foreground">
                    Demander plusieurs devis avant intervention non urgente
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section id="contact">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">
                Demander un tarif précis
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

export default SerrurierPasCher;
