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
  Stack,
  Divider,
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import PaymentsOutlinedIcon from '@mui/icons-material/PaymentsOutlined';
import VerifiedUserOutlinedIcon from '@mui/icons-material/VerifiedUserOutlined';
import { getAllGuias, getGuiaBySlug } from '@/data/tramitesService';
import Link from '@/components/Link';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const guias = getAllGuias();
  return guias.map((g) => ({
    slug: g.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const guia = getGuiaBySlug(slug);

  if (!guia) {
    return {
      title: 'Guía no encontrada — ComoTramito',
    };
  }

  return {
    title: `${guia.nombre} | ComoTramito`,
    description: `${guia.descripcion} Duración: ${guia.duracionEstimada}. Costo estimado: ${guia.costoEstimado}.`,
  };
}

export default async function GuiaDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const guia = getGuiaBySlug(slug);

  if (!guia) {
    notFound();
  }

  const formattedDate = new Date(guia.ultimaVerificacion).toLocaleDateString('es-PE', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  return (
    <Box sx={{ bgcolor: '#F8FAFC', minHeight: '80vh', py: 5 }}>
      <Container maxWidth="md">
        {/* Navigation & Breadcrumb */}
        <Box sx={{ mb: 3 }}>
          <Button
            component={Link}
            href="/guias"
            startIcon={<ArrowBackIcon fontSize="small" />}
            size="small"
            sx={{ color: '#64748B', fontWeight: 600, mb: 1.5 }}
          >
            Todas las guías
          </Button>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1.5, flexWrap: 'wrap' }}>
            <Chip
              label="Guía Multientidad"
              size="small"
              sx={{ bgcolor: 'primary.main', color: '#FFFFFF', fontWeight: 700, fontSize: '0.75rem' }}
            />
            <Chip
              label={`${guia.items.length} etapas secuenciales`}
              size="small"
              sx={{ bgcolor: '#EFF6FF', color: '#1E40AF', fontWeight: 600, fontSize: '0.75rem' }}
            />
            <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: 0.5, color: '#64748B', fontSize: '0.78rem', ml: 'auto' }}>
              <VerifiedUserOutlinedIcon sx={{ fontSize: 16, color: '#16A34A' }} />
              <span>Verificado: {formattedDate}</span>
            </Box>
          </Box>

          <Typography variant="h1" sx={{ fontSize: { xs: '1.75rem', sm: '2.2rem' }, fontWeight: 800, mb: 1.5, lineHeight: 1.2 }}>
            {guia.nombre}
          </Typography>

          <Typography variant="body1" sx={{ color: '#475569', fontSize: '1rem', lineHeight: 1.6, mb: 3 }}>
            {guia.descripcion}
          </Typography>

          {/* Quick Summary card */}
          <Card sx={{ bgcolor: '#FFFFFF', border: '1px solid #E2E8F0', mb: 4 }}>
            <CardContent sx={{ p: 2 }}>
              <Grid2 container spacing={2}>
                <Grid2 size={{ xs: 12, sm: 6 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <AccessTimeOutlinedIcon sx={{ color: '#2563EB', fontSize: 22 }} />
                    <Box>
                      <Typography variant="caption" sx={{ color: '#64748B', fontWeight: 600, textTransform: 'uppercase', fontSize: '0.7rem', display: 'block' }}>
                        Tiempo total estimado
                      </Typography>
                      <Typography variant="subtitle2" sx={{ fontWeight: 700, color: '#0F172A' }}>
                        {guia.duracionEstimada}
                      </Typography>
                    </Box>
                  </Box>
                </Grid2>

                <Grid2 size={{ xs: 12, sm: 6 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <PaymentsOutlinedIcon sx={{ color: 'primary.main', fontSize: 22 }} />
                    <Box>
                      <Typography variant="caption" sx={{ color: '#64748B', fontWeight: 600, textTransform: 'uppercase', fontSize: '0.7rem', display: 'block' }}>
                        Presupuesto estimado
                      </Typography>
                      <Typography variant="subtitle2" sx={{ fontWeight: 700, color: '#0F172A' }}>
                        {guia.costoEstimado}
                      </Typography>
                    </Box>
                  </Box>
                </Grid2>
              </Grid2>
            </CardContent>
          </Card>
        </Box>

        {/* Sequenced Steps */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="h2" sx={{ fontSize: '1.35rem', fontWeight: 700, mb: 3 }}>
            Secuencia de trámites paso a paso
          </Typography>

          <Stack spacing={2.5}>
            {guia.items.map((item) => (
              <Card
                key={item.orden}
                sx={{
                  bgcolor: '#FFFFFF',
                  border: '1px solid #E2E8F0',
                  '&:hover': {
                    borderColor: '#CBD5E1',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.04)',
                  },
                }}
              >
                <CardContent sx={{ p: 2.5 }}>
                  <Box sx={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', mb: 1, gap: 1 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                      <Box
                        sx={{
                          width: 32,
                          height: 32,
                          borderRadius: '50%',
                          bgcolor: '#0F172A',
                          color: '#FFFFFF',
                          fontWeight: 700,
                          fontSize: '0.875rem',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                        }}
                      >
                        {item.orden}
                      </Box>
                      <Box>
                        <Typography variant="subtitle1" sx={{ fontWeight: 700, color: '#0F172A', lineHeight: 1.2 }}>
                          {item.tramiteNombre}
                        </Typography>
                        <Typography variant="caption" sx={{ color: '#64748B' }}>
                          Entidad: <strong>{item.institucionNombre}</strong>
                        </Typography>
                      </Box>
                    </Box>

                    {item.esOpcional && (
                      <Chip
                        label="Opcional pero recomendado"
                        size="small"
                        sx={{ height: 20, fontSize: '0.7rem', bgcolor: '#FEF3C7', color: '#92400E', fontWeight: 600 }}
                      />
                    )}
                  </Box>

                  {item.nota && (
                    <Typography variant="body2" sx={{ color: '#334155', my: 1.5, pl: 5.5, fontSize: '0.875rem', lineHeight: 1.55 }}>
                      {item.nota}
                    </Typography>
                  )}

                  <Box sx={{ pl: 5.5, pt: 1, display: 'flex', justifyContent: 'flex-end' }}>
                    <Button
                      component={Link}
                      href={`/tramite/${item.tramiteSlug}`}
                      size="small"
                      variant="outlined"
                      endIcon={<ArrowForwardIcon fontSize="small" />}
                      sx={{ borderColor: '#CBD5E1', color: '#0F172A', fontWeight: 600, fontSize: '0.8rem' }}
                    >
                      Ver ficha detallada del trámite
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            ))}
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}
