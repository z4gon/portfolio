import Link from 'next/link'

import IconLink from '../IconLink'
import GitHubIcon from '../icons/GitHubIcon'
import styles from './NavBar.module.sass'

const icons = [
	{
		href: 'https://github.com/z4gon',
		Icon: GitHubIcon,
	},
]

const NavBar: React.FC<{}> = () => {
	return (
		<nav className={styles.navbar}>
			<ul className={styles.links}>
				<li>
					<Link href="/" className={styles.titleLink}>
						<h1 className={styles.title}>z4gon</h1>
					</Link>
				</li>
				<li className={styles.secondaryLink}>
					<Link href="/">
						<h1>Portfolio</h1>
					</Link>
				</li>
				<li className={styles.secondaryLink}>
					<Link href="/blog">
						<h1>Blog</h1>
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
