import Slider, { Settings as SliderSettings } from 'react-slick'
import styles from '../../../styles/components/project/ImagesSlider.module.sass'

interface ImagesSliderProps {
    imagesUrls: string[]
}

const sliderSettings: SliderSettings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 1,
    centerMode: true,
    lazyLoad: 'ondemand',
    autoplay: true,
    responsive: [
        {
            breakpoint: 1000,
            settings: {
                slidesToShow: 1,
            },
        },
    ],
}

const ImagesSlider: React.FC<ImagesSliderProps> = ({ imagesUrls }) => {
    return (
        <Slider className={styles.slider} {...sliderSettings}>
            {imagesUrls.map((url) => (
                <div key={url}>
                    <div
                        style={{
                            backgroundImage: `url(${url})`,
                        }}
                        className={styles.image}
                    ></div>
                </div>
            ))}
        </Slider>
    )
}

export default ImagesSlider
