export type TipoInstitucion = 'nacional' | 'regional' | 'municipal' | 'privado';

export type TipoResultado =
  | 'documento_digital'
  | 'documento_fisico'
  | 'licencia'
  | 'objeto_fisico'
  | 'confirmacion'
  | 'servicio_digital'
  | 'consulta_informativa';

export type Modalidad = 'online' | 'presencial' | 'mixta';

export type CostoTipo = 'fijo' | 'variable' | 'gratuito' | 'rango';

export interface Categoria {
  id: string;
  slug: string;
  nombre: string;
  descripcion: string;
  icono: string;
}

export interface Institucion {
  id: string;
  slug: string;
  nombre: string;
  sigla?: string;
  tipo: TipoInstitucion;
  webOficial: string;
  descripcion: string;
  logoIniciales: string;
  tramiteCount?: number;
}

export interface VarianteTramite {
  id: string;
  nombre: string;
  costo: number;
  duracionTexto: string;
  codigoTributo?: string;
  descripcion?: string;
}

export interface Paso {
  id: string;
  orden: number;
  modalidad?: Modalidad;
  variante?: string;
  esOpcional: boolean;
  titulo: string;
  descripcion: string;
  institucionNombre?: string;
  institucionUrl?: string;
  costoTipo: CostoTipo;
  costoMin: number;
  costoMax: number;
  ubicacion?: string;
}

export interface Requisito {
  id: string;
  descripcion: string;
  aplicaSi?: 'general' | 'extranjero' | 'menor_edad' | 'divorciado_viudo' | 'conductor_nuevo' | null;
  orden: number;
}

export interface CanalPago {
  id: string;
  nombre: string;
  tipo: 'online' | 'agencia' | 'agente';
  comisionTexto?: string;
}

export interface ConceptoPago {
  concepto: string;
  monto: number;
}

export interface RegionPago {
  id: string;
  region: string;
  institucionEjecutora: string;
  codigoPagalo: string;
  conceptos: ConceptoPago[];
  costoTotal: number;
  sedeExamenes?: string;
  sistemaCitas?: {
    nombre: string;
    url?: string;
    nota?: string;
  };
}

export interface CoberturaZona {
  id: string;
  institucionId: string;
  region: string;
  distrito?: string;
}

export interface Tramite {
  id: string;
  slug: string;
  nombre: string;
  nombreCorto?: string;
  subgrupo?: string;
  descripcion: string;
  categoriaId: string;
  categoria: Categoria;
  institucionId: string;
  institucion: Institucion;
  esCompuesto: boolean;
  esRecurrente: boolean;
  modalidadPrincipal: Modalidad;
  duracionMinDias: number;
  duracionMaxDias: number;
  duracionTexto: string;
  tipoResultado: TipoResultado;
  vigenciaResultadoDias?: number | null;
  vigenciaTexto?: string;
  ultimaVerificacion: string; // ISO date string
  fuenteUrl: string;
  frecuenciaBusqueda: number;
  costoResumen: string;
  costoPrincipal: number;
  codigoTributo?: string;
  baseLegal?: string;
  variantes?: VarianteTramite[];
  pasos: Paso[];
  requisitos: Requisito[];
  canalesPago: CanalPago[];
  tags: string[];
  cobertura?: CoberturaZona[];
  regionesPago?: RegionPago[];
}

export interface GuiaTramiteItem {
  orden: number;
  tramiteSlug: string;
  tramiteNombre: string;
  institucionNombre: string;
  nota?: string;
  esOpcional?: boolean;
}

export interface GuiaMultientidad {
  id: string;
  slug: string;
  nombre: string;
  descripcion: string;
  ultimaVerificacion: string;
  duracionEstimada: string;
  costoEstimado: string;
  icono: string;
  items: GuiaTramiteItem[];
}
