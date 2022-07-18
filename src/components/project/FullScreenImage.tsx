import { useContext } from 'react'
import styles from '../../../styles/components/project/FullScreenImage.module.sass'
import { FullScreenImageContext } from '../../contexts/fullScreenImage'

interface FullScreenImageButtonProps {
    imageUrl: string
}

export const FullScreenImageButton: React.FC<FullScreenImageButtonProps> = ({
    imageUrl,
}) => {
    const { setUrl } = useContext(FullScreenImageContext)

    return (
        <button className={styles.openButton} onClick={() => setUrl(imageUrl)}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/ui/full-screen-icon.png" alt="Open" />
        </button>
    )
}

const FullScreenImage: React.FC<{}> = () => {
    const { url, setUrl } = useContext(FullScreenImageContext)

    if (!url) {
        return null
    }

    return (
        <div
            style={{
                backgroundImage: `url(${url})`,
            }}
            className={styles.fullScreenImage}
        >
            <button className={styles.closeButton} onClick={() => setUrl(null)}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/ui/close-icon.png" alt="Close" />
            </button>
        </div>
    )
}

export default FullScreenImage
