import { useContext } from 'react'
import styles from '../../../styles/components/project/FullScreenImageButton.module.sass'
import { FullScreenImageContext } from '../../contexts/fullScreenImage'

interface FullScreenImageButtonProps {
    imageUrl: string
}

const FullScreenImageButton: React.FC<FullScreenImageButtonProps> = ({
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

export default FullScreenImageButton
