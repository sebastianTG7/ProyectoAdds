import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '@/theme/theme';
import { SavedTramitesProvider } from '@/context/SavedTramitesContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Box } from '@mui/material';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: 'ComoTramito — Directorio y Guía Rápida de Trámites Oficiales del Perú',
  description:
    'Encuentra costos exactos, tiempos, requisitos y pasos claros para sacar DNI, brevete, pasaporte, antecedentes, RUC y trámites municipales en Perú.',
  keywords: [
    'comotramito',
    'tramites peru',
    'reniec',
    'sunat',
    'mtc',
    'brevete',
    'pasaporte',
    'duplicado dni',
    'antecedentes penales',
    'certificado unico laboral',
    'tupa peru',
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={inter.variable}>
      <body style={{ margin: 0, padding: 0, backgroundColor: '#F8FAFC', minHeight: '100vh' }}>
        <AppRouterCacheProvider options={{ key: 'css' }}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <SavedTramitesProvider>
              <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
                <Header />
                <Box component="main" sx={{ flexGrow: 1 }}>
                  {children}
                </Box>
                <Footer />
              </Box>
            </SavedTramitesProvider>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
