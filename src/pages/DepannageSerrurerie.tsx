import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TrustBadges from "@/components/TrustBadges";
import ContactForm from "@/components/ContactForm";
import JsonLd from "@/components/JsonLd";
import ServiceSchema from "@/components/ServiceSchema";
import { CallButton } from "@/components/ui/button-variants";
import { Clock, Shield, Wrench, AlertCircle } from "lucide-react";
import interventionImage from "@/assets/intervention-urgence.png";
import reparationImage from "@/assets/reparation-effraction.webp";

const DepannageSerrurerie = () => {
  const urgences = [
    "Porte claquée avec clés à l'intérieur",
    "Serrure bloquée ou cassée",
    "Clé cassée dans la serrure",
    "Cambriolage ou tentative d'effraction",
    "Perte ou vol de clés",
    "Serrure gelée ou grippée"
  ];

  return (
    <>
      <Helmet>
        <title>Dépannage Serrurerie 24/7 à Lille | Intervention Urgente | ELM SÉCURITÉ</title>
        <meta 
          name="description" 
          content="Dépannage serrurerie 24h/24 à Lille. Serrurier d'urgence disponible jour et nuit. Intervention rapide en 20-30 min. Devis gratuit ☎ 06 21 66 08 67" 
        />
        <link rel="canonical" href="https://serrurier-urgence-lille.fr/depannage-serrurerie" />
      </Helmet>
      <JsonLd />
      <ServiceSchema 
        serviceName="Dépannage serrurerie d'urgence à Lille"
        description="Service de dépannage serrurerie 24h/24 et 7j/7 à Lille. Intervention rapide en 20-30 min pour porte claquée, clé perdue, serrure bloquée, effraction. Tarif dès 89€."
        serviceType="Emergency Locksmith"
        priceRange="€€"
        areaServed={["Lille", "Roubaix", "Tourcoing", "Villeneuve-d'Ascq", "Marcq-en-Barœul", "Lomme", "La Madeleine", "Lambersart", "Hellemmes", "Mons-en-Barœul"]}
      />
      
      <div className="min-h-screen bg-background">
        <Header />
        
        {/* Hero */}
        <section className="relative py-20 bg-gradient-to-br from-secondary to-primary">
          <div className="container mx-auto px-4 text-secondary-foreground">
            <div className="max-w-3xl">
              <h1 className="text-5xl font-bold mb-6">
                Dépannage serrurier Lille 24h/24 et 7j/7
              </h1>
              <p className="text-xl mb-8 opacity-90">
                Service de dépannage disponible en continu à Lille (59000, 59800) et dans toute la Métropole Européenne de Lille (59260). 
                Intervention rapide après appel pour la gestion des portes bloquées, clés perdues, serrures forcées ou mécanismes endommagés. 
                Notre équipe est spécialisée dans les <a href="/ouverture-porte" className="text-accent-foreground hover:underline font-semibold">ouvertures de portes d'urgence</a>, 
                le <a href="/changement-serrure" className="text-accent-foreground hover:underline font-semibold">remplacement de serrures</a> et la sécurisation après effraction. 
                Disponible nuit, dimanche et jours fériés.
              </p>
              <div className="flex flex-wrap gap-4">
                <CallButton size="lg" />
                <a href="#contact" className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-accent-foreground rounded-lg font-bold hover:opacity-90 transition-opacity">
                  Devis gratuit immédiat
                </a>
              </div>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4">
          <div className="-mt-8">
            <TrustBadges />
          </div>

          {/* Urgences courantes */}
          <section className="py-16">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Situations d'urgence prises en charge
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {urgences.map((urgence, index) => (
                <div key={index} className="flex items-start gap-3 bg-card p-5 rounded-lg border shadow-card">
                  <AlertCircle className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
                  <span className="font-medium">{urgence}</span>
                </div>
              ))}
            </div>

            <div className="bg-accent/10 border-l-4 border-accent p-6 rounded-lg">
              <div className="flex items-start gap-3">
                <Clock className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-2">Intervention rapide garantie</h3>
                  <p className="text-muted-foreground">
                    Notre serrurier d'urgence intervient en 20 à 30 minutes maximum à Lille et dans toute la MEL. 
                    Disponible 24h/24, 7j/7, même les week-ends, jours fériés et la nuit.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Image + texte */}
          <section className="py-16 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                Dépannage immédiat après effraction à Lille
              </h2>
              <p className="mb-4 text-muted-foreground">
                Suite à une tentative d'effraction ou un cambriolage, notre serrurier intervient rapidement pour sécuriser votre domicile ou local commercial. 
                Sécurisation de l'accès, remplacement du cylindre endommagé, pose provisoire ou définitive selon le niveau de dommage. 
                Nous intervenons dans tous les quartiers de Lille (59000, 59800) : Centre, Wazemmes, Fives, Vauban, et dans toute la MEL (59260).
              </p>
              <h3 className="text-2xl font-bold mb-4 mt-8">
                Ouverture de porte sans dégâts
              </h3>
              <p className="mb-4 text-muted-foreground">
                Nous privilégions systématiquement les méthodes non destructives pour <a href="/ouverture-porte" className="text-primary hover:underline font-semibold">l'ouverture de votre porte</a>. 
                Percussion interdite si une ouverture technique est possible. Dans 90% des cas, aucun dommage n'est causé à votre porte ou serrure.
              </p>
              <p className="mb-6 text-muted-foreground">
                Nous nous engageons à vous fournir un <a href="/tarifs" className="text-primary hover:underline font-semibold">devis gratuit et transparent</a> avant toute intervention. 
                Pas de frais cachés, pas de surprises : vous savez exactement ce que vous payez pour votre dépannage serrurerie.
              </p>
              <CallButton size="lg" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative h-64 rounded-lg overflow-hidden shadow-elegant">
                <img src={interventionImage} alt="Serrurier intervention urgence" className="w-full h-full object-cover" />
              </div>
              <div className="relative h-64 rounded-lg overflow-hidden shadow-elegant mt-8">
                <img src={reparationImage} alt="Réparation après effraction" className="w-full h-full object-cover" />
              </div>
            </div>
          </section>

          {/* Nos engagements */}
          <section className="py-16 bg-muted -mx-4 px-4 md:mx-0 md:rounded-lg">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-center">
                Nos engagements pour votre dépannage serrurerie
              </h2>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Clock className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-bold text-xl mb-2">Rapidité</h3>
                  <p className="text-muted-foreground">
                    Intervention en 20-30 minutes partout à Lille et dans la MEL
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Shield className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-bold text-xl mb-2">Transparence</h3>
                  <p className="text-muted-foreground">
                    Devis gratuit et détaillé avant toute intervention
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Wrench className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-bold text-xl mb-2">Qualité</h3>
                  <p className="text-muted-foreground">
                    Artisan serrurier qualifié, travail soigné et garanti
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Tarifs urgence */}
          <section className="py-16">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-center">
                Tarifs dépannage serrurerie d'urgence à Lille
              </h2>
              <p className="text-center text-muted-foreground mb-12">
                Tarifs fixes et transparents, annoncés avant intervention
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-card border-2 border-primary rounded-lg p-6">
                  <h3 className="font-bold text-xl mb-4">Horaires normaux</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Du lundi au vendredi, 8h-19h
                  </p>
                  <div className="text-3xl font-bold text-primary mb-2">À partir de 89€</div>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold">✓</span>
                      <span>Déplacement inclus à Lille</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold">✓</span>
                      <span>Ouverture de porte standard</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold">✓</span>
                      <span>Devis gratuit avant intervention</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-card border-2 border-accent rounded-lg p-6">
                  <div className="inline-block bg-accent text-accent-foreground text-xs font-bold px-3 py-1 rounded-full mb-2">
                    URGENCE 24/7
                  </div>
                  <h3 className="font-bold text-xl mb-4">Nuit, week-end, jours fériés</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    En dehors des horaires normaux
                  </p>
                  <div className="text-3xl font-bold text-accent mb-2">À partir de 129€</div>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-accent font-bold">✓</span>
                      <span>Intervention 24/7 garantie</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent font-bold">✓</span>
                      <span>Service d'urgence immédiat</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent font-bold">✓</span>
                      <span>Disponibilité totale</span>
                    </li>
                  </ul>
                </div>
              </div>

              <p className="text-center mt-8 text-sm text-muted-foreground">
                Tarifs TTC • Prix fixes sans surprise • Paiement après intervention
              </p>
            </div>
          </section>

          {/* Contact */}
          <section id="contact" className="py-16">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">
                Besoin d'un serrurier en urgence à Lille ?
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

export default DepannageSerrurerie;
