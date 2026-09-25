'use client';

import React, { useState, useMemo, useEffect } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid2,
  Card,
  CardContent,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Chip,
  TextField,
  InputAdornment,
  Button,
  IconButton,
  Tooltip,
  Select,
  MenuItem,
  Snackbar,
  Alert,
  ToggleButton,
  ToggleButtonGroup,
  Divider,
  FormControl,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import HourglassEmptyOutlinedIcon from '@mui/icons-material/HourglassEmptyOutlined';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import RestartAltOutlinedIcon from '@mui/icons-material/RestartAltOutlined';
import ApartmentOutlinedIcon from '@mui/icons-material/ApartmentOutlined';
import ViewListOutlinedIcon from '@mui/icons-material/ViewListOutlined';
import TableRowsOutlinedIcon from '@mui/icons-material/TableRowsOutlined';
import { TRAMITES } from '@/data/mockData';
import Link from '@/components/Link';

type EstadoAuditoria = 'vigente' | 'pendiente';

interface InfoAuditoria {
  estado: EstadoAuditoria;
  fecha: string;
}

const STORAGE_KEY = 'comotramito_control_estados_v1';

export default function ControlDashboardView() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedInst, setSelectedInst] = useState<string>('todos');
  const [selectedStatus, setSelectedStatus] = useState<string>('todos');
  const [viewMode, setViewMode] = useState<'entidad' | 'lista'>('entidad');
  const [auditOverrides, setAuditOverrides] = useState<Record<string, InfoAuditoria>>({});
  const [isLoaded, setIsLoaded] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState<string | null>(null);

  // Inicializar o cargar desde localStorage (sin requerir login)
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        setAuditOverrides(JSON.parse(saved));
      } else {
        // Carga inicial por defecto basada en los trámites
        const initialMap: Record<string, InfoAuditoria> = {};
        TRAMITES.forEach((t) => {
          initialMap[t.id] = {
            estado: 'vigente',
            fecha: t.ultimaVerificacion || '2026-09-24',
          };
        });
        setAuditOverrides(initialMap);
      }
    } catch {
      // Fallback
    } finally {
      setIsLoaded(true);
    }
  }, []);

  // Cambiar estado y persistir automáticamente en localStorage
  const handleStatusChange = (tramiteId: string, nuevoEstado: EstadoAuditoria) => {
    const hoyStr = new Date().toISOString().split('T')[0];
    setAuditOverrides((prev) => {
      const updated = {
        ...prev,
        [tramiteId]: {
          estado: nuevoEstado,
          fecha: hoyStr,
        },
      };
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
      } catch (err) {
        console.error('Error al guardar en localStorage', err);
      }
      return updated;
    });

    const nombreTramite = TRAMITES.find((t) => t.id === tramiteId)?.nombreCorto || 'Trámite';
    setSnackbarMessage(
      `"${nombreTramite}" marcado como ${nuevoEstado === 'vigente' ? 'Vigente' : 'Pendiente'}. Guardado en memoria local.`
    );
  };

  // Exportar backup en formato JSON
  const handleExportJson = () => {
    try {
      const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(auditOverrides, null, 2));
      const downloadAnchor = document.createElement('a');
      downloadAnchor.setAttribute('href', dataStr);
      downloadAnchor.setAttribute('download', `auditoria_tramites_${new Date().toISOString().split('T')[0]}.json`);
      document.body.appendChild(downloadAnchor);
      downloadAnchor.click();
      downloadAnchor.remove();
      setSnackbarMessage('Auditoría exportada correctamente en JSON.');
    } catch {
      setSnackbarMessage('No se pudo exportar la auditoría.');
    }
  };

  // Restablecer estados
  const handleReset = () => {
    if (window.confirm('¿Deseas restablecer todos los trámites al estado inicial?')) {
      const initialMap: Record<string, InfoAuditoria> = {};
      TRAMITES.forEach((t) => {
        initialMap[t.id] = {
          estado: 'vigente',
          fecha: t.ultimaVerificacion || '2026-09-24',
        };
      });
      setAuditOverrides(initialMap);
      try {
        localStorage.removeItem(STORAGE_KEY);
      } catch {
        // Ignorar
      }
      setSnackbarMessage('Valores de control restablecidos al estado inicial.');
    }
  };

  const hoy = useMemo(() => new Date(), []);

  // Datos combinados con overrides de auditoría
  const auditData = useMemo(() => {
    return TRAMITES.map((t) => {
      const override = auditOverrides[t.id];
      const estadoActual: EstadoAuditoria = override?.estado || 'vigente';
      const fechaActual = override?.fecha || t.ultimaVerificacion || '2026-09-24';

      const fechaObj = new Date(fechaActual);
      const diffMs = hoy.getTime() - fechaObj.getTime();
      const dias = Math.max(0, Math.floor(diffMs / (1000 * 60 * 60 * 24)));

      return {
        ...t,
        estadoControl: estadoActual,
        fechaAuditoria: fechaActual,
        diasDesdeVerificacion: dias,
      };
    });
  }, [auditOverrides, hoy]);

  // Contadores generales
  const total = auditData.length;
  const vigentes = auditData.filter((i) => i.estadoControl === 'vigente').length;
  const pendientes = auditData.filter((i) => i.estadoControl === 'pendiente').length;

  // Lista de entidades únicas para filtro
  const institucionesUnicas = useMemo(() => {
    const map = new Map<string, string>();
    auditData.forEach((t) => {
      map.set(t.institucion.id, t.institucion.sigla || t.institucion.nombre);
    });
    return Array.from(map.entries());
  }, [auditData]);

  // Lista filtrada
  const filteredTramites = useMemo(() => {
    return auditData.filter((t) => {
      const matchSearch =
        t.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (t.nombreCorto && t.nombreCorto.toLowerCase().includes(searchTerm.toLowerCase())) ||
        (t.codigoTributo && t.codigoTributo.toLowerCase().includes(searchTerm.toLowerCase())) ||
        t.institucion.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (t.institucion.sigla && t.institucion.sigla.toLowerCase().includes(searchTerm.toLowerCase()));

      const matchInst = selectedInst === 'todos' || t.institucion.id === selectedInst;
      const matchStatus = selectedStatus === 'todos' || t.estadoControl === selectedStatus;

      return matchSearch && matchInst && matchStatus;
    });
  }, [auditData, searchTerm, selectedInst, selectedStatus]);

  // Trámites agrupados por Entidad
  const gruposPorEntidad = useMemo(() => {
    const map = new Map<string, typeof filteredTramites>();

    filteredTramites.forEach((t) => {
      const key = t.institucion.id;
      if (!map.has(key)) {
        map.set(key, []);
      }
      map.get(key)!.push(t);
    });

    const resultado = Array.from(map.entries()).map(([instId, items]) => {
      const first = items[0];
      const countTotal = items.length;
      const countVigentes = items.filter((i) => i.estadoControl === 'vigente').length;
      const countPendientes = countTotal - countVigentes;

      return {
        institucionId: instId,
        institucionNombre: first.institucion.nombre,
        institucionSigla: first.institucion.sigla || first.institucion.nombre,
        tramites: items,
        total: countTotal,
        vigentes: countVigentes,
        pendientes: countPendientes,
      };
    });

    // Ordenar entidades alfabéticamente por sigla/nombre
    resultado.sort((a, b) => a.institucionSigla.localeCompare(b.institucionSigla));
    return resultado;
  }, [filteredTramites]);

  return (
    <Box sx={{ bgcolor: '#F8FAFC', minHeight: '100vh', py: 4 }}>
      <Container maxWidth="lg">
        {/* Barra superior de navegación y título */}
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 2, mb: 3 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
            <Button
              component={Link}
              href="/"
              startIcon={<ArrowBackIcon />}
              variant="outlined"
              size="small"
              sx={{ borderColor: '#CBD5E1', color: '#475569', borderRadius: 2, textTransform: 'none', fontWeight: 600 }}
            >
              Volver al Catálogo
            </Button>
            <Typography variant="h1" sx={{ fontSize: { xs: '1.25rem', sm: '1.65rem' }, fontWeight: 800, color: '#0F172A' }}>
              Panel de Control y Supervisión
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Tooltip title="Exportar estados actuales a un archivo JSON de respaldo">
              <Button
                variant="outlined"
                size="small"
                startIcon={<FileDownloadOutlinedIcon />}
                onClick={handleExportJson}
                sx={{ borderColor: '#CBD5E1', color: '#334155', textTransform: 'none', fontWeight: 600, fontSize: '0.8rem' }}
              >
                Exportar JSON
              </Button>
            </Tooltip>
            <Tooltip title="Restablecer todos los trámites al estado inicial">
              <IconButton size="small" onClick={handleReset} sx={{ color: '#64748B' }}>
                <RestartAltOutlinedIcon fontSize="small" />
              </IconButton>
            </Tooltip>
          </Box>
        </Box>

        {/* Notificación informativa de persistencia sin login */}
        <Paper
          elevation={0}
          sx={{
            p: 1.75,
            mb: 3,
            bgcolor: '#FFFFFF',
            borderRadius: 2,
            border: '1px solid #E2E8F0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: 1.5,
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.25 }}>
            <ApartmentOutlinedIcon sx={{ color: '#475569', fontSize: 20 }} />
            <Typography variant="body2" sx={{ color: '#334155', fontSize: '0.875rem' }}>
              <strong>Modo Supervisor Interno:</strong> Puedes cambiar el estado de cada trámite directamente (Vigente o Pendiente). Los cambios se guardan automáticamente en este navegador sin necesidad de usuario o login.
            </Typography>
          </Box>
          <Chip
            label={isLoaded ? 'Memoria Local Activa' : 'Cargando...'}
            size="small"
            sx={{ bgcolor: '#F1F5F9', color: '#475569', fontWeight: 600, fontSize: '0.72rem', border: '1px solid #CBD5E1' }}
          />
        </Paper>

        {/* Tarjetas KPI de control */}
        <Grid2 container spacing={2} sx={{ mb: 3 }}>
          <Grid2 size={{ xs: 6, sm: 3 }}>
            <Card sx={{ bgcolor: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: 2 }}>
              <CardContent sx={{ p: 2, '&:last-child': { pb: 2 } }}>
                <Typography variant="caption" sx={{ color: '#64748B', fontWeight: 600, textTransform: 'uppercase', fontSize: '0.7rem', display: 'block' }}>
                  Total de Trámites
                </Typography>
                <Typography variant="h4" sx={{ fontWeight: 800, color: '#0F172A', mt: 0.5, fontSize: '1.6rem' }}>
                  {total}
                </Typography>
                <Typography variant="caption" sx={{ color: '#64748B', fontWeight: 500, fontSize: '0.72rem' }}>
                  En catálogo activo
                </Typography>
              </CardContent>
            </Card>
          </Grid2>

          <Grid2 size={{ xs: 6, sm: 3 }}>
            <Card sx={{ bgcolor: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: 2 }}>
              <CardContent sx={{ p: 2, '&:last-child': { pb: 2 } }}>
                <Typography variant="caption" sx={{ color: '#166534', fontWeight: 700, textTransform: 'uppercase', fontSize: '0.7rem', display: 'block' }}>
                  Verificados y Vigentes
                </Typography>
                <Typography variant="h4" sx={{ fontWeight: 800, color: '#15803D', mt: 0.5, fontSize: '1.6rem' }}>
                  {vigentes}
                </Typography>
                <Typography variant="caption" sx={{ color: '#15803D', fontWeight: 600, fontSize: '0.72rem' }}>
                  {Math.round((vigentes / (total || 1)) * 100)}% verificado al día
                </Typography>
              </CardContent>
            </Card>
          </Grid2>

          <Grid2 size={{ xs: 6, sm: 3 }}>
            <Card sx={{ bgcolor: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: 2 }}>
              <CardContent sx={{ p: 2, '&:last-child': { pb: 2 } }}>
                <Typography variant="caption" sx={{ color: '#92400E', fontWeight: 700, textTransform: 'uppercase', fontSize: '0.7rem', display: 'block' }}>
                  Pendientes de Revisión
                </Typography>
                <Typography variant="h4" sx={{ fontWeight: 800, color: '#B45309', mt: 0.5, fontSize: '1.6rem' }}>
                  {pendientes}
                </Typography>
                <Typography variant="caption" sx={{ color: '#B45309', fontWeight: 600, fontSize: '0.72rem' }}>
                  Requieren chequeo o actualización
                </Typography>
              </CardContent>
            </Card>
          </Grid2>

          <Grid2 size={{ xs: 6, sm: 3 }}>
            <Card sx={{ bgcolor: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: 2 }}>
              <CardContent sx={{ p: 2, '&:last-child': { pb: 2 } }}>
                <Typography variant="caption" sx={{ color: '#334155', fontWeight: 600, textTransform: 'uppercase', fontSize: '0.7rem', display: 'block' }}>
                  Entidades Públicas
                </Typography>
                <Typography variant="h4" sx={{ fontWeight: 800, color: '#0F172A', mt: 0.5, fontSize: '1.6rem' }}>
                  {institucionesUnicas.length}
                </Typography>
                <Typography variant="caption" sx={{ color: '#64748B', fontWeight: 500, fontSize: '0.72rem' }}>
                  Instituciones registradas
                </Typography>
              </CardContent>
            </Card>
          </Grid2>
        </Grid2>

        {/* Barra de Filtros y Búsqueda */}
        <Paper sx={{ p: 2, mb: 3, borderRadius: 2, border: '1px solid #E2E8F0', boxShadow: 'none' }}>
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 2, alignItems: 'center' }}>
            <TextField
              size="small"
              placeholder="Buscar por nombre, entidad, código Págalo..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              sx={{ flexGrow: 1 }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon sx={{ color: '#94A3B8' }} />
                  </InputAdornment>
                ),
              }}
            />

            {/* Filtro por estado */}
            <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', alignItems: 'center' }}>
              <Chip
                label="Todos"
                clickable
                color={selectedStatus === 'todos' ? 'primary' : 'default'}
                onClick={() => setSelectedStatus('todos')}
                size="small"
                sx={{ fontWeight: 600 }}
              />
              <Chip
                icon={<CheckCircleOutlineIcon sx={{ fontSize: '15px !important' }} />}
                label={`Vigentes (${vigentes})`}
                clickable
                color={selectedStatus === 'vigente' ? 'success' : 'default'}
                onClick={() => setSelectedStatus('vigente')}
                size="small"
                sx={{ fontWeight: 600 }}
              />
              <Chip
                icon={<HourglassEmptyOutlinedIcon sx={{ fontSize: '15px !important' }} />}
                label={`Pendientes (${pendientes})`}
                clickable
                color={selectedStatus === 'pendiente' ? 'warning' : 'default'}
                onClick={() => setSelectedStatus('pendiente')}
                size="small"
                sx={{ fontWeight: 600 }}
              />
            </Box>

            {/* Selector de modo de vista */}
            <ToggleButtonGroup
              size="small"
              value={viewMode}
              exclusive
              onChange={(_, val) => val && setViewMode(val)}
              sx={{ height: 32 }}
            >
              <ToggleButton value="entidad" sx={{ px: 1.25, fontSize: '0.75rem', fontWeight: 600, textTransform: 'none' }}>
                <TableRowsOutlinedIcon sx={{ fontSize: 16, mr: 0.5 }} /> Por Entidad
              </ToggleButton>
              <ToggleButton value="lista" sx={{ px: 1.25, fontSize: '0.75rem', fontWeight: 600, textTransform: 'none' }}>
                <ViewListOutlinedIcon sx={{ fontSize: 16, mr: 0.5 }} /> Lista Continua
              </ToggleButton>
            </ToggleButtonGroup>
          </Box>

          {/* Filtro rápido por entidades */}
          <Box sx={{ display: 'flex', gap: 1, overflowX: 'auto', mt: 2, pt: 1.5, borderTop: '1px solid #F1F5F9', pb: 0.5 }}>
            <Chip
              label="Todas las entidades"
              clickable
              variant={selectedInst === 'todos' ? 'filled' : 'outlined'}
              color={selectedInst === 'todos' ? 'primary' : 'default'}
              onClick={() => setSelectedInst('todos')}
              size="small"
              sx={{ fontWeight: 600, fontSize: '0.75rem' }}
            />
            {institucionesUnicas.map(([id, label]) => (
              <Chip
                key={id}
                label={label}
                clickable
                variant={selectedInst === id ? 'filled' : 'outlined'}
                color={selectedInst === id ? 'primary' : 'default'}
                onClick={() => setSelectedInst(id)}
                size="small"
                sx={{ fontWeight: 600, fontSize: '0.75rem' }}
              />
            ))}
          </Box>
        </Paper>

        {/* Renderizado de trámites según el modo seleccionado */}
        {filteredTramites.length === 0 ? (
          <Paper sx={{ p: 4, textAlign: 'center', borderRadius: 2, border: '1px solid #E2E8F0', bgcolor: '#FFFFFF' }}>
            <Typography variant="body1" sx={{ color: '#64748B', fontWeight: 600 }}>
              No se encontraron trámites con los filtros seleccionados.
            </Typography>
          </Paper>
        ) : viewMode === 'entidad' ? (
          /* VISTA AGRUPADA POR ENTIDAD (Separador por institución) */
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            {gruposPorEntidad.map((grupo) => (
              <Paper
                key={grupo.institucionId}
                sx={{
                  borderRadius: 2,
                  border: '1px solid #E2E8F0',
                  boxShadow: 'none',
                  overflow: 'hidden',
                  bgcolor: '#FFFFFF',
                }}
              >
                {/* Cabecera / Separador de la Entidad */}
                <Box
                  sx={{
                    p: 2,
                    bgcolor: '#F8FAFC',
                    borderBottom: '1px solid #E2E8F0',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    gap: 1.5,
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                    <Chip
                      label={grupo.institucionSigla}
                      size="small"
                      sx={{ bgcolor: '#0F172A', color: '#FFFFFF', fontWeight: 700, fontSize: '0.75rem' }}
                    />
                    <Typography variant="subtitle1" sx={{ fontWeight: 700, color: '#0F172A', fontSize: '0.95rem' }}>
                      {grupo.institucionNombre}
                    </Typography>
                  </Box>

                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Chip
                      label={`${grupo.total} trámite${grupo.total !== 1 ? 's' : ''}`}
                      size="small"
                      sx={{ bgcolor: '#F1F5F9', color: '#334155', fontWeight: 600, fontSize: '0.75rem' }}
                    />
                    <Chip
                      label={`${grupo.vigentes} vigentes`}
                      size="small"
                      sx={{ bgcolor: '#F0FDF4', color: '#166534', border: '1px solid #BBF7D0', fontWeight: 600, fontSize: '0.72rem' }}
                    />
                    {grupo.pendientes > 0 && (
                      <Chip
                        label={`${grupo.pendientes} pendientes`}
                        size="small"
                        sx={{ bgcolor: '#FFFBEB', color: '#92400E', border: '1px solid #FDE68A', fontWeight: 600, fontSize: '0.72rem' }}
                      />
                    )}
                  </Box>
                </Box>

                {/* Tabla de trámites de esta entidad */}
                <TableContainer>
                  <Table size="small">
                    <TableHead sx={{ bgcolor: '#FAFAFA' }}>
                      <TableRow>
                        <TableCell sx={{ fontWeight: 700, color: '#475569', fontSize: '0.75rem', width: '38%' }}>Trámite</TableCell>
                        <TableCell sx={{ fontWeight: 700, color: '#475569', fontSize: '0.75rem' }}>Costo Oficial</TableCell>
                        <TableCell sx={{ fontWeight: 700, color: '#475569', fontSize: '0.75rem' }}>Código Págalo.pe</TableCell>
                        <TableCell sx={{ fontWeight: 700, color: '#475569', fontSize: '0.75rem' }}>Última Verificación</TableCell>
                        <TableCell sx={{ fontWeight: 700, color: '#475569', fontSize: '0.75rem', width: '160px' }}>Estado (Cambiar)</TableCell>
                        <TableCell align="center" sx={{ fontWeight: 700, color: '#475569', fontSize: '0.75rem', width: '50px' }}>Oficial</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {grupo.tramites.map((t) => (
                        <TableRow key={t.id} hover sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                          <TableCell>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, flexWrap: 'wrap' }}>
                              <Box
                                component={Link}
                                href={`/tramite/${t.slug}`}
                                sx={{
                                  textDecoration: 'none',
                                  color: '#0F172A',
                                  fontWeight: 600,
                                  fontSize: '0.875rem',
                                  '&:hover': { color: '#2563EB', textDecoration: 'underline' },
                                }}
                              >
                                {t.nombreCorto || t.nombre}
                              </Box>
                              {t.regionesPago && t.regionesPago.length > 0 && (
                                <Chip
                                  label={`Multi-región (${t.regionesPago.length} sedes)`}
                                  size="small"
                                  sx={{ bgcolor: '#F1F5F9', color: '#475569', fontSize: '0.68rem', height: 20, fontWeight: 600 }}
                                />
                              )}
                              {t.esCompuesto && (
                                <Chip
                                  label="Compuesto"
                                  size="small"
                                  sx={{ bgcolor: '#F8FAFC', color: '#64748B', border: '1px solid #E2E8F0', fontSize: '0.68rem', height: 20 }}
                                />
                              )}
                            </Box>
                            <Typography variant="caption" sx={{ color: '#64748B', display: 'block', fontSize: '0.72rem', mt: 0.25 }}>
                              {t.slug}
                            </Typography>
                          </TableCell>

                          <TableCell sx={{ fontWeight: 600, color: '#0F172A', fontSize: '0.8rem' }}>
                            {t.costoResumen}
                          </TableCell>

                          <TableCell>
                            {t.codigoTributo ? (
                              <Chip
                                label={t.codigoTributo.replace(/^Código (Tributo )?Págalo\.pe:\s*/i, '').replace(/^Código\s*/i, '')}
                                size="small"
                                sx={{ bgcolor: '#F1F5F9', color: '#334155', fontWeight: 600, fontSize: '0.72rem', border: '1px solid #CBD5E1' }}
                              />
                            ) : (
                              <Typography variant="caption" sx={{ color: '#94A3B8', fontSize: '0.75rem' }}>
                                Gratuito
                              </Typography>
                            )}
                          </TableCell>

                          <TableCell>
                            <Typography variant="body2" sx={{ fontSize: '0.8rem', color: '#334155' }}>
                              {t.fechaAuditoria}
                            </Typography>
                            <Typography variant="caption" sx={{ color: '#64748B', fontSize: '0.7rem' }}>
                              {t.diasDesdeVerificacion === 0 ? 'Hoy' : `Hace ${t.diasDesdeVerificacion} d`}
                            </Typography>
                          </TableCell>

                          {/* Selector de cambio de estado (Vigente / Pendiente) */}
                          <TableCell>
                            <FormControl size="small" fullWidth>
                              <Select
                                value={t.estadoControl}
                                onChange={(e) => handleStatusChange(t.id, e.target.value as EstadoAuditoria)}
                                sx={{
                                  fontSize: '0.78rem',
                                  fontWeight: 600,
                                  borderRadius: 1.5,
                                  height: 32,
                                  bgcolor: t.estadoControl === 'vigente' ? '#F0FDF4' : '#FFFBEB',
                                  color: t.estadoControl === 'vigente' ? '#166534' : '#92400E',
                                  '& .MuiOutlinedInput-notchedOutline': {
                                    borderColor: t.estadoControl === 'vigente' ? '#BBF7D0' : '#FDE68A',
                                  },
                                  '&:hover .MuiOutlinedInput-notchedOutline': {
                                    borderColor: t.estadoControl === 'vigente' ? '#86EFAC' : '#FCD34D',
                                  },
                                }}
                              >
                                <MenuItem value="vigente" sx={{ fontSize: '0.8rem', fontWeight: 600, color: '#166534' }}>
                                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                    <CheckCircleOutlineIcon sx={{ fontSize: 16, color: '#16A34A' }} />
                                    Vigente
                                  </Box>
                                </MenuItem>
                                <MenuItem value="pendiente" sx={{ fontSize: '0.8rem', fontWeight: 600, color: '#92400E' }}>
                                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                    <HourglassEmptyOutlinedIcon sx={{ fontSize: 16, color: '#D97706' }} />
                                    Pendiente
                                  </Box>
                                </MenuItem>
                              </Select>
                            </FormControl>
                          </TableCell>

                          <TableCell align="center">
                            <Tooltip title="Abrir fuente oficial (gob.pe / entidad)">
                              <IconButton
                                component="a"
                                href={t.fuenteUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                size="small"
                                sx={{ color: '#64748B', '&:hover': { color: '#0F172A' } }}
                              >
                                <OpenInNewIcon sx={{ fontSize: 16 }} />
                              </IconButton>
                            </Tooltip>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Paper>
            ))}
          </Box>
        ) : (
          /* VISTA EN LISTA CONTINUA */
          <TableContainer component={Paper} sx={{ borderRadius: 2, border: '1px solid #E2E8F0', boxShadow: 'none' }}>
            <Table size="small">
              <TableHead sx={{ bgcolor: '#F1F5F9' }}>
                <TableRow>
                  <TableCell sx={{ fontWeight: 700, color: '#334155' }}>Trámite</TableCell>
                  <TableCell sx={{ fontWeight: 700, color: '#334155' }}>Entidad</TableCell>
                  <TableCell sx={{ fontWeight: 700, color: '#334155' }}>Costo Oficial</TableCell>
                  <TableCell sx={{ fontWeight: 700, color: '#334155' }}>Código Págalo.pe</TableCell>
                  <TableCell sx={{ fontWeight: 700, color: '#334155' }}>Última Verificación</TableCell>
                  <TableCell sx={{ fontWeight: 700, color: '#334155', width: '160px' }}>Estado (Cambiar)</TableCell>
                  <TableCell align="center" sx={{ fontWeight: 700, color: '#334155', width: '50px' }}>Oficial</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredTramites.map((t) => (
                  <TableRow key={t.id} hover sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                    <TableCell>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, flexWrap: 'wrap' }}>
                        <Box
                          component={Link}
                          href={`/tramite/${t.slug}`}
                          sx={{
                            textDecoration: 'none',
                            color: '#0F172A',
                            fontWeight: 600,
                            '&:hover': { color: '#2563EB', textDecoration: 'underline' },
                          }}
                        >
                          {t.nombreCorto || t.nombre}
                        </Box>
                        {t.regionesPago && t.regionesPago.length > 0 && (
                          <Chip
                            label={`Multi-región (${t.regionesPago.length})`}
                            size="small"
                            sx={{ bgcolor: '#F1F5F9', color: '#475569', fontSize: '0.68rem', height: 20 }}
                          />
                        )}
                      </Box>
                      <Typography variant="caption" sx={{ color: '#64748B', display: 'block', fontSize: '0.72rem' }}>
                        {t.slug}
                      </Typography>
                    </TableCell>

                    <TableCell>
                      <Chip
                        label={t.institucion.sigla || t.institucion.nombre}
                        size="small"
                        sx={{ bgcolor: '#F1F5F9', color: '#1E293B', fontWeight: 600, fontSize: '0.75rem', border: '1px solid #CBD5E1' }}
                      />
                    </TableCell>

                    <TableCell sx={{ fontWeight: 600, color: '#0F172A', fontSize: '0.8rem' }}>
                      {t.costoResumen}
                    </TableCell>

                    <TableCell>
                      {t.codigoTributo ? (
                        <Chip
                          label={t.codigoTributo.replace(/^Código (Tributo )?Págalo\.pe:\s*/i, '').replace(/^Código\s*/i, '')}
                          size="small"
                          sx={{ bgcolor: '#F1F5F9', color: '#334155', fontWeight: 600, fontSize: '0.72rem', border: '1px solid #CBD5E1' }}
                        />
                      ) : (
                        <Typography variant="caption" sx={{ color: '#94A3B8' }}>
                          Gratuito
                        </Typography>
                      )}
                    </TableCell>

                    <TableCell>
                      <Typography variant="body2" sx={{ fontSize: '0.8rem', color: '#334155' }}>
                        {t.fechaAuditoria}
                      </Typography>
                      <Typography variant="caption" sx={{ color: '#64748B', fontSize: '0.7rem' }}>
                        {t.diasDesdeVerificacion === 0 ? 'Hoy' : `Hace ${t.diasDesdeVerificacion} d`}
                      </Typography>
                    </TableCell>

                    <TableCell>
                      <FormControl size="small" fullWidth>
                        <Select
                          value={t.estadoControl}
                          onChange={(e) => handleStatusChange(t.id, e.target.value as EstadoAuditoria)}
                          sx={{
                            fontSize: '0.78rem',
                            fontWeight: 600,
                            borderRadius: 1.5,
                            height: 32,
                            bgcolor: t.estadoControl === 'vigente' ? '#F0FDF4' : '#FFFBEB',
                            color: t.estadoControl === 'vigente' ? '#166534' : '#92400E',
                            '& .MuiOutlinedInput-notchedOutline': {
                              borderColor: t.estadoControl === 'vigente' ? '#BBF7D0' : '#FDE68A',
                            },
                            '&:hover .MuiOutlinedInput-notchedOutline': {
                              borderColor: t.estadoControl === 'vigente' ? '#86EFAC' : '#FCD34D',
                            },
                          }}
                        >
                          <MenuItem value="vigente" sx={{ fontSize: '0.8rem', fontWeight: 600, color: '#166534' }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                              <CheckCircleOutlineIcon sx={{ fontSize: 16, color: '#16A34A' }} />
                              Vigente
                            </Box>
                          </MenuItem>
                          <MenuItem value="pendiente" sx={{ fontSize: '0.8rem', fontWeight: 600, color: '#92400E' }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                              <HourglassEmptyOutlinedIcon sx={{ fontSize: 16, color: '#D97706' }} />
                              Pendiente
                            </Box>
                          </MenuItem>
                        </Select>
                      </FormControl>
                    </TableCell>

                    <TableCell align="center">
                      <Tooltip title="Abrir ficha oficial en gob.pe / entidad">
                        <IconButton
                          component="a"
                          href={t.fuenteUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          size="small"
                          sx={{ color: '#64748B', '&:hover': { color: '#0F172A' } }}
                        >
                          <OpenInNewIcon sx={{ fontSize: 16 }} />
                        </IconButton>
                      </Tooltip>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}

        {/* Feedback visual al cambiar estado */}
        <Snackbar
          open={Boolean(snackbarMessage)}
          autoHideDuration={3000}
          onClose={() => setSnackbarMessage(null)}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        >
          <Alert
            onClose={() => setSnackbarMessage(null)}
            severity="success"
            variant="filled"
            sx={{ width: '100%', fontSize: '0.85rem', bgcolor: '#0F172A', color: '#FFFFFF' }}
          >
            {snackbarMessage}
          </Alert>
        </Snackbar>
      </Container>
    </Box>
  );
}
