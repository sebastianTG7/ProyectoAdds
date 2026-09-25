'use client';

import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  IconButton,
  Badge,
  Container,
  Stack,
} from '@mui/material';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import SearchIcon from '@mui/icons-material/Search';
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';
import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined';
import Link from './Link';
import { usePathname } from 'next/navigation';
import { useSavedTramites } from '@/context/SavedTramitesContext';
import SavedDrawer from './SavedDrawer';

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === '/';
  const { count } = useSavedTramites();
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          display: isHome ? { xs: 'none', md: 'block' } : 'block',
        }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ minHeight: { xs: 58, md: 66 }, justifyContent: 'space-between' }}>
            {/* Logo / Brand */}
            <Box
              component={Link}
              href="/"
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1.25,
                textDecoration: 'none',
                color: '#FFFFFF',
              }}
            >
              <Box
                sx={{
                  width: 34,
                  height: 34,
                  borderRadius: 1.5,
                  bgcolor: 'primary.main',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 800,
                  fontSize: '0.95rem',
                  letterSpacing: '0.05em',
                  color: '#FFFFFF',
                  border: '1px solid rgba(255,255,255,0.2)',
                }}
              >
                CT
              </Box>
              <Box>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 700,
                    fontSize: { xs: '1.05rem', md: '1.2rem' },
                    lineHeight: 1.1,
                    letterSpacing: '-0.02em',
                    color: '#FFFFFF',
                  }}
                >
                  ComoTramito
                </Typography>
                <Typography
                  variant="caption"
                  sx={{
                    color: '#94A3B8',
                    fontSize: '0.7rem',
                    letterSpacing: '0.04em',
                    textTransform: 'uppercase',
                    display: { xs: 'none', sm: 'block' },
                  }}
                >
                  Directorio Oficial y Guía Rápida
                </Typography>
              </Box>
            </Box>

            {/* Navigation links */}
            <Stack direction="row" spacing={{ xs: 0.5, sm: 1.5 }} alignItems="center">
              <Button
                component={Link}
                href="/buscar"
                startIcon={<SearchIcon fontSize="small" />}
                sx={{
                  color: '#CBD5E1',
                  fontSize: '0.875rem',
                  fontWeight: 500,
                  px: { xs: 1, sm: 1.5 },
                  '&:hover': { color: '#FFFFFF', bgcolor: 'rgba(255,255,255,0.06)' },
                }}
              >
                <Box component="span" sx={{ display: { xs: 'none', sm: 'inline' } }}>Buscar</Box>
              </Button>

              <Button
                component={Link}
                href="/instituciones"
                startIcon={<AccountBalanceOutlinedIcon fontSize="small" />}
                sx={{
                  color: '#CBD5E1',
                  fontSize: '0.875rem',
                  fontWeight: 500,
                  px: { xs: 1, sm: 1.5 },
                  '&:hover': { color: '#FFFFFF', bgcolor: 'rgba(255,255,255,0.06)' },
                  display: { xs: 'none', md: 'inline-flex' },
                }}
              >
                Instituciones
              </Button>

              <Button
                component={Link}
                href="/guias"
                startIcon={<MenuBookOutlinedIcon fontSize="small" />}
                sx={{
                  color: '#CBD5E1',
                  fontSize: '0.875rem',
                  fontWeight: 500,
                  px: { xs: 1, sm: 1.5 },
                  '&:hover': { color: '#FFFFFF', bgcolor: 'rgba(255,255,255,0.06)' },
                  display: { xs: 'none', sm: 'inline-flex' },
                }}
              >
                Guías
              </Button>

              {/* Guardados button with badge */}
              <Button
                onClick={() => setDrawerOpen(true)}
                variant="outlined"
                size="small"
                startIcon={
                  <Badge badgeContent={count} color="primary" sx={{ '& .MuiBadge-badge': { fontSize: '0.7rem', height: 18, minWidth: 18 } }}>
                    <BookmarkBorderIcon fontSize="small" />
                  </Badge>
                }
                sx={{
                  borderColor: 'rgba(255,255,255,0.18)',
                  color: '#F8FAFC',
                  fontSize: '0.8125rem',
                  fontWeight: 600,
                  bgcolor: 'rgba(255,255,255,0.04)',
                  '&:hover': {
                    bgcolor: 'rgba(255,255,255,0.1)',
                    borderColor: 'rgba(255,255,255,0.35)',
                  },
                }}
              >
                <Box component="span" sx={{ display: { xs: 'none', sm: 'inline' } }}>Guardados</Box>
                {count > 0 && (
                  <Box component="span" sx={{ display: { xs: 'inline', sm: 'none' }, ml: 0.5 }}>
                    ({count})
                  </Box>
                )}
              </Button>
            </Stack>
          </Toolbar>
        </Container>
      </AppBar>

      <SavedDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </>
  );
}
