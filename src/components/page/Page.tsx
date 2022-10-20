import { PropsWithChildren } from 'react'
import styles from '../../../styles/components/page/Page.module.sass'
import NavBar from '../navbar/NavBar'
import Footer from './Footer'
import GoogleAnalytics from './GoogleAnalytics'

interface PageProps {
    onScrollToBottom?: () => void
}

const Page: React.FC<PropsWithChildren<PageProps>> = ({
    children,
    onScrollToBottom,
}) => {
    const handleScroll = (e) => {
        if (!onScrollToBottom) {
            return
        }

        const bottom =
            e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight
        if (bottom) {
            onScrollToBottom()
        }
    }

    return (
        <div className={styles.page} onScroll={handleScroll}>
            <GoogleAnalytics />
            <NavBar />
            {children}
            <Footer />
        </div>
    )
}

export default Page
