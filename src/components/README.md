# Composants — principes UX "urgence serrurier"

Ces composants servent une persona en **panique** (porte claquée, nuit, mobile, 4G).
Toute décision design est mesurée à l'aune d'une question : *« Lucie peut-elle appeler en moins de 2 secondes ? »*

## 5 principes

1. **Règle des 3 secondes** — le visiteur identifie le service + le moyen de contact en 3 s max.
2. **One thumb policy** — les CTA principaux vivent dans la zone atteignable au pouce sur mobile (bas de l'écran). D'où la barre fixe `EmergencyCallBar` en bas.
3. **Zero decision** — un seul CTA primaire « Appeler » (orange urgent), un secondaire « WhatsApp » (vert). Jamais plus.
4. **Trust above all** — note Google (4,7/64), Point Fort Fichet et « agréé assurances » visibles **avant** que le visiteur ne cherche (`TrustPills` dans le hero).
5. **Pricing transparency** — le prix d'appel « dès 89 € » apparaît au-dessus du fold pour lever l'angoisse arnaque.

## Tokens de couleur

| Token | Valeur HSL | Usage | Contraste texte blanc |
|---|---|---|---|
| `urgent` | `16 100% 42%` | CTA d'action immédiate (Appeler) | ~4,75:1 ✅ AA |
| `urgent.pulse` | `16 100% 50%` | flash d'état `:active` uniquement | transitoire |
| `trust` | `142 72% 29%` | WhatsApp / preuve sociale | ~4,9:1 ✅ AA |

> **Pourquoi ces valeurs et pas `#FF5500` / `#16a34a` de la spec ?**
> Le texte blanc sur `#FF5500` ne donne que **~3,5:1** et sur `#16a34a` **~3,3:1** — les deux **échouent** le seuil WCAG AA de 4.5:1 pour du texte normal. La règle explicite de la mission (« si un contraste ne passe pas WCAG AA : ajuster la couleur avant push ») prime : les teintes ont été assombries jusqu'à passer 4.5:1, tout en restant des couleurs d'urgence vives et distinctes du bleu marque (`primary`, inchangé).

## Règles d'accessibilité appliquées

- **Animations** : `motion-safe:` sur toute animation (`animate-pulse`) → respecte `prefers-reduced-motion`. Tailwind ne désactive **pas** les animations automatiquement ; il faut le variant `motion-safe`.
- **Focus** : `focus-visible:ring-2` sur tous les `<a>`/`<button>` interactifs.
- **Hit targets** : ≥ 48–56px de hauteur sur les CTA (WCAG 2.5.5 + Apple HIG).
- **Tap delay** : `touch-manipulation` sur les CTA (supprime le délai 300 ms iOS).
- **Icon-only** : `aria-label` explicite + `aria-hidden` sur l'icône décorative.
- **Couleur non seule** : chaque signal couleur est doublé d'une icône ou d'un texte.

## Composants clés

- **`EmergencyCallBar`** — barre d'appel mobile permanente (visible dès le chargement, pas au scroll). Double CTA, info délai, safe-area iOS. Remplace `MobileCallBar` dans `App.tsx`.
- **`TrustPills`** — pastilles de preuve (note GBP, Fichet, assurances). Variante `inverted` pour fond sombre.
- **`ImageWithSkeleton`** — image anti-CLS avec skeleton. ⚠️ **Ne pas utiliser pour l'image LCP du hero** : le fade-in `opacity-0 → 100` retarderait le LCP. Le hero reste en `OptimizedImage` préchargé.
