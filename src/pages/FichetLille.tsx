import { Helmet } from "react-helmet";
import TrustBadges from "@/components/TrustBadges";
import ContactForm from "@/components/ContactForm";
import JsonLd from "@/components/JsonLd";
import InternalLinks from "@/components/InternalLinks";
import Breadcrumb from "@/components/Breadcrumb";
import OptimizedImage from "@/components/OptimizedImage";
import SeoHead from "@/components/SeoHead";
import { CallButton } from "@/components/ui/button-variants";
import { CheckCircle, Shield, Clock, Award, Phone, Euro, KeyRound, Moon } from "lucide-react";
import serrureCylindreImage from "@/assets/serrure-cylindre.jpg";
import porteBlindeeImage from "@/assets/porte-blindee-installation.png";

const FichetLille = () => {
  const avantages = [
    "Installation de cylindres Fichet certifiés A2P",
    "Remplacement de serrures multipoints Fichet",
    "Réparation de portes blindées Fichet",
    "Duplication de clés Fichet sécurisées",
    "Ouverture fine de serrures Fichet",
    "Mise en conformité assurance",
  ];

  const certifications = [
    { icon: Shield, title: "A2P 1 étoile", desc: "Résistance 5 minutes" },
    { icon: Shield, title: "A2P 2 étoiles", desc: "Résistance 10 minutes" },
    { icon: Shield, title: "A2P 3 étoiles", desc: "Résistance 15 minutes" },
  ];

  return (
    <>
      <SeoHead
        title="Serrurier Fichet Lille – Urgence 24/7 | ELM SÉCURITÉ"
        description="Dépannage Fichet en urgence 24/7 à Lille : ouverture serrure bloquée, cylindre, porte blindée. Concessionnaire Point Fort Fichet ☎ 06 21 66 08 67"
        canonical="https://serrurier-urgence-lille.fr/fichet-lille"
      />
      <JsonLd pageName="Serrurier Fichet Lille" pageUrl="/fichet-lille" />
      
      <div className="min-h-screen bg-background">
        <Breadcrumb 
          items={[
            { label: "Accueil", path: "/" },
            { label: "Nos services", path: "/" },
            { label: "Fichet Lille", path: "/fichet-lille" }
          ]} 
        />
        
        <section className="relative py-20 bg-gradient-to-br from-secondary to-primary">
          <div className="container mx-auto px-4 text-secondary-foreground">
            <div className="max-w-3xl">
              <h1 className="text-5xl font-bold mb-6">
                Serrurier Fichet à Lille — dépannage et urgence 24h/24
              </h1>
              <p className="text-xl mb-8 opacity-90">
                Serrure Fichet bloquée, clé cassée, cylindre ou multipoints en panne ? Notre serrurier
                Fichet intervient en urgence à Lille, la nuit comme le dimanche. Concessionnaire officiel
                Point Fort Fichet : accès aux pièces d'origine et garantie constructeur.
              </p>
              <CallButton size="lg" />
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4">
          <div className="-mt-8">
            <TrustBadges />
          </div>

          {/* Dépannage Fichet en urgence 24/7 */}
          <section className="py-16">
            <div className="max-w-5xl mx-auto">
              <span className="inline-flex items-center gap-2 bg-urgent/10 text-urgent px-3 py-1 rounded-full text-sm font-semibold mb-4">
                <Moon className="h-4 w-4" aria-hidden="true" /> Disponible quand les autres sont fermés
              </span>
              <h2 className="text-3xl font-bold mb-4">
                Dépannage Fichet en urgence 24/7 à Lille
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Une serrure ou une porte Fichet ne se dépanne pas comme une serrure standard : il faut
                connaître les mécanismes, disposer de l'outillage adapté et préserver la certification.
                ELM Sécurité, <strong>concessionnaire officiel Point Fort Fichet</strong> à Lille, intervient
                en urgence de jour comme de nuit, le dimanche et les jours fériés — avec un accès direct
                aux <strong>pièces d'origine Fichet</strong> et le maintien de la <strong>garantie constructeur</strong>.
              </p>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                {[
                  { icon: KeyRound, title: "Clé bloquée ou cassée", text: "Extraction de clé cassée dans un cylindre Fichet et ouverture fine sans détérioration du mécanisme." },
                  { icon: Shield, title: "Cylindre & multipoints", text: "Déblocage et remplacement de cylindres et de serrures multipoints Fichet grippés ou forcés." },
                  { icon: Clock, title: "Nuit & dimanche", text: "Serrurier Fichet de garde 24h/24 : intervention nocturne, dominicale et jours fériés sur Lille et la MEL." },
                ].map((b) => (
                  <div key={b.title} className="bg-card border rounded-lg p-6 shadow-card">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                      <b.icon className="h-6 w-6 text-primary" aria-hidden="true" />
                    </div>
                    <h3 className="font-bold mb-2">{b.title}</h3>
                    <p className="text-sm text-muted-foreground">{b.text}</p>
                  </div>
                ))}
              </div>

              <p className="text-muted-foreground">
                Besoin d'une intervention en pleine nuit ou un jour férié ? Découvrez notre service{" "}
                <a href="/serrurier-dimanche-nuit-lille" className="text-primary font-semibold hover:underline">
                  urgence nuit et dimanche
                </a>{" "}
                à Lille.
              </p>
            </div>
          </section>

          {/* Prix porte blindée Fichet — ancre tarifaire */}
          <section className="py-16 bg-muted -mx-4 px-4 md:mx-0 md:rounded-lg">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-4 text-center">
                Porte blindée Fichet à Lille — prix
              </h2>
              <div className="bg-background border rounded-lg p-8 text-center shadow-card">
                <div className="inline-flex p-4 bg-primary/10 rounded-full mb-4">
                  <Euro className="h-8 w-8 text-primary" aria-hidden="true" />
                </div>
                <p className="text-2xl font-bold mb-2">
                  À partir de <span className="text-primary">2 680 €</span> — pose comprise
                </p>
                <p className="text-muted-foreground mb-6">
                  Devis personnalisé gratuit. Tarif indicatif pour une{" "}
                  <a href="/porte-blindee" className="text-primary font-semibold hover:underline">
                    porte blindée
                  </a>{" "}
                  Fichet posée à Lille, équipée d'une{" "}
                  <a href="/serrure-a2p-3-points-lille" className="text-primary font-semibold hover:underline">
                    serrure A2P certifiée
                  </a>. Gammes disponibles : <strong>Forstyl</strong>, <strong>Spheris</strong> et <strong>Foxeo</strong>.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="tel:0621660867"
                    className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-bold hover:opacity-90 transition-opacity"
                  >
                    <Phone className="h-5 w-5" aria-hidden="true" /> Devis gratuit : 06 21 66 08 67
                  </a>
                  <a
                    href="/tarifs"
                    className="inline-flex items-center justify-center border-2 border-primary text-primary px-6 py-3 rounded-lg font-bold hover:bg-primary/10 transition-colors"
                  >
                    Voir tous nos tarifs
                  </a>
                </div>
              </div>
            </div>
          </section>

          <section className="py-16 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                Pourquoi choisir Fichet ?
              </h2>
              
              <p className="text-muted-foreground mb-6">
                Fichet est le leader français des serrures haute sécurité depuis 1825. 
                Nos serrures et cylindres certifiés A2P offrent une protection maximale contre 
                l'effraction et sont reconnus par toutes les compagnies d'assurance.
              </p>

              <div className="space-y-3">
                {avantages.map((avantage, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>{avantage}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative h-96 rounded-lg overflow-hidden shadow-elegant">
              <OptimizedImage 
                src={serrureCylindreImage} 
                alt="Cylindre Fichet haute sécurité A2P installé à Lille" 
                className="w-full h-full object-cover" 
              />
            </div>
          </section>

          <section className="py-16 bg-muted -mx-4 px-4 md:mx-0 md:rounded-lg">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-center">
                Certifications A2P Fichet
              </h2>

              <div className="grid md:grid-cols-3 gap-8">
                {certifications.map((cert, index) => (
                  <div key={index} className="bg-background border rounded-lg p-6 text-center shadow-card">
                    <div className="inline-flex p-4 bg-primary/10 rounded-full mb-4">
                      <cert.icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="font-bold text-xl mb-2">{cert.title}</h3>
                    <p className="text-muted-foreground">{cert.desc}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 text-center">
                <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
                  La certification A2P est délivrée par le CNPP (Centre National de Prévention et de Protection). 
                  Elle garantit la résistance à l'effraction et est exigée par la plupart des assurances habitation.
                </p>
              </div>
            </div>
          </section>

          <section className="py-16">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">
                Nos prestations Fichet
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="bg-card border rounded-lg p-6 shadow-card">
                  <Clock className="h-12 w-12 text-primary mb-4" />
                  <h3 className="font-bold text-xl mb-3">Installation express</h3>
                  <p className="text-muted-foreground mb-4">
                    Pose de serrures et cylindres Fichet en moins de 2 heures. 
                    Matériel certifié A2P toujours en stock.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Cylindres Fichet 787 et 787 Z</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Serrures multipoints Fichet</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Portes blindées Fichet Forstyl</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-card border rounded-lg p-6 shadow-card">
                  <Award className="h-12 w-12 text-primary mb-4" />
                  <h3 className="font-bold text-xl mb-3">Dépannage Fichet</h3>
                  <p className="text-muted-foreground mb-4">
                    Intervention d'urgence 24/7 sur tous systèmes Fichet. 
                    Ouverture fine sans dégât, remplacement immédiat.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Clé cassée dans cylindre Fichet</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Serrure multipoints bloquée</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Réparation après effraction</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="relative h-80 rounded-lg overflow-hidden shadow-elegant">
                <OptimizedImage 
                  src={porteBlindeeImage} 
                  alt="Installation porte blindée Fichet Forstyl à Lille" 
                  className="w-full h-full object-cover" 
                />
              </div>
            </div>
          </section>

          <section className="py-16 bg-gradient-primary text-primary-foreground -mx-4 px-4 md:mx-0 md:rounded-lg">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">
                Besoin d'un expert Fichet ?
              </h2>
              <p className="text-lg mb-6 opacity-90">
                Intervention rapide à Lille et dans toute la MEL. Devis gratuit et conseil personnalisé.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="tel:0621660867"
                  className="inline-block bg-background text-foreground px-8 py-4 rounded-lg font-bold text-lg hover:shadow-elegant transition-shadow"
                >
                  Appeler : 06 21 66 08 67
                </a>
                <a 
                  href="/contact"
                  className="inline-block border-2 border-background text-primary-foreground px-8 py-4 rounded-lg font-bold text-lg hover:bg-background/10 transition-colors"
                >
                  Demander un devis
                </a>
              </div>
            </div>
          </section>

          <section id="contact" className="py-16">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold mb-4 text-center">
                Demande d'intervention Fichet
              </h2>
              <p className="text-center text-muted-foreground mb-8">
                Remplissez ce formulaire pour toute demande concernant les produits Fichet
              </p>
              <ContactForm />
            </div>
          </section>

          <InternalLinks />
        </div>
      </div>
    </>
  );
};

export default FichetLille;
