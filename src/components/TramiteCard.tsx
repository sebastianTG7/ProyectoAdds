'use client';

import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  Box,
  Stack,
  IconButton,
} from '@mui/material';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import PaymentsOutlinedIcon from '@mui/icons-material/PaymentsOutlined';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Tramite } from '@/types/tramite';
import { useSavedTramites } from '@/context/SavedTramitesContext';
import Link from './Link';

interface TramiteCardProps {
  tramite: Tramite;
  compact?: boolean;
}

export default function TramiteCard({ tramite, compact = false }: TramiteCardProps) {
  const { isSaved, toggleSave } = useSavedTramites();
  const saved = isSaved(tramite.slug);

  const getModalidadLabel = () => {
    switch (tramite.modalidadPrincipal) {
      case 'online':
        return '100% Online';
      case 'presencial':
        return 'Presencial';
      case 'mixta':
      default:
        return 'Presencial y Virtual';
    }
  };

  return (
    <Card
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        bgcolor: '#FFFFFF',
        border: '1px solid #E2E8F0',
        boxShadow: 'none',
        transition: 'all 0.15s ease',
        '&:hover': {
          borderColor: '#CBD5E1',
          boxShadow: '0 4px 14px rgba(0, 0, 0, 0.04)',
        },
      }}
    >
      <CardContent sx={{ p: compact ? 2 : 2.5, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        {/* Top metadata & bookmark button */}
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 1.2 }}>
          <Typography
            variant="caption"
            sx={{
              fontWeight: 700,
              color: 'primary.main',
              textTransform: 'uppercase',
              letterSpacing: '0.04em',
              fontSize: '0.72rem',
            }}
          >
            {tramite.institucion.sigla || tramite.institucion.nombre}
          </Typography>

          <IconButton
            size="small"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              toggleSave(tramite.slug);
            }}
            title={saved ? 'Quitar de guardados' : 'Guardar trámite'}
            aria-label={saved ? 'Quitar de guardados' : 'Guardar trámite'}
            sx={{
              color: saved ? 'primary.main' : '#94A3B8',
              p: 0.5,
              '&:hover': { color: 'primary.main' },
            }}
          >
            {saved ? <BookmarkIcon fontSize="small" /> : <BookmarkBorderIcon fontSize="small" />}
          </IconButton>
        </Box>

        {/* Title */}
        <Typography
          component={Link}
          href={`/tramite/${tramite.slug}`}
          variant="h4"
          sx={{
            fontSize: compact ? '0.975rem' : '1.075rem',
            fontWeight: 700,
            color: '#0F172A',
            textDecoration: 'none',
            lineHeight: 1.35,
            mb: 1,
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            '&:hover': {
              color: 'primary.main',
            },
          }}
        >
          {tramite.nombre}
        </Typography>

        {/* Description */}
        <Typography
          variant="body2"
          sx={{
            color: '#64748B',
            mb: 2,
            fontSize: '0.84rem',
            lineHeight: 1.5,
            display: '-webkit-box',
            WebkitLineClamp: compact ? 2 : 3,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            flexGrow: 1,
          }}
        >
          {tramite.descripcion}
        </Typography>

        {/* Summary: Cost & Time */}
        <Box sx={{ pt: 1.5, borderTop: '1px solid #F1F5F9', mt: 'auto' }}>
          <Stack direction="row" spacing={2} sx={{ mb: 1.5, flexWrap: 'wrap' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
              <PaymentsOutlinedIcon sx={{ fontSize: 16, color: '#0F172A' }} />
              <Typography variant="caption" sx={{ fontWeight: 700, color: '#0F172A', fontSize: '0.82rem' }}>
                {tramite.costoPrincipal === 0 ? 'Gratuito' : `S/ ${tramite.costoPrincipal.toFixed(2)}`}
              </Typography>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
              <AccessTimeOutlinedIcon sx={{ fontSize: 16, color: '#64748B' }} />
              <Typography variant="caption" sx={{ color: '#475569', fontSize: '0.78rem' }}>
                {tramite.duracionTexto}
              </Typography>
            </Box>
          </Stack>

          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', pt: 0.25 }}>
            <Typography variant="caption" sx={{ color: '#64748B', fontWeight: 500, fontSize: '0.75rem' }}>
              {getModalidadLabel()}
            </Typography>

            <Box
              component={Link}
              href={`/tramite/${tramite.slug}`}
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 0.5,
                color: 'primary.main',
                fontSize: '0.8125rem',
                fontWeight: 600,
                textDecoration: 'none',
                '&:hover': { textDecoration: 'underline' },
              }}
            >
              <span>Ver ficha</span>
              <ArrowForwardIcon sx={{ fontSize: 14 }} />
            </Box>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}
