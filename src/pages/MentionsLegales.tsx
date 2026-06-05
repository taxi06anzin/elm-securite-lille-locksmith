import SeoHead from "@/components/SeoHead";
import Breadcrumb from "@/components/Breadcrumb";
import { PHONE_DISPLAY, PHONE_HREF } from "@/config/site";

const Row = ({ label, children }: { label: string; children: React.ReactNode }) => (
  <div className="grid sm:grid-cols-[220px_1fr] gap-1 sm:gap-4 py-2 border-b border-border/60">
    <span className="font-semibold text-foreground">{label}</span>
    <span className="text-muted-foreground">{children}</span>
  </div>
);

const MentionsLegales = () => {
  return (
    <>
      <SeoHead
        title="Mentions légales | ELM SÉCURITÉ - Serrurier Lille"
        description="Mentions légales d'ELM SÉCURITÉ (POINT FORT FICHET) : éditeur, SIRET, SIREN, RCS Lille, hébergeur et informations légales du serrurier à Lille."
        canonical="https://serrurier-urgence-lille.fr/mentions-legales"
      />

      <div className="min-h-screen bg-background">
        <Breadcrumb items={[{ label: "Mentions légales", path: "/mentions-legales" }]} />

        <section className="container mx-auto px-4 py-12 max-w-3xl">
          <h1 className="text-4xl font-bold mb-2">Mentions légales</h1>
          <p className="text-muted-foreground mb-10">
            Conformément à l'article 6 de la loi n° 2004-575 du 21 juin 2004 pour la confiance dans
            l'économie numérique (LCEN), les informations légales relatives au site
            <strong> serrurier-urgence-lille.fr</strong> sont précisées ci-dessous.
          </p>

          <h2 className="text-2xl font-bold mb-4">Éditeur du site</h2>
          <div className="mb-10">
            <Row label="Dénomination sociale">ELM SÉCURITÉ (enseigne « POINT FORT FICHET – ELM SÉCURITÉ »)</Row>
            <Row label="Forme juridique">SASU — Société par actions simplifiée unipersonnelle</Row>
            <Row label="Capital social">1 000 €</Row>
            <Row label="Siège social">143 Rue du Molinel, 59800 Lille, France</Row>
            <Row label="SIREN">948 562 095</Row>
            <Row label="SIRET (siège)">948 562 095 00018</Row>
            <Row label="RCS">Lille Métropole 948 562 095</Row>
            <Row label="Code APE / NAF">4332B — Travaux de menuiserie métallique et serrurerie</Row>
            <Row label="N° TVA intracommunautaire">FR13 948 562 095</Row>
            <Row label="Activité">Serrurerie, dépannage, vitrerie, menuiserie, fabrication métallique sur mesure (activité artisanale réglementée)</Row>
            <Row label="Directeur de la publication">M. Sofien LAMMOUCHI, Président</Row>
            <Row label="Téléphone">
              <a href={PHONE_HREF} className="text-primary hover:underline">{PHONE_DISPLAY}</a>
            </Row>
            <Row label="E-mail">
              <a href="mailto:elmsecuritemolinel@gmail.com" className="text-primary hover:underline">elmsecuritemolinel@gmail.com</a>
            </Row>
          </div>

          <h2 className="text-2xl font-bold mb-4">Hébergeur</h2>
          <div className="mb-10">
            <Row label="Hébergeur">Netlify, Inc.</Row>
            <Row label="Adresse">512 2nd Street, Suite 200, San Francisco, CA 94107, États-Unis</Row>
            <Row label="Site">
              <a href="https://www.netlify.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">www.netlify.com</a>
            </Row>
          </div>

          <h2 className="text-2xl font-bold mb-4">Propriété intellectuelle</h2>
          <p className="text-muted-foreground mb-10">
            L'ensemble des contenus du site (textes, images, logos, charte graphique) est la propriété
            exclusive d'ELM SÉCURITÉ, sauf mentions contraires. Toute reproduction, représentation ou
            diffusion, totale ou partielle, sans autorisation écrite préalable, est interdite et
            constituerait une contrefaçon sanctionnée par le Code de la propriété intellectuelle. La
            marque « Point Fort Fichet » est la propriété du groupe Fichet, ELM SÉCURITÉ en étant
            concessionnaire agréé.
          </p>

          <h2 className="text-2xl font-bold mb-4">Données personnelles</h2>
          <p className="text-muted-foreground mb-10">
            Les données transmises via le formulaire de contact sont utilisées uniquement pour traiter
            votre demande d'intervention ou de devis. Conformément au RGPD et à la loi
            « Informatique et Libertés », vous disposez d'un droit d'accès, de rectification et de
            suppression de vos données, en écrivant à{" "}
            <a href="mailto:elmsecuritemolinel@gmail.com" className="text-primary hover:underline">elmsecuritemolinel@gmail.com</a>.
            Aucune donnée n'est cédée à des tiers à des fins commerciales.
          </p>

          <h2 className="text-2xl font-bold mb-4">Tarifs et devis</h2>
          <p className="text-muted-foreground mb-10">
            Conformément à la réglementation applicable au dépannage à domicile (arrêté du
            24 janvier 2017), un devis gratuit est systématiquement proposé avant toute intervention.
            Le tarif est annoncé et accepté par le client avant le début des travaux. Voir nos{" "}
            <a href="/tarifs" className="text-primary hover:underline">tarifs détaillés</a>.
          </p>

          <h2 className="text-2xl font-bold mb-4">Médiation de la consommation</h2>
          <p className="text-muted-foreground">
            En cas de litige non résolu à l'amiable, le client consommateur peut recourir gratuitement
            à un médiateur de la consommation. La plateforme européenne de règlement en ligne des
            litiges est accessible à l'adresse{" "}
            <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">ec.europa.eu/consumers/odr</a>.
          </p>
        </section>
      </div>
    </>
  );
};

export default MentionsLegales;
