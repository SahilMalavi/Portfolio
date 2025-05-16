import { ArrowRight } from 'lucide-react';
import './AboutSection.css';
import sahil from "../assets/sm1.jpg";

const AboutSection = ({ preview = false }) => {
    return (
        <section className="section-container about-section">
            <h2 className="section-title">About Me</h2>

            <div className="about-content">
                <div className="about-image">
                    <img src={sahil} alt="Sahil Malavi" />
                </div>

                <div className="about-text">
                    <h3>Hi, I'm <span className="highlight">Sahil Malavi</span></h3>
                    <h4>Full Stack Developer & Machine Learning Enthusiast</h4>

                    <>
                        <p>
                            I'm a passionate Full-Stack Developer skilled in MERN Stack and AI/ML technologies.
                            With experience building 10+ impactful projects including NLP-driven applications
                            and AI chatbots, I combine technical expertise with creative problem-solving.
                        </p>
                        <p>
                            Currently pursuing my B.Tech in Computer Science and Engineering at DKTE Society's
                            Textile and Engineering Institute with a CGPA of 8.36. My journey in tech has equipped me with
                            a diverse skill set spanning from frontend frameworks to backend systems, along with strong
                            foundations in AI and machine learning.
                        </p>
                        <p>
                            Beyond coding, I enjoy participating in hackathons (1st place in Internal Smart India Hackathon),
                            contributing to open-source projects like GirlScript Summer of Code, and solving competitive
                            programming challenges on platforms like LeetCode and GeeksforGeeks.
                        </p>

                        <div className="personal-details">
                            <div className="detail-item">
                                <span className="detail-label">Name:</span>
                                <span className="detail-value">Sahil Vishnu Malavi</span>
                            </div>
                            <div className="detail-item">
                                <span className="detail-label">Email:</span>
                                <span className="detail-value">sahilmalavi96@gmail.com</span>
                            </div>
                            <div className="detail-item">
                                <span className="detail-label">Location:</span>
                                <span className="detail-value">Kolhapur, Maharashtra, India</span>
                            </div>
                            <div className="detail-item">
                                <span className="detail-label">Education:</span>
                                <span className="detail-value">B.Tech in Computer Science (Pursuing)</span>
                            </div>
                        </div>

                        <a
                            href="/resume/Sahil_Vishnu_Malavi_Resume.pdf"
                            download="Sahil Malavi Resume.pdf"
                            className="btn">
                            Download CV <ArrowRight size={16} />
                        </a>
                    </>

                </div>
            </div>
        </section>
    );
};

export default AboutSection;