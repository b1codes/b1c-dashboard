import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import type React from 'react'
import { loadProjectPage } from '@/lib/projectPages'

/**
 * Resolves /projects/:slug to the project's bespoke custom page component.
 * Each project page lives at /src/pages/projects/<slug>/index.tsx and is
 * fully hand-crafted — not templated from content data.
 */
export function ProjectPageRouter() {
  const { slug } = useParams<{ slug: string }>()
  const [Page, setPage] = useState<React.ComponentType | null>(null)
  const [notFound, setNotFound] = useState(false)

  useEffect(() => {
    if (!slug) return
    loadProjectPage(slug).then((Component) => {
      if (Component) setPage(() => Component)
      else setNotFound(true)
    })
  }, [slug])

  if (notFound) return <div>Project not found</div>
  if (!Page) return null // or a loading shimmer
  return <Page />
}
