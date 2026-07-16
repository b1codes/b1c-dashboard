import { ProjectRegistryEntry } from './types.js';

export const projectsRegistry: ProjectRegistryEntry[] = [
  // Special / non-project routes
  {
    title: 'B1C Dashboard',
    slug: 'dashboard',
    folder: 'b1c-dashboard',
    platform: 'react',
    hasSubdomain: false,
    detailsPath: '/',
    isPublic: true,
    description: 'Central Hub, CMS & Portfolio Engine.'
  },
  {
    title: 'Portfolio (Private)',
    slug: 'portfolio',
    folder: 'dev-portfolio',
    platform: 'react',
    hasSubdomain: true,
    subdomain: 'portfolio',
    detailsPath: '',
    isPublic: false,
    description: 'Actual live dev portfolio.'
  },
  {
    title: 'Portfolio-Showcase',
    slug: 'portfolio-showcase',
    folder: 'dev-portfolio',
    platform: 'react',
    hasSubdomain: false,
    detailsPath: '/projects/portfolio-showcase',
    isPublic: true,
    description: 'Open-source template version of the portfolio.'
  },

  // Flutter Projects
  {
    title: 'Book Cover Speed Dating',
    slug: 'book-cover-speed-dating',
    folder: 'Book-Cover-Speed-Dating',
    platform: 'flutter',
    hasSubdomain: true,
    subdomain: 'book-cover-speed-dating',
    detailsPath: '/projects/book-cover-speed-dating',
    isPublic: true
  },
  {
    title: 'Excess Budget Management',
    slug: 'excess-budget',
    folder: 'Excess-Budget-Management',
    platform: 'flutter',
    hasSubdomain: true,
    subdomain: 'excess-budget',
    detailsPath: '/projects/excess-budget',
    isPublic: true
  },
  {
    title: 'Grocery Management',
    slug: 'grocery-management',
    folder: 'Grocery-Management-Flutter-App',
    platform: 'flutter',
    hasSubdomain: true,
    subdomain: 'grocery-management',
    detailsPath: '/projects/grocery-management',
    isPublic: true
  },
  {
    title: 'Lyrics Guesser Mini Game',
    slug: 'lyrics-guesser',
    folder: 'Lyrics-Guesser-Mini-Game',
    platform: 'flutter',
    hasSubdomain: true,
    subdomain: 'lyrics-guesser',
    detailsPath: '/projects/lyrics-guesser',
    isPublic: true
  },
  {
    title: 'Map My Friends',
    slug: 'map-my-friends',
    folder: 'Map-My-Friends',
    platform: 'flutter',
    hasSubdomain: true,
    subdomain: 'map-my-friends',
    detailsPath: '/projects/map-my-friends',
    isPublic: true
  },
  {
    title: 'Is It Open',
    slug: 'is-it-open',
    folder: 'is-it-open',
    platform: 'flutter',
    hasSubdomain: true,
    subdomain: 'is-it-open',
    detailsPath: '/projects/is-it-open',
    isPublic: true
  },

  // React Projects
  {
    title: 'March Madness Stats',
    slug: 'march-madness-stats',
    folder: 'MarchMadnessStats',
    platform: 'react',
    hasSubdomain: true,
    subdomain: 'march-madness-stats',
    detailsPath: '/projects/march-madness-stats',
    isPublic: true
  },
  {
    title: 'Redirect Inspector Web App',
    slug: 'redirect-inspector',
    folder: 'PersonalRedirectInspectorWebApp',
    platform: 'react',
    hasSubdomain: true,
    subdomain: 'redirect-inspector',
    detailsPath: '/projects/redirect-inspector',
    isPublic: true
  },
  {
    title: 'Spotify Stats Web App',
    slug: 'spotify-stats',
    folder: 'PersonalSpotifyStatsWebApp',
    platform: 'react',
    hasSubdomain: true,
    subdomain: 'spotify-stats',
    detailsPath: '/projects/spotify-stats',
    isPublic: true
  },
  {
    title: 'TimeBlock',
    slug: 'timeblock',
    folder: 'TimeBlock',
    platform: 'react',
    hasSubdomain: true,
    subdomain: 'timeblock',
    detailsPath: '/projects/timeblock',
    isPublic: true
  },
  {
    title: 'WatchList React App',
    slug: 'watchlist',
    folder: 'WatchList-React-App',
    platform: 'react',
    hasSubdomain: true,
    subdomain: 'watchlist',
    detailsPath: '/projects/watchlist',
    isPublic: true
  },
  {
    title: 'Git Activity Tracker',
    slug: 'git-activity-tracker',
    folder: 'git-activity-tracker',
    platform: 'react',
    hasSubdomain: true,
    subdomain: 'git-activity-tracker',
    detailsPath: '/projects/git-activity-tracker',
    isPublic: true
  },

  // iOS Projects
  {
    title: 'Dual Weather',
    slug: 'dual-weather',
    folder: 'Dual-Weather-iOS',
    platform: 'ios',
    hasSubdomain: false,
    detailsPath: '/projects/dual-weather',
    isPublic: true
  },
  {
    title: 'EdgeGuard',
    slug: 'edgeguard',
    folder: 'EdgeGuard',
    platform: 'ios',
    hasSubdomain: false,
    detailsPath: '/projects/edgeguard',
    isPublic: true
  },
  {
    title: 'Life XP',
    slug: 'life-xp',
    folder: 'Life-XP-iOS',
    platform: 'ios',
    hasSubdomain: false,
    detailsPath: '/projects/life-xp',
    isPublic: true
  },
  {
    title: 'ListenList',
    slug: 'listenlist',
    folder: 'ListenList',
    platform: 'ios',
    hasSubdomain: false,
    detailsPath: '/projects/listenlist',
    isPublic: true
  },
  {
    title: 'LucidBoard',
    slug: 'lucidboard',
    folder: 'LucidBoard',
    platform: 'ios',
    hasSubdomain: false,
    detailsPath: '/projects/lucidboard',
    isPublic: true
  },
  {
    title: 'Music Stats',
    slug: 'music-stats',
    folder: 'Music-Stats-iOS',
    platform: 'ios',
    hasSubdomain: false,
    detailsPath: '/projects/music-stats',
    isPublic: true
  },
  {
    title: 'NowPlaying',
    slug: 'nowplaying',
    folder: 'NowPlaying',
    platform: 'ios',
    hasSubdomain: false,
    detailsPath: '/projects/nowplaying',
    isPublic: true
  },

  // Other non-web projects
  {
    title: 'Spotify Stats Backup',
    slug: 'spotify-stats-backup',
    folder: 'PersonalSpotifyStatsBackup',
    platform: 'python',
    hasSubdomain: false,
    detailsPath: '/projects/spotify-stats-backup',
    isPublic: true,
    description: 'Python backend/Lambda utility.'
  },
  {
    title: 'Tic Tac Toe GUI',
    slug: 'tic-tac-toe',
    folder: 'TicTacToeGUI',
    platform: 'java',
    hasSubdomain: false,
    detailsPath: '/projects/tic-tac-toe',
    isPublic: true,
    description: 'Java desktop GUI.'
  },
  {
    title: 'Brain Indexer',
    slug: 'brain-indexer',
    folder: 'brain-indexer',
    platform: 'rust',
    hasSubdomain: false,
    detailsPath: '/projects/brain-indexer',
    isPublic: true,
    description: 'Rust CLI.'
  },

  // Internal private/public repo pairs
  {
    title: 'DevOps Platform',
    slug: 'devops-platform',
    folder: 'b1codes-devops',
    platform: 'devops',
    hasSubdomain: false,
    detailsPath: '/projects/devops-platform',
    isPublic: true,
    repoPair: {
      publicRepo: 'devops-platform',
      privateRepo: 'llc-infra-core'
    }
  },
  {
    title: 'b1CodingTool',
    slug: 'b1codingtool',
    folder: 'b1codingTools-library',
    platform: 'other',
    hasSubdomain: false,
    detailsPath: '/projects/b1codingtool',
    isPublic: true,
    repoPair: {
      publicRepo: 'b1CodingTool',
      privateRepo: 'b1CodingTool-LLC-lib'
    }
  },
  {
    title: 'Sports Showcase',
    slug: 'sports-showcase',
    folder: 'b1creates-sports-lab',
    platform: 'other',
    hasSubdomain: false,
    detailsPath: '/projects/sports-showcase',
    isPublic: true,
    repoPair: {
      publicRepo: 'b1creates-sports-showcase',
      privateRepo: 'b1creates-sports-engine'
    }
  }
];

export function getProjectBySlug(slug: string): ProjectRegistryEntry | undefined {
  return projectsRegistry.find((p) => p.slug === slug);
}

export function getSubdomainProjects(): ProjectRegistryEntry[] {
  return projectsRegistry.filter((p) => p.hasSubdomain && p.subdomain);
}

export function getProjectsByPlatform(platform: string): ProjectRegistryEntry[] {
  return projectsRegistry.filter((p) => p.platform === platform);
}

export function getLiveUrl(project: ProjectRegistryEntry, baseDomain = 'b1codes.com'): string | undefined {
  if (project.hasSubdomain && project.subdomain) {
    return `https://${project.subdomain}.${baseDomain}`;
  }
  return undefined;
}
