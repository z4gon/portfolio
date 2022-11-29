import styles from '../../../styles/components/blog/PostHeader.module.sass'
import Author from '../../models/Author'
import Avatar from './Avatar'
import CoverImage from './CoverImage'
import DateFormatter from './DateFormatter'
import PostTitle from './PostTitle'

type Props = {
    title: string
    coverImageUrl: string
    coverImageSourceUrl: string
    date: string
    author: Author
}

const PostHeader = ({
    title,
    coverImageUrl,
    coverImageSourceUrl,
    date,
    author,
}: Props) => {
    return (
        <div className={styles.postHeader}>
            <PostTitle>{title}</PostTitle>
            <div className={styles.authorAndDate}>
                <Avatar name={author.name} pictureUrl={author.pictureUrl} />
                <DateFormatter dateString={date} />
            </div>
            <CoverImage
                title={title}
                imageUrl={coverImageUrl}
                imageSourceUrl={coverImageSourceUrl}
                className={styles.picture}
            />
        </div>
    )
}

export default PostHeader
