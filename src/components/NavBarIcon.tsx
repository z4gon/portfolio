interface NavBarIconProps {
    iconUrl: string
    href: string
}

const NavBarIcon: React.FC<NavBarIconProps> = ({ href, iconUrl }) => {
    return (
        <li>
            <a href={href} rel="noopener noreferrer" target="_blank">
                <img src={iconUrl} />
            </a>
        </li>
    )
}

export default NavBarIcon
