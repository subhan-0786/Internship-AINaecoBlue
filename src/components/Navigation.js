// components/Navigation.js
import React from 'react';
import { Box, Button, useTheme } from '@mui/material';

const Navigation = ({ activeSection, showSection }) => {
  const theme = useTheme();

  const navItems = [
    { key: 'overview', label: 'Overview' },
    { key: 'leetcode', label: 'LeetCode Journey' },
    { key: 'weekly', label: 'React Journey' },
    { key: 'projects', label: 'Projects' },
  ];

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        gap: 2,
        mb: 4,
        flexWrap: 'wrap',
        '@media (max-width: 768px)': {
          flexDirection: 'column',
          alignItems: 'center',
        },
      }}
    >
      {navItems.map((item) => (
        <Button
          key={item.key}
          onClick={() => showSection(item.key)}
          sx={{
            px: 3,
            py: 1.5,
            background: theme.palette.mode === 'dark'
              ? `linear-gradient(135deg, ${theme.palette.custom.bgCard} 0%, #1e1b4b 100%)`
              : theme.palette.custom.bgCard,
            border: theme.palette.mode === 'dark'
              ? '1px solid rgba(99, 102, 241, 0.3)'
              : `1px solid ${theme.palette.custom.borderColor}`,
            borderRadius: '20px',
            fontWeight: 500,
            color: activeSection === item.key
              ? 'white'
              : theme.palette.custom.textTertiary,
            boxShadow: theme.palette.mode === 'dark'
              ? '0 4px 15px rgba(0, 0, 0, 0.2)'
              : `0 2px 8px ${theme.palette.custom.shadowLight}`,
            transition: 'all 0.3s ease',
            ...(activeSection === item.key && {
              background: theme.palette.mode === 'dark'
                ? 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)'
                : theme.palette.custom.primaryBlue,
              transform: 'translateY(-2px)',
              boxShadow: theme.palette.mode === 'dark'
                ? '0 8px 25px rgba(99, 102, 241, 0.4)'
                : '0 4px 15px rgba(43, 108, 176, 0.2)',
            }),
            '&:hover': {
              background: activeSection === item.key
                ? (theme.palette.mode === 'dark'
                    ? 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)'
                    : theme.palette.custom.primaryBlue)
                : (theme.palette.mode === 'dark'
                    ? `linear-gradient(135deg, ${theme.palette.custom.bgCard} 0%, #1e1b4b 100%)`
                    : theme.palette.custom.bgCard),
              color: 'white',
              transform: 'translateY(-2px)',
              boxShadow: theme.palette.mode === 'dark'
                ? '0 8px 25px rgba(99, 102, 241, 0.4)'
                : '0 4px 15px rgba(43, 108, 176, 0.2)',
              borderColor: theme.palette.custom.primaryBlue,
            },
          }}
        >
          {item.label}
        </Button>
      ))}
    </Box>
  );
};

export default Navigation;