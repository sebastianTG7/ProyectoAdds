import React from 'react';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import {
  Container,
  Box,
  Typography,
  Button,
  Chip,
  Card,
  Avatar,
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { getAllInstituciones, getInstitucionBySlug } from '@/data/tramitesService';
import InstitucionTramitesExplorer from '@/components/InstitucionTramitesExplorer';
import Link from '@/components/Link';

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
    openGraph: {
      title: `${inst.sigla || inst.nombre} — Trámites Oficiales`,
      description: inst.descripcion,
      url: `https://comotramito.pe/instituciones/${inst.slug}`,
    },
  };
}

export default async function InstitucionDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const inst = getInstitucionBySlug(slug);

  if (!inst) {
    notFound();
  }

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
            <Box
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'row' },
                alignItems: { xs: 'flex-start', sm: 'center' },
                justifyContent: 'space-between',
                gap: 2.5,
              }}
            >
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
                      label={
                        inst.tipo === 'municipal'
                          ? 'Gobierno Local'
                          : inst.tipo === 'nacional'
                          ? 'Entidad Nacional'
                          : 'Empresa de Servicios'
                      }
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

        {/* Trámites Explorer with interactive filters, search and pagination */}
        <InstitucionTramitesExplorer
          tramites={inst.tramites}
          institucionNombre={inst.sigla || inst.nombre}
        />
      </Container>
    </Box>
  );
}
