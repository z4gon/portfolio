import Script from 'next/script'

interface YouTubeEmbedProps {
    videoId: string
    title: string
}

const YouTubeEmbed: React.FC<YouTubeEmbedProps> = ({ videoId, title }) => {
    return (
        <>
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
