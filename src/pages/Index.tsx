import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TrustBadges from "@/components/TrustBadges";
import ContactForm from "@/components/ContactForm";
import JsonLd from "@/components/JsonLd";
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
            <h2 className="text-4xl font-bold mb-4">Intervention serrurier en urgence à Lille</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Déplacement rapide en cas de porte impossible à ouvrir. Méthodes adaptées selon le type de serrure : 
              simple, multipoints, haute sécurité ou système compatible Fichet. Intervention sur portes d'appartements, 
              maisons, locaux commerciaux et immeubles.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="group bg-card border rounded-lg p-6 shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <DoorOpen className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                Ouverture de porte
              </h3>
              <p className="text-muted-foreground text-sm">
                Porte claquée, fermée à clé, méthodes non destructives prioritaires
              </p>
            </div>

            <div className="group bg-card border rounded-lg p-6 shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <Lock className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                Changement de serrure
              </h3>
              <p className="text-muted-foreground text-sm">
                Remplacement cylindre, installation multipoints, systèmes renforcés
              </p>
            </div>

            <div className="group bg-card border rounded-lg p-6 shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <Shield className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                Blindage de porte
              </h3>
              <p className="text-muted-foreground text-sm">
                Renforcement sur porte existante, installation porte blindée neuve
              </p>
            </div>

            <div className="group bg-card border rounded-lg p-6 shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <Wrench className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                Dépannage 24/7
              </h3>
              <p className="text-muted-foreground text-sm">
                Intervention urgente jour et nuit, sécurisation après effraction
              </p>
            </div>
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
              Zones d'intervention Lille + MEL
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Intervention rapide dans tous les quartiers et communes de la Métropole Européenne de Lille
            </p>
            
            <div className="bg-card border rounded-lg p-8 shadow-card">
              <h3 className="font-bold text-xl mb-4">Nos zones d'intervention :</h3>
              <p className="text-muted-foreground leading-relaxed">
                Lille-Centre, Wazemmes, Fives, Vauban, Gambetta, Lille-Sud, Rue Nationale • 
                Lomme, Hellemmes, Mons-en-Barœul, Villeneuve-d'Ascq, Ronchin, La Madeleine, Lambersart, 
                Marcq-en-Barœul, Wattignies, Loos, Seclin et toutes les communes de la MEL.
              </p>
            </div>
          </div>
        </section>

        {/* Tarifs transparents */}
        <section className="bg-primary/5 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-6">
                Tarifs clairs
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
