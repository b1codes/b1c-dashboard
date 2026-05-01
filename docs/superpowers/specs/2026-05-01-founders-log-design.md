# Founder's Log - Design Specification

## 1. Objective
Establish a "Founder's Log" page for the B1C Dashboard that acts as a narrative layer for the B1C personal brand. It will document milestones, technical learnings, and biographical growth through a high-fidelity "Liquid Timeline" aesthetic.

## 2. Content Modeling (Sanity CMS)
A new `logEntry` schema will be introduced to handle chronological storytelling while maintaining the "Spectacle" quality of the project deep-dives.

### 2.1 `logEntry` Schema Fields
*   **Metadata:** `title` (string), `slug` (slug), `publishedAt` (datetime).
*   **Classification:** `category` (string dropdown: Milestone, Technical Learning, Vision, Life).
*   **Relationships:** `relatedProjects` (array of references to `project` schema). This creates a non-cyclic link between logs and the artifacts they describe.
*   **Content:** `spectacleBlocks` (array of blocks). Reuse existing block definitions (`HeroBlock`, `CodeSnippetBlock`, `ArchitectureDiagramBlock`) to ensure visual parity with project pages.

## 3. Frontend Architecture (React/Vite)
The Log will be implemented as a new route (`/log`) with tight integration into the "About" and "Project" detail pages.

### 3.1 The "Liquid Timeline" Component
*   **Visual Style:** A central vertical stroke using a `linear-gradient` that appears "liquid" through a combination of Framer Motion `pathLength` animation and a subtle SVG filter.
*   **Entry Cards:** `GlassCard` components that utilize `backdrop-filter` and `framer-motion` for scroll-triggered entrance animations.
*   **Interactive Badges:** Linked projects will appear as small, high-transparency glass badges that deep-link to the project's specific detail page.

### 3.2 Page Integration
*   **Home/About Integration:** A "Latest from the Log" component will be designed for the About page to show the 3 most recent entries.
*   **Project Detail Sync:** If a `logEntry` references a specific `project`, it will automatically appear in a "Related Log Entries" sidebar or footer on that project's page.

## 4. UI Spectacle & Interactions
*   **Scroll-Linked Navigation:** As the user scrolls the timeline, the "Liquid Line" should pulse or change color based on the `category` of the log entry currently in the viewport.
*   **Micro-interactions:** Clicking a "Milestone" category should trigger a subtle particle effect (confetti/shimmer) within the specific card.

## 5. Design Verification
*   **Contrast Check:** Ensure text overlays on Glass Cards remain accessible (4.5:1 ratio) regardless of the content block's background color.
*   **Performance:** The timeline must use `react-window` or similar virtualization if the log grows beyond 50+ entries to maintain 60fps scrolling.
