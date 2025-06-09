import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa';
import './ExperienceSection.css';

const ExperienceSection = ({ preview = false }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const experiences = [
        {
            id: 1,
            role: 'Open-Source Contributor',
            company: 'GirlScript Summer of Code (GSSoC)\'24',
            duration: 'Oct 2024 - Nov 2024',
            description: 'Contributed to open-source projects by debugging issues, developing new features, and optimizing code. Worked on projects using technologies such as Machine Learning, JavaScript, React.js, and Python.',
            type: 'work',
            skills: ['JavaScript', 'React.js', 'Python', 'Machine Learning']
        },
        {
            id: 2,
            role: 'Data Analytics Intern',
            company: 'Connecting Dreams Foundation | VOIS',
            duration: 'Oct 2024 - Nov 2024',
            description: 'Applied data analytics techniques to derive actionable insights for strategic decision-making. Gained hands-on experience in data processing and visualization over four weeks.',
            type: 'work',
            skills: ['Data Analytics', 'Data Processing', 'Data Visualization']
        },
        {
            id: 3,
            role: 'AI-ML Intern',
            company: 'India Edu Community by Google for Developers',
            duration: 'Apr 2024 - Jun 2024',
            description: 'Strengthened foundational knowledge in neural networks, deep learning, and data analytics.',
            type: 'work',
            skills: ['Neural Networks', 'Deep Learning', 'Data Analytics']
        },
        {
            id: 4,
            role: 'B.Tech in Computer Science and Engineering',
            company: 'DKTE Society\'s Textile and Engineering Institute, Ichalkaranji',
            duration: '2023 - Present',
            description: 'Currently pursuing B.Tech with a CGPA of 8.36.',
            type: 'education',
            skills: ['Computer Science and Engineering']
        },
        {
            id: 7, // New ID for Honors degree
            role: 'Honors Degree in Data Science',
            company: 'DKTE Society\'s Textile and Engineering Institute, Ichalkaranji',
            duration: '2023 - Present', // Assuming it runs concurrently with B.Tech
            description: 'Pursuing an Honors degree in Data Science with a CGPA of 8.7.',
            type: 'education',
            skills: ['Data Science', 'Machine Learning', 'Statistical Analysis'] // Added relevant skills
        },
        {
            id: 5,
            role: 'Diploma in Computer Engineering',
            company: 'Institute of Civil and Rural Engineering, Gargoti',
            duration: '2020 - 2023',
            description: 'Completed with 89.83%.',
            type: 'education',
            skills: ['Computer Engineering']
        },
        {
            id: 6,
            role: '10th Grade (SSC)',
            company: 'Kisanrao More High School, Saravade',
            duration: '2019 - 2020',
            description: 'Completed with 91.60%.',
            type: 'education',
            skills: []
        }
    ];
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5
            }
        }
    };

    const filteredExperiences = preview
        ? experiences.slice(0, 2)
        : experiences;

    return (
        <section className="experience-section" id="experience">
            <div className="section-container">
                <h2 className="section-title">
                    <span>Experience</span> & Education
                </h2>

                <motion.div
                    className="timeline"
                    variants={containerVariants}
                    initial="hidden"
                    animate={isVisible ? "visible" : "hidden"}
                >
                    {filteredExperiences.map((exp) => (
                        <motion.div
                            key={exp.id}
                            className="timeline-item"
                            variants={itemVariants}
                        >
                            <div className="timeline-icon">
                                {exp.type === 'work' ? <FaBriefcase /> : <FaGraduationCap />}
                            </div>
                            <br></br>
                            <div className="timeline-content">
                                <h3>{exp.role}</h3>
                                <h4>{exp.company}</h4>
                                <p className="timeline-date">{exp.duration}</p>
                                <p className="timeline-description">{exp.description}</p>
                                <div className="timeline-skills">
                                    {exp.skills.map((skill, index) => (
                                        <span key={index} className="skill-tag">{skill}</span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {preview && (
                    <div className="section-footer">
                        <a href="#experience" onClick={() => window.location.hash = "#experience"} className="see-more">
                            See More
                        </a>
                    </div>
                )}
            </div>
        </section>
    );
};

export default ExperienceSection;