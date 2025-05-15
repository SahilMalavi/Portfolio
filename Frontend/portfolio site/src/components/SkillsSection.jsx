import './SkillsSection.css';

const SkillsSection = ({ preview = false }) => {
    // Updated skills based on your resume
    const programmingLanguages = [
        { name: 'C', icon: '🧠' },
        { name: 'C++', icon: '📚' },
        { name: 'Java', icon: '☕' },
        { name: 'Python', icon: '🐍' },
        { name: 'JavaScript', icon: '🔧' },
        { name: 'SQL', icon: '🗄️' }
    ];

    const webDevelopment = [
        { name: 'HTML', icon: '📝' },
        { name: 'CSS', icon: '🎨' },
        { name: 'JavaScript', icon: '🔧' },
        { name: 'React.js', icon: '⚛️' },
        { name: 'Node.js', icon: '🖥️' },
        { name: 'Express.js', icon: '🚀' },
        { name: 'REST APIs', icon: '🔄' }
    ];

    const aiMl = [
        { name: 'TensorFlow', icon: '🧠' },
        { name: 'Keras', icon: '🤖' },
        { name: 'Scikit-learn', icon: '📊' },
        { name: 'Pandas', icon: '🐼' },
        { name: 'NumPy', icon: '🔢' },
        { name: 'Matplotlib', icon: '📈' }
    ];

    const tools = [
        { name: 'MongoDB', icon: '🗄️' },
        { name: 'Flask', icon: '🌶️' },
        { name: 'Git', icon: '📚' },
        { name: 'GitHub', icon: '🐙' },
        { name: 'Streamlit', icon: '🌊' },
        { name: 'Android Studio', icon: '📱' }
    ];

    const techIcons = {
        React: (
            <svg viewBox="0 0 24 24" fill="none" className="tech-icon">
                <path d="M12 13.5C12.8284 13.5 13.5 12.8284 13.5 12C13.5 11.1716 12.8284 10.5 12 10.5C11.1716 10.5 10.5 11.1716 10.5 12C10.5 12.8284 11.1716 13.5 12 13.5Z" fill="currentColor" />
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM12 15C9.79086 15 8 13.2091 8 11C8 8.79086 9.79086 7 12 7C14.2091 7 16 8.79086 16 11C16 13.2091 14.2091 15 12 15Z" fill="currentColor" />
            </svg>
        ),
        JavaScript: (
            <svg viewBox="0 0 24 24" fill="none" className="tech-icon">
                <path d="M3 3H21V21H3V3Z" fill="#F7DF1E" />
                <path d="M12.75 16.5V14.25C13.575 14.625 14.175 14.7 14.625 14.7C15.075 14.7 15.375 14.475 15.375 14.1C15.375 13.8 15.225 13.575 14.475 13.2C13.425 12.675 12.75 12.075 12.75 10.875C12.75 9.675 13.65 9 14.85 9C15.3 9 15.975 9.075 16.5 9.375V11.625C15.9 11.25 15.375 11.175 15 11.175C14.625 11.175 14.325 11.325 14.325 11.7C14.325 12 14.55 12.225 15.15 12.525C16.425 13.125 16.95 13.8 16.95 15C16.95 16.275 16.05 17.025 14.7 17.025C14.025 17.025 13.35 16.875 12.75 16.5ZM11.25 9.15H9.675V14.025C9.675 16.05 8.85 16.8 7.65 16.8C7.275 16.8 6.975 16.725 6.75 16.65V15C6.9 15.075 7.05 15.075 7.2 15.075C7.725 15.075 8.025 14.775 8.025 13.875V9.15H6.75V7.5H11.25V9.15Z" fill="black" />
            </svg>
        ),
        Python: (
            <svg viewBox="0 0 24 24" fill="none" className="tech-icon">
                <path d="M12 2C9.8 2 8.1 2.6 7 3.4C5.9 4.2 5.3 5.5 5.3 6.9V10H12V11H2V17C2 18.3 2.8 19.6 4 20.4C5.2 21.2 6.9 21.7 8.5 21.9C10.1 22.1 11.9 22.1 13.5 21.9C15.1 21.7 16.8 21.2 18 20.4C19.2 19.6 20 18.3 20 17V14H13V13H22V6.9C22 5.5 21.4 4.2 20.3 3.4C19.2 2.6 17.5 2 15.3 2H12ZM9.5 4.5C10.2 4.5 10.8 5.1 10.8 5.8C10.8 6.5 10.2 7.1 9.5 7.1C8.8 7.1 8.2 6.5 8.2 5.8C8.2 5.1 8.8 4.5 9.5 4.5ZM15 16C15.7 16 16.3 16.6 16.3 17.3C16.3 18 15.7 18.6 15 18.6C14.3 18.6 13.7 18 13.7 17.3C13.7 16.6 14.3 16 15 16Z" fill="#3776AB" />
            </svg>
        ),
        Node: (
            <svg viewBox="0 0 24 24" fill="none" className="tech-icon">
                <path d="M12 2L3 7V17L12 22L21 17V7L12 2Z" fill="#339933" />
                <path d="M12 15.5C11.6 16.5 11.2 16.4 10.9 16.2L9.1 15.1C8.7 14.9 8.9 14.8 9 14.7C9.4 14.6 9.5 14.5 10 14.3C10.1 14.3 10.2 14.3 10.2 14.4L11.6 15.2C11.7 15.3 11.9 15.3 12 15.3C12.1 15.3 12.3 15.3 12.4 15.2L19.1 11.4C19.2 11.3 19.3 11.2 19.3 11C19.3 10.8 19.2 10.7 19.1 10.6L12.4 6.8C12.3 6.7 12.1 6.7 12 6.7C11.9 6.7 11.7 6.7 11.6 6.8L4.9 10.6C4.8 10.7 4.7 10.8 4.7 11V18.6C4.7 18.8 4.8 18.9 4.9 19L7.1 20.3C8.2 20.9 8.9 20.3 8.9 19.7V12.1C8.9 12 9 11.9 9.1 11.9H9.9C10 11.9 10.1 12 10.1 12.1V19.7C10.1 21 9.1 21.9 7.8 21.9C7.3 21.9 6.9 21.9 5.9 21.4L3.8 20.2C3.3 19.9 3 19.3 3 18.6V11C3 10.3 3.3 9.7 3.8 9.4L12.4 4.8C12.9 4.6 13.5 4.6 14 4.8L20.7 8.6C21.2 8.9 21.5 9.5 21.5 10.2V17.8C21.5 18.5 21.2 19.1 20.7 19.4L14 23.2C13.7 23.4 13.3 23.5 12.9 23.5C12.5 23.5 12.1 23.4 11.8 23.2L4.9 19.4C4.8 19.3 4.7 19.2 4.7 19V18.7H7.5V19C7.5 19.1 7.6 19.2 7.7 19.2C7.8 19.3 7.9 19.3 8 19.3C8.1 19.3 8.3 19.3 8.4 19.2L12.4 16.8C12.5 16.7 12.6 16.6 12.6 16.4V14.5C12.6 14.4 12.6 14.3 12.5 14.2C12.4 14.1 12.3 14 12.2 14H9.8C9.7 14 9.6 14.1 9.5 14.2C9.4 14.3 9.3 14.4 9.3 14.5V15.5C9.3 15.6 9.4 15.7 9.5 15.7H10.5C10.7 15.9 11 16.1 11 16.5H9.3C8.9 16.5 8.5 16.3 8.3 16C8.1 15.7 7.9 15.3 7.9 14.9V14.1C7.9 13.7 8.1 13.3 8.3 13C8.5 12.7 8.9 12.5 9.3 12.5H12.6C13 12.5 13.4 12.7 13.6 13C13.8 13.3 14 13.7 14 14.1V16.3C14 16.7 13.8 17.1 13.6 17.4C13.4 17.7 13 17.9 12.6 17.9L12 17.7V16.5V16.5Z" fill="white" />
            </svg>
        ),
        MongoDB: (
            <svg viewBox="0 0 24 24" fill="none" className="tech-icon">
                <path d="M12 2C7.6 2 4 5.6 4 10C4 14.4 7.6 18 12 18C16.4 18 20 14.4 20 10C20 5.6 16.4 2 12 2ZM12 16C8.7 16 6 13.3 6 10C6 6.7 8.7 4 12 4C15.3 4 18 6.7 18 10C18 13.3 15.3 16 12 16Z" fill="#47A248" />
                <path d="M12 11C13.1 11 14 10.1 14 9C14 7.9 13.1 7 12 7C10.9 7 10 7.9 10 9C10 10.1 10.9 11 12 11Z" fill="#47A248" />
                <path d="M12 13C10.3 13 9 14.3 9 16V22H15V16C15 14.3 13.7 13 12 13Z" fill="#47A248" />
            </svg>
        ),
        TensorFlow: (
            <svg viewBox="0 0 24 24" fill="none" className="tech-icon">
                <path d="M12 2L3 7V17L12 22L21 17V7L12 2Z" fill="#FF6F00" />
                <path d="M12 15.5L9 13.5V9.5L12 7.5L15 9.5V13.5L12 15.5Z" fill="white" />
                <path d="M12 15.5V11.5L15 9.5M12 15.5V11.5L9 9.5" stroke="#FF6F00" strokeWidth="0.5" />
            </svg>
        ),
    };

    return (
        <section className="section-container skills-section">
            <h2 className="section-title">My Skills</h2>

            {preview ? (
                <div className="skills-preview">
                    <div className="tech-stack">
                        {Object.keys(techIcons).map((tech) => (
                            <div key={tech} className="tech-icon-container">
                                {techIcons[tech]}
                                <span>{tech}</span>
                            </div>
                        ))}
                    </div>
                </div>
            ) : (
                <div className="skills-container">
                    <div className="skills-category">
                        <h3>Programming Languages</h3>
                        <div className="skills-grid">
                            {programmingLanguages.map((skill) => (
                                <div key={skill.name} className="skill-card simple">
                                    <div className="skill-icon">{skill.icon}</div>
                                    <div className="skill-info">
                                        <h4>{skill.name}</h4>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="skills-category">
                        <h3>Web Development</h3>
                        <div className="skills-grid">
                            {webDevelopment.map((skill) => (
                                <div key={skill.name} className="skill-card simple">
                                    <div className="skill-icon">{skill.icon}</div>
                                    <div className="skill-info">
                                        <h4>{skill.name}</h4>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="skills-category">
                        <h3>AI & Machine Learning</h3>
                        <div className="skills-grid">
                            {aiMl.map((skill) => (
                                <div key={skill.name} className="skill-card simple">
                                    <div className="skill-icon">{skill.icon}</div>
                                    <div className="skill-info">
                                        <h4>{skill.name}</h4>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="skills-category">
                        <h3>Technologies & Tools</h3>
                        <div className="skills-grid">
                            {tools.map((skill) => (
                                <div key={skill.name} className="skill-card simple">
                                    <div className="skill-icon">{skill.icon}</div>
                                    <div className="skill-info">
                                        <h4>{skill.name}</h4>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default SkillsSection;