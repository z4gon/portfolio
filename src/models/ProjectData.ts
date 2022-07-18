import { ProjectLink } from './ProjectLink'

export interface ProjectData {
    id: string
    thumbnailUrl: string
    metaImageUrl: string
    imagesUrls: string[]
    youtubeVideoId?: string
    title: string
    subtitle: string
    description: string[]
    bullets: string[]
    tags: string[]
    links: ProjectLink[]
    gitHubUrl?: string
    appleAppStoreUrl?: string
    googlePlayStoreUrl?: string
}
