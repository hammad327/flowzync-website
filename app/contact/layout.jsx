import { site } from '@/lib/site';
import { clampTitle, clampDescription } from '@/lib/meta';

// The contact page is a client component, so its metadata lives here.
export const metadata = {
  title: 'Contact Us — Get a Free Quote',
  description: clampDescription(
    'Tell us about your project — website, funnel, WordPress build or automation. Flowzync replies with a clear, fixed quote.'
    ),
  alternates: { canonical: '/contact' },
  openGraph: {
    title: 'Contact Flowzync — Get a Free Quote',
    description: clampDescription(
      'Tell us about your project — website, funnel, WordPress build or automation. We reply with a clear, fixed quote.'
      ),
    url: '/contact',
    type: 'website',
  },
};

const schema = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: 'Contact Flowzync',
  url: `${site.url}/contact`,
  mainEntity: { '@id': `${site.url}/#organization` },
};

export default function ContactLayout({ children }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      {children}
    </>
  );
}
