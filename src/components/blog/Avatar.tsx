import classNames from 'classnames'
import styles from './Avatar.module.sass'

type Props = {
	name: string
	pictureUrl: string
	small?: boolean
}

const Avatar = ({ name, pictureUrl, small = false }: Props) => {
	return (
		<div
			className={classNames(styles.avatar, {
				[styles.small]: small,
			})}
		>
			{/* eslint-disable-next-line @next/next/no-img-element */}
			<img src={pictureUrl} alt={name} />
			<div className={styles.name}>{name}</div>
		</div>
	)
}

export default Avatar
