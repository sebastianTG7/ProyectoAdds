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
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import LocalHospitalOutlinedIcon from '@mui/icons-material/LocalHospitalOutlined';
import FamilyRestroomOutlinedIcon from '@mui/icons-material/FamilyRestroomOutlined';
import AssignmentTurnedInOutlinedIcon from '@mui/icons-material/AssignmentTurnedInOutlined';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import WaterDropOutlinedIcon from '@mui/icons-material/WaterDropOutlined';
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined';
import PauseOutlinedIcon from '@mui/icons-material/PauseOutlined';
import PlayArrowOutlinedIcon from '@mui/icons-material/PlayArrowOutlined';
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
    label: 'Brevete A-1',
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
    type: 'badge',
    badgeText: 'RUC',
    badgeBg: '#DCFCE7',
    badgeColor: '#166534',
    label: 'RUC y Clave SOL',
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
    label: 'Antecedentes Penales',
    slug: 'antecedentes-penales',
  },
  {
    type: 'icon',
    icon: WorkOutlineOutlinedIcon,
    iconColor: '#4F46E5',
    iconBg: '#EEF2FF',
    label: 'Certificado Laboral',
    slug: 'certificado-unico-laboral',
  },
  {
    type: 'badge',
    badgeText: 'SIS',
    badgeBg: '#ECFDF5',
    badgeColor: '#059669',
    label: 'Afiliación SIS',
    slug: 'afiliacion-sis-gratuito',
  },
  {
    type: 'icon',
    icon: FamilyRestroomOutlinedIcon,
    iconColor: '#0284C7',
    iconBg: '#E0F2FE',
    label: 'Partida Nacimiento',
    slug: 'copia-partida-nacimiento',
  },
  {
    type: 'badge',
    badgeText: 'SUNARP',
    badgeBg: '#FEF3C7',
    badgeColor: '#B45309',
    label: 'Alerta Registral',
    slug: 'alerta-registral-sunarp',
  },
  {
    type: 'icon',
    icon: AssignmentTurnedInOutlinedIcon,
    iconColor: '#2563EB',
    iconBg: '#EFF6FF',
    label: 'Récord Conductor',
    slug: 'record-conductor-puntos',
  },
  {
    type: 'icon',
    icon: StorefrontOutlinedIcon,
    iconColor: '#059669',
    iconBg: '#DCFCE7',
    label: 'Licencia Municipal',
    slug: 'licencia-funcionamiento',
  },
  {
    type: 'badge',
    badgeText: 'DNIe',
    badgeBg: '#EDE9FE',
    badgeColor: '#6D28D9',
    label: 'Renovación DNI',
    slug: 'renovacion-dni',
  },
  {
    type: 'icon',
    icon: WaterDropOutlinedIcon,
    iconColor: '#0284C7',
    iconBg: '#E0F2FE',
    label: 'Recibo de Agua',
    slug: 'pago-agua-servicio',
  },
  {
    type: 'icon',
    icon: SecurityOutlinedIcon,
    iconColor: '#475569',
    iconBg: '#F1F5F9',
    label: 'Antecedentes INPE',
    slug: 'certificado-antecedentes-judiciales-inpe',
  },
  {
    type: 'icon',
    icon: DescriptionOutlinedIcon,
    iconColor: '#059669',
    iconBg: '#DCFCE7',
    label: 'Recibos por Honorarios',
    slug: 'emision-recibos-honorarios-electronicos',
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
  const [isPaused, setIsPaused] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [direction, setDirection] = useState<'forward' | 'reverse'>('forward');
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
    setDirection('reverse');
    setIsPaused(false);
  };

  const handleScrollRight = () => {
    setDirection('forward');
    setIsPaused(false);
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

          {/* Quick Pill Chips Animated Marquee Carousel */}
          <Box
            sx={{
              position: 'relative',
              overflow: 'hidden',
              width: '100%',
              py: 0.5,
              maskImage: {
                xs: 'linear-gradient(to right, transparent, black 4%, black 96%, transparent)',
                sm: 'linear-gradient(to right, transparent, black 3%, black 97%, transparent)',
              },
              WebkitMaskImage: {
                xs: 'linear-gradient(to right, transparent, black 4%, black 96%, transparent)',
                sm: 'linear-gradient(to right, transparent, black 3%, black 97%, transparent)',
              },
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onTouchStart={() => setIsHovered(true)}
            onTouchEnd={() => setIsHovered(false)}
          >
            <Box
              sx={{
                display: 'flex',
                gap: 1.5,
                width: 'max-content',
                animation: 'heroMarquee 52s linear infinite',
                animationPlayState: isPaused || isHovered ? 'paused' : 'running',
                animationDirection: direction === 'reverse' ? 'reverse' : 'normal',
                willChange: 'transform',
                '@keyframes heroMarquee': {
                  '0%': { transform: 'translateX(0%)' },
                  '100%': { transform: 'translateX(-50%)' },
                },
                '&:hover': {
                  animationPlayState: 'paused',
                },
              }}
            >
              {[...QUICK_PILLS, ...QUICK_PILLS].map((pill, idx) => {
                const IconComp = pill.icon;
                return (
                  <Box
                    key={`${pill.slug}-${idx}`}
                    component={Link}
                    href={`/tramite/${pill.slug}`}
                    sx={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 1,
                      py: 0.85,
                      px: 1.6,
                      bgcolor: '#FFFFFF',
                      border: '1px solid #E2E8F0',
                      borderRadius: '9999px',
                      textDecoration: 'none',
                      whiteSpace: 'nowrap',
                      flexShrink: 0,
                      boxShadow: '0 2px 4px rgba(15, 23, 42, 0.04)',
                      transition: 'transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease',
                      '&:hover': {
                        borderColor: '#93C5FD',
                        bgcolor: '#FFFFFF',
                        transform: 'translateY(-2px) scale(1.02)',
                        boxShadow: '0 6px 16px rgba(37, 99, 235, 0.18)',
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
          </Box>

          {/* Carousel Track Indicator with Controls */}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 0.75,
              mt: 1.5,
              color: '#94A3B8',
            }}
          >
            <IconButton
              size="small"
              onClick={handleScrollLeft}
              title="Mover hacia la izquierda"
              sx={{
                p: 0.25,
                color: direction === 'reverse' ? '#60A5FA' : '#94A3B8',
                '&:hover': { color: '#FFFFFF', bgcolor: 'rgba(255, 255, 255, 0.08)' },
              }}
              aria-label="Mover hacia la izquierda"
            >
              <ArrowLeftIcon sx={{ fontSize: 22 }} />
            </IconButton>

            {/* Slider track line with dynamic animated glow bar */}
            <Box
              sx={{
                width: { xs: 120, sm: 150 },
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
                  top: 0,
                  height: '100%',
                  width: '60%',
                  borderRadius: '9999px',
                  background: 'linear-gradient(90deg, #3B82F6 0%, #60A5FA 50%, #93C5FD 100%)',
                  boxShadow: '0 0 8px rgba(96, 165, 250, 0.5)',
                  animation:
                    isPaused || isHovered
                      ? 'none'
                      : 'trackProgress 2.8s ease-in-out infinite alternate',
                  left: isPaused || isHovered ? '20%' : '0%',
                  '@keyframes trackProgress': {
                    '0%': { left: '0%' },
                    '100%': { left: '40%' },
                  },
                }}
              />
            </Box>

            <IconButton
              size="small"
              onClick={handleScrollRight}
              title="Mover hacia la derecha"
              sx={{
                p: 0.25,
                color: direction === 'forward' ? '#60A5FA' : '#94A3B8',
                '&:hover': { color: '#FFFFFF', bgcolor: 'rgba(255, 255, 255, 0.08)' },
              }}
              aria-label="Mover hacia la derecha"
            >
              <ArrowRightIcon sx={{ fontSize: 22 }} />
            </IconButton>

            {/* Pause / Play Toggle button */}
            <IconButton
              size="small"
              onClick={() => setIsPaused((prev) => !prev)}
              title={isPaused ? 'Reanudar carrusel' : 'Pausar carrusel'}
              sx={{
                p: 0.35,
                ml: 0.5,
                color: isPaused ? '#F59E0B' : '#94A3B8',
                bgcolor: isPaused ? 'rgba(245, 158, 11, 0.15)' : 'transparent',
                borderRadius: '6px',
                '&:hover': { color: '#FFFFFF', bgcolor: 'rgba(255, 255, 255, 0.12)' },
              }}
              aria-label={isPaused ? 'Reanudar carrusel' : 'Pausar carrusel'}
            >
              {isPaused ? (
                <PlayArrowOutlinedIcon sx={{ fontSize: 16 }} />
              ) : (
                <PauseOutlinedIcon sx={{ fontSize: 16 }} />
              )}
            </IconButton>
          </Box>
        </Container>
      </Box>

      {/* Saved Drawer */}
      <SavedDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </>
  );
}
