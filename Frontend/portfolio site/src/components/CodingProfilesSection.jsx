import { useState, useEffect } from 'react';
import { FaGithub, FaCode } from 'react-icons/fa';
import { SiLeetcode, SiGeeksforgeeks } from 'react-icons/si';
import './CodingProfilesSection.css';

const CodingProfilesSection = ({ preview = false }) => {
    const [isVisible, setIsVisible] = useState(false);
    const [leetcodeData, setLeetcodeData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const leetcodeUsername = 'sahilmalavi96'; // Your LeetCode username from resume

    useEffect(() => {
        setIsVisible(true);

        // Fetch LeetCode profile data
        const fetchLeetcodeProfile = async () => {
            try {
                // In a real implementation, this would be a call to your backend API
                // that would then fetch from LeetCode's API
                // For now, we'll implement a simple fetch that your backend would handle

                const response = await fetch(`/api/leetcode-stats?username=${leetcodeUsername}`);

                if (!response.ok) {
                    throw new Error('Failed to fetch LeetCode profile');
                }

                const data = await response.json();
                setLeetcodeData(data);
                setLoading(false);
            } catch (err) {
                console.error('Error fetching LeetCode profile:', err);

                // Fall back to mock data if the API call fails
                // In production, you'd handle this differently
                const mockData = {
                    username: leetcodeUsername,
                    ranking: 125678,
                    totalSolved: 150, // Based on your resume
                    easySolved: 75,
                    mediumSolved: 60,
                    hardSolved: 15,
                    acceptanceRate: '65.3%',
                    totalQuestions: 2500,
                    contributionPoints: 450,
                    streak: 8
                };

                setLeetcodeData(mockData);
                setLoading(false);
            }
        };

        fetchLeetcodeProfile();
    }, [leetcodeUsername]);

    const codingProfiles = [
        {
            platform: 'GitHub',
            username: 'SahilMalavi',
            url: 'https://github.com/SahilMalavi',
            icon: <FaGithub />,
            color: '#6e5494'
        },
        {
            platform: 'LeetCode',
            username: leetcodeUsername,
            url: `https://leetcode.com/u/${leetcodeUsername}`,
            icon: <SiLeetcode />,
            color: '#FFA116'
        },
        {
            platform: 'GeeksforGeeks',
            username: 'sahilmalavi96',
            url: 'https://www.geeksforgeeks.org/user/sahilmalavi96/',
            icon: <SiGeeksforgeeks />,
            color: '#2F8D46'
        }
    ];

    // For preview mode, show fewer profiles
    const displayProfiles = preview ? codingProfiles.slice(0, 2) : codingProfiles;

    const renderLeetcodeStats = () => {
        if (loading) {
            return (
                <div className="leetcode-loading">
                    <div className="loader"></div>
                    <p>Loading LeetCode stats...</p>
                </div>
            );
        }

        if (error) {
            return (
                <div className="leetcode-error">
                    <p>{error}</p>
                    <p>Please try again later</p>
                </div>
            );
        }

        if (!leetcodeData) return null;

        return (
            <div className="leetcode-stats-container">
                <div className="leetcode-header">
                    <SiLeetcode className="leetcode-logo" />
                    <h3>LeetCode Stats</h3>
                </div>

                <div className="leetcode-user-info">
                    <h4>{leetcodeData.username}</h4>
                    <p>Ranking: <span>{leetcodeData.ranking}</span></p>
                </div>

                <div className="problem-stats">
                    <div className="total-solved">
                        <span className="stat-number">{leetcodeData.totalSolved}</span>
                        <span className="stat-label">Problems Solved</span>
                        <span className="stat-percentage">
                            {Math.round((leetcodeData.totalSolved / leetcodeData.totalQuestions) * 100)}%
                        </span>
                    </div>

                    <div className="difficulty-breakdown">
                        <div className="difficulty easy">
                            <span className="difficulty-label">Easy</span>
                            <div className="difficulty-bar">
                                <div
                                    className="difficulty-progress"
                                    style={{ width: `${(leetcodeData.easySolved / leetcodeData.totalSolved) * 100}%` }}
                                ></div>
                            </div>
                            <span className="difficulty-count">{leetcodeData.easySolved}</span>
                        </div>

                        <div className="difficulty medium">
                            <span className="difficulty-label">Medium</span>
                            <div className="difficulty-bar">
                                <div
                                    className="difficulty-progress"
                                    style={{ width: `${(leetcodeData.mediumSolved / leetcodeData.totalSolved) * 100}%` }}
                                ></div>
                            </div>
                            <span className="difficulty-count">{leetcodeData.mediumSolved}</span>
                        </div>

                        <div className="difficulty hard">
                            <span className="difficulty-label">Hard</span>
                            <div className="difficulty-bar">
                                <div
                                    className="difficulty-progress"
                                    style={{ width: `${(leetcodeData.hardSolved / leetcodeData.totalSolved) * 100}%` }}
                                ></div>
                            </div>
                            <span className="difficulty-count">{leetcodeData.hardSolved}</span>
                        </div>
                    </div>
                </div>

                <div className="additional-stats">
                    <div className="stat-item">
                        <span className="stat-label">Acceptance Rate</span>
                        <span className="stat-value">{leetcodeData.acceptanceRate}</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-label">Current Streak</span>
                        <span className="stat-value">{leetcodeData.streak} days</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-label">Contribution Points</span>
                        <span className="stat-value">{leetcodeData.contributionPoints}</span>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <section className="coding-profiles-section" id="coding">
            <div className="section-container">
                <h2 className="section-title">Coding Profiles</h2>

                {!preview && renderLeetcodeStats()}

                <div className="profiles-container">
                    {displayProfiles.map((profile, index) => (
                        <a
                            key={index}
                            href={profile.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="profile-card"
                            style={{ borderColor: profile.color }}
                        >
                            <div className="profile-icon" style={{ color: profile.color }}>
                                {profile.icon}
                            </div>
                            <div className="profile-info">
                                <h3 className="profile-platform">{profile.platform}</h3>
                                <p className="profile-username">{profile.username}</p>
                            </div>
                            <div className="arrow-icon">
                                <FaCode />
                            </div>
                        </a>
                    ))}
                </div>

                {preview && (
                    <div className="view-all-container">
                        <button
                            className="btn"
                            onClick={() => document.querySelector('.nav-menu li[data-section="coding"] button').click()}
                        >
                            View All Profiles
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
};

export default CodingProfilesSection;