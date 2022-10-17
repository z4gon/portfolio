import { Tag } from '../../data/tags'
import { LinkData } from './LinkData'
import { ProjectCardConfig } from './ProjectCardConfig'

export interface ProjectData {
    id: string
    aliases?: string[]
    date: string
    thumbnailUrl: string
    metaImageUrl: string
    imagesUrls: string[]
    youtubeVideoIds?: string[]
    title: string
    subtitle: string
    description?: string[]
    implementationDetails: string[]
    tags: Tag[]
    links?: LinkData[]
    gitHubUrl?: string
    appleAppStoreUrl?: string
    googlePlayStoreUrl?: string
    cardConfig?: ProjectCardConfig
}
