import Link from 'next/link'
import styles from '../../../styles/components/projects-grid/ProjectCard.module.sass'
import { ProjectDataMinimal } from '../../models/ProjectData'
import TagsList from '../TagsList'

const ProjectCard: React.FC<ProjectDataMinimal> = ({
	id,
	thumbnailUrl,
	title,
	tags,
	technology = null,
}) => {
	return (
		<Link href={`/project/${id}`} className={styles.link}>
			<article className={styles.card}>
				{technology && (
					// eslint-disable-next-line @next/next/no-img-element
					<img
						className={styles.technology}
						src={`/images/technologies/${technology}.png`}
						alt={technology}
					/>
				)}

				<div className={styles.thumbnailContainer}>
					<video autoPlay loop muted playsInline className={styles.thumbnail}>
						<source src={thumbnailUrl} type="video/mp4" />
					</video>
				</div>

				<div className={styles.information}>
					<h2 className={styles.title}>{title}</h2>
					<TagsList dark tags={tags.slice(0, 3)} />
				</div>
			</article>
		</Link>
	)
}

export default ProjectCard
