'use client';

import React from 'react';
import { Box, Container, Typography, Grid2, Divider, Stack } from '@mui/material';
import Link from './Link';
import VerifiedUserOutlinedIcon from '@mui/icons-material/VerifiedUserOutlined';

export default function Footer() {
  return (
    <Box component="footer" sx={{ bgcolor: '#0F172A', color: '#94A3B8', pt: 6, pb: 4, mt: 8, borderTop: '1px solid #1E293B' }}>
      <Container maxWidth="lg">
        <Grid2 container spacing={4}>
          <Grid2 size={{ xs: 12, md: 5 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.25, mb: 1.5 }}>
              <Box
                sx={{
                  width: 28,
                  height: 28,
                  borderRadius: 1,
                  bgcolor: 'primary.main',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 800,
                  fontSize: '0.8rem',
                  color: '#FFFFFF',
                }}
              >
                CT
              </Box>
              <Typography variant="h6" sx={{ color: '#FFFFFF', fontWeight: 700, fontSize: '1.05rem' }}>
                ComoTramito
              </Typography>
            </Box>
            <Typography variant="body2" sx={{ color: '#94A3B8', pr: { md: 4 }, mb: 2, fontSize: '0.84rem' }}>
              Directorio independiente y estructurado de trámites ciudadanos en el Perú. Fichas claras, costos exactos, requisitos y guías paso a paso sin saturación de texto.
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, color: '#64748B', fontSize: '0.8rem' }}>
              <VerifiedUserOutlinedIcon sx={{ fontSize: 16, color: '#22C55E' }} />
              <span>Información contrastada con TUPA oficial y portales del Estado</span>
            </Box>
          </Grid2>

          <Grid2 size={{ xs: 6, sm: 4, md: 2 }}>
            <Typography variant="subtitle2" sx={{ color: '#FFFFFF', fontWeight: 600, mb: 1.5, fontSize: '0.875rem' }}>
              Trámites Clave
            </Typography>
            <Stack spacing={1}>
              <Typography component={Link} href="/tramite/duplicado-dni" variant="body2" sx={{ color: '#94A3B8', textDecoration: 'none', '&:hover': { color: '#FFFFFF' } }}>
                Duplicado DNI
              </Typography>
              <Typography component={Link} href="/tramite/pasaporte-electronico" variant="body2" sx={{ color: '#94A3B8', textDecoration: 'none', '&:hover': { color: '#FFFFFF' } }}>
                Pasaporte
              </Typography>
              <Typography component={Link} href="/tramite/obtencion-brevete-a1" variant="body2" sx={{ color: '#94A3B8', textDecoration: 'none', '&:hover': { color: '#FFFFFF' } }}>
                Brevete A-1
              </Typography>
              <Typography component={Link} href="/tramite/certificado-unico-laboral" variant="body2" sx={{ color: '#94A3B8', textDecoration: 'none', '&:hover': { color: '#FFFFFF' } }}>
                Certificado Único Laboral
              </Typography>
              <Typography component={Link} href="/tramite/antecedentes-penales" variant="body2" sx={{ color: '#94A3B8', textDecoration: 'none', '&:hover': { color: '#FFFFFF' } }}>
                Antecedentes Penales
              </Typography>
            </Stack>
          </Grid2>

          <Grid2 size={{ xs: 6, sm: 4, md: 2 }}>
            <Typography variant="subtitle2" sx={{ color: '#FFFFFF', fontWeight: 600, mb: 1.5, fontSize: '0.875rem' }}>
              Explorar
            </Typography>
            <Stack spacing={1}>
              <Typography component={Link} href="/buscar" variant="body2" sx={{ color: '#94A3B8', textDecoration: 'none', '&:hover': { color: '#FFFFFF' } }}>
                Buscador General
              </Typography>
              <Typography component={Link} href="/instituciones" variant="body2" sx={{ color: '#94A3B8', textDecoration: 'none', '&:hover': { color: '#FFFFFF' } }}>
                Por Institución
              </Typography>
              <Typography component={Link} href="/guias" variant="body2" sx={{ color: '#94A3B8', textDecoration: 'none', '&:hover': { color: '#FFFFFF' } }}>
                Guías Multientidad
              </Typography>
              <Typography component={Link} href="/guardados" variant="body2" sx={{ color: '#94A3B8', textDecoration: 'none', '&:hover': { color: '#FFFFFF' } }}>
                Mis Guardados
              </Typography>
            </Stack>
          </Grid2>

          <Grid2 size={{ xs: 12, sm: 4, md: 3 }}>
            <Typography variant="subtitle2" sx={{ color: '#FFFFFF', fontWeight: 600, mb: 1.5, fontSize: '0.875rem' }}>
              Aviso de Transparencia
            </Typography>
            <Typography variant="body2" sx={{ color: '#64748B', fontSize: '0.78rem', lineHeight: 1.5 }}>
              Este sitio web es un directorio informativo privado no afiliado al Estado Peruano. Todas las tasas y trámites son redirigidos directamente a las plataformas oficiales del gobierno (gob.pe, Págalo.pe, SUNAT, RENIEC, etc.).
            </Typography>
          </Grid2>
        </Grid2>

        <Divider sx={{ my: 3.5, borderColor: '#1E293B' }} />

        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, justifyContent: 'space-between', alignItems: 'center', gap: 1 }}>
          <Typography variant="caption" sx={{ color: '#64748B' }}>
            © {new Date().getFullYear()} ComoTramito — Directorio y Guía Ciudadana
          </Typography>
          <Typography variant="caption" sx={{ color: '#64748B' }}>
            Última actualización de tasas TUPA: Febrero 2025
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
