'use client';

import React, { useState } from 'react';
import {
  Box,
  Typography,
  Grid2,
  Card,
  CardActionArea,
  Avatar,
  Collapse,
  Divider,
  Button,
} from '@mui/material';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Institucion, Tramite } from '@/types/tramite';
import { TRAMITES } from '@/data/mockData';
import Link from './Link';

interface InstitucionesGridProps {
  instituciones: (Institucion & { tramiteCount: number })[];
}

function getPrecioDisplay(t: Tramite): string {
  if (t.costoPrincipal && t.costoPrincipal > 0) {
    if (Number.isInteger(t.costoPrincipal)) {
      return `S/ ${t.costoPrincipal}`;
    }
    return `S/ ${t.costoPrincipal.toFixed(2)}`;
  }
  if (t.costoPrincipal === 0 || t.costoResumen?.toLowerCase().includes('gratis') || t.costoResumen?.toLowerCase().includes('gratuito')) {
    return 'Gratis';
  }
  const firstPart = t.costoResumen?.split('/')[0]?.split('(')[0]?.trim();
  return firstPart || 'S/ 0';
}

function getSubtitle(inst: Institucion & { tramiteCount: number }): string {
  const count = inst.tramiteCount ?? 0;
  if (inst.id === 'inst-muni-generica' || inst.slug === 'municipalidad-distrital') {
    return `${count} trámites · varía por distrito`;
  }
  return `${count} ${count === 1 ? 'trámite' : 'trámites'}`;
}

export default function InstitucionesGrid({ instituciones }: InstitucionesGridProps) {
  // Start with RENIEC expanded by default as requested in Image 1
  const [expandedId, setExpandedId] = useState<string | null>('inst-reniec');

  const toggleExpand = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  // Priority order for institutions
  const priorityOrder = [
    'inst-reniec',
    'inst-mtc',
    'inst-sunat',
    'inst-migraciones',
    'inst-pnp',
    'inst-pj',
    'inst-inpe',
    'inst-sunarp',
    'inst-mtpe',
    'inst-sis',
    'inst-muni-generica',
    'inst-sedapal',
    'inst-luz-sur',
  ];

  // Include all institutions that have registered trámites
  const institucionesConTramites = instituciones.filter(
    (inst) => (inst.tramiteCount || 0) > 0
  );

  const sortedInstituciones = [...institucionesConTramites].sort((a, b) => {
    const indexA = priorityOrder.indexOf(a.id);
    const indexB = priorityOrder.indexOf(b.id);
    if (indexA !== -1 && indexB !== -1) return indexA - indexB;
    if (indexA !== -1) return -1;
    if (indexB !== -1) return 1;
    return (b.tramiteCount || 0) - (a.tramiteCount || 0);
  });

  return (
    <Box sx={{ mb: { xs: 5, md: 7 } }}>
      {/* Section Header: Explora por institución & Ver todas */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          mb: { xs: 2, sm: 2.5 },
        }}
      >
        <Box>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '1.2rem', sm: '1.45rem', md: '1.65rem' },
              fontWeight: 700,
              color: '#0F172A',
              letterSpacing: '-0.015em',
            }}
          >
            Explora por institución
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: '#64748B',
              mt: 0.5,
              display: { xs: 'none', sm: 'block' },
            }}
          >
            Accede al catálogo de trámites directos según la entidad pública o prestadora de servicios.
          </Typography>
        </Box>

        {/* 'Ver todas' button always visible including mobile */}
        <Button
          component={Link}
          href="/instituciones"
          size="small"
          endIcon={<ArrowForwardIcon sx={{ fontSize: 14 }} />}
          sx={{
            color: 'info.main',
            fontWeight: 600,
            fontSize: { xs: '0.85rem', sm: '0.9rem' },
            textTransform: 'none',
            p: { xs: '4px 8px', sm: '6px 12px' },
            minWidth: 'auto',
            '&:hover': {
              bgcolor: 'rgba(37, 99, 235, 0.06)',
            },
          }}
        >
          Ver todas
        </Button>
      </Box>

      {/* Cards List / Grid */}
      <Grid2 container spacing={{ xs: 1.5, sm: 2, md: 2.5 }}>
        {sortedInstituciones.map((inst) => {
          const isExpanded = expandedId === inst.id;
          const instTramites = TRAMITES.filter((t) => t.institucionId === inst.id).sort(
            (a, b) => b.frecuenciaBusqueda - a.frecuenciaBusqueda
          );

          // Group by subgrupo or category
          const groupsMap: { [groupKey: string]: { title: string; tramites: Tramite[] } } = {};
          instTramites.forEach((t) => {
            const groupKey = t.subgrupo || t.categoria?.nombre || 'TRÁMITES';
            if (!groupsMap[groupKey]) {
              groupsMap[groupKey] = {
                title: groupKey.toUpperCase(),
                tramites: [],
              };
            }
            groupsMap[groupKey].tramites.push(t);
          });

          return (
            <Grid2 key={inst.id} size={{ xs: 12, md: 6 }}>
              <Card
                sx={{
                  bgcolor: '#FFFFFF',
                  borderRadius: { xs: '16px', sm: '16px' },
                  border: '1px solid',
                  borderColor: isExpanded ? '#CBD5E1' : '#E2E8F0',
                  boxShadow: isExpanded
                    ? '0 4px 16px rgba(15, 23, 42, 0.04)'
                    : '0 1px 3px rgba(15, 23, 42, 0.02)',
                  transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
                  overflow: 'hidden',
                  '&:hover': {
                    borderColor: '#94A3B8',
                  },
                }}
              >
                {/* Collapsed Card Header */}
                <CardActionArea
                  onClick={() => toggleExpand(inst.id)}
                  sx={{
                    p: { xs: 1.75, sm: 2 },
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.75 }}>
                    {/* Squircle Avatar with light blue background and blue bold text */}
                    <Avatar
                      sx={{
                        bgcolor: '#EBF3FE',
                        color: '#1D4ED8',
                        fontWeight: 800,
                        fontSize: inst.logoIniciales.length > 2 ? '0.78rem' : '0.92rem',
                        width: 44,
                        height: 44,
                        borderRadius: '12px',
                        boxShadow: 'inset 0 0 0 1px rgba(29, 78, 216, 0.08)',
                      }}
                    >
                      {inst.logoIniciales}
                    </Avatar>

                    <Box>
                      <Typography
                        variant="subtitle2"
                        sx={{
                          fontWeight: 700,
                          color: '#0F172A',
                          fontSize: { xs: '0.95rem', sm: '1rem' },
                          lineHeight: 1.2,
                        }}
                      >
                        {inst.sigla || inst.nombre}
                      </Typography>
                      <Typography
                        variant="caption"
                        sx={{
                          color: '#64748B',
                          fontSize: '0.8rem',
                          display: 'block',
                          mt: 0.25,
                        }}
                      >
                        {getSubtitle(inst)}
                      </Typography>
                    </Box>
                  </Box>

                  {/* Sleek animated arrow */}
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#64748B',
                      transition: 'transform 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
                      transform: isExpanded ? 'rotate(90deg)' : 'rotate(0deg)',
                    }}
                  >
                    <KeyboardArrowRightIcon sx={{ fontSize: 22 }} />
                  </Box>
                </CardActionArea>

                {/* Expanded Minimalist Drawer with delicate separation lines */}
                <Collapse in={isExpanded} timeout="auto" unmountOnExit>
                  <Box
                    sx={{
                      bgcolor: '#F0F6FE',
                      mx: { xs: 1.5, sm: 2 },
                      mb: { xs: 1.5, sm: 2 },
                      p: { xs: 2, sm: 2.25 },
                      borderRadius: '12px',
                      border: '1px solid rgba(226, 232, 240, 0.7)',
                    }}
                  >
                    {/* Groups by Subcategory (e.g. IDENTIDAD, ACTAS) */}
                    {Object.values(groupsMap).map((group, groupIdx) => (
                      <Box
                        key={group.title}
                        sx={{
                          mt: groupIdx > 0 ? 2 : 0,
                          mb: 1,
                        }}
                      >
                        {/* Subcategory Label */}
                        <Typography
                          variant="caption"
                          sx={{
                            fontWeight: 700,
                            color: '#1D4ED8',
                            textTransform: 'uppercase',
                            fontSize: '0.72rem',
                            letterSpacing: '0.06em',
                            display: 'block',
                            mb: 1,
                          }}
                        >
                          {group.title}
                        </Typography>

                        {/* List of Trámites with Divider Lines */}
                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                          {group.tramites.map((t, tIdx) => (
                            <React.Fragment key={t.id}>
                              <Box
                                component={Link}
                                href={`/tramite/${t.slug}`}
                                sx={{
                                  display: 'flex',
                                  alignItems: 'center',
                                  justifyContent: 'space-between',
                                  py: 1,
                                  px: 0.75,
                                  borderRadius: '6px',
                                  textDecoration: 'none',
                                  color: 'inherit',
                                  transition: 'background-color 0.15s ease',
                                  '&:hover': {
                                    bgcolor: 'rgba(255, 255, 255, 0.8)',
                                  },
                                }}
                              >
                                <Typography
                                  variant="body2"
                                  sx={{
                                    fontWeight: 500,
                                    color: '#1E293B',
                                    fontSize: '0.86rem',
                                    pr: 2,
                                    lineHeight: 1.35,
                                  }}
                                >
                                  {t.nombreCorto || t.nombre}
                                </Typography>

                                <Typography
                                  variant="body2"
                                  sx={{
                                    fontWeight: 600,
                                    color: '#475569',
                                    fontSize: '0.82rem',
                                    whiteSpace: 'nowrap',
                                    flexShrink: 0,
                                  }}
                                >
                                  {getPrecioDisplay(t)}
                                </Typography>
                              </Box>

                              {/* Delicate separation line between tramites as requested */}
                              {tIdx < group.tramites.length - 1 && (
                                <Divider
                                  sx={{
                                    borderColor: '#E2E8F0',
                                    my: 0.2,
                                  }}
                                />
                              )}
                            </React.Fragment>
                          ))}
                        </Box>
                      </Box>
                    ))}
                  </Box>
                </Collapse>
              </Card>
            </Grid2>
          );
        })}
      </Grid2>
    </Box>
  );
}
