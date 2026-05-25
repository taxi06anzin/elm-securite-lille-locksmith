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
