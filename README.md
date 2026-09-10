# Dark/Light Mode Portfolio

A developer portfolio website showcasing dark and light theme switching, built as a demonstration of core React features and modern front-end practices.

**Live Site:** [https://psi.github.io/web-dark-light-mode](https://psi.github.io/web-dark-light-mode)

## Overview

This single-page portfolio features a dark/light theme toggle with persistence, a filterable projects gallery, a testimonial carousel, a skills & experience timeline, and a contact section — all fully responsive from mobile to desktop.

## React Features Demonstrated

- **Context API** — `ThemeContext` provides theme state across the entire component tree without prop drilling
- **Custom Hook** — `useTheme()` abstracts context consumption into a reusable hook
- **Controlled Component State** — `useState` drives the project filter, testimonial carousel index, and mobile menu toggle
- **Component Composition** — Parent components manage state and pass data via props to presentational children (e.g., `RecommendationsSection` → `TestimonialCard`)
- **StrictMode** — Enabled in `main.jsx` for highlighting potential issues during development

## Tech Stack

| Category | Technology |
|---|---|
| UI Library | React 19 |
| Build Tool | Vite 8 |
| CSS | Tailwind CSS v4 (utility-first, `dark:` variant via class strategy) |
| Icons | lucide-react, react-icons |
| Linter | oxlint |
| Package Manager | pnpm |
| Hosting | GitHub Pages |

## Key Sections

- **Hero** — Profile introduction with call-to-action buttons
- **Projects** — 10 portfolio cards with category-based filtering (All, Business, Blog, E-Commerce, Portfolio, Mobile, Dashboard)
- **Skills & Experience** — Technology skill grid with icons and a work experience timeline
- **Testimonials** — Carousel with navigation arrows and company logos
- **Contact** — Contact form with name, email, and message fields

## Project Structure

```
src/
├── main.jsx                          # App entry with StrictMode
├── App.jsx                           # Root component with ThemeProvider
├── App.css                           # Tailwind imports + dark mode config
├── context/
│   └── ThemeProvider.jsx             # Theme context + toggle logic
├── data/                             # Content data (projects, testimonials, etc.)
└── components/
    ├── Navbar/                       # Fixed nav with theme toggle + mobile menu
    ├── Hero/                         # Hero section
    ├── ScrollDots/                   # Vertical dot navigation
    ├── ProjectsSection/              # Filterable project grid
    ├── SkillsExperienceSection/      # Skills grid + experience timeline
    ├── RecommendationsSection/       # Testimonial carousel
    ├── ContactSection/               # Contact form
    └── Footer/                       # Site footer
```

## Dark Mode Implementation

The theme toggle uses a **class-based strategy** on the `<html>` element. The `ThemeProvider` context manages the active theme and persists the user's preference to `localStorage`. Tailwind's `dark:` variant is configured via a custom variant in `App.css` to react to the `.dark` class.
