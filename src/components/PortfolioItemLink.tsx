export interface PortfolioItemLinkProps {
    href: string
    text: string
}

const PortfolioItemLink: React.FC<PortfolioItemLinkProps> = ({
    href,
    text,
}) => {
    return (
        <a href={href} rel="noopener noreferrer" target="_blank">
            {text}
        </a>
    )
}

export default PortfolioItemLink
