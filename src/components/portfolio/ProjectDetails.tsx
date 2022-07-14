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
    thumbnailUrl,
    title,
    subtitle,
    text,
    links,
}) => {
    return (
        <main className={styles.projectDetails}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={thumbnailUrl} alt={title} className={styles.image} />

            <h2 className={styles.title}>{title}</h2>
            <span className={styles.subtitle}>{subtitle}</span>

            <p className={styles.text}>{text}</p>

            {links.map((link, index) => (
                <ExternalLink key={index} href={link.href} text={link.text} />
            ))}
        </main>
    )
}

export default ProjectDetails
