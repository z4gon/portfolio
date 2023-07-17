import { useState } from 'react'
import { BlogPostMinimal } from '../../models/BlogPost'
import Button from '../Button'
import BlogPostPreview from './PostPreview'
import styles from './PostsGrid.module.sass'

type Props = {
	posts: BlogPostMinimal[]
}

const PAGE_SIZE = 20

const PostsGrid = ({ posts }: Props) => {
	const [page, setPage] = useState(0)

	const hasNext = posts.length > (page + 1) * PAGE_SIZE

	const loadMore = () => {
		if (!hasNext) {
			return
		}

		setPage((currentPage) => currentPage + 1)
	}

	if (posts.length == 0) {
		return null
	}

	const thumbnailsShowing = posts.slice(0, (page + 1) * PAGE_SIZE)

	return (
		<section className={styles.postsGrid}>
			<div className={styles.grid}>
				{thumbnailsShowing.map((post) => (
					<BlogPostPreview
						key={post.slug}
						title={post.title}
						heroImageUrl={post.heroImageUrl}
						date={post.date}
						author={post.author}
						slug={post.slug}
						excerpt={post.excerpt}
					/>
				))}
			</div>
			{hasNext && (
				<div className={styles.actions}>
					<p>{`Showing ${thumbnailsShowing.length} of ${posts.length}`}</p>
					<Button onClick={() => loadMore()}>Show More</Button>
				</div>
			)}
		</section>
	)
}

export default PostsGrid
