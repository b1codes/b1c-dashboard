/**
 * Central re-export for all structured content and helpers.
 * Import from here in the frontend using the @content alias:
 *
 *   import { projects, brand, getProjectBySlug } from '@content'
 */
export { projects, getProjectBySlug, getSubdomainProjects, getProjectsByPlatform, getFeaturedProjects, getPublicProjects, getLiveUrl } from './structured/projects'
export { brand } from './structured/brand'
export type {
  Project,
  ProjectPlatform,
  ProjectLink,
  GradientConfig,
  RepoPair,
  BlogPostFrontmatter,
  BrandConfig,
  SocialLink,
} from './types'
