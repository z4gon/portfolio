import Link from 'next/link'

import styles from '../../../styles/components/navbar/NavBar.module.sass'
import IconLink from '../IconLink'
import GitHubIcon from '../icons/GitHubIcon'
import LinkedInIcon from '../icons/LinkedInIcon'

const icons = [
    {
        href: 'https://linkedin.com/in/gonzacn',
        Icon: LinkedInIcon,
    },
    {
        href: 'https://github.com/z4gon',
        Icon: GitHubIcon,
    },
]

const NavBar: React.FC<{}> = () => {
    return (
        <nav className={styles.navbar}>
            <ul className={styles.links}>
                <li className={styles.icon}>
                    <Link href="/">
                        <a className={styles.titleLink}>
                            <h1 className={styles.title}>Gonzalo Cumini</h1>
                        </a>
                    </Link>
                </li>
                <li className={styles.icon}>
                    <Link href="/">
                        <a>
                            <h1>Projects</h1>
                        </a>
                    </Link>
                </li>
            </ul>
            <ul className={styles.icons}>
                {icons.map((icon) => (
                    <li className={styles.icon} key={icon.href}>
                        <IconLink {...icon} />
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default NavBar
