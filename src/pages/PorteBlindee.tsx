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
import { Shield, Lock, CheckCircle } from "lucide-react";
import porteBlindeeImage from "@/assets/porte-blindee.jpg";
import porteBlindeeInstallation from "@/assets/porte-blindee-installation.png";

const PorteBlindee = () => {
  const avantages = [
    "Résistance accrue",
    "Retardement d'effraction",
    "Sécurisation complète du logement",
    "Isolation thermique et phonique renforcée",
    "Valorisation du bien immobilier"
  ];

  return (
    <>
      <Helmet>
        <title>Blindage de Porte Lille – Renforcement et Installation | ELM SÉCURITÉ</title>
        <meta 
          name="description" 
          content="Blindage de porte à Lille. Renforcement sur porte existante ou installation porte blindée neuve. Intervention MEL ☎ 06 21 66 08 67" 
        />
        <link rel="canonical" href="https://serrurier-urgence-lille.fr/porte-blindee" />
      </Helmet>
      <JsonLd pageName="Porte blindée" pageUrl="/porte-blindee" />
      <ServiceSchema 
        serviceName="Installation de porte blindée à Lille"
        description="Installation de portes blindées certifiées A2P à Lille. Blindage de porte existante ou pose de bloc-porte complet. Protection optimale contre les effractions. Devis gratuit."
        serviceType="Locksmith"
        priceRange="€€€"
        areaServed={["Lille", "Roubaix", "Tourcoing", "Villeneuve-d'Ascq", "Marcq-en-Barœul", "Lomme", "La Madeleine", "Lambersart"]}
      />
      
      <div className="min-h-screen bg-background">
        
        <section className="relative py-20 bg-gradient-to-br from-secondary to-primary">
          <div className="container mx-auto px-4 text-secondary-foreground">
            <div className="max-w-3xl">
              <h1 className="text-5xl font-bold mb-6">
                Blindage de porte Lille – Renforcement et installation
              </h1>
              <p className="text-xl mb-8 opacity-90">
                Solutions adaptées aux besoins de sécurité des logements et commerces. 
                Blindage sur porte existante ou installation de porte blindée neuve.
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
                L'<strong>installation d'une porte blindée à Lille</strong> (59000, 59800, 59260) est la solution la plus efficace 
                pour sécuriser votre logement ou commerce contre les tentatives d'effraction. Que vous soyez situé dans le 
                <a href="/serrurier-lille" className="text-primary hover:underline"> centre de Lille</a>, à 
                <a href="/serrurier-marcq-en-baroeul" className="text-primary hover:underline"> Marcq-en-Barœul</a>, 
                <a href="/serrurier-lambersart" className="text-primary hover:underline"> Lambersart</a> ou dans toute autre commune de la MEL, 
                notre service de <strong>blindage de porte</strong> s'adapte à vos besoins et votre budget.
              </p>
              
              <p className="text-lg text-muted-foreground mb-8">
                Nous proposons deux solutions principales : le <strong>blindage de votre porte existante</strong> pour un coût maîtrisé, 
                ou l'<strong>installation d'une porte blindée neuve</strong> certifiée A2P pour une sécurité maximale. 
                Dans les deux cas, nos techniciens qualifiés garantissent une installation conforme aux normes d'assurance et 
                une protection optimale de votre domicile. Si vous avez récemment subi une effraction ou souhaitez simplement 
                renforcer votre sécurité, notre expertise en <a href="/changement-serrure" className="text-primary hover:underline">serrures haute sécurité</a> vous assure une solution pérenne.
              </p>
            </div>
          </section>

          <section className="py-16 grid md:grid-cols-2 gap-12 items-center bg-muted -mx-4 px-4 md:mx-0 md:rounded-lg">
            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-elegant">
              <OptimizedImage src={porteBlindeeImage} alt="Installation porte blindée Lille" className="w-full h-full object-cover" />
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6">
                Blindage sur porte existante à Lille (59000, 59800)
              </h2>
              <p className="mb-6 text-muted-foreground">
                Pose d'une tôle de renfort, système anti-dégondage et plaque acier. 
                Solution économique pour renforcer une porte standard sans remplacement complet.
              </p>

              <h3 className="text-2xl font-bold mb-4">Avantages du blindage</h3>
              <div className="space-y-3">
                {avantages.map((avantage, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>{avantage}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="py-16">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-center">
                Installation porte blindée neuve à Lille et MEL
              </h2>
              
              <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-12">
                Pour une <strong>sécurité maximale à Lille</strong>, l'installation d'une <strong>porte blindée certifiée A2P</strong> 
                représente l'investissement le plus efficace. Nos portes blindées répondent aux exigences des compagnies d'assurance 
                et offrent une protection reconnue contre les effractions. Intervention dans tous les quartiers de Lille (Centre, Fives, Wazemmes, Vauban) 
                et l'ensemble de la Métropole (Roubaix, Tourcoing, Villeneuve-d'Ascq, Marcq-en-Barœul).
              </p>
              
              <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
                <div>
                  <p className="text-muted-foreground mb-6">
                    Installation conforme aux normes actuelles. Options anti-effraction 
                    et isolations renforcées disponibles selon les besoins.
                  </p>

                  <h3 className="font-bold text-xl mb-4">Composition d'une porte blindée :</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Bloc-porte en acier renforcé</li>
                    <li>• Serrure multipoints haute sécurité</li>
                    <li>• Paumelles anti-arrachement</li>
                    <li>• Joint d'isolation périphérique</li>
                    <li>• Cornières anti-pince</li>
                    <li>• Cylindre haute sécurité</li>
                  </ul>
                </div>

                <div className="relative h-96 rounded-lg overflow-hidden shadow-elegant">
                  <OptimizedImage src={porteBlindeeInstallation} alt="Installation porte blindée professionnelle" className="w-full h-full object-cover" />
                </div>
              </div>

              <div className="bg-background border-l-4 border-primary p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-2">Intervention MEL</h3>
                <p className="text-muted-foreground">
                  Installation possible dans tous les quartiers de Lille et communes voisines. 
                  Délai d'installation variable selon configuration de la porte et niveau de sécurité choisi.
                </p>
              </div>
            </div>
          </section>

          <section className="py-16">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">
                Différences blindage / porte blindée
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-card border-2 border-primary rounded-lg p-6">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Shield className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-bold text-xl mb-3">Blindage de porte</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>✓ Conservation de la porte existante</li>
                    <li>✓ Ajout de renforts métalliques</li>
                    <li>✓ Solution économique</li>
                    <li>✓ Installation rapide</li>
                    <li>✓ Idéal pour appartements</li>
                  </ul>
                  <div className="mt-6 text-center">
                    <div className="text-2xl font-bold text-primary">À partir de 800€</div>
                  </div>
                </div>

                <div className="bg-card border-2 border-accent rounded-lg p-6">
                  <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                    <Lock className="h-7 w-7 text-accent" />
                  </div>
                  <h3 className="font-bold text-xl mb-3">Porte blindée neuve</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>✓ Bloc-porte complet en acier</li>
                    <li>✓ Sécurité maximale</li>
                    <li>✓ Isolation optimale</li>
                    <li>✓ Garantie constructeur</li>
                    <li>✓ Esthétique au choix</li>
                  </ul>
                  <div className="mt-6 text-center">
                    <div className="text-2xl font-bold text-accent">Sur devis</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <FAQ items={[
            {
              question: "Quelle différence entre blindage de porte et porte blindée ?",
              answer: "Le blindage de porte consiste à renforcer votre porte existante avec une plaque d'acier et des renforts (à partir de 800€). La porte blindée est un bloc-porte complet neuf avec structure en acier certifiée A2P (à partir de 1500€). Le blindage convient aux budgets serrés, la porte blindée offre une sécurité maximale reconnue par les assurances."
            },
            {
              question: "Qu'est-ce que la certification A2P pour une porte blindée ?",
              answer: "La certification A2P (Assurance Prévention Protection) classe les portes blindées selon leur résistance à l'effraction : A2P BP1 (5 min), A2P BP2 (10 min), A2P BP3 (15 min). Cette norme française est reconnue par toutes les compagnies d'assurance à Lille et garantit une protection testée et certifiée."
            },
            {
              question: "Combien de temps pour installer une porte blindée à Lille ?",
              answer: "L'installation d'une porte blindée à Lille prend entre 3 et 5 heures selon la configuration de votre bâti. Pour un blindage de porte existante, comptez 2 à 4 heures. Notre équipe intervient rapidement dans tous les quartiers de Lille (Centre, Fives, Wazemmes) et la MEL."
            },
            {
              question: "Une porte blindée améliore-t-elle l'isolation phonique ?",
              answer: "Oui, une porte blindée de qualité améliore considérablement l'isolation phonique (jusqu'à -30 dB) et thermique de votre logement à Lille. C'est un double avantage : sécurité renforcée et confort acoustique, particulièrement apprécié en centre-ville de Lille."
            },
            {
              question: "Peut-on installer une porte blindée en copropriété à Lille ?",
              answer: "Oui, sous certaines conditions. La porte doit respecter l'esthétique de l'immeuble côté palier. Nous proposons des portes blindées avec finitions adaptées aux immeubles lillois (haussmanniens, modernes). Une déclaration préalable à la copropriété est recommandée mais rarement refusée pour des raisons de sécurité."
            }
          ]} />

          <Reviews />

          <section id="contact" className="py-16">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">
                Demander un devis blindage ou porte blindée
              </h2>
              <ContactForm />
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default PorteBlindee;
