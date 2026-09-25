import React from 'react';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import {
  Container,
  Box,
  Typography,
  Grid2,
  Button,
  Chip,
  Card,
  CardContent,
  Avatar,
  Stack,
  Divider,
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { getAllInstituciones, getInstitucionBySlug } from '@/data/tramitesService';
import TramiteCard from '@/components/TramiteCard';
import Link from '@/components/Link';
import { Tramite } from '@/types/tramite';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const instituciones = getAllInstituciones();
  return instituciones.map((i) => ({
    slug: i.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const inst = getInstitucionBySlug(slug);

  if (!inst) {
    return {
      title: 'Institución no encontrada — ComoTramito',
    };
  }

  return {
    title: `${inst.sigla || inst.nombre} — Trámites y Requisitos | ComoTramito`,
    description: inst.descripcion,
  };
}

export default async function InstitucionDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const inst = getInstitucionBySlug(slug);

  if (!inst) {
    notFound();
  }

  // Group by category, inside each category already sorted by search frequency
  const categoriesMap: { [catId: string]: { catNombre: string; catSlug: string; tramites: Tramite[] } } = {};
  inst.tramites.forEach((t) => {
    if (!categoriesMap[t.categoriaId]) {
      categoriesMap[t.categoriaId] = {
        catNombre: t.categoria.nombre,
        catSlug: t.categoria.slug,
        tramites: [],
      };
    }
    categoriesMap[t.categoriaId].tramites.push(t);
  });

  return (
    <Box sx={{ bgcolor: '#F8FAFC', minHeight: '80vh', py: 5 }}>
      <Container maxWidth="lg">
        {/* Navigation & Header */}
        <Box sx={{ mb: 4 }}>
          <Button
            component={Link}
            href="/instituciones"
            startIcon={<ArrowBackIcon fontSize="small" />}
            size="small"
            sx={{ color: '#64748B', fontWeight: 600, mb: 1.5 }}
          >
            Todas las instituciones
          </Button>

          <Card sx={{ bgcolor: '#FFFFFF', border: '1px solid #E2E8F0', p: { xs: 2.5, sm: 3 } }}>
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, alignItems: { xs: 'flex-start', sm: 'center' }, justifyContent: 'space-between', gap: 2.5 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Avatar
                  sx={{
                    bgcolor: '#0F172A',
                    color: '#FFFFFF',
                    fontWeight: 800,
                    fontSize: '1.1rem',
                    width: 56,
                    height: 56,
                    border: '1px solid #334155',
                  }}
                >
                  {inst.logoIniciales}
                </Avatar>

                <Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 0.5, flexWrap: 'wrap' }}>
                    <Typography variant="h1" sx={{ fontSize: { xs: '1.4rem', md: '1.75rem' }, fontWeight: 800 }}>
                      {inst.sigla || inst.nombre}
                    </Typography>
                    <Chip
                      label={inst.tipo === 'municipal' ? 'Gobierno Local' : inst.tipo === 'nacional' ? 'Entidad Nacional' : 'Empresa de Servicios'}
                      size="small"
                      sx={{ bgcolor: '#F1F5F9', color: '#475569', fontSize: '0.72rem', fontWeight: 600 }}
                    />
                  </Box>
                  <Typography variant="body2" sx={{ color: '#64748B', fontWeight: 500 }}>
                    {inst.nombre}
                  </Typography>
                </Box>
              </Box>

              <Button
                component="a"
                href={inst.webOficial}
                target="_blank"
                rel="noopener noreferrer"
                variant="outlined"
                size="small"
                endIcon={<OpenInNewIcon fontSize="small" />}
                sx={{ borderColor: '#CBD5E1', color: '#0F172A', fontWeight: 600, flexShrink: 0 }}
              >
                Sitio oficial
              </Button>
            </Box>

            <Typography variant="body1" sx={{ color: '#475569', mt: 2.5, fontSize: '0.925rem', lineHeight: 1.6 }}>
              {inst.descripcion}
            </Typography>
          </Card>
        </Box>

        {/* Trámites list grouped by category and sorted by frequency */}
        <Box>
          <Typography variant="h2" sx={{ fontSize: '1.35rem', fontWeight: 700, mb: 3 }}>
            Trámites disponibles ({inst.tramites.length})
          </Typography>

          {Object.entries(categoriesMap).map(([catId, group]) => (
            <Box key={catId} sx={{ mb: 4 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                <Typography variant="subtitle1" sx={{ fontWeight: 700, color: '#0F172A' }}>
                  {group.catNombre}
                </Typography>
                <Chip
                  label={`${group.tramites.length}`}
                  size="small"
                  sx={{ height: 20, fontSize: '0.7rem', bgcolor: '#F1F5F9', color: '#475569' }}
                />
              </Box>

              <Grid2 container spacing={3}>
                {group.tramites.map((tramite) => (
                  <Grid2 key={tramite.id} size={{ xs: 12, sm: 6, md: 4 }}>
                    <TramiteCard tramite={tramite} />
                  </Grid2>
                ))}
              </Grid2>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
