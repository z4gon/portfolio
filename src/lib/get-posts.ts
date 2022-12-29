import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'
import authors from '../../data/authors'
import { BlogPost, BlogPostMinimal } from '../models/BlogPost'

const postsDirectory = join(process.cwd(), 'data/blog-posts')

export const getPostSlugs = (): string[] => {
    return fs.readdirSync(postsDirectory)
}

export const getPostBySlug = <T extends BlogPostMinimal | BlogPost>(
    slug: string,
    full: boolean = false
): T => {
    const realSlug = slug.replace(/\.md$/, '')
    const fileName = `${realSlug}.md`
    const slugs = getPostSlugs()

    if (!slugs.includes(fileName)) {
        return null
    }

    const fullPath = join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    const author = authors[data.authorId]

    let blogPost = {
        slug: realSlug,
        date: data.date,
        author: author,
        title: data.title,
        excerpt: data.excerpt,
        coverImageUrl: data.coverImageUrl,
        coverImageSourceUrl: data.coverImageSourceUrl,
        coverVideoUrl: data.coverVideoUrl || '',
    }

    if (full) {
        blogPost = {
            ...blogPost,
            // @ts-ignore
            contentMarkdown: content,
        }
    }

    return blogPost as T
}

export const getAllPosts = (): BlogPostMinimal[] => {
    const slugs = getPostSlugs()
    const posts = slugs
        .map((slug) => getPostBySlug<BlogPostMinimal>(slug))
        // sort posts by date in descending order
        .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
    return posts
}
