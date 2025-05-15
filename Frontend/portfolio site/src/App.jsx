import { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import ExperienceSection from './components/ExperienceSection';
import SkillsSection from './components/SkillsSection';
import CodingProfilesSection from './components/CodingProfilesSection';
import ContactSection from './components/ContactSection';
import ParticleBackground from './components/ParticleBackground';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('about');
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const renderActiveSection = () => {
  

    switch (activeSection) {
      case 'about':
        return <AboutSection />;
      case 'projects':
        return <ProjectsSection />;
      case 'experience':
        return <ExperienceSection />;
      case 'skills':
        return <SkillsSection />;
      case 'coding':
        return <CodingProfilesSection />;
      case 'contact':
        return <ContactSection />;
      default:
        return null;
    }
  };

  return (
    <div className="app">
      <ParticleBackground />
      <div className="content-wrapper">
        <Sidebar
          activeSection={activeSection}
          setActiveSection={setActiveSection}
          isMobile={isMobile}
        />
        <main className="main-content">
          {renderActiveSection()}
        </main>
      </div>
    </div>
  );
}

export default App;