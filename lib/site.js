// ─────────────────────────────────────────────────────────────
// GLOBAL SITE CONFIG — edit everything here once.
// Domain, email, business details and service areas flow from
// this file into meta tags, schema, the footer, forms, the
// sitemap and the location pages.
// ─────────────────────────────────────────────────────────────
export const site = {
  name: 'Flowzync',
  url: 'https://www.flowzync.com',
  tagline: 'Websites, funnels & automation that work like a dream',
  description:
    'Flowzync is a digital studio based in Lahore, Pakistan, building custom websites, WordPress and Elementor sites, WooCommerce stores, GoHighLevel funnels and business automation for clients across Pakistan and the United Kingdom.',
  email: 'info@flowzync.com',
  social: {
    twitter: 'https://twitter.com/flowzync',
    linkedin: 'https://linkedin.com/company/flowzync',
    instagram: 'https://instagram.com/flowzync',
  },

  // ── WHERE YOU ACTUALLY ARE ────────────────────────────────
  // This is your real, verifiable location. It is what goes in
  // LocalBusiness schema, your Google Business Profile and every
  // directory listing — and they must match each other exactly.
  business: {
    legalName: 'Flowzync',
    street: '',                       // e.g. '12 Main Boulevard, Gulberg III'
    city: 'Lahore',
    region: 'Punjab',
    postalCode: '',                   // e.g. '54000'
    country: 'PK',
    latitude: '',                     // e.g. '31.5204'
    longitude: '',                    // e.g. '74.3587'

    phone: '',                        // your real number, e.g. '+92 300 1234567'
    phoneUK: '',                      // optional UK forwarding number (Twilio/Skype)

    hours: 'Mo-Sa 09:00-18:00',
    hoursNote: 'Monday to Saturday · we cover UK business hours',
    priceRange: '$$',
    currency: 'PKR',

    // How the site describes its reach in plain language.
    servingLabel: 'Based in Lahore · working with clients across the UK',
  },
};

// ── SERVICE AREAS ─────────────────────────────────────────────
// Where you take on clients. This is a coverage statement, not a
// location claim — which is exactly why it can safely be broad.
// You are in Pakistan and you serve the UK. Both are true, and
// both are declared honestly in your structured data.
export const serviceArea = {
  countries: [
    { name: 'Pakistan', code: 'PK' },
    { name: 'United Kingdom', code: 'GB' },
  ],

  // Home market
  pakistan: [
    'Lahore', 'Karachi', 'Islamabad', 'Rawalpindi', 'Faisalabad', 'Multan',
    'Gujranwala', 'Peshawar', 'Quetta', 'Sialkot', 'Hyderabad', 'Bahawalpur',
    'Sargodha', 'Punjab', 'Sindh', 'Khyber Pakhtunkhwa', 'Balochistan',
  ],

  // UK nations and counties — the broad strokes
  ukRegions: [
    'England', 'Scotland', 'Wales', 'Northern Ireland',
    'Greater London', 'Greater Manchester', 'West Midlands', 'West Yorkshire',
    'South Yorkshire', 'Merseyside', 'Tyne and Wear', 'Essex', 'Kent',
    'Hampshire', 'Surrey', 'Hertfordshire', 'Lancashire', 'Nottinghamshire',
    'Staffordshire', 'Derbyshire', 'Devon', 'Cornwall', 'Norfolk', 'Suffolk',
    'Cheshire', 'Leicestershire', 'Berkshire', 'Oxfordshire', 'Buckinghamshire',
    'Somerset', 'Gloucestershire', 'Warwickshire', 'Dorset', 'Sussex',
    'Northamptonshire', 'Wiltshire', 'Cumbria', 'Durham', 'Shropshire',
  ],

  // UK towns and cities — the smaller areas.
  // These are far easier to rank for than "web design UK", because
  // almost nobody writes properly for them.
  ukTowns: [
    // London and the South East
    'London', 'Croydon', 'Bromley', 'Kingston upon Thames', 'Watford',
    'St Albans', 'Reading', 'Slough', 'Guildford', 'Woking', 'Basingstoke',
    'Maidstone', 'Canterbury', 'Brighton', 'Crawley', 'Chelmsford',
    'Southend-on-Sea', 'Colchester', 'Luton', 'Milton Keynes', 'Oxford',
    'High Wycombe', 'Aylesbury', 'Dartford', 'Sevenoaks', 'Tunbridge Wells',
    // South West
    'Bristol', 'Bath', 'Swindon', 'Gloucester', 'Cheltenham', 'Exeter',
    'Plymouth', 'Torquay', 'Truro', 'Bournemouth', 'Poole', 'Salisbury',
    'Taunton', 'Yeovil', 'Weston-super-Mare',
    // Midlands
    'Birmingham', 'Coventry', 'Wolverhampton', 'Solihull', 'Dudley', 'Walsall',
    'Leicester', 'Nottingham', 'Derby', 'Stoke-on-Trent', 'Northampton',
    'Telford', 'Shrewsbury', 'Worcester', 'Redditch', 'Nuneaton',
    'Loughborough', 'Lincoln',
    // North West
    'Manchester', 'Liverpool', 'Bolton', 'Stockport', 'Oldham', 'Rochdale',
    'Salford', 'Wigan', 'Warrington', 'Preston', 'Blackpool', 'Blackburn',
    'Chester', 'Lancaster', 'Burnley', 'Crewe', 'Macclesfield',
    // Yorkshire and North East
    'Leeds', 'Sheffield', 'Bradford', 'York', 'Hull', 'Huddersfield',
    'Wakefield', 'Halifax', 'Doncaster', 'Rotherham', 'Barnsley',
    'Harrogate', 'Newcastle upon Tyne', 'Sunderland', 'Gateshead',
    'Middlesbrough', 'Durham', 'Darlington',
    // Scotland
    'Glasgow', 'Edinburgh', 'Aberdeen', 'Dundee', 'Stirling', 'Perth',
    'Inverness', 'Paisley', 'Falkirk', 'Ayr',
    // Wales
    'Cardiff', 'Swansea', 'Newport', 'Wrexham', 'Bangor', 'Barry',
    // Northern Ireland
    'Belfast', 'Londonderry', 'Lisburn', 'Newry',
  ],
};

// Everything that goes into areaServed, deduplicated.
export const allServiceAreas = [
  ...serviceArea.pakistan,
  ...serviceArea.ukRegions,
  ...serviceArea.ukTowns,
];

// LocalBusiness schema is only published once your real street and
// phone are filled in above. Placeholder location data is worse than
// none — it damages trust signals and can breach platform policies.
export const hasLocalNAP = Boolean(site.business.street && site.business.phone);

export const domainLabel = site.url.replace(/^https?:\/\//, '').replace(/\/$/, '');

// ─────────────────────────────────────────────────────────────
//  A NOTE ON THE UK AREAS ABOVE
//
//  Listing them here is completely legitimate: it says where you
//  take on work, not where you are. Your address stays Pakistani
//  and your LocalBusiness schema, Google Business Profile and
//  directory listings should all say Lahore.
//
//  But service-area markup alone does NOT make you rank in Leeds.
//  Ranking in a UK town needs a page written for that town — see
//  lib/locations.js and docs/05-UK-LOCATION-PAGES.md.
// ─────────────────────────────────────────────────────────────
