import { PropsWithChildren, useState } from 'react'
import { FullScreenCarouselContext } from '../../contexts/fullScreenCarousel'
import FullScreenCarousel from './FullScreenCarousel'

export default function WithFullScreenCarousel({
    children,
}: PropsWithChildren) {
    const [imagesUrls, setImagesUrls] = useState([])
    const [currentImageIdx, setCurrentImageIdx] = useState(null)

    const context = {
        urls: imagesUrls,
        currentIdx: currentImageIdx,
        initialize: (urls: string[], currentIdx: number) => {
            setImagesUrls(urls)
            setCurrentImageIdx(currentIdx)
        },
        nextUrl: () => {
            setCurrentImageIdx((prevIdx) => (prevIdx + 1) % imagesUrls.length)
        },
        previousUrl: () => {
            setCurrentImageIdx(
                (prevIdx) =>
                    (prevIdx - 1 + imagesUrls.length) % imagesUrls.length
            )
        },
        reset: () => {
            setImagesUrls([])
            setCurrentImageIdx(null)
        },
    }

    return (
        <FullScreenCarouselContext.Provider value={context}>
            {children}
            <FullScreenCarousel />
        </FullScreenCarouselContext.Provider>
    )
}
