# ComoTramito — Portal de Trámites del Perú

Plataforma moderna, intuitiva y centralizada para consultar los trámites oficiales más frecuentes del Estado peruano (MTC, RENIEC, SUNAT, Banco de la Nación, etc.).

## Características del Proyecto

- **Catálogo de Trámites Oficiales**: Requisitos, pasos, canales de pago, costos y plazos de entrega.
- **Desglose Regional para Licencias**: Soporte para trámites con cobertura multi-región (Lima, Huánuco, Cajamarca, Junín, Piura, Callao y gestión presencial en demás departamentos).
- **Panel de Supervisión y Calidad (`/control`)**: Herramienta interna de auditoría para marcar trámites como *Vigente* o *Pendiente*, agrupados por entidad y con persistencia automática en `localStorage` (sin necesidad de login).
- **Diseño UI/UX Profesional**: Desarrollado con Next.js y Material UI (MUI), con diseño sobrio, minimalista y responsivo.

## Tecnologías Utilizadas

- **Frontend / Framework**: Next.js (App Router), React, TypeScript
- **Componentes & Estilos**: Material UI (MUI) v6
- **Base de Datos (Opcional / Backend)**: Prisma ORM, PostgreSQL

## Instalación y Ejecución Local

1. **Clonar el repositorio**:
   ```bash
   git clone https://github.com/sebastianTG7/ProyectoAdds.git
   cd ProyectoAdds
   ```

2. **Instalar dependencias**:
   ```bash
   npm install
   ```

3. **Configurar variables de entorno**:
   Copiar `.env.example` a `.env`:
   ```bash
   cp .env.example .env
   ```

4. **Iniciar el servidor de desarrollo**:
   ```bash
   npm run dev
   ```
   Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

5. **Acceso al Panel de Control interno**:
   Navega a [http://localhost:3000/control](http://localhost:3000/control) para revisar y actualizar el estado de los trámites.
