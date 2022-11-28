import styles from '../../../styles/components/blog/MoreStories.module.sass'
import { BlogPostMinimal } from '../../models/BlogPost'
import BlogPostPreview from './PostPreview'

type Props = {
    posts: BlogPostMinimal[]
}

const MoreStories = ({ posts }: Props) => {
    return (
        <section className={styles.moreStories}>
            <h2 className={styles.title}>More Stories</h2>
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

export default MoreStories
