import React from 'react';
import type { Metadata } from 'next';
import SavedPageView from '@/components/SavedPageView';

export const metadata: Metadata = {
  title: 'Mis Trámites Guardados — ComoTramito',
  description: 'Tus fichas de trámites guardadas en tu navegador para consulta rápida.',
};

export default function GuardadosPage() {
  return <SavedPageView />;
}
