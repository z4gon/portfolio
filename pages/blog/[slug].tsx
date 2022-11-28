import PostBody from '../../src/components/blog/PostBody'
import PostHeader from '../../src/components/blog/PostHeader'
import Metatags from '../../src/components/Metatags'
import Container from '../../src/components/page/Container'
import Page from '../../src/components/page/Page'
import Spacer from '../../src/components/Spacer'
import { getPostBySlug, getPostSlugs } from '../../src/lib/get-posts'
import { BlogPost } from '../../src/models/BlogPost'

interface BlogPostProps {
    post: BlogPost
}

export default function BlogPostPage({ post }: BlogPostProps) {
    return (
        <Page>
            <Metatags
                title={post.title}
                description={post.excerpt}
                imageUrl={post.coverImageUrl}
            />
            <Container>
                <Spacer amount="3.5em" />
                <article className="mb-32">
                    <PostHeader
                        title={post.title}
                        coverImage={post.coverImageUrl}
                        date={post.date}
                        author={post.author}
                    />
                    <PostBody contentMarkdown={post.contentMarkdown} />
                </article>
                <Spacer amount="3.5em" />
            </Container>
        </Page>
    )
}

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.
// https://nextjs.org/docs/basic-features/data-fetching/get-static-props
export async function getStaticProps(context) {
    const slug = context.params.slug
    const post = getPostBySlug(slug, true)

    // https://nextjs.org/docs/api-reference/data-fetching/get-static-props#notfound
    if (!post) {
        return {
            notFound: true,
        }
    }

    return {
        props: {
            post,
        },
    }
}

// The paths key determines which paths will be pre-rendered.
// For example, suppose that you have a page that uses Dynamic Routes named pages/posts/[id].js.
// https://nextjs.org/docs/basic-features/data-fetching/get-static-paths
export async function getStaticPaths() {
    const slugs = getPostSlugs()

    const paths = slugs.map((slug) => ({
        params: { slug: slug.replace(/\.md$/, '') },
    }))

    return {
        paths,
        fallback: true, // false or 'blocking'
    }
}
