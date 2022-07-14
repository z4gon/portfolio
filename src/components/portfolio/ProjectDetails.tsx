import styles from '../../../styles/components/portfolio/ProjectDetails.module.sass'
import { PortfolioItemData, PortfolioItemLinkData } from './data'

interface ExternalLinkProps extends PortfolioItemLinkData {}

const ExternalLink: React.FC<ExternalLinkProps> = ({ href, text }) => {
    return (
        <a href={href} rel="noopener noreferrer" target="_blank">
            {text}
        </a>
    )
}

interface PortfolioItemProps extends PortfolioItemData {}

const ProjectDetails: React.FC<PortfolioItemProps> = ({
    imageUrl,
    title,
    subtitle,
    text,
    links,
}) => {
    return (
        <article className={styles.card}>
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
