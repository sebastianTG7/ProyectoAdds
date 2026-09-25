import React from 'react';
import { Metadata } from 'next';
import ControlDashboardView from './ControlDashboardView';

export const metadata: Metadata = {
  title: 'Panel de Control y Auditoría de Trámites | ComoTramito',
  description: 'Herramienta interna para monitoreo de vigencia, tasas oficiales y control de calidad de trámites.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function ControlPage() {
  return <ControlDashboardView />;
}
