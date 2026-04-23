import { education, career } from '../constants/experiences_elements.js';

function Experiences() {
    return (
        <section id="experiences" className="container">
            <h2>Experiences</h2>
            
            <div className="experience-group">
                <h3>Work Experience</h3>
                {career.map((job, index) => (
                    <div key={index} className="experience-item work">
                        <div className="experience-header">
                            <h4>{job.role}</h4>
                            <span className="period">{job.period}</span>
                        </div>
                        <p className="organization">{job.company}</p>
                        <p>{job.description}</p>
                    </div>
                ))}
            </div>

            <div className="experience-group">
                <h3>Education</h3>
                {education.map((edu, index) => (
                    <div key={index} className="experience-item education">
                        <div className="experience-header">
                            <h4>{edu.degree}</h4>
                            <span className="period">{edu.period}</span>
                        </div>
                        <p className="organization">{edu.school}</p>
                        <p>{edu.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Experiences;