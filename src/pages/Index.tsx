import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TrustBadges from "@/components/TrustBadges";
import ContactForm from "@/components/ContactForm";
import JsonLd from "@/components/JsonLd";
import FAQ from "@/components/FAQ";
import { CallButton, CtaButton } from "@/components/ui/button-variants";
import { Phone, Clock, MapPin, Shield, Wrench, Lock, DoorOpen } from "lucide-react";
import heroImage from "@/assets/hero-locksmith.jpg";
import porteBlindeeImage from "@/assets/porte-blindee.jpg";
import serrureImage from "@/assets/serrure-cylindre.jpg";
import changementSerrureImage from "@/assets/changement-serrure.jpg";
import interventionImage from "@/assets/intervention-urgence.png";
import ouverturePorteImage from "@/assets/ouverture-fine.png";

const Index = () => {
  const services = [
    {
      icon: DoorOpen,
      title: "Ouverture de porte",
      description: "Porte claquée ou bloquée ? Intervention rapide sans casse si possible.",
      link: "/ouverture-porte"
    },
    {
      icon: Lock,
      title: "Changement de serrure",
      description: "Remplacement de serrures toutes marques. Installation de serrures haute sécurité.",
      link: "/changement-serrure"
    },
    {
      icon: Shield,
      title: "Porte blindée",
      description: "Installation et pose de portes blindées certifiées. Renforcement de sécurité.",
      link: "/porte-blindee"
    },
    {
      icon: Wrench,
      title: "Dépannage 24/7",
      description: "Service d'urgence disponible jour et nuit, week-ends et jours fériés.",
      link: "/depannage-serrurerie"
    },
  ];

  const whyChooseUs = [
    "Intervention en 20-30 minutes à Lille et dans toute la MEL",
    "Devis gratuit et transparent avant toute intervention",
    "Artisan serrurier qualifié et expérimenté",
    "Tarifs fixes sans surprise ni frais cachés",
    "Disponible 24h/24, 7j/7 pour vos urgences",
    "Travail soigné avec garantie sur nos prestations"
  ];

  return (
    <>
      <Helmet>
        <title>Serrurier Lille - Dépannage 24/7 | ELM SÉCURITÉ | Intervention Rapide</title>
        <meta 
          name="description" 
          content="Serrurier à Lille disponible 24h/24. Ouverture de porte, changement de serrure, porte blindée. Intervention en 20-30 min. Devis gratuit ☎ 06 21 66 08 67" 
        />
        <link rel="canonical" href="https://serrurier-urgence-lille.fr/" />
      </Helmet>
      <JsonLd />
      
      <div className="min-h-screen bg-background">
        <Header />
        
        {/* Hero Section */}
        <section className="relative h-[600px] flex items-center">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${heroImage})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 to-secondary/70"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-2xl text-secondary-foreground">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Serrurier Lille<br />
                <span className="text-accent">Dépannage rapide 24h/24 et 7j/7</span>
              </h1>
              <p className="text-xl mb-8 opacity-90">
                Intervention disponible à Lille et dans toute la MEL. Dépannage immédiat pour porte claquée, 
                clé perdue, serrure bloquée, barillet endommagé ou changement de cylindre. 
                Déplacement rapide et prise en charge des situations urgentes de jour comme de nuit.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-8">
                <CallButton size="lg" className="text-lg px-8 py-6" />
                <CtaButton variant="accent" size="lg" href="#contact">
                  Devis gratuit immédiat
                </CtaButton>
              </div>

              <div className="flex flex-wrap gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  <span>Disponible 24h/24</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5" />
                  <span>Toute la MEL</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="h-5 w-5" />
                  <span>Tarifs transparents</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Badges */}
        <section className="container mx-auto px-4 -mt-8 relative z-20">
          <TrustBadges />
        </section>

        {/* Services */}
        <section className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Nos services de serrurier à Lille</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              ELM SÉCURITÉ intervient dans tous les quartiers de Lille (59000, 59800) : Centre, Wazemmes, Fives, Vauban, Gambetta, et dans toute la Métropole Européenne de Lille (59260). 
              Déplacement rapide en cas de porte impossible à ouvrir. Nous utilisons des méthodes adaptées selon le type de serrure : 
              simple, multipoints, haute sécurité ou système compatible Fichet. Nos <a href="/depannage-serrurerie" className="text-primary hover:underline font-semibold">interventions d'urgence</a> couvrent les portes d'appartements, 
              maisons, locaux commerciaux et immeubles. Pour plus d'informations sur nos <a href="/tarifs" className="text-primary hover:underline font-semibold">tarifs</a>, 
              n'hésitez pas à nous contacter.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <a href="/ouverture-porte" className="group bg-card border rounded-lg p-6 shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 block">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <DoorOpen className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                Ouverture de porte
              </h3>
              <p className="text-muted-foreground text-sm">
                Porte claquée, fermée à clé, méthodes non destructives prioritaires. Intervention sans casse dans 90% des cas.
              </p>
            </a>

            <a href="/changement-serrure" className="group bg-card border rounded-lg p-6 shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 block">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <Lock className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                Changement de serrure
              </h3>
              <p className="text-muted-foreground text-sm">
                Remplacement cylindre, installation multipoints, systèmes renforcés certifiés A2P pour une sécurité maximale.
              </p>
            </a>

            <a href="/porte-blindee" className="group bg-card border rounded-lg p-6 shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 block">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <Shield className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                Blindage de porte
              </h3>
              <p className="text-muted-foreground text-sm">
                Renforcement sur porte existante, installation porte blindée neuve. Protection optimale contre les effractions.
              </p>
            </a>

            <a href="/depannage-serrurerie" className="group bg-card border rounded-lg p-6 shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 block">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <Wrench className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                Dépannage 24/7
              </h3>
              <p className="text-muted-foreground text-sm">
                Intervention urgente jour et nuit, sécurisation après effraction. Disponible dimanches et jours fériés.
              </p>
            </a>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="relative h-64 rounded-lg overflow-hidden shadow-card">
              <img src={changementSerrureImage} alt="Changement de serrure professionnelle" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 to-transparent flex items-end p-6">
                <h3 className="text-white font-bold text-xl">Changement de serrure</h3>
              </div>
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden shadow-card">
              <img src={interventionImage} alt="Intervention rapide serrurier" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 to-transparent flex items-end p-6">
                <h3 className="text-white font-bold text-xl">Intervention rapide</h3>
              </div>
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden shadow-card">
              <img src={ouverturePorteImage} alt="Ouverture fine sans casse" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 to-transparent flex items-end p-6">
                <h3 className="text-white font-bold text-xl">Ouverture professionnelle</h3>
              </div>
            </div>
          </div>
        </section>

        {/* Pourquoi nous choisir */}
        <section className="bg-muted py-16">
          <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Pourquoi appeler ELM SÉCURITÉ à Lille ?
            </h2>
              
              <div className="grid md:grid-cols-2 gap-4">
                {whyChooseUs.map((reason, index) => (
                  <div key={index} className="flex items-start gap-3 bg-background p-4 rounded-lg">
                    <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-primary-foreground text-sm font-bold">✓</span>
                    </div>
                    <span>{reason}</span>
                  </div>
                ))}
              </div>

              <div className="text-center mt-12">
                <CallButton size="lg" />
              </div>
            </div>
          </div>
        </section>

        {/* Zone d'intervention */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Zones d'intervention : Lille et Métropole Européenne
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Notre serrurier intervient rapidement dans tous les quartiers de Lille (59000, 59800) et dans l'ensemble des 90 communes de la Métropole Européenne de Lille (59260). 
              Que vous soyez à <a href="/serrurier-lille" className="text-primary hover:underline font-semibold">Lille</a>, <a href="/serrurier-roubaix" className="text-primary hover:underline font-semibold">Roubaix</a>, <a href="/serrurier-tourcoing" className="text-primary hover:underline font-semibold">Tourcoing</a> ou dans n'importe quelle autre commune, 
              nous garantissons une intervention en 20-30 minutes maximum.
            </p>
            
            <div className="bg-card border rounded-lg p-8 shadow-card">
              <h3 className="font-bold text-xl mb-4">Nos principales zones d'intervention :</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                <strong className="text-foreground">Lille et quartiers</strong> : Centre (59000), Wazemmes, Fives, Vauban-Esquermes, Gambetta, Lille-Sud, Rue Nationale, Bois-Blancs, Moulins, Vieux-Lille • 
                <strong className="text-foreground">Périphérie proche</strong> : <a href="/serrurier-lomme" className="text-primary hover:underline">Lomme</a>, <a href="/serrurier-hellemmes" className="text-primary hover:underline">Hellemmes</a>, <a href="/serrurier-la-madeleine" className="text-primary hover:underline">La Madeleine</a>, <a href="/serrurier-lambersart" className="text-primary hover:underline">Lambersart</a>, <a href="/serrurier-marcq-en-baroeul" className="text-primary hover:underline">Marcq-en-Barœul</a> • 
                <strong className="text-foreground">Grandes villes MEL</strong> : <a href="/serrurier-roubaix" className="text-primary hover:underline">Roubaix</a>, <a href="/serrurier-tourcoing" className="text-primary hover:underline">Tourcoing</a>, <a href="/serrurier-villeneuve-ascq" className="text-primary hover:underline">Villeneuve-d'Ascq</a> • 
                <strong className="text-foreground">Autres communes</strong> : <a href="/serrurier-ronchin" className="text-primary hover:underline">Ronchin</a>, <a href="/serrurier-wattignies" className="text-primary hover:underline">Wattignies</a>, <a href="/serrurier-loos" className="text-primary hover:underline">Loos</a>, <a href="/serrurier-faches-thumesnil" className="text-primary hover:underline">Faches-Thumesnil</a>, et bien d'autres.
              </p>
              <a href="/villes-couvertes" className="inline-flex items-center gap-2 text-primary font-semibold hover:underline">
                Voir toutes les communes couvertes →
              </a>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">
              Questions fréquentes sur nos services de serrurier
            </h2>
            <p className="text-center text-muted-foreground mb-12">
              Retrouvez les réponses aux questions les plus courantes concernant nos interventions à Lille (59000, 59800) et dans toute la Métropole Européenne de Lille (59260).
            </p>
            <FAQ />
          </div>
        </section>

        {/* Tarifs transparents */}
        <section className="bg-primary/5 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-6">
                Tarifs transparents pour tous nos services
              </h2>
              <p className="text-center text-muted-foreground mb-12">
                Forfait journée, nuit, dimanche et jours fériés. Prix communiqués avant intervention. Aucun frais caché.
              </p>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-card border rounded-lg p-6 text-center shadow-card">
                  <div className="text-4xl font-bold text-primary mb-2">À partir de 89€</div>
                  <h3 className="font-bold mb-2">Ouverture de porte</h3>
                  <p className="text-sm text-muted-foreground">
                    Porte claquée, intervention sans casse si possible
                  </p>
                </div>

                <div className="bg-card border rounded-lg p-6 text-center shadow-card border-primary border-2">
                  <div className="inline-block bg-accent text-accent-foreground text-xs font-bold px-3 py-1 rounded-full mb-2">
                    POPULAIRE
                  </div>
                  <div className="text-4xl font-bold text-primary mb-2">À partir de 150€</div>
                  <h3 className="font-bold mb-2">Changement serrure</h3>
                  <p className="text-sm text-muted-foreground">
                    Pose d'une serrure neuve, garantie incluse
                  </p>
                </div>

                <div className="bg-card border rounded-lg p-6 text-center shadow-card">
                  <div className="text-4xl font-bold text-primary mb-2">Sur devis</div>
                  <h3 className="font-bold mb-2">Porte blindée</h3>
                  <p className="text-sm text-muted-foreground">
                    Installation complète, certifiée A2P
                  </p>
                </div>
              </div>

              <p className="text-center mt-8 text-sm text-muted-foreground">
                Tarifs TTC • Frais de déplacement inclus à Lille et MEL • 
                Devis détaillé gratuit avant toute intervention
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section id="contact" className="container mx-auto px-4 py-16">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">
                Besoin d'un serrurier à Lille ?
              </h2>
              <p className="text-xl text-muted-foreground">
                Demandez votre devis gratuit ou appelez-nous pour une intervention immédiate
              </p>
            </div>

            <ContactForm />
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Index;
