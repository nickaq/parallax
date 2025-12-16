import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://orgeda.com';
  const locales = ['de', 'en'];
  
  const routes = [
    '',
    '#brandschutz',
    '#bueroplanung', 
    '#fabrikplanung',
    '#logistikplanung',
    '#innovative-techniken',
    '#ueber-uns',
    '#kontakt',
  ];

  const sitemap: MetadataRoute.Sitemap = [];

  locales.forEach((locale) => {
    routes.forEach((route) => {
      sitemap.push({
        url: `${baseUrl}/${locale}${route}`,
        lastModified: new Date(),
        changeFrequency: route === '' ? 'weekly' : 'monthly',
        priority: route === '' ? 1.0 : 0.8,
      });
    });
  });

  return sitemap;
}
