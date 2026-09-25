import React from 'react';
import type { Metadata } from 'next';
import { Container, Box, Typography, Button } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined';
import { getAllInstituciones } from '@/data/tramitesService';
import InstitucionesGrid from '@/components/InstitucionesGrid';
import Link from '@/components/Link';

export const metadata: Metadata = {
  title: 'Directorio de Instituciones Públicas y Empresas — ComoTramito',
  description: 'Conoce todas las entidades gubernamentales del Perú y sus trámites asociados.',
};

export default function InstitucionesIndexPage() {
  const instituciones = getAllInstituciones();

  return (
    <Box sx={{ bgcolor: '#F8FAFC', minHeight: '80vh', py: 5 }}>
      <Container maxWidth="lg">
        <Box sx={{ mb: 4 }}>
          <Button
            component={Link}
            href="/"
            startIcon={<ArrowBackIcon fontSize="small" />}
            size="small"
            sx={{ color: '#64748B', fontWeight: 600, mb: 1.5 }}
          >
            Inicio
          </Button>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 1 }}>
            <AccountBalanceOutlinedIcon sx={{ color: 'primary.main', fontSize: 32 }} />
            <Typography variant="h1" sx={{ fontSize: { xs: '1.75rem', md: '2.2rem' }, fontWeight: 800 }}>
              Directorio de Instituciones
            </Typography>
          </Box>
          <Typography variant="body1" sx={{ color: '#64748B', maxWidth: 720 }}>
            Explora las entidades estatales, ministerios, organismos públicos y empresas prestadoras de servicios públicos en el Perú.
          </Typography>
        </Box>

        <InstitucionesGrid instituciones={instituciones} />
      </Container>
    </Box>
  );
}
