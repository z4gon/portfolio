import { PropsWithChildren } from 'react'
import classNames from 'classnames'
import NavBar from '../navbar/NavBar'
import Footer from './Footer'
import GoogleAnalytics from './GoogleAnalytics'
import styles from './Page.module.sass'

interface PageProps {
	className?: string
}

const Page: React.FC<PropsWithChildren<PageProps>> = ({
	className,
	children,
}) => {
	return (
		<div className={classNames(styles.page, className)}>
			<GoogleAnalytics />
			<NavBar />
			{children}
			<Footer />
		</div>
	)
}

export default Page
