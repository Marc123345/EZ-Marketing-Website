// EZ Marketing: all site copy and data. Written from the Sep 16, 2026 positioning brief.
// Proof comes only from roofcoatleads.com, pavinglead.com and the brief's client record.

export const site = {
  name: 'EZ Marketing',
  legalName: 'EZ Digital Marketing LLC',
  // TODO confirm: domain, full street number and ZIP, public phone and email.
  url: 'https://ez-digital-marketing.com',
  address: { street: 'N Flagler Dr', city: 'West Palm Beach', region: 'Florida', regionCode: 'FL' },
  phone: '',
  email: '',
  // Until EZ Marketing has its own booking link, the booking step asks for the trade and
  // loads the matching sub-brand calendar. Set `bookingUrl` to one link to use it everywhere.
  bookingUrl: '',
  calendars: {
    roofing: 'https://api.leadconnectorhq.com/widget/bookings/roofcoatingleads',
    paving: 'https://api.leadconnectorhq.com/widget/booking/JTJtFTRYwd9cTACA8c1r',
  },
  roofcoatUrl: 'https://roofcoatleads.com',
  pavingUrl: 'https://pavinglead.com',
  description:
    'EZ Marketing runs Facebook Ads for roof coating contractors and paving contractors. The ads bring in exclusive, pre-qualified jobs in your territory.',
};

export const nav = [
  { href: '/', label: 'Home' },
  { href: '/roof-coating-leads', label: 'Roof Coating' },
  { href: '/paving-leads', label: 'Paving' },
  { href: '/facebook-ads', label: 'Facebook Ads' },
  {
    label: 'More',
    children: [
      { href: '/website-design', label: 'Website Design' },
      { href: '/seo', label: 'SEO' },
      { href: '/geo-aeo', label: 'GEO & AEO' },
    ],
  },
  { href: '/results', label: 'Results' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export const DISCLAIMER =
  'EZ Marketing provides lead generation services through paid Facebook and Instagram Ad campaigns. ' +
  'Results shown on this website, including lead volume, cost per acquisition and return on ad spend, ' +
  'reflect averages across our contractor network and are not guaranteed outcomes. ' +
  'Individual results vary based on geographic market, competition, ad budget, sales process, ' +
  'and other factors outside our control. Testimonials represent the experience of individual contractors ' +
  'and are not typical. EZ Marketing does not guarantee a specific number of leads, revenue, or return on investment.';

export const supportLines = ['Over 100 contractors served', 'First lead inside 48 hours for most clients', 'No contracts, cancel anytime'];

export const homeStats = [
  { value: 'Millions', label: 'In contractor revenue from our campaigns' },
  { value: '100+', label: 'Contractors served' },
  { value: '<48h', label: 'To first lead for most clients' },
  { value: '100%', label: 'Exclusive leads' },
];

export const agencyVsUs = {
  them: [
    { text: 'Posts and "brand awareness"', sub: 'Activity you can report on, not jobs you can book' },
    { text: 'Monthly reports', sub: 'Charts about impressions while the phone stays quiet' },
    { text: 'Six months to "optimize"', sub: 'Your season is over before the campaign works' },
    { text: 'Shared leads', sub: 'The same homeowner called by five other contractors' },
  ],
  us: 'Our contractors buy one thing: the phone ringing with real jobs in their territory. That is the only thing we sell.',
};

export const method = [
  {
    title: 'Creative from real job sites',
    text: 'Ads built from real application footage and finished jobs, the way your customers actually see the work. No stock photos of smiling models.',
    tech: 'Short video and photo creative, written for Facebook and Instagram feeds and stories.',
  },
  {
    title: 'Pre-qualification form',
    text: 'Every lead answers questions about property type, timeline and budget before you see their number. Tire-kickers drop off before they reach you.',
    tech: 'Multi-question Lead Ads forms and a qualification funnel tuned per trade.',
  },
  {
    title: 'Territory-locked targeting',
    text: 'Ads only run where your crew works. You get your territory and nobody else in your trade gets those leads from us.',
    tech: 'Radius and ZIP targeting drawn around your service area and travel range.',
  },
  {
    title: 'Real-time delivery',
    text: 'The moment a lead qualifies it hits your phone by SMS and email, with the answers attached. Call while they are still thinking about the job.',
    tech: 'Instant SMS and email alerts, with CRM delivery available.',
  },
  {
    title: 'A campaign manager who knows the trade',
    text: 'One person runs your account, checks the leads with you and adjusts the ads through your season.',
    tech: 'Ongoing creative and audience testing, with lead-quality feedback built in.',
  },
];

export const tradeCards = {
  roofing: {
    label: 'I do roof coatings',
    href: '/roof-coating-leads',
    title: 'RoofCoat Leads',
    text: 'Exclusive commercial and residential coating leads in your territory.',
    photo: '/assets/images/roof/silicone.jpg',
  },
  paving: {
    label: 'I do paving',
    href: '/paving-leads',
    title: 'Paving Leads',
    text: 'Booked estimates with full job info for asphalt, sealcoating and chip seal crews.',
    photo: '/assets/images/paving/paver-crew-dusk-lights.jpg',
  },
};

export const supportServices = [
  {
    href: '/website-design',
    title: 'Website Design',
    short: 'A site that turns ad clicks into calls.',
    text: 'When a lead taps your ad, the page they land on decides whether they call. We build contractor sites made to convert that traffic.',
    photo: '/assets/images/paving/laptop-revenue-dashboard-dark-desk.jpg',
  },
  {
    href: '/seo',
    title: 'SEO',
    short: 'Found when they search your name.',
    text: 'Most leads look you up before they pick up the phone. Ranking for your trade and your territory backs up every ad.',
    photo: '/assets/images/paving/dark-analytics-dashboard-laptop.jpg',
  },
  {
    href: '/geo-aeo',
    title: 'GEO & AEO',
    short: 'Named when they ask ChatGPT.',
    text: 'Property owners now ask ChatGPT, Gemini and Google AI Overviews who to call. Your business should be the answer.',
    photo: '/assets/images/paving/phone-social-media-apps-dark-neon.jpg',
  },
];

export const homeFaqs = [
  { q: 'Who do you work with?', a: 'Two trades only: roofing contractors who do coatings (silicone, acrylic, TPO and metal restoration) and paving contractors (asphalt, sealcoating and chip seal). If that is not you, we are not the right agency.' },
  { q: 'Are the leads exclusive?', a: 'Yes. Leads from your campaign go to you and nobody else. We lock the targeting to your territory, so we are not selling the same job to the contractor down the road.' },
  { q: 'How fast will I get my first lead?', a: 'Most clients get their first lead inside 48 hours of the campaign going live.' },
  { q: 'Do I have to sign a contract?', a: 'No. There are no contracts. You can cancel anytime.' },
  { q: 'How much does it cost?', a: 'Plans and pricing live on roofcoatleads.com and pavinglead.com. On the strategy call we look at your territory and job types and tell you straight whether it makes sense.' },
];

// ---------- Roofing (RoofCoat Leads) ----------
export const roofing = {
  who: [
    'Roofing companies doing silicone, acrylic, TPO and metal restoration',
    'Mostly commercial and industrial work, plus residential flat roofs',
    '1 to 50 employees, where the owner makes the call',
  ],
  tiredOf: [
    { text: 'Shared leads sold to five roofers', sub: 'You race four other crews to the same building owner.' },
    { text: 'Leads outside your travel range', sub: 'A "lead" three hours away is not a lead.' },
    { text: 'Agencies that need six months', sub: 'By the time they "optimize", coating season is over.' },
  ],
  get: [
    { title: 'Your territory, locked', text: 'Exclusive commercial and residential coating leads inside the area you actually work. Nobody else gets them from us.' },
    { title: 'Screened before they reach you', text: 'Every lead is screened for property type, timeline and budget, so you spend your day on estimates, not tire-kickers.' },
    { title: 'Delivered in real time', text: 'New leads land on your phone by SMS and email the moment they qualify, with the answers attached.' },
    { title: 'First lead inside 48 hours', text: 'Most clients get their first lead within 48 hours of launch. No six-month ramp-up.' },
  ],
  coatings: [
    { title: 'Silicone', text: 'Commercial flat and low-slope roofs where owners want to extend roof life instead of replacing.', photo: '/assets/images/roof/silicone.jpg' },
    { title: 'Acrylic', text: 'Residential and light commercial roofs where energy savings and leak repair drive the decision.', photo: '/assets/images/roof/spray.jpg' },
    { title: 'TPO & flat roof', text: 'Owners dealing with leaks, ponding water and upcoming inspections right now.', photo: '/assets/images/roof/tpo-repair.jpg' },
    { title: 'Metal restoration', text: 'Industrial and agricultural buildings where restoring beats a full replacement.', photo: '/assets/images/roof/crew-full-service.jpg' },
  ],
  stats: [
    { value: '100%', label: 'Exclusive leads' },
    { value: '<48h', label: 'To first lead for most clients' },
    { value: '40%', label: 'Lower cost per acquisition vs. shared platforms' },
    { value: '15%', label: 'Conversion increase with our follow-up scripts' },
  ],
  videos: [
    { src: '/assets/videos/roof-1.mp4', poster: '/assets/videos/roof-1.jpg', quote: "Quality of leads have been fantastic. We've been about four months now and couldn't be happier with the leads you've been getting us.", author: 'Roof Coating Contractor', company: 'South Florida' },
    { src: '/assets/videos/roof-2.mp4', poster: '/assets/videos/roof-2.jpg', quote: 'I do three to five leads a day checking roofs. Sometimes I close all five.', author: 'CNS Exterior Coatings', company: 'Roof coating contractor' },
    { src: '/assets/videos/roof-3.mp4', poster: '/assets/videos/roof-3.jpg', quote: "We're going to clean her up, patch it up, give it a couple coats of silicone. Thanks again guys, great work.", author: 'Roof Coating Contractor', company: 'South Florida' },
    { src: '/assets/videos/roof-4.mp4', poster: '/assets/videos/roof-4.jpg', quote: 'Thank you so much guys for the hard work. Look forward to doing a lot more business with you in the future.', author: 'Roof Coating Contractor', company: 'South Florida' },
  ],
  caseStudy: {
    title: 'From $142 to $38 per lead',
    text: 'A commercial coating contractor was paying $142 per lead on HomeAdvisor with inconsistent flow. With a free roof coating inspection offer, a tight service radius and pre-filled Lead Ads forms, cost per lead dropped to $38.',
    href: 'https://roofcoatleads.com/blog/roof-coating-facebook-ads-case-study',
  },
};

// ---------- Paving (Paving Leads) ----------
const pvVideo = (file) => `https://ik.imagekit.io/qcvroy8xpd/${file}?tr=orig-true`;
export const paving = {
  who: [
    'Asphalt paving, sealcoating and chip seal crews',
    'Residential driveways through to commercial lots',
    '1 to 50 employees, where the owner or sales lead makes the call',
  ],
  tiredOf: [
    { text: 'Door knocking', sub: 'Hours on the road for a handful of maybes.' },
    { text: 'Pay-per-lead junk', sub: 'HomeAdvisor-style leads that never pick up, sold to everyone.' },
    { text: "Agencies that don't get the trade", sub: 'Marketers who have never stood on a fresh lot.' },
  ],
  get: [
    { title: 'Booked estimates', text: 'Qualified homeowners and property managers put on your calendar, so your crew goes out to quote real jobs.' },
    { title: 'Full job info', text: 'Every lead comes with the job details up front: what they need paved or sealed and where. No guessing before you drive out.' },
    { title: 'Your territory only', text: 'Exclusive leads in your area. We do not sell the same driveway to five other pavers.' },
    { title: 'Keep the calendar full', text: 'Volume that keeps trucks moving, from driveways to parking lots, without door knocking.' },
  ],
  services: [
    { title: 'Asphalt paving', text: 'Driveways, private roads and new lots.', photo: '/assets/images/paving/driveway-blacktop-winter-home.jpg' },
    { title: 'Sealcoating & repair', text: 'Crack repair and sealcoating that protect the asphalt investment.', photo: '/assets/images/paving/sealcoat-crack-repair-crew.jpg' },
    { title: 'Commercial lots', text: 'Resurfacing, sealcoating and striping for property managers.', photo: '/assets/images/paving/parking-lot-fresh-striping-arrow.jpg' },
  ],
  // Paving-side figures, as published on pavinglead.com.
  stats: [
    { value: '92%', label: 'Client retention' },
    { value: '3.2x', label: 'Average client ROI' },
    { value: '30+', label: 'Paving contractors' },
    { value: '100%', label: 'Exclusive leads' },
  ],
  videos: [
    { src: pvVideo('WhatsApp%20Video%202026-07-17%20at%2000.13.31.mp4'), poster: '/assets/images/paving/video-1.jpg', quote: 'I used to knock on doors. I do not knock on doors anymore thanks to Paving Leads.', author: 'Jim', company: 'J&L Paving & Sealcoating LLC' },
    { src: pvVideo('WhatsApp%20Video%202026-07-28%20at%2015.21.06.mp4'), poster: '/assets/images/paving/video-2.jpg', quote: "He's probably the best advertising guy we've used... He's fair, he's always there to answer the phone when you need a change or anything.", author: 'Sean', company: 'General Asphalt' },
    { src: pvVideo('WhatsApp%20Video%202026-07-21%20at%2019.07.07.mp4'), poster: '/assets/images/paving/video-3.jpg', quote: "I don't gotta do door knocking no more... Out of 3 to 5 leads, I usually close about two.", author: 'Dennis', company: 'R&S Paving' },
    { src: pvVideo('WhatsApp%20Video%202026-07-15%20at%2016.32.10.mp4'), poster: '/assets/images/paving/video-4.jpg', quote: "I get about 3 to 5 paving leads a day and it works... Sometimes I close 'em all, depends on how hard I hustle.", author: 'Rich', company: 'RG Paving' },
  ],
  written: [
    { name: 'Josh', company: 'Asphalt Systems', quote: 'Setup took 10 minutes. We booked 9 estimates the first week.', metric: '9 Jobs', metricLabel: 'Week 1' },
    { name: 'Justin', company: 'Doregos Paving', quote: "We've been with Paving Leads for just over a month. We've gotten around 120 leads so far and several have already turned into booked jobs.", metric: '120 Leads', metricLabel: 'Month 1' },
    { name: 'Henry', company: 'Hotmix Paving', quote: 'Consistent leads with full job info. No junk or tire-kickers like we used to get.', metric: '6 Months', metricLabel: 'Retention' },
    { name: 'Yankee', company: 'Pave n Save', quote: "Ezra's team really understands our business—they're not just general marketers. They get the grit.", metric: 'Expertise', metricLabel: 'Industrial' },
    { name: 'Tony', company: 'Torres Contracting', quote: "No long contracts. We started small and scaled. We've already added a second crew.", metric: '2nd Crew', metricLabel: 'Scaling' },
    { name: 'Steve', company: 'Holes Infrastructure', quote: "The call center is a big help—I don't have to chase people anymore. It's way more efficient.", metric: 'Hands Free', metricLabel: 'Efficiency' },
  ],
};

// ---------- Facebook Ads page ----------
export const leadCost = {
  ours: '$30–$60',
  shared: '$80–$150',
  note: 'Typical cost per lead on our roof coating campaigns, compared with shared lead platforms like HomeAdvisor, where the same lead also goes to other contractors.',
};

export const fbFaqs = [
  { q: 'Why Facebook and not Google?', a: 'Coating and paving are jobs people put off until something forces the decision. Facebook and Instagram reach property owners in your territory before they start searching and comparing contractors, and Lead Ads let us screen them with questions Google search ads cannot ask.' },
  { q: 'Do I need to make the ads?', a: 'No. We write and build the creative, preferably from footage of your real jobs. If you do not have any yet, we start with trade footage and swap in yours as it comes in.' },
  { q: 'Who handles the ad account and budget?', a: 'Your campaign manager builds and runs the campaigns. Ad spend is paid to Meta and is separate from our fee. We walk through the budget on the strategy call.' },
  { q: 'What happens after a lead comes in?', a: 'You get it by SMS and email right away with the answers to the qualification questions. The faster you call, the more you close.' },
];

// ---------- Supporting services (website design, SEO, GEO & AEO) ----------
export const servicesPages = {
  'website-design': {
    title: 'Website Design',
    h1: 'A website built to turn ad clicks into estimates',
    kicker: 'Included with campaigns',
    photo: '/assets/images/paving/laptop-revenue-dashboard-dark-desk.jpg',
    description: 'Contractor websites built to convert Facebook ad traffic into calls and booked estimates. Included with EZ Marketing campaigns.',
    problem: {
      title: 'The ad does its job. Then the site loses the lead.',
      text: 'A property owner taps your ad, lands on a slow, generic page with no clear next step, and leaves. You paid for that click. Most contractor sites are built to look nice, not to get the phone ringing.',
    },
    steps: [
      { title: 'Built for phones first', text: 'Most ad traffic is on a phone. Click-to-call and the estimate form sit where a thumb can reach them.' },
      { title: 'One job per page', text: 'Every page leads to a call or a booked estimate. No dead ends, no menus to get lost in.' },
      { title: 'Fast', text: 'Pages load quickly on a job-site connection, because a lead will not wait for a slow site.' },
      { title: 'A page for every territory', text: 'Service-area pages for the towns you work, so the site matches where your ads run.' },
      { title: 'Proof up front', text: 'Real jobs, reviews and video testimonials where a doubtful owner looks for them.' },
      { title: 'Included with campaigns', text: 'The site comes with your campaign. It is part of making the leads convert, not a separate project.' },
    ],
    proof: {
      title: 'We build our own lead sites the same way',
      text: 'roofcoatleads.com and pavinglead.com are built on the same approach: fast pages, a booking calendar one tap away, video testimonials and a page for every market they serve.',
      points: ['Booking calendar on every page', 'Click-to-call and estimate forms', 'Service-area pages for every market', 'Video testimonials from real contractors'],
    },
    faqs: [
      { q: 'Is the website extra?', a: 'The contractor site is included with campaigns. We cover the details on the strategy call.' },
      { q: 'I already have a website. Do I need a new one?', a: 'Not always. On the call we look at your current site. If it can turn ad clicks into calls, we keep it. If it cannot, we build one that does.' },
      { q: 'Can I update it myself?', a: 'Yes. We set it up so your details, photos and service areas are easy to keep current, or we handle changes for you.' },
    ],
  },
  seo: {
    title: 'SEO',
    h1: 'Own your territory on Google, not just in the ads',
    kicker: 'SEO for coating roofers and paving contractors',
    photo: '/assets/images/paving/dark-analytics-dashboard-laptop.jpg',
    description: 'SEO for roof coating and paving contractors: rank for your trade and your territory so paid ads and organic search work together.',
    problem: {
      title: 'Your leads Google you before they call',
      text: 'A property owner sees your ad, then searches your name and your trade. If a competitor shows up first, or you do not show up at all, the ad you paid for sends them somewhere else.',
    },
    steps: [
      { title: 'Trade plus territory', text: 'We target the searches that turn into jobs: your service, your towns. "Roof coating Tampa", not "best roofer".' },
      { title: 'Service-area pages', text: 'A useful page for each area you serve, written for the people who live and own property there.' },
      { title: 'Google Business Profile', text: 'Your profile set up and kept consistent, so you show up in the map results where local jobs start.' },
      { title: 'Technical basics done right', text: 'Fast pages, clean structure and schema markup so Google understands what you do and where.' },
      { title: 'Reviews that work for you', text: 'A simple way to turn finished jobs into reviews that back up every ad and every search result.' },
      { title: 'Paid and organic together', text: 'The ads bring leads now. SEO builds the name they find when they check you out, so the two compound.' },
    ],
    proof: {
      title: 'Territory pages at scale',
      text: 'RoofCoat Leads has a dedicated page for every US state, Washington DC, Puerto Rico and all eight Australian states and territories. That is the same territory-first structure we build for contractors.',
      points: ['A page per market, each with local cities', 'Structured data on every page', 'Sitemaps kept current automatically', 'Built for speed on mobile'],
    },
    faqs: [
      { q: 'How long does SEO take?', a: 'Longer than ads. Facebook campaigns bring leads in days. SEO builds over months, which is why we run it alongside the ads, not instead of them.' },
      { q: 'Do you guarantee rankings?', a: 'No, and you should be wary of anyone who does. We do the work that search engines reward and show you what changes.' },
      { q: 'Do I need SEO if the ads work?', a: 'Most leads look you up before they call. SEO makes sure what they find makes them pick up the phone.' },
    ],
  },
  'geo-aeo': {
    title: 'GEO & AEO',
    h1: 'When a property manager asks AI who to call, it should say you',
    kicker: 'Generative & answer engine optimization',
    photo: '/assets/images/paving/phone-social-media-apps-dark-neon.jpg',
    description: 'GEO and AEO for roof coating and paving contractors: be the business ChatGPT, Gemini and Google AI Overviews name when a property owner asks who to call.',
    problem: {
      title: 'The search box is turning into a question',
      text: 'Property managers and homeowners now ask ChatGPT, Gemini or Google\'s AI Overviews "who should I call to coat my roof?" or "who seals parking lots near me?". Those tools name a few businesses. Everyone else is invisible.',
    },
    steps: [
      { title: 'Clear answers on your site', text: 'Plain-language pages that answer the questions owners ask, so AI tools have something accurate to quote.' },
      { title: 'Structured data', text: 'Schema markup that spells out your business, services, service areas and FAQs in a format machines read.' },
      { title: 'Consistent business details', text: 'Your name, address, phone and services matching everywhere, so AI tools trust they have the right business.' },
      { title: 'Reviews and mentions', text: 'Real reviews and mentions on the sites AI tools draw from, because they recommend businesses others vouch for.' },
      { title: 'Trade and territory focus', text: 'Content tied to your trade and your towns, so you are the specific answer, not a generic one.' },
      { title: 'Checked and adjusted', text: 'We ask the AI tools the questions your customers ask and track whether your business shows up.' },
    ],
    proof: {
      title: 'Built into how we make sites',
      text: 'Our lead sites carry organization and FAQ structured data, answer-first FAQ sections and consistent business details on every page, the groundwork AI answers rely on.',
      points: ['Organization and FAQ schema', 'Answer-first FAQ content', 'Consistent business details', 'A page for every service area'],
    },
    faqs: [
      { q: 'What is the difference between GEO and AEO?', a: 'Generative engine optimization (GEO) is about being cited by AI tools like ChatGPT and Gemini. Answer engine optimization (AEO) is about being the direct answer in places like Google AI Overviews and voice search. The work overlaps heavily.' },
      { q: 'Can you guarantee ChatGPT will recommend me?', a: 'No one can. AI tools decide what to show. We do the work that makes your business the clear, credible answer for your trade in your area.' },
      { q: 'Is this separate from SEO?', a: 'It builds on the same foundations: a clear site, structured data and a solid reputation. We run them together.' },
    ],
  },
};

// ---------- Results ----------
export const results = {
  headline: [
    { value: 'Millions', label: 'In contractor revenue from our campaigns' },
    { value: '100+', label: 'Contractors served' },
    { value: '~300', label: 'Unique commercial inquiries across six recent campaigns' },
    { value: '<48h', label: 'To first lead for most clients' },
  ],
  idaho: {
    title: 'Two commercial leads in 24 hours',
    tag: 'Idaho · September 2026',
    text: 'A contractor in Idaho signed on in September 2026. Within 24 hours of signing, their campaign had delivered two commercial leads.',
  },
};

// ---------- About ----------
export const about = {
  story: [
    'EZ Marketing is a Facebook Ads agency based in West Palm Beach, Florida. We work with two trades: roofing contractors who do coatings, and paving contractors. Nobody else.',
    'That is on purpose. Generic agencies sell activity: posts, reports and retainers. The contractors we work with want one thing, the phone ringing with real jobs in their territory. Knowing two trades inside out is how we deliver that.',
    'We built RoofCoat Leads and Paving Leads as dedicated systems for each trade, with their own campaigns, their own sites and their own proof. Over 100 contractors across the US have run on them.',
  ],
  why: [
    { title: 'We know the job', text: 'Silicone vs. acrylic. Sealcoating vs. chip seal. We write ads that sound like the trade, because we only work in two.' },
    { title: 'We know the buyer', text: 'An owner-operator with a crew, a truck and a territory, burned by shared leads. We build everything around what he needs.' },
    { title: 'We know what works', text: 'Every campaign in your trade teaches us something. You get the playbook, not a test run on your budget.' },
  ],
  team: [
    { name: 'Ezra', title: 'Founder & CEO' },
    { name: 'Marc Friedman', title: 'Website Designer & Head of Sales, RoofCoat Leads' },
    { name: 'Dani Twillo', title: 'Head of Creative' },
    { name: 'Yael Rubinson', title: 'Creative Director' },
  ],
  quote: { text: "Ezra's team really understands our business—they're not just general marketers. They get the grit.", name: 'Yankee', company: 'Pave n Save' },
};
