# Aayush Kumar — Portfolio

A responsive React and Vite portfolio for Aayush Kumar.

## Run locally

```bash
npm install
npm run dev
```

Vite prints the local URL in the terminal (normally `http://localhost:5173`).

## Project structure

- `src/components/` — reusable page sections, navigation, project card, and footer
- `src/assets/logo/` — reserved location for the original personal logo
- `src/App.css` — portfolio component and responsive layout styles
- `src/index.css` — global theme, typography, and accessibility defaults

## Add your own materials

- Replace the profile illustration in `src/components/Hero.jsx` with a portrait.
- Add the original logo to `src/assets/logo/` when available.
- Update the project entries in `src/components/ProjectsSection.jsx` with verified
  project descriptions and image paths. Project previews are placeholders for now.
- Add confirmed experience, education, certificate, seminar, and contact details
  in the corresponding section components.
- The contact form is intentionally a non-submitting preview until a form service
  or backend is connected.
