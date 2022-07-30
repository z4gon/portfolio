import Script from 'next/script'

const GoogleAnalytics: React.FC<{}> = () => {
    return (
        <>
            {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
            <Script
                id="google-analytics-setup"
                src="https://www.googletagmanager.com/gtag/js?id=G-NPBT98N1FD"
                strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
                {`
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());

                        gtag('config', 'G-NPBT98N1FD');
                    `}
            </Script>
        </>
    )
}

export default GoogleAnalytics
