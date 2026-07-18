/**
 * Content utilities for the B1C frontend.
 *
 * Structured content (projects, brand) is imported directly as TypeScript.
 * Blog posts are loaded via Vite's import.meta.glob from /content/blog/*.mdx
 */
import type { BlogPostFrontmatter } from '@content'

/**
 * All blog post modules, lazily loaded via Vite glob import.
 * Each entry contains the MDX component as default and frontmatter as named exports.
 */
const blogModules = import.meta.glob('/content/blog/*.mdx')

export interface BlogPostMeta extends BlogPostFrontmatter {
  /** Derived from the filename, e.g. '2026-07-18-welcome' */
  slug: string
  /** Module path, used internally for dynamic import */
  modulePath: string
}

/**
 * Returns sorted (newest first) metadata for all blog posts.
 * Does NOT load the full MDX content — use loadBlogPost() for that.
 */
export async function getBlogPostList(): Promise<BlogPostMeta[]> {
  const entries = Object.entries(blogModules)
  const posts: BlogPostMeta[] = []

  for (const [modulePath, loader] of entries) {
    const mod = await loader() as { frontmatter?: BlogPostFrontmatter }
    if (!mod.frontmatter) continue

    // Derive slug from filename: '/content/blog/2026-07-18-welcome.mdx' → '2026-07-18-welcome'
    const slug = modulePath.replace('/content/blog/', '').replace('.mdx', '')
    posts.push({ ...mod.frontmatter, slug, modulePath })
  }

  return posts.sort((a, b) => (a.date < b.date ? 1 : -1))
}

/**
 * Loads a single blog post module by slug.
 * Returns the MDX component and its frontmatter.
 */
export async function loadBlogPost(slug: string): Promise<{
  Component: React.ComponentType
  frontmatter: BlogPostFrontmatter
} | null> {
  const modulePath = `/content/blog/${slug}.mdx`
  const loader = blogModules[modulePath]
  if (!loader) return null

  const mod = await loader() as {
    default: React.ComponentType
    frontmatter: BlogPostFrontmatter
  }

  return { Component: mod.default, frontmatter: mod.frontmatter }
}
