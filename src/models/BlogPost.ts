import type Author from './Author'

export interface BlogPostMinimal {
    slug: string
    date: string
    author: Author
    title: string
    excerpt: string
    coverImageUrl: string
    coverImageSourceUrl: string
}

export interface BlogPost extends BlogPostMinimal {
    contentMarkdown: string
}
