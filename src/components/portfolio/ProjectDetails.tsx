import Head from 'next/head'
import Slider, { Settings as SliderSettings } from 'react-slick'
import styles from '../../../styles/components/portfolio/ProjectDetails.module.sass'
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
    return (
        <main className={styles.projectDetails}>
            <Head>
                <title>{`${title} | Project`}</title>
            </Head>

            <article className={styles.information}>
                <h2 className={styles.title}>{title}</h2>
                <span className={styles.subtitle}>{subtitle}</span>

                <p className={styles.text}>{text}</p>

                {links.map((link, index) => (
                    <ExternalLink
                        key={index}
                        href={link.href}
                        text={link.text}
                    />
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
            </article>

            <h2 className={styles.sectionTitle}>Video</h2>
            {youtubeVideoId && (
                <div className={styles.video}>
                    <iframe
                        src={`https://www.youtube.com/embed/${youtubeVideoId}`}
                        title={title}
                        frameBorder="0"
                        allowFullScreen
                    ></iframe>
                </div>
            )}

            <h2 className={styles.sectionTitle}>Screenshots</h2>
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
        </main>
    )
}

export default ProjectDetails
