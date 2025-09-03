// components/Header.js
import React, { useEffect, useState } from 'react';
import { Box, Typography, useTheme } from '@mui/material';

const Header = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);
  const theme = useTheme();

  useEffect(() => {
    setIsLoaded(true);
    
    const handleMouseMove = (e) => {
      const rect = e.currentTarget.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    };

    const headerRef = document.getElementById('header-container');
    if (headerRef) {
      headerRef.addEventListener('mousemove', handleMouseMove);
      return () => headerRef.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  const floatingIconsStyle = {
    position: 'absolute',
    fontSize: '2rem',
    opacity: 0.3,
    animation: 'float 6s ease-in-out infinite',
    '@keyframes float': {
      '0%, 100%': {
        transform: 'translateY(0px) rotate(0deg)',
      },
      '33%': {
        transform: 'translateY(-15px) rotate(120deg)',
      },
      '66%': {
        transform: 'translateY(10px) rotate(240deg)',
      },
    },
  };

  const gradientTextStyle = {
    background: 'linear-gradient(135deg, #667eea, #764ba2, #f093fb)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    animation: 'gradientShift 3s ease infinite',
    backgroundSize: '200% 200%',
    '@keyframes gradientShift': {
      '0%, 100%': {
        backgroundPosition: '0% 50%',
      },
      '50%': {
        backgroundPosition: '100% 50%',
      },
    },
  };

  const secondaryTextStyle = {
    background: 'linear-gradient(135deg, #f093fb, #f5576c)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    fontWeight: 600,
  };

  const progressRingStyle = (progress, color, delay) => ({
    position: 'relative',
    width: 80,
    height: 80,
    borderRadius: '50%',
    background: `conic-gradient(from 0deg, transparent 0%, ${color} ${progress}, transparent ${progress})`,
    padding: '4px',
    opacity: 0,
    animation: `fadeInUp 1s ease ${delay} forwards`,
    '&::before': {
      content: '""',
      position: 'absolute',
      inset: '4px',
      background: theme.palette.custom.glassmorphism,
      borderRadius: '50%',
      backdropFilter: 'blur(10px)',
    },
    '@keyframes fadeInUp': {
      from: {
        opacity: 0,
        transform: 'translateY(20px)',
      },
      to: {
        opacity: 1,
        transform: 'translateY(0)',
      },
    },
  });

  return (
    <Box
      id="header-container"
      sx={{
        textAlign: 'center',
        mb: 5,
        background: theme.palette.custom.bgCard,
        color: theme.palette.custom.textPrimary,
        p: 4,
        borderRadius: 2,
        boxShadow: `0 4px 20px ${theme.palette.custom.shadowLight}`,
        border: `1px solid ${theme.palette.custom.borderColor}`,
        position: 'relative',
        overflow: 'visible',
      }}
    >
      {/* Floating icons */}
      <Box sx={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 0 }}>
        {[
          { emoji: '⚛️', top: '10%', left: '10%', delay: '0s' },
          { emoji: '💻', top: '20%', right: '15%', delay: '1s' },
          { emoji: '🚀', bottom: '30%', left: '8%', delay: '2s' },
          { emoji: '🎯', bottom: '10%', right: '10%', delay: '0.5s' },
          { emoji: '⭐', top: '50%', left: '5%', delay: '1.5s' },
          { emoji: '🔥', top: '60%', right: '5%', delay: '2.5s' },
        ].map((icon, index) => (
          <Box
            key={index}
            sx={{
              ...floatingIconsStyle,
              ...icon,
              animationDelay: icon.delay,
            }}
          >
            {icon.emoji}
          </Box>
        ))}
      </Box>
      
      {/* Interactive glow effect */}
      <Box
        sx={{
          position: 'absolute',
          width: 300,
          height: 300,
          background: 'radial-gradient(circle, rgba(102, 126, 234, 0.1) 0%, transparent 70%)',
          borderRadius: '50%',
          transform: 'translate(-50%, -50%)',
          pointerEvents: 'none',
          transition: 'all 0.1s ease',
          zIndex: 0,
          left: mousePosition.x,
          top: mousePosition.y,
        }}
      />
      
      <Typography
        variant="h1"
        sx={{
          ...gradientTextStyle,
          fontSize: { xs: '2rem', md: '2.5rem' },
          animation: isLoaded ? 'slideInDown 1s ease forwards' : 'none',
          '@keyframes slideInDown': {
            from: {
              opacity: 0,
              transform: 'translateY(-50px)',
            },
            to: {
              opacity: 1,
              transform: 'translateY(0)',
            },
          },
        }}
      >
        AI NAECO BLUE
      </Typography>
      
      <Typography
        variant="h1"
        sx={{
          ...secondaryTextStyle,
          fontSize: { xs: '2rem', md: '2.5rem' },
          mt: 1,
        }}
      >
        Internship Progress
      </Typography>
      
      <Typography
        sx={{
          position: 'relative',
          zIndex: 1,
          fontSize: '1.1rem',
          my: 2.5,
          opacity: 0,
          animation: 'fadeInUp 1s ease 0.5s forwards',
          '@keyframes fadeInUp': {
            from: {
              opacity: 0,
              transform: 'translateY(20px)',
            },
            to: {
              opacity: 1,
              transform: 'translateY(0)',
            },
          },
        }}
      >
        React • JavaScript • LeetCode
      </Typography>
      
      {/* Progress rings */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          gap: 4,
          mt: 4,
          position: 'relative',
          zIndex: 1,
        }}
      >
        {[
          { label: 'JS', progress: '75%', color: '#667eea', delay: '1s' },
          { label: 'React', progress: '90%', color: '#f093fb', delay: '1.2s' },
          { label: 'LeetCode', progress: '85%', color: '#4facfe', delay: '1.4s' },
        ].map((ring, index) => (
          <Box key={index} sx={progressRingStyle(ring.progress, ring.color, ring.delay)}>
            <Typography
              sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                fontSize: '0.8rem',
                fontWeight: 700,
                color: 'rgba(0, 0, 0, 0.9)',
                zIndex: 2,
              }}
            >
              {ring.label}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Header;