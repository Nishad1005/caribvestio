# CaribVestio — Roadmap & TODO

Living checklist of what's left to take the site from a polished prototype to a
launched, production-grade B2B uniform-sourcing platform.

**Legend:** `P0` critical / blocks launch · `P1` high value · `P2` nice-to-have · `P3` ambitious

---

## 📌 Pinned — finish setup to go live
Both are now **integrated in code** and just need keys pasted into `.env`
(copy `.env.example` → `.env`, then restart the dev server):

1. **Accounts** — Supabase Auth is wired (signup/login/session/sign-out). Create a
   free Supabase project, enable the **Email** provider, and set `VITE_SUPABASE_URL`
   + `VITE_SUPABASE_ANON_KEY`. (Optional: turn off "Confirm email" in Supabase for
   instant login without the confirmation step.)
2. **Enquiry emails** — Quote + Contact forms POST to **Web3Forms**. Get a free access
   key at web3forms.com registered to `enquiry@caribvestio.com` and set
   `VITE_WEB3FORMS_ACCESS_KEY`. Until then the forms show a "not configured" path.

---

## 🚨 Placeholders to replace before launch
These are stand-ins committed in the code today. Search-and-replace each:

- [ ] **Contact details** — phone & email in `src/pages/ContactUs.jsx` (brief said `876…` / a malformed email) and `QUOTE_EMAIL` in `src/pages/Quote.jsx`.
- [ ] **Production domain** — `https://www.caribvestio.com` appears in 3 spots: `public/robots.txt`, `public/sitemap.xml`, and `SITE_URL` in `src/components/RouteMeta.jsx`.
- [ ] **Security & Schools images** — currently reuse stand-in photos; swap the `image` URLs in `src/data/industries.js`.
- [ ] **Office address & map** — placeholder Kingston address + map image in `ContactUs.jsx`.
- [ ] **Social links** — left blank in `src/components/ui/sticky-footer.tsx` (`socialLinks` hrefs are `#`).
- [ ] **Copy confirmations** — confirm "epaulettes" wording (Security items) and whether **India** is mentioned publicly.

---

## 🔐 Backend & Authentication — `P0`
The portal/login is a **front-end demo** (`src/context/AuthContext.tsx`): any email "logs in", no password is checked, session lives in `localStorage`.

- [ ] Real auth provider (e.g. Supabase / Auth0 / Clerk / custom) with **password hashing**, secure sessions/JWT.
- [ ] Password reset + email verification flows (the "Forgot password?" link is a stub).
- [ ] Server-side route protection for `/portal` (currently client-only).
- [ ] Real client portal data: orders, invoices, order tracking, reorder, team/seat management.
- [ ] Roles (buyer vs admin) if an internal dashboard is needed.

## 📨 Forms & Lead Delivery — `P0`
Quote and Contact forms don't hit a server yet. The quote "Send" opens a `mailto:`.

- [ ] Wire **Contact** + **Quote** to a real endpoint (Formspree / serverless function / CRM/HubSpot).
- [ ] Auto-confirmation email to the buyer + internal notification to the team.
- [ ] Persist quote requests (DB/CRM) so leads aren't lost.
- [ ] Spam protection (honeypot + reCAPTCHA/Turnstile) and rate limiting.

## 🛒 Quote & Commerce depth — `P1`
- [ ] **Per-item product pages** — photo, fabric, colour options, sizes, MOQ, lead time.
- [ ] **Size-run matrix** on the quote (e.g. 20×S / 40×M / 15×L per item).
- [ ] **Logo upload** with placement notes (front/back/sleeve) attached to the quote.
- [ ] Save & **share quote via link**; quote history shown in the portal.
- [ ] Indicative pricing where possible (JMD), or "from" prices per item.
- [ ] Bulk discounts / tiered-quantity hints.

## 🔎 SEO & Content — `P1`
_Foundation shipped: per-page `<title>` + meta description + Open Graph (`RouteMeta`), `sitemap.xml`, `robots.txt`, and `Organization` + homepage `FAQPage` JSON-LD._
- [x] Per-industry **FAQ** (unique Qs per industry) + per-page **FAQ schema** on each industry page.
- [x] `BreadcrumbList` + `Service` structured data on industry pages.
- [x] **OG share image** wired (`og:image` + Twitter card) and **manifest/apple-touch-icon** linked.
- [ ] ⚠️ **Export `og-image.svg` → 1200×630 PNG** (social crawlers don't render SVG previews) and add **PNG app icons** (180×180 apple-touch, 192/512 PWA); they currently point at the SVG.
- [ ] Real **blog articles** (the Uniform Guide is a shell): "Best fabrics for the Jamaican climate", "Sizing a bulk uniform order", "Embroidery vs printing". _(needs copy)_
- [ ] Submit sitemap to Google Search Console; verify rich results. _(needs your Google account)_

## ⚡ Performance — `P1`
- [ ] **Self-host fonts** (currently Google Fonts) with `font-display: swap` + preload.
- [ ] Replace **remote Google-CDN images** with optimised, self-hosted **WebP/AVIF**, responsive `srcset`, and blur-up placeholders (also removes a reliability risk).
- [ ] Use an image CDN / `<picture>`; add width/height to prevent layout shift.
- [ ] `preconnect`/`preload` critical assets; periodic bundle analysis.

## ♿ Accessibility — `P2`
- [ ] Finish **heading-order** cleanup on ShopCollections and the blog (a few `h4` skips remain).
- [ ] `aria-hidden` on the remaining purely-decorative icons.
- [ ] Full keyboard + screen-reader pass; **contrast audit** (verify gold accent on light surfaces).
- [ ] Keep `prefers-reduced-motion` fallbacks for every new animation/3D scene.

## 🎨 Animations & Motion — `P2`
*(All must respect `prefers-reduced-motion`.)*

- [ ] **Animated stat counters** — count-up on scroll for the "500+ / 120k+" numbers.
- [ ] **Scroll progress bar** at the top of long pages.
- [ ] **Magnetic / ripple buttons** and subtle **3D tilt** on industry & product cards.
- [ ] **Marquee strip** of industries / "trusted by" sectors.
- [ ] **Sticky-scroll storytelling** for "How bulk ordering works" (pin + step through 1→4).
- [ ] **Lottie** micro-animations (a stitching needle, a delivery route drawing) for the process steps.
- [ ] **Animated mesh-gradient or particle** accent behind the hero.
- [ ] **Shared-element transitions** between an industry card and its page (Framer Motion `layoutId`).
- [ ] Cursor spotlight / follower on dark sections.

## 🧊 3D Assets — `P2`–`P3`
*Tools: `@react-three/fiber` + `@react-three/drei`, or [Spline](https://spline.design) (no-code, embeddable), or `<model-viewer>` for glTF. Lazy-load all 3D, ship a static-image fallback, and gate on reduced-motion + device capability.*

- [ ] **Hero 3D centerpiece** — a slowly rotating folded shirt / mannequin in uniform, or the extruded **CV monogram** reacting to cursor. (Spline is the fastest path.)
- [ ] **Interactive uniform configurator** `P3` — rotate a garment, swap colours/fabrics, drop on a logo. This is a genuine differentiator for a uniform brand and feeds straight into the quote flow.
- [ ] **3D fabric/cloth** accent or draping animation on the hero or industry headers.
- [ ] Scroll-linked 3D camera moves on the "How it works" section.
- *Perf budget:* keep 3D under ~1–2 MB, load after first paint, never block the main thread.

## 🧹 Cleanup & Tech Debt — `P2`
- [ ] Add `.gitattributes` to normalise line endings (silences the CRLF warnings).
- [ ] **AuraCaribe** page is a placeholder ("content pending") — fill or remove + drop its route.
- [ ] Add tests (quote context, form validation, auth flow).
- [ ] Loading **skeletons** for lazy-loaded routes (instead of the spinner).
- [ ] Global **error boundary**.

## 🛠️ Ops & Compliance — `P1`
- [ ] Hosting + CI/CD (Netlify/Vercel/Cloudflare), env vars, custom domain + SSL.
- [ ] **Analytics** (GA4 / Plausible) + conversion tracking on quote submits.
- [ ] **Cookie consent** banner if analytics/marketing cookies are used.
- [ ] Error monitoring (Sentry) and uptime checks.
- [ ] Have the **Privacy Policy** reviewed by a professional (it's a starter template).

---

_Last updated by the development team. Keep this file current as items ship._
