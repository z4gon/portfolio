import { join } from 'path'
import authors from '../../data/authors'
import { BlogPost, BlogPostMinimal } from '../models/BlogPost'
import FilesParser, { ParserFunction } from './FilesParser'

const postsDirectory = join(process.cwd(), 'data/blog-posts')

const filesParser = new FilesParser<BlogPostMinimal | BlogPost>(postsDirectory)

export const getPostSlugs = (): string[] => filesParser.getFileNames()

const blogPostParser: ParserFunction<BlogPostMinimal | BlogPost> = (
    fileNameNoExt,
    frontMatterData,
    markdownContent,
    full: boolean = false
) => {
    const author = authors[frontMatterData.authorId]

    let blogPost = {
        slug: fileNameNoExt,
        date: frontMatterData.date,
        author: author,
        title: frontMatterData.title,
        excerpt: frontMatterData.excerpt,
        coverImageUrl: frontMatterData.coverImageUrl,
        coverImageSourceUrl: frontMatterData.coverImageSourceUrl,
        coverVideoUrl: frontMatterData.coverVideoUrl || '',
    }

    if (full) {
        blogPost = {
            ...blogPost,
            // @ts-ignore
            contentMarkdown: markdownContent,
        }
    }

    return blogPost
}

export const getPostBySlug = (slug: string, full: boolean = false) =>
    filesParser.parseFile(slug, blogPostParser, full)

export const getAllPosts = (): BlogPostMinimal[] => {
    var posts = filesParser
        .parseAllFiles(blogPostParser)
        .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))

    return posts
}
