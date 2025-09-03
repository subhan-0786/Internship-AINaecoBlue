// components/Projects.js
import React from 'react';
import { Box, Card, CardContent, Typography, Chip, useTheme } from '@mui/material';
import { projects } from '../data/projectsData';

const Projects = ({ isActive }) => {
  const theme = useTheme();

  const handleProjectClick = (project) => {
    if (project.link) {
      if (project.linkType === "demo" && project.link.startsWith("./")) {
        // For local files, open in new tab
        window.open(project.link, '_blank');
      } else {
        // For external links (Google Drive, GitHub, etc.)
        window.open(project.link, '_blank', 'noopener,noreferrer');
      }
    }
  };

  const getIcon = (linkType) => {
    switch (linkType) {
      case "demo":
        return "🚀";
      case "pdf":
        return "📄";
      case "github":
        return "⚡";
      default:
        return "🔗";
    }
  };

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
        Projects & Assignments
      </Typography>
      
      {projects.map((project, index) => (
        <Card
          key={index}
          onClick={() => handleProjectClick(project)}
          sx={{
            background: theme.palette.mode === 'dark'
              ? `linear-gradient(135deg, ${theme.palette.custom.projectCardBg} 0%, #047857 100%)`
              : theme.palette.custom.projectCardBg,
            mb: 2.5,
            borderRadius: 1.5,
            borderLeft: `4px solid ${theme.palette.custom.successGreen}`,
            border: `1px solid ${theme.palette.custom.projectCardBorder}`,
            boxShadow: theme.palette.mode === 'dark'
              ? '0 4px 20px rgba(34, 211, 238, 0.1)'
              : `0 2px 12px ${theme.palette.custom.shadowLight}`,
            cursor: project.link ? 'pointer' : 'default',
            position: 'relative',
            overflow: 'hidden',
            transition: 'all 0.3s ease',
            ...(project.link && {
              '&:hover': {
                transform: 'translateY(-5px) scale(1.02)',
                boxShadow: theme.palette.mode === 'dark'
                  ? '0 12px 40px rgba(34, 211, 238, 0.2)'
                  : `0 8px 30px ${theme.palette.custom.shadowMedium}`,
                borderColor: theme.palette.custom.primaryBlue,
                '& .project-link-indicator': {
                  background: theme.palette.mode === 'dark'
                    ? 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)'
                    : 'linear-gradient(135deg, var(--primary-blue) 0%, #8b5cf6 100%)',
                  color: 'white',
                  borderColor: 'transparent',
                  boxShadow: theme.palette.mode === 'dark'
                    ? '0 8px 25px rgba(99, 102, 241, 0.5)'
                    : '0 6px 20px rgba(99, 102, 241, 0.4)',
                },
                '& .click-hint': {
                  opacity: 1,
                  transform: 'translateX(-5px)',
                },
              },
            }),
          }}
        >
          <CardContent sx={{ p: 3 }}>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                mb: 1.25,
                flexWrap: 'wrap',
                gap: 1.25,
                '@media (max-width: 768px)': {
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                },
              }}
            >
              <Typography
                variant="h3"
                sx={{
                  color: theme.palette.mode === 'dark'
                    ? theme.palette.custom.successGreen
                    : '#047857',
                  fontSize: '1.3rem',
                  fontWeight: 600,
                  textShadow: theme.palette.mode === 'dark'
                    ? '0 0 10px rgba(34, 211, 238, 0.3)'
                    : 'none',
                }}
              >
                {project.title}
              </Typography>
              {project.link && (
                <Box
                  className="project-link-indicator"
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 0.75,
                    background: theme.palette.mode === 'dark'
                      ? 'linear-gradient(135deg, rgba(99, 102, 241, 0.25) 0%, rgba(139, 92, 246, 0.25) 100%)'
                      : 'linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%)',
                    p: 1,
                    borderRadius: '20px',
                    fontSize: '0.8rem',
                    color: theme.palette.mode === 'dark'
                      ? '#a5b4fc'
                      : theme.palette.custom.primaryBlue,
                    border: theme.palette.mode === 'dark'
                      ? '1px solid rgba(99, 102, 241, 0.4)'
                      : '1px solid rgba(99, 102, 241, 0.2)',
                    fontWeight: 500,
                    transition: 'all 0.3s ease',
                    backdropFilter: 'blur(10px)',
                    boxShadow: theme.palette.mode === 'dark'
                      ? '0 4px 15px rgba(99, 102, 241, 0.15)'
                      : '0 2px 8px rgba(99, 102, 241, 0.1)',
                  }}
                >
                  <span
                    style={{
                      fontSize: '1.1rem',
                      filter: theme.palette.mode === 'dark'
                        ? 'drop-shadow(0 0 5px rgba(99, 102, 241, 0.5))'
                        : 'drop-shadow(0 0 3px rgba(99, 102, 241, 0.3))',
                    }}
                  >
                    {getIcon(project.linkType)}
                  </span>
                  <span>{project.linkText}</span>
                </Box>
              )}
            </Box>
            <Typography
              sx={{
                color: theme.palette.custom.textPrimary,
                mb: 2,
              }}
            >
              {project.description}
            </Typography>
            <Box
              sx={{
                display: 'flex',
                gap: 1,
                flexWrap: 'wrap',
              }}
            >
              {project.techStack.map((tech, techIndex) => (
                <Chip
                  key={techIndex}
                  label={tech}
                  sx={{
                    background: theme.palette.mode === 'dark'
                      ? 'linear-gradient(135deg, rgba(192, 132, 252, 0.2) 0%, rgba(139, 92, 246, 0.2) 100%)'
                      : '#3a394b',
                    color: theme.palette.mode === 'dark'
                      ? '#c084fc'
                      : theme.palette.custom.purpleAccent,
                    border: theme.palette.mode === 'dark'
                      ? '1px solid rgba(192, 132, 252, 0.3)'
                      : '1px solid #ddd6fe',
                    fontSize: '0.8rem',
                    fontWeight: 500,
                    boxShadow: theme.palette.mode === 'dark'
                      ? '0 2px 8px rgba(192, 132, 252, 0.1)'
                      : 'none',
                  }}
                />
              ))}
            </Box>
            {project.link && (
              <Box
                className="click-hint"
                sx={{
                  position: 'absolute',
                  bottom: 15,
                  right: 20,
                  fontSize: '0.8rem',
                  color: theme.palette.custom.textSecondary,
                  opacity: 0,
                  transition: 'all 0.3s ease',
                  fontStyle: 'italic',
                  background: theme.palette.mode === 'dark'
                    ? 'rgba(99, 102, 241, 0.2)'
                    : 'rgba(99, 102, 241, 0.1)',
                  p: 0.5,
                  borderRadius: 1,
                  backdropFilter: 'blur(5px)',
                  border: theme.palette.mode === 'dark'
                    ? '1px solid rgba(99, 102, 241, 0.3)'
                    : 'none',
                  '@media (max-width: 768px)': {
                    position: 'static',
                    opacity: 1,
                    mt: 1.25,
                  },
                }}
              >
                Click to {project.linkText.toLowerCase()} →
              </Box>
            )}
          </CardContent>
        </Card>
      ))}
    </Box>
  );
};

export default Projects;