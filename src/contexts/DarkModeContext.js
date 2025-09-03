// contexts/DarkModeContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { createCustomTheme } from '../theme/muiTheme';

const DarkModeContext = createContext();

export const useDarkMode = () => {
  const context = useContext(DarkModeContext);
  if (!context) {
    throw new Error('useDarkMode must be used within a DarkModeProvider');
  }
  return context;
};

export const DarkModeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Load theme from memory on mount
  useEffect(() => {
    const savedTheme = window.darkModeState || 'dark';
    setIsDarkMode(savedTheme === 'light');
  }, []);

  // Save to memory when theme changes
  useEffect(() => {
    window.darkModeState = isDarkMode ? 'dark' : 'light';
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(prev => !prev);
  };

  const theme = createCustomTheme(isDarkMode);

  const value = {
    isDarkMode,
    toggleDarkMode,
    theme
  };

  return (
    <DarkModeContext.Provider value={value}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </DarkModeContext.Provider>
  );
};