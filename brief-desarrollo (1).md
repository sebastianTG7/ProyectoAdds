# Brief de desarrollo — Plataforma de trámites del Perú

## 1. Qué es el producto
Un directorio buscable de trámites gubernamentales y de servicios (RENIEC, SUNAT, MTC,
municipalidades, empresas de luz/agua, etc.) en Perú. El usuario busca lo que necesita
hacer ("sacar brevete", "pagar luz") y encuentra una ficha clara con costo, tiempo,
requisitos y pasos — mejor organizada y más simple de leer que gob.pe o competidores
como TrámitesPerú.com.

MVP: 15-20 trámites cargados manualmente, cubriendo los patrones más comunes
(atómico, compuesto, doble modalidad, recurrente por zona).

## 2. Stack técnico
- **Frontend**: Next.js (React, SSR/SSG obligatorio por SEO — el contenido es el producto)
- **UI**: Material UI (MUI) — componentes: AppBar, Card, Chip, TextField (search),
  BottomNavigation, Accordion (para la sección "por qué"), Stepper (para los pasos)
- **Base de datos**: PostgreSQL alojado en Supabase
- **ORM**: Prisma
- **Búsqueda**: Postgres full-text search (`pg_trgm`) en el MVP; evaluar Algolia/Typesense
  solo si el volumen lo exige
- **Hosting**: Por analizar
- **Ads**: Google AdSense (slot ya contemplado en el diseño de la ficha de trámite)

## 3. Modelo de datos (Prisma / PostgreSQL)

```
CATEGORIA (id, nombre)

INSTITUCION (id, nombre, tipo [nacional|regional|municipal|privado], web_oficial)

TRAMITE (
  id, nombre, categoria_id FK,
  es_compuesto bool,       -- true si tiene sub-pasos en distintas instituciones (ej. brevete)
  es_recurrente bool,      -- true si es un pago periódico, no un trámite de una vez (ej. luz)
  duracion_min_dias int, duracion_max_dias int,
  tipo_resultado enum,     -- documento_digital | documento_fisico | licencia | objeto_fisico | confirmacion
  vigencia_resultado_dias int nullable,  -- ej. 90 para antecedentes penales, null si no caduca
  ultima_verificacion date,
  fuente_url string
)

PASO (
  id, tramite_id FK, orden int,
  modalidad enum nullable, -- online | presencial | null (aplica a ambos)
  variante string nullable, -- ej. "5_años" vs "10_años" en pasaporte
  es_opcional bool,         -- ej. denuncia policial en duplicado de DNI
  titulo, descripcion,
  institucion_id FK,
  costo_tipo enum,          -- fijo | variable | gratuito | rango
  costo_min decimal, costo_max decimal,
  ubicacion string nullable -- null si modalidad=online
)

REQUISITO (id, tramite_id FK, descripcion, aplica_si string nullable)
  -- aplica_si: 'extranjero' | 'menor_edad' | 'divorciado_viudo' | null (siempre aplica)

INSTITUCION (id, nombre, tipo, web_oficial)

CANAL_PAGO (id, nombre)
TRAMITE_CANAL (tramite_id FK, canal_id FK)   -- tabla puente N:N

COBERTURA_ZONA (id, institucion_id FK, region, distrito)
  -- resuelve instituciones que varían por ubicación (ej. Enel vs Luz del Sur)

GUIA_MULTIENTIDAD (id, nombre, descripcion, ultima_verificacion)
GUIA_TRAMITE (guia_id FK, tramite_id FK, orden)
  -- agrupa varios TRAMITE independientes en una secuencia mayor
  -- (ej. "Comprar un auto usado" = 11 trámites encadenados)
```

**Regla de negocio clave**: para instituciones que se repiten miles de veces (municipalidades),
NO crear una fila por municipalidad en el MVP. Usar una sola fila `INSTITUCION` genérica
("Municipalidad de tu distrito"), `costo_tipo = 'variable'`, y `fuente_url` apuntando al
buscador oficial de TUPA municipal.

## 4. Pantallas a construir (en orden de prioridad)

### 4.1 Pantalla de inicio
Ver mockup: [pantalla de inicio, Material Design]

Componentes:
- Buscador central prominente (TextField de MUI, rounded, con ícono de lupa),
  placeholder con ejemplos reales rotativos
- Fila de chips horizontales con los trámites más buscados (acceso directo)
- Sección "Explora por institución": lista de Cards, cada una con avatar/inicial,
  nombre de la institución y conteo de trámites (`SELECT institucion, COUNT(*)`)
- Al tocar una institución, se expande (o navega) mostrando sus trámites
  **agrupados por categoría, y dentro de cada categoría ordenados por frecuencia
  de búsqueda** (no alfabético)
- Considerar un segundo eje de exploración por categoría (no solo institución),
  ya que categorías como "servicios públicos" cruzan varias instituciones
- Ícono de "Guardados" en la AppBar superior, con contador leído de `localStorage`
  (no usar BottomNavigation — sin cuentas de usuario, no hay 4 destinos reales que
  justifiquen navegación persistente; se prioriza que el sitio se sienta ligero
  y de lectura rápida, no como el shell de una app nativa)

### 4.2 Ficha de trámite (detalle)
Ver mockup: [ficha de trámite, mobile]

Componentes MUI sugeridos:
- Barra superior con back + título + institución + fecha de verificación
- Chips de resumen (Costo / Tiempo / Modalidad) sin necesidad de scroll
- Toggle de variante si aplica (ej. DNI azul vs electrónico) — actualiza costo en vivo
- Botón primario (CTA) hacia la fuente oficial + botón secundario "Guardar" (toggle de
  marcador, persistido en `localStorage`, sin backend ni cuenta de usuario)
- Card de requisitos con Checkbox de MUI (filtrando por `aplica_si` según el perfil
  del usuario si se implementa personalización a futuro)
- Stepper de MUI (vertical, uno expandido a la vez) para los pasos, mostrando
  badge "opcional" en los pasos con `es_opcional = true`
- Slot de anuncio nativo entre el checklist y el stepper (Google AdSense)
- Accordion de MUI, colapsado por defecto, para el contexto/"por qué" legal
- Carrusel horizontal de trámites relacionados al final

## 5. Principios de UX no negociables (por qué se diseñó así)
- Nada de contenido explicativo largo antes del checklist accionable —
  el problema diagnosticado en el competidor es "mucho texto antes de llegar a lo útil"
- Una sola secuencia de pasos visible a la vez; si un trámite tiene una fase 2,
  se modela como GUIA_MULTIENTIDAD enlazando a otro TRAMITE, no como pasos extra
  en la misma pantalla
- El campo `ultima_verificacion` debe mostrarse siempre visible — es tanto
  señal de confianza para el usuario como mecanismo interno de control de calidad
  (query simple: trámites no verificados hace más de 60 días)

## 6. Fuera de alcance para el MVP (decisión de producto, no solo técnica)
- Scraping automatizado (fase 3 del roadmap)
- Cobertura completa de las ~1,800 municipalidades
- Cuentas de usuario, login, y notificaciones push — decisión deliberada, no
  pendiente: el producto debe sentirse como un sitio web rápido de consulta,
  no como una app con shell de navegación persistente. "Guardados" se resuelve
  100% en el cliente vía `localStorage`, sin backend de usuarios
