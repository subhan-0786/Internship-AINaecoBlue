// components/DarkModeToggle.js
import React from 'react';
import { Fab, useTheme } from '@mui/material';
import { useDarkMode } from '../contexts/DarkModeContext';

const DarkModeToggle = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const theme = useTheme();
  
  return (
    <Fab
      onClick={toggleDarkMode}
      title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
      sx={{
        position: 'fixed',
        bottom: 20,
        right: 20,
        width: 60,
        height: 60,
        background: theme.palette.custom.bgCard,
        border: `2px solid ${theme.palette.custom.borderColor}`,
        boxShadow: `0 4px 20px ${theme.palette.custom.shadowLight}`,
        zIndex: 1000,
        '&:hover': {
          transform: 'translateY(-3px) scale(1.1)',
          boxShadow: `0 8px 30px ${theme.palette.custom.shadowMedium}`,
        },
        '@media (max-width: 768px)': {
          bottom: 15,
          right: 15,
          width: 50,
          height: 50,
        },
      }}
    >
      <span
        style={{
          fontSize: '1.5rem',
          transition: 'all 0.3s ease',
          transform: isDarkMode ? 'rotate(180deg)' : 'rotate(0deg)',
        }}
      >
        {isDarkMode ? '🌙' : '☀️'}
      </span>
    </Fab>
  );
};

export default DarkModeToggle;