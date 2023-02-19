import { Category } from './enums/Category'
import { Tag } from './enums/Tag'
import { Technology } from './enums/Technology'
import { LinkData } from './LinkData'

export interface ProjectDataMinimal {
  id: string
  priority: number
  date: string
  aliases?: string[]
  title: string
  thumbnailUrl: string
  tags: Tag[]
  technology?: Technology
  category: Category
}

export interface ProjectData extends ProjectDataMinimal {
  metaImageUrl: string
  imagesUrls?: string[]
  videosUrls?: string[]
  youtubeVideoIds?: string[]
  primaryImageUrl?: string
  primaryVideoUrl?: string
  subtitle: string
  description?: string[]
  implementationDetails: string[]
  links?: LinkData[]
  gitHubUrl?: string
  appleAppStoreUrl?: string
  googlePlayStoreUrl?: string
  markdownContent?: string
}
