import React from 'react';
import './SkillsSection.css';

const SkillsSection = () => {

    const programmingLanguages = [
        { name: 'Java', icon: '☕' },
        { name: 'Python', icon: '🐍' },
        { name: 'JavaScript', icon: '⚡' },
        { name: 'C++', icon: '🚀' },
        { name: 'SQL', icon: '🗄️' }
    ];

    const webDevelopment = [
        { name: 'React.js', icon: '⚛️' },
        { name: 'Node.js', icon: '🟢' },
        { name: 'Express.js', icon: '🚂' },
        { name: 'REST APIs', icon: '🌐' },
        { name: 'FastAPI', icon: '⚡' }
    ];

    const databaseCloud = [
        { name: 'MySQL', icon: '🐬' },
        { name: 'PostgreSQL', icon: '🐘' },
        { name: 'MongoDB', icon: '🍃' },
        { name: 'AWS', icon: '☁️' }
    ];

    const aiMl = [
        { name: 'Scikit-learn', icon: '🧠' },
        { name: 'NLP', icon: '🗣️' },
        { name: 'Pandas', icon: '🐼' },
        { name: 'NumPy', icon: '🔢' },
        { name: 'Matplotlib', icon: '📈' }
    ];

    const toolsPlatforms = [
        { name: 'Postman', icon: '🚀' },
        { name: 'Git', icon: '📚' },
        { name: 'GitHub', icon: '🐙' },
        { name: 'Docker', icon: '🐳' },
        { name: 'Vercel', icon: '▲' }
    ];

    const renderCategory = (title, skills, colorClass) => (
        <div className={`skills-category ${colorClass}`}>
            <h3 className="category-title">{title}</h3>
            <div className="skills-grid">
                {skills.map((skill, index) => (
                    <div key={index} className="skill-pill">
                        <span className="skill-icon">{skill.icon}</span>
                        <span className="skill-name">{skill.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );

    return (
        <section className="skills-section">
            <div className="section-header">
                <h2 className="section-title">Technical Skills</h2>
                <div className="title-underline"></div>
            </div>

            <div className="skills-container">
                {renderCategory('Programming Languages', programmingLanguages, 'cat-blue')}
                {renderCategory('Web Development', webDevelopment, 'cat-cyan')}
                {renderCategory('Database & Cloud', databaseCloud, 'cat-purple')}
                {renderCategory('Data & Machine Learning', aiMl, 'cat-orange')}
                {renderCategory('Tools & Platforms', toolsPlatforms, 'cat-green')}
            </div>
        </section>
    );
};

export default SkillsSection;