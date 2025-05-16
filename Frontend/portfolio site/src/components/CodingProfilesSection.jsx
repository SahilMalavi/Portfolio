import { FaGithub, FaCode } from 'react-icons/fa';
import { SiLeetcode, SiGeeksforgeeks } from 'react-icons/si';
import './CodingProfilesSection.css';

const CodingProfilesSection = ({ preview = false }) => {
    const leetcodeUsername = 'sahilmalavi96';

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

    const displayProfiles = preview ? codingProfiles.slice(0, 2) : codingProfiles;

    return (
        <section className="coding-profiles-section" id="coding">
            <div className="section-container">
                <h2 className="section-title">Coding Profiles</h2>

                {!preview && (
                    <div className="leetcode-card-container">
                        <a
                            href={`https://leetcode.com/u/${leetcodeUsername}`}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                src={`https://leetcard.jacoblin.cool/${leetcodeUsername}?theme=dark&font=Ubuntu`}
                                alt={`${leetcodeUsername} LeetCode Stats`}
                                className="leetcode-card-img"
                            />
                        </a>
                    </div>
                )}

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
                            onClick={() => document.querySelector('.nav-menu li[data-section="coding"] button')?.click()}
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
