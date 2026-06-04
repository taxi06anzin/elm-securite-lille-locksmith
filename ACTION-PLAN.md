# SEO Action Plan — ELM Sécurité / Serrurier Urgence Lille

**Date:** 2026-06-02 · Companion to `FULL-AUDIT-REPORT.md` · Overall score **69/100**
Priority: **Critical** (fix now) > **High** (≤1 wk) > **Medium** (≤1 mo) > **Low** (backlog)

---

## CRITICAL

### C1 — Add French legal page + SIRET *(Trust, E-E-A-T, legal)*
French law (LCEN) requires SIRET/RCS, RC Pro insurer, and Mentions Légales/CGV to be accessible.
- Create `/mentions-legales` page (SIRET, RCS, owner, RC Pro insurer, address) and link it in `Footer.tsx`.
- Add to `JsonLd.tsx`: `"identifier": {"@type":"PropertyValue","name":"SIRET","value":"<num>"}`.
- **Effort:** Low · **Impact:** High

### C2 — Fix malformed schema URL on 2 pages *(Schema validity)*
`SerrurierBondues.tsx` and `SerrurierHellemmes.tsx` produce `https://serrurier-urgence-lille.frhttps://…`.
- Change the `<JsonLd … pageUrl=… />` prop to **path-only**: `pageUrl="/serrurier-bondues"` and `pageUrl="/serrurier-hellemmes"`.
- Validate both with Google Rich Results Test after deploy.
- **Effort:** Low (2 lines) · **Impact:** High

### C3 — Remediate ~12–15 doorway-risk city pages *(Content, HCU deindex risk)*
Pages: Wattignies, Faches, Mouvaux, Perenchies, Croix, Hem, Mons (+ audit the rest).
For each, add: 400+ words of genuinely local content (named streets/landmarks/housing stock), a 3-item **local** FAQ, a pricing anchor ("dès 89€ · 20-30 min"), the `Reviews` component, and `InternalLinks`. Where local substance is impossible, consolidate into a parent page or `noindex`.
- **Effort:** High · **Impact:** High

---

## HIGH

### H1 — Standardize the business name *(Entity, NAP)*
Canonical: display `ELM Sécurité` / full `POINT FORT FICHET – ELM Sécurité` (match the GBP listing).
- `ServiceSchema.tsx` provider: replace the standalone `name` with `"@id":"https://serrurier-urgence-lille.fr/#business"`.
- Align `manifest.json` (`name`/`short_name`). Keep schema name == GBP name everywhere.

### H2 — Expand `areaServed` to all 24 communes *(Local, AI visibility)* — `JsonLd.tsx`.

### H3 — Roll out internal linking *(On-page, crawl equity)*
Add `<InternalLinks/>` to the 14 city pages missing it; expand the component pool from 16 → all 24 cities; convert `Footer` city zones from text to `<Link>`.

### H4 — Optimize/replace bloated PNG fallbacks *(Performance, Images)*
Recompress the five 1.7–2.4 MB PNGs to <150 KB, or drop PNG fallbacks in favor of AVIF+WebP. Re-run `npm run optimize:images`.

### H5 — Code-split the bundle *(CWV / INP)*
Add route-level lazy loading (`React.lazy`) and/or `build.rollupOptions.output.manualChunks` in `vite.config.ts` to break up the 597 KB chunk.

### H6 — Substantiate the Point Fort Fichet dealer claim *(Authoritativeness)*
On `FichetLille.tsx`: dealer certificate image + link to Fichet's official concessionnaire directory + dealer number.

### H7 — De-duplicate `aggregateRating` *(Schema)*
Emit it from one component only (`JsonLd.tsx` **or** `Reviews.tsx`), not both.

---

## MEDIUM

| ID | Action | File |
|----|--------|------|
| M1 | Surface 2-yr guarantee + insurance cert + "95% non-destructive" as **page prose** ("Engagements" block) | `Index.tsx` / service pages |
| M2 | Add Google Maps embed (geo-confirmation signal) | `Contact.tsx`, `SerrurierLilleCentre.tsx` |
| M3 | `closes: "23:59"` → `"24:00"` | `JsonLd.tsx`, `ServiceSchema.tsx` |
| M4 | `reviewCount` → integer `64`; remove self-ref from `sameAs` | `JsonLd.tsx`, `Reviews.tsx` |
| M5 | Roll out `BreadcrumbList` to all inner pages | `Breadcrumb.tsx` usage |
| M6 | Add `Reviews` to homepage + `DepannageSerrurerie`; add FAQ to `DepannageSerrurerie` | those pages |
| M7 | Replace Gmail with `contact@serrurier-urgence-lille.fr` | `Header.tsx`, `Footer.tsx` |
| M8 | Add `OAI-SearchBot` Allow | `public/robots.txt` |
| M9 | Fix price inconsistency 150€ → 149€; fix "22 communes" → 24 | `Index.tsx`, `VillesCouvertes.tsx` |
| M10 | Expand FAQ answers to ~130–160 words; add agréé-assurances / garantie / "Qu'est-ce que Point Fort Fichet" FAQs | `FAQ.tsx`, service pages |

---

## LOW (backlog)
- `WebSite`+`SearchAction` schema (homepage); `Offer`/`priceSpecification` from Tarifs; `paymentAccepted`.
- `sameAs` → Point Fort Fichet Wikipedia/Wikidata + LinkedIn; claim Pages Jaunes / Yelp FR + Fichet dealer-directory link.
- `llms.txt`: add `## Optional`, update date, licensing line.
- Add 192/512 PWA icons to `manifest.json`.
- Named owner/technician bio + real intervention photos (Experience signal).
- Add visible/`dateModified` freshness signals.
- Reconcile sitemap (33) vs routes (34); confirm SPA fallback doesn't soft-404.

---

## Suggested sequence
1. **Day 1 (one PR):** C2, M3, M4, M8, M9, H7 — mechanical fixes + validate in Rich Results Test.
2. **Week 1:** C1 (legal/SIRET), H1 (name), H2 (areaServed), H3 (internal links), H6 (Fichet proof).
3. **Week 2:** H4 + H5 (images + code-split) → re-measure CWV in PageSpeed/CrUX.
4. **Weeks 3–4:** C3 (city-page content) + M1/M2/M5/M6/M10.

**Re-audit after Week 2** — the mechanical + entity fixes alone should move the score from ~69 to the high-70s; the city-page content work targets the low-80s.
