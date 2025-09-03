// App.js
import React, { useState } from 'react';
import { Box, Container } from '@mui/material';
import { DarkModeProvider, useDarkMode } from './contexts/DarkModeContext';
import DarkModeToggle from './components/DarkModeToggle';
import Header from './components/Header';
import StatCards from './components/StatCards';
import Navigation from './components/Navigation';
import Overview from './components/Overview';
import LeetCodeJourney from './components/LeetCodeJourney';
import WeeklyProgress from './components/WeeklyProgress';
import Projects from './components/Projects';

function AppContent() {
  const [activeSection, setActiveSection] = useState('overview');
  const { theme } = useDarkMode();

  const showSection = (sectionName) => {
    setActiveSection(sectionName);
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: `linear-gradient(135deg, ${theme.palette.custom.bgPrimary} 0%, ${theme.palette.custom.bgSecondary} 100%)`,
      }}
    >
      <Container maxWidth="lg" sx={{ py: 2.5 }}>
        <Header />
        <StatCards />
        <Navigation activeSection={activeSection} showSection={showSection} />
        <Overview isActive={activeSection === 'overview'} />
        <LeetCodeJourney isActive={activeSection === 'leetcode'} />
        <WeeklyProgress isActive={activeSection === 'weekly'} />
        <Projects isActive={activeSection === 'projects'} />
      </Container>
      <DarkModeToggle />
    </Box>
  );
}

function App() {
  return (
    <DarkModeProvider>
      <AppContent />
    </DarkModeProvider>
  );
}

export default App;