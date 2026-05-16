import { name } from '../constants/personal_info.js';
import { gh_url, in_url } from '../constants/social_urls.js';
import { Link } from 'react-scroll';

function Header() {
    return (
        <header className="hero">
            <div className="hero-content">
                <img src={`${process.env.PUBLIC_URL}/profile.JPEG`} alt={name} className="profile-img" />
                <h1>{name}</h1>

                <div className="social-links">
                    <a href={gh_url} target="_blank" rel="noopener noreferrer" className="social-icon" title="GitHub">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                    </a>
                    <a href={in_url} target="_blank" rel="noopener noreferrer" className="social-icon" title="LinkedIn">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                    </a>
                </div>

                <nav>
                    <Link to="aboutme" spy={true} smooth={true} offset={0} duration={500}>About Me</Link>
                    <Link to="projects" spy={true} smooth={true} offset={0} duration={500}>Projects</Link>
					<Link to="experiences" spy={true} smooth={true} offset={0} duration={500}>Experiences</Link>
                    <Link to="skills" spy={true} smooth={true} offset={0} duration={500}>Skills</Link>
                </nav>
            </div>
        </header>
    );
}

export default Header; 