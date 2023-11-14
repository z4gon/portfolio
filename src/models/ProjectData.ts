import { Category } from './enums/Category'
import { Tag } from './enums/Tag'
import { Technology } from './enums/Technology'
import { LinkData } from './LinkData'

export interface ProjectDataMinimal {
	// id
	id: string
	aliases?: string[]

	priority: number

	title: string
	date: string

	thumbnailUrl: string

	// metadata
	tags: Tag[]
	technology?: Technology
	category: Category
}

export interface ProjectData extends ProjectDataMinimal {
	metaImageUrl: string

	// hero
	heroImageUrl?: string
	heroVideoUrl?: string

	// carousel
	imagesUrls?: string[]
	videosUrls?: string[]

	subtitle: string
	description?: string[]
	implementationDetails: string[]

	links?: LinkData[]
	gitHubUrl?: string

	// store links
	appleAppStoreUrl?: string
	googlePlayStoreUrl?: string
	itchioUrl?: string

	markdownContent?: string

	// yt
	youtubeVideoIds?: string[]
}
