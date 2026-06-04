# Plan SEO V2 — Architecture, anti-cannibalisation, champ sémantique & maillage

**Date :** 2026-06-03 · Révision complète de l'architecture de contenu (remplace les recommandations du cluster).
**Principe directeur :** on **ne supprime / ne redirige aucune page existante** (site jeune = on ne jette pas de potentiel). On **différencie par intention de recherche**, on cadre le **champ sémantique** de chaque URL, et on **maille** proprement. Résultat : zéro cannibalisation, zéro perte.

---

## 1. RÉSOLUTION DES CANNIBALISATIONS (par différenciation d'intention)

Chaque paire en conflit reçoit une **intention unique** + un **canonical auto-référent** + un **mot-clé primaire distinct**. On ne redirige pas — on dé-chevauche.

| Conflit | URL | Intention assignée (unique) | Mot-clé primaire | Action |
|---|---|---|---|---|
| « serrurier Lille » (3 pages) | `/` | Urgence / marque 24-7 | **serrurier urgence Lille 24h/24** | H1 « urgence », pas « serrurier Lille » générique |
| | `/serrurier-lille` | Page commune (vue d'ensemble) | **serrurier Lille** | Hub commune → lie vers quartiers + services |
| | `/serrurier-lille-centre` | Hyper-local centre | **serrurier Lille-Centre** | Quartiers centraux (Vieux-Lille, Euralille…), ETA 15 min |
| Prix (2 pages) | `/tarifs` | Référence tarifaire complète | **tarifs serrurier Lille** | Hub prix canonique (grille complète + FAQ prix) |
| | `/serrurier-pas-cher` | Anti-arnaque / honnêteté | **serrurier pas cher Lille** | Angle « tarif honnête, éviter les arnaques » → lie vers /tarifs |
| Fichet (2 pages + site externe) | `/porte-blindee` | Produit générique | **porte blindée Lille** | Blindage vs neuve, toutes marques |
| | `/fichet-lille` | Marque + **urgence Fichet 24/7** | **serrurier Fichet Lille** | Repositionné dépannage Fichet 24/7 (créneau que le micro-site franchise ne couvre pas) |
| Villes adjacentes | 23 pages communes | 1 commune = 1 intention géo | **serrurier [commune]** | **Pas de redirection** : chaque commune a un potentiel Local Pack propre → on **enrichit** les pages fines (cf. ACTION-PLAN C3) |

> ⚠️ Décision assumée : je **n'adopte pas** la suggestion du cluster de rediriger Hellemmes/Wasquehal/Mons vers VDA ni de fusionner pas-cher→tarifs. Sur un site jeune, garder + différencier > rediriger.

---

## 2. CHAMP SÉMANTIQUE PAR PILIER (entités & cooccurrences à couvrir)

Chaque page doit « posséder » son lexique sans empiéter sur les autres.

### Pilier URGENCE — `/depannage-serrurerie` (+ spokes)
Entités/cooccurrences : *dépannage, urgence 24h/24, nuit, dimanche, jour férié, intervention rapide, 20-30 min, serrurier de garde, déplacement immédiat, porte claquée, clé perdue/cassée, serrure bloquée, barillet, effraction, mise en sécurité, agréé assurance, devis avant intervention.*

### Pilier OUVERTURE — `/ouverture-porte` (+ spokes informationnels)
*ouverture de porte, porte claquée, porte verrouillée/fermée à clé, ouverture fine, méthode non destructive, sans casse, radio/by-pass, clé à l'intérieur, gâche, loquet, crémone.*

### Pilier SÉCURITÉ/INSTALLATION — `/changement-serrure` (+ porte-blindée, fichet, A2P)
*changement de serrure, cylindre, barillet, serrure multipoints, 3/5 points, A2P★/★★/★★★, certification CNPP, anti-effraction, anti-crochetage/bumping, Fichet, Bricard, Vachette, Mul-T-Lock, blindage, porte blindée, bloc-porte.*

### Pilier TARIFS — `/tarifs` (+ pas-cher)
*tarif, prix, devis gratuit, forfait déplacement, main d'œuvre, majoration nuit/dimanche, TTC, facture assurance, transparence, arnaque, sur-facturation, fourchette de prix.*

### Pilier GÉO — `/villes-couvertes` + 23 communes
*serrurier [commune], quartiers, secteur, proximité, MEL, métropole lilloise, intervention locale.*

**Règle :** un mot-clé primaire n'apparaît en H1 que sur **une** page. Les autres pages l'emploient seulement en lien interne (ancre) ou en cooccurrence secondaire.

---

## 3. NOUVELLES PAGES À CRÉER (anti-cannibalisation par construction)

| # | URL | Pilier | Intention | Mot-clé primaire | Vol. est. | Statut |
|---|---|---|---|---|---|---|
| 1 | `/serrurier-dimanche-nuit-lille` | Urgence | Transactionnel | **serrurier dimanche / nuit Lille** | ~550/mo | ✅ **créée (ce lot)** |
| 2 | `/porte-claquee-que-faire` | Ouverture | Info → conversion | **porte claquée que faire** | ~2000/mo | ✅ **créée (ce lot)** |
| 3 | `/serrurier-agree-assurance-lille` | Urgence/Sécurité | Commercial + trust | **serrurier agréé assurance Lille** | ~200/mo | ⏳ à créer |
| 4 | `/mise-en-securite-effraction-lille` | Urgence | Transactionnel | **mise en sécurité après effraction Lille** | ~200/mo | ⏳ à créer |
| 5 | `/serrure-bloquee-que-faire` | Ouverture | Info → conversion | **serrure bloquée que faire** | ~1500/mo | ⏳ à créer |
| 6 | `/serrure-a2p-3-points-lille` | Sécurité | Commercial | **serrure A2P / 3 points Lille** | ~350/mo | ⏳ à créer |

> **On NE crée PAS de pages `prix-*`** (prix-ouverture, prix-changement…) : elles cannibaliseraient `/tarifs` et les pages service. À la place → **enrichir `/tarifs`** (ancres + FAQ prix par prestation) et ajouter un encart prix sur chaque page service.

Chaque nouvelle page = mot-clé primaire **unique**, donc **aucune cannibalisation** avec l'existant.

---

## 4. MATRICE DE MAILLAGE INTERNE

### Règles
1. Chaque **spoke** lie : ↑ son pilier · `/tarifs` · `/contact` · `/` (ancre variée, pas sur-optimisée).
2. Chaque **pilier** lie ↓ ses spokes.
3. **Cross-links** entre spokes sémantiquement liés (voir ci-dessous).
4. **Pages villes** : ajouter `InternalLinks` aux 14 pages qui en manquent + étendre le pool aux 23 communes + liens footer.
5. Ancres **variées et naturelles** (≤ 1 ancre exact-match par page cible).

### Liens des nouvelles pages
| Page | Lie vers (sortant) |
|---|---|
| `/serrurier-dimanche-nuit-lille` | `/depannage-serrurerie`, `/ouverture-porte`, `/tarifs`, `/serrurier-agree-assurance-lille`, `/contact` |
| `/porte-claquee-que-faire` | `/ouverture-porte`, `/depannage-serrurerie`, `/tarifs`, `/serrure-bloquee-que-faire`, `/contact` |
| `/serrurier-agree-assurance-lille` | `/mise-en-securite-effraction-lille`, `/porte-blindee`, `/tarifs`, `/`, `/contact` |
| `/mise-en-securite-effraction-lille` | `/porte-blindee`, `/serrurier-agree-assurance-lille`, `/serrurier-dimanche-nuit-lille`, `/contact` |
| `/serrure-bloquee-que-faire` | `/ouverture-porte`, `/changement-serrure`, `/fichet-lille`, `/contact` |
| `/serrure-a2p-3-points-lille` | `/porte-blindee`, `/fichet-lille`, `/changement-serrure`, `/tarifs` |

### Liens entrants à ajouter (depuis l'existant)
- `/ouverture-porte` → `/porte-claquee-que-faire`, `/serrure-bloquee-que-faire` ✅ (fait pour porte-claquée)
- `/depannage-serrurerie` → `/serrurier-dimanche-nuit-lille`, `/mise-en-securite-effraction-lille` ✅ (fait pour dimanche-nuit)
- `/porte-blindee` & `/fichet-lille` → `/serrure-a2p-3-points-lille`
- `/tarifs` → `/serrurier-pas-cher`, encarts prix par service
- Header/Footer : ajouter « Urgence nuit & dimanche » et « Agréé assurance » au menu services

### Maillage villes (chantier séparé)
- `InternalLinks.tsx` : étendre le pool de 16 → 23 communes ; ajouter le composant aux 14 pages villes qui ne l'ont pas (Hem, Tourcoing, Croix, Faches, Halluin, Lomme, Loos, Mons, Mouvaux, Pérenchies, Ronchin, Wambrechies, Wasquehal, Wattignies).
- `Footer` : convertir la liste des zones en liens `<Link>`.
- `Breadcrumb` villes : insérer le niveau hub `Villes couvertes`.

---

## 5. GABARIT D'OPTIMISATION « MAX » (chaque nouvelle page)

- `SeoHead` : title ≤ 60c avec mot-clé primaire + marque ; meta description ≤ 155c avec CTA + n° ; canonical auto-référent.
- `Breadcrumb` (schema BreadcrumbList) + `JsonLd` (LocalBusiness) + `ServiceSchema` (Service) + `FAQ` items dédiés (schema **FAQPage** par page).
- Hero : H1 (mot-clé primaire), sous-titre intention, **CTA appel rouge** + WhatsApp, signal délai + prix.
- Corps : 1200-1600 mots **uniques**, H2/H3 structurés, listes scannables, **passages citables** (faits extractibles pour AI/AIO), encart prix, réassurance (Fichet, agréé assurance, devis avant).
- `Reviews` (preuve sociale) + bloc **maillage interne** (services liés) + `ContactForm`.
- Accessibilité : tap-targets, `aria-label`, contrastes (tokens `urgent`/`whatsapp`).

---

## 6. SUITE (ordre d'exécution)
1. ✅ Ce lot : pages #1 et #2 + câblage (routing, sitemap, react-snap, liens entrants).
2. Pages #3-#6 (mêmes gabarits) — peuvent être produites en parallèle.
3. Enrichissement `/tarifs` (FAQ prix) + repositionnement `/fichet-lille` & `/serrurier-pas-cher`.
4. Chantier maillage villes (InternalLinks pool + 14 pages + footer liens + breadcrumb hub).
5. Enrichissement des pages villes fines (anti-doorway).
