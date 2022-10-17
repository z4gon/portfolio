import Link from 'next/link'
import styles from '../../../styles/components/projects-grid/ProjectCard.module.sass'
import { ProjectData } from '../../models/ProjectData'
import Tags from '../Tags'

interface ProjectCardProps extends ProjectData {}

const ProjectCard: React.FC<ProjectCardProps> = ({
    id,
    thumbnailUrl,
    title,
    tags,
    cardConfig: {
        backgroundSize = '120%',
        backgroundPosition = '0px 0px',
        gradientColor = 'rgb(0, 96, 115)',
    } = {},
}) => {
    return (
        <Link href={`/project/${id}`}>
            <a className={styles.link}>
                <article
                    className={styles.card}
                    style={{
                        background: `rgb(0,0,0) linear-gradient(180deg, black, 65%, ${gradientColor} 100%)`,
                    }}
                >
                    <div
                        className={styles.thumbnail}
                        style={{
                            backgroundImage: `url(${thumbnailUrl})`,
                            backgroundSize,
                            backgroundPosition,
                        }}
                    />
                    <div className={styles.information}>
                        <h2 className={styles.title}>{title}</h2>
                        <Tags dark tags={tags.slice(0, 3)} />
                    </div>
                </article>
            </a>
        </Link>
    )
}

export default ProjectCard
