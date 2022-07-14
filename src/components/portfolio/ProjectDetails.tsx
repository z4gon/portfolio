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
            <h2 className={styles.title}>{title}</h2>
            <span className={styles.subtitle}>{subtitle}</span>

            <p className={styles.text}>{text}</p>

            {links.map((link, index) => (
                <ExternalLink key={index} href={link.href} text={link.text} />
            ))}

            {/* Store links */}
            <div className={styles.storeLinks}>
                {appleAppStoreUrl && (
                    <a
                        href={appleAppStoreUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
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
                        <img
                            src="/images/badge-google-play.png"
                            alt="Play Store Link"
                            className={styles.googlePlayStoreBadge}
                        />
                    </a>
                )}
            </div>

            {youtubeVideoId && (
                <div className={styles.video}>
                    <h3>Video</h3>
                    <br />
                    <iframe
                        src={`https://www.youtube.com/embed/${youtubeVideoId}`}
                        title={title}
                        frameBorder="0"
                        allowFullScreen
                    ></iframe>
                </div>
            )}

            <div className={styles.images}>
                <h3>Images</h3>
                <br />
                {imagesUrls.map((url) => (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                        key={url}
                        src={url}
                        alt={title}
                        className={styles.image}
                    />
                ))}
            </div>
        </main>
    )
}

export default ProjectDetails
