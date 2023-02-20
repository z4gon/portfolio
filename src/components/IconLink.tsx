import React from 'react'
import styles from '../../styles/components/IconLink.module.sass'

interface IconLinkProps {
	Icon: React.FC<{ className?: string }>
	href: string
}

const IconLink: React.FC<IconLinkProps> = ({ href, Icon }) => {
	return (
		<a href={href} rel="noopener noreferrer" target="_blank">
			<Icon className={styles.iconSvg} />
		</a>
	)
}

export default IconLink
