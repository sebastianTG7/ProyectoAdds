import React from 'react';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { Container, Box, Typography, Grid2, Button, Chip } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { getAllCategorias, getCategoriaBySlug, getTramitesByCategoria } from '@/data/tramitesService';
import TramiteCard from '@/components/TramiteCard';
import Link from '@/components/Link';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const categorias = getAllCategorias();
  return categorias.map((c) => ({
    slug: c.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const categoria = getCategoriaBySlug(slug);

  if (!categoria) {
    return {
      title: 'Categoría no encontrada — ComoTramito',
    };
  }

  return {
    title: `${categoria.nombre} — Trámites y Guías | ComoTramito`,
    description: categoria.descripcion,
  };
}

export default async function CategoriaPage({ params }: PageProps) {
  const { slug } = await params;
  const categoria = getCategoriaBySlug(slug);

  if (!categoria) {
    notFound();
  }

  const tramites = getTramitesByCategoria(categoria.slug);

  return (
    <Box sx={{ bgcolor: '#F8FAFC', minHeight: '80vh', py: 5 }}>
      <Container maxWidth="lg">
        {/* Navigation & Breadcrumb */}
        <Box sx={{ mb: 3 }}>
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
            <Typography variant="h1" sx={{ fontSize: { xs: '1.75rem', md: '2.2rem' }, fontWeight: 800 }}>
              {categoria.nombre}
            </Typography>
            <Chip
              label={`${tramites.length} trámites`}
              size="small"
              sx={{ fontWeight: 700, bgcolor: '#F1F5F9', color: '#334155' }}
            />
          </Box>
          <Typography variant="body1" sx={{ color: '#64748B', maxWidth: 680 }}>
            {categoria.descripcion}
          </Typography>
        </Box>

        {/* Results */}
        {tramites.length === 0 ? (
          <Box sx={{ p: 6, textAlign: 'center', bgcolor: '#FFFFFF', borderRadius: 2, border: '1px solid #E2E8F0' }}>
            <Typography variant="subtitle1" sx={{ color: '#64748B' }}>
              No hay trámites registrados en esta categoría por el momento.
            </Typography>
          </Box>
        ) : (
          <Grid2 container spacing={3}>
            {tramites.map((tramite) => (
              <Grid2 key={tramite.id} size={{ xs: 12, sm: 6, md: 4 }}>
                <TramiteCard tramite={tramite} />
              </Grid2>
            ))}
          </Grid2>
        )}
      </Container>
    </Box>
  );
}
