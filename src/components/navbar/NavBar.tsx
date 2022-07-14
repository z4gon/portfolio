import Link from 'next/link'

import styles from '../../../styles/components/navbar/NavBar.module.sass'

interface NavBarIconProps {
    iconUrl: string
    href: string
}

const NavBarIcon: React.FC<NavBarIconProps> = ({ href, iconUrl }) => {
    return (
        <a href={href} rel="noopener noreferrer" target="_blank">
            <img
                className={styles.iconImage}
                src={iconUrl}
                alt={href}
                height={30}
                width={30}
            />
        </a>
    )
}

const icons = [
    {
        href: 'https://linkedin.com/in/gonzacn',
        iconUrl: '/images/In-Blue-72.png',
    },
    {
        href: 'https://github.com/z4gon',
        iconUrl: '/images/GitHub-Mark-64px.png',
    },
]

const NavBar: React.FC<{}> = () => {
    return (
        <nav className={styles.navbar}>
            <Link href="/">
                <a className={styles.titleLink}>
                    <h1 className={styles.title}>z4gon - Portfolio</h1>
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
