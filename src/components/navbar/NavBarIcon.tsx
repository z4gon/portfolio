import Image from 'next/image'

interface NavBarIconProps {
    iconUrl: string
    href: string
}

const NavBarIcon: React.FC<NavBarIconProps> = ({ href, iconUrl }) => {
    return (
        <li>
            <a href={href} rel="noopener noreferrer" target="_blank">
                <Image src={iconUrl} alt={href} height={30} width={30} />
            </a>
        </li>
    )
}

export default NavBarIcon
