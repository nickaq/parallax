import type { Metadata } from 'next';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://orgeda.com';

export const siteConfig = {
  name: 'Orgeda GmbH',
  description: {
    de: 'Orgeda GmbH - Ihr Partner für Brandschutz, Büroplanung, Fabrikplanung, Logistikplanung und innovative Technologien. Professionelle Beratung und Planung aus Deutschland.',
    en: 'Orgeda GmbH - Your partner for fire safety, office planning, factory planning, logistics planning and innovative technologies. Professional consulting and planning from Germany.',
  },
  url: baseUrl,
  keywords: {
    de: [
      'Brandschutz',
      'Büroplanung', 
      'Fabrikplanung',
      'Logistikplanung',
      'Flucht- und Rettungspläne',
      'Feuerwehrpläne',
      'New Work',
      '3D-Laserscanning',
      'Augmented Reality',
      'BIM',
      'Industrie 4.0',
      'Lean Production',
      'Deutschland',
      'Orgeda GmbH',
    ],
    en: [
      'Fire Safety',
      'Office Planning',
      'Factory Planning', 
      'Logistics Planning',
      'Escape and Rescue Plans',
      'Fire Brigade Plans',
      'New Work',
      '3D Laser Scanning',
      'Augmented Reality',
      'BIM',
      'Industry 4.0',
      'Lean Production',
      'Germany',
      'Orgeda GmbH',
    ],
  },
  author: 'Orgeda GmbH',
  locale: {
    default: 'de',
    available: ['de', 'en'],
  },
};

export function generateMetadata(locale: string = 'de'): Metadata {
  const isGerman = locale === 'de';
  
  return {
    metadataBase: new URL(baseUrl),
    title: {
      default: `${siteConfig.name} | ${isGerman ? 'Planung & Beratung' : 'Planning & Consulting'}`,
      template: `%s | ${siteConfig.name}`,
    },
    description: isGerman ? siteConfig.description.de : siteConfig.description.en,
    keywords: isGerman ? siteConfig.keywords.de : siteConfig.keywords.en,
    authors: [{ name: siteConfig.author }],
    creator: siteConfig.author,
    publisher: siteConfig.author,
    formatDetection: {
      email: true,
      address: true,
      telephone: true,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    openGraph: {
      type: 'website',
      locale: isGerman ? 'de_DE' : 'en_US',
      alternateLocale: isGerman ? 'en_US' : 'de_DE',
      url: `${baseUrl}/${locale}`,
      siteName: siteConfig.name,
      title: `${siteConfig.name} | ${isGerman ? 'Planung & Beratung' : 'Planning & Consulting'}`,
      description: isGerman ? siteConfig.description.de : siteConfig.description.en,
      images: [
        {
          url: '/images/hero.png',
          width: 1200,
          height: 630,
          alt: siteConfig.name,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${siteConfig.name} | ${isGerman ? 'Planung & Beratung' : 'Planning & Consulting'}`,
      description: isGerman ? siteConfig.description.de : siteConfig.description.en,
      images: ['/images/hero.png'],
    },
    alternates: {
      canonical: `${baseUrl}/${locale}`,
      languages: {
        'de': `${baseUrl}/de`,
        'en': `${baseUrl}/en`,
        'x-default': `${baseUrl}/de`,
      },
    },
    verification: {
      // Add your verification codes here
      // google: 'your-google-verification-code',
    },
  };
}

// JSON-LD Structured Data - Organization
export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${baseUrl}/#organization`,
    name: 'Orgeda GmbH',
    url: baseUrl,
    logo: {
      '@type': 'ImageObject',
      url: `${baseUrl}/images/hero.png`,
      width: 600,
      height: 60,
    },
    description: siteConfig.description.de,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Musterstraße 123',
      addressLocality: 'Musterstadt',
      postalCode: '12345',
      addressCountry: 'DE',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+49-123-456789',
      contactType: 'customer service',
      availableLanguage: ['German', 'English'],
    },
    sameAs: [],
  };
}

// JSON-LD - LocalBusiness
export function generateLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${baseUrl}/#localbusiness`,
    name: 'Orgeda GmbH',
    image: `${baseUrl}/images/hero.png`,
    url: baseUrl,
    telephone: '+49-123-456789',
    priceRange: '€€€',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Musterstraße 123',
      addressLocality: 'Musterstadt',
      postalCode: '12345',
      addressCountry: 'DE',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 51.1657,
      longitude: 10.4515,
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '17:00',
    },
    areaServed: [
      { '@type': 'Country', name: 'Germany' },
      { '@type': 'Country', name: 'Austria' },
      { '@type': 'Country', name: 'Switzerland' },
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Engineering Services',
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Brandschutzplanung' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Büroplanung' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Fabrikplanung' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Logistikplanung' } },
      ],
    },
  };
}

// JSON-LD - WebSite with SearchAction
export function generateWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${baseUrl}/#website`,
    url: baseUrl,
    name: siteConfig.name,
    description: siteConfig.description.de,
    publisher: {
      '@id': `${baseUrl}/#organization`,
    },
    inLanguage: ['de-DE', 'en-US'],
  };
}

// JSON-LD - BreadcrumbList
export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

// JSON-LD - Service
export function generateServiceSchema(serviceName: string, serviceDescription: string, serviceUrl?: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: serviceName,
    description: serviceDescription,
    url: serviceUrl || baseUrl,
    provider: {
      '@id': `${baseUrl}/#organization`,
    },
    areaServed: [
      { '@type': 'Country', name: 'Germany' },
      { '@type': 'Country', name: 'Austria' },
      { '@type': 'Country', name: 'Switzerland' },
    ],
    serviceType: 'Engineering Consulting',
  };
}

// JSON-LD - FAQPage
export function generateFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

// Combine all schemas for page
export function generateAllSchemas() {
  return [
    generateOrganizationSchema(),
    generateLocalBusinessSchema(),
    generateWebSiteSchema(),
  ];
}

