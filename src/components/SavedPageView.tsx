'use client';

import React from 'react';
import {
  Container,
  Box,
  Typography,
  Grid2,
  Button,
  Chip,
  Paper,
} from '@mui/material';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { useSavedTramites } from '@/context/SavedTramitesContext';
import { TRAMITES } from '@/data/mockData';
import TramiteCard from './TramiteCard';
import Link from './Link';

export default function SavedPageView() {
  const { savedSlugs, count } = useSavedTramites();

  const savedTramites = TRAMITES.filter((t) => savedSlugs.includes(t.slug));

  return (
    <Box sx={{ bgcolor: '#F8FAFC', minHeight: '80vh', py: 5 }}>
      <Container maxWidth="lg">
        {/* Navigation & Header */}
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

          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 2 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
              <BookmarkBorderIcon sx={{ color: 'primary.main', fontSize: 32 }} />
              <Typography variant="h1" sx={{ fontSize: { xs: '1.75rem', md: '2.2rem' }, fontWeight: 800 }}>
                Trámites Guardados
              </Typography>
              <Chip
                label={`${count} guardados`}
                size="small"
                sx={{ fontWeight: 700, bgcolor: '#F1F5F9', color: '#334155' }}
              />
            </Box>

            <Button
              component={Link}
              href="/buscar"
              variant="outlined"
              size="small"
              sx={{ borderColor: '#CBD5E1', color: '#334155', fontWeight: 600 }}
            >
              Explorar más trámites
            </Button>
          </Box>

          <Typography variant="body1" sx={{ color: '#64748B', mt: 1 }}>
            Acceso directo a las fichas que has marcado como prioritarias en tu navegador actual.
          </Typography>
        </Box>

        {/* Saved List */}
        {savedTramites.length === 0 ? (
          <Paper
            elevation={0}
            sx={{
              py: 8,
              px: 3,
              textAlign: 'center',
              bgcolor: '#FFFFFF',
              borderRadius: 3,
              border: '1px solid #E2E8F0',
            }}
          >
            <Box
              sx={{
                width: 64,
                height: 64,
                borderRadius: '50%',
                bgcolor: '#F1F5F9',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                mx: 'auto',
                mb: 2,
              }}
            >
              <BookmarkBorderIcon sx={{ color: '#94A3B8', fontSize: 32 }} />
            </Box>
            <Typography variant="h3" sx={{ fontSize: '1.3rem', fontWeight: 700, mb: 1 }}>
              Aún no tienes trámites guardados
            </Typography>
            <Typography variant="body2" sx={{ color: '#64748B', maxWidth: 450, mx: 'auto', mb: 3 }}>
              Navega por nuestro catálogo y haz clic en &quot;Guardar trámite&quot; en cualquier ficha para tenerla disponible aquí sin necesidad de registrarte.
            </Typography>
            <Button
              component={Link}
              href="/buscar"
              variant="contained"
              sx={{ bgcolor: 'primary.main', fontWeight: 700 }}
            >
              Buscar trámites ahora
            </Button>
          </Paper>
        ) : (
          <Grid2 container spacing={3}>
            {savedTramites.map((tramite) => (
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
