import { LinkData } from './LinkData'

export interface ProjectData {
    id: string
    date: string
    thumbnailUrl: string
    metaImageUrl: string
    imagesUrls: string[]
    youtubeVideoIds?: string[]
    title: string
    subtitle: string
    description: string[]
    implementationDetails: string[]
    tags: string[]
    links?: LinkData[]
    gitHubUrl?: string
    appleAppStoreUrl?: string
    googlePlayStoreUrl?: string
}
