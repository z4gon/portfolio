import Link from 'next/link'
import { ProjectDataMinimal } from '../../models/ProjectData'
import styles from './ProjectCard.module.sass'

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
				<div className={styles.thumbnailContainer}>
					<video autoPlay loop muted playsInline className={styles.thumbnail}>
						<source src={thumbnailUrl} type="video/mp4" />
					</video>
				</div>

				<div className={styles.information}>
					{technology && (
						// eslint-disable-next-line @next/next/no-img-element
						<img
							className={styles.technology}
							src={`/images/technologies/${technology}.png`}
							alt={technology}
						/>
					)}
					<h2 className={styles.title}>{title}</h2>
					{/* <TagsList dark tags={tags.slice(0, 3)} /> */}
				</div>
			</article>
		</Link>
	)
}

export default ProjectCard
