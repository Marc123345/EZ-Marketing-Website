// Shared page chrome for EZ Marketing. Same Gencyo "SEO Agency" template and static build as
// RoofCoat Leads and Paving Leads, in the EZ Marketing palette (#001820 / #18B8F8).
import { site, nav, DISCLAIMER } from '../src/content.mjs';

export const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
export const img = (p) => `/assets/images/${p}`;

// Cache-busting stamps for CSS/JS, filled in by build.mjs from each file's contents.
export const assetVersions = {};
const v = (path) => (assetVersions[path] ? `${path}?v=${assetVersions[path]}` : path);

export const CTA = 'Book a free strategy call';

// Gencyo's three-part arrow button. `attrs` lets a button open the booking modal.
export function btn(label, { href = '#', attrs = '', tag = 'a', cls = '' } = {}) {
  const arrow = `<img src="${img('icons/right-arrow-1-2.png')}" alt="">`;
  const inner = `<span class="btn-arrow-left">${arrow}</span><span class="btn-title">${label}</span><span class="btn-arrow-right">${arrow}</span>`;
  return tag === 'button'
    ? `<button type="button" class="btn-style-one ${cls}" ${attrs}>${inner}</button>`
    : `<a href="${href}" class="btn-style-one ${cls}" ${attrs}>${inner}</a>`;
}

// trade: '' (ask), 'roofing' or 'paving'
export const bookBtn = (label = CTA, trade = '', cls = '') => btn(label, { tag: 'button', attrs: `data-booking="${trade}"`, cls });

export const outLink = (label, href, cls = '') =>
  `<a class="ez-out ${cls}" href="${href}" target="_blank" rel="noopener">${label} <i class="fa-solid fa-arrow-up-right-from-square"></i></a>`;

export function subTitle(text) {
  return `<span class="sub-title tm-sub-tilte tm-sub-anim tx-subTitle"><img src="${img('icons/star.png')}" alt=""> ${text}</span>`;
}

export function secTitle(main, accent) {
  return `<h2 class="title tx-title sec_title tm-itm-title tm-itm-anim">${main} <span>${accent}</span></h2>`;
}

// Inner pages have no hero banner: just room for the fixed header, with the H1 kept for
// search engines and screen readers.
export function pageTitle(title, bg, { h1 = title } = {}) {
  return `
<div class="ez-page-top"><h1 class="visually-hidden">${h1.replace(/<[^>]+>/g, '')}</h1></div>`;
}

export function disclaimer(text = DISCLAIMER, cls = '') {
  return `<p class="ez-disclaimer ${cls}">${esc(text)}</p>`;
}

export const logo = (cls = '') =>
  `<a href="/" class="ez-logo ${cls}" aria-label="${site.name} home"><img src="${img('ez/logo.svg')}" width="60" height="60" alt="EZ Marketing"></a>`;

export const addressLine = () => [site.address.street, `${site.address.city}, ${site.address.region}`].filter(Boolean).join(', ');

// Booking: a trade chooser that loads the matching calendar (or one EZ link, once set).
export function bookingWidget(idPrefix, { trade = '' } = {}) {
  if (site.bookingUrl) {
    return `<div class="ez-book" data-book-widget="${idPrefix}"><div class="ez-book__frame"><iframe data-src="${site.bookingUrl}" title="${CTA}"></iframe></div></div>`;
  }
  const choice = (key, icon, label, sub) => `
      <button type="button" class="ez-book__choice" data-trade="${key}">
        <i class="fa-solid ${icon}"></i>
        <span><strong>${label}</strong><small>${sub}</small></span>
        <i class="fa-solid fa-arrow-right ez-book__go"></i>
      </button>`;
  return `
<div class="ez-book" data-book-widget="${idPrefix}" data-trade-default="${trade}">
  <div class="ez-book__chooser">
    <p class="ez-book__ask">Which trade are you in?</p>
    <div class="ez-book__choices">
      ${choice('roofing', 'fa-house-chimney', 'I do roof coatings', 'Silicone, acrylic, TPO, metal restoration')}
      ${choice('paving', 'fa-road', 'I do paving', 'Asphalt, sealcoating, chip seal')}
    </div>
  </div>
  <div class="ez-book__calendar" hidden>
    <div class="ez-book__bar"><span data-trade-label></span><button type="button" class="ez-book__change" data-trade-change><i class="fa-solid fa-rotate-left"></i> Change trade</button></div>
    <div class="ez-book__frame">
      <iframe data-cal="roofing" data-src="${site.calendars.roofing}" title="${CTA}: roof coating" hidden></iframe>
      <iframe data-cal="paving" data-src="${site.calendars.paving}" title="${CTA}: paving" hidden></iframe>
    </div>
  </div>
</div>`;
}

function head({ title, description, path, ogImage, schema = [] }) {
  const fullTitle = title ? `${title} | ${site.name}` : `${site.name} | Meta Ads for Roof Coating & Paving Contractors`;
  const canonical = `${site.url}${path === '/' ? '' : path}`;
  const org = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: site.name,
    legalName: site.legalName,
    url: site.url,
    logo: `${site.url}/assets/images/ez/logo.svg`,
    description: site.description,
    address: { '@type': 'PostalAddress', streetAddress: site.address.street, addressLocality: site.address.city, addressRegion: site.address.regionCode, addressCountry: 'US' },
    areaServed: { '@type': 'Country', name: 'United States' },
    knowsAbout: ['Meta Ads for roof coating contractors', 'Meta Ads for paving contractors', 'Contractor lead generation'],
    subOrganization: [
      { '@type': 'Organization', name: 'RoofCoat Leads', url: site.roofcoatUrl },
      { '@type': 'Organization', name: 'Paving Leads', url: site.pavingUrl },
    ],
  };
  const ld = [org, ...schema].map((s) => `<script type="application/ld+json">${JSON.stringify(s)}</script>`).join('\n');
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>${esc(fullTitle)}</title>
<meta name="description" content="${esc(description)}">
<meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">
<meta name="theme-color" content="#001820">
<link rel="canonical" href="${canonical}">
<meta property="og:type" content="website">
<meta property="og:site_name" content="${site.name}">
<meta property="og:title" content="${esc(fullTitle)}">
<meta property="og:description" content="${esc(description)}">
<meta property="og:url" content="${canonical}">
<meta property="og:image" content="${site.url}${ogImage}">
<meta name="twitter:card" content="summary_large_image">
<link rel="preload" href="/assets/fonts/attack.woff" as="font" type="font/woff" crossorigin>
<link href="${v('/assets/css/bootstrap.min.css')}" rel="stylesheet">
<link href="${v('/assets/css/style.css')}" rel="stylesheet">
<link href="${v('/assets/css/pl.css')}" rel="stylesheet">
<link href="${v('/assets/css/ez.css')}" rel="stylesheet">
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<link rel="apple-touch-icon" href="/favicon.svg">
${ld}
</head>
`;
}

function menu(active) {
  return nav
    .map((n) => {
      if (n.children) {
        const on = n.children.some((c) => c.href === active);
        return `<li class="dropdown${on ? ' current' : ''}"><a href="${n.children[0].href}">${n.label}</a><ul>${n.children
          .map((c) => `<li${c.href === active ? ' class="current"' : ''}><a href="${c.href}">${c.label}</a></li>`)
          .join('')}</ul></li>`;
      }
      return `<li${n.href === active ? ' class="current"' : ''}><a href="${n.href}">${n.label}</a></li>`;
    })
    .join('\n                ');
}

function header(active) {
  return `
    <header class="main-header header-style-one header-1">
      <div class="container">
        <div class="header-lower">
          <div class="main-box pl-main-box">
            <div class="logo">${logo()}</div>
            <nav class="nav main-menu" aria-label="Main">
              <ul class="navigation">
                ${menu(active)}
              </ul>
            </nav>
            <div class="outer-box">
              <button type="button" class="contact-btn pl-header-cta" data-booking="">Book a call</button>
              <div class="mobile-nav-toggler" aria-label="Open menu"><span></span><span></span><span></span></div>
            </div>
          </div>
        </div>
      </div>

      <div class="mobile-menu">
        <div class="menu-backdrop"></div>
        <nav class="menu-box">
          <div class="upper-box">
            <div class="nav-logo">${logo()}</div>
            <div class="close-btn"><i class="icon fa fa-times"></i></div>
          </div>
          <ul class="navigation clearfix"></ul>
          <div class="pl-drawer-cta">${bookBtn('Book a call')}</div>
          <ul class="contact-list-one">
            <li>
              <div class="contact-info-box">
                <i class="icon lnr-icon-map-marker"></i>
                <span class="title">${site.legalName}</span>
                <span>${esc(addressLine())}</span>
              </div>
            </li>
          </ul>
        </nav>
      </div>

      <div class="sticky-header">
        <div class="auto-container">
          <div class="inner-container">
            <div class="logo">${logo()}</div>
            <div class="nav-outer">
              <nav class="main-menu">
                <div class="navbar-collapse show collapse clearfix">
                  <ul class="navigation clearfix"></ul>
                </div>
              </nav>
              <button type="button" class="pl-sticky-cta" data-booking="">Book a call</button>
              <div class="mobile-nav-toggler pl-sticky-toggler" aria-label="Open menu"><span></span><span></span><span></span></div>
            </div>
          </div>
        </div>
      </div>
    </header>`;
}

export const roofcoatMark = (cls = '') =>
  `<span class="ez-sub-mark ez-sub-mark--roof ${cls}"><img src="${img('roof/roofcoat-icon.svg')}" width="40" height="40" alt=""><span>RoofCoat <b>Leads</b></span></span>`;
export const pavingMark = (cls = '') =>
  `<span class="ez-sub-mark ez-sub-mark--paving ${cls}"><img src="${img('paving/paving-leads-logo.png')}" height="44" alt="Paving Leads"></span>`;

function footer() {
  const col = (title, links) => `
                <div class="pl-footer__col">
                  <h4 class="pl-footer__title">${title}</h4>
                  <ul class="pl-footer__links">${links.map(([label, href]) => `<li><a href="${href}">${label}</a></li>`).join('')}</ul>
                </div>`;
  const colOut = (title, links) => `
                <div class="pl-footer__col">
                  <h4 class="pl-footer__title">${title}</h4>
                  <ul class="pl-footer__links">${links.map(([label, href]) => `<li><a href="${href}" target="_blank" rel="noopener">${label} <i class="fa-solid fa-arrow-up-right-from-square" style="font-size:11px"></i></a></li>`).join('')}</ul>
                </div>`;
  const year = new Date().getFullYear();
  return `
        <footer class="footer-section pl-footer">
          <div class="footer-vec tm-gsap-animate-circle d-none d-lg-block">
            <img src="${img('icons/footer-vec-2-1.png')}" alt="">
          </div>
          <div class="foorer-area">
            <div class="footer-line-2">
              <img src="${img('icons/footer-line2-1.png')}" alt="">
            </div>
            <div class="container">
              <div class="footer-lets-talk bg-cover" style="background-image: url('${img('background/footer-lets-talk-bg.jpg')}');">
                <div class="pl-footer-cta__copy">
                  <span class="pl-footer-cta__kicker">Free 30-minute strategy call</span>
                  <h2 class="title">We run the ads. You run the crew.</h2>
                  <p>Exclusive, pre-qualified leads in your service area. No contracts, cancel anytime.</p>
                </div>
                <button type="button" class="circle-btn" data-booking="" aria-label="${CTA}">
                  <img src="${img('icons/arrow2.png')}" alt="">
                  <span class="pl-footer-cta__label">Book a call</span>
                </button>
              </div>

              <div class="pl-footer__grid ez-footer__grid">
                <div class="pl-footer__brand">
                  ${logo('pl-footer__logo')}
                  <p>The Meta Ads agency for roofing contractors who do coatings and paving contractors. Exclusive, pre-qualified leads in your service area.</p>
                  <ul class="pl-footer__trust">
                    <li><i class="fa-solid fa-location-dot"></i> ${esc(site.legalName)}<br>${esc(addressLine())}</li>
                    ${site.phone ? `<li><i class="fa-solid fa-phone"></i> <a href="tel:${site.phone.replace(/[^+\d]/g, '')}">${esc(site.phone)}</a></li>` : ''}
                    ${site.email ? `<li><i class="fa-solid fa-envelope"></i> <a href="mailto:${site.email}">${esc(site.email)}</a></li>` : ''}
                  </ul>
                </div>
                ${colOut('Our Companies', [['RoofCoat Leads', site.roofcoatUrl], ['Paving Leads', site.pavingUrl]])}
                ${col('EZ Marketing', [['Home', '/'], ['Our Companies', '/#roofcoat-leads'], ['Results', '/results']])}
                ${col('Company', [['About', '/about'], ['Leadership', '/about#team'], ['Contact', '/contact']])}
              </div>

              <div class="ez-footer__brands">
                <span class="ez-footer__brands-label">Our companies</span>
                <a href="${site.roofcoatUrl}" target="_blank" rel="noopener" aria-label="RoofCoat Leads website">${roofcoatMark()}</a>
                <a href="${site.pavingUrl}" target="_blank" rel="noopener" aria-label="Paving Leads website">${pavingMark()}</a>
              </div>

              ${disclaimer(DISCLAIMER, 'ez-disclaimer--footer')}

              <div class="pl-footer__bottom">
                <p>&copy; ${year} ${site.legalName}. All rights reserved.</p>
                <div class="pl-footer__bottom-links">
                  <a href="/contact">Contact</a>
                  <a href="/sitemap.xml">Sitemap</a>
                  <button type="button" class="pl-footer__top" data-back-top aria-label="Back to top"><i class="fa-solid fa-arrow-up"></i></button>
                </div>
              </div>
            </div>
          </div>
        </footer>`;
}

function bookingModal() {
  return `
  <div class="pl-modal ez-modal" id="ez-booking" role="dialog" aria-modal="true" aria-labelledby="ez-booking-title" hidden>
    <div class="pl-modal__backdrop" data-close></div>
    <div class="pl-modal__panel">
      <div class="pl-modal__head">
        <div>
          <span class="pl-modal__kicker">Free strategy call</span>
          <h3 id="ez-booking-title">${CTA}</h3>
          <p>30 minutes. We look at your territory and your jobs, and tell you straight whether it makes sense.</p>
        </div>
        <button type="button" class="pl-modal__close" data-close aria-label="Close"><i class="fa fa-times"></i></button>
      </div>
      <div class="pl-modal__body ez-modal__body">
        ${bookingWidget('modal')}
      </div>
    </div>
  </div>`;
}

export function page({ path, title, description, ogImage = '/assets/images/ez/og-image.jpg', schema, body }) {
  const inner = path !== '/';
  return withAsyncImages(
    head({ title, description, path, ogImage, schema }) +
    `<body class="${inner ? 'pl-inner' : 'pl-home'} ez">
  <div class="page-wrapper">
    <div class="preloader is-loading">
      <div class="preloader-inner">
        <div class="preloader-ball-wrap">
          <div class="preloader-ball-inner-wrap">
            <div class="preloader-ball-inner"><div class="preloader-ball"></div></div>
            <div class="preloader-ball-shadow"></div>
          </div>
          <div id="weave-anim" class="preloader-text">Loading...</div>
        </div>
      </div>
      <div class="preloader-overlay"></div>
    </div>
    <button id="back-top" class="back-to-top" aria-label="Back to top"><i class="fa-regular fa-arrow-up"></i></button>
    <div class="mouseCursor cursor-outer"></div>
    <div class="mouseCursor cursor-inner"></div>
${header(path)}
    <div id="smooth-wrapper">
      <div id="smooth-content">
${body}
${footer()}
      </div>
    </div>
  </div>
${bookingModal()}
  <button type="button" class="pl-mobile-cta" data-booking=""><i class="fa-solid fa-calendar-check"></i> ${CTA}</button>
  <script src="${v('/assets/js/jquery.js')}"></script>
  <script src="${v('/assets/js/popper.min.js')}"></script>
  <script src="${v('/assets/js/bootstrap.min.js')}"></script>
  <script src="${v('/assets/js/gsap.js')}"></script>
  <script src="${v('/assets/js/gsap-scroll-trigger.js')}"></script>
  <script src="${v('/assets/js/gsap-split-text.js')}"></script>
  <script src="${v('/assets/js/parallaxie.js')}"></script>
  <script src="${v('/assets/js/jquery.magnific-popup.min.js')}"></script>
  <script src="${v('/assets/js/wow.js')}"></script>
  <script src="${v('/assets/js/appear.js')}"></script>
  <script src="${v('/assets/js/nice-select.min.js')}"></script>
  <script src="${v('/assets/js/swiper.min.js')}"></script>
  <script src="${v('/assets/js/script.js')}"></script>
  <script src="${v('/assets/js/pl.js')}" data-gsap-src="${v('/assets/js/script-gsap.js')}"></script>
  <script src="${v('/assets/js/ez.js')}"></script>
  ${path === '/' ? `<script src="${v('/assets/js/hero3d.js')}" defer></script>` : ''}
</body>
</html>
`
  );
}

function withAsyncImages(html) {
  return html.replace(/<img(?![^>]*decoding=)/g, '<img decoding="async"');
}
