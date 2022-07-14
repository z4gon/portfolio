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
    imageUrl,
    title,
    subtitle,
    text,
    links,
}) => {
    return (
        <article className={styles.card}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={imageUrl} alt={title} className={styles.image} />
            <div
                className={styles.image}
                style={{ backgroundImage: `url(${imageUrl})` }}
            />
            <h2 className={styles.title}>{title}</h2>
            <span className={styles.subtitle}>{subtitle}</span>

            <p className={styles.text}>{text}</p>

            {links.map((link, index) => (
                <ExternalLink key={index} href={link.href} text={link.text} />
            ))}
        </article>
    )
}

export default ProjectDetails
