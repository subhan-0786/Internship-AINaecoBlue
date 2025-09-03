// components/LeetCodeJourney.js
import React from 'react';
import { Box, Card, CardContent, Typography, useTheme, Link } from '@mui/material';
import { leetcodeData } from '../data/leetcodeData';

const LeetCodeJourney = ({ isActive }) => {
  const theme = useTheme();
  
  const ProblemLink = ({ problem }) => (
    <Box
      component="li"
      sx={{
        background: theme.palette.mode === 'dark'
          ? 'linear-gradient(135deg, #1f2937 0%, #374151 100%)'
          : theme.palette.custom.bgCard,
        p: 1.5,
        mb: 0.75,
        borderRadius: 0.75,
        fontFamily: '"Courier New", monospace',
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
          transform: theme.palette.mode === 'dark' ? 'translateY(-2px)' : 'translateY(-1px)',
          boxShadow: theme.palette.mode === 'dark'
            ? '0 4px 15px rgba(99, 102, 241, 0.2)'
            : `0 2px 6px ${theme.palette.custom.shadowLight}`,
        },
      }}
    >
      <Link
        href={`https://github.com/subhan-0786/JS-LeetCode/blob/main/${problem.file}`}
        target="_blank"
        rel="noopener noreferrer"
        sx={{
          color: 'inherit',
          textDecoration: 'none',
          '&:hover': {
            textDecoration: 'none',
          },
        }}
      >
        {problem.name}
      </Link>
    </Box>
  );

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
        LeetCode Problem Solving Journey
      </Typography>
      
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 2.5,
          mt: 2.5,
          '@media (max-width: 768px)': {
            gridTemplateColumns: '1fr',
          },
        }}
      >
        {leetcodeData.map((day, index) => (
          <Card
            key={index}
            sx={{
              background: theme.palette.mode === 'dark'
                ? `linear-gradient(135deg, ${theme.palette.custom.dayCardBg} 0%, #92400e 100%)`
                : theme.palette.custom.dayCardBg,
              borderRadius: 1.5,
              borderLeft: `4px solid ${theme.palette.custom.warningOrange}`,
              border: `1px solid ${theme.palette.custom.dayCardBorder}`,
              boxShadow: theme.palette.mode === 'dark'
                ? '0 4px 20px rgba(251, 146, 60, 0.1)'
                : `0 2px 8px ${theme.palette.custom.shadowLight}`,
            }}
          >
            <CardContent sx={{ p: 2.5 }}>
              <Typography
                sx={{
                  color: theme.palette.custom.textPrimary,
                  fontWeight: 600,
                  mb: 1.25,
                }}
              >
                {day.date}
              </Typography>
              <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0 }}>
                {day.problems.map((problem, problemIndex) => (
                  <ProblemLink key={problemIndex} problem={problem} />
                ))}
              </Box>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default LeetCodeJourney;