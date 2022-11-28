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

const HeroPost = ({
    title,
    coverImageUrl,
    date,
    excerpt,
    author,
    slug,
}: Props) => {
    return (
        <section>
            <div className="mb-8 md:mb-16">
                <CoverImage title={title} src={coverImageUrl} slug={slug} />
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28">
                <div>
                    <h3 className="mb-4 text-4xl lg:text-5xl leading-tight">
                        <Link
                            as={`/blog/${slug}`}
                            href="/blog/[slug]"
                            className="hover:underline"
                        >
                            {title}
                        </Link>
                    </h3>
                    <div className="mb-4 md:mb-0 text-lg">
                        <DateFormatter dateString={date} />
                    </div>
                </div>
                <div>
                    <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
                    <Avatar name={author.name} pictureUrl={author.pictureUrl} />
                </div>
            </div>
        </section>
    )
}

export default HeroPost
