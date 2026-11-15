# Bharatiya Gyan Samvad — Website

Bilingual (Hindi / English) React + Vite website for the Bharatiya Gyan Samvad
(भारतीय ज्ञान संवाद) knowledge and spirituality media brand.

## Run locally

```bash
npm install
npm run dev
```

Open the local URL printed by Vite (usually http://localhost:5173).

## Production build

```bash
npm run build
npm run preview
```

The production website is generated in `dist/` (includes `robots.txt` and `sitemap.xml`).

## Before publishing — checklist

| What | Where |
|---|---|
| **Brand logo** — save the official logo as `public/logo.png` (square PNG, ~1200×1200). Until it exists, a built-in SVG emblem is shown. | `public/logo.png` |
| **Domain** — set your real domain (canonical URL, share previews, sitemap, structured data) | `.env` → `VITE_SITE_URL` |
| **Social links** — official brand YouTube / Instagram / Facebook URLs (never personal accounts) | `src/App.jsx` → `SOCIAL_LINKS` |
| **Structured data** — add the same official profile URLs to `"sameAs"` | `index.html` |
| Contact email / WhatsApp number | `src/App.jsx` → `CONTACT_EMAIL`, `WHATSAPP_NUMBER`, `PHONE_DISPLAY` (and `index.html` JSON-LD) |
| Published episodes (switches the podcast section to YouTube embeds) | `src/App.jsx` → `episodes` |

After adding `public/logo.png`, regenerate the favicon, app icons, share image (`public/og-image.png`)
and the social brand kit so they all use the official logo.

## Language (Hindi / English)

- All copy lives in `src/content.js` (`hi` and `en`, same shape).
- The header toggle (हिं | EN) switches language; the choice is remembered.
- The English version has its own URL: `/?lang=en` (with `hreflang` alternates for SEO).

## Project structure

- `src/App.jsx` — page sections and site configuration
- `src/content.js` — all Hindi + English text
- `src/i18n.jsx` — language provider (URL, storage, `<html lang>`, title/meta/canonical)
- `src/styles.css` — design tokens and all styles
- `src/components/BrandLogo.jsx` — logo (`public/logo.png` with SVG fallback) and lockup
- `src/components/HeroArt.jsx` — hero sunrise/lotus illustration
- `src/components/TopicGlyphs.jsx` — custom topic illustrations
- `src/components/SocialIcons.jsx` — YouTube / Instagram / Facebook / WhatsApp icons
- `public/` — favicon, app icons, `manifest.webmanifest`, `og-image.png`
- `brand-kit/` — YouTube banner & profile, Facebook cover, Instagram/WhatsApp profile, launch post
- `vite.config.js` — React plugin + build-time `robots.txt` / `sitemap.xml`

## Notes

- Static frontend; no backend or database. Contact opens email or WhatsApp.
- Google Fonts are loaded from the network.
