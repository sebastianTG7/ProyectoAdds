import React from 'react';
import type { Metadata } from 'next';
import { Container, Box, Typography, Grid2, Button } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import AccountTreeOutlinedIcon from '@mui/icons-material/AccountTreeOutlined';
import { getAllGuias } from '@/data/tramitesService';
import GuiasFeatured from '@/components/GuiasFeatured';
import Link from '@/components/Link';

export const metadata: Metadata = {
  title: 'Guías Multientidad Paso a Paso — ComoTramito',
  description: 'Rutas completas y ordenadas para metas complejas que requieren trámites en múltiples entidades públicas.',
};

export default function GuiasIndexPage() {
  const guias = getAllGuias();

  return (
    <Box sx={{ bgcolor: '#F8FAFC', minHeight: '80vh', py: 5 }}>
      <Container maxWidth="lg">
        <Box sx={{ mb: 4 }}>
          <Button
            component={Link}
            href="/"
            startIcon={<ArrowBackIcon fontSize="small" />}
            size="small"
            sx={{ color: '#64748B', fontWeight: 600, mb: 1.5 }}
          >
            Inicio
          </Button>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 1 }}>
            <AccountTreeOutlinedIcon sx={{ color: 'primary.main', fontSize: 32 }} />
            <Typography variant="h1" sx={{ fontSize: { xs: '1.75rem', md: '2.2rem' }, fontWeight: 800 }}>
              Guías Multientidad
            </Typography>
          </Box>
          <Typography variant="body1" sx={{ color: '#64748B', maxWidth: 720 }}>
            Procesos secuenciales de gran envergadura (como comprar un vehículo o abrir una empresa) descompuestos en trámites independientes para avanzar paso a paso sin perderse.
          </Typography>
        </Box>

        <GuiasFeatured guias={guias} />
      </Container>
    </Box>
  );
}
