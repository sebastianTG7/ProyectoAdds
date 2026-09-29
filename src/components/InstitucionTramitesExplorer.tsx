'use client';

import React, { useState, useMemo } from 'react';
import {
  Box,
  Typography,
  Grid2,
  TextField,
  InputAdornment,
  IconButton,
  Chip,
  Stack,
  Button,
  Pagination,
  Card,
  CardContent,
  FormControl,
  Select,
  MenuItem,
  InputLabel,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';
import FilterListIcon from '@mui/icons-material/FilterList';
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';
import { Tramite } from '@/types/tramite';
import TramiteCard from './TramiteCard';

interface InstitucionTramitesExplorerProps {
  tramites: Tramite[];
  institucionNombre: string;
}

const ITEMS_PER_PAGE = 18;

export default function InstitucionTramitesExplorer({
  tramites,
  institucionNombre,
}: InstitucionTramitesExplorerProps) {
  const [search, setSearch] = useState('');
  const [selectedCat, setSelectedCat] = useState<string>('all');
  const [selectedModality, setSelectedModality] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'frecuencia' | 'az' | 'costo'>('frecuencia');
  const [page, setPage] = useState(1);

  // Extract distinct categories present in this institution's trámites
  const categoryStats = useMemo(() => {
    const map = new Map<string, { id: string; nombre: string; count: number }>();
    for (const t of tramites) {
      const existing = map.get(t.categoriaId);
      if (existing) {
        existing.count += 1;
      } else {
        map.set(t.categoriaId, {
          id: t.categoriaId,
          nombre: t.categoria.nombre,
          count: 1,
        });
      }
    }
    return Array.from(map.values()).sort((a, b) => b.count - a.count);
  }, [tramites]);

  // Filter & Sort
  const filteredTramites = useMemo(() => {
    const q = search.trim().toLowerCase();

    const filtered = tramites.filter((t) => {
      // Search text match
      if (q) {
        const matchTitle = t.nombre.toLowerCase().includes(q);
        const matchDesc = t.descripcion.toLowerCase().includes(q);
        const matchTags = t.tags?.some((tag) => tag.toLowerCase().includes(q));
        if (!matchTitle && !matchDesc && !matchTags) return false;
      }

      // Category match
      if (selectedCat !== 'all' && t.categoriaId !== selectedCat) {
        return false;
      }

      // Modality match
      if (selectedModality !== 'all') {
        if (selectedModality === 'online' && t.modalidadPrincipal !== 'online') return false;
        if (selectedModality === 'presencial' && t.modalidadPrincipal !== 'presencial') return false;
        if (selectedModality === 'mixta' && t.modalidadPrincipal !== 'mixta') return false;
      }

      return true;
    });

    // Sort
    if (sortBy === 'az') {
      filtered.sort((a, b) => a.nombre.localeCompare(b.nombre));
    } else if (sortBy === 'costo') {
      filtered.sort((a, b) => (a.costoPrincipal ?? 0) - (b.costoPrincipal ?? 0));
    } else {
      // Default: frecuenciaBusqueda
      filtered.sort((a, b) => b.frecuenciaBusqueda - a.frecuenciaBusqueda);
    }

    return filtered;
  }, [tramites, search, selectedCat, selectedModality, sortBy]);

  // Reset page when filters change
  const handleSearchChange = (val: string) => {
    setSearch(val);
    setPage(1);
  };

  const handleCategorySelect = (catId: string) => {
    setSelectedCat(catId);
    setPage(1);
  };

  const handleModalitySelect = (mod: string) => {
    setSelectedModality(mod);
    setPage(1);
  };

  const handleResetFilters = () => {
    setSearch('');
    setSelectedCat('all');
    setSelectedModality('all');
    setSortBy('frecuencia');
    setPage(1);
  };

  // Pagination calculation
  const totalPages = Math.ceil(filteredTramites.length / ITEMS_PER_PAGE);
  const paginatedTramites = useMemo(() => {
    const start = (page - 1) * ITEMS_PER_PAGE;
    return filteredTramites.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredTramites, page]);

  return (
    <Box sx={{ mt: 3 }}>
      {/* Controls Card */}
      <Card sx={{ bgcolor: '#FFFFFF', border: '1px solid #E2E8F0', mb: 3.5, p: { xs: 2, sm: 2.5 } }}>
        <CardContent sx={{ p: 0, '&:last-child': { pb: 0 } }}>
          {/* Top row: Search input + Sorting selector */}
          <Grid2 container spacing={2} alignItems="center">
            <Grid2 size={{ xs: 12, md: 8 }}>
              <TextField
                fullWidth
                size="small"
                value={search}
                onChange={(e) => handleSearchChange(e.target.value)}
                placeholder={`Buscar dentro de los trámites de ${institucionNombre}...`}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon fontSize="small" sx={{ color: 'primary.main' }} />
                    </InputAdornment>
                  ),
                  endAdornment: search ? (
                    <InputAdornment position="end">
                      <IconButton size="small" onClick={() => handleSearchChange('')}>
                        <ClearIcon fontSize="small" />
                      </IconButton>
                    </InputAdornment>
                  ) : null,
                }}
              />
            </Grid2>

            <Grid2 size={{ xs: 12, md: 4 }}>
              <FormControl fullWidth size="small">
                <InputLabel id="sort-select-label">Ordenar por</InputLabel>
                <Select
                  labelId="sort-select-label"
                  value={sortBy}
                  label="Ordenar por"
                  onChange={(e) => setSortBy(e.target.value as any)}
                >
                  <MenuItem value="frecuencia">Más demandados primero</MenuItem>
                  <MenuItem value="az">Alfabético (A - Z)</MenuItem>
                  <MenuItem value="costo">Menor costo / Gratuitos</MenuItem>
                </Select>
              </FormControl>
            </Grid2>
          </Grid2>

          {/* Category Chips row (if more than 1 category) */}
          {categoryStats.length > 1 && (
            <Box sx={{ mt: 2.5, pt: 2, borderTop: '1px solid #F1F5F9' }}>
              <Typography variant="caption" sx={{ color: '#64748B', fontWeight: 700, mb: 1, display: 'block', textTransform: 'uppercase', letterSpacing: 0.5 }}>
                Categorías temáticas
              </Typography>
              <Stack direction="row" spacing={1} sx={{ flexWrap: 'wrap', gap: 1 }}>
                <Chip
                  label={`Todas (${tramites.length})`}
                  clickable
                  size="small"
                  onClick={() => handleCategorySelect('all')}
                  sx={{
                    fontWeight: 600,
                    bgcolor: selectedCat === 'all' ? '#0F172A' : '#F1F5F9',
                    color: selectedCat === 'all' ? '#FFFFFF' : '#475569',
                    '&:hover': {
                      bgcolor: selectedCat === 'all' ? '#0F172A' : '#E2E8F0',
                    },
                  }}
                />
                {categoryStats.map((c) => (
                  <Chip
                    key={c.id}
                    label={`${c.nombre} (${c.count})`}
                    clickable
                    size="small"
                    onClick={() => handleCategorySelect(c.id)}
                    sx={{
                      fontWeight: 600,
                      bgcolor: selectedCat === c.id ? '#0F172A' : '#F1F5F9',
                      color: selectedCat === c.id ? '#FFFFFF' : '#475569',
                      '&:hover': {
                        bgcolor: selectedCat === c.id ? '#0F172A' : '#E2E8F0',
                      },
                    }}
                  />
                ))}
              </Stack>
            </Box>
          )}

          {/* Modality Chips row */}
          <Box sx={{ mt: 2, pt: 2, borderTop: '1px solid #F1F5F9', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 1.5 }}>
            <Stack direction="row" spacing={1} alignItems="center" flexWrap="wrap">
              <Typography variant="caption" sx={{ color: '#64748B', fontWeight: 600, mr: 0.5 }}>
                Modalidad:
              </Typography>
              {[
                { value: 'all', label: 'Todas' },
                { value: 'online', label: '100% Online' },
                { value: 'presencial', label: 'Presencial' },
                { value: 'mixta', label: 'Mixta' },
              ].map((m) => (
                <Chip
                  key={m.value}
                  label={m.label}
                  clickable
                  size="small"
                  onClick={() => handleModalitySelect(m.value)}
                  sx={{
                    fontWeight: 600,
                    fontSize: '0.75rem',
                    bgcolor: selectedModality === m.value ? '#1E293B' : '#F1F5F9',
                    color: selectedModality === m.value ? '#FFFFFF' : '#475569',
                    '&:hover': {
                      bgcolor: selectedModality === m.value ? '#1E293B' : '#E2E8F0',
                    },
                  }}
                />
              ))}
            </Stack>

            {(search || selectedCat !== 'all' || selectedModality !== 'all' || sortBy !== 'frecuencia') && (
              <Button
                size="small"
                onClick={handleResetFilters}
                sx={{ color: '#64748B', fontSize: '0.8rem', textTransform: 'none', fontWeight: 600 }}
              >
                Limpiar filtros
              </Button>
            )}
          </Box>
        </CardContent>
      </Card>

      {/* Results Header info */}
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2.5, flexWrap: 'wrap', gap: 1 }}>
        <Typography variant="subtitle1" sx={{ fontWeight: 700, color: '#0F172A' }}>
          {filteredTramites.length === 1 ? '1 trámite encontrado' : `${filteredTramites.length} trámites encontrados`}
        </Typography>

        {totalPages > 1 && (
          <Typography variant="caption" sx={{ color: '#64748B', fontWeight: 500 }}>
            Página {page} de {totalPages} ({ITEMS_PER_PAGE} por página)
          </Typography>
        )}
      </Box>

      {/* Grid or Empty State */}
      {filteredTramites.length === 0 ? (
        <Card sx={{ bgcolor: '#FFFFFF', border: '1px solid #E2E8F0', textAlign: 'center', py: 6, px: 3, borderRadius: 2 }}>
          <SentimentDissatisfiedIcon sx={{ fontSize: 44, color: '#94A3B8', mb: 1.5 }} />
          <Typography variant="h3" sx={{ fontSize: '1.2rem', fontWeight: 700, mb: 1, color: '#1E293B' }}>
            No se encontraron trámites
          </Typography>
          <Typography variant="body2" sx={{ color: '#64748B', maxWidth: 460, mx: 'auto', mb: 2.5 }}>
            No hay trámites en {institucionNombre} que coincidan con &ldquo;{search}&rdquo; o los filtros seleccionados.
          </Typography>
          <Button variant="outlined" size="small" onClick={handleResetFilters} sx={{ fontWeight: 600, color: 'primary.main' }}>
            Restablecer filtros de búsqueda
          </Button>
        </Card>
      ) : (
        <>
          <Grid2 container spacing={3}>
            {paginatedTramites.map((tramite) => (
              <Grid2 key={tramite.id} size={{ xs: 12, sm: 6, md: 4 }}>
                <TramiteCard tramite={tramite} />
              </Grid2>
            ))}
          </Grid2>

          {/* Pagination */}
          {totalPages > 1 && (
            <Box sx={{ mt: 5, display: 'flex', justifyContent: 'center' }}>
              <Pagination
                count={totalPages}
                page={page}
                onChange={(_, value) => {
                  setPage(value);
                  window.scrollTo({ top: 350, behavior: 'smooth' });
                }}
                color="primary"
                shape="rounded"
                size="medium"
              />
            </Box>
          )}
        </>
      )}
    </Box>
  );
}
