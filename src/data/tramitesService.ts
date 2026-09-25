import { CATEGORIAS, INSTITUCIONES, TRAMITES, GUIAS_MULTIENTIDAD } from './mockData';
import { Tramite, Categoria, Institucion, GuiaMultientidad } from '@/types/tramite';

export function getAllTramites(): Tramite[] {
  return [...TRAMITES];
}

export function getFeaturedTramites(limit = 6): Tramite[] {
  return [...TRAMITES]
    .sort((a, b) => b.frecuenciaBusqueda - a.frecuenciaBusqueda)
    .slice(0, limit);
}

export function getTramiteBySlug(slug: string): Tramite | undefined {
  return TRAMITES.find((t) => t.slug === slug);
}

export function getAllCategorias(): Categoria[] {
  return [...CATEGORIAS];
}

export function getCategoriaBySlug(slug: string): Categoria | undefined {
  return CATEGORIAS.find((c) => c.slug === slug);
}

export function getAllInstituciones(): (Institucion & { tramiteCount: number })[] {
  return INSTITUCIONES.map((inst) => {
    const count = TRAMITES.filter((t) => t.institucionId === inst.id).length;
    return {
      ...inst,
      tramiteCount: count,
    };
  });
}

export function getInstitucionBySlug(slug: string): (Institucion & { tramites: Tramite[] }) | undefined {
  const inst = INSTITUCIONES.find((i) => i.slug === slug);
  if (!inst) return undefined;
  const tramites = TRAMITES.filter((t) => t.institucionId === inst.id)
    .sort((a, b) => b.frecuenciaBusqueda - a.frecuenciaBusqueda);
  return {
    ...inst,
    tramites,
    tramiteCount: tramites.length,
  };
}

export function getTramitesByCategoria(categoriaSlug: string): Tramite[] {
  const cat = getCategoriaBySlug(categoriaSlug);
  if (!cat) return [];
  return TRAMITES.filter((t) => t.categoriaId === cat.id)
    .sort((a, b) => b.frecuenciaBusqueda - a.frecuenciaBusqueda);
}

export function getRelatedTramites(currentTramiteId: string, limit = 4): Tramite[] {
  const current = TRAMITES.find((t) => t.id === currentTramiteId);
  if (!current) return [];

  return TRAMITES.filter((t) => t.id !== currentTramiteId)
    .sort((a, b) => {
      const sameCategoryA = a.categoriaId === current.categoriaId ? 2 : 0;
      const sameCategoryB = b.categoriaId === current.categoriaId ? 2 : 0;
      const sameInstA = a.institucionId === current.institucionId ? 1 : 0;
      const sameInstB = b.institucionId === current.institucionId ? 1 : 0;
      return sameCategoryB + sameInstB - (sameCategoryA + sameInstA);
    })
    .slice(0, limit);
}

export function searchTramites(
  query: string,
  filters?: {
    categoriaId?: string;
    institucionId?: string;
    modalidad?: string;
    soloGratuitos?: boolean;
    esCompuesto?: boolean;
  }
): Tramite[] {
  const cleanQuery = query.toLowerCase().trim();

  return TRAMITES.filter((item) => {
    if (filters?.categoriaId && item.categoriaId !== filters.categoriaId) return false;
    if (filters?.institucionId && item.institucionId !== filters.institucionId) return false;
    if (filters?.modalidad && item.modalidadPrincipal !== filters.modalidad) return false;
    if (filters?.soloGratuitos && item.costoPrincipal > 0) return false;
    if (filters?.esCompuesto !== undefined && item.esCompuesto !== filters.esCompuesto) return false;

    if (!cleanQuery) return true;

    const matchName = item.nombre.toLowerCase().includes(cleanQuery);
    const matchDesc = item.descripcion.toLowerCase().includes(cleanQuery);
    const matchInst = item.institucion.nombre.toLowerCase().includes(cleanQuery) ||
      (item.institucion.sigla && item.institucion.sigla.toLowerCase().includes(cleanQuery));
    const matchCat = item.categoria.nombre.toLowerCase().includes(cleanQuery);
    const matchTags = item.tags.some((tag) => tag.toLowerCase().includes(cleanQuery));

    return matchName || matchDesc || matchInst || matchCat || matchTags;
  }).sort((a, b) => {
    if (!cleanQuery) return b.frecuenciaBusqueda - a.frecuenciaBusqueda;
    const exactNameA = a.nombre.toLowerCase().includes(cleanQuery) ? 1 : 0;
    const exactNameB = b.nombre.toLowerCase().includes(cleanQuery) ? 1 : 0;
    if (exactNameA !== exactNameB) return exactNameB - exactNameA;
    return b.frecuenciaBusqueda - a.frecuenciaBusqueda;
  });
}

export function getAllGuias(): GuiaMultientidad[] {
  return [...GUIAS_MULTIENTIDAD];
}

export function getGuiaBySlug(slug: string): GuiaMultientidad | undefined {
  return GUIAS_MULTIENTIDAD.find((g) => g.slug === slug);
}
