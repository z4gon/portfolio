import Author from '../../models/Author'
import Avatar from './Avatar'
import DateFormatter from './DateFormatter'
import HeroImage from './HeroImage'
import styles from './PostHeader.module.sass'
import PostTitle from './PostTitle'

type Props = {
	title: string
	heroImageUrl: string
	heroImageSourceUrl: string
	heroVideoUrl?: string
	date: string
	author: Author
}

const PostHeader = ({
	title,
	heroImageUrl,
	heroImageSourceUrl,
	heroVideoUrl = '',
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
			{heroVideoUrl && (
				<video muted playsInline controls className={styles.heroVideo}>
					<source src={heroVideoUrl} type="video/mp4" />
				</video>
			)}
			{!heroVideoUrl && (
				<HeroImage
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
