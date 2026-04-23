import { name } from '../constants/personal_info.js';
import { Link } from 'react-scroll';

function Header() {
    return (
        <header>
            <div className="container">
                <h1>{name}</h1>
                <nav>
                    <Link to="aboutme" spy={true} smooth={true} offset={-170} duration={70}>About Me</Link>
                    <Link to="projects" spy={true} smooth={true} offset={-170} duration={70}>Projects</Link>
					<Link to="experiences" spy={true} smooth={true} offset={-170} duration={70}>Experiences</Link>
                    <Link to="skills" spy={true} smooth={true} offset={-170} duration={70}>Skills</Link>
                </nav>

            </div>
        </header>
    );
}

export default Header; 