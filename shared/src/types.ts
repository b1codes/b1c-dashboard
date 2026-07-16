export type ProjectPlatform = 'flutter' | 'react' | 'ios' | 'python' | 'java' | 'rust' | 'devops' | 'other';

export interface ProjectLinks {
  github?: string;
  live?: string;
}

export interface ProjectGradientConfig {
  from: string;
  to: string;
}

export interface ProjectRegistryEntry {
  title: string;
  slug: string;
  folder: string;
  platform: ProjectPlatform;
  hasSubdomain: boolean;
  subdomain?: string;
  detailsPath: string; // e.g. "/projects/slug"
  isPublic: boolean;
  repoPair?: {
    publicRepo: string;
    privateRepo?: string;
  };
  description?: string;
}
