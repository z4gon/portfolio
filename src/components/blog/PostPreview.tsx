import Link from 'next/link'
import Author from '../../models/Author'
import Avatar from './Avatar'
import CoverImage from './CoverImage'
import DateFormatter from './DateFormatter'

type Props = {
    title: string
    coverImageUrl: string
    date: string
    excerpt: string
    author: Author
    slug: string
}

const PostPreview = ({
    title,
    coverImageUrl,
    date,
    excerpt,
    author,
    slug,
}: Props) => {
    return (
        <div>
            <div className="mb-5">
                <CoverImage slug={slug} title={title} src={coverImageUrl} />
            </div>
            <h3 className="text-3xl mb-3 leading-snug">
                <Link
                    as={`/blog/${slug}`}
                    href="/blog/[slug]"
                    className="hover:underline"
                >
                    {title}
                </Link>
            </h3>
            <div className="text-lg mb-4">
                <DateFormatter dateString={date} />
            </div>
            <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
            <Avatar name={author.name} pictureUrl={author.pictureUrl} />
        </div>
    )
}

export default PostPreview
