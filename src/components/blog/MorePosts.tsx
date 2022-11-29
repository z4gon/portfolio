import styles from '../../../styles/components/blog/MorePosts.module.sass'
import { BlogPostMinimal } from '../../models/BlogPost'
import BlogPostPreview from './PostPreview'

type Props = {
    posts: BlogPostMinimal[]
}

const MorePosts = ({ posts }: Props) => {
    return (
        <section className={styles.morePosts}>
            <h2 className={styles.title}>More Posts</h2>
            <div className={styles.grid}>
                {posts.map((post) => (
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
        </section>
    )
}

export default MorePosts
