import Author from '../../models/Author'
import Avatar from './Avatar'
import CoverImage from './CoverImage'
import DateFormatter from './DateFormatter'
import styles from './PostHeader.module.sass'
import PostTitle from './PostTitle'

type Props = {
	title: string
	coverImageUrl: string
	coverImageSourceUrl: string
	coverVideoUrl?: string
	date: string
	author: Author
}

const PostHeader = ({
	title,
	coverImageUrl,
	coverImageSourceUrl,
	coverVideoUrl = '',
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
			{coverVideoUrl && (
				<video muted playsInline controls className={styles.coverVideo}>
					<source src={coverVideoUrl} type="video/mp4" />
				</video>
			)}
			{!coverVideoUrl && (
				<CoverImage
					title={title}
					imageUrl={coverImageUrl}
					imageSourceUrl={coverImageSourceUrl}
					className={styles.picture}
				/>
			)}
		</div>
	)
}

export default PostHeader
