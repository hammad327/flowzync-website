import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import ClientFX from '@/components/ClientFX';
import ChatWidget from '@/components/ChatWidget';
import { site, serviceArea, allServiceAreas, hasLocalNAP } from '@/lib/site';
import { images } from '@/lib/images';
import './globals.css';
import { clampTitle, clampDescription } from '@/lib/meta';
import { hreflangFor } from '@/lib/locales';

// Only the weights actually used, which keeps the download small.
const FONT_CSS =
  'https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700;800&family=Manrope:wght@400;500;600;700&display=swap';

export const metadata = {
  metadataBase: new URL(site.url),
  title: { default: `${site.name} — ${site.tagline}`, template: `%s | ${site.name}` },
  description: clampDescription(site.description),
  applicationName: site.name,
  keywords: [
    'web design agency', 'custom website design', 'wordpress development',
    'custom wordpress plugins', 'gohighlevel funnels', 'shopify development',
    'business automation', 'landing page design', 'seo services',
  ],
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  publisher: site.name,
  // NOTE: no `alternates.canonical` here on purpose. Root-layout metadata
  // is inherited by any page that does not set its own, so a canonical
  // declared here would silently point every such page at the homepage —
  // which is exactly what Search Console reports as "Duplicate without
  // user-selected canonical". Each page declares its own instead.
  openGraph: {
    type: 'website',
    siteName: site.name,
    title: `${site.name} — ${site.tagline}`,
    description: clampDescription(site.description),
    url: site.url,
    locale: 'en_US',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: `${site.name} — ${site.tagline}` }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${site.name} — ${site.tagline}`,
    description: clampDescription(site.description),
    images: ['/og.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 },
  },
  formatDetection: { telephone: false },
};

// Organization + WebSite schema, server-rendered per Google's JS-SEO guidance
const orgSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${site.url}/#organization`,
      name: site.name,
      url: site.url,
      email: site.email,
      description: clampDescription(site.description),
      slogan: site.tagline,
      foundingDate: '2021',
      logo: { '@type': 'ImageObject', url: `${site.url}${images.logoRaster}`, width: 512, height: 512 },
      image: `${site.url}${images.og}`,
      contactPoint: [
        { '@type': 'ContactPoint', email: site.email, contactType: 'customer service', availableLanguage: 'English', areaServed: 'Worldwide' },
        ...(site.business.phone ? [{ '@type': 'ContactPoint', telephone: site.business.phone, contactType: 'sales', areaServed: 'Worldwide', availableLanguage: 'English' }] : []),
      ],
      sameAs: Object.values(site.social),
      knowsAbout: [
        'Custom website design', 'WordPress development', 'Custom WordPress plugin development',
        'Custom WordPress theme design', 'GoHighLevel funnels', 'CRM setup', 'Business automation',
        'SEO optimization', 'UI/UX design', 'Graphic design',
        'Elementor design', 'WooCommerce development',
      ],
      // Where we take on clients. areaServed is a coverage statement,
      // not a location claim — which is why it can safely be broad.
      // We work worldwide. The named areas are listed alongside it because
      // search engines match on specific place names, not on "global".
      areaServed: [
        { '@type': 'Place', name: 'Worldwide' },
        ...serviceArea.countries.map((c) => ({ '@type': 'Country', name: c.name })),
        ...allServiceAreas.map((a) => ({ '@type': 'AdministrativeArea', name: a })),
      ],
    },
    // LocalBusiness is only published once a REAL street and phone
    // exist in lib/site.js. The address is your actual Lahore office;
    // areaServed separately declares the UK coverage. Those are two
    // different claims, and keeping them separate is what makes this
    // both accurate and safe.
    ...(hasLocalNAP
      ? [{
          '@type': 'LocalBusiness',
          '@id': `${site.url}/#localbusiness`,
          name: site.business.legalName,
          url: site.url,
          email: site.email,
          telephone: site.business.phone,
          image: `${site.url}${images.og}`,
          priceRange: site.business.priceRange,
          openingHours: site.business.hours,
          address: {
            '@type': 'PostalAddress',
            streetAddress: site.business.street,
            addressLocality: site.business.city,
            addressRegion: site.business.region,
            postalCode: site.business.postalCode,
            addressCountry: site.business.country,
          },
          ...(site.business.latitude && site.business.longitude
            ? { geo: { '@type': 'GeoCoordinates', latitude: site.business.latitude, longitude: site.business.longitude } }
            : {}),
          areaServed: serviceArea.countries.map((c) => ({ '@type': 'Country', name: c.name })),
          parentOrganization: { '@id': `${site.url}/#organization` },
        }]
      : []),
    {
      '@type': 'WebSite',
      '@id': `${site.url}/#website`,
      name: site.name,
      url: site.url,
      publisher: { '@id': `${site.url}/#organization` },
      inLanguage: 'en',
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Fonts load WITHOUT blocking the first paint.
            React strips string onLoad handlers from <link>, so the tag is
            created in a tiny inline script instead: it starts as
            media="print" (fetched, but applied to nothing), then flips to
            "all" once downloaded. With display=swap in the URL, text paints
            immediately in the fallback face and upgrades when the webfont
            lands — so this never sits on the critical path.
            The <noscript> copy keeps fonts working without JavaScript. */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          dangerouslySetInnerHTML={{
            __html:
              `(function(){var l=document.createElement('link');l.rel='stylesheet';` +
              `l.href='${FONT_CSS}';l.media='print';` +
              `l.onload=function(){this.onload=null;this.media='all'};` +
              `document.head.appendChild(l)})()`,
          }}
        />
        <noscript><link rel="stylesheet" href={FONT_CSS} /></noscript>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
      </head>
      <body>
        <ClientFX />
        <Nav />
        <main>{children}</main>
        <Footer />
        <ChatWidget />
      </body>
    </html>
  );
}
