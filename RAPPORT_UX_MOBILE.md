# Rapport mission UX/UI Mobile-First — ELM Sécurité

> Persona : **Lucie, panique, dimanche 23h, porte claquée, mobile 4G.** Objectif : appel en < 2 s.
> Mission : audit + refonte UX mobile-first, desktop préservé. Date : 25 mai 2026.

---

## 1. Score UX avant / après

| # | Critère | Avant | Après | Levier |
|---|---|:---:|:---:|---|
| 1 | Time-to-Call | 5 | **9** | Barre fixe permanente + CTA appel inline header + CTA hero urgent |
| 2 | Tél. above-the-fold | 5 | **9** | Pill « Appeler » orange (header) + « Appeler 06 21 66 08 67 » géant (hero) |
| 3 | CTA permanent | 3 | **10** | `EmergencyCallBar` visible **dès le chargement** (plus de trigger scroll) |
| 4 | Proof anti-arnaque | 4 | **9** | ⭐4,7 Google (top-bar) + `TrustPills` (4,7/64 · Fichet · assurances) dans le hero |
| 5 | Promesse de délai | 5 | **9** | Ligne « Intervention 20-30 min » dans la barre + sous-titre hero |
| 6 | Tarif 89 € | 1 | **9** | Puce « Ouverture porte claquée dès 89 € » above the fold |
| 7 | Hiérarchie visuelle | 4 | **8** | Hero → Proof → CTA → Tarif → barre fixe |
| 8 | Contraste WCAG AA | 7 | **9** | Tokens `urgent` (4,75:1) et `trust` (4,9:1) recalibrés |
| 9 | Tap targets | 6 | **9** | Barre 56px, CTA hero 56/52px, pill header 48px |
| 10 | Friction cognitive | 5 | **8** | 1 action primaire « Appeler » partout, WhatsApp en secondaire |
| | **Moyenne** | **4,5/10** | **8,9/10** | **Objectif ≥ 8/10 atteint ✅** |

**Score global : 45/100 → 89/100.**

---

## 2. Captures avant / après

> ⚠️ Captures réelles non produites : le plugin de capture navigateur (claude-design) n'est pas câblé dans cet environnement (fallback prévu par l'ordre de mission). Le diagnostic s'appuie sur l'analyse exacte du DOM/CSS rendu + calcul des contrastes WCAG.
>
> Pour générer les before/after : `npm run dev`, viewports 375×667 & 390×844, états above-fold / +1 scroll / +3 scrolls / menu ouvert → `.design-audit/before/` et `.design-audit/after/`. Je peux le faire en suivi si vous activez la capture navigateur.

---

## 3. Composants livrés

| Composant | Lignes | Rôle |
|---|:---:|---|
| `EmergencyCallBar.tsx` | ~75 | Barre d'appel mobile permanente, double CTA, info délai, safe-area iOS |
| `TrustPills.tsx` | ~30 | Pastilles de preuve réutilisables (GBP / Fichet / assurances), variante `inverted` |
| `ImageWithSkeleton.tsx` | ~55 | Image anti-CLS avec skeleton (deliverable ; **hors LCP hero** — voir §8) |

---

## 4. Fichiers modifiés

| Fichier | Changement |
|---|---|
| `src/index.css` | Tokens `--urgent`, `--urgent-pulse`, `--trust` (+ `-foreground`) |
| `tailwind.config.ts` | Couleurs `urgent` (+ `.pulse`) et `trust` |
| `src/components/README.md` | **Créé** — principes UX urgence + justification tokens |
| `src/components/Header.tsx` | Top-bar mobile (Fichet + ⭐4,7), logo réduit, pill « Appeler » inline |
| `src/App.tsx` | Swap `MobileCallBar` → `EmergencyCallBar` |
| `src/components/WhatsAppButton.tsx` | Masqué sur mobile (anti-chevauchement) + `motion-safe` |
| `src/components/Layout.tsx` | Spacer bas mobile (la barre ne masque plus le footer) |
| `src/pages/Index.tsx` | Hero mobile (H1 compact, TrustPills, double CTA, tarif 89 €) |

> `MobileCallBar.tsx` **conservé** (sécurité rollback). Pages locales, meta/SEO, `_headers` **non touchés**.

---

## 5. Tests d'accessibilité (WCAG 2.2 AA)

- **Contrastes texte blanc** : `urgent` #D63900 ≈ **4,75:1** ✅ · `trust` #15803d ≈ **4,9:1** ✅ (les valeurs spec #FF5500/#16a34a échouaient à ~3,5:1 / ~3,3:1).
- **Focus rings** : `focus-visible:ring-2` sur tous les CTA créés (ring-offset adapté au fond). ✅
- **aria-label** : boutons icon-only (WhatsApp, burger) labellisés ; icônes décoratives `aria-hidden`. ✅
- **Tap targets** : barre 56px, CTA hero 56/52px, pill header 48px (≥ 48px). ✅
- **Reduced motion** : `motion-safe:animate-pulse` / `motion-safe:animate-bounce` (Tailwind ne désactive PAS l'animation par défaut — le variant est nécessaire). ✅
- **Tap delay** : `touch-manipulation` sur les CTA. ✅
- **Couleur non seule** : chaque signal couleur doublé d'icône + texte. ✅

---

## 6. Validation technique

| Test | Résultat |
|---|---|
| `npm run lint` | ✅ Aucune **nouvelle** erreur (3 erreurs pré-existantes hors périmètre : `ui/command.tsx`, `ui/textarea.tsx`, `require()` tailwind) |
| `vite build` | ✅ Build réussi (5,7 s) |
| `npm run build` (react-snap) | ✅ **33 routes** pré-rendues |
| `EmergencyCallBar` dans `dist/index.html` | ✅ `Contact d'urgence permanent` = 1 |
| Classes Tailwind `urgent`/`trust` dans le CSS | ✅ Émises (`bg-urgent`, `text-trust`, `border-urgent`, etc.) |

---

## 7. Impact business attendu

- **Time-to-Call** : barre d'appel cachée (scroll requis) → **visible et tapable dès 0 s**. C'est le gain principal.
- **Conversion mobile** : levée simultanée des 3 freins majeurs (pas de CTA permanent / pas de prix / pas de proof) → hausse attendue notable (à mesurer en analytics réel : taux de clic `tel:` mobile avant/après).
- **Bounce** : réduit par la lisibilité immédiate (H1 compact, proof above-fold).
- ⚠️ Chiffres % volontairement non inventés : à mesurer via vos events GA4 `tel_click` / scroll-depth.

---

## 8. Recommandations restantes (hors mission)

1. **Lighthouse mobile** non lancé localement → tester sur https://pagespeed.web.dev/ après déploiement (form-factor mobile).
2. **Images PNG lourdes** dans le build (`intervention-urgence.png` 2,4 Mo, `ouverture-fine.png` 2,1 Mo…) : ces pages locales servent encore le PNG. Migrer vers WebP via `OptimizedImage` (mission images).
3. **`ImageWithSkeleton`** livré mais volontairement **non branché sur le hero LCP** (le fade-in retarderait le LCP). À utiliser sur les images below-the-fold lazy.
4. **Captures + benchmark concurrents live** : à produire avec le plugin navigateur (tableau prêt dans `AUDIT_UX_MOBILE.md` §4).
5. **Suppression de `MobileCallBar.tsx`** : après quelques jours de prod stable (mission de nettoyage dédiée).
6. **Pill header `lg:hidden`** (mobile + tablette) plutôt que `md:hidden` : choix délibéré pour que la tablette garde aussi un CTA appel visible.

---

## 9. Finalisation Index post-merge (déployé en prod)

`src/pages/Index.tsx` portait deux chantiers entremêlés (migration images `OptimizedImage` + preload WebP **et** refonte hero UX). Les deux ont été fusionnés dans un commit unique, poussé sur `main` :

```
6dcca51 feat(ux): add urgent + trust color tokens for emergency CTAs
6d5a33e feat(ux): overhaul mobile UX for emergency locksmith persona
182c2a2 feat(home): finalize Index hero merging UX redesign + image optimization
```

> Split en 3 commits (et non 1) car `Index.tsx` référence les tokens `bg-urgent`/`bg-trust` et le composant `TrustPills` : ils devaient être commités **avant** pour que le build/déploiement reste cohérent.

**Vérification production** (`https://serrurier-urgence-lille.fr/`, après redeploy Netlify) :

| # | Check | Attendu | Résultat prod |
|---|---|---|:---:|
| 1a | `<picture` | ≥ 1 | **4** ✅ |
| 1b | `image/webp` | ≥ 1 | **5** ✅ |
| 2 | preload LCP `type="image/webp"` | présent | ✅ |
| 3 | `Point Fort Fichet` (SSR) | ≥ 2 | **10** ✅ |
| 4 | `Contact d'urgence permanent` (EmergencyCallBar) | 1 | **1** ✅ |
| 5 | canonical inchangé | `…-lille.fr/` | ✅ |
| 6 | `og-image.jpg` HTTP | 200 | **200 OK** ✅ |

**Tous les checks passent.** Le hero mobile (H1 unique, TrustPills, double CTA, tarif 89 €) et la barre d'urgence permanente sont rendus côté serveur (prérendu react-snap), donc visibles immédiatement même avant hydratation.

### ⚠️ Gap signalé — balise `og:image` de la home
La page d'accueil **n'a pas** de `<meta property="og:image">` : l'URL `og-image.jpg` n'existe que dans le **JSON-LD** (`"image"`). Le fichier est bien servi (200) mais le partage social de la home ne pointe pas vers une image OG explicite. **Non corrigé ici** (la mission interdit de toucher aux meta tags) — à traiter dans une mission meta dédiée.
