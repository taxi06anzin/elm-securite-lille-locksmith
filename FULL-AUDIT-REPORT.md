# Full SEO Audit — ELM Sécurité / Point Fort Fichet Serrurier Lille

**Site audited:** https://serrurier-urgence-lille.fr/
**Audit date:** 2026-06-02
**Method:** Live-site fetches + full codebase analysis (Vite + React + shadcn SPA, react-snap prerendering, Netlify)
**Business type detected:** Local Service — Locksmith, **hybrid** (physical address `143 Rue du Molinel, 59800 Lille` + Service-Area Business covering ~24 communes of the Métropole Européenne de Lille)

---

## Executive Summary

### Overall SEO Health Score: **69 / 100** — *Good foundation, clear high-impact fixes available*

| Category | Weight | Sub-score | Weighted |
|----------|:------:|:---------:|:--------:|
| Technical SEO | 22% | 82 | 18.0 |
| Content Quality | 23% | 55 | 12.7 |
| On-Page SEO | 20% | 72 | 14.4 |
| Schema / Structured Data | 10% | 62 | 6.2 |
| Performance (CWV, lab estimate) | 10% | 68 | 6.8 |
| AI Search Readiness (GEO) | 10% | 76 | 7.6 |
| Images | 5% | 70 | 3.5 |
| **TOTAL** | **100%** | | **≈ 69** |

The site is technically well-built for an SMB: **prerendering works** (verified — title, canonical, meta, JSON-LD and FAQ text are all present in raw HTML), security headers are excellent, `llms.txt` and AI-crawler permissions are configured, and the schema foundation is solid. The score is held back by **thin/duplicate location pages**, **missing French legal pages (SIRET / Mentions Légales)**, **business-name fragmentation**, and a few **mechanical schema and image bugs**.

### Top 5 Critical Issues
1. **No Mentions Légales / SIRET anywhere on the site** — legally required in France (LCEN) and a major trust signal in a high-fraud category. *(Content, Local)*
2. **Malformed schema URL on 2 pages** — `SerrurierBondues.tsx` & `SerrurierHellemmes.tsx` pass an absolute URL to a prop that prepends the base, producing `https://serrurier-urgence-lille.frhttps://…` → fails Google's Rich Results validator. *(Schema)*
3. **~12–15 near-duplicate "doorway-risk" city pages** — 200–260 words, 80–85% shared boilerplate, no local FAQ/pricing/reviews/internal links. Deindex risk post-Helpful-Content. *(Content, Local)*
4. **Business-name fragmentation (4 variants)** — `POINT FORT FICHET - ELM SÉCURITÉ` vs `ELM Sécurité - Serrurier Lille` vs `ELM SÉCURITÉ` vs `ELM Sécurité` across schema, manifest, header, footer → entity dilution. *(Local, Schema, GEO)*
5. **Bloated PNG image fallbacks shipped** — `dist/assets` contains PNGs of 1.7–2.4 MB (e.g. `intervention-urgence.png` 2.44 MB) as `<picture>` fallbacks; ~11 MB of raster bloat and a real payload risk for non-WebP browsers. *(Performance, Images)*

### Top 5 Quick Wins (low effort, high impact)
1. Fix the Bondues/Hellemmes `pageUrl` (path-only) — 2-line fix, unblocks rich results on those pages.
2. Add **SIRET + a `/mentions-legales` page** linked in the footer — closes the legal gap and lifts E-E-A-T.
3. Standardize the business name; give `ServiceSchema` provider an `@id` linking to `/#business` instead of a 3rd name variant.
4. Expand `areaServed` in `JsonLd.tsx` from 9 → all 24 served communes.
5. `closes: "23:59"` → `"24:00"`, remove the self-referencing `sameAs`, change `reviewCount` to an integer, add `OAI-SearchBot` to robots.txt — a single batched cleanup.

---

## 1. Technical SEO — 82/100

**Strengths (verified):**
- **Prerendering confirmed.** Raw `curl` of the live homepage returns fully-rendered HTML: `<title>Serrurier Lille - Dépannage 24/7 | ELM SÉCURITÉ | Intervention Rapide</title>`, `<link rel="canonical" … data-react-helmet="true">`, meta description, **a JSON-LD block containing `LocalBusiness` + `FAQPage`**, the `<h1>`, and FAQ body text. `package.json` runs `react-snap` as `postbuild`; `vite.config.ts` sets `target: es2019` for react-snap's Chromium compatibility. Googlebot and JS-less AI crawlers see real content.
- **Security headers (excellent).** `public/_headers` (Netlify): HSTS w/ preload, `X-Content-Type-Options: nosniff`, `X-Frame-Options: SAMEORIGIN`, `Referrer-Policy: strict-origin-when-cross-origin`, a real CSP, and a sensible `Permissions-Policy`. Asset caching is correct (`/assets/*` immutable 1yr, HTML 5 min, SEO files 1h).
- **robots.txt** explicitly allows Googlebot, Bingbot and the major AI crawlers; disallows only `/api/` and `/admin/`; declares the sitemap.
- **Canonicals** are per-page and self-referencing via `SeoHead.tsx`.
- **SPA routing:** `_redirects` `/* → /index.html 200`; the catch-all route renders `NotFound` (verify it returns a real 404 status, see below).

**Issues:**
| Sev | Finding | Evidence |
|-----|---------|----------|
| HIGH | Single JS bundle, no code splitting | `dist/assets/index-*.js` = **597 KB**; `vite.config.ts` has no `manualChunks`. shadcn/Radix + React Router all in one chunk → TBT/INP risk. |
| MED | Sitemap vs routes drift | `public/sitemap.xml` = 33 `<url>`; `App.tsx` registers ~34 routes. Reconcile (e.g. confirm `/fichet-lille`, `/serrurier-pas-cher`, `/depannage-serrurerie`, all 24 city pages, `/villes-couvertes` are each present exactly once). |
| MED | Soft-404 risk | Confirm the SPA fallback + react-snap don't make unknown URLs return HTTP 200 with the NotFound body. `NotFound` should set a noindex signal / the host should serve 404. |
| LOW | `manifest.json` icons | Only a 64px `favicon.ico`; no 192/512 PWA icons. |

---

## 2. Content Quality — 55/100  (E-E-A-T composite ≈ 30/100)

**Strong pages:** `Tarifs.tsx` (best transparency on the site — itemized labor/displacement/surcharge grid), `ChangementSerrure.tsx` (~950 words, brand list, A2P explained), `OuverturePorte.tsx` (~900 words, real prices, technique detail), `PorteBlindee.tsx` (A2P BP1/2/3, copropriété rules).

**The core problem — thin, near-duplicate location pages.** Sampled word counts (visible body text):

| Page | ~Unique words | Boilerplate | Verdict |
|------|:-------------:|:-----------:|---------|
| SerrurierLilleCentre | strong | low | Quality page |
| SerrurierLille | ~520 | ~60% | Marginal |
| SerrurierRoubaix | ~320 | ~75% | Thin |
| SerrurierHem / Croix / Mons | ~220–230 | ~82% | Very thin |
| SerrurierWattignies / Faches / Mouvaux / Perenchies | ~200–220 | ~83–85% | **Doorway risk** |

The thinnest ~12–15 pages pass the "swap test" (change the city name → identical page): no local landmarks, no local pricing, no local FAQ, no Reviews, and (on 14 of them) no `InternalLinks`. **Estimated duplication 80–85%** across the thin tier.

**E-E-A-T gaps:**
- **Trust:** No SIRET/RCS, no Mentions Légales/CGV (legal gap in France), `elmsecuritemolinel@gmail.com` instead of a domain email, bold "seul Point Fort Fichet de Lille 24/7" claim unsubstantiated.
- **Authoritativeness:** "Concessionnaire officiel Point Fort Fichet" — the #1 differentiator — has **no on-page proof** (no dealer certificate, no link to Fichet's official directory). Footer lists "Vitrerie/Menuiserie" services with no pages.
- **Experience:** No named owner/technician, stock-style photos, "10 ans d'expérience" unverifiable.
- **Citation-readiness:** the 2-year guarantee, insurance certification and "95% non-destructive" exist only in `llms.txt`/JSON-LD `description` — **not in any human-readable paragraph**, so Perplexity/AIO can't extract them from page prose.

---

## 3. On-Page SEO — 72/100

- **Titles/meta/H1:** Per-page via `SeoHead.tsx`; the homepage title is well-formed and keyword-led. H1s front-load city + service. Good.
- **Internal linking (weak):** `InternalLinks` renders on only ~10 of 24 city pages; the component's pool is 16 cities and slices to 8, so 7 communes (Hem, Halluin, Pérenchies, Faches, Wattignies, Bondues, Wambrechies) can't be linked from any peer. `Footer` city zones are **plain text, not links** — a free sitewide internal-link opportunity.
- **`areaServed` mismatch:** `JsonLd.tsx` lists only 9 cities while 24 have pages — declared footprint is 63% short of actual.
- **Count drift:** `VillesCouvertes.tsx` says "22 communes"; sitemap/routes have 24.
- **Pricing inconsistency:** `149€` (llms.txt, FAQ, OuverturePorte) vs `150€` (Index pricing card) for cylinder change.

---

## 4. Schema / Structured Data — 62/100

**Confirmed present in prerendered HTML:** `LocalBusiness`+`Locksmith` (`JsonLd.tsx`, all pages), `FAQPage` (`FAQ.tsx`), `Service` (`ServiceSchema.tsx`, service pages), `BreadcrumbList` (`Breadcrumb.tsx`, ~7 pages), and an `aggregateRating` supplement (`Reviews.tsx`). *(Corrects an interim finding that schema was client-side-only — it is prerendered and indexable.)*

| Sev | Finding | Fix |
|-----|---------|-----|
| **CRIT** | `SerrurierBondues.tsx` & `SerrurierHellemmes.tsx` pass a full absolute URL as `pageUrl`; `JsonLd` does `${baseUrl}${pageUrl}` → `…frhttps://…` malformed `url`. | Pass path-only: `pageUrl="/serrurier-bondues"`. |
| HIGH | `ServiceSchema` `provider` has **no `@id`** and uses a different name (`ELM Sécurité - Serrurier Lille`) → orphan LocalBusiness entity. | Add `"@id": "https://serrurier-urgence-lille.fr/#business"`, drop the standalone name. |
| HIGH | Duplicate `aggregateRating` emitted by both `JsonLd.tsx` and `Reviews.tsx` on the same pages. | Keep it in one place only. |
| MED | `closes: "23:59"` for a 24/7 business. | Use `"closes": "24:00"`. |
| MED | `reviewCount: "64"` is a **string**. | Integer `64`. |
| MED | `BreadcrumbList` on only ~7 of ~33 inner pages. | Roll out to all service + city pages. |
| LOW | `sameAs` includes the site's own URL. | Remove self-reference; keep only external (GBP, 118000.fr). |
| — | **AggregateRating compliance: PASS.** 4.7/64 sourced from the real GBP, synthetic testimonials are correctly *not* marked up as `Review` and are disclosed; GBP link is visible. Watch staleness — count is hardcoded. |

**Opportunities:** `WebSite` + `SearchAction` (homepage), `priceSpecification`/`Offer` from the real Tarifs figures, per-city `Service`/`areaServed`, `paymentAccepted`, Point Fort Fichet `sameAs` to Wikipedia/Wikidata.

---

## 5. Performance / Core Web Vitals — 68/100  *(lab/code estimate — no field data)*

| Sev | Finding | Evidence |
|-----|---------|----------|
| **HIGH** | **Oversized PNG fallbacks shipped.** `dist/assets`: `intervention-urgence.png` **2.44 MB**, `ouverture-fine.png` 2.18 MB, `porte-blindee-installation.png` 1.96 MB, `cle-cassee.png` 1.76 MB, `ouverture-porte-1.png` 1.70 MB. `OptimizedImage` serves WebP via `<picture><source type="image/webp">` (84/72/71 KB), so **modern browsers avoid the PNGs** — but they remain as `<img src>` fallbacks, ~11 MB of bloat and a 2 MB+ hit for any non-WebP client. | `dist/assets/*` + `OptimizedImage.tsx` |
| HIGH | **No code splitting** — 597 KB single JS bundle hydrating a prerendered DOM → TBT/INP pressure on mobile. | `vite.config.ts`, `dist/assets/index-*.js` |
| LOW | GA4 in `<head>` is `async` (good); preconnect to googletagmanager present. | `index.html` |
| GOOD | `OptimizedImage` supports `width/height` (CLS), `loading`, `fetchPriority` (auto→high when eager), `decoding=async`. **Verify pages pass `width/height` + `fetchPriority="high"` on the LCP/hero image.** | `OptimizedImage.tsx` |

**Likely CWV:** LCP depends on the hero (confirm it's eager + high-priority WebP with dimensions); CLS low risk if dimensions are passed and the fixed `EmergencyCallBar`/`MobileCallBar` reserve space; INP is the main watch item due to the monolithic bundle. *Run PageSpeed Insights / CrUX for field truth.*

---

## 6. AI Search Readiness (GEO) — 76/100

- **AI crawler access:** GPTBot, ChatGPT-User, ClaudeBot, anthropic-ai, Google-Extended, PerplexityBot, Applebot, Bytespider, CCBot all allowed. **Gap:** add `OAI-SearchBot` (ChatGPT live search).
- **Prerendering for AI bots:** confirmed — JS-less crawlers get real content **and** FAQ text (verified `FAQPage` + answer text in raw HTML).
- **llms.txt:** high quality (H1, blockquote summary, pricing table, differentiators, 21-commune service area, key pages). Add `## Optional`, an update date, and fix the 149€/150€ inconsistency.
- **Citability gaps:** key differentiators (2-yr guarantee, insurance certification, 95% non-destructive) live only in llms.txt/JSON-LD, not page prose; FAQ answers average ~60 words (below the ~134-word sweet spot).
- **Entity signals:** add `sameAs` to `fr.wikipedia.org/wiki/Point_Fort_Fichet` + Wikidata + LinkedIn; standardize the brand name.

---

## 7. Images — 70/100

- **Good:** WebP generated and served via `<picture>` with automatic fallback; `OptimizedImage` enforces `alt`, supports dimensions and `fetchPriority`; delivered WebP sizes are reasonable (66–115 KB).
- **Bad:** the **PNG source/fallback files are 1.7–2.4 MB** (see §5) — recompress to <150 KB or drop PNG fallbacks (WebP support is ~97%+; an AVIF+WebP pair would be better than WebP+2 MB PNG).
- **Verify:** alt text is descriptive + localized (not generic), lazy-loading on below-fold images, and a single eager/high-priority LCP image per page.

---

## Limitations
- Performance numbers are **lab/code estimates**, not field data — run PageSpeed Insights v5 / CrUX and GSC URL Inspection for ground truth. (`seo-google` can fetch these if GA4/GSC creds are configured.)
- GBP internals (categories, photos, Q&A, review velocity, response rate) and local-pack rankings were not measured — needs GBP access or DataForSEO.
- Backlink profile not assessed.
- The `seo-technical` and `seo-performance` sub-agents confirmed prerendering and gathered asset data but did not emit final numeric scores; those two sub-scores are the lead auditor's synthesis from their evidence + direct verification.

*Detailed prioritized fixes with file/line targets are in **ACTION-PLAN.md**.*
