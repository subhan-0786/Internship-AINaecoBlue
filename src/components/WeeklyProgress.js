// components/WeeklyProgress.js
import React from 'react';
import { Box, Card, CardContent, Typography, Chip, useTheme } from '@mui/material';
import { learningDays } from '../data/learningdaysData';

const WeeklyProgress = ({ isActive }) => {
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
        Weekly Learning Progress
      </Typography>
      
      {learningDays.map((day, index) => (
        <Card
          key={index}
          sx={{
            background: theme.palette.mode === 'dark'
              ? `linear-gradient(135deg, ${theme.palette.custom.learningCardBg} 0%, #92400e 100%)`
              : theme.palette.custom.learningCardBg,
            mb: 2,
            borderRadius: 1.5,
            borderLeft: '4px solid #eab308',
            border: `1px solid ${theme.palette.custom.learningCardBorder}`,
            boxShadow: theme.palette.mode === 'dark'
              ? '0 4px 20px rgba(234, 179, 8, 0.1)'
              : `0 2px 8px ${theme.palette.custom.shadowLight}`,
          }}
        >
          <CardContent sx={{ p: 2.5 }}>
            <Chip
              label={day.day}
              sx={{
                background: theme.palette.mode === 'dark'
                  ? 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)'
                  : '#3b82f6',
                color: 'white',
                fontWeight: 600,
                mb: 1.25,
                boxShadow: theme.palette.mode === 'dark'
                  ? '0 4px 15px rgba(99, 102, 241, 0.3)'
                  : '0 2px 6px rgba(59, 130, 246, 0.3)',
              }}
            />
            <Typography
              variant="h3"
              sx={{
                color: '#744210',
                fontSize: '1.1rem',
                fontWeight: 600,
                mb: 1.25,
              }}
            >
              {day.date}
            </Typography>
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                gap: 2,
                mt: 2,
              }}
            >
              {day.topics.map((topic, topicIndex) => (
                <Box
                  key={topicIndex}
                  sx={{
                    background: theme.palette.mode === 'dark'
                      ? 'linear-gradient(135deg, #1f2937 0%, #374151 100%)'
                      : theme.palette.custom.bgCard,
                    p: 1.5,
                    borderRadius: 1,
                    fontSize: '0.9rem',
                    color: theme.palette.custom.textTertiary,
                    border: theme.palette.mode === 'dark'
                      ? '1px solid rgba(156, 163, 175, 0.2)'
                      : `1px solid ${theme.palette.custom.borderColor}`,
                    boxShadow: theme.palette.mode === 'dark'
                      ? '0 2px 8px rgba(0, 0, 0, 0.2)'
                      : `0 1px 3px ${theme.palette.custom.shadowLight}`,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      background: theme.palette.mode === 'dark'
                        ? 'linear-gradient(135deg, #374151 0%, #4b5563 100%)'
                        : theme.palette.custom.bgSecondary,
                      transform: 'translateY(-1px)',
                      boxShadow: theme.palette.mode === 'dark'
                        ? '0 4px 12px rgba(99, 102, 241, 0.15)'
                        : `0 2px 6px ${theme.palette.custom.shadowLight}`,
                    },
                  }}
                >
                  {topic}
                </Box>
              ))}
            </Box>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
};

export default WeeklyProgress;