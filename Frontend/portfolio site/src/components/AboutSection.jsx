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
                    <h4>Software Engineer — Backend Focused</h4>

                    <>
                        <p>
                            I build backend services and production-ready web applications with a focus on reliability, performance and clean architecture. My work mainly involves designing REST APIs, handling authentication workflows and structuring databases for real-world usage rather than demos.
                        </p>

                        <p>
                            Currently pursuing my <b>B.Tech in Computer Science at DKTE Society's Textile and Engineering Institute (CGPA 8.49)</b> along with an <b>Honors degree in Data Science (CGPA 8.65)</b>. Through internships and projects, I’ve worked on secure signing workflows, AI-powered features, and real-time service platforms where system behavior and correctness matter.
                        </p>

                        <p>
                            I’m particularly interested in understanding how software behaves in production — debugging issues, improving response time, and making systems more reliable. Long term, I aim to grow into a backend engineer working on scalable product systems and performance-oriented architectures.
                        </p>

                        <div className="personal-details">
                            <div className="detail-item">
                                <span className="detail-label">Name:</span>
                                <span className="detail-value">Sahil Malavi</span>
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
                                <span className="detail-value">B.Tech Computer Science + Honors in Data Science</span>
                            </div>
                        </div>

                        <a
                            href="https://drive.google.com/file/d/1mq0bJcBeGyr3L-58s16B8p4J9KBPrxrC/view?usp=sharing"
                            className="btn">
                            View Resume <ArrowRight size={16} />
                        </a>
                    </>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
