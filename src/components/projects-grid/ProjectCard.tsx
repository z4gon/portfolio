import Link from 'next/link'
import styles from '../../../styles/components/projects-grid/ProjectCard.module.sass'
import { ProjectData } from '../../models/ProjectData'

interface ProjectCardProps extends ProjectData {}

const ProjectCard: React.FC<ProjectCardProps> = (props) => {
    const { id, thumbnailUrl } = props

    return (
        <Link href={`/project/${id}`}>
            <a className={styles.link}>
                <article className={styles.card}>
                    <div
                        className={styles.thumbnail}
                        style={{ backgroundImage: `url(${thumbnailUrl})` }}
                    />
                    <div className={styles.information}>
                        <h2 className={styles.title}>
                            {props.title}
                            <span className={styles.date}>{props.date}</span>
                        </h2>
                        <span className={styles.subtitle}>
                            {props.subtitle}
                        </span>
                        <br />
                        <br />
                        {/* <Tags tags={props.tags} /> */}
                    </div>
                </article>
            </a>
        </Link>
    )
}

export default ProjectCard
