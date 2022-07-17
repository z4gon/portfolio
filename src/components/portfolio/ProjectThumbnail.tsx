import Link from 'next/link'
import styles from '../../../styles/components/portfolio/Thumbnail.module.sass'
import { ProjectData } from '../../models/ProjectData'

interface ProjectThumbnailProps extends ProjectData {}

const ProjectThumbnail: React.FC<ProjectThumbnailProps> = (props) => {
    const { id, thumbnailUrl } = props

    return (
        <Link href={`/project/${id}`}>
            <a className={styles.link}>
                <div
                    className={styles.thumbnail}
                    style={{ backgroundImage: `url(${thumbnailUrl})` }}
                />
            </a>
        </Link>
    )
}

export default ProjectThumbnail
