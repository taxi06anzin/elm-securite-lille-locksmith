# Stratégie SEO consolidée — ELM Sécurité / Point Fort Fichet Lille

**Date :** 2026-06-02 · Synthèse de 10 agents SEO (technique, contenu, schema, local, GEO, performance, cluster, SXO, backlinks, sitemap)
**Documents liés :** `FULL-AUDIT-REPORT.md` (audit détaillé, score 69/100), `ACTION-PLAN.md` (correctifs priorisés)

---

## 1. L'INSIGHT STRATÉGIQUE CENTRAL

> **Le combat ne se gagne PAS sur le site web — il se gagne sur la fiche Google (GBP) et l'autorité hors-site.**

Le site est techniquement bien construit (69/100). Mais sur les requêtes à plus forte valeur (« serrurier urgence Lille », « serrurier [ville] »), le résultat organique arrive **après** : les annonces Ads → le Local Pack (Maps) → les agrégateurs (PagesJaunes, Depanneo, ChronoServe). Améliorer les pages ne suffira pas tant que ces 4 barrières structurelles ne sont pas levées :

| Barrière | Réalité | Levier |
|----------|---------|--------|
| **Proximité (Local Pack)** | Adresse à Lille → quasi jamais dans le pack de Roubaix/Tourcoing | Configurer les **zones de service (SAB)** sur la fiche Google |
| **GBP étouffe l'organique** | L'utilisateur en urgence clique le Local Pack, pas l'organique | Vélocité d'avis : **64 → 150+** |
| **Agrégateurs (positions 3-7)** | DA 60+, impossible à doubler à court terme | **S'inscrire dessus** (PagesJaunes, Yelp FR…) plutôt que les combattre |
| **Déficit d'autorité** | Domaine récent, ~0 backlink ; concurrents 100-300 avis | Citations + le **lien réseau Fichet officiel** |

**Le moat d'ELM :** concessionnaire **officiel Point Fort Fichet** — vérifiable, rare pour un service d'urgence 24/7. C'est l'atout n°1 et il est **sous-exploité** (revendiqué partout, prouvé nulle part).

**⚠️ Auto-cannibalisation entre deux sites :** ELM possède aussi `fichet-pointfort-lille-moulins.fr` (micro-site franchise Fichet) qui concurrence directement `/fichet-lille` sur « porte blindée fichet lille ». À arbitrer (voir P1-7).

---

## 2. FEUILLE DE ROUTE PAR ROI

### P0 — Hors-site / GBP (ROI le plus élevé — le vrai levier)
1. **Vélocité d'avis Google** : viser 150 avis fin Q3 (SMS avec lien avis après chaque intervention). *Le seul levier qui déplace le Local Pack.*
2. **Zones de service GBP** : déclarer Roubaix, Tourcoing, Villeneuve-d'Ascq, Marcq sur la fiche.
3. **Réseau Fichet officiel** : lien ajouté dans le `sameAs` ✅ ; obtenir le lien **entrant** depuis `fichet.fr/concessionnaires` (1 appel — backlink #1 par autorité/pertinence).
4. **Citations agrégateurs** (NAP identique) : PagesJaunes, Yelp FR, Foursquare, Kompass, Habitissimo, CMA Hauts-de-France.
5. **Arbitrer les 2 sites** : différencier ou rediriger `fichet-pointfort-lille-moulins.fr`.

### P1 — On-site à fort impact
6. **Mentions légales + SIRET** (obligation légale FR + E-E-A-T) — *cf. ACTION-PLAN C1*.
7. **Repositionner `/fichet-lille`** en « Dépannage **urgence Fichet 24/7** » (créneau que le micro-site franchise ne couvre pas) + ancre prix (« porte blindée Fichet dès 2 680 € »).
8. **Avis visibles** sur l'accueil + `DepannageSerrurerie` ; **schema FAQPage** scopé par page.
9. **Pages villes Tier-A** (Roubaix, Tourcoing, VDA) : ajouter section **urgence/nuit/dimanche** + prix + FAQ locale.
10. **Maillage interne** : ajouter les 7 villes manquantes dans `InternalLinks`, liens footer, niveau hub dans le fil d'Ariane.

### P2 — Expansion de contenu (architecture hub-and-spoke)
11. **Nouvelles pages prioritaires** (gaps mots-clés à forte valeur) :
    - `/serrurier-dimanche-nuit-lille` (≈550/mois transactionnel, **aucune page dédiée**)
    - `/porte-claquee-que-faire` (≈2 000/mois informationnel → entonnoir)
    - `/serrurier-agree-assurance-lille` (conversion + colle au moat assurance)
    - `/mise-en-securite-effraction-lille`
    - `/prix-ouverture-de-porte`, `/prix-changement-serrure-lille`, `/prix-porte-blindee-lille`
    - `/serrure-a2p-3-points-lille` (exploite l'autorité Fichet)
12. **Cluster blog** (conseils) : que faire après cambriolage, choisir son serrurier (anti-arnaque), guide A2P…

### P3 — Technique / polissage
13. Correctifs schema **déjà appliqués** (PR Jour-1) ; reste : code-splitting du bundle 597 Ko, recompression des PNG de secours (2 Mo), nettoyage sitemap (retirer priority/changefreq, lastmod réels).

---

## 3. MATRICE MOTS-CLÉS STRATÉGIQUE (priorités)

| Cluster | Intention | Mot-clé principal | Page cible | Statut |
|---------|-----------|-------------------|-----------|--------|
| Urgence | Transactionnel | serrurier urgence Lille 24h/24 | `/` + `/depannage-serrurerie` | ✅ à renforcer |
| Urgence | Transactionnel | **serrurier dimanche / nuit Lille** | `/serrurier-dimanche-nuit-lille` | ❌ **à créer (P2)** |
| Urgence | Transac.+assur. | **serrurier agréé assurance Lille** | `/serrurier-agree-assurance-lille` | ❌ **à créer (P2)** |
| Urgence | Transac. | mise en sécurité effraction Lille | `/mise-en-securite-effraction-lille` | ❌ à créer |
| Ouverture | Transac. | ouverture de porte Lille | `/ouverture-porte` | ✅ (meilleure page) |
| Ouverture | Info→Transac | **porte claquée que faire** | `/porte-claquee-que-faire` | ❌ **à créer (P2)** |
| Sécurité | Commercial | changement de serrure Lille | `/changement-serrure` | ✅ |
| Sécurité | Commercial | porte blindée **Fichet** Lille | `/fichet-lille` (à repositionner) | ⚠️ cannibalisation |
| Sécurité | Commercial | serrure A2P / 3 points Lille | `/serrure-a2p-3-points-lille` | ❌ à créer |
| Tarifs | Commercial | tarifs serrurier Lille | `/tarifs` (+ fusion `/serrurier-pas-cher`) | ⚠️ cannibalisation |
| Géo | Transac. | **serrurier urgence [commune]** | 23 pages villes | ⚠️ ciblent « serrurier+ville » générique, pas « urgence » |

**Cannibalisations à corriger :** `serrurier-lille` vs `serrurier-lille-centre` ; `tarifs` vs `serrurier-pas-cher` ; `/fichet-lille` vs le micro-site franchise.

**Consolidation villes :** regrouper les 7 plus petites (Mouvaux, Bondues, Halluin, Pérenchies, Wattignies, Faches, Ronchin) ; envisager de fondre Hellemmes/Wasquehal/Mons dans la page Villeneuve-d'Ascq.

---

## 4. CONCURRENCE

- **Serrurerie Gadenne** = concurrent SEO n°1 (page tarifs riche, 5 articles blog dont « porte claquée », ~349 avis). Benchmark contenu à battre.
- **ADR / agrégateurs** = dominent positions 3-7 → **s'y inscrire**.
- **Avantage ELM unique & vérifiable** = statut officiel Point Fort Fichet → à mettre **au centre** des titres, schema et pages Fichet/A2P.

---

## 5. SCORES PAR DIMENSION (rappel)

| Audit | Score |
|-------|------|
| Audit on-page global (FULL-AUDIT) | **69/100** |
| SXO (adéquation SERP/expérience) | 56/100 |
| AI Search / GEO | 76/100 |
| Autorité / backlinks | Très faible (domaine récent, ~0 backlink) — **INSUFFISANT** |

*Le delta entre un bon site (69) et des positions réelles se joue sur les sections 1 et 2 ci-dessus : GBP, avis, autorité, et architecture SERP.*
