import { site } from '@/lib/site';
import { CONTACT_FAQS } from '@/lib/contactFaqs';
import { clampTitle, clampDescription, openGraph } from '@/lib/meta';

// The contact page is a client component, so its metadata lives here.
export const metadata = {
  title: 'Contact Us — Get a Free Quote',
  description: clampDescription(
    'Tell us about your project — website, funnel, WordPress build or automation. Flowzync replies with a clear, fixed quote.'
    ),
  alternates: { canonical: '/contact' },
  openGraph: openGraph({
    title: 'Contact Flowzync — Get a Free Quote',
    description:
      'Tell us about your project — website, funnel, WordPress build or automation. We reply with a clear, fixed quote.',
    url: '/contact',
  }),
};

const schema = [
  {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact Flowzync',
    url: `${site.url}/contact`,
    isPartOf: { '@id': `${site.url}/#website` },
    mainEntity: { '@id': `${site.url}/#organization` },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: CONTACT_FAQS.map(([q, a]) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: site.url },
      { '@type': 'ListItem', position: 2, name: 'Contact', item: `${site.url}/contact` },
    ],
  },
];

export default function ContactLayout({ children }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      {children}
    </>
  );
}
