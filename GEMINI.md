# GEMINI.md - Project Context

## Project Overview
This project is a personal portfolio website for **Francesco Grienti**, built with **React** and bootstrapped using **Create React App**. It is designed to showcase projects, skills, and professional experiences. The application is a single-page application (SPA) intended to be hosted on GitHub Pages.

### Main Technologies
- **React 19**: Frontend library.
- **Create React App (CRA)**: Build and development environment.
- **gh-pages**: Used for deploying the production build to GitHub Pages.
- **Vanilla CSS**: Used for styling (`App.css`, `index.css`).

### Architecture
- **`src/components/`**: Contains React components for different sections of the website (Header, Home, Projects, Skills, Experiences, Contacts). Currently, many of these are placeholders.
- **`src/constants/`**: Holds data elements and configuration, such as personal information, project lists, and social media URLs.
- **`public/`**: Contains static assets like `favicon.ico`, `index.html`, and manifest files.

## Building and Running

### Key Commands
- **Start Development Server**: `npm start`
  Runs the app in development mode at [http://localhost:3000](http://localhost:3000).
- **Production Build**: `npm run build`
  Bundles the app for production in the `build/` folder.
- **Deploy to GitHub Pages**: `npm run deploy`
  Executes `npm run build` and then uses `gh-pages` to deploy the `build/` folder to the `gh-pages` branch.
- **Run Tests**: `npm test`
  Launches the interactive test runner.

## Development Conventions

### Coding Style
- **Functional Components**: The project uses React functional components.
- **Separation of Data and UI**: Static content (like project descriptions and personal info) should be stored in `src/constants/` and imported into components.
- **Naming Conventions**: Components use lowercase filenames (e.g., `header.js`), but the functions within use PascalCase (e.g., `Header`).

### TODOs / Future Work
- [ ] Implement the UI logic in `src/components/` (currently mostly empty).
- [ ] Populate `src/constants/project_elements.js` and `src/constants/experiences_elements.js` with actual content.
- [ ] Fill in the `aboutme` section in `src/constants/personal_info.js`.
