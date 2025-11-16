import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TrustBadges from "@/components/TrustBadges";
import ContactForm from "@/components/ContactForm";
import JsonLd from "@/components/JsonLd";
import InternalLinks from "@/components/InternalLinks";
import Breadcrumb from "@/components/Breadcrumb";
import OptimizedImage from "@/components/OptimizedImage";
import { CallButton } from "@/components/ui/button-variants";
import { MapPin, CheckCircle, Clock } from "lucide-react";
import cleCassee from "@/assets/cle-cassee.png";

const SerrurierMadeleine = () => {
  const situations = [
    "Perte de clés",
    "Blocage multipoints",
    "Clé cassée",
    "Porte claquée"
  ];

  const quartiers = [
    "Centre", "Botanique", "Romarin", "Beaumarchais", "Pré Catelan"
  ];

  return (
    <>
      <Helmet>
        <title>Serrurier La Madeleine – Dépannage sur tous les quartiers | ELM SÉCURITÉ</title>
        <meta 
          name="description" 
          content="Serrurier à La Madeleine 24/7. Intervention rapide tous quartiers : Centre, Botanique, Romarin, Beaumarchais. Dépannage urgent ☎ 06 21 66 08 67" 
        />
        <link rel="canonical" href="https://serrurier-urgence-lille.fr/serrurier-la-madeleine" />
      </Helmet>
      <JsonLd />
      
      <div className="min-h-screen bg-background">
        <Header />
        
        <section className="relative py-20 bg-gradient-to-br from-secondary to-primary">
          <div className="container mx-auto px-4 text-secondary-foreground">
            <div className="max-w-3xl">
              <h1 className="text-5xl font-bold mb-6">
                Serrurier La Madeleine – Dépannage sur tous les quartiers
              </h1>
              <p className="text-xl mb-8 opacity-90">
                Couverture complète du centre, Botanique, Romarin, Beaumarchais et Pré Catelan.
              </p>
              <CallButton size="lg" />
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4">
          <div className="-mt-8">
            <TrustBadges />
          </div>

          <section className="py-16 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                Dépannage serrurier
              </h2>
              
              <p className="text-muted-foreground mb-6">
                Situations traitées :
              </p>

              <div className="space-y-3 mb-8">
                {situations.map((situation, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>{situation}</span>
                  </div>
                ))}
              </div>

              <div className="bg-muted border-l-4 border-primary p-4 rounded-lg">
                <h3 className="font-bold mb-2">Disponibilité complète</h3>
                <p className="text-sm text-muted-foreground">
                  Service disponible 24 heures sur 24, tous les jours de la semaine, 
                  week-ends et jours fériés inclus
                </p>
              </div>
            </div>

            <div className="relative h-96 rounded-lg overflow-hidden shadow-elegant">
              <img src={cleCassee} alt="Dépannage serrurier La Madeleine" className="w-full h-full object-cover" />
            </div>
          </section>

          <section className="py-16 bg-muted -mx-4 px-4 md:mx-0 md:rounded-lg">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-center">
                Quartiers couverts à La Madeleine
              </h2>

              <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4 mb-12">
                {quartiers.map((quartier, index) => (
                  <div key={index} className="bg-background border rounded-lg p-4 text-center shadow-card hover:shadow-elegant transition-shadow">
                    <MapPin className="h-5 w-5 text-primary mx-auto mb-2" />
                    <span className="text-sm font-medium">{quartier}</span>
                  </div>
                ))}
              </div>

              <p className="text-center text-muted-foreground max-w-2xl mx-auto">
                Intervention rapide dans tous les secteurs grâce à la proximité avec Lille et aux accès directs
              </p>
            </div>
          </section>

          <section className="py-16">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">
                Intervention rapide
              </h2>
              
              <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Déplacement selon axes rapides reliant La Madeleine à Lille et Saint-André.
              </p>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-card p-6 rounded-lg border shadow-card text-center">
                  <Clock className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-bold mb-2">Rapidité</h3>
                  <p className="text-sm text-muted-foreground">
                    Intervention optimisée grâce aux axes rapides
                  </p>
                </div>

                <div className="bg-card p-6 rounded-lg border shadow-card text-center">
                  <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-bold mb-2">Proximité</h3>
                  <p className="text-sm text-muted-foreground">
                    Couverture complète de tous les secteurs
                  </p>
                </div>

                <div className="bg-card p-6 rounded-lg border shadow-card text-center">
                  <CheckCircle className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-bold mb-2">Disponibilité</h3>
                  <p className="text-sm text-muted-foreground">
                    Service accessible 24h/24 et 7j/7
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section id="contact" className="py-16">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold mb-4 text-center">
                Contact
              </h2>
              <p className="text-center text-muted-foreground mb-8">
                Téléphone : <a href="tel:0621660867" className="text-primary font-bold hover:underline">06 21 66 08 67</a>
              </p>
              <ContactForm />
            </div>
          </section>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default SerrurierMadeleine;
