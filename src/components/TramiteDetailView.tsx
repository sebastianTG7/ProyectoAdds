'use client';

import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Chip,
  Button,
  Stack,
  Card,
  CardContent,
  Checkbox,
  Stepper,
  Step,
  StepLabel,
  StepContent,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Divider,
  Grid2,
  ToggleButtonGroup,
  ToggleButton,
  LinearProgress,
  IconButton,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from '@mui/material';
import type { SelectChangeEvent } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import PaymentsOutlinedIcon from '@mui/icons-material/PaymentsOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import VerifiedUserOutlinedIcon from '@mui/icons-material/VerifiedUserOutlined';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import GavelOutlinedIcon from '@mui/icons-material/GavelOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import CheckIcon from '@mui/icons-material/Check';
import { Tramite } from '@/types/tramite';
import { useSavedTramites } from '@/context/SavedTramitesContext';
import TramiteCard from './TramiteCard';
import Link from './Link';
import { useRouter } from 'next/navigation';

interface TramiteDetailViewProps {
  tramite: Tramite;
  relatedTramites: Tramite[];
}

export default function TramiteDetailView({ tramite, relatedTramites }: TramiteDetailViewProps) {
  const router = useRouter();
  const { isSaved, toggleSave } = useSavedTramites();
  const saved = isSaved(tramite.slug);

  // Variant selector state (for tramites that still use variantes)
  const [selectedVariantId, setSelectedVariantId] = useState<string | null>(
    tramite.variantes && tramite.variantes.length > 0 ? tramite.variantes[0].id : null
  );

  // Region selector state (for tramites with regionesPago)
  const hasRegiones = tramite.regionesPago && tramite.regionesPago.length > 0;
  const [selectedRegionId, setSelectedRegionId] = useState<string>(
    hasRegiones ? tramite.regionesPago![0].id : ''
  );
  const selectedRegion = hasRegiones
    ? tramite.regionesPago!.find((r) => r.id === selectedRegionId) || tramite.regionesPago![0]
    : null;

  // Active step state for vertical stepper
  const [activeStep, setActiveStep] = useState<number>(0);

  // Checklist of checked requirements
  const [checkedReqs, setCheckedReqs] = useState<Record<string, boolean>>({});

  // Requirements profile filter
  const [reqFilter, setReqFilter] = useState<'all' | 'general' | 'menor_edad' | 'extranjero'>('all');

  // Copied link toast simulation
  const [copied, setCopied] = useState(false);

  // Calculate current active cost based on variant or region
  const currentVariant = tramite.variantes?.find((v) => v.id === selectedVariantId);
  const activeCost = selectedRegion
    ? (selectedRegion.costoTotal > 0 ? selectedRegion.costoTotal : tramite.costoPrincipal)
    : (currentVariant ? currentVariant.costo : tramite.costoPrincipal);
  const activeDuration = currentVariant ? currentVariant.duracionTexto : tramite.duracionTexto;
  const activeTribute = selectedRegion
    ? selectedRegion.codigoPagalo
    : (currentVariant?.codigoTributo || tramite.codigoTributo);

  // Filtered requirements
  const filteredReqs = tramite.requisitos.filter((r) => {
    if (reqFilter === 'all') return true;
    if (!r.aplicaSi || r.aplicaSi === 'general') return true;
    return r.aplicaSi === reqFilter;
  });

  const checkedCount = filteredReqs.filter((r) => checkedReqs[r.id]).length;
  const progress = filteredReqs.length > 0 ? (checkedCount / filteredReqs.length) * 100 : 0;

  const handleToggleReq = (id: string) => {
    setCheckedReqs((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleCopyLink = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  // Format date
  const formattedDate = new Date(tramite.ultimaVerificacion).toLocaleDateString('es-PE', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  return (
    <Box sx={{ bgcolor: '#F8FAFC', pb: 10 }}>
      {/* Top Navigation & Verification Bar */}
      <Box sx={{ bgcolor: '#FFFFFF', borderBottom: '1px solid #E2E8F0', py: 1.5 }}>
        <Container maxWidth="lg">
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Button
              onClick={() => router.back()}
              startIcon={<ArrowBackIcon fontSize="small" />}
              size="small"
              sx={{ color: '#475569', fontWeight: 600 }}
            >
              Volver
            </Button>

            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
              <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: 0.75, fontSize: '0.78rem', color: '#64748B' }}>
                <VerifiedUserOutlinedIcon sx={{ fontSize: 16, color: '#16A34A' }} />
                <span>Verificado: <strong>{formattedDate}</strong></span>
              </Box>

              <IconButton
                onClick={handleCopyLink}
                size="small"
                title="Copiar enlace del trámite"
                sx={{ color: copied ? 'success.main' : '#64748B' }}
              >
                {copied ? <CheckIcon fontSize="small" /> : <ContentCopyIcon fontSize="small" />}
              </IconButton>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Main Content Area */}
      <Container maxWidth="lg" sx={{ pt: 4 }}>
        <Grid2 container spacing={4}>
          {/* Main Left Column */}
          <Grid2 size={{ xs: 12, md: 8 }}>
            {/* Header / Title Block */}
            <Box sx={{ mb: 3 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 1.2, flexWrap: 'wrap' }}>
                <Typography
                  component={Link}
                  href={`/instituciones/${tramite.institucion.slug}`}
                  variant="caption"
                  sx={{
                    fontWeight: 700,
                    color: 'primary.main',
                    textTransform: 'uppercase',
                    letterSpacing: '0.04em',
                    textDecoration: 'none',
                    fontSize: '0.75rem',
                    '&:hover': { textDecoration: 'underline' },
                  }}
                >
                  {tramite.institucion.sigla || tramite.institucion.nombre}
                </Typography>
                <Typography variant="caption" sx={{ color: '#CBD5E1' }}>&bull;</Typography>
                <Typography
                  component={Link}
                  href={`/categoria/${tramite.categoria.slug}`}
                  variant="caption"
                  sx={{
                    color: '#64748B',
                    textDecoration: 'none',
                    fontSize: '0.75rem',
                    fontWeight: 500,
                    '&:hover': { color: '#0F172A' },
                  }}
                >
                  {tramite.categoria.nombre}
                </Typography>
                {(tramite.vigenciaTexto || tramite.vigenciaResultadoDias) && (
                  <>
                    <Typography variant="caption" sx={{ color: '#CBD5E1' }}>&bull;</Typography>
                    <Typography variant="caption" sx={{ color: '#475569', fontSize: '0.75rem', fontWeight: 600 }}>
                      Vigencia: {tramite.vigenciaTexto || `${tramite.vigenciaResultadoDias} días`}
                    </Typography>
                  </>
                )}
                {tramite.esCompuesto && (
                  <>
                    <Typography variant="caption" sx={{ color: '#CBD5E1' }}>&bull;</Typography>
                    <Typography variant="caption" sx={{ color: '#3730A3', fontWeight: 600, fontSize: '0.72rem' }}>
                      Trámite Compuesto (Multi-fase)
                    </Typography>
                  </>
                )}
              </Box>

              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: '1.65rem', sm: '2.1rem' },
                  fontWeight: 800,
                  color: '#0F172A',
                  lineHeight: 1.2,
                  mb: 1.5,
                }}
              >
                {tramite.nombre}
              </Typography>

              <Typography variant="body1" sx={{ color: '#475569', fontSize: '0.975rem', lineHeight: 1.6 }}>
                {tramite.descripcion}
              </Typography>
            </Box>

            {/* Above-the-fold Summary Ribbon (Clean & cohesive layout without isolated boxes) */}
            <Box
              sx={{
                mb: 3.5,
                p: { xs: 2, sm: 2.5 },
                bgcolor: '#FFFFFF',
                borderRadius: 2,
                border: '1px solid #E2E8F0',
              }}
            >
              <Grid2 container spacing={2}>
                <Grid2 size={{ xs: 6, sm: 3 }}>
                  <Typography variant="caption" sx={{ color: '#64748B', fontWeight: 600, textTransform: 'uppercase', fontSize: '0.7rem', display: 'block', mb: 0.5 }}>
                    Costo
                  </Typography>
                  <Typography variant="h4" sx={{ fontWeight: 800, color: '#0F172A', fontSize: '1.15rem' }}>
                    {activeCost === 0 ? 'Gratuito' : `S/ ${activeCost.toFixed(2)}`}
                  </Typography>
                  <Typography variant="caption" sx={{ color: '#64748B', display: 'block', fontSize: '0.7rem', mt: 0.25 }}>
                    {activeCost === 0 ? 'Sin costo de tasa' : 'Tasa oficial del Estado'}
                  </Typography>
                </Grid2>

                {activeTribute ? (
                  <Grid2 size={{ xs: 6, sm: 3 }}>
                    <Typography variant="caption" sx={{ color: '#64748B', fontWeight: 600, textTransform: 'uppercase', fontSize: '0.7rem', display: 'block', mb: 0.5 }}>
                      Código de Pago
                    </Typography>
                    <Typography variant="h4" sx={{ fontWeight: 800, color: '#0F172A', fontSize: '1.15rem' }}>
                      {activeTribute
                        .replace(/^Código (Tributo )?Págalo\.pe:\s*/i, '')
                        .replace(/^Código\s*/i, '')
                        .trim()}
                    </Typography>
                    <Typography variant="caption" sx={{ color: '#64748B', display: 'block', fontSize: '0.7rem', mt: 0.25 }}>
                      Págalo.pe / Banco de la Nación
                    </Typography>
                  </Grid2>
                ) : (
                  <Grid2 size={{ xs: 6, sm: 3 }}>
                    <Typography variant="caption" sx={{ color: '#64748B', fontWeight: 600, textTransform: 'uppercase', fontSize: '0.7rem', display: 'block', mb: 0.5 }}>
                      Vigencia
                    </Typography>
                    <Typography variant="subtitle2" sx={{ fontWeight: 700, color: '#0F172A', fontSize: '0.95rem' }} noWrap>
                      {tramite.vigenciaTexto || (tramite.vigenciaResultadoDias ? `${tramite.vigenciaResultadoDias} días` : 'Permanente')}
                    </Typography>
                    <Typography variant="caption" sx={{ color: '#64748B', display: 'block', fontSize: '0.7rem', mt: 0.25 }}>
                      Documento oficial
                    </Typography>
                  </Grid2>
                )}

                <Grid2 size={{ xs: 6, sm: 3 }}>
                  <Typography variant="caption" sx={{ color: '#64748B', fontWeight: 600, textTransform: 'uppercase', fontSize: '0.7rem', display: 'block', mb: 0.5 }}>
                    Tiempo estimado
                  </Typography>
                  <Typography variant="h4" sx={{ fontWeight: 700, color: '#0F172A', fontSize: '1rem', lineHeight: 1.3 }}>
                    {activeDuration}
                  </Typography>
                  <Typography variant="caption" sx={{ color: '#64748B', display: 'block', fontSize: '0.7rem', mt: 0.25 }}>
                    Plazo de entrega
                  </Typography>
                </Grid2>

                <Grid2 size={{ xs: 6, sm: 3 }}>
                  <Typography variant="caption" sx={{ color: '#64748B', fontWeight: 600, textTransform: 'uppercase', fontSize: '0.7rem', display: 'block', mb: 0.5 }}>
                    Modalidad
                  </Typography>
                  <Typography variant="subtitle2" sx={{ fontWeight: 700, color: '#0F172A' }}>
                    {tramite.modalidadPrincipal === 'online' ? '100% Online' : tramite.modalidadPrincipal === 'presencial' ? 'Presencial' : 'Presencial y Virtual'}
                  </Typography>
                  {(tramite.vigenciaTexto || tramite.vigenciaResultadoDias) && activeTribute && (
                    <Typography variant="caption" sx={{ color: '#64748B', display: 'block', fontSize: '0.7rem', mt: 0.25 }}>
                      Vigencia: {tramite.vigenciaTexto || `${tramite.vigenciaResultadoDias} días`}
                    </Typography>
                  )}
                </Grid2>
              </Grid2>

              {/* Region Selector (for tramites with regionesPago) */}
              {hasRegiones && (
                <Box sx={{ mt: 2.5, pt: 2, borderTop: '1px solid #F1F5F9' }}>
                  <Typography variant="caption" sx={{ fontWeight: 700, color: '#334155', textTransform: 'uppercase', letterSpacing: '0.04em', display: 'block', mb: 1.5 }}>
                    Selecciona tu región o departamento:
                  </Typography>
                  <FormControl fullWidth size="small">
                    <Select
                      value={selectedRegionId}
                      onChange={(e: SelectChangeEvent) => setSelectedRegionId(e.target.value)}
                      sx={{
                        fontWeight: 600,
                        fontSize: '0.9rem',
                        bgcolor: '#F8FAFC',
                        '& .MuiSelect-select': { py: 1.25 },
                      }}
                    >
                      {tramite.regionesPago!.map((rp) => (
                        <MenuItem key={rp.id} value={rp.id}>
                          {rp.region} — {rp.institucionEjecutora}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>

                  {/* Region detail card - Sobrio y profesional, sin bordes neon */}
                  {selectedRegion && (
                    <Box sx={{ mt: 2, p: 2, bgcolor: '#F8FAFC', borderRadius: 2, border: '1px solid #E2E8F0' }}>
                      <Stack direction="row" justifyContent="space-between" alignItems="center" flexWrap="wrap" gap={1} sx={{ mb: 1.25 }}>
                        <Typography variant="caption" sx={{ fontWeight: 700, color: '#0F172A', textTransform: 'uppercase', letterSpacing: '0.03em' }}>
                          {selectedRegion.institucionEjecutora}
                        </Typography>
                        <Typography variant="caption" sx={{ fontWeight: 600, color: '#334155', bgcolor: '#F1F5F9', border: '1px solid #CBD5E1', px: 1.25, py: 0.25, borderRadius: 1 }}>
                          Cód. Págalo.pe: {selectedRegion.codigoPagalo}
                        </Typography>
                      </Stack>

                      {/* Conceptos desglose */}
                      {selectedRegion.conceptos.length > 0 && selectedRegion.conceptos.some((c) => c.monto > 0) && (
                        <Box sx={{ mb: 1.25 }}>
                          <Typography variant="caption" sx={{ fontWeight: 600, color: '#475569', display: 'block', mb: 0.75 }}>
                            Desglose de tasas:
                          </Typography>
                          {selectedRegion.conceptos.map((c, i) => (
                            <Box key={i} sx={{ display: 'flex', justifyContent: 'space-between', py: 0.25 }}>
                              <Typography variant="body2" sx={{ color: '#475569', fontSize: '0.82rem' }}>
                                {c.concepto}
                              </Typography>
                              <Typography variant="body2" sx={{ fontWeight: 700, color: '#0F172A', fontSize: '0.82rem' }}>
                                S/ {c.monto.toFixed(2)}
                              </Typography>
                            </Box>
                          ))}
                          <Divider sx={{ my: 0.75, borderColor: '#E2E8F0' }} />
                          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Typography variant="body2" sx={{ fontWeight: 700, color: '#0F172A', fontSize: '0.85rem' }}>
                              Total tasas {selectedRegion.institucionEjecutora.split(' ')[0]}:
                            </Typography>
                            <Typography variant="body2" sx={{ fontWeight: 800, color: '#0F172A', fontSize: '0.9rem' }}>
                              S/ {selectedRegion.costoTotal.toFixed(2)}
                            </Typography>
                          </Box>
                        </Box>
                      )}

                      {/* No montos confirmed */}
                      {selectedRegion.conceptos.every((c) => c.monto === 0) && (
                        <Typography variant="body2" sx={{ color: '#64748B', fontSize: '0.82rem', mb: 0.5 }}>
                          Tasas según tarifario TUPA vigente de {selectedRegion.institucionEjecutora}. Consulta en Págalo.pe con el código {selectedRegion.codigoPagalo} o en ventanilla.
                        </Typography>
                      )}

                      {/* Sede */}
                      {selectedRegion.sedeExamenes && (
                        <Typography variant="caption" sx={{ color: '#475569', display: 'block', mt: 0.5 }}>
                          Sede: {selectedRegion.sedeExamenes}
                        </Typography>
                      )}

                      {/* Informacion de citas (solo texto descriptivo, sin enlaces externos) */}
                      {selectedRegion.sistemaCitas && (
                        <Box sx={{ mt: 1, pt: 1, borderTop: '1px solid #E2E8F0' }}>
                          <Typography variant="caption" sx={{ fontWeight: 600, color: '#334155', display: 'block' }}>
                            Sistema de citas: {selectedRegion.sistemaCitas.nombre}
                          </Typography>
                          {selectedRegion.sistemaCitas.nota && (
                            <Typography variant="caption" sx={{ color: '#64748B', display: 'block', mt: 0.25 }}>
                              {selectedRegion.sistemaCitas.nota}
                            </Typography>
                          )}
                        </Box>
                      )}
                    </Box>
                  )}

                  {/* Fallback message */}
                  <Typography variant="caption" sx={{ color: '#64748B', display: 'block', mt: 1.5, fontSize: '0.75rem' }}>
                    Para regiones sin código en línea en Págalo.pe, el trámite y pago se realizan de manera presencial en la Dirección Regional de Transportes (DRTC) de tu gobierno regional o en ventanillas del Banco de la Nación.
                  </Typography>
                </Box>
              )}

              {/* Variant Toggle (for tramites that still use variantes, not regionesPago) */}
              {!hasRegiones && tramite.variantes && tramite.variantes.length > 0 && (
                <Box sx={{ mt: 2.5, pt: 2, borderTop: '1px solid #F1F5F9' }}>
                  <Typography variant="caption" sx={{ fontWeight: 700, color: '#334155', textTransform: 'uppercase', letterSpacing: '0.04em', display: 'block', mb: 1 }}>
                    Selecciona modalidad / variante:
                  </Typography>
                  <ToggleButtonGroup
                    value={selectedVariantId}
                    exclusive
                    onChange={(_, newVal) => {
                      if (newVal) setSelectedVariantId(newVal);
                    }}
                    fullWidth
                    size="small"
                  >
                    {tramite.variantes.map((variant) => (
                      <ToggleButton
                        key={variant.id}
                        value={variant.id}
                        sx={{
                          fontWeight: 600,
                          py: 0.75,
                          fontSize: '0.825rem',
                          '&.Mui-selected': {
                            bgcolor: '#0F172A',
                            color: '#FFFFFF',
                            '&:hover': { bgcolor: '#1E293B' },
                          },
                        }}
                      >
                        {variant.nombre} (S/ {variant.costo.toFixed(2)})
                      </ToggleButton>
                    ))}
                  </ToggleButtonGroup>
                </Box>
              )}
            </Box>

            {/* CTAs: Direct official link + Save button */}
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ mb: 4 }}>
              <Button
                component="a"
                href={tramite.fuenteUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="contained"
                size="large"
                endIcon={<OpenInNewIcon fontSize="small" />}
                sx={{
                  flexGrow: 1,
                  py: 1.5,
                  fontSize: '0.95rem',
                  fontWeight: 700,
                  bgcolor: 'primary.main',
                }}
              >
                Iniciar trámite en {tramite.institucion.sigla || 'portal oficial'}
              </Button>

              <Button
                onClick={() => toggleSave(tramite.slug)}
                variant={saved ? 'contained' : 'outlined'}
                color={saved ? 'secondary' : 'inherit'}
                size="large"
                startIcon={saved ? <BookmarkIcon fontSize="small" /> : <BookmarkBorderIcon fontSize="small" />}
                sx={{
                  py: 1.5,
                  px: 3,
                  fontWeight: 600,
                  borderColor: saved ? 'inherit' : '#CBD5E1',
                  color: saved ? '#FFFFFF' : '#334155',
                }}
              >
                {saved ? 'Guardado' : 'Guardar'}
              </Button>
            </Stack>

            {/* Checklist of Requirements */}
            <Box sx={{ mb: 4, bgcolor: '#FFFFFF', borderRadius: 2, border: '1px solid #E2E8F0', p: { xs: 2.5, sm: 3 } }}>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
                <Box>
                  <Typography variant="h3" sx={{ fontSize: '1.2rem', fontWeight: 700, color: '#0F172A' }}>
                    Requisitos y Documentos
                  </Typography>
                  <Typography variant="caption" sx={{ color: '#64748B' }}>
                    Marca los requisitos para verificar que tienes todo antes de iniciar.
                  </Typography>
                </Box>

                <Typography variant="caption" sx={{ fontWeight: 700, color: checkedCount === filteredReqs.length && filteredReqs.length > 0 ? '#166534' : '#64748B' }}>
                  {checkedCount} de {filteredReqs.length} listos
                </Typography>
              </Box>

              {/* Progress bar */}
              <LinearProgress
                variant="determinate"
                value={progress}
                sx={{
                  height: 4,
                  borderRadius: 2,
                  mb: 2,
                  bgcolor: '#F1F5F9',
                  '& .MuiLinearProgress-bar': {
                    bgcolor: progress === 100 ? '#16A34A' : 'primary.main',
                  },
                }}
              />

              {/* Requirements list */}
              <Stack spacing={0.5}>
                {filteredReqs.map((req) => {
                  const isChecked = !!checkedReqs[req.id];
                  return (
                    <Box
                      key={req.id}
                      onClick={() => handleToggleReq(req.id)}
                      sx={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: 1.25,
                        py: 1,
                        px: 1,
                        borderRadius: 1,
                        cursor: 'pointer',
                        transition: 'background-color 0.15s ease',
                        '&:hover': {
                          bgcolor: '#F8FAFC',
                        },
                      }}
                    >
                      <Checkbox
                        checked={isChecked}
                        onChange={() => handleToggleReq(req.id)}
                        size="small"
                        sx={{ p: 0, mt: 0.25, color: '#94A3B8', '&.Mui-checked': { color: '#16A34A' } }}
                      />
                      <Box sx={{ flexGrow: 1 }}>
                        <Typography
                          variant="body2"
                          sx={{
                            color: isChecked ? '#166534' : '#1E293B',
                            fontWeight: isChecked ? 600 : 400,
                            textDecoration: isChecked ? 'line-through' : 'none',
                            lineHeight: 1.45,
                            fontSize: '0.875rem',
                          }}
                        >
                          {req.descripcion}
                        </Typography>
                        {req.aplicaSi && (
                          <Typography variant="caption" sx={{ color: '#64748B', display: 'block', mt: 0.25 }}>
                            Aplica a: {req.aplicaSi}
                          </Typography>
                        )}
                      </Box>
                    </Box>
                  );
                })}
              </Stack>
            </Box>

            {/* Subtle Ad Slot Placement / Mockup Monetización */}
            <Box
              sx={{
                my: 4,
                py: 3,
                px: 2,
                bgcolor: '#FFFFFF',
                borderRadius: 2,
                border: '1px solid #E2E8F0',
                textAlign: 'center',
              }}
            >
              <Typography variant="caption" sx={{ color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 600, display: 'block', mb: 0.5 }}>
                Espacio Informativo / Patrocinado
              </Typography>
              <Typography variant="body2" sx={{ color: '#64748B', fontSize: '0.8rem' }}>
                Google AdSense Banner (728x90 / Responsivo)
              </Typography>
            </Box>

            {/* Vertical Stepper: Pasos Ordenados */}
            <Box sx={{ mb: 4, bgcolor: '#FFFFFF', borderRadius: 2, border: '1px solid #E2E8F0', p: { xs: 2.5, sm: 3 } }}>
              <Box sx={{ mb: 3 }}>
                <Typography variant="h3" sx={{ fontSize: '1.2rem', fontWeight: 700, color: '#0F172A', mb: 0.5 }}>
                  Paso a Paso del Trámite
                </Typography>
                <Typography variant="body2" sx={{ color: '#64748B' }}>
                  Sigue esta secuencia para completar la gestión sin contratiempos.
                </Typography>
              </Box>

              <Stepper activeStep={activeStep} orientation="vertical" nonLinear>
                {tramite.pasos.map((paso, index) => (
                  <Step key={paso.id} expanded>
                    <StepLabel
                      onClick={() => setActiveStep(index)}
                      sx={{ cursor: 'pointer' }}
                      StepIconProps={{
                        sx: {
                          color: activeStep === index ? 'primary.main' : '#94A3B8',
                          '&.Mui-active': { color: 'primary.main' },
                          '&.Mui-completed': { color: '#16A34A' },
                        },
                      }}
                    >
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <Typography variant="subtitle1" sx={{ fontWeight: 700, color: '#0F172A', fontSize: '0.925rem' }}>
                          Paso {paso.orden}: {paso.titulo}
                        </Typography>
                        {paso.esOpcional && (
                          <Typography variant="caption" sx={{ color: '#D97706', fontWeight: 600 }}>
                            (Opcional)
                          </Typography>
                        )}
                      </Box>
                    </StepLabel>

                    <StepContent>
                      <Box sx={{ pl: 0.5, pb: 2 }}>
                        <Typography variant="body2" sx={{ color: '#334155', mb: 1.5, lineHeight: 1.6, fontSize: '0.875rem' }}>
                          {paso.descripcion}
                        </Typography>

                        <Stack direction="row" spacing={2} sx={{ mb: 1.5, flexWrap: 'wrap' }}>
                          {paso.institucionNombre && (
                            <Typography variant="caption" sx={{ color: '#64748B', fontWeight: 500 }}>
                              Entidad: <strong>{paso.institucionNombre}</strong>
                            </Typography>
                          )}

                          <Typography variant="caption" sx={{ color: '#64748B', fontWeight: 500 }}>
                            Costo:{' '}
                            <strong>
                              {paso.costoTipo === 'gratuito'
                                ? 'Sin costo'
                                : paso.costoMin === paso.costoMax
                                ? `S/ ${paso.costoMin.toFixed(2)}`
                                : `S/ ${paso.costoMin.toFixed(2)} a S/ ${paso.costoMax.toFixed(2)}`}
                            </strong>
                          </Typography>

                          {paso.ubicacion && (
                            <Typography variant="caption" sx={{ color: '#64748B' }}>
                              Lugar: {paso.ubicacion}
                            </Typography>
                          )}
                        </Stack>

                        {(() => {
                          const url = paso.institucionUrl || (
                            (paso.institucionNombre?.toLowerCase().includes('págalo') ||
                             paso.institucionNombre?.toLowerCase().includes('pagalo') ||
                             paso.titulo.toLowerCase().includes('págalo') ||
                             paso.titulo.toLowerCase().includes('pagalo') ||
                             paso.descripcion.toLowerCase().includes('págalo') ||
                             paso.descripcion.toLowerCase().includes('pagalo'))
                              ? 'https://www.pagalo.pe/'
                              : null
                          );

                          if (!url) return null;

                          const isPagalo = url.includes('pagalo.pe');

                          return (
                            <Button
                              component="a"
                              href={url}
                              target="_blank"
                              rel="noopener noreferrer"
                              size="small"
                              variant="outlined"
                              endIcon={<OpenInNewIcon fontSize="small" />}
                              sx={{
                                fontSize: '0.78rem',
                                fontWeight: 700,
                                ...(isPagalo
                                  ? {
                                      borderColor: '#DC2626',
                                      color: '#B91C1C',
                                      bgcolor: '#FEF2F2',
                                      '&:hover': {
                                        borderColor: '#B91C1C',
                                        bgcolor: '#FEE2E2',
                                        color: '#991B1B',
                                      },
                                    }
                                  : {
                                      borderColor: '#CBD5E1',
                                      color: '#334155',
                                      '&:hover': { borderColor: '#94A3B8', bgcolor: '#F8FAFC' },
                                    }),
                              }}
                            >
                              {isPagalo ? 'Pagar en Págalo.pe' : 'Abrir plataforma oficial'}
                            </Button>
                          );
                        })()}
                      </Box>
                    </StepContent>
                  </Step>
                ))}
              </Stepper>
            </Box>

            {/* Accordion: Base Legal */}
            {tramite.baseLegal && (
              <Accordion sx={{ mb: 4, bgcolor: '#FFFFFF', border: '1px solid #E2E8F0', boxShadow: 'none' }}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <GavelOutlinedIcon sx={{ color: '#64748B', fontSize: 18 }} />
                    <Typography variant="subtitle2" sx={{ fontWeight: 600, color: '#0F172A' }}>
                      Base Legal y Marco Normativo
                    </Typography>
                  </Box>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="body2" sx={{ color: '#64748B', lineHeight: 1.6, fontSize: '0.85rem' }}>
                    {tramite.baseLegal}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            )}

            {/* Cobertura Zonal */}
            {tramite.cobertura && tramite.cobertura.length > 0 && (
              <Box sx={{ mb: 4, bgcolor: '#FFFFFF', borderRadius: 2, border: '1px solid #E2E8F0', p: 2.5 }}>
                <Typography variant="subtitle2" sx={{ fontWeight: 700, color: '#0F172A', mb: 1 }}>
                  Cobertura Geográfica
                </Typography>
                <Typography variant="body2" sx={{ color: '#64748B', mb: 1.5, fontSize: '0.85rem' }}>
                  En Lima y regiones, el proveedor del servicio varía según tu distrito:
                </Typography>
                <Stack spacing={1}>
                  {tramite.cobertura.map((cob) => (
                    <Box key={cob.id} sx={{ py: 0.5 }}>
                      <Typography variant="caption" sx={{ fontWeight: 700, color: '#0F172A', display: 'block' }}>
                        {cob.region}:
                      </Typography>
                      <Typography variant="body2" sx={{ color: '#475569', fontSize: '0.8rem' }}>
                        {cob.distrito}
                      </Typography>
                    </Box>
                  ))}
                </Stack>
              </Box>
            )}

            {/* Portales oficiales y verificación en línea para Licencias de Conducir */}
            {(tramite.subgrupo === 'LICENCIAS' ||
              tramite.tags.includes('licencia de conducir') ||
              tramite.tags.includes('brevete') ||
              tramite.slug.includes('brevete') ||
              tramite.slug.includes('licencia-conducir')) && (
              <Box sx={{ mb: 4, bgcolor: '#FFFFFF', borderRadius: 2, border: '1px solid #E2E8F0', p: { xs: 2.5, sm: 3 } }}>
                <Box sx={{ mb: 2 }}>
                  <Typography variant="h3" sx={{ fontSize: '1.2rem', fontWeight: 700, color: '#0F172A', mb: 0.75 }}>
                    Cómo verificar tu licencia A-I, vencimiento y papeletas en línea
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#64748B', lineHeight: 1.5, fontSize: '0.875rem' }}>
                    Tanto de forma previa como al finalizar tu gestión, ingresa a las plataformas oficiales del MTC para revisar el estado de tu habilitación, infracciones y antecedentes de tránsito.
                  </Typography>
                </Box>

                <Box sx={{ overflowX: 'auto', borderRadius: 1.5, border: '1px solid #CBD5E1' }}>
                  <Box
                    component="table"
                    sx={{
                      width: '100%',
                      borderCollapse: 'collapse',
                      fontSize: '0.85rem',
                      textAlign: 'left',
                    }}
                  >
                    <Box component="thead">
                      <Box component="tr" sx={{ bgcolor: '#1E3A5F', color: '#FFFFFF' }}>
                        <Box component="th" sx={{ py: 1.5, px: 2, fontWeight: 700, width: '28%', textTransform: 'uppercase', fontSize: '0.75rem', letterSpacing: '0.04em' }}>
                          Portal
                        </Box>
                        <Box component="th" sx={{ py: 1.5, px: 2, fontWeight: 700, width: '28%', textTransform: 'uppercase', fontSize: '0.75rem', letterSpacing: '0.04em' }}>
                          URL
                        </Box>
                        <Box component="th" sx={{ py: 1.5, px: 2, fontWeight: 700, width: '44%', textTransform: 'uppercase', fontSize: '0.75rem', letterSpacing: '0.04em' }}>
                          Función
                        </Box>
                      </Box>
                    </Box>
                    <Box component="tbody" sx={{ '& tr:nth-of-type(even)': { bgcolor: '#F8FAFC' } }}>
                      <Box component="tr" sx={{ borderBottom: '1px solid #E2E8F0' }}>
                        <Box component="td" sx={{ py: 1.5, px: 2, fontWeight: 700, color: '#0F172A' }}>
                          Récord del conductor
                        </Box>
                        <Box component="td" sx={{ py: 1.5, px: 2 }}>
                          <Box
                            component="a"
                            href="https://recordconductor.mtc.gob.pe/"
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{ color: '#2563EB', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}
                          >
                            recordconductor.mtc.gob.pe
                          </Box>
                        </Box>
                        <Box component="td" sx={{ py: 1.5, px: 2, color: '#475569' }}>
                          Revisa la vigencia, fecha de caducidad, historial de infracciones y récord integral del piloto
                        </Box>
                      </Box>

                      <Box component="tr" sx={{ borderBottom: '1px solid #E2E8F0' }}>
                        <Box component="td" sx={{ py: 1.5, px: 2, fontWeight: 700, color: '#0F172A' }}>
                          Portal Único del Conductor
                        </Box>
                        <Box component="td" sx={{ py: 1.5, px: 2 }}>
                          <Box
                            component="a"
                            href="https://licencias.mtc.gob.pe/"
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{ color: '#2563EB', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}
                          >
                            licencias.mtc.gob.pe
                          </Box>
                        </Box>
                        <Box component="td" sx={{ py: 1.5, px: 2, color: '#475569' }}>
                          Administración, consulta y descarga de la licencia de conducir en formato digital
                        </Box>
                      </Box>

                      <Box component="tr" sx={{ borderBottom: '1px solid #E2E8F0' }}>
                        <Box component="td" sx={{ py: 1.5, px: 2, fontWeight: 700, color: '#0F172A' }}>
                          Portal de trámites
                        </Box>
                        <Box component="td" sx={{ py: 1.5, px: 2 }}>
                          <Box
                            component="a"
                            href="https://licencias-tramite.mtc.gob.pe/"
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{ color: '#2563EB', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}
                          >
                            licencias-tramite.mtc.gob.pe
                          </Box>
                        </Box>
                        <Box component="td" sx={{ py: 1.5, px: 2, color: '#475569' }}>
                          Inicio de solicitudes y monitoreo en tiempo real del avance del procedimiento
                        </Box>
                      </Box>

                      <Box component="tr" sx={{ borderBottom: '1px solid #E2E8F0' }}>
                        <Box component="td" sx={{ py: 1.5, px: 2, fontWeight: 700, color: '#0F172A' }}>
                          Registro Nacional de Sanciones
                        </Box>
                        <Box component="td" sx={{ py: 1.5, px: 2 }}>
                          <Box
                            component="a"
                            href="https://sns.mtc.gob.pe/"
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{ color: '#2563EB', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}
                          >
                            sns.mtc.gob.pe
                          </Box>
                        </Box>
                        <Box component="td" sx={{ py: 1.5, px: 2, color: '#475569' }}>
                          Verificación de infracciones aplicadas y multas pendientes de cancelación
                        </Box>
                      </Box>

                      <Box component="tr" sx={{ borderBottom: '1px solid #E2E8F0' }}>
                        <Box component="td" sx={{ py: 1.5, px: 2, fontWeight: 700, color: '#0F172A' }}>
                          Sistema de Licencias por Puntos
                        </Box>
                        <Box component="td" sx={{ py: 1.5, px: 2 }}>
                          <Box
                            component="a"
                            href="https://slcp.mtc.gob.pe/"
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{ color: '#2563EB', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}
                          >
                            slcp.mtc.gob.pe
                          </Box>
                        </Box>
                        <Box component="td" sx={{ py: 1.5, px: 2, color: '#475569' }}>
                          Control y acumulación de puntos por penalizaciones al Reglamento de Tránsito
                        </Box>
                      </Box>

                      <Box component="tr" sx={{ borderBottom: '1px solid #E2E8F0' }}>
                        <Box component="td" sx={{ py: 1.5, px: 2, fontWeight: 700, color: '#0F172A' }}>
                          Simulacro examen conocimientos
                        </Box>
                        <Box component="td" sx={{ py: 1.5, px: 2 }}>
                          <Box
                            component="a"
                            href="https://sierdqtt.mtc.gob.pe/"
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{ color: '#2563EB', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}
                          >
                            sierdqtt.mtc.gob.pe
                          </Box>
                        </Box>
                        <Box component="td" sx={{ py: 1.5, px: 2, color: '#475569' }}>
                          Ensayo gratuito para la prueba de reglas con el banco de preguntas oficial
                        </Box>
                      </Box>

                      <Box component="tr" sx={{ borderBottom: '1px solid #E2E8F0' }}>
                        <Box component="td" sx={{ py: 1.5, px: 2, fontWeight: 700, color: '#0F172A' }}>
                          Centros médicos autorizados
                        </Box>
                        <Box component="td" sx={{ py: 1.5, px: 2 }}>
                          <Box
                            component="a"
                            href="https://rec.mtc.gob.pe/RegistroEntidadesCapacitadoras/da/daCentrosMedicos.aspx"
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{ color: '#2563EB', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}
                          >
                            rec.mtc.gob.pe/.../CentroMedico
                          </Box>
                        </Box>
                        <Box component="td" sx={{ py: 1.5, px: 2, color: '#475569' }}>
                          Padrón oficial de establecimientos de salud acreditados para la evaluación médica
                        </Box>
                      </Box>

                      <Box component="tr" sx={{ borderBottom: '1px solid #E2E8F0' }}>
                        <Box component="td" sx={{ py: 1.5, px: 2, fontWeight: 700, color: '#0F172A' }}>
                          Citas MML (Lima Metropolitana)
                        </Box>
                        <Box component="td" sx={{ py: 1.5, px: 2, color: '#475569' }}>
                          Plataforma digital de la MML
                        </Box>
                        <Box component="td" sx={{ py: 1.5, px: 2, color: '#475569' }}>
                          Reserva de turnos para atención en la sede Comas (categoría A) — a partir del 22-abr-2026
                        </Box>
                      </Box>

                      <Box component="tr" sx={{ borderBottom: '1px solid #E2E8F0' }}>
                        <Box component="td" sx={{ py: 1.5, px: 2, fontWeight: 700, color: '#0F172A' }}>
                          Citas GORE Callao
                        </Box>
                        <Box component="td" sx={{ py: 1.5, px: 2 }}>
                          <Box
                            component="a"
                            href="https://citasgrc.regioncallao.gob.pe/"
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{ color: '#2563EB', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}
                          >
                            citasGRC GORE Callao
                          </Box>
                        </Box>
                        <Box component="td" sx={{ py: 1.5, px: 2, color: '#475569' }}>
                          Calendarización de evaluaciones en el Callao (plataforma independiente, plazo de 24 a 48 horas)
                        </Box>
                      </Box>

                      <Box component="tr">
                        <Box component="td" sx={{ py: 1.5, px: 2, fontWeight: 700, color: '#0F172A' }}>
                          Trámite oficial Callao
                        </Box>
                        <Box component="td" sx={{ py: 1.5, px: 2 }}>
                          <Box
                            component="a"
                            href="https://www.gob.pe/15243"
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{ color: '#2563EB', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}
                          >
                            gob.pe/15243
                          </Box>
                        </Box>
                        <Box component="td" sx={{ py: 1.5, px: 2, color: '#475569' }}>
                          Portal informativo del procedimiento A-I por primera emisión en la jurisdicción del Callao
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
            )}
          </Grid2>

          {/* Sidebar */}
          <Grid2 size={{ xs: 12, md: 4 }}>
            {/* Payment Channels */}
            {tramite.canalesPago && tramite.canalesPago.length > 0 && (
              <Box sx={{ mb: 3, bgcolor: '#FFFFFF', borderRadius: 2, border: '1px solid #E2E8F0', p: 2.5 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1.5 }}>
                  <AccountBalanceWalletOutlinedIcon sx={{ color: 'primary.main', fontSize: 18 }} />
                  <Typography variant="subtitle2" sx={{ fontWeight: 700, color: '#0F172A' }}>
                    Canales de Pago Autorizados
                  </Typography>
                </Box>

                <Stack spacing={1}>
                  {tramite.canalesPago.map((canal) => (
                    <Box
                      key={canal.id}
                      sx={{
                        py: 0.75,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        borderBottom: '1px solid #F1F5F9',
                      }}
                    >
                      <Typography variant="body2" sx={{ fontWeight: 600, color: '#1E293B', fontSize: '0.82rem' }}>
                        {canal.nombre}
                      </Typography>
                      <Typography variant="caption" sx={{ color: '#64748B' }}>
                        {canal.tipo === 'online' ? 'Online' : canal.tipo === 'agencia' ? 'Agencia' : 'Agente'}
                      </Typography>
                    </Box>
                  ))}
                </Stack>
              </Box>
            )}

            {/* Institution card */}
            <Box sx={{ mb: 3, bgcolor: '#FFFFFF', borderRadius: 2, border: '1px solid #E2E8F0', p: 2.5 }}>
              <Typography variant="caption" sx={{ textTransform: 'uppercase', color: '#64748B', fontWeight: 600, letterSpacing: '0.04em', display: 'block', mb: 1 }}>
                Entidad Responsable
              </Typography>
              <Typography variant="subtitle1" sx={{ fontWeight: 700, color: '#0F172A', mb: 0.5, lineHeight: 1.3 }}>
                {tramite.institucion.nombre}
              </Typography>
              <Typography variant="body2" sx={{ color: '#64748B', fontSize: '0.82rem', mb: 2 }}>
                {tramite.institucion.descripcion}
              </Typography>
              <Button
                component="a"
                href={tramite.institucion.webOficial}
                target="_blank"
                rel="noopener noreferrer"
                size="small"
                variant="outlined"
                fullWidth
                endIcon={<OpenInNewIcon fontSize="small" />}
                sx={{ borderColor: '#CBD5E1', color: '#334155', fontWeight: 600, fontSize: '0.8rem' }}
              >
                Visitar web de {tramite.institucion.sigla || 'la entidad'}
              </Button>
            </Box>

            {/* Anti-fraud advisory */}
            <Box sx={{ bgcolor: '#FFFBEB', borderRadius: 2, border: '1px solid #FDE68A', p: 2, mb: 3 }}>
              <Typography variant="subtitle2" sx={{ fontWeight: 700, color: '#92400E', mb: 0.5, fontSize: '0.85rem' }}>
                Advertencia Antifraude
              </Typography>
              <Typography variant="body2" sx={{ color: '#78350F', fontSize: '0.78rem', lineHeight: 1.5 }}>
                Nunca pagues a tramitadores informales ni a cuentas personales. Las tasas oficiales solo se abonan en el Banco de la Nación, Págalo.pe o plataformas oficiales de la entidad.
              </Typography>
            </Box>
          </Grid2>
        </Grid2>

        {/* Related Trámites */}
        {relatedTramites.length > 0 && (
          <Box sx={{ mt: 8, pt: 6, borderTop: '1px solid #E2E8F0' }}>
            <Box sx={{ mb: 3 }}>
              <Typography variant="h3" sx={{ fontSize: '1.35rem', fontWeight: 700, color: '#0F172A', mb: 0.5 }}>
                Trámites Relacionados
              </Typography>
              <Typography variant="body2" sx={{ color: '#64748B' }}>
                Otros procedimientos de {tramite.categoria.nombre} o {tramite.institucion.sigla || 'esta entidad'}.
              </Typography>
            </Box>

            <Grid2 container spacing={2.5}>
              {relatedTramites.map((rel) => (
                <Grid2 key={rel.id} size={{ xs: 12, sm: 6, md: 3 }}>
                  <TramiteCard tramite={rel} compact />
                </Grid2>
              ))}
            </Grid2>
          </Box>
        )}
      </Container>
    </Box>
  );
}
