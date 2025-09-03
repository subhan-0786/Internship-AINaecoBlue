// components/StatCards.js
import React from 'react';
import { Box, Card, CardContent, Typography, useTheme } from '@mui/material';

const StatCards = () => {
  const theme = useTheme();

  const stats = [
    {
      emoji: '🎯',
      label: 'Days of LeetCode',
      number: '25',
      color: theme.palette.custom.primaryBlue,
    },
    {
      emoji: '💻',
      label: 'Problems Solved',
      number: '75',
      color: theme.palette.custom.successGreen,
    },
    {
      emoji: '📅',
      label: 'Weeks Completed',
      number: '6',
      color: theme.palette.custom.warningOrange,
    },
    {
      emoji: '⚛️',
      label: 'Projects Completed',
      number: '4',
      color: theme.palette.custom.purpleAccent,
    },
];

  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: 2.5,
        mb: 5,
      }}
    >
      {stats.map((stat, index) => (
        <Card
          key={index}
          sx={{
            background: theme.palette.mode === 'dark' 
              ? `linear-gradient(135deg, ${theme.palette.custom.bgCard} 0%, #1e1b4b 100%)`
              : theme.palette.custom.bgCard,
            p: 3,
            textAlign: 'center',
            boxShadow: theme.palette.mode === 'dark'
              ? `0 4px 25px rgba(99, 102, 241, 0.1)`
              : `0 2px 12px ${theme.palette.custom.shadowLight}`,
            border: theme.palette.mode === 'dark'
              ? '1px solid rgba(99, 102, 241, 0.2)'
              : `1px solid ${theme.palette.custom.borderColor}`,
            borderLeft: `4px solid ${stat.color}`,
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            '&:hover': {
              transform: 'translateY(-3px)',
              boxShadow: theme.palette.mode === 'dark'
                ? `0 8px 35px rgba(99, 102, 241, 0.2)`
                : `0 4px 20px ${theme.palette.custom.shadowMedium}`,
            },
          }}
        >
          <CardContent sx={{ p: 0, '&:last-child': { pb: 0 } }}>
            <Typography variant="h1" sx={{ fontSize: '2rem', mb: 1 }}>
              {stat.emoji}
            </Typography>
            <Typography
              sx={{
                color: theme.palette.custom.textSecondary,
                fontSize: '0.9rem',
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
                mb: 1,
              }}
            >
              {stat.label}
            </Typography>
            <Typography
              sx={{
                fontSize: '2rem',
                fontWeight: 'bold',
                color: stat.color,
              }}
            >
              {stat.number}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
};

export default StatCards;