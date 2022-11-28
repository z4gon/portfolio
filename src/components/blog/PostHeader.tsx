import Author from '../../models/Author'
import Avatar from './Avatar'
import CoverImage from './CoverImage'
import DateFormatter from './DateFormatter'
import PostTitle from './PostTitle'

type Props = {
    title: string
    coverImage: string
    date: string
    author: Author
}

const PostHeader = ({ title, coverImage, date, author }: Props) => {
    return (
        <>
            <PostTitle>{title}</PostTitle>
            <div className="hidden md:block md:mb-12">
                <Avatar name={author.name} pictureUrl={author.pictureUrl} />
                <DateFormatter dateString={date} />
            </div>
            <div className="mb-8 md:mb-16 sm:mx-0">
                <CoverImage title={title} src={coverImage} />
            </div>
        </>
    )
}

export default PostHeader
