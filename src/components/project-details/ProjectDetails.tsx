import { PropsWithChildren } from 'react'
import classNames from 'classnames'
import styles from '../../../styles/components/project-details/ProjectDetails.module.sass'
import { ProjectData } from '../../models/ProjectData'
import ExternalLink from '../ExternalLink'
import GitHubIcon from '../icons/GitHubIcon'
import ImagesSlider from '../images-slider/ImagesSlider'
import Tags, { Tag } from '../Tags'
import StoreLinks from './StoreLinks'

interface SectionProps extends PropsWithChildren {
    title?: string
    className?: string
    mobileFullWidth?: boolean
}

const Section: React.FC<SectionProps> = ({
    title,
    children,
    className,
    mobileFullWidth,
}) => (
    <div
        className={classNames(styles.sectionBody, className, {
            [styles.mobileFullWidth]: mobileFullWidth,
        })}
    >
        {title && <h2 className={styles.sectionTitle}>{title}</h2>}
        {children}
    </div>
)

interface ProjectDetailsProps extends ProjectData {}

const ProjectDetails: React.FC<ProjectDetailsProps> = ({
    date,
    imagesUrls = [],
    title,
    subtitle,
    description = [],
    implementationDetails = [],
    tags = [],
    links = [],
    gitHubUrl = '',
    appleAppStoreUrl = '',
    googlePlayStoreUrl = '',
    youtubeVideoIds = [],
}) => {
    return (
        <main className={styles.container}>
            <ImagesSlider imagesUrls={imagesUrls} />

            <div className={styles.card}>
                <Section className={styles.header}>
                    <div className={styles.information}>
                        <h2 className={styles.title}>
                            {title}
                            <Tag secondary className={styles.date}>
                                {date}
                            </Tag>
                        </h2>
                        <span className={styles.subtitle}>{subtitle}</span>
                        <Tags tags={tags} />
                    </div>
                    {gitHubUrl && (
                        <ExternalLink
                            href={gitHubUrl}
                            className={styles.gitHubLink}
                            Icon={GitHubIcon}
                        >
                            View on GitHub
                        </ExternalLink>
                    )}
                </Section>

                {description.length > 0 && (
                    <Section className={styles.descriptionItems}>
                        {description.map((paragraph, index) => (
                            <p className={styles.descriptionItem} key={index}>
                                {paragraph}
                            </p>
                        ))}
                    </Section>
                )}

                {implementationDetails.length > 0 && (
                    <Section title="Implementation">
                        <ul className={styles.implementationDetails}>
                            {implementationDetails.map((bullet, index) => (
                                <li className={styles.bullet} key={index}>
                                    {bullet}
                                </li>
                            ))}
                        </ul>
                    </Section>
                )}

                {links.length > 0 && (
                    <Section title="Links" className={styles.externalLinks}>
                        <div className={styles.externalLinks}>
                            {links.map((link, index) => (
                                <ExternalLink key={index} href={link.href}>
                                    {link.text}
                                </ExternalLink>
                            ))}
                        </div>
                    </Section>
                )}

                {(appleAppStoreUrl || googlePlayStoreUrl) && (
                    <Section title="Store Presence">
                        <StoreLinks
                            appleAppStoreUrl={appleAppStoreUrl}
                            googlePlayStoreUrl={googlePlayStoreUrl}
                        />
                    </Section>
                )}
            </div>

            {youtubeVideoIds.length > 0 && (
                <Section mobileFullWidth>
                    {youtubeVideoIds.map((videoId) => (
                        <div key={videoId} className={styles.video}>
                            <iframe
                                src={`https://www.youtube.com/embed/${videoId}`}
                                title={title}
                                frameBorder="0"
                                allowFullScreen
                            ></iframe>
                        </div>
                    ))}
                </Section>
            )}
        </main>
    )
}

export default ProjectDetails
