# B1C Dashboard (`b1c.com`) - Project Specification

## 1. Project Overview
The B1C Dashboard is the central hub and visual-spectacle for the B1C personal brand. It serves a dual purpose: acting as a high-fidelity portfolio to showcase deep-dive architectural breakdowns of past and current projects, and functioning as a cohesive routing engine that directs visitors to publicly accessible web applications hosted on their respective subdomains (e.g., `grocery.b1c.com`).

The application prioritizes cutting-edge UI/UX paradigms, specifically leveraging "frosted glass" and "liquid glass" aesthetics, powered by a headless CMS to ensure scalability and pristine component code.

## 2. Technology Stack
* **Frontend Framework:** React (Standard Web) via Vite
* **Language:** TypeScript
* **Styling:** Tailwind CSS (configured for global B1C brand variables)
* **UI Foundation:** shadcn/ui (un-packaged, CLI-driven components)
* **Animation Engine:** Framer Motion
* **Content Management (CMS):** Sanity Studio (Headless)
* **Infrastructure (IaC):** Terraform
* **Cloud Provider:** AWS (S3 for static hosting, CloudFront for CDN, Route53)
* **DNS & Edge:** Cloudflare

## 3. Repository Architecture
The repository will follow a monorepo-style structure to cleanly separate infrastructure, content modeling, and the frontend web application. Note the specific requirement for the frontend source directory.

```text
b1c-dashboard/
├── cms/                      # Sanity Studio application
│   ├── schemas/              # GROQ-queryable content models (Projects, Brand Assets)
│   ├── sanity.config.ts
│   └── sanity.cli.ts
├── frontend/                 # Vite React Application
│   ├── public/
│   ├── src/                  # ALL React source code must reside here
│   │   ├── components/
│   │   │   ├── ui/           # shadcn/ui generated components
│   │   │   └── spectacle/    # Custom Framer Motion / Glass components
│   │   ├── lib/              # Sanity client config, utility functions
│   │   ├── pages/            # Route components (Home, ProjectDetail)
│   │   ├── styles/
│   │   │   └── global.css    # Tailwind entry point & B1C CSS variables
│   │   ├── App.tsx
│   │   └── main.tsx
│   ├── tailwind.config.js
│   ├── components.json       # shadcn/ui configuration
│   └── vite.config.ts
└── infrastructure/           # Terraform configuration
    ├── main.tf               # S3, CloudFront, ACM definitions
    └── variables.tf
```

## 4. Core Features & Implementation Requirements

### 4.1 Design System & UI Spectacle
* **Glassmorphism:** The core aesthetic relies on `backdrop-filter` utility classes. The `tailwind.config.js` and `global.css` must define root variables for `--glass-background`, `--glass-border`, and `--glass-blur` to ensure consistency across the B1C ecosystem.
* **Interactive Motion:** Use `framer-motion` for all entrance, exit, and scroll-linked animations. Component state changes should utilize liquid-like transitions rather than abrupt snaps.
* **Component Ownership:** Do not install external, black-box component libraries. All standard interactive elements (Cards, Buttons, Dialogs) must be generated via `npx shadcn-ui@latest add [component]` into `frontend/src/components/ui/` and subsequently modified to inherit the B1C glass aesthetic.

### 4.2 Dynamic Routing & Subdomain Redirects
* **External Routing:** The application must handle seamless redirects to external subdomains. For example, a "Launch App" button on the Grocery Manager project page should securely route the user to `grocery.b1c.com`.
* **Internal Deep-Dives:** Implement React Router for internal navigation to project detail pages (e.g., `b1c.com/projects/lyrics-guesser`, `b1c.com/projects/now-playing`, `b1c.com/projects/is-it-open`).

### 4.3 Headless CMS Integration (Sanity)
* **Content Decoupling:** The React components must remain pure presentation layers. All text paragraphs, image URLs, tech stack lists, and phase tracking data must be fetched dynamically from the Sanity backend.
* **Schema Definition:** The `cms/schemas` directory must include a comprehensive `project` document type that accounts for metadata like `shortDescription`, `longDescription`, `techStack` arrays, `githubUrl`, and custom hex codes for project-specific liquid gradients.

### 4.4 Infrastructure & Deployment
* **Static Export:** The Vite application will be built as a static site.
* **Terraform:** The `infrastructure` directory must define an AWS S3 bucket configured for web hosting, securely distributed via an AWS CloudFront distribution, with SSL/TLS management facilitated by Cloudflare.

## 5. Agentic Directives (For Coding Assistants)
When executing tasks within this repository, adhere strictly to the following rules:
1.  **Component Generation:** If a new UI element is required, prioritize generating it via the `shadcn-ui` CLI before writing bespoke HTML/Tailwind from scratch.
2.  **Styling Rules:** Never use hardcoded inline styles. All CSS must be applied via Tailwind utility classes or custom Tailwind directives established in the root configuration.
3.  **Data Fetching:** Do not hardcode project details (like those for the B1Coding Tool or the Portfolio template) into the `.tsx` files. Assume all project data is served via GROQ queries from the Sanity client.
4.  **Directory Awareness:** Ensure all standard web frontend code is placed strictly within the `frontend/src` directory.