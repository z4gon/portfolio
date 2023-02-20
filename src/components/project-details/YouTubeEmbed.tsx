import LiteYouTubeEmbed from 'react-lite-youtube-embed'
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css'

interface YouTubeEmbedProps {
	videoId: string
	title: string
}

const YouTubeEmbed: React.FC<YouTubeEmbedProps> = ({ videoId, title }) => {
	return <LiteYouTubeEmbed id={videoId} title={title} />
}

export default YouTubeEmbed
