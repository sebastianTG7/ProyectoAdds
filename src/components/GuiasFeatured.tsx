'use client';

import React from 'react';
import {
  Box,
  Typography,
  Grid2,
  Card,
  CardActionArea,
  Button,
} from '@mui/material';
import DirectionsCarFilledOutlinedIcon from '@mui/icons-material/DirectionsCarFilledOutlined';
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import AccountTreeOutlinedIcon from '@mui/icons-material/AccountTreeOutlined';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import { GuiaMultientidad } from '@/types/tramite';
import Link from './Link';

interface GuiasFeaturedProps {
  guias: GuiaMultientidad[];
}

const ICON_MAP: Record<string, React.ReactElement> = {
  DirectionsCarFilledOutlined: <DirectionsCarFilledOutlinedIcon sx={{ fontSize: 22, color: '#2563EB' }} />,
  BusinessCenterOutlined: <BusinessCenterOutlinedIcon sx={{ fontSize: 22, color: '#059669' }} />,
  FavoriteBorderOutlined: <FavoriteBorderOutlinedIcon sx={{ fontSize: 22, color: '#DC2626' }} />,
};

export default function GuiasFeatured({ guias }: GuiasFeaturedProps) {
  return (
    <Box sx={{ mb: 7 }}>
      <Box sx={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', mb: 3 }}>
        <Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 0.5 }}>
            <AccountTreeOutlinedIcon sx={{ color: 'primary.main', fontSize: 20 }} />
            <Typography variant="h2" sx={{ fontSize: { xs: '1.35rem', md: '1.65rem' }, fontWeight: 700, color: '#0F172A' }}>
              Guías Multientidad
            </Typography>
          </Box>
          <Typography variant="body2" sx={{ color: '#64748B' }}>
            Rutas encadenadas paso a paso para metas complejas que involucran varias instituciones.
          </Typography>
        </Box>

        <Button
          component={Link}
          href="/guias"
          size="small"
          endIcon={<ArrowForwardIcon fontSize="small" />}
          sx={{ color: 'primary.main', fontWeight: 600, display: { xs: 'none', sm: 'inline-flex' } }}
        >
          Ver todas las guías
        </Button>
      </Box>

      <Grid2 container spacing={2.5}>
        {guias.map((guia) => {
          const icon = ICON_MAP[guia.icono] || <AccountTreeOutlinedIcon sx={{ fontSize: 22, color: '#B91C1C' }} />;

          return (
            <Grid2 key={guia.id} size={{ xs: 12, md: 4 }}>
              <Card
                sx={{
                  height: '100%',
                  bgcolor: '#FFFFFF',
                  display: 'flex',
                  flexDirection: 'column',
                  border: '1px solid #E2E8F0',
                  boxShadow: 'none',
                  transition: 'all 0.15s ease',
                  '&:hover': {
                    borderColor: '#CBD5E1',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.03)',
                  },
                }}
              >
                <CardActionArea
                  component={Link}
                  href={`/guias/${guia.slug}`}
                  sx={{
                    p: 2.5,
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    justifyContent: 'space-between',
                  }}
                >
                  <Box sx={{ width: '100%', mb: 2 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 1.5 }}>
                      <Box
                        sx={{
                          width: 38,
                          height: 38,
                          borderRadius: 1.5,
                          bgcolor: '#F8FAFC',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        {icon}
                      </Box>
                      <Typography variant="caption" sx={{ color: '#64748B', fontWeight: 600, fontSize: '0.78rem' }}>
                        {guia.items.length} etapas
                      </Typography>
                    </Box>

                    <Typography variant="h4" sx={{ fontWeight: 700, color: '#0F172A', mb: 1, fontSize: '1.05rem', lineHeight: 1.35 }}>
                      {guia.nombre}
                    </Typography>

                    <Typography variant="body2" sx={{ color: '#64748B', fontSize: '0.84rem', lineHeight: 1.5, mb: 2 }}>
                      {guia.descripcion}
                    </Typography>

                    {/* Sequential steps preview without heavy box borders */}
                    <Box sx={{ pl: 1, borderLeft: '2px solid #E2E8F0', mb: 2 }}>
                      {guia.items.slice(0, 3).map((item) => (
                        <Box key={item.orden} sx={{ mb: 0.5 }}>
                          <Typography variant="caption" sx={{ color: '#334155', fontWeight: 500, display: 'block' }}>
                            {item.orden}. {item.tramiteNombre}
                          </Typography>
                        </Box>
                      ))}
                    </Box>
                  </Box>

                  <Box sx={{ width: '100%', pt: 1.5, borderTop: '1px solid #F1F5F9', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                      <AccessTimeOutlinedIcon sx={{ fontSize: 15, color: '#64748B' }} />
                      <Typography variant="caption" sx={{ color: '#64748B', fontWeight: 500 }}>
                        {guia.duracionEstimada}
                      </Typography>
                    </Box>

                    <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: 0.5, color: 'primary.main', fontSize: '0.8125rem', fontWeight: 600 }}>
                      <span>Ver ruta</span>
                      <ArrowForwardIcon sx={{ fontSize: 14 }} />
                    </Box>
                  </Box>
                </CardActionArea>
              </Card>
            </Grid2>
          );
        })}
      </Grid2>
    </Box>
  );
}
