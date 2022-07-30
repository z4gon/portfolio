import { PropsWithChildren } from 'react'
import styles from '../../../styles/components/page/Page.module.sass'
import NavBar from '../navbar/NavBar'
import GoogleAnalytics from './GoogleAnalytics'

const Page: React.FC<PropsWithChildren> = ({ children }) => {
    return (
        <div className={styles.page}>
            <GoogleAnalytics />
            <NavBar />
            {children}
        </div>
    )
}

export default Page
