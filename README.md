# Mohammed Harish N — Portfolio (React)

A React + Vite conversion of the original single-file HTML portfolio. The visual
design, layout, and styling are preserved exactly; the markup is split into
components and the vanilla JavaScript is reimplemented with React hooks.

## Getting started

```bash
npm install
npm run dev      # start the dev server (http://localhost:5173)
npm run build    # production build into dist/
npm run preview  # preview the production build locally
```

## Project structure

```
portfolio-react/
├── index.html               # Font Awesome + Google Fonts links, #root mount
├── package.json
├── vite.config.js
├── public/
│   ├── profile.jpg          # avatar image
│   └── Mohammed_Harish_Resume.pdf
└── src/
    ├── main.jsx             # React entry point
    ├── App.jsx              # composes all sections, holds drawer/modal state
    ├── index.css            # original stylesheet, unchanged
    ├── data.js              # nav links + contact constants (single source)
    ├── hooks/
    │   ├── useScrollSpy.js   # highlights the active nav link on scroll
    │   └── useReveal.js      # reveal-on-scroll + animated progress bars
    └── components/
        ├── Sidebar.jsx
        ├── MobileNav.jsx     # MobileBar + MobileDrawer + overlay
        ├── Hero.jsx
        ├── Summary.jsx
        ├── Skills.jsx
        ├── Experience.jsx
        ├── CertModal.jsx
        ├── Projects.jsx
        ├── Education.jsx
        ├── Certifications.jsx
        ├── Availability.jsx
        ├── Footer.jsx
        └── BackToTop.jsx
```

## What changed from the HTML version

- `class` → `className`, inline `style="..."` strings → JSX style objects,
  `onclick="..."` → React `onClick` handlers.
- The mobile menu, scroll-spy nav highlighting, reveal-on-scroll animations,
  progress-bar fills, and back-to-top button are now React hooks/state instead
  of direct DOM scripting.
- The certificate modal and mobile drawer are controlled by React state in
  `App.jsx`.
- Repeated content (nav links, skills, projects, availability cards) is driven
  from arrays so it's easy to edit in one place.
- The avatar (previously a large inline base64 string) is served from
  `public/profile.jpg`.
- Smooth anchor scrolling is handled by the existing `scroll-behavior: smooth`
  CSS rule.

## Notes

- The certificate preview image is intentionally empty in the original
  ("Soft copy coming soon"); that placeholder is preserved.
- Replace `public/profile.jpg` and `public/Mohammed_Harish_Resume.pdf` to update
  the photo and CV.
