import { useContext } from 'react'
import { FullScreenCarouselContext } from '../../contexts/fullScreenCarousel'
import styles from './GoFullScreenButton.module.sass'

interface fullScreenCarouselButtonProps {
	allImagesUrls: string[]
	imageIdx: number
}

const GoFullScreenButton: React.FC<fullScreenCarouselButtonProps> = ({
	allImagesUrls,
	imageIdx,
}) => {
	const { initialize } = useContext(FullScreenCarouselContext)

	return (
		<button
			className={styles.openButton}
			onClick={() => initialize(allImagesUrls, imageIdx)}
		>
			{/* eslint-disable-next-line @next/next/no-img-element */}
			<img src="/images/ui/full-screen-icon.png" alt="Open" />
		</button>
	)
}

export default GoFullScreenButton
