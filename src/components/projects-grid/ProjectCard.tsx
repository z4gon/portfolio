import Link from 'next/link'
import styles from '../../../styles/components/projects-grid/ProjectCard.module.sass'
import { ProjectData } from '../../models/ProjectData'

interface ProjectCardProps extends ProjectData {}

const ProjectCard: React.FC<ProjectCardProps> = (props) => {
    const {
        id,
        thumbnailUrl,
        cardConfig: {
            backgroundSize = '120%',
            backgroundPosition = '0px 0px',
            gradientColor = 'rgb(0, 96, 115)',
        } = {},
    } = props

    return (
        <Link href={`/project/${id}`}>
            <a className={styles.link}>
                <article
                    className={styles.card}
                    style={{
                        background: `rgb(0,0,0) linear-gradient(90deg, rgba(0,0,0,1) 0%, ${gradientColor} 50%)`,
                    }}
                >
                    <div className={styles.information}>
                        <h2 className={styles.title}>{props.title}</h2>
                        <span className={styles.subtitle}>
                            {props.subtitle}
                        </span>
                    </div>
                    <div
                        className={styles.thumbnail}
                        style={{
                            backgroundImage: `url(${thumbnailUrl})`,
                            backgroundSize,
                            backgroundPosition,
                        }}
                    />
                </article>
            </a>
        </Link>
    )
}

export default ProjectCard
