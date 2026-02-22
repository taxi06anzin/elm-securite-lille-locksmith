# Audit SEO complet – serrurier-urgence-lille.fr

**Date :** 22 février 2025  
**Périmètre :** https://serrurier-urgence-lille.fr/  
**Méthodologie :** Modules 1 à 7 (Objectifs/Leads, Balisage, Indexation, E-E-A-T, Sémantique, Technique, Conversion)

---

## 1. Rapport de conformité téléphone

### Numéro de référence unique
**06 21 66 08 67** (format cliquable : `tel:0621660867`, Schema : `+33621660867`)

### Conformité par type de support

| Type | Statut | Détail |
|------|--------|--------|
| **Pages analysées (live)** | Conforme | Accueil, Dépannage, Ouverture porte : uniquement 06 21 66 08 67, tous les liens en `tel:0621660867`. |
| **Code source – composants** | Conforme | `button-variants.tsx`, `MobileCallBar.tsx`, `Footer.tsx`, `Contact.tsx`, `WhatsAppButton.tsx` : 06 21 66 08 67 + `tel:0621660867`. |
| **Code source – pages** | Conforme | Toutes les pages (Index, Tarifs, Villes, villes MEL, services) : meta + texte avec 06 21 66 08 67 et `tel:0621660867`. |
| **Schema.org (JSON-LD)** | Conforme | `JsonLd.tsx`, `ServiceSchema.tsx` : `"telephone": "+33621660867"`. |
| **index.html (meta description)** | Corrigé | Ancien numéro **06 26 16 06 87** remplacé par **06 21 66 08 67** dans la meta description. |

### Anomalie identifiée et corrigée

- **Fichier :** `index.html`  
- **Problème :** Meta description contenait **06 26 16 06 87** (ancien/erreur de saisie).  
- **Impact :** Risque de confusion et de perte d’appels (utilisateur clique ou note le mauvais numéro depuis les SERP).  
- **Action :** Correction effectuée dans le dépôt : meta description alignée sur 06 21 66 08 67.

### Vérification Mobile-first (numéro cliquable)

- Toutes les occurrences visibles du numéro dans le code sont des liens `<a href="tel:0621660867">` avec libellé "06 21 66 08 67".  
- Barre d’appel mobile (`MobileCallBar`) : "Appelez maintenant : 06 21 66 08 67" avec `tel:0621660867`.  
- **Verdict :** Conforme pour le passage à l’action sur mobile.

### Synthèse téléphone

- Une seule anomalie (meta description dans `index.html`) ; elle est corrigée dans le code.  
- Après déploiement, seul le numéro **06 21 66 08 67** sera présent sur l’ensemble du site et dans le balisage.

---

## 2. Tableau SWOT détaillé

| **Forces (S)** | **Faiblesses (W)** |
|----------------|--------------------|
| Numéro unique et cohérent (après correction index.html) sur tout le site et le Schema | Sitemap live en 500 : https://serrurier-urgence-lille.fr/sitemap.xml non accessible, budget de crawl sous-optimal |
| Balisage LocalBusiness + Service + AggregateRating (avis) bien en place | Tarifs en "à partir de" sans grille détaillée comme Gadenne (moins de transparence perçue) |
| Titres/descriptions par page (Helmet) avec mots-clés locaux et numéro | Pas de lien explicite vers avis Google (Reviews = bloc interne uniquement) |
| Contenu par ville (MEL) avec pages dédiées, bon maillage interne | Pas de preuves visuelles (photos réelles chantiers/artisan) pour renforcer E-E-A-T |
| Tarifs affichés (89€ ouverture, 150€ changement, 129€ urgence) et devis gratuit mis en avant | Risque de cannibalisation entre "serrurier Lille", "dépannage serrurerie", "ouverture porte" si titres H1/meta trop proches |
| robots.txt propre, Allow /, Sitemap déclaré | Core Web Vitals et HTTPS non mesurés ici ; à valider (LCP, FID, CLS, SSL) |
| Site en HTTPS (URLs en https://) | — |

| **Opportunités (O)** | **Menaces (T)** |
|----------------------|------------------|
| Positions 4–20 sur requêtes "serrurier Lille", "ouverture porte Lille" : optimisation sémantique et snippets (FAQ) pour viser Top 3 | Serrurier-lille.pro : ancienneté (25 ans), agrément assurances, 2 agences (Lille + V-d’A) |
| Grille tarifaire détaillée type Gadenne pour renforcer E-E-A-T et conversion | Gadenne : grille tarifaire très détaillée, devis avec e-catalogue, forte transparence = référence "tarifs" |
| Intégration avis Google (widget + lien "Voir les avis") pour renforcer confiance | Bocquet : avis Google 5/5 mis en avant, prix clairs (90€/110€), "10 ans", témoignages détaillés |
| Contenus "urgence nuit/dimanche", "porte claquée Lille" pour capter la recherche d’intention immédiate | Concurrence locale forte sur "serrurier Lille" et variantes |
| Corriger le sitemap en production (éviter 500) pour améliorer découverte et indexation | — |

---

## 3. Plan d’action "Quick Wins" (5 actions immédiates)

| # | Action | Objectif | Priorité |
|---|--------|----------|----------|
| 1 | Déployer la correction de la meta description dans `index.html` (06 21 66 08 67) | Éliminer la seule incohérence téléphone et sécuriser les clics/appels depuis les SERP | Haute |
| 2 | Corriger l’erreur 500 sur /sitemap.xml (vérifier config hébergement, servir le fichier `public/sitemap.xml` ou régénérer côté build) | Restaurer le budget de crawl et l’indexation des pages villes/services | Haute |
| 3 | Ajouter un lien "Voir nos avis Google" (URL Google Business) à côté du bloc "Avis clients vérifiés" et dans le footer | Renforcer E-E-A-T et taux de clic (étoiles + lien officiel) | Haute |
| 4 | Enrichir la page Tarifs : grille type "Ouverture journée 89€, nuit 129€, changement serrure dès 150€" + court paragraphe "Pas de frais cachés, devis gratuit" | Améliorer E-E-A-T et conversion ; viser featured snippet "tarifs serrurier Lille" | Moyenne |
| 5 | Vérifier et différencier les H1/meta des pages "serrurier Lille", "dépannage serrurerie", "ouverture porte" (angles distincts : géo vs service vs urgence) | Réduire la cannibalisation et clarifier le positionnement de chaque URL | Moyenne |

---

## 4. Roadmap technique (mobile et indexation)

### Mobile-first et expérience

- **Viewport :** Déjà configuré dans `index.html` (`width=device-width, initial-scale=1.0`).  
- **Liens d’appel :** Tous en `tel:0621660867` ; barre d’appel sticky sur mobile (MobileCallBar).  
- **Recommandations :**  
  - Tester sur Mobile-Friendly Test (Google) et sur vrais appareils.  
  - Vérifier que les CTA "Appelez" et "Devis" restent visibles sans zoom (taille tactile ≥ 44px).

### Sécurité et performance

- **HTTPS :** Utilisé sur toutes les URLs analysées.  
- **En-têtes :** CSP, X-Content-Type-Options, X-Frame-Options, Referrer-Policy présents dans `vite.config.ts` (server + preview).  
- **Recommandations :**  
  - Mesurer Core Web Vitals (LCP, INP/FID, CLS) via PageSpeed Insights ou Search Console.  
  - Optimiser images (og-image, visuels pages) : format WebP, dimensions adaptées, lazy-load si nécessaire.

### Indexation et crawl

- **robots.txt :** Allow / pour les principaux user-agents ; Sitemap déclaré.  
- **Sitemap :** En production, l’URL https://serrurier-urgence-lille.fr/sitemap.xml renvoie 500 ; le fichier existe en local (`public/sitemap.xml`) et liste les URLs principales + villes.  
- **Recommandations :**  
  1. Corriger la livraison du sitemap (config hébergeur ou génération au build) pour que /sitemap.xml réponde en 200.  
  2. Mettre à jour `<lastmod>` dans le sitemap lors des mises à jour de contenu (ou génération automatique).  
  3. Vérifier dans Google Search Console : couverture, sitemap valide, pages indexées.

### Balisage structuré

- **LocalBusiness** (JsonLd) : nom, téléphone +33621660867, adresse, geo, horaires 24/7, areaServed.  
- **Service** (ServiceSchema) : provider avec même téléphone, ContactPoint, hoursAvailable.  
- **AggregateRating + Review** (Reviews) : note 4.9, 127 avis.  
- **Recommandations :**  
  - Garder un seul "authoritative" LocalBusiness par page (éviter doublons).  
  - Si vous ajoutez une page "À propos", y inclure Organization ou LocalBusiness avec sameAs (réseaux sociaux, Google Business).

---

## 5. Analyse comparative (benchmark)

| Critère | serrurier-urgence-lille.fr | serrurier-lille.pro | serrurerie-gadenne.com | bocquetmultiservices.fr |
|---------|----------------------------|----------------------|-------------------------|--------------------------|
| **Structure** | Pages par ville + services, maillage interne fort | Nombreuses pages communes, 2 agences | Blog + grille tarifs, très structuré | Page d’accueil + contact, plus simple |
| **Tarifs** | À partir de 89€ / 150€ / 129€, forfaits clairs | Devis en ligne, pas de grille publique | Grille très détaillée (30+ prestations, HT/TTC, déplacement) | 90€ jour, 110€ nuit, détail forfait/déplacement |
| **Autorité / E-E-A-T** | Avis internes, Schema avis, adresse | 25 ans, SIRET, agrément assurances, partenaires marques | Devis détaillés, e-catalogue, RDV gratuit, transparence | Avis Google 5/5, lien Google, témoignages détaillés |
| **Numéro** | 06 21 66 08 67 (unifié, cliquable) | 06 20 90 81 66 | 06 25 76 15 79 | 06 17 84 10 23 |
| **Mobile** | CTA cliquables, barre d’appel | Liens tel: présents | — | Numéro visible et répété |

**En résumé :**  
- **ELM SÉCURITÉ** est bien alignée sur la conversion (numéro unique, CTA, forfaits lisibles) et le balisage.  
- **Quick wins** à prioriser : déployer la correction téléphone, corriger le sitemap, renforcer preuves sociales (lien avis Google) et transparence tarifaire pour se rapprocher du niveau perçu de Gadenne/Bocquet.

---

*Rapport généré dans le cadre de l’audit SEO (Modules 1–7). Prochaine étape recommandée : appliquer les 5 Quick Wins puis mesurer (Search Console, appels, positions) sous 4–8 semaines.*
