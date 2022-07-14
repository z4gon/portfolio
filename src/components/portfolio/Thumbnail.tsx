import Link from 'next/link'
import styles from '../../../styles/components/portfolio/Thumbnail.module.sass'
import { PortfolioItemData } from './data'

interface ThumbnailProps extends PortfolioItemData {}

const Thumbnail: React.FC<ThumbnailProps> = (props) => {
    const { id, imageUrl } = props

    return (
        <Link href={`/project/${id}`}>
            <a className={styles.link}>
                <div
                    className={styles.thumbnail}
                    style={{ backgroundImage: `url(${imageUrl})` }}
                />
            </a>
        </Link>
    )
}

export default Thumbnail
