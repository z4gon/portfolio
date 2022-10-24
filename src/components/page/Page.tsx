import { PropsWithChildren } from 'react'
import styles from '../../../styles/components/page/Page.module.sass'
import NavBar from '../navbar/NavBar'
import Footer from './Footer'
import GoogleAnalytics from './GoogleAnalytics'

interface PageProps {}

const Page: React.FC<PropsWithChildren<PageProps>> = ({ children }) => {
    return (
        <div className={styles.page}>
            <GoogleAnalytics />
            <NavBar />
            {children}
            <Footer />
        </div>
    )
}

export default Page
