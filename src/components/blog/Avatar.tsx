import styles from '../../../styles/components/blog/Avatar.module.sass'

type Props = {
	name: string
	pictureUrl: string
}

const Avatar = ({ name, pictureUrl }: Props) => {
	return (
		<div className={styles.avatar}>
			{/* eslint-disable-next-line @next/next/no-img-element */}
			<img src={pictureUrl} alt={name} />
			<div className={styles.name}>{name}</div>
		</div>
	)
}

export default Avatar
