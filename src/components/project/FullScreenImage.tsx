import { useState } from 'react'
import styles from '../../../styles/components/project/FullScreenImage.module.sass'

interface FullScreenImageProps {
    imageUrl: string
}

const FullScreenImage: React.FC<FullScreenImageProps> = ({ imageUrl }) => {
    const [isOpen, setIsOpen] = useState(false)

    if (!isOpen) {
        return (
            <button
                className={styles.openButton}
                onClick={() => setIsOpen(true)}
            >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/ui/full-screen-icon.png" alt="Open" />
            </button>
        )
    }

    return (
        <div
            style={{
                backgroundImage: `url(${imageUrl})`,
            }}
            className={styles.fullScreenImage}
        >
            <button
                className={styles.closeButton}
                onClick={() => setIsOpen(false)}
            >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/ui/close-icon.png" alt="Open" />
            </button>
        </div>
    )
}

export default FullScreenImage
