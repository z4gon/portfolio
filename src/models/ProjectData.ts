import { ProjectLink } from './ProjectLink'

export interface ProjectData {
    id: string
    thumbnailUrl: string
    metaImageUrl: string
    imagesUrls: string[]
    youtubeVideoId?: string
    title: string
    subtitle: string
    text: string
    links: ProjectLink[]
    gitHubUrl?: string
    appleAppStoreUrl?: string
    googlePlayStoreUrl?: string
}
