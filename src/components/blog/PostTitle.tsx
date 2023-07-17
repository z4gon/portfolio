import { ReactNode } from 'react'
import styles from './PostTitle.module.sass'

type Props = {
	children?: ReactNode
}

const PostTitle = ({ children }: Props) => {
	return <h1 className={styles.postTitle}>{children}</h1>
}

export default PostTitle
