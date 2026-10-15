# Khin Khin Su Mon — Portfolio

A responsive React 18 portfolio built with Vite, Bootstrap 5, React Router, React Hook Form, and AOS. The site is a static GitHub Pages deployment; portfolio content is maintained in JSON and contact form submissions are stored only in the visitor's browser.

## Development

```sh
npm ci
npm run dev
```

Run `npm run lint` and `npm run build` to check the production app locally. `npm run preview` serves the built site.

## Content and folders

- `src/data/profile.json` — identity, biography, contact links, education, statistics, and highlights.
- `src/data/skills.json` — proficiency values and skill categories.
- `src/data/experience.json` — work history. Dates not supplied in the requirements are intentionally identified as not provided.
- `src/data/projects.json` — project descriptions, technologies, categories, links, and local illustrations.
- `src/components/` — shared navigation, content, theme, and contact components.
- `src/pages/` — lazily loaded HashRouter routes.
- `src/hooks/` and `src/services/` — theme and page metadata hooks, and local contact-message storage.
- `src/assets/images/` and `src/assets/resume/` — project artwork and downloadable résumé.

Contact messages are stored under `portfolio-contact-messages` in local storage and are not sent to a server.

## GitHub Pages

The Vite base path and `HashRouter` are configured for `https://smkk01.github.io/My.Portfolio/`. The GitHub Actions workflow runs lint and a production build for pull requests; pushes to `main` and manual workflow runs publish that verified build to the `gh-pages` branch. The repository's GitHub Pages setting must use the `gh-pages` branch and `/ (root)` folder. To deploy manually, run:

```sh
npm run deploy
```
