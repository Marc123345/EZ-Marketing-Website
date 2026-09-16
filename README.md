# EZ Marketing website

Parent site for EZ Marketing: Facebook Ads for roof coating and paving contractors. Built on the same Gencyo template and static generator as roofcoatleads.com and pavinglead.com, in the logo palette (#001820 navy, #18B8F8 cyan).

- `npm run build` writes `dist/` (Vercel settings are in `vercel.json`)
- `npm run dev` builds and serves on http://localhost:5270
- Pages: Home (EZ Marketing, then its two companies RoofCoat Leads and Paving Leads, each linking to its own website), Results, About (with team), Contact
- Copy and data: `src/content.mjs`. Pages: `scripts/build.mjs`. Header, footer and booking: `scripts/layout.mjs`
- Home hero 3D scene: `src/hero3d/index.js`, bundled with `npm i && npm run build:hero` into `src/assets/js/hero3d.js` (commit the bundle; Vercel does not install packages)
- Styles: template `style.css`, shared `pl.css`, EZ-specific `ez.css`. Behaviour: `pl.js` plus `ez.js` (booking)

To confirm before launch (in `site` in `src/content.mjs`): domain, full street address and ZIP, public phone and email, and a single EZ booking link (`bookingUrl`). Until that link is set, the booking step asks for the trade and loads the RoofCoat Leads or Paving Leads calendar.
