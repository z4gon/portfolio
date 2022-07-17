import styles from '../../../styles/components/project/ProjectDetails.module.sass'
import { ProjectData } from '../../models/ProjectData'
import ExternalLink from './ExternalLink'
import ImagesSlider from './ImagesSlider'
import StoreLinks from './StoreLinks'

interface ProjectDetailsProps extends ProjectData {}

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
            <article className={styles.information}>
                <h2 className={styles.title}>{title}</h2>
                <span className={styles.subtitle}>{subtitle}</span>

                <p className={styles.text}>{text}</p>

                <div className={styles.externalLinks}>
                    {links.map((link, index) => (
                        <ExternalLink
                            key={index}
                            href={link.href}
                            text={link.text}
                        />
                    ))}
                </div>

                <StoreLinks
                    appleAppStoreUrl={appleAppStoreUrl}
                    googlePlayStoreUrl={googlePlayStoreUrl}
                />
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
            <ImagesSlider imagesUrls={imagesUrls} />
        </main>
    )
}

export default ProjectDetails
