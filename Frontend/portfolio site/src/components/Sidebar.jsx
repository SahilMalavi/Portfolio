import { useState } from 'react';
import { useNavigate, useLocation } from "react-router-dom";
import {
    User, Briefcase, Code, Server, Mail, X, Menu,
    Github, Linkedin, ExternalLink
} from 'lucide-react';
import './Sidebar.css';
import sahil_photo from "../assets/sahil_pic.png";

const Sidebar = ({ isMobile }) => {

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();   // tells current URL

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    // navigate instead of setState
    const handleNavClick = (path) => {
        navigate(path);
        if (isMobile) setIsSidebarOpen(false);
    };

    const navItems = [
        { id: 'about', label: 'About', path: '/about', icon: <User size={20} /> },
        { id: 'skills', label: 'Skills', path: '/skills', icon: <Code size={20} /> },
        { id: 'projects', label: 'Projects', path: '/projects', icon: <Server size={20} /> },
        { id: 'experience', label: 'Experience', path: '/experience', icon: <Briefcase size={20} /> },
        { id: 'coding', label: 'Coding Profiles', path: '/coding', icon: <ExternalLink size={20} /> },
        { id: 'contact', label: 'Contact', path: '/contact', icon: <Mail size={20} /> },
    ];

    const socialLinks = [
        { id: 'github', icon: <Github size={20} />, url: 'https://github.com/SahilMalavi' },
        { id: 'linkedin', icon: <Linkedin size={20} />, url: 'https://www.linkedin.com/in/sahil-malavi/' },
    ];

    return (
        <>
            {isMobile && (
                <header className="mobile-header">
                    <div className={`mobile-logo ${isSidebarOpen ? 'hidden' : ''}`}>
                        <img src={sahil_photo} alt="Sahil Malavi" />
                    </div>
                    <button
                        className={`mobile-toggle ${isSidebarOpen ? 'active' : ''}`}
                        onClick={toggleSidebar}
                    >
                        {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </header>
            )}

            <aside className={`sidebar ${isMobile ? 'mobile' : ''} ${isSidebarOpen ? 'open' : ''}`}>
                <div className="profile-container">
                    <div className="profile-image">
                        <img src={sahil_photo} alt="Profile" />
                    </div>
                    <h2 className="name">Sahil Malavi</h2>
                    <p className="title">Software Engineer</p>
                </div>

                <nav className="nav-menu">
                    <ul>
                        {navItems.map((item) => (
                            <li
                                key={item.id}
                                className={location.pathname === item.path ? 'active' : ''}
                            >
                                <button onClick={() => handleNavClick(item.path)}>
                                    {item.icon}
                                    <span>{item.label}</span>
                                </button>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className="social-links">
                    {socialLinks.map((link) => (
                        <a key={link.id} href={link.url} target="_blank" rel="noopener noreferrer">
                            {link.icon}
                        </a>
                    ))}
                </div>
            </aside>
        </>
    );
};

export default Sidebar;
