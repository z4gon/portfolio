import { PropsWithChildren } from 'react'
import styles from '../../../styles/components/page/Page.module.sass'
import NavBar from '../navbar/NavBar'
import Footer from './Footer'
import GoogleAnalytics from './GoogleAnalytics'

interface PageProps {
    title?: string
}

const Page: React.FC<PropsWithChildren<PageProps>> = ({ title, children }) => {
    return (
        <div className={styles.page}>
            <GoogleAnalytics />
            <NavBar />
            {title && <h1>{title}</h1>}
            {children}
            <Footer />
        </div>
    )
}

export default Page
