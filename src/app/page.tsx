import React from 'react';
import { Container, Box, Typography, Grid2, Button } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import SearchHero from '@/components/SearchHero';
import TramiteCard from '@/components/TramiteCard';
import InstitucionesGrid from '@/components/InstitucionesGrid';
import CategoriasGrid from '@/components/CategoriasGrid';
import GuiasFeatured from '@/components/GuiasFeatured';
import MobileQuickFab from '@/components/MobileQuickFab';
import Link from '@/components/Link';
import {
  getFeaturedTramites,
  getAllInstituciones,
  getAllCategorias,
  getAllGuias,
} from '@/data/tramitesService';

export default function HomePage() {
  const featuredTramites = getFeaturedTramites(6);
  const instituciones = getAllInstituciones();
  const categorias = getAllCategorias();
  const guias = getAllGuias();

  return (
    <Box sx={{ bgcolor: '#F8FAFC' }}>
      {/* Hero with Search and Quick Direct Access */}
      <SearchHero />

      <Container maxWidth="lg" sx={{ py: { xs: 3, md: 6 }, px: { xs: 2, sm: 3, md: 4 } }}>
        {/* 1. Explora por Institución (FIRST SECTION as requested) */}
        <InstitucionesGrid instituciones={instituciones} />

        {/* 2. Trámites más Solicitados en Perú (SECOND SECTION) */}
        <Box sx={{ mb: 8 }}>
          <Box sx={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', mb: 3 }}>
            <Box>
              <Typography variant="h2" sx={{ fontSize: { xs: '1.35rem', md: '1.65rem' }, fontWeight: 700, mb: 0.5, color: '#0F172A' }}>
                Trámites más Solicitados en Perú
              </Typography>
              <Typography variant="body2" sx={{ color: '#64748B' }}>
                Accesos directos a las fichas de trámite más demandadas con costos y requisitos actualizados.
              </Typography>
            </Box>

            <Button
              component={Link}
              href="/buscar"
              size="small"
              endIcon={<ArrowForwardIcon fontSize="small" />}
              sx={{ color: 'primary.main', fontWeight: 600 }}
            >
              Ver catálogo completo
            </Button>
          </Box>

          <Grid2 container spacing={3}>
            {featuredTramites.map((tramite) => (
              <Grid2 key={tramite.id} size={{ xs: 12, sm: 6, md: 4 }}>
                <TramiteCard tramite={tramite} />
              </Grid2>
            ))}
          </Grid2>
        </Box>

        {/* 3. Guías Multientidad */}
        <GuiasFeatured guias={guias} />

        {/* 4. Explora por Categoría */}
        <CategoriasGrid categorias={categorias} />

        {/* 5. Propuesta de Valor y Principios de Calidad (Diseño limpio y sobrio sin recuadros estridentes) */}
        <Box
          sx={{
            py: 5,
            px: { xs: 3, md: 5 },
            bgcolor: '#FFFFFF',
            borderRadius: 2,
            border: '1px solid #E2E8F0',
          }}
        >
          <Box sx={{ textAlign: 'center', maxWidth: 680, mx: 'auto', mb: 4 }}>
            <Typography variant="h3" sx={{ fontSize: { xs: '1.25rem', md: '1.45rem' }, fontWeight: 700, mb: 1, color: '#0F172A' }}>
              ¿Por qué usar ComoTramito?
            </Typography>
            <Typography variant="body2" sx={{ color: '#64748B', lineHeight: 1.6 }}>
              Eliminamos el exceso de texto legal y la navegación confusa de las webs oficiales. Te entregamos un resumen accionable con costos exactos, tiempos reales y pasos cronológicos.
            </Typography>
          </Box>

          <Grid2 container spacing={4}>
            <Grid2 size={{ xs: 12, md: 4 }}>
              <Typography variant="subtitle2" sx={{ fontWeight: 700, color: '#0F172A', mb: 0.75, fontSize: '0.95rem' }}>
                Información 100% Verificada
              </Typography>
              <Typography variant="body2" sx={{ color: '#64748B', fontSize: '0.85rem', lineHeight: 1.6 }}>
                Cada ficha cuenta con una fecha de verificación visible para certificar que las tasas y códigos de tributo coincidan con el TUPA vigente.
              </Typography>
            </Grid2>

            <Grid2 size={{ xs: 12, md: 4 }}>
              <Typography variant="subtitle2" sx={{ fontWeight: 700, color: '#0F172A', mb: 0.75, fontSize: '0.95rem' }}>
                Checklist Interactivo
              </Typography>
              <Typography variant="body2" sx={{ color: '#64748B', fontSize: '0.85rem', lineHeight: 1.6 }}>
                Marca los requisitos que ya tienes listos para no olvidar ningún documento antes de acudir a la cita o iniciar el trámite digital.
              </Typography>
            </Grid2>

            <Grid2 size={{ xs: 12, md: 4 }}>
              <Typography variant="subtitle2" sx={{ fontWeight: 700, color: '#0F172A', mb: 0.75, fontSize: '0.95rem' }}>
                Enlaces Oficiales Directos
              </Typography>
              <Typography variant="body2" sx={{ color: '#64748B', fontSize: '0.85rem', lineHeight: 1.6 }}>
                Te dirigimos exactamente al sistema de citas o pasarela de pago del Estado (Págalo.pe, Gob.pe, SUNAT) sin cobros adicionales ni intermediarios.
              </Typography>
            </Grid2>
          </Grid2>
        </Box>
      </Container>

      {/* Floating Action Button for mobile quick navigation */}
      <MobileQuickFab />
    </Box>
  );
}
