# Francesco Grienti - Personal Portfolio

A modern, responsive personal portfolio website built with **React** and styled with a professional **Forest & Emerald** theme.

## 🚀 Live Demo
The website is intended to be hosted on GitHub Pages:
[francescogrienti.github.io](http://francescogrienti.github.io/)

## 🛠️ Tech Stack
- **Frontend:** React 19
- **Styling:** Modern Vanilla CSS (with CSS Variables & Gradients)
- **Deployment:** GitHub Pages (via `gh-pages`)
- **Icons/Assets:** Integrated SVGs and optimized web fonts

## ✨ Features
- **About Me:** Dynamic introduction with auto-calculating age.
- **Projects:** Grid layout showcasing development work with tech tags and links.
- **Skills:** Categorized technical expertise (Languages, Frontend, Backend, Tools).
- **Experiences:** Chronological timeline for both Professional Career and Education.
- **Responsive Design:** Optimized for mobile, tablet, and desktop views.
- **Clean Architecture:** Strict separation of data (Constants) and layout (Components) for easy maintenance.

## 📁 Project Structure
```text
src/
├── components/   # React components (Header, AboutMe, Projects, etc.)
├── constants/    # Data files (The only place you need to edit content!)
├── App.js        # Main application entry point
└── App.css       # Global styles and theme variables
```

## ⚙️ Getting Started

### Prerequisites
- Node.js installed on your machine.

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/francescogrienti/francescogrienti.github.io.git
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

### Running Locally
To start the development server:
```bash
npm start
```
The app will be available at `http://localhost:3000`.

## ✍️ Customizing Content
You don't need to touch the React components to update your info! Simply edit the files in `src/constants/`:
- `personal_info.js`: Your name, bio, and location.
- `project_elements.js`: List of your projects.
- `skills_elements.js`: Your technical skills.
- `experiences_elements.js`: Your work and education history.
- `social_urls.js`: Links to your GitHub, LinkedIn, etc.

## 🚢 Deployment
To deploy the latest version to your GitHub Pages:
```bash
npm run deploy
```

---
*Created by Francesco Grienti, with the help of GEMINI CLI*
