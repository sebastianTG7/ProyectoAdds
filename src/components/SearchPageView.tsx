'use client';

import React, { useState, useEffect } from 'react';
import {
  Container,
  Box,
  Typography,
  Grid2,
  TextField,
  InputAdornment,
  MenuItem,
  FormControl,
  Select,
  InputLabel,
  FormControlLabel,
  Switch,
  Chip,
  Button,
  IconButton,
  Stack,
  Card,
  CardContent,
  Pagination,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import { useSearchParams, useRouter } from 'next/navigation';
import { searchTramites, getAllCategorias, getAllInstituciones } from '@/data/tramitesService';
import { Tramite, Categoria, Institucion } from '@/types/tramite';
import TramiteCard from './TramiteCard';

interface SearchPageViewProps {
  initialCategorias: Categoria[];
  initialInstituciones: (Institucion & { tramiteCount: number })[];
}

export default function SearchPageView({ initialCategorias, initialInstituciones }: SearchPageViewProps) {
  const searchParams = useSearchParams();
  const router = useRouter();

  const queryParam = searchParams.get('q') || '';
  const catParam = searchParams.get('cat') || '';
  const instParam = searchParams.get('inst') || '';

  const [query, setQuery] = useState(queryParam);
  const [selectedCat, setSelectedCat] = useState(catParam);
  const [selectedInst, setSelectedInst] = useState(instParam);
  const [selectedModality, setSelectedModality] = useState<string>('all');
  const [onlyFree, setOnlyFree] = useState<boolean>(false);
  const [results, setResults] = useState<Tramite[]>([]);
  const [sortBy, setSortBy] = useState<'frecuencia' | 'az' | 'costo'>('frecuencia');
  const [page, setPage] = useState(1);
  const ITEMS_PER_PAGE = 24;

  // Update search state when query params change
  useEffect(() => {
    setQuery(queryParam);
    if (catParam) setSelectedCat(catParam);
    if (instParam) setSelectedInst(instParam);
    setPage(1);
  }, [queryParam, catParam, instParam]);

  // Execute search filter
  useEffect(() => {
    const res = searchTramites(query, {
      categoriaId: selectedCat || undefined,
      institucionId: selectedInst || undefined,
      modalidad: selectedModality === 'all' ? undefined : selectedModality,
      soloGratuitos: onlyFree,
    });

    const sorted = [...res];
    if (sortBy === 'az') {
      sorted.sort((a, b) => a.nombre.localeCompare(b.nombre));
    } else if (sortBy === 'costo') {
      sorted.sort((a, b) => (a.costoPrincipal ?? 0) - (b.costoPrincipal ?? 0));
    } else {
      sorted.sort((a, b) => b.frecuenciaBusqueda - a.frecuenciaBusqueda);
    }

    setResults(sorted);
    setPage(1);
  }, [query, selectedCat, selectedInst, selectedModality, onlyFree, sortBy]);

  const handleResetFilters = () => {
    setQuery('');
    setSelectedCat('');
    setSelectedInst('');
    setSelectedModality('all');
    setOnlyFree(false);
    setSortBy('frecuencia');
    setPage(1);
    router.push('/buscar');
  };

  const totalPages = Math.ceil(results.length / ITEMS_PER_PAGE);
  const paginatedResults = results.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE);

  return (
    <Box sx={{ bgcolor: '#F8FAFC', minHeight: '80vh', py: 5 }}>
      <Container maxWidth="lg">
        {/* Header */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="h1" sx={{ fontSize: { xs: '1.75rem', md: '2.2rem' }, fontWeight: 800, mb: 1 }}>
            Buscador y Directorio de Trámites
          </Typography>
          <Typography variant="body1" sx={{ color: '#64748B' }}>
            Filtra por institución, costo, categoría y modalidad en todo el catálogo oficial.
          </Typography>
        </Box>

        {/* Search & Filter Controls */}
        <Card sx={{ mb: 4, bgcolor: '#FFFFFF', border: '1px solid #E2E8F0', p: 1 }}>
          <CardContent sx={{ p: { xs: 2, sm: 2.5 } }}>
            <Grid2 container spacing={2} alignItems="center">
              {/* Query Text input */}
              <Grid2 size={{ xs: 12, md: 5 }}>
                <TextField
                  fullWidth
                  size="small"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Buscar por nombre, palabra clave o entidad..."
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <SearchIcon fontSize="small" sx={{ color: 'primary.main' }} />
                      </InputAdornment>
                    ),
                    endAdornment: query ? (
                      <InputAdornment position="end">
                        <IconButton size="small" onClick={() => setQuery('')}>
                          <ClearIcon fontSize="small" />
                        </IconButton>
                      </InputAdornment>
                    ) : null,
                  }}
                />
              </Grid2>

              {/* Category Filter */}
              <Grid2 size={{ xs: 12, sm: 6, md: 3 }}>
                <FormControl fullWidth size="small">
                  <InputLabel id="cat-label">Categoría</InputLabel>
                  <Select
                    labelId="cat-label"
                    value={selectedCat}
                    label="Categoría"
                    onChange={(e) => setSelectedCat(e.target.value)}
                  >
                    <MenuItem value="">Todas las categorías</MenuItem>
                    {initialCategorias.map((c) => (
                      <MenuItem key={c.id} value={c.id}>
                        {c.nombre}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid2>

              {/* Institution Filter */}
              <Grid2 size={{ xs: 12, sm: 6, md: 2.5 }}>
                <FormControl fullWidth size="small">
                  <InputLabel id="inst-label">Institución</InputLabel>
                  <Select
                    labelId="inst-label"
                    value={selectedInst}
                    label="Institución"
                    onChange={(e) => setSelectedInst(e.target.value)}
                  >
                    <MenuItem value="">Todas las entidades</MenuItem>
                    {initialInstituciones.map((i) => (
                      <MenuItem key={i.id} value={i.id}>
                        {i.sigla || i.nombre}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid2>

              {/* Reset button */}
              <Grid2 size={{ xs: 12, sm: 6, md: 1.5 }}>
                <Button
                  fullWidth
                  size="small"
                  variant="outlined"
                  onClick={handleResetFilters}
                  startIcon={<RestartAltIcon fontSize="small" />}
                  sx={{ height: 40, borderColor: '#CBD5E1', color: '#475569' }}
                >
                  Limpiar
                </Button>
              </Grid2>
            </Grid2>

            {/* Sub-filters: Modality & Free Only */}
            <Box sx={{ pt: 2, mt: 2, borderTop: '1px solid #F1F5F9', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 1.5 }}>
              <Stack direction="row" spacing={1} alignItems="center" flexWrap="wrap" useFlexGap>
                <Typography variant="caption" sx={{ color: '#64748B', fontWeight: 600, mr: 0.5 }}>
                  Modalidad:
                </Typography>
                {[
                  { value: 'all', label: 'Todas' },
                  { value: 'online', label: '100% Online' },
                  { value: 'presencial', label: 'Presencial' },
                  { value: 'mixta', label: 'Mixta' },
                ].map((mod) => (
                  <Chip
                    key={mod.value}
                    label={mod.label}
                    clickable
                    size="small"
                    onClick={() => setSelectedModality(mod.value)}
                    sx={{
                      fontWeight: 600,
                      fontSize: '0.75rem',
                      bgcolor: selectedModality === mod.value ? '#0F172A' : '#F1F5F9',
                      color: selectedModality === mod.value ? '#FFFFFF' : '#475569',
                      '&:hover': {
                        bgcolor: selectedModality === mod.value ? '#0F172A' : '#E2E8F0',
                      },
                    }}
                  />
                ))}
              </Stack>

              <FormControlLabel
                control={
                  <Switch
                    checked={onlyFree}
                    onChange={(e) => setOnlyFree(e.target.checked)}
                    color="primary"
                    size="small"
                  />
                }
                label={
                  <Typography variant="body2" sx={{ fontWeight: 600, color: '#0F172A', fontSize: '0.85rem' }}>
                    Solo trámites gratuitos (S/ 0.00)
                  </Typography>
                }
              />
            </Box>
          </CardContent>
        </Card>

        {/* Results Header with Sorting */}
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 3, flexWrap: 'wrap', gap: 2 }}>
          <Box>
            <Typography variant="subtitle1" sx={{ fontWeight: 700, color: '#0F172A' }}>
              {results.length} {results.length === 1 ? 'trámite encontrado' : 'trámites encontrados'}
            </Typography>
            {totalPages > 1 && (
              <Typography variant="caption" sx={{ color: '#64748B', fontWeight: 500 }}>
                Mostrando página {page} de {totalPages} ({ITEMS_PER_PAGE} por página)
              </Typography>
            )}
          </Box>

          <FormControl size="small" sx={{ minWidth: 200 }}>
            <InputLabel id="search-sort-label">Ordenar por</InputLabel>
            <Select
              labelId="search-sort-label"
              value={sortBy}
              label="Ordenar por"
              onChange={(e) => setSortBy(e.target.value as any)}
            >
              <MenuItem value="frecuencia">Más demandados</MenuItem>
              <MenuItem value="az">Alfabético (A - Z)</MenuItem>
              <MenuItem value="costo">Menor costo</MenuItem>
            </Select>
          </FormControl>
        </Box>

        {/* Results Grid */}
        {results.length === 0 ? (
          <Box sx={{ py: 8, textAlign: 'center', bgcolor: '#FFFFFF', borderRadius: 3, border: '1px solid #E2E8F0', p: 4 }}>
            <FilterAltOutlinedIcon sx={{ fontSize: 48, color: '#94A3B8', mb: 1.5 }} />
            <Typography variant="h3" sx={{ fontSize: '1.25rem', fontWeight: 700, mb: 1 }}>
              No se encontraron trámites con esos criterios
            </Typography>
            <Typography variant="body2" sx={{ color: '#64748B', maxWidth: 450, mx: 'auto', mb: 3 }}>
              Prueba modificando los términos de búsqueda o eliminando filtros activos para ver más resultados.
            </Typography>
            <Button variant="contained" onClick={handleResetFilters} sx={{ bgcolor: 'primary.main' }}>
              Restablecer todos los filtros
            </Button>
          </Box>
        ) : (
          <>
            <Grid2 container spacing={3}>
              {paginatedResults.map((tramite) => (
                <Grid2 key={tramite.id} size={{ xs: 12, sm: 6, md: 4 }}>
                  <TramiteCard tramite={tramite} />
                </Grid2>
              ))}
            </Grid2>

            {totalPages > 1 && (
              <Box sx={{ mt: 5, display: 'flex', justifyContent: 'center' }}>
                <Pagination
                  count={totalPages}
                  page={page}
                  onChange={(_, value) => {
                    setPage(value);
                    window.scrollTo({ top: 250, behavior: 'smooth' });
                  }}
                  color="primary"
                  shape="rounded"
                  size="medium"
                />
              </Box>
            )}
          </>
        )}
      </Container>
    </Box>
  );
}
