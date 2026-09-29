'use client';

import React from 'react';
import {
  Box,
  Typography,
  Grid2,
  Card,
  CardActionArea,
  Button,
  Chip,
} from '@mui/material';
import DirectionsCarFilledOutlinedIcon from '@mui/icons-material/DirectionsCarFilledOutlined';
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import HomeWorkOutlinedIcon from '@mui/icons-material/HomeWorkOutlined';
import FamilyRestroomOutlinedIcon from '@mui/icons-material/FamilyRestroomOutlined';
import ChildCareOutlinedIcon from '@mui/icons-material/ChildCareOutlined';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import GavelOutlinedIcon from '@mui/icons-material/GavelOutlined';
import FlightTakeoffOutlinedIcon from '@mui/icons-material/FlightTakeoffOutlined';
import AccountTreeOutlinedIcon from '@mui/icons-material/AccountTreeOutlined';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import PaymentsOutlinedIcon from '@mui/icons-material/PaymentsOutlined';
import { GuiaMultientidad } from '@/types/tramite';
import Link from './Link';

interface GuiasFeaturedProps {
  guias: GuiaMultientidad[];
  isHomePage?: boolean;
}

const ICON_MAP: Record<string, React.ReactElement> = {
  DirectionsCarFilledOutlined: <DirectionsCarFilledOutlinedIcon sx={{ fontSize: 22, color: '#2563EB' }} />,
  BusinessCenterOutlined: <BusinessCenterOutlinedIcon sx={{ fontSize: 22, color: '#059669' }} />,
  FavoriteBorderOutlined: <FavoriteBorderOutlinedIcon sx={{ fontSize: 22, color: '#DC2626' }} />,
  HomeWorkOutlined: <HomeWorkOutlinedIcon sx={{ fontSize: 22, color: '#D97706' }} />,
  FamilyRestroomOutlined: <FamilyRestroomOutlinedIcon sx={{ fontSize: 22, color: '#7C3AED' }} />,
  ChildCareOutlined: <ChildCareOutlinedIcon sx={{ fontSize: 22, color: '#EA580C' }} />,
  WorkOutlineOutlined: <WorkOutlineOutlinedIcon sx={{ fontSize: 22, color: '#4F46E5' }} />,
  GavelOutlined: <GavelOutlinedIcon sx={{ fontSize: 22, color: '#475569' }} />,
  FlightTakeoffOutlined: <FlightTakeoffOutlinedIcon sx={{ fontSize: 22, color: '#0D9488' }} />,
};

export default function GuiasFeatured({ guias, isHomePage = true }: GuiasFeaturedProps) {
  // En la home limitamos a 6 en desktop y a 3 en celular; en el directorio completo se muestran todas
  const displayGuias = isHomePage ? guias.slice(0, 6) : guias;

  return (
    <Box sx={{ mb: { xs: 5, md: 7 } }}>
      {/* Header de la sección */}
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: { xs: 2, sm: 3 } }}>
        <Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 0.5 }}>
            <AccountTreeOutlinedIcon sx={{ color: 'primary.main', fontSize: 20 }} />
            <Typography variant="h2" sx={{ fontSize: { xs: '1.2rem', sm: '1.45rem', md: '1.65rem' }, fontWeight: 700, color: '#0F172A' }}>
              Guías Multientidad
            </Typography>
          </Box>
          <Typography variant="body2" sx={{ color: '#64748B', display: { xs: 'none', sm: 'block' } }}>
            Rutas encadenadas paso a paso para metas complejas que involucran varias instituciones del Estado.
          </Typography>
        </Box>

        {isHomePage && (
          <Button
            component={Link}
            href="/guias"
            size="small"
            endIcon={<ArrowForwardIcon sx={{ fontSize: 14 }} />}
            sx={{
              color: 'info.main',
              fontWeight: 600,
              fontSize: { xs: '0.85rem', sm: '0.9rem' },
              textTransform: 'none',
              p: { xs: '4px 8px', sm: '6px 12px' },
              minWidth: 'auto',
              '&:hover': {
                bgcolor: 'rgba(37, 99, 235, 0.06)',
              },
            }}
          >
            Ver todas
          </Button>
        )}
      </Box>

      {/* Grid de Guías */}
      <Grid2 container spacing={{ xs: 2, sm: 2.5 }}>
        {displayGuias.map((guia, index) => {
          const icon = ICON_MAP[guia.icono] || <AccountTreeOutlinedIcon sx={{ fontSize: 22, color: '#2563EB' }} />;
          // En móvil (xs) en home solo se muestran las 3 primeras (índices 0, 1, 2)
          // Las guías 4, 5, 6 (índices 3, 4, 5) se ocultan en móvil
          const hideOnMobile = isHomePage && index >= 3;

          return (
            <Grid2
              key={guia.id}
              size={{ xs: 12, sm: 6, md: 4 }}
              sx={{
                display: hideOnMobile ? { xs: 'none', md: 'block' } : 'block',
              }}
            >
              <Card
                sx={{
                  height: '100%',
                  bgcolor: '#FFFFFF',
                  display: 'flex',
                  flexDirection: 'column',
                  borderRadius: { xs: '14px', sm: '16px' },
                  border: '1px solid #E2E8F0',
                  boxShadow: '0 1px 3px rgba(15, 23, 42, 0.02)',
                  transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
                  '&:hover': {
                    borderColor: '#CBD5E1',
                    boxShadow: '0 6px 18px rgba(15, 23, 42, 0.05)',
                  },
                }}
              >
                <CardActionArea
                  component={Link}
                  href={`/guias/${guia.slug}`}
                  sx={{
                    p: { xs: 2, sm: 2.5 },
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
                          width: 40,
                          height: 40,
                          borderRadius: '10px',
                          bgcolor: '#F8FAFC',
                          border: '1px solid #E2E8F0',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        {icon}
                      </Box>

                      <Chip
                        label={`${guia.items.length} trámites`}
                        size="small"
                        sx={{
                          bgcolor: '#F1F5F9',
                          color: '#475569',
                          fontWeight: 700,
                          fontSize: '0.72rem',
                          height: 22,
                        }}
                      />
                    </Box>

                    <Typography
                      variant="subtitle1"
                      sx={{
                        fontWeight: 700,
                        color: '#0F172A',
                        lineHeight: 1.3,
                        mb: 1,
                        fontSize: '0.98rem',
                      }}
                    >
                      {guia.nombre}
                    </Typography>

                    <Typography
                      variant="body2"
                      sx={{
                        color: '#64748B',
                        fontSize: '0.84rem',
                        lineHeight: 1.5,
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                      }}
                    >
                      {guia.descripcion}
                    </Typography>
                  </Box>

                  {/* Footer metadata: Tiempo y costo */}
                  <Box sx={{ width: '100%', pt: 1.5, borderTop: '1px solid #F1F5F9', display: 'flex', flexDirection: 'column', gap: 0.5 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.75, color: '#64748B' }}>
                      <AccessTimeOutlinedIcon sx={{ fontSize: 15, color: '#94A3B8' }} />
                      <Typography variant="caption" sx={{ fontWeight: 500, fontSize: '0.76rem' }}>
                        {guia.duracionEstimada}
                      </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.75, color: '#64748B' }}>
                      <PaymentsOutlinedIcon sx={{ fontSize: 15, color: '#94A3B8' }} />
                      <Typography
                        variant="caption"
                        sx={{
                          fontWeight: 600,
                          color: '#334155',
                          fontSize: '0.76rem',
                          whiteSpace: 'nowrap',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                        }}
                      >
                        {guia.costoEstimado}
                      </Typography>
                    </Box>
                  </Box>
                </CardActionArea>
              </Card>
            </Grid2>
          );
        })}
      </Grid2>

      {/* Botón inferior 'Ver todas las guías' en la pantalla principal */}
      {isHomePage && (
        <Box sx={{ mt: 3, textAlign: 'center' }}>
          <Button
            component={Link}
            href="/guias"
            variant="outlined"
            endIcon={<ArrowForwardIcon fontSize="small" />}
            sx={{
              borderColor: '#CBD5E1',
              color: '#0F172A',
              fontWeight: 600,
              fontSize: '0.875rem',
              px: 3,
              py: 1,
              borderRadius: '10px',
              textTransform: 'none',
              bgcolor: '#FFFFFF',
              '&:hover': {
                borderColor: '#94A3B8',
                bgcolor: '#F8FAFC',
              },
            }}
          >
            Ver todas las guías multientidad ({guias.length})
          </Button>
        </Box>
      )}
    </Box>
  );
}
