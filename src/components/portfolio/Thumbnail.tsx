import Link from 'next/link'
import styles from '../../../styles/components/portfolio/Thumbnail.module.sass'
import { ProjectData } from './data-models'

interface ThumbnailProps extends ProjectData {}

const Thumbnail: React.FC<ThumbnailProps> = (props) => {
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

export default Thumbnail
