import { MetadataRoute } from 'next';
import { PROJECTS } from '@/data/projects';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://ahmed-web1.vercel.app';
  const locales = ['ar', 'en'];
  const routes = ['', '/work', '/services', '/about', '/contact'];

  const sitemapEntries: MetadataRoute.Sitemap = [];

  // Static Pages for each locale
  locales.forEach((locale) => {
    routes.forEach((route) => {
      sitemapEntries.push({
        url: `${baseUrl}/${locale}${route}`,
        lastModified: new Date(),
        changeFrequency: route === '' ? 'weekly' : 'monthly',
        priority: route === '' ? 1.0 : 0.8,
      });
    });

    // Dynamic Project Case Studies for each locale
    PROJECTS.forEach((project) => {
      sitemapEntries.push({
        url: `${baseUrl}/${locale}/work/${project.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: project.featured ? 0.9 : 0.7,
      });
    });
  });

  return sitemapEntries;
}
