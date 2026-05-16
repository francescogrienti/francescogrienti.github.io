import { name, aboutme, location, age } from '../constants/personal_info.js';

function AboutMe() {
    return (
        <section id="aboutme" className="container">
            <h2>About Me</h2>
            <div className="about-container">
                <div className="about-content">
                    <p className="about-text">{aboutme.en}</p>
                    <div className="about-details" style={{ marginTop: '20px', display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
                        <div className="detail-item">
                            <strong>Location:</strong> <span>{location.en}</span>
                        </div>
                        <div className="detail-item">
                            <strong>Age:</strong> <span>{age()} years old</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutMe;