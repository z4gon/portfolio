import { PropsWithChildren } from 'react'
import classNames from 'classnames'
import { Tag as TagData } from '../../data/tags'
import styles from '../../styles/components/Tags.module.sass'

interface TagsProps {
    tags: TagData[]
    secondary?: boolean
    dark?: boolean
}

const Tags: React.FC<TagsProps> = ({
    tags,
    secondary = false,
    dark = false,
}) => {
    return (
        <div className={styles.tags}>
            {tags.map((tag, index) => (
                <Tag key={index} secondary={secondary} dark={dark}>
                    {tag}
                </Tag>
            ))}
        </div>
    )
}

interface TagProps extends PropsWithChildren {
    className?: string
    secondary?: boolean
    dark?: boolean
}

export const Tag: React.FC<TagProps> = ({
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

export default Tags
