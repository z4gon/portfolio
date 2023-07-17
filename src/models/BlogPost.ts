import type Author from './Author'

export interface BlogPostMinimal {
	slug: string
	date: string
	author: Author
	title: string
	excerpt: string
	heroImageUrl: string
	heroVideoUrl?: string
	heroImageSourceUrl: string
}

export interface BlogPost extends BlogPostMinimal {
	markdownContent: string
}
