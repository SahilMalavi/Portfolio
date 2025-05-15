import { useState } from 'react';
import { Github, ExternalLink } from 'lucide-react';
import './ProjectsSection.css';
import bookstore from "../assets/bookstore.png"; 
import rudra_ai from "../assets/rudra_ai.png"; 
import SoftClones from "../assets/softclones.jpg"; 



const ProjectsSection = ({ preview = false }) => {
    const [activeFilter, setActiveFilter] = useState('all');

    const projects = [
        {
            id: 1,
            title: 'Book Store - Recommendation System and sentiment analysis',
            description: 'Developed a bookstore application featuring 50+ books and user reviews. Implemented sentiment analysis with a recommendation system using NLP models.',
            image: bookstore,
            category: 'fullstack',
            technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Python', 'NLP'],
            githubLink: 'https://github.com/SahilMalavi/Book-Store-MERN-ML',
            liveLink: 'https://bookstore-ml.vercel.app/',
        },
        {
            id: 2,
            title: 'Rudra - Personal AI Assistant Chatbot',
            description: 'Created a text-based AI assistant capable of providing suggestions and engaging in conversation. Implemented features like \'Ask to Image\' and \'Chat with PDF\', increasing user engagement by 40%.',
            image: rudra_ai,
            category: 'ml',
            technologies: ['Gemini API', 'Python', 'Streamlit'],
            githubLink: 'https://github.com/SahilMalavi/Rudra-AI',
            liveLink: 'https://rudra-ai.streamlit.app/',
        },
        {
            id: 3,
            title: 'SoftClones - Event Organizer Android App',
            description: 'Built an event management app with 3 modules: Admin, Volunteer, and User. Enabled event creation, volunteer management for 10+ events, and event registration for up to 1,000 simultaneous users.',
            image: SoftClones,
            category: 'mobile',
            technologies: ['Java', 'Firebase', 'Android Studio'],
            githubLink: 'https://github.com/SahilMalavi/Softclones-event-management-app/tree/master',
            liveLink: '',
        }
    ];

    const filters = [
        { id: 'all', label: 'All' },
        { id: 'fullstack', label: 'Full Stack' },
        { id: 'ml', label: 'Machine Learning' },
        { id: 'mobile', label: 'Mobile' },
    ];

    const filteredProjects = activeFilter === 'all'
        ? projects
        : projects.filter(project => project.category === activeFilter);

    const displayedProjects = preview ? projects.slice(0, 3) : filteredProjects;

    return (
        <section className="section-container projects-section" id="projects">
            <h2 className="section-title">My Projects</h2>

            {!preview && (
                <div className="project-filters">
                    {filters.map(filter => (
                        <button
                            key={filter.id}
                            className={`filter-btn ${activeFilter === filter.id ? 'active' : ''}`}
                            onClick={() => setActiveFilter(filter.id)}
                        >
                            {filter.label}
                        </button>
                    ))}
                </div>
            )}

            <div className="projects-grid">
                {displayedProjects.map(project => (
                    <div key={project.id} className="project-card">
                        <div className="project-image">
                            <img src={project.image} alt={project.title} />
                            <div className="project-links">
                                {project.githubLink && (
                                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="project-link">
                                        <Github size={20} />
                                    </a>
                                )}
                                {project.liveLink && (
                                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="project-link">
                                        <ExternalLink size={20} />
                                    </a>
                                )}
                            </div>
                        </div>
                        <div className="project-info">
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            <div className="project-tech">
                                {project.technologies.map(tech => (
                                    <span key={tech} className="tech-tag">{tech}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {preview && (
                <div className="view-all-container">
                    <button
                        className="btn"
                        onClick={() => document.querySelector('.nav-menu li[data-section="projects"] button').click()}
                    >
                        View All Projects
                    </button>
                </div>
            )}
        </section>
    );
};

export default ProjectsSection;