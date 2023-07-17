import { PropsWithChildren } from 'react'
import classNames from 'classnames'
import styles from './ProjectDetailsSection.module.sass'

interface SectionProps extends PropsWithChildren {
	title?: string
	className?: string
	mobileFullWidth?: boolean
}

const ProjectDetailsSection: React.FC<SectionProps> = ({
	title,
	children,
	className,
	mobileFullWidth,
}) => (
	<div
		className={classNames(styles.sectionBody, className, {
			[styles.mobileFullWidth]: mobileFullWidth,
		})}
	>
		{title && <h2 className={styles.sectionTitle}>{title}</h2>}
		{children}
	</div>
)

export default ProjectDetailsSection
