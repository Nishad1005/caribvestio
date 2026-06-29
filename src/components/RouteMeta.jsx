import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getIndustry } from '@/data/industries';
import { faqs } from '@/components/Faq';

const SITE = 'CaribVestio';
const SITE_URL = 'https://www.caribvestio.com';

const ORGANIZATION_LD = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: SITE,
  url: SITE_URL,
  description:
    'Bulk uniform sourcing for Caribbean businesses — direct from manufacturers, with multiple supplier quotes to compare.',
  areaServed: ['Jamaica', 'Caribbean'],
  slogan: 'Uniforms. Workwear. Worldwide.',
};
const DEFAULT_DESC =
  'One-stop shop for bulk uniforms in Jamaica and the Caribbean — sourced direct from manufacturers, with multiple supplier quotes to compare and no middlemen.';

// Static per-route metadata. Industry pages are handled dynamically below.
const META = {
  '/': {
    title: `${SITE} | Bulk Uniforms for Caribbean Businesses`,
    description: DEFAULT_DESC,
  },
  '/collections': {
    title: `Uniform Collections by Industry | ${SITE}`,
    description: 'Browse bulk uniform solutions for security, hospitality, healthcare, schools and corporate teams across Jamaica and the Caribbean.',
  },
  '/bulk-orders': {
    title: `Bulk Uniform Orders & Quotes | ${SITE}`,
    description: 'Request bulk uniform quotes from vetted manufacturers. Compare prices, customise with your logo, and pay the maker directly.',
  },
  '/quote': {
    title: `Build Your Bulk Quote | ${SITE}`,
    description: 'Add the uniforms your team needs and request one consolidated bulk quote from CaribVestio. No payment to start.',
  },
  '/contact': {
    title: `Contact Us | ${SITE}`,
    description: 'Talk to CaribVestio about bulk uniforms for your Jamaican or Caribbean business. We reply within 48 hours.',
  },
  '/about': {
    title: `About ${SITE} | Direct-from-Manufacturer Uniforms`,
    description: 'CaribVestio connects Caribbean businesses directly to uniform manufacturers — comparing supplier quotes and coordinating end-to-end across the Caribbean and India.',
  },
  '/blog': {
    title: `Uniform Guide & Insights | ${SITE}`,
    description: 'Guides on choosing uniforms, fabrics for the Caribbean climate, logo customisation and bulk ordering.',
  },
  '/login': {
    title: `Client Portal Login | ${SITE}`,
    description: 'Sign in to your CaribVestio account to manage your team’s uniform program.',
  },
  '/privacy': {
    title: `Privacy Policy | ${SITE}`,
    description: 'How CaribVestio collects, uses and protects your information.',
  },
};

function setMeta(name, content, attr = 'name') {
  let el = document.head.querySelector(`meta[${attr}="${name}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

// Create/update or remove a JSON-LD <script> by id. Pass null to remove.
function setJsonLd(id, data) {
  let el = document.getElementById(id);
  if (!data) {
    if (el) el.remove();
    return;
  }
  if (!el) {
    el = document.createElement('script');
    el.id = id;
    el.type = 'application/ld+json';
    document.head.appendChild(el);
  }
  el.textContent = JSON.stringify(data);
}

const FAQ_LD = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
};

export default function RouteMeta() {
  const { pathname } = useLocation();

  useEffect(() => {
    let meta = META[pathname];
    let industry = null;

    if (!meta && pathname.startsWith('/industries/')) {
      industry = getIndustry(pathname.split('/')[2]);
      if (industry) {
        meta = {
          title: `${industry.title} Uniforms in Jamaica & the Caribbean | ${SITE}`,
          description: industry.blurb,
        };
      }
    }

    if (!meta) {
      meta = { title: `${SITE} | Bulk Caribbean Uniforms`, description: DEFAULT_DESC };
    }

    const ogImage = `${SITE_URL}/og-image.svg`;

    document.title = meta.title;
    setMeta('description', meta.description);
    setMeta('og:title', meta.title, 'property');
    setMeta('og:description', meta.description, 'property');
    setMeta('og:type', 'website', 'property');
    setMeta('og:image', ogImage, 'property');
    setMeta('og:image:width', '1200', 'property');
    setMeta('og:image:height', '630', 'property');
    setMeta('twitter:card', 'summary_large_image');
    setMeta('twitter:title', meta.title);
    setMeta('twitter:description', meta.description);
    setMeta('twitter:image', ogImage);

    // Structured data: Organization site-wide, FAQ schema only on the homepage.
    setJsonLd('ld-org', ORGANIZATION_LD);
    setJsonLd('ld-faq', pathname === '/' ? FAQ_LD : null);

    // Industry pages get Breadcrumb + Service + their own FAQ schema.
    if (industry) {
      setJsonLd('ld-page', [
        {
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
            { '@type': 'ListItem', position: 2, name: 'Industries', item: `${SITE_URL}/collections` },
            { '@type': 'ListItem', position: 3, name: `${industry.title} Uniforms`, item: `${SITE_URL}/industries/${industry.slug}` },
          ],
        },
        {
          '@context': 'https://schema.org',
          '@type': 'Service',
          serviceType: `${industry.title} uniforms`,
          provider: { '@type': 'Organization', name: SITE, url: SITE_URL },
          areaServed: ['Jamaica', 'Caribbean'],
          description: industry.blurb,
        },
        {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: (industry.faqs || []).map((f) => ({
            '@type': 'Question',
            name: f.q,
            acceptedAnswer: { '@type': 'Answer', text: f.a },
          })),
        },
      ]);
    } else {
      setJsonLd('ld-page', null);
    }
  }, [pathname]);

  return null;
}
