/**
 * Project page loader.
 * Each project has a fully custom page at /src/pages/projects/<slug>/index.tsx
 * This utility dynamically loads the right page component by slug.
 */
import type React from 'react'

const projectPageModules = import.meta.glob('/src/pages/projects/*/index.tsx')

export async function loadProjectPage(slug: string): Promise<React.ComponentType | null> {
  const modulePath = `/src/pages/projects/${slug}/index.tsx`
  const loader = projectPageModules[modulePath]
  if (!loader) return null
  const mod = await loader() as { default: React.ComponentType }
  return mod.default
}
