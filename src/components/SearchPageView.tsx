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

  // Update search state when query params change
  useEffect(() => {
    setQuery(queryParam);
    if (catParam) setSelectedCat(catParam);
    if (instParam) setSelectedInst(instParam);
  }, [queryParam, catParam, instParam]);

  // Execute search filter
  useEffect(() => {
    const res = searchTramites(query, {
      categoriaId: selectedCat || undefined,
      institucionId: selectedInst || undefined,
      modalidad: selectedModality === 'all' ? undefined : selectedModality,
      soloGratuitos: onlyFree,
    });
    setResults(res);
  }, [query, selectedCat, selectedInst, selectedModality, onlyFree]);

  const handleResetFilters = () => {
    setQuery('');
    setSelectedCat('');
    setSelectedInst('');
    setSelectedModality('all');
    setOnlyFree(false);
    router.push('/buscar');
  };

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

        {/* Results Header */}
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 3 }}>
          <Typography variant="subtitle1" sx={{ fontWeight: 700, color: '#0F172A' }}>
            {results.length} {results.length === 1 ? 'trámite encontrado' : 'trámites encontrados'}
          </Typography>
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
          <Grid2 container spacing={3}>
            {results.map((tramite) => (
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
