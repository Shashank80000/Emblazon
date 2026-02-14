# Emblazon
https://emblazon2k26.vercel.app/

A React + Vite single-page site for a cultural fest, featuring a hero landing experience with parallax/tilt effects and routed sections for Events, Sponsors, Gallery, and Organising Committee.

## Tech Stack
- React
- Vite
- React Router
- Tailwind CSS

## Project Structure
- Entry: `src/main.jsx`
- Root layout + routes: `src/App.jsx`
- Components:
  - `src/Component/Navbar.jsx`
  - `src/Component/Home.jsx`
  - `src/Component/Event.jsx`

























- Navigation is implemented in `Navbar` with styles in `Navbar.css`.- The home background effects and parallax are handled in `Home` with styles in `App.css`.## Notes```npm run lintnpm run previewnpm run buildnpm run dev```sh## Scripts- `/committee` → `OrganisingCommitee`- `/gallery` → `Gallary`- `/sponsors` → `SponsorSection`- `/events` → `Event`- `/` → `Home`## Routes  - `src/Component/Navbar.css`  - `src/App.css`- Styles:  - `src/Component/OrganisingCommitee.jsx`  - `src/Component/Gallary.jsx`  - `src/Component/oursponser.jsx`  - `src/Component/oursponser.jsx`
  - `src/Component/Gallary.jsx`
  - `src/Component/OrganisingCommitee.jsx`
- Styles:
  - `src/App.css`
  - `src/Component/Navbar.css`

## Routes
- `/` → `Home`
- `/events` → `Event`
- `/sponsors` → `SponsorSection`
- `/gallery` → `Gallary`
- `/committee` → `OrganisingCommitee`

## Scripts
```sh
npm run dev
npm run build
npm run preview
npm run lint
```

## Notes
- The home background effects and parallax are handled in `Home` with styles in `App.css`.
- Navigation is implemented in `Navbar` with styles in `Navbar.css`.
