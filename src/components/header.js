import { name } from '../constants/personal_info.js';

function Header() {
    return (
        <header>
            <div className="container">
                <h1>{name}</h1>
                <nav>
                    <a href="#aboutme">About Me</a>
                    <a href="#projects">Projects</a>
                    <a href="#skills">Skills</a>
                    <a href="#experiences">Experiences</a>
                </nav>
            </div>
        </header>
    );
}

export default Header; 