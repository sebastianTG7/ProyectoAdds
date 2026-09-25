import React from 'react';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getAllTramites, getTramiteBySlug, getRelatedTramites } from '@/data/tramitesService';
import TramiteDetailView from '@/components/TramiteDetailView';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const tramites = getAllTramites();
  return tramites.map((t) => ({
    slug: t.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const tramite = getTramiteBySlug(slug);

  if (!tramite) {
    return {
      title: 'Trámite no encontrado — ComoTramito',
    };
  }

  return {
    title: `${tramite.nombre} — Costo, Requisitos y Pasos | ComoTramito`,
    description: `${tramite.descripcion} Costo: ${tramite.costoResumen}. Tiempo estimado: ${tramite.duracionTexto}.`,
  };
}

export default async function TramitePage({ params }: PageProps) {
  const { slug } = await params;
  const tramite = getTramiteBySlug(slug);

  if (!tramite) {
    notFound();
  }

  const relatedTramites = getRelatedTramites(tramite.id, 4);

  return <TramiteDetailView tramite={tramite} relatedTramites={relatedTramites} />;
}
