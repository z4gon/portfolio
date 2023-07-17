import Author from '../../models/Author'
import Avatar from './Avatar'
import CoverImage from './CoverImage'
import DateFormatter from './DateFormatter'
import styles from './PostHeader.module.sass'
import PostTitle from './PostTitle'

type Props = {
	title: string
	heroImageUrl: string
	heroImageSourceUrl: string
	coverVideoUrl?: string
	date: string
	author: Author
}

const PostHeader = ({
	title,
	heroImageUrl,
	heroImageSourceUrl,
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
					imageUrl={heroImageUrl}
					imageSourceUrl={heroImageSourceUrl}
					className={styles.picture}
				/>
			)}
		</div>
	)
}

export default PostHeader
