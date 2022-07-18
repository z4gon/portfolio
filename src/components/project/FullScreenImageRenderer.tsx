import { useContext } from 'react'
import styles from '../../../styles/components/project/FullScreenImageRenderer.module.sass'
import { FullScreenImageContext } from '../../contexts/fullScreenImage'

const FullScreenImageRenderer: React.FC<{}> = () => {
    const { url, setUrl } = useContext(FullScreenImageContext)

    if (!url) {
        return null
    }

    return (
        <div className={styles.overlay}>
            <div
                style={{
                    backgroundImage: `url(${url})`,
                }}
                className={styles.image}
            >
                <button
                    className={styles.closeButton}
                    onClick={() => setUrl(null)}
                >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/images/ui/close-icon.png" alt="Close" />
                </button>
            </div>
        </div>
    )
}

export default FullScreenImageRenderer
