import { useContext } from 'react'
import styles from '../../../styles/components/images-slider/FullScreenCarousel.module.sass'
import { FullScreenCarouselContext } from '../../contexts/fullScreenCarousel'

const FullScreenCarousel: React.FC<{}> = () => {
    const {
        urls = [],
        currentIdx,
        reset,
    } = useContext(FullScreenCarouselContext)

    if (urls.length === 0) {
        return null
    }

    return (
        <div className={styles.overlay}>
            <div
                style={{
                    backgroundImage: `url(${urls[currentIdx]})`,
                }}
                className={styles.image}
            >
                <button className={styles.closeButton} onClick={() => reset()}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/images/ui/close-icon.png" alt="Close" />
                </button>
            </div>
        </div>
    )
}

export default FullScreenCarousel
