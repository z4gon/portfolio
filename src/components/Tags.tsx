import styles from '../../styles/components/Tags.module.sass'

interface TagsProps {
    tags: string[]
}

const Tags: React.FC<TagsProps> = ({ tags }) => {
    return (
        <div className={styles.tags}>
            {tags.map((tag, index) => (
                <span key={index} className={styles.tag}>
                    {tag}
                </span>
            ))}
        </div>
    )
}

export default Tags
