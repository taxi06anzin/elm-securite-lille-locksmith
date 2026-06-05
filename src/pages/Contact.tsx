import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import ContactForm from "@/components/ContactForm";
import JsonLd from "@/components/JsonLd";
import { CallButton } from "@/components/ui/button-variants";
import { MapPin, Phone, Clock, Mail } from "lucide-react";

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact Serrurier Lille - Intervention Immédiate | ELM SÉCURITÉ</title>
        <meta 
          name="description" 
          content="Contactez ELM SÉCURITÉ, serrurier à Lille. ☎ 06 21 66 08 67. Disponible 24/7. 143 Rue du Molinel, 59800 Lille. Devis gratuit." 
        />
        <link rel="canonical" href="https://serrurier-urgence-lille.fr/contact/" />
      </Helmet>
      <JsonLd />
      
      <div className="min-h-screen bg-background">
        
        <section className="relative py-20 bg-gradient-to-br from-secondary to-primary">
          <div className="container mx-auto px-4 text-secondary-foreground">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-5xl font-bold mb-6">
                Contact serrurier Lille – Intervention immédiate
              </h1>
              <p className="text-xl mb-8 opacity-90">
                Appel direct au 06 21 66 08 67. Formulaire disponible pour devis technique. 
                Possibilité d'ajouter une photo du problème.
              </p>
              <CallButton size="lg" />
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 py-16">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Informations de contact */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Nos coordonnées</h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4 bg-card p-6 rounded-lg border shadow-card">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Téléphone</h3>
                    <a href="tel:0621660867" className="text-xl text-primary font-bold hover:underline">
                      06 21 66 08 67
                    </a>
                    <p className="text-sm text-muted-foreground mt-1">
                      Appel direct pour intervention immédiate
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-card p-6 rounded-lg border shadow-card">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Adresse</h3>
                    <p className="text-foreground">
                      143 Rue du Molinel<br />
                      59800 Lille
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">
                      Zone d'intervention : Lille et toute la MEL
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-card p-6 rounded-lg border shadow-card">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Horaires</h3>
                    <p className="text-foreground font-semibold">
                      Disponible 24h/24 et 7j/7
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">
                      Y compris nuits, week-ends et jours fériés
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 bg-accent/10 border-l-4 border-accent p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-2">Intervention d'urgence</h3>
                <p className="text-muted-foreground">
                  Pour une intervention urgente (porte claquée, serrure cassée, cambriolage), 
                  appelez-nous directement au <a href="tel:0621660867" className="text-primary font-bold hover:underline">06 21 66 08 67</a>. 
                  Notre serrurier arrive en 20-30 minutes maximum à Lille et dans la MEL.
                </p>
              </div>

              <div className="mt-8">
                <h3 className="font-bold text-xl mb-4">Zone d'intervention</h3>
                <p className="text-muted-foreground mb-3">
                  ELM SÉCURITÉ intervient dans toute la Métropole Européenne de Lille :
                </p>
                <div className="text-sm text-muted-foreground leading-relaxed">
                  Lille Centre, Lille-Sud, Wazemmes, Vauban, Fives, Gambetta, Rue Nationale, 
                  Lomme, Hellemmes, Villeneuve-d'Ascq, Ronchin, La Madeleine, Lambersart, 
                  Mons-en-Barœul, Marcq-en-Barœul, Faches-Thumesnil, Wattignies, Loos, Seclin, 
                  Roubaix, Tourcoing, Wasquehal, Croix, Hem et toutes les communes de la MEL.
                </div>
              </div>
            </div>

            {/* Formulaire de contact */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Demander un devis gratuit</h2>
              <ContactForm />
              
              <div className="mt-8 p-6 bg-muted rounded-lg">
                <h3 className="font-bold mb-3">Que se passe-t-il après l'envoi ?</h3>
                <ol className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-primary">1.</span>
                    <span>Nous recevons votre demande et analysons votre besoin</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-primary">2.</span>
                    <span>Nous vous contactons rapidement pour confirmer les détails</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-primary">3.</span>
                    <span>Nous fixons un rendez-vous ou intervenons en urgence</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-primary">4.</span>
                    <span>Devis gratuit sur place avant toute intervention</span>
                  </li>
                </ol>
              </div>
            </div>
          </div>

          {/* Carte Google Maps */}
          <section className="mt-16 max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Nous situer</h2>
            <div className="rounded-lg overflow-hidden border shadow-card">
              <iframe
                title="Localisation ELM Sécurité — 143 Rue du Molinel, 59800 Lille"
                src="https://www.google.com/maps?q=143+Rue+du+Molinel,+59800+Lille&output=embed"
                width="100%"
                height="400"
                loading="lazy"
                style={{ border: 0 }}
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </section>

          {/* Services proposés */}
          <section className="mt-16 max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Nos services de serrurier</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <Link to="/depannage-serrurerie" className="bg-card p-5 rounded-lg border text-center shadow-card hover:shadow-elegant hover:border-primary transition-all">
                <h3 className="font-bold mb-2">Dépannage 24/7</h3>
                <p className="text-sm text-muted-foreground">
                  Intervention d'urgence jour et nuit
                </p>
              </Link>
              <Link to="/ouverture-porte" className="bg-card p-5 rounded-lg border text-center shadow-card hover:shadow-elegant hover:border-primary transition-all">
                <h3 className="font-bold mb-2">Ouverture de porte</h3>
                <p className="text-sm text-muted-foreground">
                  Sans casse si possible
                </p>
              </Link>
              <Link to="/changement-serrure" className="bg-card p-5 rounded-lg border text-center shadow-card hover:shadow-elegant hover:border-primary transition-all">
                <h3 className="font-bold mb-2">Changement serrure</h3>
                <p className="text-sm text-muted-foreground">
                  Toutes marques et modèles
                </p>
              </Link>
              <Link to="/porte-blindee" className="bg-card p-5 rounded-lg border text-center shadow-card hover:shadow-elegant hover:border-primary transition-all">
                <h3 className="font-bold mb-2">Porte blindée</h3>
                <p className="text-sm text-muted-foreground">
                  Installation et blindage
                </p>
              </Link>
            </div>
            <h2 className="text-2xl font-bold mb-6 text-center mt-12">Zones d'intervention</h2>
            <p className="text-center text-muted-foreground mb-6">
              Nous intervenons dans toute la Métropole Européenne de Lille. Consultez nos pages par ville :
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link to="/serrurier-lille" className="px-4 py-2 bg-primary/10 text-primary rounded-lg font-medium hover:bg-primary hover:text-primary-foreground transition-colors">
                Serrurier Lille
              </Link>
              <Link to="/serrurier-roubaix" className="px-4 py-2 bg-primary/10 text-primary rounded-lg font-medium hover:bg-primary hover:text-primary-foreground transition-colors">
                Serrurier Roubaix
              </Link>
              <Link to="/tarifs" className="px-4 py-2 bg-primary/10 text-primary rounded-lg font-medium hover:bg-primary hover:text-primary-foreground transition-colors">
                Tarifs
              </Link>
              <Link to="/villes-couvertes" className="px-4 py-2 bg-primary/10 text-primary rounded-lg font-medium hover:bg-primary hover:text-primary-foreground transition-colors">
                Toutes les communes
              </Link>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Contact;
