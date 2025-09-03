// theme/muiTheme.js
import { createTheme } from '@mui/material/styles';

export const createCustomTheme = (isDarkMode) => {
  const lightTheme = {
    // Light Mode Variables
    bgPrimary: '#f8fbff',
    bgSecondary: '#e8f4f8',
    bgCard: '#ffffff',
    textPrimary: '#2c3e50',
    textSecondary: '#718096',
    textTertiary: '#4a5568',
    borderColor: '#e2e8f0',
    shadowLight: 'rgba(0, 0, 0, 0.08)',
    shadowMedium: 'rgba(0, 0, 0, 0.1)',
    glassmorphism: 'rgba(255, 255, 255, 0.9)',

    // Card specific variables
    weekCardBg: '#f0f9ff',
    weekCardBorder: '#dbeafe',
    achievementBg: '#ffffff',
    achievementBorder: '#f0fdf4',
    dayCardBg: '#fef3c7',
    dayCardBorder: '#fed7aa',
    projectCardBg: '#f0fdf4',
    projectCardBorder: '#dcfce7',
    learningCardBg: '#fef7cd',
    learningCardBorder: '#fde68a',

    // Accent colors
    primaryBlue: '#2b6cb0',
    successGreen: '#10b981',
    warningOrange: '#f59e0b',
    purpleAccent: '#7c3aed',
  };

  const darkTheme = {
    // Dark Mode Variables
    bgPrimary: '#0f0f1a',
    bgSecondary: '#1a1a2e',
    bgCard: '#252540',
    textPrimary: '#ffffff',
    textSecondary: '#c7d2fe',
    textTertiary: '#e0e7ff',
    borderColor: '#3b3b5c',
    shadowLight: 'rgba(0, 0, 0, 0.4)',
    shadowMedium: 'rgba(0, 0, 0, 0.6)',
    glassmorphism: 'rgba(37, 37, 64, 0.8)',

    // Beautiful Dark Card Variables
    weekCardBg: '#1e1b4b',
    weekCardBorder: '#4338ca',
    achievementBg: '#1f2937',
    achievementBorder: '#059669',
    dayCardBg: '#451a03',
    dayCardBorder: '#f59e0b',
    projectCardBg: '#064e3b',
    projectCardBorder: '#10b981',
    learningCardBg: '#451a03',
    learningCardBorder: '#eab308',

    // Vibrant Accent Colors for Dark Mode
    primaryBlue: '#6366f1',
    successGreen: '#22d3ee',
    warningOrange: '#fb923c',
    purpleAccent: '#c084fc',
  };

  const colors = isDarkMode ? darkTheme : lightTheme;

  return createTheme({
    palette: {
      mode: isDarkMode ? 'dark' : 'light',
      primary: {
        main: colors.primaryBlue,
      },
      secondary: {
        main: colors.successGreen,
      },
      background: {
        default: colors.bgPrimary,
        paper: colors.bgCard,
      },
      text: {
        primary: colors.textPrimary,
        secondary: colors.textSecondary,
      },
      // Custom colors
      custom: colors,
    },
    typography: {
      fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
      h1: {
        fontSize: '2.5rem',
        fontWeight: 600,
        marginBottom: '10px',
      },
      h2: {
        fontSize: '1.4rem',
        fontWeight: 600,
        marginBottom: '15px',
      },
      h3: {
        fontSize: '1.3rem',
        fontWeight: 600,
        marginBottom: '10px',
      },
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          '*': {
            transition: 'color 0.3s ease, background-color 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease',
          },
          body: {
            background: `linear-gradient(135deg, ${colors.bgPrimary} 0%, ${colors.bgSecondary} 100%)`,
            minHeight: '100vh',
            lineHeight: 1.6,
            margin: 0,
            padding: 0,
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: 16,
            boxShadow: `0 4px 20px ${colors.shadowLight}`,
            border: `1px solid ${colors.borderColor}`,
            transition: 'all 0.3s ease',
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 20,
            textTransform: 'none',
            fontWeight: 500,
            transition: 'all 0.3s ease',
            '&:hover': {
              transform: 'translateY(-2px)',
            },
          },
        },
      },
    },
  });
};