'use client';

import React, { useState, useEffect, useRef } from 'react';
import {
  Box,
  Container,
  Typography,
  TextField,
  InputAdornment,
  Paper,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Badge,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import DirectionsCarOutlinedIcon from '@mui/icons-material/DirectionsCarOutlined';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import FlightTakeoffOutlinedIcon from '@mui/icons-material/FlightTakeoffOutlined';
import GavelOutlinedIcon from '@mui/icons-material/GavelOutlined';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { useRouter } from 'next/navigation';
import { searchTramites } from '@/data/tramitesService';
import { Tramite } from '@/types/tramite';
import { useSavedTramites } from '@/context/SavedTramitesContext';
import SavedDrawer from './SavedDrawer';
import Link from './Link';

const PLACEHOLDERS = [
  'Cómo saco mi brevete, pagar luz...',
  'Duplicado de DNI electrónico (DNIe)...',
  'Pasaporte ordinario para viaje...',
  'Inscripción al RUC y Clave SOL...',
  'Certificado único laboral gratis...',
];

const QUICK_PILLS = [
  {
    type: 'badge',
    badgeText: 'DNI',
    badgeBg: '#EBF3FE',
    badgeColor: '#1D4ED8',
    label: 'Duplicado DNI',
    slug: 'duplicado-dni',
  },
  {
    type: 'icon',
    icon: DirectionsCarOutlinedIcon,
    iconColor: '#2563EB',
    iconBg: '#EFF6FF',
    label: 'Brevete',
    slug: 'obtencion-brevete-a1',
  },
  {
    type: 'icon',
    icon: LightbulbOutlinedIcon,
    iconColor: '#D97706',
    iconBg: '#FEF3C7',
    label: 'Pagar luz',
    slug: 'pago-luz-servicio',
  },
  {
    type: 'icon',
    icon: DescriptionOutlinedIcon,
    iconColor: '#059669',
    iconBg: '#DCFCE7',
    label: 'RUC',
    slug: 'inscripcion-ruc-persona',
  },
  {
    type: 'icon',
    icon: FlightTakeoffOutlinedIcon,
    iconColor: '#7C3AED',
    iconBg: '#F3E8FF',
    label: 'Pasaporte',
    slug: 'pasaporte-electronico',
  },
  {
    type: 'icon',
    icon: GavelOutlinedIcon,
    iconColor: '#DC2626',
    iconBg: '#FEE2E2',
    label: 'Antecedentes',
    slug: 'antecedentes-penales',
  },
];

export default function SearchHero() {
  const router = useRouter();
  const { count } = useSavedTramites();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [placeholderIndex, setPlaceholderIndex] = useState(0);
  const [suggestions, setSuggestions] = useState<Tramite[]>([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Rotating placeholder
  useEffect(() => {
    const interval = setInterval(() => {
      setPlaceholderIndex((prev) => (prev + 1) % PLACEHOLDERS.length);
    }, 3800);
    return () => clearInterval(interval);
  }, []);

  // Live search suggestions
  useEffect(() => {
    if (query.trim().length >= 2) {
      const results = searchTramites(query).slice(0, 5);
      setSuggestions(results);
      setShowDropdown(true);
    } else {
      setSuggestions([]);
      setShowDropdown(false);
    }
  }, [query]);

  // Click outside to close dropdown
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setShowDropdown(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      setShowDropdown(false);
      router.push(`/buscar?q=${encodeURIComponent(query.trim())}`);
    }
  };

  const handleScrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -140, behavior: 'smooth' });
    }
  };

  const handleScrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 140, behavior: 'smooth' });
    }
  };

  return (
    <>
      <Box
        sx={{
          bgcolor: '#0F172A',
          color: '#FFFFFF',
          pt: { xs: 2.5, sm: 4, md: 5 },
          pb: { xs: 2.5, sm: 3.5, md: 4.5 },
          borderBottom: '1px solid #1E293B',
        }}
      >
        <Container maxWidth="md" sx={{ px: { xs: 2, sm: 3 } }}>
          {/* Top Row: Title + Bookmark Icon */}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'flex-start',
              justifyContent: 'space-between',
              mb: { xs: 2, sm: 2.5 },
            }}
          >
            <Box>
              <Typography
                variant="caption"
                sx={{
                  color: '#94A3B8',
                  fontWeight: 500,
                  fontSize: { xs: '0.82rem', sm: '0.9rem' },
                  display: 'block',
                  mb: 0.25,
                }}
              >
                Encuentra tu trámite
              </Typography>
              <Typography
                variant="h1"
                sx={{
                  color: '#FFFFFF',
                  fontSize: { xs: '1.45rem', sm: '1.85rem', md: '2.25rem' },
                  fontWeight: 800,
                  letterSpacing: '-0.025em',
                  lineHeight: 1.2,
                }}
              >
                Todos los trámites del Perú
              </Typography>
            </Box>

            {/* Saved Bookmark Button */}
            <IconButton
              onClick={() => setDrawerOpen(true)}
              aria-label="Trámites guardados"
              sx={{
                width: 44,
                height: 44,
                borderRadius: '14px',
                border: '1px solid rgba(255, 255, 255, 0.16)',
                bgcolor: 'rgba(255, 255, 255, 0.08)',
                boxShadow: '0 2px 6px rgba(0, 0, 0, 0.15)',
                color: '#FFFFFF',
                flexShrink: 0,
                ml: 1.5,
                '&:hover': {
                  bgcolor: 'rgba(255, 255, 255, 0.15)',
                  borderColor: 'rgba(255, 255, 255, 0.28)',
                },
              }}
            >
              <Badge
                badgeContent={count}
                color="primary"
                sx={{
                  '& .MuiBadge-badge': {
                    fontSize: '0.65rem',
                    height: 16,
                    minWidth: 16,
                    top: -2,
                    right: -2,
                  },
                }}
              >
                <BookmarkBorderIcon sx={{ fontSize: 22 }} />
              </Badge>
            </IconButton>
          </Box>

          {/* Pill Search Input */}
          <Box ref={containerRef} sx={{ position: 'relative', mb: 2 }}>
            <Box component="form" onSubmit={handleSearchSubmit}>
              <TextField
                fullWidth
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onFocus={() => {
                  if (query.trim().length >= 2) setShowDropdown(true);
                }}
                placeholder={PLACEHOLDERS[placeholderIndex]}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon sx={{ color: '#64748B', ml: 0.5, fontSize: 22 }} />
                    </InputAdornment>
                  ),
                  endAdornment: query ? (
                    <InputAdornment position="end">
                      <IconButton
                        size="small"
                        onClick={() => setQuery('')}
                        sx={{ color: '#94A3B8', p: 0.5 }}
                      >
                        <ClearIcon fontSize="small" />
                      </IconButton>
                    </InputAdornment>
                  ) : null,
                  sx: {
                    height: { xs: 48, sm: 52 },
                    fontSize: { xs: '0.88rem', sm: '0.95rem' },
                    bgcolor: '#FFFFFF',
                    borderRadius: '9999px', // Pill shape from Image 1
                    boxShadow: '0 2px 8px rgba(15, 23, 42, 0.04)',
                    border: '1px solid #E2E8F0',
                    '& .MuiOutlinedInput-notchedOutline': {
                      border: 'none',
                    },
                    '&:hover': {
                      borderColor: '#CBD5E1',
                    },
                    '&.Mui-focused': {
                      borderColor: '#2563EB',
                      boxShadow: '0 0 0 3px rgba(37, 99, 235, 0.12)',
                    },
                  },
                }}
              />
            </Box>

            {/* Suggestions Dropdown */}
            {showDropdown && suggestions.length > 0 && (
              <Paper
                elevation={4}
                sx={{
                  position: 'absolute',
                  top: '100%',
                  left: 0,
                  right: 0,
                  mt: 1,
                  borderRadius: 3,
                  bgcolor: '#FFFFFF',
                  color: '#0F172A',
                  zIndex: 1300,
                  overflow: 'hidden',
                  border: '1px solid #E2E8F0',
                  boxShadow: '0 12px 32px rgba(15, 23, 42, 0.12)',
                }}
              >
                <List disablePadding>
                  {suggestions.map((item) => (
                    <ListItem
                      key={item.id}
                      component={Link}
                      href={`/tramite/${item.slug}`}
                      onClick={() => setShowDropdown(false)}
                      sx={{
                        px: 2,
                        py: 1.25,
                        textDecoration: 'none',
                        borderBottom: '1px solid #F1F5F9',
                        '&:hover': { bgcolor: '#F8FAFC' },
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                      }}
                    >
                      <ListItemText
                        primary={
                          <Typography
                            variant="subtitle2"
                            sx={{ fontWeight: 600, color: '#0F172A', fontSize: '0.88rem' }}
                          >
                            {item.nombreCorto || item.nombre}
                          </Typography>
                        }
                        secondary={
                          <Typography variant="caption" sx={{ color: '#64748B' }}>
                            {item.institucion.sigla || item.institucion.nombre} &bull;{' '}
                            {item.costoResumen}
                          </Typography>
                        }
                      />
                      <ArrowForwardIcon sx={{ fontSize: 16, color: '#94A3B8', ml: 1.5 }} />
                    </ListItem>
                  ))}
                </List>
              </Paper>
            )}
          </Box>

          {/* Quick Pill Chips Carousel */}
          <Box
            ref={scrollRef}
            sx={{
              display: 'flex',
              gap: 1.25,
              overflowX: 'auto',
              py: 0.5,
              px: 0.25,
              scrollbarWidth: 'none',
              '&::-webkit-scrollbar': { display: 'none' },
            }}
          >
            {QUICK_PILLS.map((pill) => {
              const IconComp = pill.icon;
              return (
                <Box
                  key={pill.slug}
                  component={Link}
                  href={`/tramite/${pill.slug}`}
                  sx={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 1,
                    py: 0.75,
                    px: 1.5,
                    bgcolor: '#FFFFFF',
                    border: '1px solid #E2E8F0',
                    borderRadius: '9999px',
                    textDecoration: 'none',
                    whiteSpace: 'nowrap',
                    flexShrink: 0,
                    boxShadow: '0 1px 2px rgba(15, 23, 42, 0.02)',
                    transition: 'all 0.15s ease',
                    '&:hover': {
                      borderColor: '#CBD5E1',
                      bgcolor: '#F8FAFC',
                      transform: 'translateY(-1px)',
                    },
                  }}
                >
                  {pill.type === 'badge' ? (
                    <Box
                      sx={{
                        bgcolor: pill.badgeBg,
                        color: pill.badgeColor,
                        fontWeight: 800,
                        fontSize: '0.72rem',
                        px: 0.8,
                        py: 0.2,
                        borderRadius: '6px',
                        letterSpacing: '0.02em',
                      }}
                    >
                      {pill.badgeText}
                    </Box>
                  ) : IconComp ? (
                    <Box
                      sx={{
                        width: 22,
                        height: 22,
                        borderRadius: '50%',
                        bgcolor: pill.iconBg,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <IconComp sx={{ fontSize: 14, color: pill.iconColor }} />
                    </Box>
                  ) : null}

                  <Typography
                    variant="caption"
                    sx={{
                      fontWeight: 600,
                      color: '#1E293B',
                      fontSize: '0.82rem',
                    }}
                  >
                    {pill.label}
                  </Typography>
                </Box>
              );
            })}
          </Box>

          {/* Carousel Track Indicator with Arrows (as in Image 1) */}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 0.5,
              mt: 1.5,
              color: '#94A3B8',
            }}
          >
            <IconButton
              size="small"
              onClick={handleScrollLeft}
              sx={{ p: 0.25, color: '#94A3B8', '&:hover': { color: '#FFFFFF' } }}
              aria-label="Anterior sugerencia"
            >
              <ArrowLeftIcon sx={{ fontSize: 20 }} />
            </IconButton>

            {/* Slider track line */}
            <Box
              sx={{
                width: 130,
                height: 4,
                bgcolor: 'rgba(255, 255, 255, 0.16)',
                borderRadius: '9999px',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <Box
                sx={{
                  position: 'absolute',
                  left: '15%',
                  width: '70%',
                  height: '100%',
                  bgcolor: '#60A5FA',
                  borderRadius: '9999px',
                }}
              />
            </Box>

            <IconButton
              size="small"
              onClick={handleScrollRight}
              sx={{ p: 0.25, color: '#94A3B8', '&:hover': { color: '#FFFFFF' } }}
              aria-label="Siguiente sugerencia"
            >
              <ArrowRightIcon sx={{ fontSize: 20 }} />
            </IconButton>
          </Box>
        </Container>
      </Box>

      {/* Saved Drawer */}
      <SavedDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </>
  );
}
