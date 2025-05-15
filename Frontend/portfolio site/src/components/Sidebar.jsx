import { useState } from 'react';
import {
    Home, User, Briefcase, Code, Server, Mail, X, Menu,
    Github, Linkedin, Twitter, ExternalLink
} from 'lucide-react';
import './Sidebar.css';
import sahil_photo from "../assets/sahil_photo.jpg"; 

const Sidebar = ({ activeSection, setActiveSection, isMobile }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const handleNavClick = (section) => {
        setActiveSection(section);
        if (isMobile) {
            setIsSidebarOpen(false);
        }
    };

    const navItems = [
        { id: 'about', label: 'About', icon: <User size={20} /> },
        { id: 'skills', label: 'Skills', icon: <Code size={20} /> },
        { id: 'projects', label: 'Projects', icon: <Server size={20} /> },
        { id: 'experience', label: 'Experience', icon: <Briefcase size={20} /> },
        { id: 'coding', label: 'Coding Profiles', icon: <ExternalLink size={20} /> },
        { id: 'contact', label: 'Contact', icon: <Mail size={20} /> },
    ];

    const socialLinks = [
        { id: 'github', label: 'GitHub', icon: <Github size={20} />, url: 'https://github.com/SahilMalavi' },
        { id: 'linkedin', label: 'LinkedIn', icon: <Linkedin size={20} />, url: 'https://www.linkedin.com/in/sahil-malavi/' },
        { id: 'x', label: 'X', icon: <X size={20} />, url: 'https://x.com/MalaviSahil' },
    ];

    return (
        <>
            {isMobile && (
                <button
                    className={`mobile-toggle ${isSidebarOpen ? 'active' : ''}`}
                    onClick={toggleSidebar}
                >
                    {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            )}

            <aside className={`sidebar ${isMobile ? 'mobile' : ''} ${isSidebarOpen ? 'open' : ''}`}>
                <div className="profile-container">
                    <div className="profile-image">
                        <img src={sahil_photo} alt="Profile" />
                    </div>
                    <h2 className="name">Sahil Malavi</h2>
                    <p className="title">Full Stack Developer</p>
                </div>

                <nav className="nav-menu">
                    <ul>
                        {navItems.map((item) => (
                            <li key={item.id} className={activeSection === item.id ? 'active' : ''}>
                                <button onClick={() => handleNavClick(item.id)}>
                                    {item.icon}
                                    <span>{item.label}</span>
                                </button>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className="social-links">
                    {socialLinks.map((link) => (
                        <a
                            key={link.id}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            title={link.label}
                        >
                            {link.icon}
                        </a>
                    ))}
                </div>
            </aside>
        </>
    );
};

export default Sidebar;