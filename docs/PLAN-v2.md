# B1C Dashboard - Implementation Plan v2 (Refinement & Testing)

This version of the plan incorporates **Component-Based CMS logic**, **Performance Guardrails**, and a **Staged Reveal** strategy to ensure a polished launch for future software dev endeavors.

## Phase 1: Workspace & Architecture (Refined)
* **Shared Type Layer:** Create a `shared/` directory at the monorepo root. Move all TypeScript interfaces (e.g., `IProject`, `IGradientConfig`) here so they are imported by both `cms/` and `frontend/`. This prevents "Type Drift" as the 23 projects evolve.
* **Core Logic Centralization:** Establish `frontend/src/core/`. Move non-UI logic (API fetching, state management for the "Spotify Backup" logic, etc.) here to ensure the "unique" project pages remain thin and focused on presentation.

## Phase 2: Modular Content Modeling (Sanity CMS)
* **The "Block" Pattern:** Transition the `project` schema from fixed fields to an **Array of Blocks**. 
    * Define "Spectacle Blocks": `HeroBlock`, `ArchitectureDiagramBlock`, `LiveDemoBlock`, and `CodeSnippetBlock`.
    * Each project page in Sanity will now be a custom sequence of these blocks, allowing for 23 unique layouts without 23 hardcoded React routes.
* **Brand Asset Singleton:** Add a "Theme Switcher" in the CMS to control global "Spectacle" intensity (e.g., controlling the default blur radius for the Glassmorphism).

## Phase 3: The "Spectacle" & Accessibility Layer
* **Performance Toggles:** Implement a `usePerformanceSettings` hook.
    * **Low-GPU Mode:** Disables `backdrop-filter: blur()` and complex liquid gradients for users on older hardware or those with "Reduced Motion" enabled in system settings.
* **Accessibility (A11y) Audit:** * Ensure all Glassmorphism components maintain a **4.5:1 contrast ratio** against dynamic backgrounds.
    * Implement full keyboard navigation (Tab/Enter) for the B1C Dashboard's liquid navigation menus.
* **Framer Motion Refinement:** Use `AnimatePresence` with `mode="wait"` to handle the unique transitions between project pages, preventing layout jumps.

## Phase 4: Frontend Development & Staged Reveal
* **"Top 5" Staging:** Prioritize the full implementation of your 5 most "marketable" projects (e.g., the Spotify Backup, the Sports Content Engine, etc.).
* **The "Under Construction" Spectacle:** For the remaining 18 projects, design a high-fidelity "Coming Soon" block that showcases a wireframe or a "Technical Teaser" to maintain interest without delaying the site launch.
* **Subdomain Routing:** Finalize the logic in `infra/` to ensure `project.b1c.com` redirects seamlessly to the dashboard's specific slug while maintaining the "B1Codes" branding.

## Phase 5: Infrastructure & Monitoring (Terraform)
* **CloudFront Cache Optimization:** Configure specific cache behaviors for your "Spectacle" assets (heavy images/videos) to ensure the site feels "instant" for recruiters in different regions.
* **Automated Testing Pipeline:** Add a pre-deployment step to run **Lighthouse** audits. The goal is 95+ scores in Performance, Accessibility, and Best Practices.

## Phase 6: Validation & "War Room" Testing
* **Browser Stress Test:** Verify the "Glassmorphism" effect across Safari (macOS/iOS), Chrome, and Firefox, as `backdrop-filter` rendering can vary wildly.
* **The "Recruiter Walkthrough":** Simulate a 2-minute visit. Does the "Crowning Jewel" (The Dashboard) effectively lead them to your Upwork profile and top 3 projects without friction?

---

### **Concerns & Proposed Solutions**

| Concern | Solution |
| :--- | :--- |
| **GPU Lag (Glassmorphism)** | Implement the **Low-GPU Mode** toggle that swaps blurs for high-transparency solids. |
| **Maintenance of 23 Pages** | Use the **Block-Based CMS** approach to reuse UI logic while keeping layouts unique. |
| **Delayed Launch** | Adopt the **Staged Reveal**; ship with 5 masterpieces and add the rest iteratively. |
| **A11y in High Design** | Use **Aria-Labels** and semantic HTML markers even on the most abstract "Liquid" components. |
