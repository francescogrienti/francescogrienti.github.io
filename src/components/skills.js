import { skills } from '../constants/skills_elements.js';

function Skills() {
    return (
        <section id="skills" className="container">
            <h2>Skills</h2>
            <div className="skills-grid">
                {skills.map((skillGroup, index) => (
                    <div key={index} className="skill-category">
                        <h3>{skillGroup.category}</h3>
                        <ul className="skill-list">
                            {skillGroup.items.map((skill, i) => (
                                <li key={i} className="skill-item">
                                    <span className="tech-tag">{skill}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Skills;