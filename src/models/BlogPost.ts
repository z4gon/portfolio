import type Author from './Author'

export interface BlogPostMinimal {
	slug: string

	title: string
	date: string

	author: Author

	excerpt: string

	// hero
	heroImageUrl: string
	heroVideoUrl?: string
	heroImageSourceUrl: string
}

export interface BlogPost extends BlogPostMinimal {
	markdownContent: string
}
