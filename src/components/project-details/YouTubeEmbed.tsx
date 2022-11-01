import Head from 'next/head'
import Script from 'next/script'

interface YouTubeEmbedProps {
    videoId: string
    title: string
}

const YouTubeEmbed: React.FC<YouTubeEmbedProps> = ({ videoId, title }) => {
    return (
        <>
            <Head>
                <link
                    rel="stylesheet"
                    type="text/css"
                    href="https://cdnjs.cloudflare.com/ajax/libs/lite-youtube-embed/0.2.0/lite-yt-embed.min.css"
                />
            </Head>
            <Script src="https://cdnjs.cloudflare.com/ajax/libs/lite-youtube-embed/0.2.0/lite-yt-embed.min.js" />
            {/* @ts-ignore */}
            <lite-youtube
                videoid={videoId}
                playlabel={title}
                style={{ maxWidth: 'unset' }}
            />
        </>
    )
}

export default YouTubeEmbed
