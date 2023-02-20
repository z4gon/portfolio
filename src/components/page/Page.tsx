import { PropsWithChildren } from 'react'
import classNames from 'classnames'
import styles from '../../../styles/components/page/Page.module.sass'
import NavBar from '../navbar/NavBar'
import Footer from './Footer'
import GoogleAnalytics from './GoogleAnalytics'

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
