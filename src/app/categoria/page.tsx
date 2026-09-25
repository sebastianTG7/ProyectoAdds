import React from 'react';
import type { Metadata } from 'next';
import { Container, Box, Typography, Button } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';
import { getAllCategorias } from '@/data/tramitesService';
import CategoriasGrid from '@/components/CategoriasGrid';
import Link from '@/components/Link';

export const metadata: Metadata = {
  title: 'Categorías de Trámites — ComoTramito',
  description: 'Explora todos los trámites del Perú clasificados por área de gestión.',
};

export default function CategoriasIndexPage() {
  const categorias = getAllCategorias();

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
            <CategoryOutlinedIcon sx={{ color: 'primary.main', fontSize: 32 }} />
            <Typography variant="h1" sx={{ fontSize: { xs: '1.75rem', md: '2.2rem' }, fontWeight: 800 }}>
              Categorías de Trámites
            </Typography>
          </Box>
          <Typography variant="body1" sx={{ color: '#64748B', maxWidth: 720 }}>
            Encuentra trámites ciudadanos organizados temáticamente para resolver necesidades en transporte, identidad, tributos, trabajo y servicios del hogar.
          </Typography>
        </Box>

        <CategoriasGrid categorias={categorias} />
      </Container>
    </Box>
  );
}
