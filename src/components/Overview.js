// components/Overview.js
import React from 'react';
import { Box, Card, CardContent, Typography, useTheme } from '@mui/material';
import { weeks } from '../data/weeksData';

const Overview = ({ isActive }) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: isActive ? 'block' : 'none',
        background: theme.palette.mode === 'dark'
          ? `linear-gradient(135deg, ${theme.palette.custom.bgCard} 0%, #1e1b4b 100%)`
          : theme.palette.custom.bgCard,
        p: 4,
        borderRadius: 2,
        boxShadow: theme.palette.mode === 'dark'
          ? '0 8px 32px rgba(0, 0, 0, 0.4)'
          : `0 4px 20px ${theme.palette.custom.shadowLight}`,
        border: theme.palette.mode === 'dark'
          ? '1px solid rgba(99, 102, 241, 0.2)'
          : `1px solid ${theme.palette.custom.borderColor}`,
      }}
    >
      <Typography
        variant="h2"
        sx={{
          mb: 3,
          color: theme.palette.custom.textTertiary,
        }}
      >
        Internship Overview
      </Typography>
      
      {weeks.map((week, index) => (
        <Card
          key={index}
          sx={{
            background: theme.palette.mode === 'dark'
              ? `linear-gradient(135deg, ${theme.palette.custom.weekCardBg} 0%, #312e81 100%)`
              : theme.palette.custom.weekCardBg,
            mb: 3,
            borderRadius: 1.5,
            borderLeft: theme.palette.mode === 'dark'
              ? '4px solid #6366f1'
              : '4px solid #3b82f6',
            boxShadow: theme.palette.mode === 'dark'
              ? '0 4px 20px rgba(99, 102, 241, 0.1)'
              : `0 2px 12px ${theme.palette.custom.shadowLight}`,
            border: `1px solid ${theme.palette.custom.weekCardBorder}`,
          }}
        >
          <CardContent sx={{ p: 3 }}>
            <Typography
              variant="h3"
              sx={{
                color: theme.palette.custom.textTertiary,
                fontSize: '1.4rem',
                mb: 2,
                fontWeight: 600,
              }}
            >
              {week.title}
            </Typography>
            <Typography
              sx={{
                color: '#3b82f6',
                fontSize: '0.9rem',
                mb: 2,
                fontWeight: 500,
              }}
            >
              {week.period}
            </Typography>
            <Box sx={{ mt: 2 }}>
              {week.achievements.map((achievement, achievementIndex) => (
                <Box
                  key={achievementIndex}
                  sx={{
                    background: theme.palette.mode === 'dark'
                      ? `linear-gradient(135deg, ${theme.palette.custom.achievementBg} 0%, #374151 100%)`
                      : theme.palette.custom.achievementBg,
                    p: 2,
                    mb: 1.25,
                    borderRadius: 1,
                    borderLeft: `3px solid ${theme.palette.custom.successGreen}`,
                    boxShadow: theme.palette.mode === 'dark'
                      ? '0 2px 10px rgba(34, 211, 238, 0.1)'
                      : `0 1px 6px ${theme.palette.custom.shadowLight}`,
                    border: `1px solid ${theme.palette.custom.achievementBorder}`,
                    color: theme.palette.custom.textPrimary,
                  }}
                >
                  {achievement}
                </Box>
              ))}
            </Box>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
};

export default Overview;