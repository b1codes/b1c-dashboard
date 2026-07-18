/**
 * Shared content types for the B1C portfolio.
 *
 * Single source of truth for all content structures — replaces both the
 * former Sanity schema definitions and the now-deleted shared/ package types.
 */

// ─── Primitives ──────────────────────────────────────────────────────────────

export type ProjectPlatform =
  | 'flutter'
  | 'react'
  | 'ios'
  | 'python'
  | 'java'
  | 'rust'
  | 'devops'
  | 'other'

export interface ProjectLink {
  github?: string
  live?: string
}

export interface GradientConfig {
  /** Starting color in hex, e.g. '#0D47A1' */
  from: string
  /** Ending color in hex, e.g. '#1976D2' */
  to: string
}

export interface RepoPair {
  /** Publicly visible GitHub repo name */
  publicRepo: string
  /** Private counterpart repo name (omitted from public renders) */
  privateRepo?: string
}

export interface SocialLink {
  platform: string
  url: string
}

// ─── Project ─────────────────────────────────────────────────────────────────

/**
 * A single project entry.
 *
 * NOTE: This type drives the home page listing (cards, grid, featured sections).
 * Each project's detail page is a fully CUSTOM component at:
 *   frontend/src/pages/projects/<slug>/index.tsx
 *
 * Adding an entry here does NOT auto-generate a detail page —
 * you must also create the custom page component manually.
 */
export interface Project {
  /** URL-safe identifier — must match the folder name under /pages/projects/ */
  slug: string
  title: string
  /** Primary technology platform for filtering and iconography */
  platform: ProjectPlatform
  /** 1–2 sentence summary shown on card and listing views */
  shortDescription?: string
  /** Path relative to /public, e.g. '/images/projects/my-project.jpg' */
  mainImage?: string
  /** Technology labels shown as tags */
  techStack?: string[]
  links?: ProjectLink
  /** Liquid gradient used for the project's card and page accent */
  gradientConfig: GradientConfig
  /** ISO date string, e.g. '2024-01-15' */
  publishedAt?: string
  /** If true, shown prominently in the featured section on home */
  featured?: boolean
  /** Whether a live subdomain exists for this project */
  hasSubdomain: boolean
  /** Subdomain prefix, e.g. 'book-cover-speed-dating' → https://book-cover-speed-dating.b1codes.com */
  subdomain?: string
  /** Whether this project is publicly showcased on the site */
  isPublic: boolean
  /** For projects with separate public/private repos */
  repoPair?: RepoPair
  /** Source folder name — used as documentation/reference */
  folder?: string
}

// ─── Blog ─────────────────────────────────────────────────────────────────────

/**
 * Frontmatter shape for blog posts at /content/blog/*.mdx
 */
export interface BlogPostFrontmatter {
  title: string
  /** ISO date string */
  date: string
  /** Slug of the associated project from projects.ts */
  projectSlug?: string
  /** Short excerpt shown in listing views */
  excerpt: string
  tags?: string[]
}

// ─── Brand ───────────────────────────────────────────────────────────────────

/**
 * Site-wide brand / meta configuration.
 */
export interface BrandConfig {
  siteTitle: string
  siteDescription: string
  author: string
  socialLinks: SocialLink[]
}
