import { BlogPost } from '../../models/BlogPost'
import MarkdownContent from '../markdown/MarkdownContent'
import PostHeader from './PostHeader'

interface PostProps {
    post: BlogPost
}

const Post = ({ post }: PostProps) => {
    const {
        title,
        date,
        author,
        coverImageUrl,
        coverVideoUrl = '',
        coverImageSourceUrl,
        contentMarkdown,
    } = post

    return (
        <article>
            <PostHeader
                title={title}
                coverImageUrl={coverImageUrl}
                coverImageSourceUrl={coverImageSourceUrl}
                coverVideoUrl={coverVideoUrl}
                date={date}
                author={author}
            />
            <MarkdownContent markdownString={contentMarkdown} />
        </article>
    )
}

export default Post
