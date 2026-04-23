import { projects } from '../constants/project_elements.js';

function Projects() {
    return (
        <section id="projects" className="container">
            <h2>Projects</h2>
            {projects.length === 0 ? (
                <p>No projects to display yet.</p>
            ) : (
                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <div key={index} className="project-card">
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            <div className="tech-stack">
                                {project.technologies.map((tech, i) => (
                                    <span key={i} className="tech-tag">{tech}</span>
                                ))}
                            </div>
                            <a href={project.link} className="btn" target="_blank" rel="noopener noreferrer">View Project</a>
                        </div>
                    ))}
                </div>
            )}
        </section>
    );
}

export default Projects;