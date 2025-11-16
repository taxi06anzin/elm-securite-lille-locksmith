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
import urgenceImage from "@/assets/urgence-24-7.jpg";

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
          content="Serrurier à Lille disponible 24h/24. Ouverture de porte, changement de serrure, porte blindée. Intervention en 20-30 min. Devis gratuit ☎ 06 26 16 06 87" 
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
                Serrurier à Lille<br />
                <span className="text-accent">Intervention 24/7</span>
              </h1>
              <p className="text-xl mb-8 opacity-90">
                Dépannage serrurerie en urgence • Ouverture de porte • Changement de serrure • 
                Porte blindée • Intervention rapide en 20-30 minutes à Lille et dans toute la MEL
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
            <h2 className="text-4xl font-bold mb-4">Nos services de serrurerie à Lille</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Expert en serrurerie, dépannage, métallerie, vitrerie et menuiserie
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <a
                  key={index}
                  href={service.link}
                  className="group bg-card border rounded-lg p-6 shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {service.description}
                  </p>
                </a>
              );
            })}
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="relative h-64 rounded-lg overflow-hidden shadow-card">
              <img src={porteBlindeeImage} alt="Porte blindée sécurisée" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 to-transparent flex items-end p-6">
                <h3 className="text-white font-bold text-xl">Portes blindées</h3>
              </div>
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden shadow-card">
              <img src={serrureImage} alt="Serrure haute sécurité" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 to-transparent flex items-end p-6">
                <h3 className="text-white font-bold text-xl">Serrures haute sécurité</h3>
              </div>
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden shadow-card">
              <img src={urgenceImage} alt="Intervention d'urgence" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 to-transparent flex items-end p-6">
                <h3 className="text-white font-bold text-xl">Urgence 24/7</h3>
              </div>
            </div>
          </div>
        </section>

        {/* Pourquoi nous choisir */}
        <section className="bg-muted py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">
                Pourquoi appeler ELM SÉCURITÉ pour votre serrurerie à Lille ?
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
              Intervention rapide en 20 à 30 minutes
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Notre serrurier intervient à Lille et dans toute la Métropole Européenne de Lille (MEL)
            </p>
            
            <div className="bg-card border rounded-lg p-8 shadow-card">
              <h3 className="font-bold text-xl mb-4">Nos zones d'intervention :</h3>
              <p className="text-muted-foreground leading-relaxed">
                Lille Centre, Lille-Sud, Wazemmes, Vauban, Fives, Gambetta, Rue Nationale • 
                Lomme, Hellemmes, Villeneuve-d'Ascq, Ronchin, La Madeleine, Lambersart, 
                Mons-en-Barœul, Marcq-en-Barœul, Faches-Thumesnil, Wattignies, Loos, Seclin, 
                Roubaix, Tourcoing, Wasquehal, Croix, Hem et toutes les communes de la MEL
              </p>
            </div>
          </div>
        </section>

        {/* Tarifs transparents */}
        <section className="bg-primary/5 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-6">
                Tarifs serrurerie transparents à Lille
              </h2>
              <p className="text-center text-muted-foreground mb-12">
                Pas de frais cachés • Devis gratuit avant intervention • Prix fixes annoncés
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
