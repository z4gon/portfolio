import { PortfolioItemData } from './data'

import styles from '../../../styles/components/portfolio/Thumbnail.module.sass'
import { useState } from 'react'
import Link from 'next/link'

interface ThumbnailProps extends PortfolioItemData {}

const Thumbnail: React.FC<ThumbnailProps> = (props) => {
    const { id, imageUrl } = props

    const [showingPopup, setShowingPopup] = useState(false)

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
