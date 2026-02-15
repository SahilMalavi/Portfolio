import { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Sidebar from './components/Sidebar.jsx';
import AboutSection from './components/AboutSection.jsx';
import ProjectsSection from './components/ProjectsSection.jsx';
import ExperienceSection from './components/ExperienceSection.jsx';
import SkillsSection from './components/SkillsSection.jsx';
import CodingProfilesSection from './components/CodingProfilesSection.jsx';
import ContactSection from './components/ContactSection.jsx';
import ParticleBackground from './components/ParticleBackground.jsx';
import './App.css';

function App() {

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="app">
      <ParticleBackground />

      <div className="content-wrapper">
        <Sidebar isMobile={isMobile} />

        <main className="main-content">
          <Routes>

            {/* Default page */}
            <Route path="/" element={<Navigate to="/about" />} />

            <Route path="/about" element={<AboutSection />} />
            <Route path="/projects" element={<ProjectsSection />} />
            <Route path="/experience" element={<ExperienceSection />} />
            <Route path="/skills" element={<SkillsSection />} />
            <Route path="/coding" element={<CodingProfilesSection />} />
            <Route path="/contact" element={<ContactSection />} />

          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;
