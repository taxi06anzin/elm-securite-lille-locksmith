import FAQ from "@/components/FAQ";
import Reviews from "@/components/Reviews";
import SeoHead from "@/components/SeoHead";
import JsonLd from "@/components/JsonLd";
import Breadcrumb from "@/components/Breadcrumb";
import OptimizedImage from "@/components/OptimizedImage";
import InternalLinks from "@/components/InternalLinks";
import ServiceSchema from "@/components/ServiceSchema";
import { Helmet } from "react-helmet";
import TrustBadges from "@/components/TrustBadges";
import ContactForm from "@/components/ContactForm";
import { CallButton } from "@/components/ui/button-variants";
import { DoorOpen, Key, AlertCircle, CheckCircle } from "lucide-react";
import ouverturePorte1 from "@/assets/ouverture-porte-1.png";
import ouvertureFine from "@/assets/ouverture-fine.png";
import cleCassee from "@/assets/cle-cassee.png";

const OuverturePorte = () => {
  const situations = [
    "Porte claquée avec les clés à l'intérieur",
    "Porte fermée sans clé",
    "Serrure bloquée ou grippée",
    "Clé cassée dans la serrure",
    "Serrure endommagée après effraction",
    "Problème de cylindre ou de canon de serrure"
  ];

  const techniques = [
    {
      title: "Ouverture fine",
      description: "Technique non destructive pour serrures standards. Préservation de votre serrure et de votre porte.",
      icon: Key
    },
    {
      title: "Déblocage de serrure",
      description: "Déblocage des mécanismes grippés ou bloqués sans casse si possible.",
      icon: DoorOpen
    },
    {
      title: "Extraction de clé",
      description: "Retrait de clés cassées dans la serrure avec outils professionnels.",
      icon: AlertCircle
    }
  ];

  return (
    <>
      <Helmet>
        <title>Ouverture de Porte à Lille - Serrurier 24/7 | ELM SÉCURITÉ</title>
        <meta 
          name="description" 
          content="Ouverture de porte à Lille 24h/24. Porte claquée, bloquée ou sans clé ? Intervention rapide en 20-30 min. Sans casse si possible ☎ 06 21 66 08 67" 
        />
        <link rel="canonical" href="https://serrurier-urgence-lille.fr/ouverture-porte" />
      </Helmet>
      <JsonLd pageName="Ouverture de porte" pageUrl="/ouverture-porte" />
      <ServiceSchema 
        serviceName="Ouverture de porte à Lille"
        description="Service d'ouverture de porte 24h/24 à Lille et métropole lilloise. Intervention rapide en 20-30 min, ouverture sans casse si possible. Tarif dès 89€ TTC."
        serviceType="Locksmith"
        priceRange="€€"
        areaServed={["Lille", "Roubaix", "Tourcoing", "Villeneuve-d'Ascq", "Marcq-en-Barœul", "Lomme", "La Madeleine", "Lambersart"]}
      />
      
      <div className="min-h-screen bg-background">
        <section className="relative py-20 bg-gradient-to-br from-secondary to-primary">
          <div className="container mx-auto px-4 text-secondary-foreground">
            <div className="max-w-3xl">
              <h1 className="text-5xl font-bold mb-6">
                Ouverture de porte Lille – Intervention express
              </h1>
              <p className="text-xl mb-8 opacity-90">
                Ouverture de toutes portes fermées. Porte claquée, clé perdue, mécanisme bloqué. 
                Intervention rapide avec méthodes adaptées au type de serrure.
              </p>
              <CallButton size="lg" />
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4">
          <div className="-mt-8">
            <TrustBadges />
          </div>

          <section className="py-16">
            <div className="max-w-4xl mx-auto mb-12">
              <p className="text-lg text-muted-foreground mb-8">
                Notre service d'<strong>ouverture de porte à Lille</strong> (59000, 59800, 59260) intervient 24h/24 dans toute la Métropole Européenne de Lille. 
                Que vous soyez à <a href="/serrurier-lille" className="text-primary hover:underline">Lille Centre</a>, 
                Fives, Wazemmes ou dans les communes environnantes comme <a href="/serrurier-roubaix" className="text-primary hover:underline">Roubaix</a>, 
                <a href="/serrurier-tourcoing" className="text-primary hover:underline">Tourcoing</a> ou 
                <a href="/serrurier-villeneuve-ascq" className="text-primary hover:underline">Villeneuve-d'Ascq</a>, 
                notre serrurier arrive en 20-30 minutes pour ouvrir votre porte bloquée.
              </p>
              
              <p className="text-lg text-muted-foreground mb-8">
                Les situations d'urgence nécessitant une <strong>ouverture de porte rapide</strong> sont multiples : 
                porte claquée avec les clés à l'intérieur, perte ou vol de clés, serrure bloquée ou grippée, 
                clé cassée dans le cylindre, ou encore serrure endommagée après une tentative d'effraction. 
                Dans tous les cas, notre priorité est d'<strong>ouvrir votre porte sans casse</strong> si le matériel le permet, 
                en utilisant des techniques professionnelles d'ouverture fine. Si un <a href="/changement-serrure" className="text-primary hover:underline">changement de serrure</a> s'avère nécessaire après l'ouverture, nous disposons de tout le matériel nécessaire pour intervenir immédiatement.
              </p>
            </div>

            <h2 className="text-3xl font-bold mb-8 text-center">
              Situations d'ouverture de porte à Lille et MEL
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {situations.map((situation, index) => (
                <div key={index} className="flex items-start gap-3 bg-card p-5 rounded-lg border shadow-card">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>{situation}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="py-16 bg-muted -mx-4 px-4 md:mx-0 md:rounded-lg">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-center">
                Techniques d'ouverture de porte à Lille (59000, 59800)
              </h2>
              
              <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-12">
                Nos serruriers utilisent exclusivement des <strong>techniques professionnelles d'ouverture fine</strong> 
                pour préserver votre porte et votre serrure. Chaque intervention commence par un diagnostic gratuit 
                pour déterminer la méthode la plus adaptée à votre situation à Lille et dans toute la MEL.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="relative h-80 rounded-lg overflow-hidden shadow-elegant">
                  <OptimizedImage src={ouvertureFine} alt="Technique ouverture fine" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 to-transparent flex items-end p-6">
                    <div>
                      <h3 className="text-white font-bold text-xl mb-2">Ouverture fine</h3>
                      <p className="text-white/90 text-sm">Technique non destructive pour préserver votre serrure</p>
                    </div>
                  </div>
                </div>
                
                <div className="relative h-80 rounded-lg overflow-hidden shadow-elegant">
                  <OptimizedImage src={cleCassee} alt="Extraction de clé cassée" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 to-transparent flex items-end p-6">
                    <div>
                      <h3 className="text-white font-bold text-xl mb-2">Extraction de clé</h3>
                      <p className="text-white/90 text-sm">Retrait de clés cassées avec outils professionnels</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-12 bg-primary/5 border-l-4 border-primary p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-2">Notre priorité : ouverture sans casse</h3>
                <p className="text-muted-foreground">
                  Notre serrurier à Lille privilégie toujours les techniques d'ouverture fine pour 
                  préserver votre serrure et votre porte. L'ouverture destructive n'est utilisée qu'en 
                  dernier recours, après votre accord et avec un devis préalable.
                </p>
              </div>
            </div>
          </section>

          <section className="py-16">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Pourquoi choisir ELM Sécurité pour votre ouverture de porte à Lille ?
            </h2>
            
            <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-12">
              Notre expertise en <strong>ouverture de porte d'urgence</strong> nous permet d'intervenir efficacement 
              dans tous les quartiers de Lille (Centre, Fives, Wazemmes, Vauban, Moulins) et dans l'ensemble de la MEL. 
              Avec plus de 10 ans d'expérience et des centaines d'interventions réussies, nous sommes le partenaire 
              de confiance pour tous vos besoins urgents. Notre <a href="/depannage-serrurerie" className="text-primary hover:underline">serrurier d'urgence 24/7</a> garantit une intervention rapide, professionnelle et à tarif transparent.
            </p>
          </section>

          <section className="py-16 bg-muted -mx-4 px-4 md:mx-0 md:rounded-lg">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-center">
                Tarifs ouverture de porte à Lille (59000, 59800, 59260)
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-card border-2 border-primary rounded-lg p-6 text-center">
                  <h3 className="font-bold text-xl mb-4">Ouverture simple</h3>
                  <div className="text-4xl font-bold text-primary mb-4">À partir de 89€</div>
                  <p className="text-muted-foreground text-sm">
                    Porte claquée, ouverture fine sans dégât, horaires normaux
                  </p>
                </div>

                <div className="bg-card border rounded-lg p-6 text-center">
                  <h3 className="font-bold text-xl mb-4">Ouverture complexe</h3>
                  <div className="text-4xl font-bold text-primary mb-4">Sur devis</div>
                  <p className="text-muted-foreground text-sm">
                    Serrure haute sécurité, multi-points, ou nécessitant des outils spécifiques
                  </p>
                </div>
              </div>

              <div className="text-center">
                <p className="text-sm text-muted-foreground mb-6">
                  Devis gratuit sur place avant toute intervention • Tarifs TTC sans surprise
                </p>
                <CallButton size="lg" />
              </div>
            </div>
          </section>

          <FAQ items={[
            {
              question: "Combien coûte une ouverture de porte à Lille ?",
              answer: "Le tarif pour une ouverture de porte à Lille commence à partir de 89€ TTC pour une porte claquée en horaires normaux. Ce prix inclut le déplacement, le diagnostic et l'ouverture sans casse si possible. Pour les interventions de nuit, week-end ou serrures haute sécurité, un devis personnalisé est établi gratuitement sur place avant intervention."
            },
            {
              question: "Combien de temps pour ouvrir une porte à Lille ?",
              answer: "Notre serrurier arrive en 20 à 30 minutes maximum à Lille (59000, 59800) et dans toute la MEL. L'ouverture elle-même prend généralement entre 10 et 30 minutes selon le type de serrure et la méthode utilisée. Nous privilégions toujours l'ouverture fine pour préserver votre porte."
            },
            {
              question: "Puis-je ouvrir ma porte claquée sans serrurier ?",
              answer: "Nous déconseillons fortement les méthodes improvisées qui risquent d'endommager votre porte, votre serrure ou le bâti. Notre serrurier à Lille dispose des outils professionnels et de l'expertise nécessaire pour ouvrir votre porte sans casse et au meilleur tarif."
            },
            {
              question: "L'ouverture de porte abîme-t-elle la serrure ?",
              answer: "Non, nos techniques d'ouverture fine préservent la serrure et la porte dans plus de 90% des cas à Lille. Seules les serrures très endommagées ou de haute sécurité nécessitent parfois une ouverture destructive, toujours après votre accord et un devis préalable."
            },
            {
              question: "Intervenez-vous pour une porte claquée le dimanche à Lille ?",
              answer: "Oui, notre service d'ouverture de porte à Lille est disponible 24h/24 et 7j/7, y compris les dimanches, jours fériés et la nuit. Appelez le 06 21 66 08 67 pour une intervention d'urgence dans tous les quartiers de Lille et la MEL."
            }
          ]} />

          <Reviews />

          <section id="contact" className="py-16">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">
                Besoin d'une ouverture de porte à Lille ?
              </h2>
              <ContactForm />
            </div>
          </section>
        </div>

        </div>
    </>
  );
};

export default OuverturePorte;
