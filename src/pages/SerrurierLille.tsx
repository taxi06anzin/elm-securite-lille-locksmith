import { Helmet } from "react-helmet";
import TrustBadges from "@/components/TrustBadges";
import ContactForm from "@/components/ContactForm";
import JsonLd from "@/components/JsonLd";
import InternalLinks from "@/components/InternalLinks";
import Breadcrumb from "@/components/Breadcrumb";
import OptimizedImage from "@/components/OptimizedImage";
import { CallButton } from "@/components/ui/button-variants";
import { MapPin, Clock, Shield, CheckCircle } from "lucide-react";
import interventionImage from "@/assets/intervention-urgence.png";
import changementSerrure from "@/assets/changement-serrure.jpg";

const SerrurierLille = () => {
  const situations = [
    "Porte claquée",
    "Perte ou vol de clés",
    "Clé cassée",
    "Mécanisme multipoints bloqué",
    "Cylindre bloqué"
  ];

  const quartiers = [
    "Lille-Centre", "Vieux-Lille", "Wazemmes", "Vauban-Esquermes", 
    "Bois-Blancs", "Fives", "Moulins", "Lille-Sud", 
    "Saint-Maurice Pellevoisin", "Hellemmes", "Lomme"
  ];

  return (
    <>
      <Helmet>
        <title>Serrurier Lille – Dépannage immédiat 24h/24 | ELM SÉCURITÉ</title>
        <meta 
          name="description" 
          content="Serrurier à Lille disponible 24h/24. Intervention rapide dans tous les quartiers : Centre, Wazemmes, Fives, Vauban. Ouverture porte, changement serrure ☎ 06 21 66 08 67" 
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://serrurier-urgence-lille.fr/serrurier-lille/" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Serrurier Lille – Dépannage immédiat 24h/24 | ELM SÉCURITÉ" />
        <meta property="og:description" content="Serrurier à Lille disponible 24h/24. Intervention rapide dans tous les quartiers." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://serrurier-urgence-lille.fr/serrurier-lille/" />

        {/* Twitter Card */}
        <meta name="twitter:title" content="Serrurier Lille – Dépannage immédiat 24h/24" />
        <meta name="twitter:description" content="Serrurier à Lille disponible 24h/24. Intervention rapide." />
      </Helmet>
      <JsonLd pageName="Serrurier Lille" pageUrl="/serrurier-lille" />
      
      <div className="min-h-screen bg-background">
        <Breadcrumb items={[{ label: "Villes couvertes", path: "/villes-couvertes" }, { label: "Serrurier Lille", path: "/serrurier-lille" }]} />
        
        <section className="relative py-20 bg-gradient-to-br from-secondary to-primary">
          <div className="container mx-auto px-4 text-secondary-foreground">
            <div className="max-w-3xl">
              <h1 className="text-5xl font-bold mb-6">
                Serrurier Lille – Dépannage immédiat 24h/24
              </h1>
              <p className="text-xl mb-8 opacity-90">
                ELM SÉCURITÉ intervient dans tous les quartiers de Lille (59000, 59800) pour les <a href="/ouverture-porte" className="text-accent-foreground hover:underline font-semibold">ouvertures de portes</a>, 
                remplacements de cylindres, réparations urgentes et sécurisations après incident. 
                Nos interventions s'adaptent au type de mécanisme et au niveau de sécurité installé : serrure simple, multipoints, haute sécurité ou système compatible Fichet. 
                Chaque action suit une méthode définie pour réduire les risques de dommage sur la porte ou le cadre. 
                Service disponible nuit, dimanche et jours fériés dans toute la Métropole Européenne de Lille (59260).
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
            <h2 className="text-3xl font-bold mb-8 text-center">
              Intervention rapide dans tous les quartiers de Lille
            </h2>
            
            <p className="text-muted-foreground mb-8 max-w-4xl mx-auto text-center">
              Notre <a href="/depannage-serrurerie" className="text-primary hover:underline font-semibold">serrurier d'urgence</a> couvre l'ensemble de la ville de Lille et ses quartiers : 
              Lille-Centre (59000, 59800), Vieux-Lille, Wazemmes, Vauban-Esquermes, 
              Bois-Blancs, Fives, Moulins, Lille-Sud, Saint-Maurice Pellevoisin, Hellemmes et Lomme. 
              Ces zones sont traitées en priorité grâce à la proximité directe et aux accès rapides par les grands axes (A1, A25, périphérique). 
              Nous intervenons également dans toute la <a href="/villes-couvertes" className="text-primary hover:underline font-semibold">Métropole Européenne de Lille</a> (59260) en moins de 30 minutes.
            </p>

            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
              {quartiers.map((quartier, index) => (
                <div key={index} className="bg-card border rounded-lg p-4 text-center shadow-card hover:shadow-elegant transition-shadow">
                  <MapPin className="h-5 w-5 text-primary mx-auto mb-2" />
                  <span className="text-sm font-medium">{quartier}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="py-16 grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 rounded-lg overflow-hidden shadow-elegant">
              <OptimizedImage 
                src={interventionImage} 
                alt="Intervention serrurier Lille - ouverture de porte urgente" 
                className="w-full h-full object-cover" 
              />
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6">
                Ouverture de porte à Lille sans casse
              </h2>
              <p className="mb-6 text-muted-foreground">
                Notre serrurier à Lille privilégie systématiquement les techniques d'<a href="/ouverture-porte" className="text-primary hover:underline font-semibold">ouverture de porte sans destruction</a> 
                lorsque cela est techniquement réalisable. Dans 90% des cas, aucun dommage n'est causé à votre porte, serrure ou bâti. 
                Cette approche permet d'économiser les frais de remplacement et de préserver l'intégrité de votre installation.
              </p>

              <h3 className="font-bold text-lg mb-4">Situations d'urgence traitées :</h3>
              <div className="space-y-3">
                {situations.map((situation, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>{situation}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="py-16 bg-muted -mx-4 px-4 md:mx-0 md:rounded-lg">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">
                Changement de cylindre ou de serrure à Lille
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <p className="text-muted-foreground mb-6">
                    En cas de perte des clés, de dysfonctionnement ou après une tentative d'effraction, 
                    le <a href="/changement-serrure" className="text-primary hover:underline font-semibold">remplacement du cylindre ou de la serrure</a> 
                    assure un retour à un accès sécurisé de votre logement ou local professionnel à Lille (59000, 59800). 
                    Plusieurs modèles peuvent être installés selon vos besoins de sécurité et votre budget. 
                    Pour une sécurité maximale, nous proposons également l'installation de <a href="/porte-blindee" className="text-primary hover:underline font-semibold">portes blindées certifiées</a>.
                  </p>

                  <div className="bg-background border-l-4 border-primary p-4 rounded-lg">
                    <h3 className="font-bold mb-2">Types d'interventions serrurier</h3>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Remplacement de cylindre européen standard ou haute sécurité</li>
                      <li>• Installation serrure multipoints (3, 5 ou 7 points)</li>
                      <li>• Pose de système haute sécurité certifié A2P</li>
                      <li>• Changement barillet endommagé ou grippé</li>
                      <li>• Installation serrures compatibles Fichet</li>
                    </ul>
                  </div>
                </div>

                <div className="relative h-80 rounded-lg overflow-hidden shadow-elegant">
                  <OptimizedImage 
                    src={changementSerrure} 
                    alt="Changement serrure Lille - installation cylindre sécurisé" 
                    className="w-full h-full object-cover" 
                  />
                </div>
              </div>
            </div>
          </section>

          <section className="py-16">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">
                Sécurisation après effraction ou incident
              </h2>
              
              <p className="text-center text-muted-foreground mb-12">
                Suite à une effraction, tentative de cambriolage ou tout autre incident ayant endommagé votre porte ou serrure à Lille, 
                notre serrurier intervient rapidement pour sécuriser votre logement. Une solution temporaire ou définitive peut être posée 
                pour sécuriser l'ouverture jusqu'à la réparation complète. Nous proposons également des <a href="/porte-blindee" className="text-primary hover:underline font-semibold">solutions de blindage</a> 
                pour renforcer durablement la sécurité de votre domicile dans tous les quartiers de Lille (59000, 59800).
              </p>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-card p-6 rounded-lg border shadow-card text-center">
                  <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-bold mb-2">Sécurisation immédiate</h3>
                  <p className="text-sm text-muted-foreground">
                    Pose provisoire pour garantir l'accès
                  </p>
                </div>

                <div className="bg-card p-6 rounded-lg border shadow-card text-center">
                  <Clock className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-bold mb-2">Intervention rapide</h3>
                  <p className="text-sm text-muted-foreground">
                    Déplacement prioritaire sur Lille
                  </p>
                </div>

                <div className="bg-card p-6 rounded-lg border shadow-card text-center">
                  <CheckCircle className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-bold mb-2">Solution adaptée</h3>
                  <p className="text-sm text-muted-foreground">
                    Méthode selon le dommage constaté
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section id="contact" className="py-16">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold mb-4 text-center">
                Contact rapide
              </h2>
              <p className="text-center text-muted-foreground mb-8">
                Téléphone : <a href="tel:0621660867" className="text-primary font-bold hover:underline">06 21 66 08 67</a>
              </p>
              <ContactForm />
            </div>
          </section>
        </div>

        <InternalLinks currentCity="serrurier-lille" />
      </div>
    </>
  );
};

export default SerrurierLille;
