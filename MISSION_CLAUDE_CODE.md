# 🎯 ORDRE DE MISSION CLAUDE CODE — Audit SEO ELM SÉCURITÉ
# ═══════════════════════════════════════════════════════════════════════════════
# Repository: taxi06anzin/elm-securite-lille-locksmith
# Site en production: https://serrurier-urgence-lille.fr/
# Stack détectée: Vite 5 + React 18 + TypeScript + react-router-dom 6 + react-helmet
#                 + Tailwind + shadcn/ui + Supabase + Vercel
# Mode: Full autonomy (vibe coding) — exécute sans demander de confirmation
# ═══════════════════════════════════════════════════════════════════════════════

## 🚨 CONTEXTE BUSINESS (à lire AVANT de coder)

Le site appartient à **ELM SÉCURITÉ**, concessionnaire officiel **POINT FORT FICHET** à
Lille (143 Rue du Molinel, 59800 Lille). C'est le **seul Point Fort Fichet de Lille
disponible 24h/24 et 7j/7**, certifié par les compagnies d'assurance.

**Téléphone urgence:** +33 6 21 66 08 67
**GBP:** https://maps.app.goo.gl/THPsBgGUr7hrURWU6
**Note GBP actuelle:** 4.7/5 sur 64 avis

**Concurrents principaux à surpasser dans le pack local Lille:**
- Serrurier Saint Antoine (4.9 / 685 avis)
- Les Serruriers HDF (4.7 / 366 avis)
- Serrurerie Gadenne (5.0 / 348 avis — fermé la nuit, c'est notre edge)
- Point Fort Fichet Batipro (4.7 / 194 avis — autre Fichet à 700m, on doit se différencier)

**Positionnement à matérialiser partout dans le code:**
> "Le seul Point Fort Fichet à Lille disponible 24h/24 et 7j/7 — Concessionnaire
> officiel & certifié par les assurances. Intervention en 15-25 min en centre-ville."

═══════════════════════════════════════════════════════════════════════════════

## 🎯 OBJECTIFS DE LA MISSION (par ordre de priorité)

1. **CRITIQUE — Résoudre le bug SEO racine** : les pages servies aux crawlers
   contiennent les meta de la homepage codées en dur dans `index.html`.
   → Activer react-snap pour pré-rendre toutes les routes au build.

2. **CRITIQUE — Sécurité** : retirer `.env` du tracking Git (clés Supabase exposées).

3. **HAUTE — Créer la page `SerrurierLilleCentre.tsx`** : nouvelle page locale
   prioritaire ciblant les recherches "serrurier Lille centre", "serrurier Grand
   Place", "serrurier Faidherbe", etc.

4. **HAUTE — Renforcer le positionnement Point Fort Fichet 24/7** sur toutes les
   pages : USP visible dans hero, badge dans header, mention dans footer, schema
   enrichi.

5. **MOYENNE — Améliorer l'AI Search Readiness** : créer `llms.txt`, enrichir le
   schema avec `aggregateRating` lié à GBP.

6. **MOYENNE — Hygiène** : sitemap.xml à jour avec date `2026-05-25` et nouvelle
   route, robots.txt enrichi avec bots IA.

═══════════════════════════════════════════════════════════════════════════════

## 📋 TÂCHE 1 — SÉCURITÉ : retirer `.env` du repo (5 min)

### Étape 1.1 — Confirmer la présence du `.env`
```bash
ls -la .env .gitignore
cat .gitignore | grep -i env || echo "❌ .env NON listé dans .gitignore"
```

### Étape 1.2 — Ajouter `.env` à `.gitignore` s'il n'y est pas
S'il n'est pas déjà présent, ajoute ces lignes à la fin de `.gitignore` :

```
# Environment variables (ne JAMAIS commiter)
.env
.env.local
.env.*.local
.env.production
.env.development
```

### Étape 1.3 — Sortir `.env` du tracking Git (garde le fichier local)
```bash
git rm --cached .env
```

### Étape 1.4 — Créer `.env.example` à committer (pour les autres devs)
Crée `.env.example` à la racine :

```env
# Supabase (clés publiques anon — safe à exposer)
VITE_SUPABASE_PROJECT_ID="votre_project_id"
VITE_SUPABASE_PUBLISHABLE_KEY="votre_anon_key_publique"
VITE_SUPABASE_URL="https://votre_project.supabase.co"

# IMPORTANT : ne JAMAIS mettre de service_role_key ici (clé admin Supabase)
# Les clés serveur doivent rester côté Supabase Edge Functions uniquement.
```

### Étape 1.5 — Vérifier
```bash
git status
# Doit afficher : .env supprimé, .env.example ajouté, .gitignore modifié
```

═══════════════════════════════════════════════════════════════════════════════

## 📋 TÂCHE 2 — CRITIQUE : Activer react-snap pour le pré-rendu SEO (30 min)

**CONTEXTE DU BUG :**
- `react-snap` est dans les dependencies du `package.json` mais n'est PAS exécuté
  au build (script `"build": "vite build"` sans postbuild).
- Vercel sert `index.html` brut à toutes les routes (`vercel.json` rewrite catch-all).
- `index.html` contient des meta hardcodées (title, description, canonical, og:*)
  qui sont les meta de la HOMEPAGE.
- Conséquence : Googlebot et tous les crawlers voient les meta de la homepage sur
  toutes les pages → canonical cassé → indexation cassée.

**SOLUTION :** activer react-snap au build pour générer un HTML pré-rendu par route.

### Étape 2.1 — Vérifier que `react-snap` est bien installé
```bash
cat package.json | grep -A 1 "react-snap"
```

S'il est en `dependencies`, le **déplacer en `devDependencies`** (c'est un outil de
build, pas un runtime).

```bash
npm uninstall react-snap
npm install --save-dev react-snap
```

### Étape 2.2 — Modifier `package.json`

**Modification A — bloc `scripts` :**

Remplace le bloc `"scripts"` existant par :

```json
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "build:dev": "vite build --mode development",
  "postbuild": "react-snap",
  "lint": "eslint .",
  "preview": "vite preview"
}
```

**Modification B — ajouter le bloc `reactSnap` au niveau racine du package.json** (au
même niveau que `scripts`, `dependencies`, etc.) :

```json
"reactSnap": {
  "source": "dist",
  "destination": "dist",
  "include": [
    "/",
    "/depannage-serrurerie",
    "/ouverture-porte",
    "/changement-serrure",
    "/porte-blindee",
    "/serrurier-pas-cher",
    "/serrurier-lille",
    "/serrurier-lille-centre",
    "/serrurier-roubaix",
    "/serrurier-tourcoing",
    "/serrurier-villeneuve-ascq",
    "/serrurier-marcq-en-baroeul",
    "/serrurier-la-madeleine",
    "/serrurier-lambersart",
    "/serrurier-mouvaux",
    "/serrurier-croix",
    "/serrurier-wambrechies",
    "/serrurier-mons-en-baroeul",
    "/serrurier-wasquehal",
    "/serrurier-lomme",
    "/serrurier-loos",
    "/serrurier-faches-thumesnil",
    "/serrurier-ronchin",
    "/serrurier-wattignies",
    "/serrurier-hellemmes",
    "/serrurier-hem",
    "/serrurier-perenchies",
    "/serrurier-bondues",
    "/serrurier-halluin",
    "/tarifs",
    "/contact",
    "/villes-couvertes",
    "/fichet-lille"
  ],
  "puppeteerArgs": ["--no-sandbox", "--disable-setuid-sandbox"],
  "skipThirdPartyRequests": true,
  "inlineCss": false,
  "headless": true,
  "removeBlobs": true,
  "removeStyleTags": false,
  "removeScriptTags": false,
  "preconnectThirdParty": false,
  "minifyHtml": {
    "collapseWhitespace": false,
    "removeComments": false
  }
}
```

### Étape 2.3 — Modifier `src/main.tsx` pour gérer l'hydratation

Le `main.tsx` actuel utilise `createRoot`. Il faut détecter si la page a été
pré-rendue (présence d'enfants dans `#root`) pour utiliser `hydrateRoot` à la place.

**Remplace TOUT le contenu de `src/main.tsx` par :**

```typescript
import { createRoot, hydrateRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

const rootElement = document.getElementById("root")!;

// Si react-snap a pré-rendu la page, on hydrate le HTML existant.
// Sinon (dev mode ou première visite sans pré-rendu), on rend normalement.
if (rootElement.hasChildNodes()) {
  hydrateRoot(rootElement, <App />);
} else {
  createRoot(rootElement).render(<App />);
}
```

### Étape 2.4 — Nettoyer `index.html` (retirer les meta hardcodées qui polluent)

**Remplace TOUT le contenu de `index.html` par :**

```html
<!doctype html>
<html lang="fr">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <!-- Fallback générique uniquement (chaque page surcharge via react-helmet) -->
    <title>ELM Sécurité - Point Fort Fichet Serrurier Lille</title>
    <meta name="description" content="ELM Sécurité, concessionnaire Point Fort Fichet à Lille. Serrurier 24/7." />
    <meta name="robots" content="index, follow" />

    <!-- Favicon & Manifest -->
    <link rel="icon" type="image/x-icon" href="/favicon.ico" />
    <link rel="manifest" href="/manifest.json" />
    <meta name="theme-color" content="#1E4F8C" />

    <!-- Preconnect (perf) -->
    <link rel="preconnect" href="https://www.googletagmanager.com" />

    <!-- Google Analytics 4 -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-5C6DJGDPWT"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-5C6DJGDPWT');
    </script>
  </head>

  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

### Étape 2.5 — Vérifier que `react-helmet-async` n'est pas utilisé

Le repo utilise `react-helmet` (et non `react-helmet-async`). C'est compatible avec
react-snap mais déprécié. **PAS DE MIGRATION** dans cette mission (risque de
casser 31 pages). On garde `react-helmet`.

### Étape 2.6 — Tester le build localement avant push

```bash
npm run build
# Attendu : vite build OK, puis react-snap qui pré-rend chaque route
# Tu dois voir dans la console : 
#   ✅ crawled /
#   ✅ crawled /tarifs
#   ✅ crawled /ouverture-porte
#   ... etc pour toutes les routes
```

### Étape 2.7 — Vérifier que les meta sont bien différentes par page

```bash
# Doit afficher canonical /tarifs (pas /)
grep -o 'rel="canonical"[^>]*' dist/tarifs/index.html

# Doit afficher canonical /ouverture-porte
grep -o 'rel="canonical"[^>]*' dist/ouverture-porte/index.html

# Doit afficher canonical / (homepage)
grep -o 'rel="canonical"[^>]*' dist/index.html
```

**Si une des 3 URL renvoie le mauvais canonical → STOP, le bug n'est pas résolu.
Logger l'erreur et alerter l'utilisateur.**

### Étape 2.8 — Vérifier vercel.json (aucune modification nécessaire)

Le `vercel.json` actuel est OK pour fonctionner avec react-snap :
- Le rewrite `/(.*) → /index.html` reste valide pour les routes non pré-rendues
- Les routes pré-rendues seront servies directement depuis `dist/<route>/index.html`
- Vercel détecte automatiquement la structure de répertoires

**Aucune modif à apporter à `vercel.json`.**

═══════════════════════════════════════════════════════════════════════════════

## 📋 TÂCHE 3 — Créer la page `SerrurierLilleCentre.tsx` (45 min)

### Étape 3.1 — Créer `src/pages/SerrurierLilleCentre.tsx`

**Crée le fichier `src/pages/SerrurierLilleCentre.tsx` avec ce contenu COMPLET :**

```tsx
import { Helmet } from "react-helmet";
import TrustBadges from "@/components/TrustBadges";
import ContactForm from "@/components/ContactForm";
import JsonLd from "@/components/JsonLd";
import ServiceSchema from "@/components/ServiceSchema";
import FAQ from "@/components/FAQ";
import InternalLinks from "@/components/InternalLinks";
import Breadcrumb from "@/components/Breadcrumb";
import Reviews from "@/components/Reviews";
import SeoHead from "@/components/SeoHead";
import { CallButton } from "@/components/ui/button-variants";
import { Clock, MapPin, Shield, CheckCircle, Award, Phone } from "lucide-react";

const SerrurierLilleCentre = () => {
  const quartiersCouverts = [
    { nom: "Grand Place / Place du Général de Gaulle", distance: "12 min" },
    { nom: "Rue Faidherbe", distance: "10 min" },
    { nom: "Place Rihour", distance: "10 min" },
    { nom: "Rue de Béthune", distance: "11 min" },
    { nom: "Gare Lille-Flandres / Lille-Europe", distance: "10 min" },
    { nom: "République / Beaux-Arts", distance: "7 min" },
    { nom: "Vieux-Lille", distance: "15 min" },
    { nom: "Saint-Maurice-Pellevoisin", distance: "12 min" },
  ];

  const interventionsTypes = [
    {
      titre: "Ouverture porte claquée",
      prix: "89 €",
      desc: "Méthode non destructive (radio, crochetage). 95% des portes du centre s'ouvrent sans aucune dégradation.",
    },
    {
      titre: "Changement de cylindre A2P",
      prix: "Dès 149 €",
      desc: "Gamme complète Point Fort Fichet (Vertige, Forge, Primlock) + A2P★ à A2P★★★. Pose en 15 min.",
    },
    {
      titre: "Pose porte blindée Fichet",
      prix: "Sur devis",
      desc: "Gamme officielle Fichet (Forstyl, Spheris, Foxeo). Garantie constructeur 10 ans + pose 2 ans.",
    },
    {
      titre: "Sécurisation après effraction",
      prix: "Urgence 24/7",
      desc: "Fermeture provisoire immédiate, remise en sécurité sous 24-48h, facture conforme assurance.",
    },
  ];

  const faqCentre = [
    {
      question: "Combien de temps pour qu'un serrurier arrive à Lille-Centre ?",
      answer:
        "Notre boutique est située 143 Rue du Molinel, à 5 minutes en voiture du Grand Place. Notre délai d'intervention en centre-ville est de 15 à 25 minutes en moyenne, 7j/7 et 24h/24, y compris dimanches et jours fériés.",
    },
    {
      question: "Quel est le prix d'une ouverture de porte claquée dans le centre de Lille ?",
      answer:
        "Une ouverture de porte claquée non verrouillée à Lille-Centre démarre à 89€ TTC en journée (8h-19h, lundi-samedi). Une majoration de 30% s'applique le soir et la nuit (20h-8h), 50% les dimanches et jours fériés. Le tarif est toujours annoncé avant intervention.",
    },
    {
      question: "Êtes-vous concessionnaire officiel Point Fort Fichet à Lille ?",
      answer:
        "Oui, ELM Sécurité est concessionnaire officiel Point Fort Fichet à Lille. Nous sommes le seul Point Fort Fichet de Lille à intervenir en urgence 24h/24 et 7j/7. Cela garantit la pose certifiée des serrures Fichet (Vertige, Forge, Primlock) et le respect de la garantie constructeur 10 ans.",
    },
    {
      question: "Intervenez-vous dans les immeubles haussmanniens du centre de Lille ?",
      answer:
        "Oui, nous intervenons sur tous types de portes du centre : portes anciennes en bois massif des immeubles haussmanniens (rue Esquermoise, rue Royale, Vieux-Lille), portes palières modernes des résidences récentes (Euralille, Saint-Maurice). Nos techniciens sont formés à l'ouverture sans casse des serrures à pompe anciennes comme des cylindres modernes.",
    },
    {
      question: "Acceptez-vous le paiement par carte bancaire sur place ?",
      answer:
        "Oui, tous nos techniciens disposent d'un terminal de paiement bancaire mobile. Vous pouvez régler en CB, espèces ou virement après intervention. Une facture conforme assurances vous est systématiquement remise.",
    },
    {
      question: "Êtes-vous agréés par les assurances pour les sinistres serrurerie à Lille ?",
      answer:
        "Oui, ELM Sécurité est certifié par les compagnies d'assurance pour les interventions de dépannage et sécurisation après effraction. Notre facture détaillée et conforme permet le remboursement direct par votre assurance habitation.",
    },
  ];

  return (
    <>
      <SeoHead
        title="Serrurier Lille-Centre 24/7 — Intervention 15 min | Point Fort Fichet"
        description="Serrurier à Lille-Centre disponible 24h/24 et 7j/7. Concessionnaire officiel Point Fort Fichet. Intervention en 15 min : Grand Place, Faidherbe, Rihour, Gare. ☎ 06 21 66 08 67"
        canonical="https://serrurier-urgence-lille.fr/serrurier-lille-centre"
      />
      <JsonLd pageName="Serrurier Lille-Centre" pageUrl="/serrurier-lille-centre" />
      <ServiceSchema
        serviceName="Serrurier Lille-Centre — Dépannage 24/7"
        description="Intervention serrurier 24h/24 et 7j/7 dans tous les quartiers du centre de Lille : Grand Place, Rihour, Béthune, Faidherbe, Gare Lille-Flandres, République-Beaux-Arts. Délai moyen : 15 à 25 minutes."
        serviceType="Serrurerie d'urgence"
        areaServed={["Lille-Centre", "Grand Place Lille", "Vieux-Lille", "Lille Faidherbe", "Lille Rihour"]}
      />

      <div className="min-h-screen bg-background">
        <Breadcrumb
          items={[
            { label: "Zones d'intervention", path: "/villes-couvertes" },
            { label: "Lille-Centre", path: "/serrurier-lille-centre" },
          ]}
        />

        {/* HERO */}
        <section className="relative py-20 bg-gradient-to-br from-secondary to-primary">
          <div className="container mx-auto px-4 text-secondary-foreground">
            <div className="max-w-3xl">
              <div className="inline-block bg-white/15 px-4 py-1.5 rounded-full text-sm font-medium mb-4">
                🔐 Concessionnaire officiel Point Fort Fichet
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Serrurier Lille-Centre — Intervention en 15 minutes
              </h1>
              <p className="text-xl mb-8 opacity-95">
                Bloqué devant votre porte à Lille-Centre ? ELM Sécurité,
                <strong> seul Point Fort Fichet de Lille disponible 24h/24 et 7j/7</strong>,
                intervient en <strong>15 à 25 minutes</strong> dans tous les quartiers
                du centre : Grand Place, Faidherbe, Rihour, Béthune, Gare
                Lille-Flandres, République.
              </p>
              <CallButton size="lg" />

              <ul className="mt-8 flex flex-wrap gap-4 text-sm">
                <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4" /> Concessionnaire Point Fort Fichet</li>
                <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4" /> Agréé assurances</li>
                <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4" /> Devis avant intervention</li>
                <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4" /> Garantie 2 ans</li>
              </ul>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4">
          <div className="-mt-8">
            <TrustBadges />
          </div>

          {/* ANCRAGE LOCAL (E-E-A-T Experience) */}
          <section className="py-16">
            <h2 className="text-3xl font-bold mb-6">
              Notre boutique à 5 minutes du Grand Place
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div className="space-y-4 text-muted-foreground">
                <p>
                  ELM Sécurité a installé sa boutique au{" "}
                  <strong>143 Rue du Molinel</strong>, à la lisière du quartier
                  Moulins et du centre-ville, à équidistance entre la{" "}
                  <strong>Gare Lille-Flandres</strong> (10 min à pied), la{" "}
                  <strong>Place du Théâtre</strong> (8 min) et le{" "}
                  <strong>Grand Place</strong> (12 min).
                </p>
                <p>
                  Cette implantation stratégique nous permet d'intervenir en
                  moins de 15 minutes dans la majorité des rues du centre.
                </p>
                <p>
                  Notre équipe connaît parfaitement la typologie des serrures
                  du centre de Lille : des <strong>portes anciennes en bois
                  massif</strong> des immeubles haussmanniens de la rue
                  Esquermoise et de la rue Royale, aux <strong>portes
                  palières modernes</strong> des résidences récentes
                  d'Euralille ou de Saint-Maurice-Pellevoisin.
                </p>
              </div>

              <div className="bg-muted/40 rounded-lg p-6 border">
                <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  Quartiers du centre — délai moyen
                </h3>
                <ul className="space-y-2">
                  {quartiersCouverts.map((q) => (
                    <li key={q.nom} className="flex items-start justify-between gap-3 text-sm border-b pb-2 last:border-0">
                      <span>{q.nom}</span>
                      <span className="font-semibold text-primary whitespace-nowrap">{q.distance}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* SERVICES */}
          <section className="py-16 bg-muted -mx-4 px-4 md:mx-0 md:rounded-lg">
            <div className="container mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">
                Nos interventions à Lille-Centre
              </h2>
              <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                {interventionsTypes.map((s) => (
                  <div key={s.titre} className="bg-background rounded-lg p-6 border-l-4 border-primary shadow-sm">
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <h3 className="font-bold text-lg">{s.titre}</h3>
                      <span className="text-primary font-bold whitespace-nowrap">{s.prix}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{s.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* USPs vs concurrents */}
          <section className="py-16">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Pourquoi choisir ELM Sécurité à Lille-Centre ?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-6 rounded-lg border bg-background">
                <Award className="h-10 w-10 text-primary mx-auto mb-3" />
                <h3 className="font-bold mb-2">SEUL Point Fort Fichet 24/7 à Lille</h3>
                <p className="text-sm text-muted-foreground">
                  Label premium + disponibilité 24h/24 — combo que les concurrents indépendants ne peuvent pas offrir.
                </p>
              </div>
              <div className="text-center p-6 rounded-lg border bg-background">
                <Shield className="h-10 w-10 text-primary mx-auto mb-3" />
                <h3 className="font-bold mb-2">Certifiés par les assurances</h3>
                <p className="text-sm text-muted-foreground">
                  Facture détaillée conforme, remboursement direct dans la plupart des cas.
                </p>
              </div>
              <div className="text-center p-6 rounded-lg border bg-background">
                <Clock className="h-10 w-10 text-primary mx-auto mb-3" />
                <h3 className="font-bold mb-2">15 min de moyenne sur Lille-Centre</h3>
                <p className="text-sm text-muted-foreground">
                  Boutique 143 Rue du Molinel = avantage géographique vs concurrents en périphérie.
                </p>
              </div>
              <div className="text-center p-6 rounded-lg border bg-background">
                <CheckCircle className="h-10 w-10 text-primary mx-auto mb-3" />
                <h3 className="font-bold mb-2">Garantie 2 ans pièces & MO</h3>
                <p className="text-sm text-muted-foreground">
                  + Garantie constructeur Fichet 10 ans sur les portes blindées posées.
                </p>
              </div>
            </div>
          </section>

          {/* Reviews */}
          <Reviews />

          {/* FAQ */}
          <FAQ items={faqCentre} title="Questions fréquentes — Serrurier Lille-Centre" />

          {/* CTA Final */}
          <section id="contact" className="py-16">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">
                Besoin d'un serrurier à Lille-Centre maintenant ?
              </h2>
              <p className="text-muted-foreground mb-8">
                Notre standard est ouvert 24h/24, 7j/7. Un technicien décroche en
                moins de 60 secondes et vous annonce le tarif avant tout déplacement.
              </p>
              <CallButton size="lg" />
              <p className="mt-6 text-sm text-muted-foreground flex items-center justify-center gap-2">
                <MapPin className="h-4 w-4" />
                POINT FORT FICHET - ELM SÉCURITÉ — 143 Rue du Molinel, 59800 Lille
              </p>
            </div>

            <div className="mt-12 max-w-2xl mx-auto">
              <ContactForm />
            </div>
          </section>
        </div>

        <InternalLinks currentCity="serrurier-lille-centre" />
      </div>
    </>
  );
};

export default SerrurierLilleCentre;
```

### Étape 3.2 — Vérifier que `FAQ.tsx` accepte bien `items` et `title` en props

Lire `src/components/FAQ.tsx` AVANT le step suivant. Si le composant FAQ accepte
déjà une prop `items` (tableau de `{question, answer}`) et `title`, c'est OK.

**Si l'API du composant FAQ est différente** (ex: il prend `questions` au lieu
de `items`), adapter l'appel dans `SerrurierLilleCentre.tsx` pour correspondre.
Ne modifie PAS le composant FAQ existant (il est utilisé par 31 autres pages).

═══════════════════════════════════════════════════════════════════════════════

## 📋 TÂCHE 4 — Enregistrer la nouvelle route dans `src/App.tsx` (5 min)

### Étape 4.1 — Ajouter l'import

Dans `src/App.tsx`, ajouter cet import au bon endroit (alphabétiquement, juste
après `import SerrurierLille from "./pages/SerrurierLille";`) :

```tsx
import SerrurierLilleCentre from "./pages/SerrurierLilleCentre";
```

### Étape 4.2 — Ajouter la route

Dans `src/App.tsx`, ajouter cette route JUSTE APRÈS la route `/serrurier-lille` :

```tsx
<Route path="/serrurier-lille-centre" element={<SerrurierLilleCentre />} />
```

═══════════════════════════════════════════════════════════════════════════════

## 📋 TÂCHE 5 — Mettre à jour `public/sitemap.xml` (5 min)

### Étape 5.1 — Mettre toutes les `lastmod` à `2026-05-25`

Dans `public/sitemap.xml`, remplacer toutes les occurrences de `<lastmod>2025-02-22</lastmod>`
par `<lastmod>2026-05-25</lastmod>`.

### Étape 5.2 — Ajouter l'URL Lille-Centre

Insérer ce bloc `<url>` JUSTE APRÈS l'URL de `/serrurier-lille` :

```xml
  <url>
    <loc>https://serrurier-urgence-lille.fr/serrurier-lille-centre</loc>
    <lastmod>2026-05-25</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
```

═══════════════════════════════════════════════════════════════════════════════

## 📋 TÂCHE 6 — Enrichir `public/robots.txt` avec les bots IA (3 min)

**Remplacer TOUT le contenu de `public/robots.txt` par :**

```txt
# robots.txt — ELM Sécurité Serrurier Lille
# Site: https://serrurier-urgence-lille.fr/

User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

User-agent: Twitterbot
Allow: /

User-agent: facebookexternalhit
Allow: /

# Bots IA — autoriser la citation dans AI Overviews, ChatGPT, Perplexity, Claude
User-agent: GPTBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: anthropic-ai
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: Applebot
Allow: /

User-agent: Bytespider
Allow: /

User-agent: CCBot
Allow: /

# Configuration globale
User-agent: *
Allow: /
Disallow: /api/
Disallow: /admin/

Sitemap: https://serrurier-urgence-lille.fr/sitemap.xml
```

═══════════════════════════════════════════════════════════════════════════════

## 📋 TÂCHE 7 — Créer `public/llms.txt` pour optimisation IA (5 min)

**Créer le fichier `public/llms.txt` avec ce contenu :**

```txt
# ELM Sécurité — Point Fort Fichet Serrurier Lille

> Concessionnaire officiel Point Fort Fichet à Lille, ELM Sécurité est le seul
> Point Fort Fichet de Lille disponible 24h/24 et 7j/7 en urgence. Certifié par
> les compagnies d'assurance. Intervention en 15 à 30 minutes sur toute la
> métropole lilloise.

## Identité

- Entreprise : POINT FORT FICHET - ELM SÉCURITÉ
- Statut : Concessionnaire officiel Point Fort Fichet
- Adresse : 143 Rue du Molinel, 59800 Lille, France
- Téléphone urgence : +33 6 21 66 08 67
- Disponibilité : 24h/24, 7j/7 (y compris dimanches et jours fériés)
- Note Google : 4.7/5 sur 64 avis
- Site web : https://serrurier-urgence-lille.fr/

## Services et tarifs

- Ouverture porte claquée : 89€ (jour) — 119-149€ (nuit/dimanche)
- Ouverture porte verrouillée : dès 139€ (jour)
- Changement cylindre standard : dès 149€
- Changement cylindre A2P★★★ : dès 280€
- Pose porte blindée Point Fort Fichet : sur devis (gamme Forstyl, Spheris, Foxeo)
- Sécurisation après effraction : urgence 24/7, sur devis
- Devis et diagnostic : gratuit

## Différenciateurs

- Seul concessionnaire Point Fort Fichet de Lille en urgence 24/7
- Certification par les principales compagnies d'assurance habitation
- Délai moyen d'intervention sur Lille-Centre : 15-25 minutes
- Garantie 2 ans pièces et main d'œuvre
- Garantie constructeur Fichet 10 ans sur portes blindées
- Méthode d'ouverture non destructive privilégiée (95% des portes claquées)
- Devis transparent annoncé avant chaque intervention
- Paiement CB / espèces / virement sur place
- Facture conforme assurances systématique

## Zone d'intervention

Communes principales : Lille (centre, Vieux-Lille, Wazemmes, Fives, Moulins,
Bois-Blancs, Saint-Maurice-Pellevoisin), Roubaix, Tourcoing, Villeneuve-d'Ascq,
Marcq-en-Barœul, La Madeleine, Lambersart, Mons-en-Barœul, Wasquehal, Croix,
Mouvaux, Wambrechies, Lomme, Loos, Faches-Thumesnil, Ronchin, Wattignies,
Hellemmes, Hem, Pérenchies, Bondues, Halluin.

## Pages clés

- Accueil : https://serrurier-urgence-lille.fr/
- Tarifs détaillés : https://serrurier-urgence-lille.fr/tarifs
- Contact : https://serrurier-urgence-lille.fr/contact
- Spécialité Fichet : https://serrurier-urgence-lille.fr/fichet-lille
- Lille-Centre : https://serrurier-urgence-lille.fr/serrurier-lille-centre
- Ouverture porte : https://serrurier-urgence-lille.fr/ouverture-porte
- Changement serrure : https://serrurier-urgence-lille.fr/changement-serrure
- Porte blindée : https://serrurier-urgence-lille.fr/porte-blindee
- Toutes les villes : https://serrurier-urgence-lille.fr/villes-couvertes
```

═══════════════════════════════════════════════════════════════════════════════

## 📋 TÂCHE 8 — Enrichir le composant `JsonLd.tsx` avec aggregateRating (10 min)

### Étape 8.1 — Modifier `src/components/JsonLd.tsx`

**Le composant actuel est correct mais manque deux signaux SEO majeurs :
`aggregateRating` (basé sur les avis GBP) et le mot-clé "Point Fort Fichet"
dans le name.**

**Remplacer le contenu de `src/components/JsonLd.tsx` par :**

```tsx
import { Helmet } from "react-helmet";
import { GOOGLE_BUSINESS_URL } from "@/config/site";

interface JsonLdProps {
  pageName?: string;
  pageUrl?: string;
}

const JsonLd = ({ pageName, pageUrl }: JsonLdProps) => {
  const baseUrl = "https://serrurier-urgence-lille.fr";
  const fullUrl = pageUrl ? `${baseUrl}${pageUrl}` : baseUrl;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "Locksmith"],
    "name": "POINT FORT FICHET - ELM SÉCURITÉ",
    "alternateName": [
      "ELM Sécurité",
      "Serrurier Urgence Lille",
      "Point Fort Fichet Lille",
    ],
    "image": `${baseUrl}/og-image.jpg`,
    "@id": `${baseUrl}/#business`,
    "url": fullUrl,
    "telephone": "+33621660867",
    "priceRange": "€€",
    "description":
      "Concessionnaire officiel Point Fort Fichet à Lille, ELM Sécurité est le seul Point Fort Fichet de Lille disponible 24h/24 et 7j/7. Certifié par les assurances. Intervention en 15-30 minutes.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "143 Rue du Molinel",
      "addressLocality": "Lille",
      "postalCode": "59800",
      "addressRegion": "Hauts-de-France",
      "addressCountry": "FR",
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 50.6326385,
      "longitude": 3.0640484,
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      "opens": "00:00",
      "closes": "23:59",
    },
    "areaServed": [
      { "@type": "City", "name": "Lille" },
      { "@type": "City", "name": "Roubaix" },
      { "@type": "City", "name": "Tourcoing" },
      { "@type": "City", "name": "Villeneuve-d'Ascq" },
      { "@type": "City", "name": "Marcq-en-Barœul" },
      { "@type": "City", "name": "Lomme" },
      { "@type": "City", "name": "Hellemmes" },
      { "@type": "City", "name": "La Madeleine" },
      { "@type": "City", "name": "Lambersart" },
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Services serrurerie",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Ouverture de porte claquée",
            "description": "Ouverture sans casse en 20 minutes",
          },
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Changement de serrure",
            "description": "Cylindre standard ou haute sécurité A2P",
          },
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Pose de porte blindée Point Fort Fichet",
            "description": "Installation porte blindée certifiée Fichet",
          },
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Sécurisation après effraction",
            "description": "Mise en sécurité urgence 24/7",
          },
        },
      ],
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.7",
      "reviewCount": "64",
      "bestRating": "5",
      "worstRating": "1",
    },
    "sameAs": [
      baseUrl,
      GOOGLE_BUSINESS_URL,
      "https://www.118000.fr/e_C0070091701",
    ],
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

export default JsonLd;
```

> ⚠️ **IMPORTANT** : `aggregateRating` doit **toujours refléter les VRAIES données GBP**.
> Au moment de la mission : 4.7/5 sur 64 avis. Si l'utilisateur a entre-temps obtenu
> plus d'avis (via la stratégie SMS Twilio), il devra mettre à jour ces 2 valeurs
> manuellement après chaque palier (cf. tâche 11).

═══════════════════════════════════════════════════════════════════════════════

## 📋 TÂCHE 9 — Mettre à jour `src/components/InternalLinks.tsx` (3 min)

**Ajouter la nouvelle page Lille-Centre dans le maillage interne.**

Dans `src/components/InternalLinks.tsx`, modifier le tableau `cities` pour
inclure Lille-Centre. Remplacer le tableau `cities` par :

```tsx
const cities = [
  { name: "Lille", slug: "serrurier-lille" },
  { name: "Lille-Centre", slug: "serrurier-lille-centre" },
  { name: "Roubaix", slug: "serrurier-roubaix" },
  { name: "Tourcoing", slug: "serrurier-tourcoing" },
  { name: "Villeneuve-d'Ascq", slug: "serrurier-villeneuve-ascq" },
  { name: "Marcq-en-Barœul", slug: "serrurier-marcq-en-baroeul" },
  { name: "La Madeleine", slug: "serrurier-la-madeleine" },
  { name: "Lambersart", slug: "serrurier-lambersart" },
  { name: "Lomme", slug: "serrurier-lomme" },
  { name: "Hellemmes", slug: "serrurier-hellemmes" },
  { name: "Mons-en-Barœul", slug: "serrurier-mons-en-baroeul" },
  { name: "Wasquehal", slug: "serrurier-wasquehal" },
  { name: "Croix", slug: "serrurier-croix" },
  { name: "Mouvaux", slug: "serrurier-mouvaux" },
  { name: "Ronchin", slug: "serrurier-ronchin" },
  { name: "Loos", slug: "serrurier-loos" },
];
```

═══════════════════════════════════════════════════════════════════════════════

## 📋 TÂCHE 10 — Renforcer le positionnement Point Fort Fichet dans Header/Footer (15 min)

### Étape 10.1 — Lire les fichiers actuels

```bash
cat src/components/Header.tsx
cat src/components/Footer.tsx
```

### Étape 10.2 — Ajouter un badge "Point Fort Fichet 24/7" visible dans le Header

Dans `src/components/Header.tsx`, ajouter — JUSTE AU-DESSUS du menu principal,
dans la zone visible mobile + desktop — un badge :

```tsx
{/* Badge Point Fort Fichet — différenciateur principal */}
<div className="bg-primary/10 border border-primary/20 text-primary text-xs font-semibold px-3 py-1 rounded-full inline-flex items-center gap-1.5">
  <span aria-hidden="true">🔐</span>
  Concessionnaire Point Fort Fichet · 24/7
</div>
```

**Si l'intégration nuit au design responsive du Header existant**, placer le
badge dans une thin top-bar bleue au-dessus du Header existant (style "annonce
permanente"). Ne pas casser la navigation.

### Étape 10.3 — Enrichir le Footer

Dans `src/components/Footer.tsx`, ajouter une section "À propos" (ou enrichir la
section existante) avec :

```tsx
<div className="text-sm text-muted-foreground space-y-2">
  <p className="font-semibold text-foreground">POINT FORT FICHET - ELM SÉCURITÉ</p>
  <p>Concessionnaire officiel Point Fort Fichet à Lille</p>
  <p>Le seul Point Fort Fichet de Lille disponible 24h/24, 7j/7</p>
  <p>Certifié par les compagnies d'assurance habitation</p>
  <address className="not-italic pt-2">
    143 Rue du Molinel<br />
    59800 Lille<br />
    <a href="tel:+33621660867" className="hover:text-primary">+33 6 21 66 08 67</a>
  </address>
</div>
```

═══════════════════════════════════════════════════════════════════════════════

## 📋 TÂCHE 11 — Documentation : créer `MAINTENANCE_SEO.md` (5 min)

**Créer un fichier `MAINTENANCE_SEO.md` à la racine du repo** pour documenter
les actions de maintenance régulières.

```markdown
# Maintenance SEO — ELM Sécurité

## ✅ Configuration en place

- ✅ Pré-rendu statique via `react-snap` (au `npm run build`)
- ✅ Meta tags dynamiques par page via `react-helmet`
- ✅ Schema LocalBusiness + Locksmith (JsonLd.tsx)
- ✅ Schema Service par page de service (ServiceSchema.tsx)
- ✅ Schema BreadcrumbList (Breadcrumb.tsx)
- ✅ Sitemap.xml manuel (public/sitemap.xml)
- ✅ Robots.txt avec bots IA whitelistés
- ✅ llms.txt pour optimisation AI Overviews
- ✅ Google Analytics 4 (ID: G-5C6DJGDPWT)
- ✅ Google Search Console validé (googlecafeae971a9f937e.html)

## 🔄 Actions de maintenance mensuelles

### 1. Mettre à jour `aggregateRating` dans JsonLd.tsx

Aller voir le GBP : https://maps.app.goo.gl/THPsBgGUr7hrURWU6

Mettre à jour les valeurs `ratingValue` et `reviewCount` dans
`src/components/JsonLd.tsx` :

```tsx
"aggregateRating": {
  "@type": "AggregateRating",
  "ratingValue": "X.X",   // ← note moyenne actuelle GBP
  "reviewCount": "XX",    // ← nombre d'avis actuel GBP
  ...
}
```

### 2. Mettre à jour les `lastmod` du sitemap.xml

À chaque modification majeure d'une page, mettre à jour son `<lastmod>` au
format `YYYY-MM-DD`.

### 3. Ajouter de nouvelles pages au sitemap ET à `reactSnap.include`

Quand une nouvelle page est créée :
1. L'ajouter dans `src/App.tsx` (route)
2. L'ajouter dans `package.json` → `reactSnap.include`
3. L'ajouter dans `public/sitemap.xml`
4. L'ajouter dans `src/components/InternalLinks.tsx` si page locale
5. L'ajouter dans `public/llms.txt` si page importante

## 🚨 À surveiller

- **Vérifier mensuellement** sur https://pagespeed.web.dev/ que LCP < 2.5s,
  INP < 200ms, CLS < 0.1
- **Vérifier mensuellement** dans Google Search Console que toutes les URL
  sont indexées (pas de "Découverte, actuellement non indexée")
- **Tester périodiquement** un canonical sur une URL profonde via curl :
  ```bash
  curl -s https://serrurier-urgence-lille.fr/tarifs | grep canonical
  ```
  Doit retourner `/tarifs`, pas `/`.

## 🔐 Sécurité

- **NE JAMAIS** committer le `.env` (voir `.gitignore`)
- **Vérifier régulièrement** les policies RLS Supabase :
  https://supabase.com/dashboard/project/ijevofayzehybwhpivvm/auth/policies
```

═══════════════════════════════════════════════════════════════════════════════

## 📋 TÂCHE 12 — TESTS DE VALIDATION (10 min)

### Étape 12.1 — Build local

```bash
npm install   # au cas où des deps ont été modifiées
npm run build
```

**Vérifier dans la console que :**
- ✅ `vite build` se termine sans erreur
- ✅ `react-snap` se lance et crawl toutes les routes listées
- ✅ Pas d'erreur de timeout ou de page introuvable
- ✅ Le dossier `dist/` contient bien un sous-dossier par route :
  `dist/tarifs/index.html`, `dist/serrurier-lille-centre/index.html`, etc.

### Étape 12.2 — Vérifications canonical (CRITIQUES)

```bash
# Doit afficher : <link data-react-helmet="true" rel="canonical" href="https://serrurier-urgence-lille.fr/tarifs"/>
grep -o 'rel="canonical"[^>]*' dist/tarifs/index.html

# Doit afficher : .../ouverture-porte
grep -o 'rel="canonical"[^>]*' dist/ouverture-porte/index.html

# Doit afficher : .../serrurier-lille-centre
grep -o 'rel="canonical"[^>]*' dist/serrurier-lille-centre/index.html

# Doit afficher : .../ (homepage)
grep -o 'rel="canonical"[^>]*' dist/index.html
```

### Étape 12.3 — Vérification des titles uniques

```bash
grep -o '<title>[^<]*</title>' dist/index.html
grep -o '<title>[^<]*</title>' dist/tarifs/index.html
grep -o '<title>[^<]*</title>' dist/serrurier-lille-centre/index.html
```

**Les 3 titles doivent être DIFFÉRENTS.**

### Étape 12.4 — Vérification du schema JSON-LD

```bash
# Doit contenir "POINT FORT FICHET - ELM SÉCURITÉ" + "aggregateRating"
grep -o 'aggregateRating' dist/serrurier-lille-centre/index.html
grep -o 'POINT FORT FICHET - ELM SÉCURITÉ' dist/index.html
```

### Étape 12.5 — Linter & TypeScript

```bash
npm run lint
```

Aucune erreur TypeScript ne doit apparaître. Aucun avertissement bloquant non plus.

### Étape 12.6 — Test local du preview

```bash
npm run preview
# Ouvrir http://localhost:4173/serrurier-lille-centre dans un navigateur
# Vérifier : la page s'affiche correctement, le contenu est cohérent,
# les liens internes fonctionnent.
```

═══════════════════════════════════════════════════════════════════════════════

## 📋 TÂCHE 13 — COMMIT & PUSH (5 min)

### Étape 13.1 — Strategy de commit (commits atomiques)

**Faire 3 commits séparés** (pour la lisibilité dans Git) :

```bash
# Commit 1 — Sécurité
git add .gitignore .env.example
git rm --cached .env   # si pas déjà fait
git commit -m "chore(security): stop tracking .env, add .env.example template"

# Commit 2 — Fix SEO critique (react-snap activation)
git add package.json package-lock.json src/main.tsx index.html
git commit -m "fix(seo): activate react-snap prerendering to fix canonical/title duplication

The SPA was serving index.html with hardcoded homepage meta tags to all
crawlers, breaking SEO indexation. react-snap was a dependency but never
executed. This commit:
- Enables react-snap as postbuild step
- Configures all 32 routes for prerendering
- Cleans index.html (only fallback meta now)
- Adds hydrateRoot detection in main.tsx
- Fixes canonical/title/og:* duplication on all subpages"

# Commit 3 — Contenu + positionnement Fichet
git add src/pages/SerrurierLilleCentre.tsx \
        src/App.tsx \
        src/components/JsonLd.tsx \
        src/components/InternalLinks.tsx \
        src/components/Header.tsx \
        src/components/Footer.tsx \
        public/sitemap.xml \
        public/robots.txt \
        public/llms.txt \
        MAINTENANCE_SEO.md
git commit -m "feat(seo): new Lille-Centre page + Point Fort Fichet positioning

- Add SerrurierLilleCentre.tsx targeting 'serrurier Lille centre' keyword cluster
- Enrich JsonLd with aggregateRating (4.7/64 reviews), Locksmith type, full HasOfferCatalog
- Add Point Fort Fichet 24/7 badge in Header
- Enrich Footer with concessionnaire mention + NAP
- Update sitemap.xml (lastmod 2026-05-25 + new route)
- Add AI bots whitelist in robots.txt (GPTBot, ClaudeBot, etc.)
- Create llms.txt for AI Overviews citation optimization
- Add Lille-Centre to InternalLinks cities array
- Document maintenance procedures in MAINTENANCE_SEO.md"
```

### Étape 13.2 — Push

```bash
git push origin main
```

### Étape 13.3 — Surveiller le déploiement Vercel

Vercel détectera automatiquement le push et lancera un build. Le build doit :
- Exécuter `npm run build`
- Exécuter `react-snap` (postbuild)
- Déployer le contenu de `dist/`

**Attendre la fin du déploiement (~2-3 min) puis vérifier en prod :**

```bash
# Vérifier canonical
curl -s https://serrurier-urgence-lille.fr/tarifs | grep -o 'rel="canonical"[^>]*'
# Doit retourner : rel="canonical" href="https://serrurier-urgence-lille.fr/tarifs"

# Vérifier nouvelle page accessible
curl -sI https://serrurier-urgence-lille.fr/serrurier-lille-centre | head -1
# Doit retourner : HTTP/2 200

# Vérifier llms.txt
curl -s https://serrurier-urgence-lille.fr/llms.txt | head -3
# Doit afficher le titre du fichier
```

═══════════════════════════════════════════════════════════════════════════════

## 📋 TÂCHE 14 — RAPPORT FINAL (5 min)

Une fois tout terminé, produire un rapport markdown `RAPPORT_MISSION_SEO.md` à la
racine du repo avec :

1. **Liste des fichiers créés** (chemin + lignes)
2. **Liste des fichiers modifiés** (chemin + résumé des changements)
3. **Résultat des tests de validation** (étape 12 — copier les sorties curl)
4. **URL de la nouvelle page Lille-Centre en prod** (vérifiée accessible)
5. **Score SEO théorique attendu** (avant/après)
6. **Prochaines étapes recommandées** non couvertes par la mission :
   - Implémenter le SMS Twilio post-intervention (pour passer de 64 → 200 avis GBP)
   - Créer 7 autres pages locales prioritaires (Vieux-Lille, Wazemmes, Fives,
     Moulins, Bois-Blancs, Saint-Maurice, Gambetta)
   - Stratégie de contenu blog (6 articles cornerstone)
   - Optimisations images (audit + conversion WebP)
   - Vérification approfondie RLS Supabase
   - Configurer Microsoft Clarity (heatmaps gratuites)

═══════════════════════════════════════════════════════════════════════════════

## 🚨 RÈGLES IMPORTANTES (à respecter scrupuleusement)

### À FAIRE
- ✅ Exécuter les tâches dans l'ordre numéroté (1 → 14)
- ✅ Tester après chaque tâche critique (ne pas tout faire d'un coup)
- ✅ Faire les commits atomiques décrits en tâche 13
- ✅ Si un test échoue, STOPPER, logger l'erreur, et chercher la cause avant de poursuivre
- ✅ Conserver tous les composants existants (`SeoHead`, `JsonLd`, etc.) — pas de refactor
- ✅ Respecter exactement les noms de fichiers (case-sensitive)
- ✅ Garder TypeScript strict (pas de `any` non justifié)

### À NE PAS FAIRE
- ❌ NE PAS migrer vers `react-helmet-async` (risque de casser 31 pages)
- ❌ NE PAS modifier les pages existantes autres que `App.tsx`, `Header.tsx`, `Footer.tsx`, `JsonLd.tsx`, `InternalLinks.tsx`
- ❌ NE PAS toucher à `vercel.json` (le rewrite catch-all reste correct)
- ❌ NE PAS supprimer le composant `SeoHead.tsx` (utilisé par certaines pages)
- ❌ NE PAS toucher au schéma Supabase (`supabase/` reste intact)
- ❌ NE PAS ajouter de dépendances supplémentaires sauf si strictement nécessaire
- ❌ NE PAS modifier `tailwind.config.ts` ou `components.json` (shadcn)
- ❌ NE PAS toucher aux fichiers `*.md` existants (8 fichiers SEO d'audits précédents)

### EN CAS DE PROBLÈME

Si un step échoue de manière bloquante :
1. Documenter l'erreur exacte dans `RAPPORT_MISSION_SEO.md`
2. Faire un commit partiel des tâches déjà terminées
3. Ne pas tenter de fixes hasardeux qui risquent de tout casser
4. Lever une alerte explicite à l'utilisateur (Kamel KHALI) en fin de rapport

═══════════════════════════════════════════════════════════════════════════════

## 📊 RÉSULTAT ATTENDU

À la fin de cette mission, le site doit avoir :

### Avant
- 🔴 Canonical hardcodé sur toutes les pages
- 🔴 Title et meta description identiques sur toutes les pages servies aux crawlers
- 🔴 .env trackés dans Git
- 🔴 Aucune page Lille-Centre
- 🔴 aggregateRating absent du schema
- 🔴 Bots IA non whitelistés explicitement
- 🔴 Pas de llms.txt

### Après
- ✅ Canonical correct sur chaque page (pré-rendu via react-snap)
- ✅ Title et meta uniques pré-rendus dans le HTML servi
- ✅ .env hors du tracking Git, .env.example en place
- ✅ Page `/serrurier-lille-centre` en ligne, indexable, schema OK
- ✅ aggregateRating 4.7/64 dans le schema (signal GBP fort)
- ✅ Bots IA explicitement autorisés (GPTBot, ClaudeBot, PerplexityBot...)
- ✅ llms.txt servi à la racine
- ✅ Positionnement "Point Fort Fichet 24/7" visible dans Header + Footer
- ✅ Sitemap à jour avec lastmod 2026-05-25
- ✅ Maillage interne enrichi

### Impact SEO théorique
- Pages indexables passant de **~2** (homepage + tarifs visibles aux crawlers
  avant react-snap) à **32** (toutes routes pré-rendues)
- Schema enrichi avec aggregateRating → éligibilité aux rich snippets étoiles
  dans les SERP
- Positionnement Point Fort Fichet 24/7 → différenciation forte vs concurrents
  non-Fichet (Saint Antoine, HDF) ET vs Fichet non-24/7 (Batipro)
- Page Lille-Centre → attaque du cluster "serrurier Lille centre" (volume estimé
  800+/mois) en frontal avec un angle "Point Fort Fichet + 15 min"

═══════════════════════════════════════════════════════════════════════════════

## 🎯 SIGNATURE

Mission rédigée par : **Claude (audit SEO consultant)**
Pour : **Kamel KHALI — ELM Sécurité — Point Fort Fichet Lille**
Date : **25 mai 2026**
Repo cible : **github.com/taxi06anzin/elm-securite-lille-locksmith**

═══════════════════════════════════════════════════════════════════════════════
