import MoreStories from '../../src/components/blog/MorePosts'
import PostPreview from '../../src/components/blog/PostPreview'
import Metatags from '../../src/components/Metatags'
import Container from '../../src/components/page/Container'
import Page from '../../src/components/page/Page'
import PageTitle from '../../src/components/page/PageTitle'
import Spacer from '../../src/components/Spacer'
import { getAllPosts } from '../../src/lib/get-posts'
import { BlogPostMinimal } from '../../src/models/BlogPost'
import styles from '../../styles/pages/Blog.module.sass'

interface BlogProps {
	allPosts: BlogPostMinimal[]
}

export default function Blog({ allPosts }: BlogProps) {
	const heroPost = allPosts[0]
	const morePosts = allPosts.slice(1)

	return (
		<Page className={styles.blog}>
			<Metatags
				title="Gonzalo Cumini | Blog"
				description="Gonzalo Cumini | Blog"
				pathUrl="/blog"
			/>
			<Container>
				<Spacer amount="2em" />
				<PageTitle>Blog</PageTitle>
				<Spacer amount="2em" />
				{heroPost && (
					<PostPreview
						isHero
						title={heroPost.title}
						coverImageUrl={heroPost.coverImageUrl}
						date={heroPost.date}
						author={heroPost.author}
						slug={heroPost.slug}
						excerpt={heroPost.excerpt}
					/>
				)}
				{morePosts.length > 0 && <MoreStories posts={morePosts} />}
				<Spacer amount="6em" />
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
