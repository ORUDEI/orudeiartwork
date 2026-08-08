import type { MetadataRoute } from 'next';

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '',
    '/galeria',
    '/originales',
    '/sobre-mi',
    '/envios',
    '/contacto',
    '/en',
    '/en/galeria',
    '/en/originales',
    '/en/sobre-mi',
    '/en/envios',
    '/en/contacto',
  ];

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: route === '' || route === '/en' ? 1 : 0.8,
  }));
}
