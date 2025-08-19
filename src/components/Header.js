import React, { useEffect, useState } from 'react';

const Header = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    
    const handleMouseMove = (e) => {
      const rect = e.currentTarget.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    };

    const header = document.querySelector('.header');
    if (header) {
      header.addEventListener('mousemove', handleMouseMove);
      return () => header.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  return (
    <header 
      className={`header ${isLoaded ? 'loaded' : ''}`}
      style={{
        '--mouse-x': `${mousePosition.x}px`,
        '--mouse-y': `${mousePosition.y}px`,
      }}
    >
      {/* Floating icons */}
      <div className="floating-icons">
        <div className="icon-container" style={{animationDelay: '0s'}}>⚛️</div>
        <div className="icon-container" style={{animationDelay: '1s'}}>💻</div>
        <div className="icon-container" style={{animationDelay: '2s'}}>🚀</div>
        <div className="icon-container" style={{animationDelay: '0.5s'}}>🎯</div>
        <div className="icon-container" style={{animationDelay: '1.5s'}}>⭐</div>
        <div className="icon-container" style={{animationDelay: '2.5s'}}>🔥</div>
      </div>
      
      {/* Interactive glow effect that follows mouse */}
      <div 
        className="mouse-glow"
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
        }}
      ></div>
      
      <h1>
        <span className="text-gradient">AI NAECO BLUE</span>
        <br />
        <span className="text-secondary">Internship Progress</span>
      </h1>
      
      <p className="subtitle">
        React • JavaScript • LeetCode
      </p>
      
      {/* Progress rings */}
      <div className="progress-rings">
        <div className="ring ring-1">
          <div className="ring-progress" style={{'--progress': '75%'}}></div>
          <span className="ring-label">JS</span>
        </div>
        <div className="ring ring-2">
          <div className="ring-progress" style={{'--progress': '90%'}}></div>
          <span className="ring-label">React</span>
        </div>
        <div className="ring ring-3">
          <div className="ring-progress" style={{'--progress': '85%'}}></div>
          <span className="ring-label">LeetCode</span>
        </div>
      </div>

      <style jsx>{`
        .header {
          position: relative;
          overflow: visible;
        }

        .floating-icons {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 0;
        }

        .icon-container {
          position: absolute;
          font-size: 2rem;
          opacity: 0.3;
          animation: float 6s ease-in-out infinite;
        }

        .icon-container:nth-child(1) { top: 10%; left: 10%; }
        .icon-container:nth-child(2) { top: 20%; right: 15%; }
        .icon-container:nth-child(3) { bottom: 30%; left: 8%; }
        .icon-container:nth-child(4) { bottom: 10%; right: 10%; }
        .icon-container:nth-child(5) { top: 50%; left: 5%; }
        .icon-container:nth-child(6) { top: 60%; right: 5%; }

        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-15px) rotate(120deg); }
          66% { transform: translateY(10px) rotate(240deg); }
        }

        .mouse-glow {
          position: absolute;
          width: 300px;
          height: 300px;
          background: radial-gradient(circle, rgba(102, 126, 234, 0.1) 0%, transparent 70%);
          border-radius: 50%;
          transform: translate(-50%, -50%);
          pointer-events: none;
          transition: all 0.1s ease;
          z-index: 0;
        }

        .text-gradient {
          background: linear-gradient(135deg, #667eea, #764ba2, #f093fb);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: gradientShift 3s ease infinite;
          background-size: 200% 200%;
        }

        .text-secondary {
          background: linear-gradient(135deg, #f093fb, #f5576c);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          font-weight: 600;
        }

        .subtitle {
          position: relative;
          z-index: 1;
          font-size: 1.1rem;
          margin: 20px 0;
          opacity: 0;
          animation: fadeInUp 1s ease 0.5s forwards;
        }

        .progress-rings {
          display: flex;
          justify-content: center;
          gap: 30px;
          margin-top: 30px;
          position: relative;
          z-index: 1;
        }

        .ring {
          position: relative;
          width: 80px;
          height: 80px;
          border-radius: 50%;
          background: conic-gradient(from 0deg, transparent 0%, var(--ring-color, #667eea) var(--progress, 0%), transparent var(--progress, 0%));
          padding: 4px;
          opacity: 0;
          animation: fadeInUp 1s ease 1s forwards;
        }

        .ring::before {
          content: '';
          position: absolute;
          inset: 4px;
          background: var(--glassmorphism);
          border-radius: 50%;
          backdrop-filter: blur(10px);
        }

        .ring-1 { --ring-color: #667eea; animation-delay: 1s; }
        .ring-2 { --ring-color: #f093fb; animation-delay: 1.2s; }
        .ring-3 { --ring-color: #4facfe; animation-delay: 1.4s; }

        .ring-progress {
          position: absolute;
          inset: 0;
          border-radius: 50%;
          background: conic-gradient(from 0deg, transparent 0%, var(--ring-color) var(--progress), transparent var(--progress));
          animation: ringFill 2s ease 1.5s forwards;
        }

        @keyframes ringFill {
          from { --progress: 0%; }
        }

        .ring-label {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          font-size: 0.8rem;
          font-weight: 700;
          color: rgba(255, 255, 255, 0.9);
          z-index: 2;
        }

        .header.loaded h1 {
          animation: slideInDown 1s ease forwards;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes gradientShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
      `}</style>
    </header>
  );
};

export default Header;