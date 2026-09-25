# Avance 1 — Desarrollo Inicial de la Plataforma ComoTramito

**Fecha:** Febrero 2025  
**Proyecto:** ComoTramito — Directorio y Guía Rápida de Trámites Oficiales del Perú  
**Versión:** MVP 1.0  

---

## 1. Resumen Ejecutivo
Se implementó la arquitectura completa y el frontend/backend base para la plataforma **ComoTramito**, resolviendo la necesidad ciudadana de acceder a información estructurada, clara, accionable y verificada sobre trámites públicos y servicios esenciales en el Perú, eliminando la sobrecarga de texto y la navegación compleja de los portales estatales.

---

## 2. Stack Técnico y Arquitectura
- **Framework Web:** Next.js 15 (App Router con generación estática SSG y renderizado SSR optimizado para SEO).
- **Librería de Componentes & Estilos:** Material UI (MUI v6) con `@mui/material-nextjs` y Emotion Cache.
- **Lenguaje:** TypeScript con tipado estricto.
- **Base de Datos & ORM:** PostgreSQL 16 alojado en contenedor Docker con Prisma ORM (`schema.prisma`).
- **Persistencia en Cliente:** `localStorage` para marcadores/guardados sin requerir autenticación ni backend de sesiones.
- **Scripts de Base de Datos:** Automatización de sincronización (`npm run db:push`) y carga de datos iniciales (`npm run db:seed` con `tsx`).

---

## 3. Modelo de Datos y Dataset de Trámites (20 Trámites MVP)
Se modelaron e insertaron 20 trámites de alta demanda cubriendo los patrones clave de producto:
1. **Atómicos y Digitales:**
   - Duplicado de DNI (RENIEC)
   - Certificado Único Laboral - CUL (MTPE - 100% Gratuito)
   - Certificado Electrónico de Antecedentes Penales (Poder Judicial)
   - Certificado de Antecedentes Policiales Digital (PNP)
   - Inscripción al RUC Persona Natural (SUNAT)
   - Clave SOL (SUNAT)
   - Récord de Conductor y Puntos MTC (MTC / SUTRAN)
   - Denuncia Policial Digital por Pérdida de Documentos (PNP)
   - Suspensión de Retenciones de 4ta Categoría (SUNAT)
2. **Compuestos (Multi-fase):**
   - Obtención de Licencia de Conducir Clase A-1 (Centro Médico -> Touring -> MTC)
   - Licencia de Funcionamiento para Negocios MYPE (Municipalidad / Defensa Civil ITSE)
3. **Doble Modalidad / Variantes en Vivo:**
   - Renovación de DNI por caducidad (Azul S/ 30.00 vs DNIe S/ 41.00)
   - Pasaporte Electrónico Ordinario (5 años S/ 98.60 vs 10 años S/ 120.90)
4. **Recurrentes y por Zona Geográfica:**
   - Consulta y Pago de Recibo de Luz (Luz del Sur / Pluz Energía por distrito)
   - Consulta y Pago de Recibo de Agua Potable (SEDAPAL)
   - Declaración y Pago de Impuesto Predial y Arbitrios (Municipalidad Distrital / TUPA)
5. **Guías Multientidad Encadenadas:**
   - Guía paso a paso: Comprar un auto usado en el Perú (SAT -> SUNARP -> PNP DIROVE -> Notaría -> TIVE).
   - Guía paso a paso: Constituir y formalizar una empresa MYPE en Perú (SUNARP -> Notaría -> SUNAT -> Municipalidad).
   - Guía paso a paso: Trámite de Matrimonio Civil en tu Municipalidad (RENIEC -> Centro de Salud -> Municipalidad).

---

## 4. Pantallas y Vistas Desarrolladas

### 4.1 Pantalla Principal (`/`)
- **Buscador Central:** Entrada prominente con placeholder rotativo con ejemplos reales y autocompletado en tiempo real.
- **Explora por Institución (Sección Prioritaria):** Tarjetas interactivas con desplegable de trámites agrupados por categoría y ordenados por frecuencia de búsqueda.
- **Trámites más Solicitados en Perú:** Tarjetas con costos, tiempos, modalidad y acceso directo.
- **Guías Multientidad:** Rutas complejas desglosadas en secuencias de etapas.
- **Explora por Categoría:** Eje temático (Identidad, Vehicular, Tributos, Empleo, Servicios Básicos, Municipal, Salud).
- **Bloque de Transparencia:** Garantía de información contrastada y enlaces oficiales directos.

### 4.2 Ficha de Trámite Detallada (`/tramite/[slug]`)
- Barra superior con botón volver, institución, categoría y fecha de verificación visible (`ultima_verificacion`).
- Cinta de resumen superior (Costo, Tiempo estimado, Modalidad, Vigencia).
- Selector de variantes interactivo que actualiza el costo y código de tributo en tiempo real.
- Botón CTA directo al portal oficial del Estado + botón de Guardar (marcador cliente).
- Checklist interactivo de requisitos con barra de progreso.
- Stepper vertical paso a paso con detalles de costo, entidad y plataforma oficial.
- Acordeón colapsado para la base legal y marco normativo.
- Sección de canales de pago autorizados y advertencia antifraude.
- Fichas de trámites relacionados al pie de página.

### 4.3 Buscador y Directorio General (`/buscar`)
- Búsqueda por texto libre combinada con filtros de categoría, institución, modalidad (Online / Presencial / Mixta) y filtro de trámites gratuitos (S/ 0.00).

### 4.4 Directorio y Detalle por Institución (`/instituciones` y `/instituciones/[slug]`)
- Perfil institucional con enlace oficial y lista de trámites clasificados.

### 4.5 Guías Multientidad (`/guias` y `/guias/[slug]`)
- Rutas paso a paso con estimación global de tiempo y presupuesto.

### 4.6 Gestión de Guardados (`/guardados` y Drawer Lateral)
- Panel lateral y página dedicada sincronizados con `localStorage`.

---

## 5. Aplicación de Reglas de Diseño UI / UX
- Prohibición estricta de luces neón, efectos glow y recuadros estridentes.
- Ausencia total de emoticones en componentes e interfaz.
- Paleta sobria basada en rojo institucional (#B91C1C), azul pizarra oscuro (#0F172A), fondos limpios (#F8FAFC, #FFFFFF) y tipografía Inter.
- Estructura plana y minimalista sin marcos redundantes ni píldoras recargadas.

---

## 6. Verificación Técnica
- Compilación de producción (`npm run build`) exitosa con 51 páginas estáticas pre-renderizadas (SSG).
- Typecheck TypeScript (`npm run typecheck`) sin errores.
- Docker compose y base de datos sincronizada con Prisma.
