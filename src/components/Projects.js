import React from 'react';

const Projects = ({ isActive }) => {
  const projects = [
    {
      title: "BuildCorp Construction Dashboard",
      description: "Developed a comprehensive dashboard for a construction company during the second weekend assignment. This project showcased my skills in creating professional, industry-specific dashboards in JS.",
      techStack: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
      link: "./dashboard.html", // Local file path
      linkText: "View Dashboard",
      linkType: "demo"
    },
    {
      title: "React Learning Projects",
      description: "Built multiple React projects while following the \"Chai aur React\" playlist, including background changer, currency converter, and context API implementations.",
      techStack: ["React", "JSX", "Hooks", "Context API", "Redux Toolkit", "Appwrite"],
      // Add your React projects GitHub link here if available
      // link: "https://github.com/your-username/react-projects",
      // linkText: "View on GitHub",
      // linkType: "github"
    },
    {
      title: "Object & Array Destructuring Assignment",
      description: "Completed comprehensive exercises on JavaScript destructuring concepts during the first weekend.",
      techStack: ["JavaScript ES6+", "Destructuring", "Arrays", "Objects"],
      link: "https://drive.google.com/file/d/1ZGr5b585HiL6qAKkls0339T6BCFFluCX/view?usp=drive_link", 
      linkText: "View Assignment PDF",
      linkType: "pdf"
    },
    {
      title: "Namaste JavaScript Notes",
      description: "Comprehensive handwritten notes covering advanced JavaScript concepts from both Season 1 and Season 2 of the Namaste JavaScript series.",
      techStack: ["JavaScript Advanced", "Documentation", "Learning Notes"],
      link: "https://drive.google.com/file/d/1MRlVt7zMie_wPuY3bVlEic-skNxgwB0d/view?usp=drive_link", 
      linkText: "View Notes PDF",
      linkType: "pdf"
    }
  ];

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
    <section className={`content-section ${isActive ? 'active' : ''}`}>
      <h2 style={{marginBottom: '25px', color: 'var(--text-tertiary)'}}>Projects & Assignments</h2>
      
      {projects.map((project, index) => (
        <div 
          key={index} 
          className={`project-card ${project.link ? 'clickable-project' : ''}`}
          onClick={() => handleProjectClick(project)}
          style={{
            cursor: project.link ? 'pointer' : 'default',
            position: 'relative'
          }}
        >
          <div className="project-header">
            <div className="project-title">{project.title}</div>
            {project.link && (
              <div className="project-link-indicator">
                <span className="link-icon">{getIcon(project.linkType)}</span>
                <span className="link-text">{project.linkText}</span>
              </div>
            )}
          </div>
          <p>{project.description}</p>
          <div className="tech-tags">
            {project.techStack.map((tech, techIndex) => (
              <span key={techIndex} className="tech-tag">{tech}</span>
            ))}
          </div>
          {project.link && (
            <div className="click-hint">
              Click to {project.linkText.toLowerCase()} →
            </div>
          )}
        </div>
      ))}

      <style jsx>{`
        .project-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 10px;
          flex-wrap: wrap;
          gap: 10px;
        }

        .project-link-indicator {
          display: flex;
          align-items: center;
          gap: 6px;
          background: linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%);
          padding: 8px 12px;
          border-radius: 20px;
          font-size: 0.8rem;
          color: var(--primary-blue);
          border: 1px solid rgba(99, 102, 241, 0.2);
          font-weight: 500;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
          box-shadow: 0 2px 8px rgba(99, 102, 241, 0.1);
        }

        .project-link-indicator:hover {
          background: linear-gradient(135deg, rgba(99, 102, 241, 0.2) 0%, rgba(139, 92, 246, 0.2) 100%);
          box-shadow: 0 4px 15px rgba(99, 102, 241, 0.2);
          transform: translateY(-1px);
        }

        .link-icon {
          font-size: 1.1rem;
          filter: drop-shadow(0 0 3px rgba(99, 102, 241, 0.3));
        }

        .clickable-project {
          transition: all 0.3s ease;
          border: 2px solid transparent;
          overflow: hidden;
        }

        .clickable-project:hover {
          transform: translateY(-5px) scale(1.02);
          box-shadow: 0 8px 30px var(--shadow-medium);
          border-color: var(--primary-blue);
        }

        .clickable-project:hover .project-link-indicator {
          background: linear-gradient(135deg, var(--primary-blue) 0%, #8b5cf6 100%);
          color: white;
          border-color: transparent;
          box-shadow: 0 6px 20px rgba(99, 102, 241, 0.4);
        }

        .click-hint {
          position: absolute;
          bottom: 15px;
          right: 20px;
          font-size: 0.8rem;
          color: var(--text-secondary);
          opacity: 0;
          transition: all 0.3s ease;
          font-style: italic;
          background: rgba(99, 102, 241, 0.1);
          padding: 4px 8px;
          border-radius: 8px;
          backdrop-filter: blur(5px);
        }

        .clickable-project:hover .click-hint {
          opacity: 1;
          transform: translateX(-5px);
        }

        /* Beautiful Dark Mode Styles */
        .dark-mode .project-link-indicator {
          background: linear-gradient(135deg, rgba(99, 102, 241, 0.25) 0%, rgba(139, 92, 246, 0.25) 100%);
          border: 1px solid rgba(99, 102, 241, 0.4);
          color: #a5b4fc;
          box-shadow: 0 4px 15px rgba(99, 102, 241, 0.15);
        }

        .dark-mode .project-link-indicator:hover {
          background: linear-gradient(135deg, rgba(99, 102, 241, 0.4) 0%, rgba(139, 92, 246, 0.4) 100%);
          box-shadow: 0 6px 20px rgba(99, 102, 241, 0.25);
          color: #c7d2fe;
        }

        .dark-mode .clickable-project:hover .project-link-indicator {
          background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
          color: #ffffff;
          border-color: transparent;
          box-shadow: 0 8px 25px rgba(99, 102, 241, 0.5);
        }

        .dark-mode .link-icon {
          filter: drop-shadow(0 0 5px rgba(99, 102, 241, 0.5));
        }

        .dark-mode .click-hint {
          background: rgba(99, 102, 241, 0.2);
          border: 1px solid rgba(99, 102, 241, 0.3);
          color: #c7d2fe;
        }

        @media (max-width: 768px) {
          .project-header {
            flex-direction: column;
            align-items: flex-start;
          }
          
          .click-hint {
            position: static;
            opacity: 1;
            margin-top: 10px;
          }
        }
      `}</style>
    </section>
  );
};

export default Projects;