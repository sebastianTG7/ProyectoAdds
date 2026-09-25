import React from 'react';
import { Container, Box, Typography, Button } from '@mui/material';
import Link from '@/components/Link';

export default function NotFound() {
  return (
    <Box sx={{ bgcolor: '#F8FAFC', minHeight: '70vh', display: 'flex', alignItems: 'center', py: 8 }}>
      <Container maxWidth="sm" sx={{ textAlign: 'center' }}>
        <Typography variant="h1" sx={{ fontSize: '3.5rem', fontWeight: 800, color: '#0F172A', mb: 1 }}>
          404
        </Typography>
        <Typography variant="h2" sx={{ fontSize: '1.4rem', fontWeight: 700, mb: 2, color: '#334155' }}>
          Página o trámite no encontrado
        </Typography>
        <Typography variant="body1" sx={{ color: '#64748B', mb: 4, lineHeight: 1.6 }}>
          El enlace al que intentas acceder no existe o fue reubicado en nuestro directorio.
        </Typography>
        <Button
          component={Link}
          href="/"
          variant="contained"
          sx={{ bgcolor: 'primary.main', fontWeight: 700, px: 3, py: 1.2 }}
        >
          Ir al inicio
        </Button>
      </Container>
    </Box>
  );
}
