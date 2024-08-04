import IconLink from '../IconLink'
import GitHubIcon from '../icons/GitHubIcon'
import styles from './Footer.module.sass'

const icons = [
	{
		href: 'https://github.com/z4gon',
		Icon: GitHubIcon,
	},
]

const Footer: React.FC<{}> = () => {
	return (
		<footer className={styles.footer}>
			<p>&copy;{` ${new Date().getFullYear()}, z4gon`}</p>
			<ul className={styles.icons}>
				{icons.map((icon) => (
					<li className={styles.icon} key={icon.href}>
						<IconLink {...icon} />
					</li>
				))}
			</ul>
		</footer>
	)
}

export default Footer
