# Rapport SEO — Master Audit (skills) — ELM Sécurité / Serrurier Urgence Lille

> Audit conduit avec le pack **claude-code-seo-skills** (seo-master-audit) — analyse **quantitative** du build `dist/` via les scripts `site_inventory`, `seo_static_audit`, `internal_link_graph`, `robots_sitemap_check`. Date : 2026-06-05.

## 1. Résumé exécutif
- **Site :** https://serrurier-urgence-lille.fr/ (Vite + React, react-snap, Netlify)
- **Type :** Service local — serrurier d'urgence, hybride (siège Lille + zone MEL)
- **Objectif business :** appels / devis (urgence)
- **Périmètre :** build `dist/` (40 routes pré-rendues) + vérifs live
- **Données utilisées :** scripts du pack sur `dist/` ; sitemap/robots live. **Non disponibles :** GSC/GA4, backlinks (pas d'export fourni).
- **Conclusion :** Site désormais **techniquement sain et bien maillé** après les 11 PR de la session. **Aucun blocage P0.** Le seul pilier faible est l'**autorité hors-site** (P1). Reste des optimisations on-page mineures (titres trop longs).

## 2. Priorités immédiates

| Prio | Action | Pilier | Impact | Effort | Preuve (script) |
|---|---|---|---|---|---|
| **P1** | Acquérir autorité hors-site : vélocité avis GBP (65→150), citations (PagesJaunes, Yelp), backlink `fichet.fr` | Autorité | Fort (le levier dominant en local) | L | Domaine jeune, ~0 backlink ; pilier non couvert |
| **P2** | Raccourcir **30 titres > 60c** (≤ 60c, idéalement ≤ 57c) | Contenu/On-page | CTR SERP | M | `seo_static_audit` : 30 titres >60c (max **83c**) |
| **P2** | Raccourcir **3 meta descriptions** trop longues | On-page | CTR | S | `fichet-lille`, `serrurier-lille-centre`, `serrurier-pas-cher` |
| **P2** | Renforcer 4 pages sous-liées (footer) | Maillage | Crawl/PageRank | S | incoming 23-24 : `lille-centre`, `halluin`, `mouvaux`, `perenchies` |
| **P2** | Gérer la page 404 (statut 404 réel / noindex) | Technique | Évite soft-404 | S | `404.html` : thin, sans canonical (artefact SPA) |
| **P3** | Enrichir `llms.txt` des 6 nouvelles pages · icônes PWA · technicien nommé | Contenu/GEO | Confort/E-E-A-T | S | — |
| **P3** | Code-splitting (bundle unique ~600 Ko) via migration vers un prérendeur SSG | Technique/Perf | INP mobile | L | 1 chunk JS 755 Ko (react-snap impose le bundle unique) |

## 3. Diagnostic technique
**Crawl & indexation (sain) :** 40 routes **pré-rendues** (react-snap 41/41) ; `sitemap.xml` **40 URLs valides** (robots_sitemap_check OK) ; **canonical alignés sur le slash final** (= URL servie, plus de canonical→redirection) ; robots autorise Googlebot/Bingbot + bots IA (dont OAI-SearchBot).
**Balises (à optimiser) :** `seo_static_audit` → **30 titres > 60c** (tronqués en SERP), **3 meta descriptions** trop longues. H1 présents partout (les `missing_h1`/`missing_title` ne concernent que `200.html`, `404.html` et le fichier de vérif Google — artefacts, pas de vrais contenus).
**Données structurées :** LocalBusiness+Locksmith, FAQPage par page, Service, BreadcrumbList ; **SIRET/SIREN/TVA/legalName** ajoutés. `jsonld_count ≥ 1` sur toutes les pages.
**Sécurité/perf :** HSTS, CSP (avec `frame-src` Maps), caching OK ; **bundle JS unique ~755 Ko** (react-snap impose le mono-bundle → INP mobile à surveiller).

## 4. Diagnostic contenu
- **Intentions couvertes :** urgence, ouverture, sécurité/Fichet/A2P, tarifs, géo (23 communes), + guides info (porte claquée, serrure bloquée). Champ sémantique différencié → **anti-cannibalisation par intention** (plan V2).
- **Pages à fort potentiel :** les 6 nouvelles pages (transactionnel + info→conversion), bien pré-rendues (1500-2300 mots, FAQPage).
- **Pages faibles :** plus de doorway critique — 12 pages villes enrichies (contenu local unique). Quelques pages villes restent moyennes (amélioration continue).
- **Cannibalisation :** résolue par différenciation (`/` urgence vs `serrurier-lille` commune vs `lille-centre` hyperlocal ; `tarifs` vs `pas-cher` anti-arnaque ; `porte-blindee` vs `fichet-lille` urgence Fichet).

## 5. Diagnostic autorité / popularité — **pilier faible (P1)**
- **Backlinks :** non mesurés (pas d'export) mais domaine récent → profil quasi nul. **Lien réseau Fichet officiel** ajouté en `sameAs`.
- **Signaux de confiance :** **Mentions Légales + SIRET** (page dédiée + footer + schema) ✅ ; avis Google réels (4,7/65) affichés ✅ ; certification assurances mentionnée.
- **Avis & réputation :** 65 avis GBP — **insuffisant** vs concurrents (100-300). **Levier n°1 : vélocité d'avis + citations.**

## 6. Maillage interne — **excellent**
- **2791 liens internes** sur 43 pages (≈ 65/page).
- **0 orpheline réelle** (seuls `200.html`/`404.html`/fichier de vérif sont "orphan_like" = artefacts).
- **Distribution entrante saine :** `fichet-lille` 167, `tarifs` 133, `pas-cher` 120, `ouverture-porte` 107, accueil 105 ; nouvelles pages 40-99.
- **Ancres :** variées (services + villes + footer sitewide). **À ajuster :** 4 pages à 23-24 entrants (`lille-centre`, `halluin`, `mouvaux`, `perenchies`) → les ajouter au footer.

## 7. Mesure et suivi
- **KPI :** positions « serrurier urgence Lille » + « serrurier [commune] » ; appels (call tracking) ; avis GBP (volume/vélocité) ; pages indexées (GSC) ; CTR (titres).
- **OKR 90 j :** avis 65→120 ; ≥ 15 citations NAP cohérentes ; 6 nouvelles pages indexées + 1ʳᵉ page sur leur requête longue traîne.
- **Plan 30/60/90 :**
  - **0-7 j :** soumettre `sitemap.xml` (40 URLs) en GSC + demander indexation des 6 nouvelles pages ; raccourcir les 30 titres.
  - **30 j :** lancer la collecte d'avis (SMS post-intervention) ; créer citations annuaire ; obtenir le backlink `fichet.fr`.
  - **60 j :** enrichir pages villes moyennes ; surveiller CTR/positions (GSC) ; ajuster meta.
  - **90 j :** consolider autorité (presse locale, partenaires) ; envisager migration SSG pour code-splitting si INP mobile insuffisant.

## 8. Annexes
- **Commandes :** `site_inventory.py dist` · `seo_static_audit.py dist` · `internal_link_graph.py dist` · `robots_sitemap_check.py <live>`
- **Fichiers générés :** `audit-skills-out/` (site_inventory.csv, seo_static_audit.{csv,json,md}, internal_links_{pages,edges}.csv)
- **Hypothèses non vérifiées :** backlinks (pas d'export), CWV terrain (pas de CrUX/GA4), positions réelles (pas de GSC).
