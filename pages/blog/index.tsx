import HeroPost from '../../src/components/blog/HeroPost'
import MoreStories from '../../src/components/blog/MoreStories'
import Metatags from '../../src/components/Metatags'
import Container from '../../src/components/page/Container'
import Page from '../../src/components/page/Page'
import Spacer from '../../src/components/Spacer'
import { getAllPosts } from '../../src/lib/get-posts'
import { BlogPostMinimal } from '../../src/models/BlogPost'

interface BlogProps {
    allPosts: BlogPostMinimal[]
}

export default function Blog({ allPosts }: BlogProps) {
    const heroPost = allPosts[0]
    const morePosts = allPosts.slice(1)

    return (
        <Page>
            <Metatags
                title="Gonzalo Cumini | Blog"
                description="Gonzalo Cumini | Blog"
            />
            <Container>
                <Spacer amount="3.5em" />
                {heroPost && (
                    <HeroPost
                        title={heroPost.title}
                        coverImageUrl={heroPost.coverImageUrl}
                        date={heroPost.date}
                        author={heroPost.author}
                        slug={heroPost.slug}
                        excerpt={heroPost.excerpt}
                    />
                )}
                {morePosts.length > 0 && <MoreStories posts={morePosts} />}
                <Spacer amount="3.5em" />
            </Container>
        </Page>
    )
}

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.
// https://nextjs.org/docs/basic-features/data-fetching/get-static-props
export async function getStaticProps() {
    return {
        props: {
            allPosts: getAllPosts(),
        },
    }
}
