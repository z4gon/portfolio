import { PropsWithChildren } from 'react'
import classNames from 'classnames'
import { Tag } from '../models/enums/Tag'
import styles from './Tags.module.sass'

interface TagsListProps {
	tags: Tag[]
	secondary?: boolean
	dark?: boolean
}

const TagsList: React.FC<TagsListProps> = ({
	tags,
	secondary = false,
	dark = false,
}) => {
	return (
		<div className={styles.tags}>
			{tags.map((tag, index) => (
				<TagRenderer key={index} secondary={secondary} dark={dark}>
					{tag}
				</TagRenderer>
			))}
		</div>
	)
}

interface TagProps extends PropsWithChildren {
	className?: string
	secondary?: boolean
	dark?: boolean
}

export const TagRenderer: React.FC<TagProps> = ({
	children,
	className,
	secondary = false,
	dark = false,
}) => (
	<span
		className={classNames(styles.tag, className, {
			[styles.dark]: dark,
			[styles.secondary]: secondary,
		})}
	>
		{children}
	</span>
)

export default TagsList
