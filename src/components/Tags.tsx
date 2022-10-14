import { PropsWithChildren } from 'react'
import classNames from 'classnames'
import styles from '../../styles/components/Tags.module.sass'

interface TagsProps {
    tags: string[]
}

const Tags: React.FC<TagsProps> = ({ tags }) => {
    return (
        <div className={styles.tags}>
            {tags.map((tag, index) => (
                <Tag key={index}>{tag}</Tag>
            ))}
        </div>
    )
}

interface TagProps extends PropsWithChildren {
    className?: string
    secondary?: boolean
}

export const Tag: React.FC<TagProps> = ({
    children,
    className,
    secondary = false,
}) => (
    <span
        className={classNames(styles.tag, className, {
            [styles.secondary]: secondary,
        })}
    >
        {children}
    </span>
)

export default Tags
