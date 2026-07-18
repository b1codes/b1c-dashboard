import type { Project } from '../types'

/**
 * Portfolio projects registry.
 *
 * This file drives the home page listing (cards, grid, featured sections)
 * and the project page router.
 *
 * NOTE: Adding an entry here does NOT auto-generate a detail page.
 * Each project's bespoke page must be created manually at:
 *   frontend/src/pages/projects/<slug>/index.tsx
 *
 * Fields:
 *   slug          - URL-safe ID; must match the /pages/projects/<slug>/ folder
 *   title         - Display name
 *   platform      - Primary tech category ('flutter' | 'react' | 'ios' | 'python' | 'java' | 'rust' | 'devops' | 'other')
 *   shortDescription - 1–2 sentence summary for card views
 *   techStack     - Array of technology label strings (add as pages are built)
 *   links.github  - GitHub repo URL
 *   links.live    - Live subdomain URL (prefer subdomain field; use links.live for external URLs)
 *   gradientConfig - { from, to } hex colors for the project's liquid gradient accent
 *   hasSubdomain  - Whether a live subdomain exists
 *   subdomain     - Subdomain prefix for https://<subdomain>.b1codes.com
 *   isPublic      - Whether to show this project on the public site
 *   repoPair      - For projects with separate public/private repos
 *   featured      - If true, shown prominently in the hero/featured section
 */
export const projects: Project[] = [

  // ─── Featured ────────────────────────────────────────────────────────────

  {
    slug: 'b1c-dashboard',
    title: 'B1C Dashboard',
    platform: 'react',
    folder: 'b1c-dashboard',
    shortDescription:
      'High-fidelity central portfolio and visual spectacle — architectural breakdowns, live app routing hub, and dev log.',
    techStack: ['React', 'TypeScript', 'Vite', 'Framer Motion', 'MDX', 'GCP'],
    links: { github: 'https://github.com/BrandonLC2020/b1c-dashboard' },
    gradientConfig: { from: '#0D47A1', to: '#1976D2' },
    hasSubdomain: false,
    isPublic: true,
    publishedAt: '2026-07-01',
    featured: true,
  },

  // ─── Flutter ─────────────────────────────────────────────────────────────

  {
    slug: 'book-cover-speed-dating',
    title: 'Book Cover Speed Dating',
    platform: 'flutter',
    folder: 'Book-Cover-Speed-Dating',
    shortDescription: 'A Flutter app for discovering books by swiping on covers — speed-dating for your reading list.',
    techStack: ['Flutter', 'Dart'],
    gradientConfig: { from: '#0468D7', to: '#0096FF' },
    hasSubdomain: true,
    subdomain: 'book-cover-speed-dating',
    isPublic: true,
    publishedAt: '2024-01-01',
  },
  {
    slug: 'excess-budget',
    title: 'Excess Budget Management',
    platform: 'flutter',
    folder: 'Excess-Budget-Management',
    shortDescription: 'Flutter budgeting app for tracking and allocating excess funds across savings categories.',
    techStack: ['Flutter', 'Dart'],
    gradientConfig: { from: '#0468D7', to: '#0096FF' },
    hasSubdomain: true,
    subdomain: 'excess-budget',
    isPublic: true,
    publishedAt: '2024-01-01',
  },
  {
    slug: 'grocery-management',
    title: 'Grocery Management',
    platform: 'flutter',
    folder: 'Grocery-Management-Flutter-App',
    shortDescription: 'Flutter grocery list and pantry management app with smart categorization.',
    techStack: ['Flutter', 'Dart'],
    gradientConfig: { from: '#0468D7', to: '#0096FF' },
    hasSubdomain: true,
    subdomain: 'grocery-management',
    isPublic: true,
    publishedAt: '2024-01-01',
  },
  {
    slug: 'lyrics-guesser',
    title: 'Lyrics Guesser Mini Game',
    platform: 'flutter',
    folder: 'Lyrics-Guesser-Mini-Game',
    shortDescription: 'Flutter mini-game where players guess songs from partial lyrics.',
    techStack: ['Flutter', 'Dart'],
    gradientConfig: { from: '#0468D7', to: '#0096FF' },
    hasSubdomain: true,
    subdomain: 'lyrics-guesser',
    isPublic: true,
    publishedAt: '2024-01-01',
  },
  {
    slug: 'map-my-friends',
    title: 'Map My Friends',
    platform: 'flutter',
    folder: 'Map-My-Friends',
    shortDescription: 'Real-time friend location sharing app built with Flutter and Google Maps.',
    techStack: ['Flutter', 'Dart', 'Google Maps'],
    gradientConfig: { from: '#0468D7', to: '#0096FF' },
    hasSubdomain: true,
    subdomain: 'map-my-friends',
    isPublic: true,
    publishedAt: '2024-01-01',
  },
  {
    slug: 'is-it-open',
    title: 'Is It Open',
    platform: 'flutter',
    folder: 'is-it-open',
    shortDescription: 'Flutter app for checking real-time business hours and open/closed status.',
    techStack: ['Flutter', 'Dart'],
    gradientConfig: { from: '#0468D7', to: '#0096FF' },
    hasSubdomain: true,
    subdomain: 'is-it-open',
    isPublic: true,
    publishedAt: '2024-01-01',
  },

  // ─── React ───────────────────────────────────────────────────────────────

  {
    slug: 'portfolio-showcase',
    title: 'Portfolio Showcase',
    platform: 'react',
    folder: 'dev-portfolio',
    shortDescription: 'Open-source template version of the B1C developer portfolio — fork and customize.',
    techStack: ['React', 'TypeScript'],
    gradientConfig: { from: '#0EA5E9', to: '#61DAFB' },
    hasSubdomain: false,
    isPublic: true,
    publishedAt: '2024-01-01',
  },
  {
    slug: 'march-madness-stats',
    title: 'March Madness Stats',
    platform: 'react',
    folder: 'MarchMadnessStats',
    shortDescription: 'React web app for visualizing NCAA March Madness bracket statistics and predictions.',
    techStack: ['React', 'TypeScript', 'D3'],
    gradientConfig: { from: '#0EA5E9', to: '#61DAFB' },
    hasSubdomain: true,
    subdomain: 'march-madness-stats',
    isPublic: true,
    publishedAt: '2024-01-01',
  },
  {
    slug: 'redirect-inspector',
    title: 'Redirect Inspector',
    platform: 'react',
    folder: 'PersonalRedirectInspectorWebApp',
    shortDescription: 'Web app for tracing and inspecting HTTP redirect chains step by step.',
    techStack: ['React', 'TypeScript'],
    gradientConfig: { from: '#0EA5E9', to: '#61DAFB' },
    hasSubdomain: true,
    subdomain: 'redirect-inspector',
    isPublic: true,
    publishedAt: '2024-01-01',
  },
  {
    slug: 'spotify-stats',
    title: 'Spotify Stats',
    platform: 'react',
    folder: 'PersonalSpotifyStatsWebApp',
    shortDescription: 'Personal Spotify statistics dashboard — top tracks, artists, and listening trends.',
    techStack: ['React', 'TypeScript', 'Spotify API'],
    gradientConfig: { from: '#1DB954', to: '#169C46' },
    hasSubdomain: true,
    subdomain: 'spotify-stats',
    isPublic: true,
    publishedAt: '2024-01-01',
  },
  {
    slug: 'timeblock',
    title: 'TimeBlock',
    platform: 'react',
    folder: 'TimeBlock',
    shortDescription: 'Time-blocking productivity app for structuring your day with visual schedule blocks.',
    techStack: ['React', 'TypeScript'],
    gradientConfig: { from: '#0EA5E9', to: '#61DAFB' },
    hasSubdomain: true,
    subdomain: 'timeblock',
    isPublic: true,
    publishedAt: '2024-01-01',
  },
  {
    slug: 'watchlist',
    title: 'WatchList',
    platform: 'react',
    folder: 'WatchList-React-App',
    shortDescription: 'React app for tracking movies and TV shows — your personal watch queue.',
    techStack: ['React', 'TypeScript', 'TMDB API'],
    gradientConfig: { from: '#0EA5E9', to: '#61DAFB' },
    hasSubdomain: true,
    subdomain: 'watchlist',
    isPublic: true,
    publishedAt: '2024-01-01',
  },
  {
    slug: 'git-activity-tracker',
    title: 'Git Activity Tracker',
    platform: 'react',
    folder: 'git-activity-tracker',
    shortDescription: 'Visual GitHub activity tracker — contribution streaks, repo stats, and commit heatmaps.',
    techStack: ['React', 'TypeScript', 'GitHub API'],
    gradientConfig: { from: '#0EA5E9', to: '#61DAFB' },
    hasSubdomain: true,
    subdomain: 'git-activity-tracker',
    isPublic: true,
    publishedAt: '2024-01-01',
  },

  // ─── iOS ─────────────────────────────────────────────────────────────────

  {
    slug: 'dual-weather',
    title: 'Dual Weather',
    platform: 'ios',
    folder: 'Dual-Weather-iOS',
    shortDescription: 'iOS weather app showing side-by-side conditions for two locations simultaneously.',
    techStack: ['Swift', 'SwiftUI'],
    gradientConfig: { from: '#1C1C1E', to: '#48484A' },
    hasSubdomain: false,
    isPublic: true,
    publishedAt: '2024-01-01',
  },
  {
    slug: 'edgeguard',
    title: 'EdgeGuard',
    platform: 'ios',
    folder: 'EdgeGuard',
    shortDescription: 'iOS privacy and security utility for monitoring app permissions and network activity.',
    techStack: ['Swift', 'SwiftUI'],
    gradientConfig: { from: '#1C1C1E', to: '#48484A' },
    hasSubdomain: false,
    isPublic: true,
    publishedAt: '2024-01-01',
  },
  {
    slug: 'life-xp',
    title: 'Life XP',
    platform: 'ios',
    folder: 'Life-XP-iOS',
    shortDescription: 'Habit and goal tracking app with RPG-style experience points and leveling system.',
    techStack: ['Swift', 'SwiftUI'],
    gradientConfig: { from: '#1C1C1E', to: '#48484A' },
    hasSubdomain: false,
    isPublic: true,
    publishedAt: '2024-01-01',
  },
  {
    slug: 'listenlist',
    title: 'ListenList',
    platform: 'ios',
    folder: 'ListenList',
    shortDescription: 'iOS app for curating and tracking music albums you want to listen to.',
    techStack: ['Swift', 'SwiftUI'],
    gradientConfig: { from: '#1C1C1E', to: '#48484A' },
    hasSubdomain: false,
    isPublic: true,
    publishedAt: '2024-01-01',
  },
  {
    slug: 'lucidboard',
    title: 'LucidBoard',
    platform: 'ios',
    folder: 'LucidBoard',
    shortDescription: 'iOS digital whiteboard app with fluid drawing tools and real-time collaboration.',
    techStack: ['Swift', 'SwiftUI'],
    gradientConfig: { from: '#1C1C1E', to: '#48484A' },
    hasSubdomain: false,
    isPublic: true,
    publishedAt: '2024-01-01',
  },
  {
    slug: 'music-stats',
    title: 'Music Stats',
    platform: 'ios',
    folder: 'Music-Stats-iOS',
    shortDescription: 'iOS app for analyzing Apple Music listening history and trends.',
    techStack: ['Swift', 'SwiftUI', 'MusicKit'],
    gradientConfig: { from: '#1C1C1E', to: '#48484A' },
    hasSubdomain: false,
    isPublic: true,
    publishedAt: '2024-01-01',
  },
  {
    slug: 'nowplaying',
    title: 'NowPlaying',
    platform: 'ios',
    folder: 'NowPlaying',
    shortDescription: 'iOS widget and app for displaying and sharing what you\'re currently listening to.',
    techStack: ['Swift', 'SwiftUI', 'MusicKit'],
    gradientConfig: { from: '#1C1C1E', to: '#48484A' },
    hasSubdomain: false,
    isPublic: true,
    publishedAt: '2024-01-01',
  },

  // ─── Other Platforms ─────────────────────────────────────────────────────

  {
    slug: 'spotify-stats-backup',
    title: 'Spotify Stats Backup',
    platform: 'python',
    folder: 'PersonalSpotifyStatsBackup',
    shortDescription: 'Python backend / Lambda utility for backing up personal Spotify listening history.',
    techStack: ['Python', 'AWS Lambda', 'Spotify API'],
    gradientConfig: { from: '#3776AB', to: '#FFD43B' },
    hasSubdomain: false,
    isPublic: true,
    publishedAt: '2024-01-01',
  },
  {
    slug: 'tic-tac-toe',
    title: 'Tic Tac Toe GUI',
    platform: 'java',
    folder: 'TicTacToeGUI',
    shortDescription: 'Java desktop GUI implementation of Tic Tac Toe with AI opponent.',
    techStack: ['Java', 'Swing'],
    gradientConfig: { from: '#E76F00', to: '#F89820' },
    hasSubdomain: false,
    isPublic: true,
    publishedAt: '2024-01-01',
  },
  {
    slug: 'brain-indexer',
    title: 'Brain Indexer',
    platform: 'rust',
    folder: 'brain-indexer',
    shortDescription: 'Rust CLI tool for indexing and searching personal notes and knowledge base entries.',
    techStack: ['Rust'],
    gradientConfig: { from: '#CE4A00', to: '#F74C00' },
    hasSubdomain: false,
    isPublic: true,
    publishedAt: '2024-01-01',
  },

  // ─── Infrastructure & Tooling ─────────────────────────────────────────────

  {
    slug: 'devops-platform',
    title: 'DevOps Platform',
    platform: 'devops',
    folder: 'b1codes-devops',
    shortDescription: 'Internal DevOps platform — CI/CD pipelines, infrastructure-as-code, and deployment tooling for all B1C projects.',
    techStack: ['Terraform', 'GCP', 'GitHub Actions', 'Docker'],
    gradientConfig: { from: '#326CE5', to: '#0D47A1' },
    hasSubdomain: false,
    isPublic: true,
    repoPair: {
      publicRepo: 'devops-platform',
      privateRepo: 'llc-infra-core',
    },
    publishedAt: '2024-01-01',
  },
  {
    slug: 'b1codingtool',
    title: 'b1CodingTool',
    platform: 'other',
    folder: 'b1codingTools-library',
    shortDescription: 'Proprietary AI-assisted coding tool and agent configuration library powering B1C development workflows.',
    techStack: ['TypeScript', 'AI'],
    gradientConfig: { from: '#4A148C', to: '#7B1FA2' },
    hasSubdomain: false,
    isPublic: true,
    repoPair: {
      publicRepo: 'b1CodingTool',
      privateRepo: 'b1CodingTool-LLC-lib',
    },
    publishedAt: '2024-01-01',
  },
  {
    slug: 'sports-showcase',
    title: 'Sports Showcase',
    platform: 'other',
    folder: 'b1creates-sports-lab',
    shortDescription: 'Sports data visualization and analytics showcase — live stats, charts, and interactive dashboards.',
    techStack: ['TypeScript', 'React', 'D3'],
    gradientConfig: { from: '#1B5E20', to: '#2E7D32' },
    hasSubdomain: false,
    isPublic: true,
    repoPair: {
      publicRepo: 'b1creates-sports-showcase',
      privateRepo: 'b1creates-sports-engine',
    },
    publishedAt: '2024-01-01',
  },
]

// ─── Helpers ─────────────────────────────────────────────────────────────────
// Lightweight utilities for querying the registry.
// For more complex filtering, import `projects` directly.

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}

export function getSubdomainProjects(): Project[] {
  return projects.filter((p) => p.hasSubdomain && p.subdomain)
}

export function getProjectsByPlatform(platform: Project['platform']): Project[] {
  return projects.filter((p) => p.platform === platform)
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured && p.isPublic)
}

export function getPublicProjects(): Project[] {
  return projects.filter((p) => p.isPublic)
}

export function getLiveUrl(project: Project, baseDomain = 'b1codes.com'): string | undefined {
  if (project.hasSubdomain && project.subdomain) {
    return `https://${project.subdomain}.${baseDomain}`
  }
  return project.links?.live
}
