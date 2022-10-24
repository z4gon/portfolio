import Slider, { Settings as SliderSettings } from 'react-slick'
import styles from '../../../styles/components/multimedia-slider/MultimediaSlider.module.sass'
import GoFullScreenButton from './GoFullScreenButton'

interface MultimediaSliderProps {
    imagesUrls: string[]
    videosUrls: string[]
    autoPlayVideos?: boolean
}

const sliderSettings: SliderSettings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    lazyLoad: 'ondemand',
    autoplay: true,
    autoplaySpeed: 10 * 1000,
    responsive: [
        {
            breakpoint: 1000,
            settings: {
                slidesToShow: 2,
            },
        },
        {
            breakpoint: 700,
            settings: {
                slidesToShow: 1,
            },
        },
    ],
}

const MultimediaSlider: React.FC<MultimediaSliderProps> = ({
    imagesUrls = [],
    videosUrls = [],
    autoPlayVideos = false,
}) => {
    if (imagesUrls.length === 0 && videosUrls.length === 0) {
        return null
    }

    return (
        <Slider className={styles.slider} {...sliderSettings}>
            {videosUrls.map((url, idx) => (
                <video
                    autoPlay={idx === 0 || autoPlayVideos}
                    preload="metadata"
                    loop
                    muted
                    playsInline
                    controls
                    key={url}
                >
                    <source src={url} type="video/mp4" />
                </video>
            ))}
            {imagesUrls.map((url, idx) => (
                <div key={url}>
                    <div
                        style={{
                            backgroundImage: `url(${url})`,
                        }}
                        className={styles.image}
                    >
                        <GoFullScreenButton
                            allImagesUrls={imagesUrls}
                            imageIdx={idx}
                        />
                    </div>
                </div>
            ))}
        </Slider>
    )
}

export default MultimediaSlider
