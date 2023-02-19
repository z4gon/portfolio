import { join } from 'path'
import authors from '../../data/authors'
import { BlogPost, BlogPostMinimal } from '../models/BlogPost'
import FilesParser, { ParserFunction } from './FilesParser'

const directory = join(process.cwd(), 'data/blog-posts')
const filesParser = new FilesParser<BlogPostMinimal | BlogPost>(directory)

export const getPostSlugs = (): string[] => filesParser.getFileNames()

const blogPostParser: ParserFunction<BlogPostMinimal | BlogPost> = (
    fileNameNoExt,
    frontMatterData,
    markdownContent,
    full: boolean = false
) => {
    const {
        authorId,
        date,
        title,
        excerpt,
        coverImageUrl,
        coverImageSourceUrl,
        coverVideoUrl,
    } = frontMatterData

    const author = authors[authorId]

    let blogPost = {
        slug: fileNameNoExt,
        date,
        author,
        title,
        excerpt,
        coverImageUrl,
        coverImageSourceUrl,
        coverVideoUrl: coverVideoUrl || '',
    }

    if (full) {
        blogPost = {
            ...blogPost,
            // @ts-ignore
            markdownContent,
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
