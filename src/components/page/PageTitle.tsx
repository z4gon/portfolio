import { PropsWithChildren } from 'react'
import styles from './PageTitle.module.sass'

const PageTitle: React.FC<PropsWithChildren> = ({ children }) => {
	return <h1 className={styles.pageTitle}>{children}</h1>
}

export default PageTitle
