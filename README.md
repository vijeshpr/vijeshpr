# Vijesh PR — Portfolio Website

A single-page professional portfolio built for a career move into **RCU, Risk
Operations, Loan Verification, Credit Operations and Banking/NBFC
Operations**. Built with **React + TypeScript + Vite + Tailwind CSS +
lucide-react**.

Vite is used instead of Create React App (which is no longer maintained)
because it gives faster local dev/HMR and a smaller, standard production
build with zero extra config — everything else in the stack (React,
TypeScript, Tailwind, lucide-react) is exactly what was requested.

---

## 1. Project structure

```
portfolio/
├── index.html                  # SEO + Open Graph metadata, font links
├── package.json
├── tailwind.config.ts
├── postcss.config.js
├── vite.config.ts
├── tsconfig.json
├── public/
│   └── favicon.svg
└── src/
    ├── main.tsx                 # React entry point
    ├── App.tsx                  # Assembles all sections
    ├── index.css                # Tailwind + global styles + reveal animation
    ├── data/
    │   └── profile.ts           # ← ALL editable content lives here
    ├── hooks/
    │   └── useReveal.ts         # Scroll-reveal (respects reduced motion)
    └── components/
        ├── Navbar.tsx
        ├── Hero.tsx
        ├── ProfessionalHighlights.tsx
        ├── About.tsx
        ├── Expertise.tsx
        ├── ExperienceTimeline.tsx
        ├── RCUExperience.tsx
        ├── CareerJourney.tsx
        ├── EducationCertifications.tsx
        ├── CareerObjective.tsx
        ├── Contact.tsx
        └── Footer.tsx
```

---

## 2. Install

Requires Node.js 18+.

```bash
cd portfolio
npm install
```

## 3. Run locally

```bash
npm run dev
```

Open the URL Vite prints (usually `http://localhost:5173`).

## 4. Build for production

```bash
npm run build
npm run preview   # optional: serve the production build locally
```

The build output goes to `dist/`.

---

## 5. Before you deploy — replace these placeholders

Everything below lives in **`src/data/profile.ts`** unless noted otherwise.

| Placeholder | Where | Replace with |
|---|---|---|
| `contact.phone` | `profile.ts` | Your phone number |
| `contact.email` | `profile.ts` | Your email address |
| `contact.linkedin` | `profile.ts` | Your LinkedIn profile URL |
| `resumeUrl` | `profile.ts` | Path to your hosted resume PDF, e.g. put the file at `public/resume.pdf` and set this to `/resume.pdf` |
| Conneqt dates | `profile.ts` → `experience` array, and `careerJourneyUnplaced` | Exact employment dates, once confirmed |
| Diploma institution | `profile.ts` → `certifications` | Institution name, once confirmed |
| Canonical URL / OG image | `index.html` | Your real domain, and a real 1200×630 image at `public/og-image.png` |

No employment dates, titles, companies or certifications were invented —
anything not supplied was marked `[TO BE CONFIRMED]` and should be filled in
once you have it.

---

## 6. SEO

Already set in `index.html`:

- **Title:** `Vijesh PR — RCU & Risk Operations Professional`
- **Meta description:** `Vijesh PR — Banking & NBFC professional with 15+ years of experience in RCU field investigation, loan document verification, risk operations and branch operations. Based in Kerala, India.`
- Open Graph + Twitter card tags (update the image and canonical URL once deployed)

---

## 7. Free hosting options

Any of these will deploy a Vite + React app for free:

- **Vercel** — `npm i -g vercel`, then `vercel` from the project root and follow the prompts. Auto-detects Vite.
- **Netlify** — drag-and-drop the `dist/` folder onto [app.netlify.com/drop](https://app.netlify.com/drop), or connect the Git repo with build command `npm run build` and publish directory `dist`.
- **GitHub Pages** — push to a GitHub repo, then use the `gh-pages` package or GitHub Actions to publish the `dist/` folder (set `base` in `vite.config.ts` to your repo name if deploying to `username.github.io/repo-name`).

Vercel or Netlify are the simplest — both give you a live HTTPS URL in under a
minute with no extra configuration.
