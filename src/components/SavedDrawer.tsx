'use client';

import React from 'react';
import {
  Drawer,
  Box,
  Typography,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Divider,
  Button,
  Chip,
  Stack,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import BookmarkRemoveOutlinedIcon from '@mui/icons-material/BookmarkRemoveOutlined';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import { useSavedTramites } from '@/context/SavedTramitesContext';
import { TRAMITES } from '@/data/mockData';
import Link from './Link';

interface SavedDrawerProps {
  open: boolean;
  onClose: () => void;
}

export default function SavedDrawer({ open, onClose }: SavedDrawerProps) {
  const { savedSlugs, removeSave } = useSavedTramites();

  const savedTramites = TRAMITES.filter((t) => savedSlugs.includes(t.slug));

  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: {
          width: { xs: '100%', sm: 400 },
          p: 0,
        },
      }}
    >
      <Box sx={{ p: 2.5, display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid #E2E8F0' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
          <BookmarkBorderOutlinedIcon sx={{ color: 'primary.main', fontSize: 24 }} />
          <Typography variant="h3" sx={{ fontSize: '1.2rem', fontWeight: 700 }}>
            Trámites Guardados
          </Typography>
          <Chip label={savedTramites.length} size="small" sx={{ bgcolor: '#F1F5F9', fontWeight: 700, height: 22 }} />
        </Box>
        <IconButton onClick={onClose} size="small" aria-label="Cerrar panel de guardados">
          <CloseIcon fontSize="small" />
        </IconButton>
      </Box>

      <Box sx={{ flex: 1, overflowY: 'auto', p: 2 }}>
        {savedTramites.length === 0 ? (
          <Box sx={{ py: 8, px: 2, textAlign: 'center' }}>
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
              <BookmarkBorderOutlinedIcon sx={{ color: '#94A3B8', fontSize: 32 }} />
            </Box>
            <Typography variant="subtitle2" sx={{ fontWeight: 600, color: '#334155', mb: 1 }}>
              No tienes trámites guardados
            </Typography>
            <Typography variant="body2" sx={{ color: '#64748B', maxWidth: 280, mx: 'auto', mb: 3 }}>
              Haz clic en el botón Guardar en la ficha de cualquier trámite para tenerlo siempre a la mano.
            </Typography>
            <Button
              variant="outlined"
              size="small"
              onClick={onClose}
              component={Link}
              href="/buscar"
              sx={{ borderColor: '#CBD5E1', color: '#334155' }}
            >
              Explorar trámites
            </Button>
          </Box>
        ) : (
          <List disablePadding>
            {savedTramites.map((tramite) => (
              <React.Fragment key={tramite.id}>
                <ListItem
                  alignItems="flex-start"
                  sx={{
                    px: 1.5,
                    py: 1.5,
                    borderRadius: 2,
                    mb: 1,
                    border: '1px solid #F1F5F9',
                    bgcolor: '#FAFAFA',
                    '&:hover': {
                      bgcolor: '#F8FAFC',
                      borderColor: '#E2E8F0',
                    },
                  }}
                  secondaryAction={
                    <IconButton
                      edge="end"
                      size="small"
                      title="Quitar de guardados"
                      onClick={() => removeSave(tramite.slug)}
                      sx={{ color: '#94A3B8', '&:hover': { color: '#B91C1C' } }}
                    >
                      <BookmarkRemoveOutlinedIcon fontSize="small" />
                    </IconButton>
                  }
                >
                  <ListItemText
                    primary={
                      <Box sx={{ pr: 3 }}>
                        <Typography
                          component={Link}
                          href={`/tramite/${tramite.slug}`}
                          onClick={onClose}
                          variant="subtitle2"
                          sx={{
                            color: '#0F172A',
                            textDecoration: 'none',
                            fontWeight: 600,
                            display: 'block',
                            lineHeight: 1.3,
                            mb: 0.5,
                            '&:hover': { color: 'primary.main' },
                          }}
                        >
                          {tramite.nombre}
                        </Typography>
                        <Typography variant="caption" sx={{ color: '#64748B', display: 'block', mb: 1 }}>
                          {tramite.institucion.sigla || tramite.institucion.nombre}
                        </Typography>
                        <Stack direction="row" spacing={1} alignItems="center">
                          <Chip
                            label={tramite.costoPrincipal === 0 ? 'Gratuito' : `S/ ${tramite.costoPrincipal.toFixed(2)}`}
                            size="small"
                            sx={{
                              height: 20,
                              fontSize: '0.72rem',
                              fontWeight: 600,
                              bgcolor: tramite.costoPrincipal === 0 ? '#DCFCE7' : '#EFF6FF',
                              color: tramite.costoPrincipal === 0 ? '#166534' : '#1E40AF',
                            }}
                          />
                          <Typography variant="caption" sx={{ color: '#94A3B8' }}>
                            {tramite.duracionTexto}
                          </Typography>
                        </Stack>
                      </Box>
                    }
                  />
                </ListItem>
                <Divider sx={{ my: 0.5, borderColor: '#F1F5F9' }} />
              </React.Fragment>
            ))}
          </List>
        )}
      </Box>

      {savedTramites.length > 0 && (
        <Box sx={{ p: 2, borderTop: '1px solid #E2E8F0', bgcolor: '#FAFAFA' }}>
          <Button
            component={Link}
            href="/guardados"
            onClick={onClose}
            fullWidth
            variant="contained"
            color="secondary"
            endIcon={<ArrowForwardIcon fontSize="small" />}
            sx={{ fontWeight: 600 }}
          >
            Ver todos los guardados
          </Button>
        </Box>
      )}
    </Drawer>
  );
}
