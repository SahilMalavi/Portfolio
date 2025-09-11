import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaLinkedin, FaGithub } from 'react-icons/fa';
import './ContactSection.css';

const ContactSection = ({ preview = false }) => {
    const [isVisible, setIsVisible] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [result, setResult] = useState('');
    const [loading, setLoading] = useState(false);

    // Web3Forms access key - Replace with your own key
    const WEB3FORMS_ACCESS_KEY = 'c46750b2-2bac-4f68-adfc-586b033c63e8';


    // Framer Motion Variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5
            }
        }
    };

    const formVariants = {
        hidden: { opacity: 0, x: 50 },
        visible: { opacity: 1, x: 0 }
    };

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
        // Clear result when user starts typing
        if (result) setResult('');
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);
        setResult("Sending....");

        const formDataToSend = new FormData(event.target);

        // Add Web3Forms access key
        formDataToSend.append("access_key", WEB3FORMS_ACCESS_KEY);

        // Add your email to receive the form submissions
        formDataToSend.append("to", "sahilmalavi96@gmail.com");

        // Add subject line
        formDataToSend.append("subject", `📧🚀 PORTFOLIO CONTACT REQUEST | ${formData.subject} | ${formData.name}`);
        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formDataToSend
            });

            const data = await response.json();

            if (data.success) {
                setResult("Message sent successfully!");
                setFormData({
                    name: '',
                    email: '',
                    subject: '',
                    message: ''
                });
                event.target.reset();

                // Clear success message after 5 seconds
                setTimeout(() => setResult(''), 5000);
            } else {
                console.log("Error", data);
                setResult("Failed to send message. Please try again.");
            }
        } catch (error) {
            console.error('Form submission error:', error);
            setResult("Network error. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    const contactInfo = [
        {
            icon: <FaEnvelope />,
            label: 'Email',
            value: 'sahilmalavi96@gmail.com',
            link: 'mailto:sahilmalavi96@gmail.com'
        },
        {
            icon: <FaPhoneAlt />,
            label: 'Phone',
            value: '+91 9850528634',
            link: 'tel:+919850528634'
        },
        {
            icon: <FaMapMarkerAlt />,
            label: 'Location',
            value: 'Kolhapur, Maharashtra, India',
            link: 'https://maps.google.com/?q=Kolhapur+Maharashtra+India'
        }
    ];

    const socialLinks = [
        {
            icon: <FaLinkedin />,
            label: 'LinkedIn',
            link: 'https://linkedin.com/in/sahil-malavi'
        },
        {
            icon: <FaGithub />,
            label: 'GitHub',
            link: 'https://github.com/SahilMalavi'
        }
    ];

    return (
        <section className="contact-section" id="contact">
            <div className="section-container">
                <h2 className="section-title">
                    Get in Touch
                </h2>

                <div className="contact-wrapper">
                    <motion.div
                        className="contact-info"
                        variants={containerVariants}
                        initial="hidden"
                        animate={isVisible ? "visible" : "hidden"}
                    >
                        <div className="info-header">
                            <h3>Contact Information</h3>
                            <p>Feel free to reach out! I'm always open to discussing new projects, opportunities, or collaborations.</p>
                        </div>

                        <div className="info-items">
                            {contactInfo.map((item, index) => (
                                <motion.a
                                    key={index}
                                    href={item.link}
                                    className="info-item"
                                    variants={itemVariants}
                                >
                                    <div className="info-icon">
                                        {item.icon}
                                    </div>
                                    <div className="info-content">
                                        <h4>{item.label}</h4>
                                        <p>{item.value}</p>
                                    </div>
                                </motion.a>
                            ))}
                        </div>

                        <div className="social-links">
                            <h4>Connect with me</h4>
                            <div className="social-icons">
                                {socialLinks.map((item, index) => (
                                    <motion.a
                                        key={index}
                                        href={item.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="social-icon"
                                        whileHover={{ y: -5, scale: 1.1 }}
                                    >
                                        {item.icon}
                                        <span className="social-tooltip">{item.label}</span>
                                    </motion.a>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {!preview && (
                        <motion.div
                            className="contact-form-container"
                            variants={formVariants}
                            initial="hidden"
                            animate={isVisible ? "visible" : "hidden"}
                            transition={{ duration: 0.6 }}
                        >
                            <form className="contact-form" onSubmit={handleSubmit}>
                                <h3>Send me a message</h3>

                                <div className="form-group">
                                    <label htmlFor="name">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        placeholder="Your name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        placeholder="Your email address"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="subject">Subject</label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        placeholder="What's this about?"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="message">Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        placeholder="Your message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className={`submit-button ${loading ? 'loading' : ''} ${result.includes('successfully') ? 'submitted' : ''}`}
                                    disabled={loading}
                                >
                                    {loading ? (
                                        <span className="loading-text">Sending...</span>
                                    ) : (
                                        <span>Send Message</span>
                                    )}
                                </button>

                                {result && (
                                    <p className={`result-message ${result.includes('successfully') ? 'success' :
                                        result.includes('Sending') ? 'sending' : 'error'
                                        }`}>
                                        {result}
                                    </p>
                                )}
                            </form>
                        </motion.div>
                    )}
                </div>

                {preview && (
                    <div className="section-footer">
                        <a href="#contact" className="see-more">
                            Contact Me
                        </a>
                    </div>
                )}
            </div>
        </section>
    );
};

export default ContactSection;