interface Props {
    title?: string
    url?: string
    imageUrl?: string
    faviconUrl?: string
    description?: string
}

export default function Metatags(props: Props) {
    const {
        title = 'Noche Games',
        url = 'https://www.nochegames.com/',
        imageUrl = '/images/meta.jpg',
        faviconUrl = '/favicon.ico',
        description = "Starcat! A stylish Shoot 'Em Up where you play as a cosmic cat making your way through enemy drones and aliens, to escape from your crashed ship!",
    } = props

    return (
        <>
            {/* <!-- Primary Meta Tags --> */}
            <title>{title}</title>
            <meta name="title" content={title} />
            <meta name="description" content={description} />

            {/* <!-- Open Graph / Facebook --> */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content={url} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={imageUrl} />

            {/* <!-- Twitter --> */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={url} />
            <meta property="twitter:title" content={title} />
            <meta property="twitter:description" content={description} />
            <meta property="twitter:image" content={imageUrl} />

            <link rel="icon" href={faviconUrl} />
        </>
    )
}
