import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import ContactForm from "@/components/ContactForm";
import JsonLd from "@/components/JsonLd";
import { CallButton } from "@/components/ui/button-variants";
import { PHONE_DISPLAY, PHONE_HREF } from "@/config/site";
import { Euro, TrendingDown, CheckCircle, XCircle, AlertTriangle, ShieldCheck, Phone } from "lucide-react";

const SerrurierPasCher = () => {
  return (
    <>
      <Helmet>
        <title>Serrurier pas cher Lille — tarif honnête, sans arnaque | ELM SÉCURITÉ</title>
        <meta
          name="description"
          content="Serrurier pas cher ET honnête à Lille : tarif annoncé avant, devis gratuit, facture conforme. Comment éviter les arnaques de serrurier et reconnaître un pro fiable. ☎ 06 21 66 08 67"
        />
        <link rel="canonical" href="https://serrurier-urgence-lille.fr/serrurier-pas-cher/" />
      </Helmet>
      <JsonLd />
      
      <div className="min-h-screen bg-background">
        
        <section className="relative py-20 bg-gradient-to-br from-secondary to-primary">
          <div className="container mx-auto px-4 text-secondary-foreground">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-5xl font-bold mb-6">
                Serrurier pas cher ET honnête à Lille — sans arnaque
              </h1>
              <p className="text-xl mb-8 opacity-90">
                Pas cher ne veut pas dire arnaque. Tarif annoncé avant toute intervention,
                devis gratuit et facture conforme : comment reconnaître un serrurier honnête
                à Lille et éviter les pièges les plus courants.
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

          {/* Pas cher ne veut pas dire arnaque */}
          <section className="mb-16">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-4 text-center">
                Pas cher ne veut pas dire arnaque
              </h2>
              <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
                Chercher un serrurier pas cher à Lille est légitime. Le piège, c'est de
                confondre « pas cher » et « annonce trop belle pour être vraie ». Voici
                comment reconnaître un serrurier honnête et repérer les pièges classiques.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-card border-2 border-primary/40 rounded-lg p-6">
                  <h3 className="font-bold text-xl mb-4 flex items-center gap-2">
                    <CheckCircle className="h-6 w-6 text-primary" aria-hidden="true" />
                    Les bons signes d'un serrurier honnête
                  </h3>
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    <li className="flex gap-2">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                      <span>Tarif <strong>annoncé clairement avant</strong> le déplacement, par téléphone.</span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                      <span><strong>Devis gratuit</strong> confirmé sur place, validé avant les travaux.</span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                      <span><strong>SIRET et statut concessionnaire Fichet vérifiables</strong>, adresse physique réelle.</span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                      <span><strong>Facture conforme</strong> remise systématiquement (utile pour l'assurance).</span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                      <span>Ouverture <strong>sans casse privilégiée</strong> avant tout remplacement coûteux.</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-card border-2 border-destructive/40 rounded-lg p-6">
                  <h3 className="font-bold text-xl mb-4 flex items-center gap-2">
                    <AlertTriangle className="h-6 w-6 text-destructive" aria-hidden="true" />
                    Les pièges à fuir
                  </h3>
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    <li className="flex gap-2">
                      <XCircle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" aria-hidden="true" />
                      <span>Annonces <strong>« ouverture 19€ »</strong> : appât, surcoût garanti une fois sur place.</span>
                    </li>
                    <li className="flex gap-2">
                      <XCircle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" aria-hidden="true" />
                      <span><strong>Numéros surtaxés</strong> et standards qui refusent d'annoncer un prix.</span>
                    </li>
                    <li className="flex gap-2">
                      <XCircle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" aria-hidden="true" />
                      <span><strong>Surfacturation sur place</strong> : « perçage obligatoire », pièces inventées.</span>
                    </li>
                    <li className="flex gap-2">
                      <XCircle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" aria-hidden="true" />
                      <span>Paiement <strong>en espèces sans facture</strong>, pas de devis écrit.</span>
                    </li>
                    <li className="flex gap-2">
                      <XCircle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" aria-hidden="true" />
                      <span>Aucune adresse, aucun SIRET, société introuvable.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Comment ELM garde des prix justes */}
          <section className="mb-16">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-4 text-center">
                Comment nous gardons des prix justes
              </h2>
              <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
                Chez ELM SÉCURITÉ, un tarif honnête ne repose pas sur une promotion miracle
                mais sur des règles simples et tenues.
              </p>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-card border rounded-lg p-6 text-center">
                  <ShieldCheck className="h-8 w-8 text-primary mx-auto mb-3" aria-hidden="true" />
                  <h3 className="font-bold mb-2">Ouverture sans casse dès 89€</h3>
                  <p className="text-sm text-muted-foreground">
                    On privilégie la méthode non destructive : pas de perçage inutile,
                    donc pas de serrure à remplacer.
                  </p>
                </div>
                <div className="bg-card border rounded-lg p-6 text-center">
                  <TrendingDown className="h-8 w-8 text-primary mx-auto mb-3" aria-hidden="true" />
                  <h3 className="font-bold mb-2">Déplacement inclus</h3>
                  <p className="text-sm text-muted-foreground">
                    Le déplacement à Lille et dans la MEL est compris dans le tarif annoncé.
                    Aucune ligne « frais de route » ajoutée.
                  </p>
                </div>
                <div className="bg-card border rounded-lg p-6 text-center">
                  <Euro className="h-8 w-8 text-primary mx-auto mb-3" aria-hidden="true" />
                  <h3 className="font-bold mb-2">Pas d'acompte</h3>
                  <p className="text-sm text-muted-foreground">
                    Vous ne payez qu'après le travail réalisé et validé, sur facture.
                    Aucun versement avant intervention.
                  </p>
                </div>
              </div>

              <div className="mt-8 bg-muted rounded-lg p-6 text-center">
                <p className="text-muted-foreground mb-4">
                  Quelques tarifs repères en journée : <strong>ouverture porte claquée dès 89€</strong>,
                  <strong> changement de cylindre dès 90€</strong>, déplacement Lille/MEL inclus.
                  Le détail jour/nuit complet figure sur notre grille.
                </p>
                <Link
                  to="/tarifs"
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-bold px-6 min-h-12 rounded-lg hover:bg-primary/90 transition-colors"
                >
                  <Euro className="h-5 w-5" aria-hidden="true" /> Voir la grille tarifaire complète
                </Link>
              </div>
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

          {/* Maillage interne */}
          <section className="mb-16">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold mb-6 text-center">Pour aller plus loin</h2>
              <div className="grid sm:grid-cols-3 gap-4">
                <a
                  href="/tarifs"
                  className="bg-card border rounded-lg p-5 text-center hover:shadow-elegant hover:border-primary transition-all font-medium"
                >
                  Grille tarifaire complète
                </a>
                <a
                  href="/serrurier-agree-assurance-lille"
                  className="bg-card border rounded-lg p-5 text-center hover:shadow-elegant hover:border-primary transition-all font-medium"
                >
                  Serrurier agréé assurance
                </a>
                <a
                  href="/ouverture-porte"
                  className="bg-card border rounded-lg p-5 text-center hover:shadow-elegant hover:border-primary transition-all font-medium"
                >
                  Ouverture de porte
                </a>
              </div>
            </div>
          </section>

          <section id="contact">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-center">
                Demander un tarif honnête, annoncé à l'avance
              </h2>
              <div className="text-center mb-8">
                <a
                  href={PHONE_HREF}
                  className="inline-flex items-center gap-2 bg-urgent text-urgent-foreground font-bold text-lg px-6 min-h-14 rounded-lg hover:bg-urgent/90 transition-colors"
                >
                  <Phone className="h-5 w-5" aria-hidden="true" /> {PHONE_DISPLAY}
                </a>
              </div>
              <ContactForm />
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default SerrurierPasCher;
