# B1C Dashboard - Implementation Plan

This plan outlines the step-by-step execution for building the B1C Dashboard, a high-fidelity portfolio and routing engine.

## Phase 1: Workspace & Architecture Setup
Establish the monorepo structure and initialize core configurations.

1.  **Monorepo Initialization:**
    *   Create `cms/`, `frontend/`, and `infra/` directories.
    *   Initialize a root `package.json` (optional, for workspace management).
2.  **Frontend Scaffolding (Vite + TS):**
    *   Initialize Vite in `frontend/` using the `react-ts` template.
    *   Install Tailwind CSS and its dependencies.
    *   Configure `tailwind.config.js` with B1C brand variables (colors, glassmorphism utilities).
3.  **shadcn/ui Integration:**
    *   Initialize shadcn/ui in `frontend/` (`npx shadcn-ui@latest init`).
    *   Ensure components are directed to `src/components/ui/`.
4.  **CMS Initialization (Sanity):**
    *   Initialize Sanity Studio in `cms/`.
    *   Set up the basic project structure and `sanity.config.ts`.

## Phase 2: Content Modeling (Sanity CMS)
Define the data structures that will drive the dashboard.

1.  **Schema Definition:**
    *   Create the `project` document type in `cms/schemas/project.ts`.
    *   Fields: `title`, `slug`, `shortDescription`, `longDescription`, `mainImage`, `techStack` (array), `githubUrl`, `liveUrl`, `gradientConfig` (hex codes for liquid gradients).
2.  **Brand Assets Schema:**
    *   Create a singleton or global schema for site-wide metadata (logo, social links).
3.  **Local Studio Testing:**
    *   Populate initial mock data for projects (Grocery Manager, Lyrics Guesser, etc.).

## Phase 3: Design System & "Spectacle" Components
Implement the core visual aesthetic defined in the SPEC.

1.  **Global Styles:**
    *   Define `--glass-background`, `--glass-border`, and `--glass-blur` in `frontend/src/styles/global.css`.
    *   Implement utility classes for backdrop filters.
2.  **Custom Glass Components:**
    *   Develop `GlassCard`, `GlassButton`, and `GlassNavigation` in `src/components/spectacle/`.
    *   Integrate `framer-motion` for liquid transitions and scroll-linked effects.
3.  **shadcn Customization:**
    *   Modify generated shadcn components to use the glassmorphism variables.

## Phase 4: Frontend Development & Integration
Build the functional React application.

1.  **Sanity Client Setup:**
    *   Configure `@sanity/client` in `frontend/src/lib/sanity.ts`.
    *   Define GROQ queries for project listing and detail views.
2.  **Routing:**
    *   Setup `react-router-dom` in `App.tsx`.
    *   Routes: `/` (Home), `/projects/:slug` (Detail).
3.  **Home Page Implementation:**
    *   Hero section with animated glass elements.
    *   Dynamic Project Grid fetching from Sanity.
4.  **Project Detail Page:**
    *   Deep-dive layout with high-fidelity architecture breakdowns.
    *   "Launch App" logic for subdomain redirects.

## Phase 5: Infrastructure as Code (Terraform)
Define the cloud environment.

1.  **AWS Resource Definition:**
    *   `infra/main.tf`: Define S3 bucket for static hosting.
    *   Configure CloudFront distribution with Origin Access Identity (OAI).
    *   Request/Validate ACM Certificates for `b1c.com`.
2.  **DNS & Edge:**
    *   Configure Route53 or Cloudflare records to point to the CloudFront distribution.

## Phase 6: Deployment & Validation
Finalize the pipeline and verify the implementation.

1.  **Build Process:**
    *   Configure Vite for static export (`npm run build`).
    *   Test build output locally.
2.  **Manual Verification:**
    *   Verify glassmorphism rendering across different browsers.
    *   Test external subdomain routing logic.
    *   Ensure Framer Motion animations are performant.
