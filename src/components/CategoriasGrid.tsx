'use client';

import React from 'react';
import {
  Box,
  Typography,
  Grid2,
  Card,
  CardActionArea,
} from '@mui/material';
import BadgeOutlinedIcon from '@mui/icons-material/BadgeOutlined';
import DirectionsCarOutlinedIcon from '@mui/icons-material/DirectionsCarOutlined';
import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import BoltOutlinedIcon from '@mui/icons-material/BoltOutlined';
import ApartmentOutlinedIcon from '@mui/icons-material/ApartmentOutlined';
import HealthAndSafetyOutlinedIcon from '@mui/icons-material/HealthAndSafetyOutlined';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Categoria } from '@/types/tramite';
import { TRAMITES } from '@/data/mockData';
import Link from './Link';

interface CategoriasGridProps {
  categorias: Categoria[];
}

const ICON_MAP: Record<string, React.ReactElement> = {
  BadgeOutlined: <BadgeOutlinedIcon sx={{ fontSize: 22, color: '#B91C1C' }} />,
  DirectionsCarOutlined: <DirectionsCarOutlinedIcon sx={{ fontSize: 22, color: '#2563EB' }} />,
  AccountBalanceOutlined: <AccountBalanceOutlinedIcon sx={{ fontSize: 22, color: '#059669' }} />,
  WorkOutlineOutlined: <WorkOutlineOutlinedIcon sx={{ fontSize: 22, color: '#D97706' }} />,
  BoltOutlined: <BoltOutlinedIcon sx={{ fontSize: 22, color: '#7C3AED' }} />,
  ApartmentOutlined: <ApartmentOutlinedIcon sx={{ fontSize: 22, color: '#0284C7' }} />,
  HealthAndSafetyOutlined: <HealthAndSafetyOutlinedIcon sx={{ fontSize: 22, color: '#DC2626' }} />,
};

export default function CategoriasGrid({ categorias }: CategoriasGridProps) {
  return (
    <Box sx={{ mb: 7 }}>
      <Box sx={{ mb: 3 }}>
        <Typography variant="h2" sx={{ fontSize: { xs: '1.35rem', md: '1.65rem' }, fontWeight: 700, mb: 0.5, color: '#0F172A' }}>
          Explora por Categoría
        </Typography>
        <Typography variant="body2" sx={{ color: '#64748B' }}>
          Encuentra trámites relacionados que cruzan diversas instituciones públicas y empresas de servicios.
        </Typography>
      </Box>

      <Grid2 container spacing={2}>
        {categorias.map((cat) => {
          const count = TRAMITES.filter((t) => t.categoriaId === cat.id).length;
          const icon = ICON_MAP[cat.icono] || <BadgeOutlinedIcon sx={{ fontSize: 22, color: '#B91C1C' }} />;

          return (
            <Grid2 key={cat.id} size={{ xs: 12, sm: 6, md: 4 }}>
              <Card
                sx={{
                  height: '100%',
                  bgcolor: '#FFFFFF',
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
                  href={`/categoria/${cat.slug}`}
                  sx={{ height: '100%', p: 2.5, display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'space-between' }}
                >
                  <Box sx={{ width: '100%', mb: 1.5 }}>
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
                        {count} {count === 1 ? 'trámite' : 'trámites'}
                      </Typography>
                    </Box>

                    <Typography variant="subtitle1" sx={{ fontWeight: 700, color: '#0F172A', mb: 0.5, lineHeight: 1.3 }}>
                      {cat.nombre}
                    </Typography>

                    <Typography variant="body2" sx={{ color: '#64748B', fontSize: '0.825rem', lineHeight: 1.45 }}>
                      {cat.descripcion}
                    </Typography>
                  </Box>

                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, color: 'primary.main', fontSize: '0.8125rem', fontWeight: 600, mt: 'auto' }}>
                    <span>Ver trámites</span>
                    <ArrowForwardIcon sx={{ fontSize: 14 }} />
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
