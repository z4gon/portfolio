import { BlogPostMinimal } from '../../models/BlogPost'
import BlogPostPreview from './PostPreview'

type Props = {
    posts: BlogPostMinimal[]
}

const MoreStories = ({ posts }: Props) => {
    return (
        <section>
            <h2 className="mb-8 text-5xl md:text-7xl font-bold tracking-tighter leading-tight">
                More Stories
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32">
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
