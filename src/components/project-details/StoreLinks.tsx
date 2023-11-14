import styles from './StoreLinks.module.sass'

interface StoreLinksProps {
	appleAppStoreUrl: string
	googlePlayStoreUrl: string
	itchioUrl: string
}

const StoreLinks: React.FC<StoreLinksProps> = ({
	appleAppStoreUrl,
	googlePlayStoreUrl,
	itchioUrl,
}) => {
	if (!appleAppStoreUrl && !googlePlayStoreUrl && !itchioUrl) {
		return null
	}
	return (
		<div className={styles.storeLinks}>
			{itchioUrl && (
				<a href={itchioUrl} target="_blank" rel="noopener noreferrer">
					{/* eslint-disable-next-line @next/next/no-img-element */}
					<img
						src="/images/badge-itch-io.svg"
						alt="itch.io Link"
						className={styles.itchioBadge}
					/>
				</a>
			)}
			{appleAppStoreUrl && (
				<a href={appleAppStoreUrl} target="_blank" rel="noopener noreferrer">
					{/* eslint-disable-next-line @next/next/no-img-element */}
					<img
						src="/images/badge-app-store.svg"
						alt="App Store Link"
						className={styles.appleAppStoreBadge}
					/>
				</a>
			)}
			{googlePlayStoreUrl && (
				<a href={googlePlayStoreUrl} target="_blank" rel="noopener noreferrer">
					{/* eslint-disable-next-line @next/next/no-img-element */}
					<img
						src="/images/badge-google-play.png"
						alt="Play Store Link"
						className={styles.googlePlayStoreBadge}
					/>
				</a>
			)}
		</div>
	)
}

export default StoreLinks
