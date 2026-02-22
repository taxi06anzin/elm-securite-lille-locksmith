# État des lieux technique et SEO – serrurier-urgence-lille.fr

**Date :** 22 février 2025  
**Cadre méthodologique :** Modules 1 à 7 (Conversion, Balisage, Indexation, E-E-A-T, Sémantique, Technique)  
**Fichier `rapport_aperçu_problemes.csv` :** Non présent dans le projet (aucun lien effectué dans ce rapport).

---

## 1. Diagnostic Sécurité / Numéro (Priorité absolue – NAP)

### Numéro de référence unique
- **Affichage :** 06 21 66 08 67  
- **Liens d’appel :** `tel:0621660867`  
- **Schema.org / international :** `+33621660867`  
- **WhatsApp :** `https://wa.me/33621660867` (même numéro, format E.164 sans +)

### Liste exhaustive des occurrences (codebase)

Scan complet des fichiers `.tsx`, `.ts`, `.html`, `.json`, `.md` et dossiers de configuration.

| Fichier | Type | Valeur | Conforme |
|---------|------|--------|----------|
| **HTML / racine** | | | |
| `index.html` | meta description | 06 21 66 08 67 | Oui |
| **Composants** | | | |
| `src/components/ui/button-variants.tsx` | lien `tel:` + texte | 0621660867 / 06 21 66 08 67 | Oui |
| `src/components/MobileCallBar.tsx` | lien `tel:` + texte | 0621660867 / 06 21 66 08 67 | Oui |
| `src/components/Footer.tsx` | lien `tel:` + texte | 0621660867 / 06 21 66 08 67 | Oui |
| `src/components/Header.tsx` | lien `tel:` + texte | 0621660867 / 06 21 66 08 67 | Oui |
| `src/components/ContactForm.tsx` | lien `tel:` + variable `whatsappNumber` | 0621660867 / 33621660867 | Oui |
| `src/components/WhatsAppButton.tsx` | wa.me | 33621660867 | Oui |
| `src/components/FAQ.tsx` | texte dans answer | 06 21 66 08 67 | Oui |
| `src/components/JsonLd.tsx` | Schema LocalBusiness | +33621660867 | Oui |
| `src/components/ServiceSchema.tsx` | Schema provider + ContactPoint | +33621660867 (×2) | Oui |
| **Pages – meta (description / og / twitter)** | | | |
| `src/pages/Index.tsx` | meta description | 06 21 66 08 67 | Oui |
| `src/pages/Contact.tsx` | meta + texte | 06 21 66 08 67 | Oui |
| `src/pages/Tarifs.tsx` | meta | 06 21 66 08 67 | Oui |
| `src/pages/VillesCouvertes.tsx` | meta | 06 21 66 08 67 | Oui |
| `src/pages/DepannageSerrurerie.tsx` | meta | 06 21 66 08 67 | Oui |
| `src/pages/OuverturePorte.tsx` | meta + FAQ answer | 06 21 66 08 67 | Oui |
| `src/pages/ChangementSerrure.tsx` | meta | 06 21 66 08 67 | Oui |
| `src/pages/PorteBlindee.tsx` | meta | 06 21 66 08 67 | Oui |
| `src/pages/SerrurierPasCher.tsx` | meta | 06 21 66 08 67 | Oui |
| `src/pages/FichetLille.tsx` | meta description | 06 21 66 08 67 | Oui |
| **Pages – villes (meta + bloc contact)** | | | |
| SerrurierLille, SerrurierRoubaix, SerrurierTourcoing, SerrurierVilleneuve | meta + lien tel + texte | 06 21 66 08 67 / tel:0621660867 | Oui |
| SerrurierMarcq, SerrurierMadeleine, SerrurierLambersart, SerrurierMouvaux | idem | idem | Oui |
| SerrurierCroix, SerrurierWambrechies, SerrurierMons, SerrurierWasquehal | idem | idem | Oui |
| SerrurierLomme, SerrurierLoos, SerrurierFaches, SerrurierRonchin | idem | idem | Oui |
| SerrurierWattignies, SerrurierHellemmes, SerrurierHem, SerrurierPerenchies | idem | idem | Oui |
| SerrurierBondues, SerrurierHalluin | idem | idem | Oui |
| **Pages – FichetLille** | CTA | tel:0621660867 + 06 21 66 08 67 | Oui |

### Vérification des formats

- **Liens d’appel :** Tous les `<a href="tel:...">` utilisent `tel:0621660867` (sans espaces ni tirets). Conforme Mobile-first (clic pour appeler).
- **Schema.org :** `JsonLd.tsx` et `ServiceSchema.tsx` utilisent `"telephone": "+33621660867"`. Conforme aux recommandations (format international).
- **WhatsApp :** `wa.me/33621660867` et variable `whatsappNumber = "33621660867"` dans ContactForm. Cohérent avec le numéro unique.

### Anomalies / anciens numéros

- **Aucune anomalie dans le code actuel.** Uniquement des références documentaires :
  - `AUDIT_SEO_SERRURIER_URGENCE_LILLE.md` et `REPARATION_SEO_COMPLETE.md` mentionnent l’ancien numéro **06 26 16 06 87** comme « corrigé » (historique).
- La meta description de `index.html` a été corrigée précédemment (06 26 16 06 87 → 06 21 66 08 67).

### Validation de l’unicité

- **Un seul numéro** utilisé sur l’ensemble du projet : **06 21 66 08 67** (et ses variantes techniques `0621660867`, `+33621660867`, `33621660867`).
- **NAP cohérent** pour la conversion et le balisage LocalBusiness (Module 7 et Module 4).

---

## 2. Audit technique (Modules 4 & 6)

### Stack déployée

| Élément | Technologie |
|---------|-------------|
| Framework | React 18.3 |
| Build / Dev | Vite 5.4 |
| Langage | TypeScript 5.8 |
| Routing | react-router-dom 6.30 |
| UI / Composants | Radix UI (shadcn-style), Tailwind CSS 3.4, tailwindcss-animate |
| SEO head | react-helmet 6.1 |
| Données | Supabase (@supabase/supabase-js), TanStack Query |
| Formulaire | react-hook-form, zod, @hookform/resolvers |
| Prerender (optionnel) | react-snap 1.23 |

### Mobile-First et performance

- **Viewport :** `index.html` : `<meta name="viewport" content="width=device-width, initial-scale=1.0" />`. OK.
- **CSS :** Tailwind avec breakpoints (sm, md, lg, xl, 2xl). Composants responsives (MobileCallBar, grilles, typo `text-5xl md:text-6xl`).
- **Liens d’appel :** Tous en `tel:0621660867` ; barre d’appel sticky sur mobile (MobileCallBar). OK pour la conversion.
- **Core Web Vitals :** Non mesurés dans ce rapport. À contrôler en production (LCP, INP/FID, CLS) via PageSpeed Insights ou Search Console.

**Points d’attention :**  
- Vérifier que les CTA (boutons d’appel, formulaire) ont une zone tactile suffisante (≥ 44px).  
- Optimiser images (og-image, visuels) : formats modernes, dimensions, lazy-load si pertinent.

### Indexation

| Élément | État | Détail |
|--------|------|--------|
| robots.txt | OK | Présent dans `public/robots.txt`. Allow / pour Googlebot, Bingbot, etc. Disallow /api/, /admin/. Sitemap déclaré. |
| Sitemap | Risque | Fichier statique `public/sitemap.xml` présent et complet (URLs principales + villes). En production, l’URL https://serrurier-urgence-lille.fr/sitemap.xml a été constatée en **500** lors d’un audit précédent — à corriger côté hébergement / build. |
| Balises canoniques | OK | Canonical défini par page : `index.html` (racine) + Helmet ou SeoHead sur chaque page (Index, Depannage, Ouverture, Changement, PorteBlindee, Tarifs, Contact, VillesCouvertes, FichetLille, toutes les pages villes). URLs absolues https://serrurier-urgence-lille.fr/... |
| Meta robots | OK | `index, follow` dans index.html et via `seoOptimizations.ts` / Helmet. |

### Sécurité et en-têtes

- **HTTPS :** Toutes les URLs canoniques et OG en https.
- **En-têtes (vite.config.ts) :** CSP, X-Content-Type-Options: nosniff, X-Frame-Options: SAMEORIGIN, Referrer-Policy. OK pour un site vitrine.

### Points forts techniques

- Stack moderne (Vite, React 18, TypeScript), maintenable.
- SEO head systématique (Helmet) : title, description, canonical, OG, Twitter par page.
- Données structurées : LocalBusiness (JsonLd), Service (ServiceSchema), FAQ, BreadcrumbList, AggregateRating + Review (Reviews).
- robots.txt et canonicals cohérents.

### Points de blocage / à traiter

1. **Sitemap en 500 en production** : Vérifier la configuration du serveur/hébergement pour servir `sitemap.xml` (ou le générer au build et l’exposer correctement).
2. **Core Web Vitals** : Non audités ici ; à mesurer et optimiser si nécessaire.
3. **Fichier `rapport_aperçu_problemes.csv`** : Absent du dépôt — non utilisé dans ce rapport.

---

## 3. Analyse sémantique (Modules 2, 3 & 5)

### Balises meta (title / description)

- **Racine :** `index.html` : title "Serrurier Lille - Dépannage 24/7 | ELM SÉCURITÉ", description avec 06 21 66 08 67.
- **Pages dynamiques :** Chaque page définit son propre `<title>` et `<meta name="description">` via Helmet (parfois SeoHead), avec mots-clés locaux (Lille, MEL, villes) et numéro où pertinent.
- **Longueurs :** Titres souvent < 70 caractères ; descriptions variables, à garder idéalement entre 150–160 caractères pour les SERP.

**Exemples de différenciation :**

- Index : "Serrurier Lille - Dépannage 24/7 | ELM SÉCURITÉ | Intervention Rapide"
- Serrurier Lille : "Serrurier à Lille disponible 24h/24..." (meta) / H1 "Serrurier Lille – Dépannage immédiat 24h/24"
- Dépannage : "Serrurier Urgence 24/7 à Lille | Intervention Rapide | ELM SÉCURITÉ" / H1 "Dépannage serrurier Lille 24h/24 et 7j/7"
- Ouverture porte : "Ouverture de Porte à Lille - Serrurier 24/7 | ELM SÉCURITÉ" / H1 "Ouverture de porte Lille – Intervention express"

### Structure des titres (H1–H6)

- **H1 :** Une seule H1 par page, thématique :
  - Index : "Serrurier Lille" + sous-titre "Dépannage rapide 24h/24 et 7j/7"
  - Serrurier Lille : "Serrurier Lille – Dépannage immédiat 24h/24"
  - Dépannage : "Dépannage serrurier Lille 24h/24 et 7j/7"
  - Ouverture : "Ouverture de porte Lille – Intervention express"
  - Villes : "Serrurier à [Ville]" (ex. "Serrurier Lille", "Serrurier Roubaix", …)
  - Tarifs : "Tarifs transparents pour tous nos services"
  - Contact : "Contactez ELM SÉCURITÉ"
- **H2 :** Utilisés pour structurer les sections (services, zones, FAQ, tarifs, témoignages, etc.). Pas de saut de niveau (H1 → H2).
- **H3–H6 :** Peu présents dans les extraits analysés ; à garder pour sous-sections si besoin (ex. FAQ, blocs tarifs).

**Verdict :** Structure Hn propre, une H1 par page, cohérente avec l’intention de la page.

### E-E-A-T (Expertise, Expérience, Autorité, Confiance)

- **Expertise :** Contenu métier (ouverture fine, cylindres, A2P, Fichet, 20–30 min) présent sur les pages services et villes.
- **Expérience :** Avis clients (Reviews) avec note 4.9 et 127 avis ; témoignages avec noms et dates. Pas de lien explicite vers une fiche Google Business (à ajouter pour renforcer).
- **Autorité :** Adresse (143 Rue du Molinel), LocalBusiness avec geo, areaServed. Pas de mention SIRET/assurance dans l’audit code (à envisager en contenu).
- **Confiance :** Tarifs affichés (89€, 129€, 150€), devis gratuit, "sans frais cachés". Grille moins détaillée que certains concurrents (ex. Gadenne).

**Quick Wins E-E-A-T :** Lien "Voir nos avis Google", grille tarifaire un peu plus détaillée, éventuellement SIRET / assurance décennale en footer ou page Contact.

### Cannibalisation "Serrurier Lille"

- **Pages susceptibles de se concurrencer :**
  - `/` (Index) : H1 "Serrurier Lille" + "Dépannage rapide 24h/24"
  - `/serrurier-lille` : H1 "Serrurier Lille – Dépannage immédiat 24h/24"
  - `/depannage-serrurerie` : H1 "Dépannage serrurier Lille 24h/24 et 7j/7"
- **Différenciation actuelle :** Les titres et H1 sont distincts (accueil général vs page géo Lille vs page service urgence). Les meta descriptions varient (angle "disponible 24h/24" vs "urgence" vs "ouverture"). Risque modéré si les titres et contenus restent bien différenciés.
- **Recommandation :** Conserver des angles clairs : accueil = "Serrurier Lille + dépannage 24/7" ; /serrurier-lille = "Serrurier Lille – géo/quartiers" ; /depannage-serrurerie = "Dépannage serrurier / urgence". Éviter de dupliquer la même phrase-clé en H1 sur plusieurs URLs.

### Données structurées

- **LocalBusiness** (JsonLd) : nom, téléphone +33621660867, adresse, geo, horaires 24/7, areaServed. OK.
- **Service** (ServiceSchema) : provider (même téléphone), ContactPoint, hoursAvailable. OK.
- **AggregateRating + Review** (Reviews). OK.
- **FAQ** (FAQPage) sur les pages concernées. OK.
- **BreadcrumbList** (Breadcrumb). OK.

---

## 4. Benchmark concurrentiel (structure, tarifs, autorité)

| Critère | serrurier-urgence-lille.fr | serrurier-lille.pro | serrurerie-gadenne.com | bocquetmultiservices.fr |
|---------|----------------------------|----------------------|-------------------------|--------------------------|
| **Structure** | Pages par ville (MEL) + services, maillage interne fort, canonicals | Multiples pages communes, 2 agences (Lille, V-d’A) | Blog + grille tarifs détaillée, transparence | Accueil + contact, plus simple |
| **Tarifs** | Forfaits "à partir de" (89€, 129€, 150€), devis gratuit | Devis en ligne, pas de grille publique | Grille très détaillée (30+ prestations, HT/TTC, déplacement) | 90€ jour, 110€ nuit, détail forfait/déplacement |
| **Autorité / E-E-A-T** | Avis internes + Schema, adresse, 24/7 | 25 ans, SIRET, agrément assurances, marques | Devis + e-catalogue, RDV gratuit | Avis Google 5/5, lien Google, témoignages |
| **Numéro** | 06 21 66 08 67 (unifié, cliquable, Schema) | 06 20 90 81 66 | 06 25 76 15 79 | 06 17 84 10 23 |

**Synthèse :** Le site est bien positionné sur la cohérence NAP et la conversion (numéro unique, CTA). Pour renforcer l’autorité perçue : s’aligner sur la transparence tarifaire (type Gadenne) et les preuves sociales (lien avis Google, type Bocquet).

---

## 5. Plan d’action – 5 priorités à fort impact (Leads)

| # | Action | Impact | Module concerné |
|---|--------|--------|------------------|
| 1 | **Garantir le numéro unique en production** : Déployer la version à jour de `index.html` (meta description avec 06 21 66 08 67) et vérifier qu’aucun ancien numéro n’apparaît (cache, anciennes versions). | Sécurise les clics et appels depuis les SERP. | 7 – Conversion |
| 2 | **Corriger l’accès au sitemap** : Faire en sorte que https://serrurier-urgence-lille.fr/sitemap.xml réponde en 200 (config hébergement ou génération au build). Vérifier dans Search Console. | Meilleure découverte et indexation des pages. | 4 & 6 – Indexation |
| 3 | **Ajouter un lien "Voir nos avis Google"** (URL de la fiche Google Business) à côté du bloc "Avis clients vérifiés" et dans le footer. | Renforce E-E-A-T et confiance, favorise les appels. | 2, 3, 5 – E-E-A-T |
| 4 | **Enrichir la page Tarifs** : Grille lisible type "Ouverture journée 89€, nuit/week-end 129€, changement serrure dès 150€" + phrase "Devis gratuit, pas de frais cachés". | Améliore conversion et potentiel snippet "tarifs serrurier Lille". | 3, 5 – Contenu / E-E-A-T |
| 5 | **Surveiller la cannibalisation "Serrurier Lille"** : Garder des titres et H1 distincts entre /, /serrurier-lille et /depannage-serrurerie ; ajuster si des positions 4–20 peinent à monter. | Optimise le partage des signaux et le positionnement. | 2, 3 – Sémantique |

---

*Rapport d’état des lieux technique et SEO – Généré à partir du codebase et des méthodologies des Modules 1 à 7. Fichier `rapport_aperçu_problemes.csv` non trouvé dans le projet.*
