import Link from 'next/link'

import styles from '../../../styles/components/navbar/NavBar.module.sass'

interface NavBarIconProps {
    iconUrl: string
    href: string
}

const NavBarIcon: React.FC<NavBarIconProps> = ({ href, iconUrl }) => {
    return (
        <a href={href} rel="noopener noreferrer" target="_blank">
            {/* eslint-disable-next-line @next/next/no-img-element */}
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
        iconUrl: '/images/linkedin.svg',
    },
    {
        href: 'https://github.com/z4gon',
        iconUrl: '/images/github.svg',
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
