import { PropsWithChildren } from 'react'
import Script from 'next/Script'
import styles from '../../../styles/components/page/Page.module.sass'
import NavBar from '../navbar/NavBar'

const Page: React.FC<PropsWithChildren> = ({ children }) => {
    return (
        <div className={styles.page}>
            {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
            <Script
                src="https://www.googletagmanager.com/gtag/js?id=G-NPBT98N1FD"
                strategy="beforeInteractive"
            />
            <Script id="google-analytics" strategy="beforeInteractive">
                {`
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());

                        gtag('config', 'G-NPBT98N1FD');
                    `}
            </Script>

            <NavBar />
            {children}
        </div>
    )
}

export default Page
