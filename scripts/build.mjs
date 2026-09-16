// Builds the static EZ Marketing site into dist/.
// Markup is the Gencyo template (same build as RoofCoat Leads and Paving Leads); copy lives in src/content.mjs.
// Run: npm run build
import { cpSync, mkdirSync, rmSync, writeFileSync, readFileSync, readdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createHash } from 'node:crypto';
import * as C from '../src/content.mjs';
import { page, pageTitle, btn, bookBtn, outLink, subTitle, secTitle, img, esc, disclaimer, bookingWidget, roofcoatMark, pavingMark, addressLine, CTA, assetVersions } from './layout.mjs';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const DIST = join(ROOT, 'dist');
const { site, DISCLAIMER } = C;

const pad = (i) => String(i + 1).padStart(2, '0');
const delay = (i, step = 1) => `.${3 + i * step}s`;
const arrowSvg = `<svg width="19" height="16" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 8.00008L15 8.00008M18.3361 8.01939C15.2241 7.82927 9 9.16017 9 16.0048M18.3361 7.98545C15.2241 8.17558 9 6.84467 9 0" stroke="#18B8F8" stroke-width="1.5"/></svg>`;
const faqSchema = (items) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: items.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
});

// ---------- shared sections ----------

function statsRow(items, cls = '') {
  return `
<div class="pl-stats ${cls}">
  ${items.map((s, i) => `<div class="pl-stat wow fadeInUp" data-wow-delay="${delay(i)}"><span class="pl-stat__value">${esc(s.value)}</span><span class="pl-stat__label">${esc(s.label)}</span></div>`).join('')}
</div>`;
}

function section(inner, { cls = '', id = '', bg = '' } = {}) {
  return `
<section class="section-padding ${cls}"${id ? ` id="${id}"` : ''}${bg ? ` style="background-image: url('${bg}');"` : ''}>
  <div class="container">
${inner}
  </div>
</section>`;
}

const heading = (sub, title, intro = '', align = 'center') => `
    <div class="sec-title ${align === 'center' ? 'text-center' : ''}">
      ${subTitle(sub)}
      ${secTitle(title[0], title[1])}
      ${intro ? `<div class="ez-intro">${intro}</div>` : ''}
    </div>`;

function cardGrid(items, { cols = 'col-xl-4 col-lg-6 col-md-6', numbered = true } = {}) {
  return `
    <div class="row g-3">
      ${items
        .map(
          (v, i) => `
      <div class="${cols} wow fadeInUp" data-wow-delay="${delay(i % 3, 2)}">
        <div class="ez-card">
          ${numbered ? `<span class="ez-card__num">${pad(i)}</span>` : ''}
          ${v.icon ? `<span class="ez-card__icon"><i class="fa-solid ${v.icon}"></i></span>` : `<span class="ez-card__icon"><img src="${img(`icons/service-icon-1-${(i % 6) + 1}.png`)}" alt=""></span>`}
          <h4>${esc(v.title)}</h4>
          <p>${esc(v.text)}</p>
          ${v.tech ? `<p class="ez-card__tech"><i class="fa-solid fa-gear"></i> ${esc(v.tech)}</p>` : ''}
        </div>
      </div>`
        )
        .join('')}
    </div>`;
}

function videoSection(videos, { sub = 'Video Testimonials', title = ['Hear It From', 'The Contractors'], intro = '', id = 'testimonials' } = {}) {
  return `
<section class="pl-reels section-padding" id="${id}">
  <div class="container">
    ${heading(sub, [title[0] + ' <br>', title[1]], intro)}
    <div class="row g-4">
      ${videos
        .map(
          (v, i) => `
      <div class="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="${delay(i)}">
        <div class="pl-reel">
          <div class="pl-reel__media" data-video="${v.src}">
            <img src="${v.poster}" alt="Video testimonial: ${esc(v.author)}" loading="lazy">
            <button type="button" class="pl-reel__play" aria-label="Play video: ${esc(v.author)}, ${esc(v.company)}"><i class="fa-solid fa-play"></i></button>
            <span class="pl-reel__label">Client Story ${pad(i)}</span>
          </div>
          <div class="pl-reel__body">
            <p>&ldquo;${esc(v.quote)}&rdquo;</p>
            <div class="pl-reel__author">
              <span class="pl-avatar"><i class="fa-solid fa-helmet-safety"></i></span>
              <div><strong>${esc(v.author)}</strong><span>${esc(v.company)}</span></div>
            </div>
          </div>
        </div>
      </div>`
        )
        .join('')}
    </div>
    <div class="pl-reels__swipe">Swipe for more stories <i class="fa-solid fa-arrow-right"></i></div>
  </div>
</section>`;
}

function writtenSlider(items, { sub = 'Testimonials', title = ['What Contractors', 'Say About Us'] } = {}) {
  return `
<section class="testimonial-section-2">
  <div class="testimonial-inner-2 section-padding bg-cover" style="background-image: url(${img('background/testimonial-bg-2-1.jpg')});">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-xxl-6 col-xl-7 col-lg-8">
          <div class="sec-title text-center mb-30">
            ${subTitle(sub)}
            ${secTitle(title[0], title[1])}
          </div>
        </div>
      </div>
      <div class="row justify-content-center align-items-center">
        <div class="col-xl-2 d-none d-xl-block"><button class="array-prev" aria-label="Previous"><i class="fas fa-long-arrow-left"></i></button></div>
        <div class="col-xl-8">
          <div class="swiper testimonial-slider-2">
            <div class="swiper-wrapper">
              ${items
                .map(
                  (t) => `
              <div class="swiper-slide">
                <div class="testimonial-block-two">
                  <div class="inner-box">
                    <div class="quote-icon"><img src="${img('icons/quote-icon-2-1.png')}" alt=""></div>
                    ${t.metric ? `<div class="pl-metric"><strong>${esc(t.metric)}</strong> ${esc(t.metricLabel)}</div>` : ''}
                    <div class="text">${esc(t.quote)}</div>
                    <div class="author-info">
                      <div class="thumb pl-avatar">${esc(t.name.charAt(0))}</div>
                      <div class="info">
                        <h6 class="name">${esc(t.name)}</h6>
                        <div class="designation">${esc(t.company)}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>`
                )
                .join('')}
            </div>
            <div class="swiper-dot text-center mt-5"><div class="dot"></div></div>
          </div>
        </div>
        <div class="col-xl-2 text-end d-none d-xl-block"><button class="array-next" aria-label="Next"><i class="fas fa-long-arrow-right"></i></button></div>
      </div>
    </div>
  </div>
</section>`;
}

function faqSection(items, { sub = 'FAQ', title = ['Questions Contractors', 'Ask Us'] } = {}) {
  return `
<section class="faq-section-2">
  <div class="faq-light"><img src="${img('icons/faq-light-2-1.png')}" alt=""></div>
  <div class="faq-light2"><img src="${img('icons/faq-light-2-2.png')}" alt=""></div>
  <div class="faq-vec tm-gsap-animate-circle"><img src="${img('icons/faq-vec-2-1.png')}" alt=""></div>
  <div class="faq-vec2 tm-gsap-animate-circle"><img src="${img('icons/faq-vec-2-2.png')}" alt=""></div>
  <div class="faq-inner-2 fix section-padding bg-cover" style="background-image: url('${img('background/faq-bg-2-1.jpg')}');">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-9">
          <div class="sec-title text-center mb-60">
            ${subTitle(sub)}
            ${secTitle(title[0], title[1])}
          </div>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-lg-10 wow fadeInUp" data-wow-delay=".3s">
          ${items
            .map(
              (f, i) => `
          <div class="faq-block-two${i === 0 ? ' active' : ''}">
            <div class="title-box">
              <div class="content">
                <span class="number">${pad(i)}</span>
                <div class="line"></div>
                <h5 class="title">${esc(f.q)}</h5>
              </div>
              <span class="icon"><i class="fa-sharp fa-solid fa-plus"></i></span>
            </div>
            <div class="content-box${i === 0 ? ' show' : ''}">
              <div class="inner"><div class="text">${esc(f.a)}</div></div>
            </div>
          </div>`
            )
            .join('')}
        </div>
      </div>
    </div>
  </div>
</section>`;
}

function methodSteps(items, { sub = 'How It Works', title = ['The System Behind', 'Every Campaign'], intro = '' } = {}) {
  return `
<section class="work-process-section-2">
  <div class="work-process-light"><img src="${img('icons/work-process-light-2-1.png')}" alt=""></div>
  <div class="work-process-vec tm-gsap-animate-circle"><img src="${img('icons/work-process-vec2-1.png')}" alt=""></div>
  <div class="work-process-inner-2 section-padding bg-cover" style="background-image: url('${img('background/work-process-bg-2-1.jpg')}');">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-xl-8 col-lg-10">
          <div class="sec-title text-center">
            ${subTitle(sub)}
            ${secTitle(title[0], `<span class="d-md-block">${title[1]}</span>`)}
            ${intro ? `<div class="ez-intro">${intro}</div>` : ''}
          </div>
        </div>
      </div>
      <div class="line"></div>
      <div class="row ez-steps">
        ${items
          .map(
            (s, i) => `
        <div class="col wow fadeInUp" data-wow-delay="${delay(i)}">
          <div class="working-block-two">
            <div class="step-btn">Step ${pad(i)}</div>
            <div class="inner-block">
              <div class="icon-box"><img src="${img('icons/process-icon-2-1.png')}" alt=""></div>
              <div class="dot"></div>
              <h4 class="title">${esc(s.title)}</h4>
              <div class="text">${esc(s.text)}</div>
            </div>
          </div>
        </div>`
          )
          .join('')}
      </div>
    </div>
  </div>
</section>`;
}

// One sub-company, explained on the home page and linked out to its own website.
function companySection({ id, mark, kicker, title, intro, photo, photoAlt, who, get, stats, statsNote = '', quote, url, host, reverse = false }) {
  return `
<section class="section-padding ez-company" id="${id}">
  <div class="container">
    <div class="row g-5 align-items-center${reverse ? ' flex-lg-row-reverse' : ''}">
      <div class="col-lg-6 wow fadeInUp">
        <div class="ez-company__photo">
          <img src="${photo}" alt="${esc(photoAlt)}" loading="lazy">
          <figure class="ez-company__quote">
            <blockquote>&ldquo;${esc(quote.text)}&rdquo;</blockquote>
            <figcaption><strong>${esc(quote.name)}</strong> ${esc(quote.company)}</figcaption>
          </figure>
        </div>
      </div>
      <div class="col-lg-6 wow fadeInUp" data-wow-delay=".2s">
        <div class="ez-company__mark">${mark}</div>
        <span class="ez-kicker">${kicker}</span>
        <h2 class="ez-h2">${title}</h2>
        <p class="ez-lead-p">${intro}</p>
        <p class="ez-company__who"><i class="fa-solid fa-helmet-safety"></i> ${who}</p>
        <ul class="ez-checks">${get.map((g) => `<li><i class="fa-solid fa-circle-check"></i><span><strong>${esc(g.title)}.</strong> ${esc(g.text)}</span></li>`).join('')}</ul>
        <div class="ez-company__actions">
          <a class="btn-style-one" href="${url}" target="_blank" rel="noopener"><span class="btn-arrow-left"><img src="${img('icons/right-arrow-1-2.png')}" alt=""></span><span class="btn-title">Visit ${host}</span><span class="btn-arrow-right"><img src="${img('icons/right-arrow-1-2.png')}" alt=""></span></a>
        </div>
      </div>
    </div>
    ${statsRow(stats, 'ez-company__stats')}
    ${statsNote ? `<p class="ez-note text-center">${statsNote}</p>` : ''}
  </div>
</section>`;
}

function teamGrid() {
  return `
    <div class="row g-4 justify-content-center">
      ${C.about.team
        .map(
          (m, i) => `
      <div class="col-xl-3 col-md-6 wow fadeInUp" data-wow-delay="${delay(i)}">
        <div class="ez-team ez-team--photo">
          <div class="ez-team__photo"><img src="${m.photo}" alt="${esc(m.name)}, ${esc(m.title)}" loading="lazy"></div>
          <div class="ez-team__body">
            <h4>${esc(m.name)}</h4>
            <p class="ez-team__role">${esc(m.title)}</p>
          </div>
        </div>
      </div>`
        )
        .join('')}
    </div>`;
}

// ---------- pages ----------

const pages = [];

// 1. Home: EZ Marketing first, then its two companies, each linking to its own website.
pages.push({
  file: 'index.html',
  path: '/',
  title: '',
  description: site.description,
  schema: [faqSchema(C.homeFaqs)],
  body: `
<section class="ezh3" aria-label="EZ Marketing">
  <div class="ezh3__grid" aria-hidden="true"></div>
  <div class="container">
    <div class="row g-5 align-items-center">
      <div class="col-lg-6">
        <span class="ez-kicker ez-meta-kicker"><img src="${img('ez/meta-logo.png')}" alt="Meta" width="72" height="17"> Ads agency for roofers &amp; pavers</span>
        <h1 class="ezh3__title">Meta Ads for roofers and pavers. <span>Every lead is yours.</span></h1>
        <p class="ez-hero-lead">One agency, two companies: RoofCoat Leads for coating roofers and Paving Leads for paving contractors.</p>
        <div class="ez-hero-actions">
          <button type="button" class="plh-btn" data-booking="">
            <span class="plh-btn__arrow plh-btn__arrow--left"><i class="fa-solid fa-arrow-right"></i></span>
            <span class="plh-btn__label">${CTA}</span>
            <span class="plh-btn__arrow plh-btn__arrow--right"><i class="fa-solid fa-arrow-right"></i></span>
          </button>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="ezh3__stage">
          <span class="ezh3__stage-glow" aria-hidden="true"></span>
          <div class="ezh3__screen">
            <video src="/assets/videos/ez-hero.mp4" poster="/assets/videos/ez-hero.jpg" autoplay muted loop playsinline preload="auto" aria-label="EZ Marketing 3D logo animation"></video>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

${videoSection([...C.roofing.videos, ...C.paving.videos], { sub: 'Testimonials', title: ['Real Contractors.', 'Real Jobs.'], intro: 'Coating roofers and paving contractors running jobs from our campaigns.' })}


${section(
  `
    ${statsRow(C.homeStats, 'mt-0 ez-stats-top')}
    ${disclaimer(DISCLAIMER, 'ez-disclaimer--center')}`,
  { cls: 'pt-0 ez-proof' }
)}

${section(
  `
    <div class="row g-5 align-items-center">
      <div class="col-lg-10 mx-auto text-center wow fadeInUp">
        ${subTitle('Who We Are')}
        ${secTitle('One Agency.', 'Two Trades.')}
        <p class="ez-lead-p">${esc(C.about.story[0])}</p>
        <p class="ez-lead-p">We run our Meta Ads through two companies, one for each trade. Each has its own campaigns, its own proof and its own website, so a coating roofer only ever hears about roofing and a paving crew only ever hears about paving.</p>
        <div class="ez-org">
          <a class="ez-org__node" href="#roofcoat-leads">${roofcoatMark()}<span>Roof coating contractors</span></a>
          <a class="ez-org__node" href="#paving-leads">${pavingMark()}<span>Paving contractors</span></a>
        </div>
        ${btn('Meet our leadership', { href: '/about#team' })}
      </div>
    </div>`,
  { cls: 'ez-band' }
)}

${companySection({
  id: 'roofcoat-leads',
  mark: roofcoatMark(),
  kicker: 'Company 01 &middot; For roof coating contractors',
  title: 'RoofCoat Leads: <span class="ez-accent">exclusive roof coating leads in your area</span>',
  intro: 'RoofCoat Leads runs Meta Ads for roofing companies doing silicone, acrylic, TPO and metal restoration, mostly commercial and industrial. Leads are screened for property type, timeline and budget, then sent to the contractor by SMS and email in real time.',
  photo: img('roof/crew-full-service.jpg'),
  photoAlt: 'Roof coating crew restoring a commercial roof',
  who: 'Coating roofers with 1 to 50 employees, tired of shared leads sold to five roofers.',
  get: C.roofing.get,
  stats: C.roofing.stats,
  quote: { text: C.roofing.videos[1].quote, name: C.roofing.videos[1].author, company: C.roofing.videos[1].company },
  url: site.roofcoatUrl,
  host: 'roofcoatleads.com',
})}

${companySection({
  id: 'paving-leads',
  mark: pavingMark(),
  kicker: 'Company 02 &middot; For paving contractors',
  title: 'Paving Leads: <span class="ez-accent">exclusive paving leads booked on your calendar</span>',
  intro: 'Paving Leads runs Meta Ads for asphalt, sealcoating and chip seal crews, from residential driveways to commercial lots. Contractors get booked estimates with full job info, and no more door knocking.',
  photo: img('paving/sealcoat-crack-repair-crew.jpg'),
  photoAlt: 'Paving crew sealing asphalt',
  who: 'Paving crews with 1 to 50 employees, tired of door knocking and pay-per-lead junk.',
  get: C.paving.get,
  stats: C.paving.stats,
  statsNote: 'Paving-side figures, as published on pavinglead.com.',
  quote: { text: C.paving.videos[0].quote, name: C.paving.videos[0].author, company: C.paving.videos[0].company },
  url: site.pavingUrl,
  host: 'pavinglead.com',
  reverse: true,
})}

<section class="feature-section section-padding">
  <div class="container">
    <div class="row g-4 align-items-stretch">
      <div class="col-lg-6 wow fadeInUp">
        <div class="feature-box-style1 style-2 ez-h100">
          ${subTitle('Why Only Two Trades')}
          ${secTitle('Other Agencies Sell Activity.', 'We Sell Jobs.')}
          <ul class="pl-them">
            ${C.agencyVsUs.them.map((t) => `<li><i class="fa-solid fa-minus"></i><div><strong>${esc(t.text)}</strong><span>${esc(t.sub)}</span></div></li>`).join('')}
          </ul>
        </div>
      </div>
      <div class="col-lg-6 wow fadeInUp" data-wow-delay=".2s">
        <div class="ez-promise ez-h100">
          <p class="ez-promise__big">${esc(C.agencyVsUs.us)}</p>
          <p>We only work with coating roofers and paving contractors. We know the jobs, the seasons and the buyers, so every campaign starts from a playbook that already works in the trade.</p>
          ${bookBtn(CTA)}
        </div>
      </div>
    </div>
  </div>
</section>

${methodSteps(C.method, { sub: 'How It Works', title: ['We Run the Ads.', 'You Run the Crew.'], intro: 'The same Meta Ads system runs behind RoofCoat Leads and Paving Leads.' })}


${section(`
    ${heading('Leadership', ['The People Behind', 'EZ Marketing'])}
    ${teamGrid()}
    <div class="text-center mt-5">${btn('About EZ Marketing', { href: '/about' })}</div>`)}

${faqSection(C.homeFaqs)}`,
});

// 2. About
pages.push({
  file: 'about.html',
  path: '/about',
  title: 'About',
  description: 'EZ Marketing is a West Palm Beach Meta Ads agency that only works with roof coating contractors and paving contractors. Meet the team.',
  body: `
${pageTitle('About', img('paving/team-computers-night-office.jpg'), { h1: 'We only work with roof coating and paving. <span>That is the point.</span>' })}
<section class="about-section section-padding">
  <div class="light-shape-1"><img src="${img('icons/about-light-1-1.png')}" alt=""></div>
  <div class="about-shape-1 tm-gsap-animate-circle"><img src="${img('icons/about-shape-1-1.png')}" alt=""></div>
  <div class="container">
    <div class="row g-5 align-items-center">
      <div class="col-lg-5 wow fadeInUp">
        <div class="ez-about-logo"><img src="${img('ez/logo.svg')}" alt="EZ Marketing logo"></div>
      </div>
      <div class="col-lg-7">
        ${subTitle('Who We Are')}
        ${secTitle('A Meta Ads Agency', 'for Two Trades')}
        ${C.about.story.map((p) => `<p class="ez-lead-p wow fadeInUp">${esc(p)}</p>`).join('')}
        ${bookBtn(CTA)}
      </div>
    </div>
  </div>
</section>

${section(
  `
    ${heading('Leadership', ['The People Behind', 'Your Campaigns'])}
    ${teamGrid()}`,
  { id: 'team', cls: 'ez-band' }
)}

${section(
  `
    ${heading('Our Companies', ['One for Each', 'Trade'])}
    <div class="row g-4">
      <div class="col-md-6"><a class="ez-brandlink" href="${site.roofcoatUrl}" target="_blank" rel="noopener">${roofcoatMark()}<span>For roofing contractors who do coatings: roofcoatleads.com <i class="fa-solid fa-arrow-up-right-from-square"></i></span></a></div>
      <div class="col-md-6"><a class="ez-brandlink" href="${site.pavingUrl}" target="_blank" rel="noopener">${pavingMark()}<span>For asphalt, sealcoating and chip seal crews: pavinglead.com <i class="fa-solid fa-arrow-up-right-from-square"></i></span></a></div>
    </div>`,
  { cls: 'pt-0' }
)}`,
});

// 9. Results: testimonials only
pages.push({
  file: 'results.html',
  path: '/results',
  title: 'Results',
  description: 'Video testimonials from roof coating and paving contractors running jobs from EZ Marketing Meta Ads campaigns.',
  body: `
${pageTitle('Results', '', { h1: 'Results: contractor testimonials' })}
${videoSection(C.roofing.videos, { sub: 'RoofCoat Leads', title: ['Roof Coating', 'Contractors'], id: 'roofing' })}
${videoSection(C.paving.videos, { sub: 'Paving Leads', title: ['Paving', 'Contractors'], id: 'paving' })}
${writtenSlider(C.paving.written, { sub: 'Testimonials', title: ['What Paving Contractors', 'Say'] })}`,
});

// 10. Contact
pages.push({
  file: 'contact.html',
  path: '/contact',
  title: 'Book a Free Strategy Call',
  description: 'Book a free 30-minute strategy call with EZ Marketing. Meta Ads for roof coating contractors and paving contractors.',
  body: `
${pageTitle('Contact', img('paving/booked-calendar-phone-dark.jpg'), { h1: 'Book a free strategy call' })}
<section class="contact-details pt-120 pb-80" id="book">
  <div class="container">
    <div class="row g-4 g-lg-5">
      <div class="col-xl-7 col-lg-7">
        ${subTitle('Free 30-Minute Call')}
        <h2 class="ez-h2">Pick your trade, then pick a time</h2>
        <p class="ez-lead-p">We look at your territory, your jobs and your season, and tell you straight whether our campaigns make sense for you.</p>
        ${bookingWidget('page')}
      </div>
      <div class="col-xl-5 col-lg-5">
        <div class="ez-contact-card">
          <h3>On the call</h3>
          <ul class="ez-checks">
            <li><i class="fa-solid fa-circle-check"></i>Your service area and the jobs you cover</li>
            <li><i class="fa-solid fa-circle-check"></i>The jobs you want more of</li>
            <li><i class="fa-solid fa-circle-check"></i>What a campaign in your trade looks like</li>
            <li><i class="fa-solid fa-circle-check"></i>An honest answer on fit</li>
          </ul>
          <div class="ez-contact-card__info">
            <p><i class="fa-solid fa-building"></i><span><strong>${esc(site.legalName)}</strong>${esc(addressLine())}</span></p>
            ${site.phone ? `<p><i class="fa-solid fa-phone"></i><a href="tel:${site.phone.replace(/[^+\d]/g, '')}">${esc(site.phone)}</a></p>` : ''}
            ${site.email ? `<p><i class="fa-solid fa-envelope"></i><a href="mailto:${site.email}">${esc(site.email)}</a></p>` : ''}
          </div>
          <div class="ez-contact-card__brands">
            <a href="${site.roofcoatUrl}" target="_blank" rel="noopener">${roofcoatMark()}</a>
            <a href="${site.pavingUrl}" target="_blank" rel="noopener">${pavingMark()}</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>`,
});

pages.push({
  file: '404.html',
  path: '/404',
  title: 'Page Not Found',
  description: "Sorry, we couldn't find the page you're looking for.",
  body: `
${pageTitle('Page Not Found', img('paving/colleagues-late-night-office.jpg'), { h1: 'This page is off the map' })}
<section class="section-padding text-center pl-404">
  <div class="container">
    <p class="ez-lead-p">Sorry, we couldn't find the page you're looking for.</p>
    <div class="ez-hero-actions justify-content-center">${btn('Go home', { href: '/' })}${bookBtn(CTA)}</div>
  </div>
</section>`,
});

// ---------- write ----------

rmSync(DIST, { recursive: true, force: true });
mkdirSync(DIST, { recursive: true });
cpSync(join(ROOT, 'src/assets'), join(DIST, 'assets'), { recursive: true });
cpSync(join(ROOT, 'src/assets/images/ez/logo.svg'), join(DIST, 'favicon.svg'));
{
  const cssDir = join(ROOT, 'src/assets/css');
  const bundled = readFileSync(join(cssDir, 'style.css'), 'utf8')
    .replace(/@import url\("https?:[^"]+"\);\s*/g, '')
    .replace(/@import url\("([^"]+\.css)"\);/g, (_, f) => readFileSync(join(cssDir, f), 'utf8'));
  writeFileSync(join(DIST, 'assets/css/style.css'), bundled);
}
for (const dir of ['css', 'js']) {
  for (const f of readdirSync(join(DIST, 'assets', dir))) {
    if (!/\.(css|js)$/.test(f)) continue;
    assetVersions[`/assets/${dir}/${f}`] = createHash('md5').update(readFileSync(join(DIST, 'assets', dir, f))).digest('hex').slice(0, 10);
  }
}
for (const p of pages) {
  mkdirSync(dirname(join(DIST, p.file)), { recursive: true });
  writeFileSync(join(DIST, p.file), page(p));
}
console.log(`wrote ${pages.length} pages`);
const urls = pages.filter((p) => p.path !== '/404').map((p) => `  <url><loc>${site.url}${p.path === '/' ? '' : p.path}</loc></url>`);
writeFileSync(join(DIST, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join('\n')}\n</urlset>\n`);
writeFileSync(join(DIST, 'robots.txt'), `User-agent: *\nAllow: /\nSitemap: ${site.url}/sitemap.xml\n`);
console.log('wrote sitemap.xml, robots.txt');
