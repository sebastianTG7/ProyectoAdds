import { MetadataRoute } from 'next';
import { getAllTramites, getAllCategorias, getAllInstituciones } from '@/data/tramitesService';
import { GUIAS_MULTIENTIDAD } from '@/data/mockData';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://comotramito.pe';

  // 1. Static base routes
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/buscar`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/instituciones`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/guardados`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/control`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.4,
    },
  ];

  // 2. Trámites routes (769 trámites oficiales)
  const tramites = getAllTramites();
  const tramiteRoutes: MetadataRoute.Sitemap = tramites.map((t) => ({
    url: `${baseUrl}/tramite/${t.slug}`,
    lastModified: new Date(t.ultimaVerificacion || Date.now()),
    changeFrequency: 'weekly',
    priority: 0.9,
  }));

  // 3. Instituciones routes (48 entidades públicas)
  const instituciones = getAllInstituciones();
  const institucionRoutes: MetadataRoute.Sitemap = instituciones.map((i) => ({
    url: `${baseUrl}/instituciones/${i.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  // 4. Categorías routes (10 categorías temáticas)
  const categorias = getAllCategorias();
  const categoriaRoutes: MetadataRoute.Sitemap = categorias.map((c) => ({
    url: `${baseUrl}/categoria/${c.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  // 5. Guías Multientidad
  const guiasRoutes: MetadataRoute.Sitemap = GUIAS_MULTIENTIDAD.map((g) => ({
    url: `${baseUrl}/guias/${g.slug}`,
    lastModified: new Date(g.ultimaVerificacion || Date.now()),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  return [
    ...staticRoutes,
    ...tramiteRoutes,
    ...institucionRoutes,
    ...categoriaRoutes,
    ...guiasRoutes,
  ];
}
