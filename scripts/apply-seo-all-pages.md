# Script d'optimisation SEO pour toutes les pages

## Pages optimisées :

### ✅ Pages locales avec optimisations complètes
1. [x] SerrurierLille - Complété
2. [x] SerrurierRoubaix - Complété
3. [ ] SerrurierTourcoing
4. [ ] SerrurierVilleneuve
5. [ ] SerrurierMarcq
6. [ ] SerrurierMadeleine
7. [ ] SerrurierLambersart
8. [ ] SerrurierMouvaux
9. [ ] SerrurierCroix
10. [ ] SerrurierWambrechies
11. [ ] SerrurierMons
12. [ ] SerrurierWasquehal
13. [ ] SerrurierLomme
14. [ ] SerrurierLoos
15. [ ] SerrurierFaches
16. [ ] SerrurierRonchin
17. [ ] SerrurierWattignies
18. [ ] SerrurierHellemmes
19. [ ] SerrurierHem
20. [ ] SerrurierPerenchies
21. [ ] SerrurierBondues
22. [ ] SerrurierHalluin

### Pages de services
23. [ ] Index (Accueil)
24. [ ] DepannageSerrurerie
25. [ ] OuverturePorte
26. [ ] ChangementSerrure
27. [ ] PorteBlindee
28. [ ] SerrurierPasCher
29. [ ] Tarifs
30. [ ] Contact

## Template d'optimisation

Pour chaque page :

### 1. Imports à ajouter
```typescript
import InternalLinks from "@/components/InternalLinks";
import Breadcrumb from "@/components/Breadcrumb";
import OptimizedImage from "@/components/OptimizedImage";
```

### 2. Meta tags à améliorer
```typescript
<meta name="robots" content="index, follow" />
<meta property="og:title" content="[TITLE]" />
<meta property="og:description" content="[DESC]" />
<meta property="og:url" content="[URL]" />
<meta property="og:image" content="https://serrurier-urgence-lille.fr/og-image.jpg" />
```

### 3. JsonLd avec props
```typescript
<JsonLd pageName="[PAGE NAME]" pageUrl="[/page-url]" />
```

### 4. Breadcrumb après Header
```typescript
<Breadcrumb items={[{ label: "[PAGE LABEL]", path: "/[page-path]" }]} />
```

### 5. Images → OptimizedImage
```typescript
<OptimizedImage 
  src={imageSrc} 
  alt="Description SEO complète" 
  className="..."
/>
```

### 6. InternalLinks avant Footer
```typescript
<InternalLinks currentCity="[current-page-slug]" />
<Footer />
```

## Statut : En cours
Pages optimisées: 2/30
