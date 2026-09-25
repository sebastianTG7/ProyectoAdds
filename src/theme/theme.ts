'use client';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#B91C1C', // Dark crimson red (Peru red - sober & professional)
      light: '#DC2626',
      dark: '#991B1B',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#0F172A', // Slate dark
      light: '#334155',
      dark: '#020617',
      contrastText: '#FFFFFF',
    },
    background: {
      default: '#F8FAFC',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#0F172A',
      secondary: '#475569',
    },
    divider: '#E2E8F0',
    info: {
      main: '#2563EB',
      light: '#DBEAFE',
      dark: '#1D4ED8',
    },
    success: {
      main: '#15803D',
      light: '#DCFCE7',
      dark: '#166534',
    },
    warning: {
      main: '#D97706',
      light: '#FEF3C7',
      dark: '#B45309',
    },
  },
  typography: {
    fontFamily: ['"Inter"', '"Roboto"', '"Helvetica Neue"', 'Arial', 'sans-serif'].join(','),
    h1: {
      fontWeight: 700,
      letterSpacing: '-0.02em',
      fontSize: '2.25rem',
      lineHeight: 1.2,
      color: '#0F172A',
    },
    h2: {
      fontWeight: 700,
      letterSpacing: '-0.015em',
      fontSize: '1.75rem',
      lineHeight: 1.25,
      color: '#0F172A',
    },
    h3: {
      fontWeight: 600,
      letterSpacing: '-0.01em',
      fontSize: '1.35rem',
      lineHeight: 1.3,
      color: '#0F172A',
    },
    h4: {
      fontWeight: 600,
      fontSize: '1.15rem',
      lineHeight: 1.35,
      color: '#0F172A',
    },
    subtitle1: {
      fontSize: '1rem',
      lineHeight: 1.5,
      color: '#475569',
    },
    subtitle2: {
      fontSize: '0.875rem',
      fontWeight: 600,
      lineHeight: 1.4,
      color: '#334155',
    },
    body1: {
      fontSize: '0.9375rem',
      lineHeight: 1.6,
      color: '#1E293B',
    },
    body2: {
      fontSize: '0.84rem',
      lineHeight: 1.5,
      color: '#64748B',
    },
    button: {
      textTransform: 'none',
      fontWeight: 600,
    },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          boxShadow: 'none',
          padding: '8px 18px',
          fontWeight: 600,
          '&:hover': {
            boxShadow: 'none',
          },
        },
        containedPrimary: {
          backgroundColor: '#B91C1C',
          '&:hover': {
            backgroundColor: '#991B1B',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 10,
          border: '1px solid #E2E8F0',
          boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.04), 0 1px 2px 0 rgba(0, 0, 0, 0.02)',
          transition: 'all 0.2s ease-in-out',
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 6,
          fontWeight: 500,
          fontSize: '0.8125rem',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#0F172A',
          boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
          borderBottom: '1px solid #1E293B',
        },
      },
    },
    MuiAccordion: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          border: '1px solid #E2E8F0',
          '&:before': {
            display: 'none',
          },
          boxShadow: 'none',
          marginBottom: 8,
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: 8,
            backgroundColor: '#FFFFFF',
          },
        },
      },
    },
  },
});

export default theme;
