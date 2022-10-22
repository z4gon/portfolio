import { Tag } from './enums/Tag'
import { Technology } from './enums/Technology'
import { LinkData } from './LinkData'
import { ProjectCardConfig } from './ProjectCardConfig'

export interface ProjectDataMinimal {
    id: string
    title: string
    thumbnailUrl: string
    tags: Tag[]
    technology?: Technology
    cardConfig?: ProjectCardConfig
}

export interface ProjectData extends ProjectDataMinimal {
    aliases?: string[]
    date: string
    metaImageUrl: string
    imagesUrls?: string[]
    youtubeVideoIds?: string[]
    previewImageUrl?: string
    subtitle: string
    description?: string[]
    implementationDetails: string[]
    links?: LinkData[]
    gitHubUrl?: string
    appleAppStoreUrl?: string
    googlePlayStoreUrl?: string
}
