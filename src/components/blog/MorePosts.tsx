import { useState } from 'react'
import styles from '../../../styles/components/blog/MorePosts.module.sass'
import { BlogPostMinimal } from '../../models/BlogPost'
import Button from '../Button'
import BlogPostPreview from './PostPreview'

type Props = {
  posts: BlogPostMinimal[]
}

const PAGE_SIZE = 8

const MorePosts = ({ posts }: Props) => {
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
    <section className={styles.morePosts}>
      <h2 className={styles.title}>More Posts</h2>
      <div className={styles.grid}>
        {thumbnailsShowing.map((post) => (
          <BlogPostPreview
            key={post.slug}
            title={post.title}
            coverImageUrl={post.coverImageUrl}
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

export default MorePosts
