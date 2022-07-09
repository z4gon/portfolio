import PortfolioItemLink, { PortfolioItemLinkProps } from './PortfolioItemLink'

import styles from '../../styles/PortfolioItem.module.sass'

interface PortfolioItemProps {
    imageUrl: string
    title: string
    subtitle: string
    text: string
    links: PortfolioItemLinkProps[]
}

const PortfolioItem: React.FC<PortfolioItemProps> = ({
    imageUrl,
    title,
    subtitle,
    text,
    links,
}) => {
    return (
        <li>
            <img src={imageUrl} />

            <article>
                <h2>{title}</h2>
                <span className={styles.subtitle}>{subtitle}</span>

                <p>{text}</p>

                {links.map((link, index) => (
                    <PortfolioItemLink
                        key={index}
                        href={link.href}
                        text={link.text}
                    />
                ))}
            </article>
        </li>
    )
}

export default PortfolioItem
