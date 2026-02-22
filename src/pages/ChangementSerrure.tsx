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
import { Lock, Shield, Key, CheckCircle } from "lucide-react";
import changementSerrure from "@/assets/changement-serrure.jpg";
import changementCylindre from "@/assets/changement-cylindre.jpg";
import installationSerrure from "@/assets/installation-serrure.png";

const ChangementSerrure = () => {
  const raisons = [
    "Serrure endommagée ou cassée",
    "Clé perdue ou volée",
    "Après une tentative d'effraction",
    "Déménagement dans un nouveau logement",
    "Amélioration de la sécurité",
    "Serrure usée ou défectueuse"
  ];

  const typesSerrures = [
    {
      nom: "Serrure 3 points",
      prix: "À partir de 150€",
      description: "Protection standard, idéale pour appartements"
    },
    {
      nom: "Serrure 5 points",
      prix: "À partir de 250€",
      description: "Sécurité renforcée pour maisons"
    },
    {
      nom: "Serrure haute sécurité A2P",
      prix: "À partir de 350€",
      description: "Protection maximale certifiée"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Changement de Serrure à Lille - Toutes Marques | ELM SÉCURITÉ</title>
        <meta 
          name="description" 
          content="Changement de serrure à Lille. Installation serrure 3, 5 points, haute sécurité. Intervention rapide, devis gratuit ☎ 06 21 66 08 67" 
        />
        <link rel="canonical" href="https://serrurier-urgence-lille.fr/changement-serrure" />
      </Helmet>
      <JsonLd pageName="Changement de serrure" pageUrl="/changement-serrure" />
      <ServiceSchema 
        serviceName="Changement de serrure à Lille"
        description="Changement de serrure et cylindre à Lille. Installation de serrures certifiées A2P, multipoints, haute sécurité. Intervention 24h/24. Tarif dès 150€ TTC pose comprise."
        serviceType="Locksmith"
        priceRange="€€"
        areaServed={["Lille", "Roubaix", "Tourcoing", "Villeneuve-d'Ascq", "Marcq-en-Barœul", "Lomme", "La Madeleine", "Lambersart"]}
      />
      
      <div className="min-h-screen bg-background">
        
        <section className="relative py-20 bg-gradient-to-br from-secondary to-primary">
          <div className="container mx-auto px-4 text-secondary-foreground">
            <div className="max-w-3xl">
              <h1 className="text-5xl font-bold mb-6">
                Changement de serrure Lille – Cylindres et verrous sécurisés
              </h1>
              <p className="text-xl mb-8 opacity-90">
                Installation rapide de systèmes compatibles avec les portes standard et blindées. 
                Cylindres européens, multipoints, verrous haute résistance, systèmes compatibles Fichet.
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
                Le <strong>changement de serrure à Lille</strong> (59000, 59800, 59260) est une intervention courante pour sécuriser votre domicile 
                ou votre commerce. Que vous ayez perdu vos clés, subi une tentative d'effraction ou que vous veniez d'emménager dans un nouveau logement, 
                notre <a href="/depannage-serrurerie" className="text-primary hover:underline">serrurier d'urgence</a> intervient rapidement 
                dans tous les quartiers de Lille (Centre, Fives, Wazemmes, Vauban, Moulins) et dans toute la MEL 
                (<a href="/serrurier-roubaix" className="text-primary hover:underline">Roubaix</a>, 
                <a href="/serrurier-tourcoing" className="text-primary hover:underline">Tourcoing</a>, 
                <a href="/serrurier-villeneuve-ascq" className="text-primary hover:underline">Villeneuve-d'Ascq</a>).
              </p>
              
              <p className="text-lg text-muted-foreground mb-8">
                Nous installons tous types de serrures : <strong>serrures 3 points</strong> pour appartements, 
                <strong>serrures 5 points</strong> pour maisons, et <strong>serrures haute sécurité A2P</strong> 
                pour une protection maximale reconnue par les assurances. Notre stock permanent de cylindres européens, 
                serrures multipoints et verrous de toutes marques (Fichet, Bricard, Vachette, Mottura) nous permet d'intervenir 
                immédiatement sans délai d'attente. Si vous avez besoin d'une <a href="/porte-blindee" className="text-primary hover:underline">porte blindée</a> 
                complète, nous proposons également ce service d'installation.
              </p>
            </div>
          </section>

          <section className="py-16 grid md:grid-cols-2 gap-12 items-center bg-muted -mx-4 px-4 md:mx-0 md:rounded-lg">
            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-elegant">
              <img src={changementSerrure} alt="Changement serrure Lille intervention rapide" className="w-full h-full object-cover" />
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6">
                Quand changer sa serrure à Lille ?
              </h2>
              
              <div className="space-y-3 mb-8">
                {raisons.map((raison, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>{raison}</span>
                  </div>
                ))}
              </div>

              <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-2">Conseil de votre serrurier</h3>
                <p className="text-muted-foreground text-sm">
                  Nous recommandons de changer vos serrures tous les 10 ans, ou immédiatement après 
                  toute perte de clés ou tentative d'effraction pour garantir votre sécurité.
                </p>
              </div>
            </div>
          </section>

          <section className="py-16 bg-muted -mx-4 px-4 md:mx-0 md:rounded-lg">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-center">
                Types de serrures pour Lille et Métropole (59000, 59800, 59260)
              </h2>
              
              <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-12">
                Notre service de <strong>changement de serrure à Lille</strong> propose une gamme complète de solutions 
                adaptées à tous les types d'habitation et budgets. Du simple remplacement de cylindre au <strong>changement complet 
                de serrure multipoints</strong>, nous intervenons avec du matériel professionnel de haute qualité garanti par nos fournisseurs.
              </p>
              
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                {typesSerrures.map((serrure, index) => (
                  <div key={index} className="bg-background p-6 rounded-lg shadow-card border-2 border-transparent hover:border-primary transition-colors">
                    <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4 mx-auto">
                      <Lock className="h-7 w-7 text-primary" />
                    </div>
                    <h3 className="font-bold text-xl mb-2 text-center">{serrure.nom}</h3>
                    <div className="text-3xl font-bold text-primary text-center mb-3">{serrure.prix}</div>
                    <p className="text-sm text-muted-foreground text-center">{serrure.description}</p>
                  </div>
                ))}
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="relative h-72 rounded-lg overflow-hidden shadow-elegant">
                  <img src={changementCylindre} alt="Changement de cylindre" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 to-transparent flex items-end p-6">
                    <h3 className="text-white font-bold text-xl">Changement de cylindre</h3>
                  </div>
                </div>
                <div className="relative h-72 rounded-lg overflow-hidden shadow-elegant">
                  <img src={installationSerrure} alt="Installation serrure" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 to-transparent flex items-end p-6">
                    <h3 className="text-white font-bold text-xl">Installation complète</h3>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="py-16 bg-muted -mx-4 px-4 md:mx-0 md:rounded-lg">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">
                Déroulement d'une intervention de changement de serrure à Lille
              </h2>
              
              <p className="text-center text-muted-foreground mb-8">
                Chaque <strong>intervention de changement de serrure</strong> suit un protocole professionnel rigoureux 
                pour garantir votre satisfaction et votre sécurité. De l'appel d'urgence à la remise des nouvelles clés, 
                notre serrurier vous accompagne à chaque étape dans tous les quartiers de Lille et la MEL.
              </p>

              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                    1
                  </div>
                  <h3 className="font-bold mb-2">Diagnostic</h3>
                  <p className="text-sm text-muted-foreground">
                    Analyse de votre porte et de vos besoins en sécurité
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                    2
                  </div>
                  <h3 className="font-bold mb-2">Conseil</h3>
                  <p className="text-sm text-muted-foreground">
                    Recommandation du type de serrure adapté
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                    3
                  </div>
                  <h3 className="font-bold mb-2">Devis gratuit</h3>
                  <p className="text-sm text-muted-foreground">
                    Prix fixe annoncé avant intervention
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                    4
                  </div>
                  <h3 className="font-bold mb-2">Installation</h3>
                  <p className="text-sm text-muted-foreground">
                    Pose professionnelle avec garantie
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="py-16 bg-primary/5 -mx-4 px-4 md:mx-0 md:rounded-lg">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">
                Marques de serrures installées
              </h2>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                {["Fichet", "Vachette", "Bricard", "Picard", "JPM", "Pollux", "Mul-T-Lock", "ABUS"].map((marque, index) => (
                  <div key={index} className="bg-background p-4 rounded-lg text-center font-bold shadow-card">
                    {marque}
                  </div>
                ))}
              </div>

              <p className="text-center text-muted-foreground">
                Nous travaillons avec les meilleures marques de serrures pour garantir 
                votre sécurité et la longévité de vos installations.
              </p>
            </div>
          </section>

          <FAQ items={[
            {
              question: "Combien coûte un changement de serrure à Lille ?",
              answer: "Le prix d'un changement de serrure à Lille dépend du type : à partir de 150€ pour une serrure 3 points, 250€ pour une 5 points, et 350€ pour une serrure haute sécurité A2P. Ces tarifs incluent le matériel et la pose. Un devis gratuit est systématiquement établi avant intervention dans tous les quartiers de Lille et la MEL."
            },
            {
              question: "Faut-il changer toute la serrure ou juste le cylindre ?",
              answer: "Si seul le cylindre est défectueux ou si vous avez perdu vos clés, le remplacement du cylindre suffit (moins coûteux). Si le mécanisme de la serrure est usé, endommagé ou obsolète, un changement complet est recommandé. Notre serrurier à Lille établit un diagnostic précis pour vous conseiller la solution la plus adaptée et économique."
            },
            {
              question: "Puis-je changer ma serrure moi-même ?",
              answer: "Techniquement possible pour une serrure simple, mais déconseillé car : risque de mauvais montage (sécurité compromise), perte de garantie fabricant, non-conformité pour l'assurance. Notre intervention professionnelle à Lille garantit une installation conforme, garantie et reconnue par les assurances."
            },
            {
              question: "Quelle serrure choisir après une effraction à Lille ?",
              answer: "Après une effraction à Lille, nous recommandons une serrure haute sécurité certifiée A2P (minimum 1 étoile). Ces serrures retardent considérablement les tentatives d'effraction et sont exigées par certaines assurances. Notre stock permanent permet une installation immédiate à Lille et dans toute la MEL."
            },
            {
              question: "Combien de temps pour changer une serrure à Lille ?",
              answer: "Le changement d'un simple cylindre prend 15-30 minutes. Pour une serrure complète multipoints, comptez 1h à 1h30. Notre serrurier arrive en 20-30 minutes à Lille (59000, 59800, 59260) avec tout le matériel nécessaire pour une intervention immédiate, même en urgence."
            }
          ]} />

          <Reviews />

          <section id="contact" className="py-16">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">
                Demander un devis pour changement de serrure
              </h2>
              <ContactForm />
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default ChangementSerrure;
