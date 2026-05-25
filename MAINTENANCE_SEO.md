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

### 1. Mettre à jour les données d'avis (3 endroits à synchroniser)

Quand le compteur d'avis GBP évolue (palier de 10 nouveaux avis par exemple),
mettre à jour **simultanément** les 3 fichiers suivants pour éviter toute
incohérence entre site et GBP :

#### a) `src/components/JsonLd.tsx`
```tsx
"aggregateRating": {
  "@type": "AggregateRating",
  "ratingValue": "X.X",   // ← note moyenne actuelle GBP
  "reviewCount": "XX",    // ← nombre d'avis actuel GBP
  ...
}
```

#### b) `src/components/Reviews.tsx`
```tsx
const GBP_RATING = X.X;        // ← note moyenne actuelle GBP
const GBP_REVIEW_COUNT = XX;   // ← nombre d'avis actuel GBP
```

#### c) `public/llms.txt`
```
- Note Google : X.X/5 sur XX avis
```

**Vérification après mise à jour :**
1. Aller sur https://maps.app.goo.gl/THPsBgGUr7hrURWU6 et noter les vraies valeurs
2. Les 3 valeurs doivent matcher exactement
3. Tester avec https://search.google.com/test/rich-results sur la homepage

**IMPORTANT — Pas de Review individuels :** ne JAMAIS réintroduire des avis
individuels (`@type: Review`) avec auteurs/dates fictifs dans le schema. Cela
viole les guidelines Google (suppression des rich snippets) et le code de la
consommation français (DGCCRF). Seul `aggregateRating` global, basé sur les
vraies données GBP, est autorisé.

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

## 🖼️ Gestion des images

### Ajouter une nouvelle image au projet

1. Placer le fichier source (PNG ou JPG) dans `src/assets/`
2. Lancer `npm run optimize:images` pour générer la version WebP
3. Importer dans la page avec :
   ```tsx
   import monImage from "@/assets/mon-image.png";
   ```
4. Utiliser via le composant `<OptimizedImage>` (PAS un `<img>` direct) :
   ```tsx
   <OptimizedImage
     src={monImage}
     alt="Description précise + 'Lille' si pertinent"
     loading="lazy"
     width={800}
     height={600}
   />
   ```
   `OptimizedImage` détecte automatiquement la version `.webp` (résolution au
   build via `import.meta.glob`) et la sert en `<picture>` avec fallback sur
   l'original. **Pas besoin d'importer le `.webp` à la main.**

### Règles d'optimisation

- **Format source** : préférer JPG pour les photos, PNG uniquement pour les
  graphiques avec transparence.
- **Dimensions** : max 1600px de large à la source (le script resize si plus).
- **Image HERO / above-the-fold** : `loading="eager"` + `fetchPriority="high"`
  + preload via `<Helmet>` (importer le `.webp` explicitement pour le `href`).
  ⚠️ Ne PAS précharger une image située sous la ligne de flottaison
  (anti-pattern : Lighthouse pénalise « preloaded but not used »).
- **Autres images** : `loading="lazy"` (défaut du composant).
- **Fournir width/height** quand le conteneur n'a pas de hauteur fixe (limite le
  CLS). Avec un conteneur `h-XX` + `object-cover`, le CLS est déjà maîtrisé.

### Régénérer toutes les WebP

```bash
npm run optimize:images
```
Le script est idempotent — il écrase les `.webp` existants et régénère
`public/og-image.jpg` (1200×630) à partir de `hero-locksmith.jpg`, sans toucher
aux PNG/JPG sources (conservés comme fallback `<picture>`).

### og-image (aperçus réseaux sociaux)

`public/og-image.jpg` est l'image partagée sur Facebook/LinkedIn/WhatsApp/Twitter.
Toute meta `og:image` / `twitter:image` doit pointer vers
`https://serrurier-urgence-lille.fr/og-image.jpg` (ne JAMAIS référencer un fichier
de `src/assets/` à la racine, ex. `/hero-locksmith.jpg` → 404).
