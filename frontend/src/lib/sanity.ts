import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: 'placeholder-id', // User to update later
  dataset: 'production',
  useCdn: true,
  apiVersion: '2023-05-03',
})

const builder = imageUrlBuilder(client)

export function urlFor(source: any) {
  return builder.image(source)
}

export const QUERIES = {
  projects: '*[_type == "project"] | order(_createdAt desc)',
  projectBySlug: '*[_type == "project" && slug.current == $slug][0]',
}
