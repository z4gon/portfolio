import Link from 'next/link'

import styles from '../../../styles/components/navbar/NavBar.module.sass'
import GitHubIcon from '../icons/GitHubIcon'
import LinkedInIcon from '../icons/LinkedInIcon'

interface NavBarIconProps {
    icon: React.ReactNode
    href: string
}

const NavBarIcon: React.FC<NavBarIconProps> = ({ href, icon }) => {
    return (
        <a href={href} rel="noopener noreferrer" target="_blank">
            {icon}
        </a>
    )
}

const icons = [
    {
        href: 'https://linkedin.com/in/gonzacn',
        icon: <LinkedInIcon className={styles.iconSvg} />,
    },
    {
        href: 'https://github.com/z4gon',
        icon: <GitHubIcon className={styles.iconSvg} />,
    },
]

const NavBar: React.FC<{}> = () => {
    return (
        <nav className={styles.navbar}>
            <Link href="/">
                <a className={styles.titleLink}>
                    <h1 className={styles.title}>Gonzalo Cumini</h1>
                </a>
            </Link>
            <ul className={styles.icons}>
                {icons.map((icon) => (
                    <li className={styles.icon} key={icon.href}>
                        <NavBarIcon {...icon} />
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default NavBar
