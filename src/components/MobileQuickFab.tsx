'use client';

import React, { useState } from 'react';
import {
  Box,
  Fab,
  Drawer,
  Typography,
  IconButton,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Divider,
  Chip,
  Stack,
  Button,
} from '@mui/material';
import TuneIcon from '@mui/icons-material/Tune';
import CloseIcon from '@mui/icons-material/Close';
import SearchIcon from '@mui/icons-material/Search';
import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import BoltOutlinedIcon from '@mui/icons-material/BoltOutlined';
import Link from './Link';
import { useRouter } from 'next/navigation';

export default function MobileQuickFab() {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const handleFilterClick = (path: string) => {
    setOpen(false);
    router.push(path);
  };

  return (
    <>
      {/* Floating Action Button (FAB) matching Image 1 */}
      <Box
        sx={{
          position: 'fixed',
          bottom: 24,
          right: 20,
          zIndex: 1200,
          display: { xs: 'flex', md: 'none' },
        }}
      >
        <Fab
          onClick={() => setOpen(true)}
          aria-label="Filtros y navegación rápida"
          sx={{
            bgcolor: '#0F172A',
            color: '#FFFFFF',
            width: 48,
            height: 48,
            boxShadow: '0 6px 20px rgba(15, 23, 42, 0.35)',
            '&:hover': {
              bgcolor: '#1E293B',
            },
          }}
        >
          <TuneIcon sx={{ fontSize: 22 }} />
        </Fab>
      </Box>

      {/* Bottom Sheet Modal for Mobile Navigation & Filters */}
      <Drawer
        anchor="bottom"
        open={open}
        onClose={() => setOpen(false)}
        PaperProps={{
          sx: {
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            p: 3,
            maxHeight: '85vh',
            bgcolor: '#FFFFFF',
          },
        }}
      >
        {/* Header */}
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
          <Box>
            <Typography variant="h6" sx={{ fontWeight: 700, color: '#0F172A', fontSize: '1.1rem' }}>
              Filtros y Accesos Rápidos
            </Typography>
            <Typography variant="caption" sx={{ color: '#64748B' }}>
              Encuentra trámites por tipo o entidad oficial
            </Typography>
          </Box>
          <IconButton onClick={() => setOpen(false)} size="small" sx={{ color: '#64748B' }}>
            <CloseIcon />
          </IconButton>
        </Box>

        <Divider sx={{ mb: 2.5 }} />

        {/* Quick Filter Badges */}
        <Typography variant="subtitle2" sx={{ fontWeight: 700, color: '#0F172A', mb: 1.5, fontSize: '0.85rem' }}>
          Filtros más usados
        </Typography>
        <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap" sx={{ mb: 3 }}>
          <Chip
            label="Trámites Gratuitos"
            clickable
            icon={<CheckCircleOutlineIcon sx={{ fontSize: 16 }} />}
            onClick={() => handleFilterClick('/buscar?soloGratuitos=true')}
            sx={{ bgcolor: '#EFF6FF', color: '#1D4ED8', fontWeight: 600, fontSize: '0.8rem' }}
          />
          <Chip
            label="100% Digitales"
            clickable
            icon={<BoltOutlinedIcon sx={{ fontSize: 16 }} />}
            onClick={() => handleFilterClick('/buscar?modalidad=online')}
            sx={{ bgcolor: '#F0FDF4', color: '#166534', fontWeight: 600, fontSize: '0.8rem' }}
          />
          <Chip
            label="DNI y Actas (RENIEC)"
            clickable
            onClick={() => handleFilterClick('/instituciones/reniec')}
            sx={{ bgcolor: '#F8FAFC', border: '1px solid #E2E8F0', fontWeight: 600, fontSize: '0.8rem' }}
          />
          <Chip
            label="Brevetes (MTC)"
            clickable
            onClick={() => handleFilterClick('/instituciones/mtc')}
            sx={{ bgcolor: '#F8FAFC', border: '1px solid #E2E8F0', fontWeight: 600, fontSize: '0.8rem' }}
          />
          <Chip
            label="RUC y Clave SOL"
            clickable
            onClick={() => handleFilterClick('/instituciones/sunat')}
            sx={{ bgcolor: '#F8FAFC', border: '1px solid #E2E8F0', fontWeight: 600, fontSize: '0.8rem' }}
          />
        </Stack>

        {/* Navigation Shortcuts */}
        <Typography variant="subtitle2" sx={{ fontWeight: 700, color: '#0F172A', mb: 1, fontSize: '0.85rem' }}>
          Secciones
        </Typography>
        <List disablePadding sx={{ mb: 2 }}>
          <ListItem
            component={Link}
            href="/buscar"
            onClick={() => setOpen(false)}
            sx={{
              borderRadius: 2,
              px: 2,
              py: 1,
              mb: 0.5,
              textDecoration: 'none',
              color: 'inherit',
              '&:hover': { bgcolor: '#F8FAFC' },
            }}
          >
            <ListItemIcon sx={{ minWidth: 36, color: 'primary.main' }}>
              <SearchIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText
              primary="Búsqueda Avanzada de Trámites"
              primaryTypographyProps={{ fontSize: '0.88rem', fontWeight: 600 }}
            />
          </ListItem>

          <ListItem
            component={Link}
            href="/instituciones"
            onClick={() => setOpen(false)}
            sx={{
              borderRadius: 2,
              px: 2,
              py: 1,
              mb: 0.5,
              textDecoration: 'none',
              color: 'inherit',
              '&:hover': { bgcolor: '#F8FAFC' },
            }}
          >
            <ListItemIcon sx={{ minWidth: 36, color: 'primary.main' }}>
              <AccountBalanceOutlinedIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText
              primary="Todas las Instituciones Públicas"
              primaryTypographyProps={{ fontSize: '0.88rem', fontWeight: 600 }}
            />
          </ListItem>
        </List>

        <Button
          fullWidth
          variant="contained"
          onClick={() => handleFilterClick('/buscar')}
          sx={{ py: 1.25, fontWeight: 700, borderRadius: 2 }}
        >
          Explorar todo el catálogo
        </Button>
      </Drawer>
    </>
  );
}
