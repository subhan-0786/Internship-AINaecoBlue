import React, { useState } from 'react';
import './App.css';
import { DarkModeProvider, useDarkMode } from './contexts/DarkModeContext';
import DarkModeToggle from './components/DarkModeToggle';
import Header from './components/Header';
import StatCards from './components/StatCards';
import Navigation from './components/Navigation';
import Overview from './components/Overview';
import LeetCodeJourney from './components/LeetCodeJourney';
import WeeklyProgress from './components/WeeklyProgress';
import Projects from './components/Projects';

function AppContent() { // Rename your current App component
  const [activeSection, setActiveSection] = useState('overview');
  const { isDarkMode } = useDarkMode();

  const showSection = (sectionName) => {
    setActiveSection(sectionName);
  };

  return (
    <div className={`app ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <div className="container">
        {/* Your existing components */}
        <Header />
        <StatCards />
        <Navigation activeSection={activeSection} showSection={showSection} />
        <Overview isActive={activeSection === 'overview'} />
        <LeetCodeJourney isActive={activeSection === 'leetcode'} />
        <WeeklyProgress isActive={activeSection === 'weekly'} />
        <Projects isActive={activeSection === 'projects'} />
      </div>
      <DarkModeToggle />
    </div>
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

