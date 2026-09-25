import React, { Suspense } from 'react';
import type { Metadata } from 'next';
import { Box, Container, Skeleton } from '@mui/material';
import SearchPageView from '@/components/SearchPageView';
import { getAllCategorias, getAllInstituciones } from '@/data/tramitesService';

export const metadata: Metadata = {
  title: 'Buscador de Trámites — ComoTramito',
  description: 'Encuentra y filtra todos los trámites del Perú por institución, costo, categoría y modalidad.',
};

function SearchLoadingFallback() {
  return (
    <Box sx={{ bgcolor: '#F8FAFC', minHeight: '80vh', py: 5 }}>
      <Container maxWidth="lg">
        <Skeleton variant="text" width={300} height={50} sx={{ mb: 1 }} />
        <Skeleton variant="text" width={450} height={25} sx={{ mb: 4 }} />
        <Skeleton variant="rounded" width="100%" height={120} sx={{ mb: 4 }} />
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr' }, gap: 3 }}>
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <Skeleton key={i} variant="rounded" height={220} />
          ))}
        </Box>
      </Container>
    </Box>
  );
}

export default function BuscarPage() {
  const categorias = getAllCategorias();
  const instituciones = getAllInstituciones();

  return (
    <Suspense fallback={<SearchLoadingFallback />}>
      <SearchPageView initialCategorias={categorias} initialInstituciones={instituciones} />
    </Suspense>
  );
}
