import Head from 'next/head'
import Slider, { Settings as SliderSettings } from 'react-slick'
import styles from '../../../styles/components/portfolio/ProjectDetails.module.sass'
import useWindowDimensions from '../../hooks/useScreenSize'
import { ProjectData, ProjectLink } from './data-models'

interface ExternalLinkProps extends ProjectLink {}

const ExternalLink: React.FC<ExternalLinkProps> = ({ href, text }) => {
    return (
        <a href={href} rel="noopener noreferrer" target="_blank">
            {text}
        </a>
    )
}

interface ProjectDetailsProps extends ProjectData {}

const sliderSettings: SliderSettings = {
    dots: true,
    arrows: true,
    // infinite: true,
    speed: 300,
    slidesToShow: 1,
    // lazyLoad: 'ondemand',
    autoplay: true,
    adaptiveHeight: true,
}

const ProjectDetails: React.FC<ProjectDetailsProps> = ({
    imagesUrls,
    title,
    subtitle,
    text,
    links,
    appleAppStoreUrl,
    googlePlayStoreUrl,
    youtubeVideoId,
}) => {
    const { breakpoint } = useWindowDimensions()

    return (
        <main className={styles.projectDetails}>
            <Head>
                <title>{`${title} | Project`}</title>
            </Head>

            <Slider className={styles.slider} {...sliderSettings}>
                {/* {youtubeVideoId && (
                    <div>
                        <div className={styles.video}>
                            <iframe
                                src={`https://www.youtube.com/embed/${youtubeVideoId}`}
                                title={title}
                                frameBorder="0"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                )} */}
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

            <h2 className={styles.title}>{title}</h2>
            <span className={styles.subtitle}>{subtitle}</span>

            <p className={styles.text}>{text}</p>

            {links.map((link, index) => (
                <ExternalLink key={index} href={link.href} text={link.text} />
            ))}

            {/* {`breakpoint: ${breakpoint}}`} */}

            {/* Store links */}
            <div className={styles.storeLinks}>
                {appleAppStoreUrl && (
                    <a
                        href={appleAppStoreUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            src="/images/badge-app-store.svg"
                            alt="App Store Link"
                            className={styles.appleAppStoreBadge}
                        />
                    </a>
                )}
                {googlePlayStoreUrl && (
                    <a
                        href={googlePlayStoreUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            src="/images/badge-google-play.png"
                            alt="Play Store Link"
                            className={styles.googlePlayStoreBadge}
                        />
                    </a>
                )}
            </div>
        </main>
    )
}

export default ProjectDetails
