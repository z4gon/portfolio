import { ReactNode } from 'react'
import styles from '../../../styles/components/blog/PostTitle.module.sass'

type Props = {
    children?: ReactNode
}

const PostTitle = ({ children }: Props) => {
    return <h1 className={styles.postTitle}>{children}</h1>
}

export default PostTitle
