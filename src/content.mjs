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
  {
    label: 'Our Companies',
    children: [
      { href: '/#roofcoat-leads', label: 'RoofCoat Leads' },
      { href: '/#paving-leads', label: 'Paving Leads' },
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
    href: '#roofcoat-leads',
    title: 'RoofCoat Leads',
    text: 'Exclusive commercial and residential coating leads in your territory.',
    photo: '/assets/images/roof/silicone.jpg',
  },
  paving: {
    label: 'I do paving',
    href: '#paving-leads',
    title: 'Paving Leads',
    text: 'Booked estimates with full job info for asphalt, sealcoating and chip seal crews.',
    photo: '/assets/images/paving/paver-crew-dusk-lights.jpg',
  },
};

export const homeFaqs = [
  { q: 'Who do you work with?', a: 'Two trades only: roofing contractors who do coatings (silicone, acrylic, TPO and metal restoration) and paving contractors (asphalt, sealcoating and chip seal). If that is not you, we are not the right agency.' },
  { q: 'Are the leads exclusive?', a: 'Yes. Leads from your campaign go to you and nobody else. We lock the targeting to your territory, so we are not selling the same job to the contractor down the road.' },
  { q: 'How fast will I get my first lead?', a: 'Most clients get their first lead inside 48 hours of the campaign going live.' },
  { q: 'Do I have to sign a contract?', a: 'No. There are no contracts. You can cancel anytime.' },
  { q: 'How much does it cost?', a: 'Plans and pricing live on roofcoatleads.com and pavinglead.com. On the strategy call we look at your territory and job types and tell you straight whether it makes sense.' },
];

// ---------- Roofing (RoofCoat Leads) ----------
export const roofing = {
  get: [
    { title: 'Your territory, locked', text: 'Exclusive commercial and residential coating leads inside the area you actually work. Nobody else gets them from us.' },
    { title: 'Screened before they reach you', text: 'Every lead is screened for property type, timeline and budget, so you spend your day on estimates, not tire-kickers.' },
    { title: 'Delivered in real time', text: 'New leads land on your phone by SMS and email the moment they qualify, with the answers attached.' },
    { title: 'First lead inside 48 hours', text: 'Most clients get their first lead within 48 hours of launch. No six-month ramp-up.' },
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
  get: [
    { title: 'Booked estimates', text: 'Qualified homeowners and property managers put on your calendar, so your crew goes out to quote real jobs.' },
    { title: 'Full job info', text: 'Every lead comes with the job details up front: what they need paved or sealed and where. No guessing before you drive out.' },
    { title: 'Your territory only', text: 'Exclusive leads in your area. We do not sell the same driveway to five other pavers.' },
    { title: 'Keep the calendar full', text: 'Volume that keeps trucks moving, from driveways to parking lots, without door knocking.' },
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
  team: [
    { name: 'Ezra', title: 'Founder & CEO', photo: '/assets/images/team/ezra.jpg' },
    { name: 'Marc Friedman', title: 'Head of Sales', photo: '/assets/images/team/marc-friedman.jpg' },
    { name: 'Dani Twillo', title: 'Head of Creative', photo: '/assets/images/team/dani-twillo.jpg' },
    { name: 'Yael Rubinson', title: 'Creative Director', photo: '/assets/images/team/yael-rubinson.jpg' },
  ],
};
