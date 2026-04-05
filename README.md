# May Nguyen — Portfolio Website

A personal portfolio website built with Next.js 16, TypeScript, and Tailwind CSS 4. Features smooth page transitions, a responsive design system, and a custom pastel color palette.

**Live site:** [may-nguyen.ca](https://may-nguyen.ca)

---

## Tech Stack

| Category | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript 5 |
| Styling | Tailwind CSS 4 |
| Animations | Framer Motion 12 |
| Icons | Heroicons, React Icons |
| Contact Form | EmailJS |
| Deployment | Netlify |

---

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── page.tsx            # Landing page
│   ├── explore/            # Explore page
│   ├── about/              # About page
│   ├── experience/         # Work experience page
│   ├── projects/           # Projects list page
│   │   └── [id]/           # Dynamic project detail page
│   └── connect/            # Contact page
├── components/             # Reusable UI components
│   ├── about/              # About page specific components
│   ├── connect/            # Connect page specific components
│   ├── Navigation.tsx      # Sticky navigation bar
│   ├── PageTransition.tsx  # Client-side page transition wrapper
│   ├── PhotoGallery.tsx    # Fullscreen photo gallery
│   └── ProjectCard.tsx     # Project card component
├── data/                   # Static content as TypeScript/JSON
│   ├── projects.json       # Projects data
│   ├── workExperience.ts   # Work experience data
│   ├── experienceDetails.ts# Detailed experience data
│   ├── skills.ts           # Technical skills list
│   ├── education.ts        # Education data
│   ├── socialLinks.ts      # Social media links
│   └── ...                 # Other data files
├── utils/
│   ├── techCategories.ts   # Technology categorization utility
│   └── animationVariants.ts# Shared Framer Motion variants
└── types/
    └── project.ts          # TypeScript interfaces
```

---

## Architecture Decisions

**Server vs Client Components**
The root layout is a server component for optimal performance. Only components that require interactivity (navigation, page transitions, contact form) are marked `"use client"`.

**Data/UI Separation**
All content lives in `src/data/` as typed TypeScript files or JSON, completely decoupled from UI components. This makes content updates straightforward without touching component logic.

**Shared Utilities**
`techCategories.ts` centralizes technology categorization and styling logic, used consistently across the projects page, project detail page, and experience page. `animationVariants.ts` provides shared Framer Motion variants to keep animations consistent across pages.

---

## Getting Started

**Prerequisites:** Node.js 18+

```bash
# Clone the repository
git clone https://github.com/maynguyen26/maynguyen-2.0.git
cd maynguyen-2.0

# Install dependencies
npm install

# Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Available Scripts

```bash
npm run dev      # Start development server with Turbopack
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

---

## Deployment

The site is deployed on Netlify with continuous deployment from the `main` branch. Pushing to `main` automatically triggers a new build and deployment.

A custom domain (`may-nguyen.ca`) is configured via Netlify DNS.

---

## Contact

**May Nguyen** — [maynguyen26@gmail.com](mailto:maynguyen26@gmail.com)

[may-nguyen.ca](https://may-nguyen.ca) · [GitHub](https://github.com/maynguyen26) · [LinkedIn](https://linkedin.com/in/mnguye)
