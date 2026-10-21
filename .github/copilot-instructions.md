# Copilot Instructions

## Commands

- `npm ci` installs the locked dependency set.
- `npm run dev` starts the Vite development server.
- `npm run lint` runs ESLint across JavaScript and JSX files.
- `npm run build` creates the production bundle in `dist`.
- `npm run preview` serves the built bundle locally.
- There is no test runner or test script configured, so no single-test command exists. Validate changes with `npm run lint` and `npm run build`.

The GitHub Actions workflow uses Node 22 and runs `npm ci`, `npm run lint`, and `npm run build` for pull requests and `main` pushes.

## Architecture

- This is a static React 18/Vite portfolio deployed to GitHub Pages. There is no backend or database.
- `src\App.jsx` owns the lazy-loaded page routes and their metadata. All pages render inside `components/Layout.jsx`, which provides navigation, footer, theme switching, skip navigation, scroll-to-top behavior, and AOS initialization.
- Routes use `HashRouter` so GitHub Pages can serve deep links. Keep the production Vite base path as `/My.Portfolio/`; `vite.config.js` deliberately uses `/` only for local development.
- Portfolio content is data-driven: maintain identity and biography in `src\data\profile.json`, skills in `src\data\skills.json`, experience in `src\data\experience.json`, and projects in `src\data\projects.json`. Shared display components consume these files on both the home page and dedicated routes.
- Project image keys in `projects.json` must also exist in the `images` map in `src\components\Projects.jsx`, with a corresponding local asset.
- Contact submissions are intentionally stored only in browser local storage through `services\contactStorage.js`; do not add server submission behavior without changing that product constraint.

## Repository Conventions

- Add routes in three places: the lazy import and `<Route>` in `App.jsx`, `routeMeta` in the same file, and the navigation links in `components\Navbar.jsx` when the route is user-facing.
- Preserve accessibility patterns in interactive UI: semantic buttons for actions, labels and error associations for form inputs, `aria-*` state for filters/toggles, and `rel="noreferrer"` for external links opened in a new tab.
- Reuse the design-system classes and CSS variables from `App.css`/`index.css` (for example, `container-narrow`, `section-space`, `card-surface`, `eyebrow`, and `pill`) rather than creating isolated styling patterns.
- Keep dark-mode state synchronized with both `data-theme` and Bootstrap's `data-bs-theme` via `useTheme`. The inline `index.html` initialization prevents a theme flash, so update it if the storage key or theme values change.
- Components that add or materially change `data-aos` elements should call `refreshAnimations` after the DOM changes. The animation service already disables motion when the user requests reduced motion.
- Deployment is performed by `.github\workflows\deploy.yml`, which publishes `dist` to `gh-pages`. `npm run deploy` also builds before publishing.
