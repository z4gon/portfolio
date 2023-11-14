import { parseISO, format } from 'date-fns'
import { ProjectData } from '../../models/ProjectData'
import ExternalLink from '../ExternalLink'
import GitHubIcon from '../icons/GitHubIcon'
import MarkdownContent from '../markdown/MarkdownContent'
import MultimediaSlider from '../multimedia-slider/MultimediaSlider'
import TagsList, { TagRenderer } from '../TagsList'
import styles from './ProjectDetails.module.sass'
import ProjectDetailsSection from './ProjectDetailsSection'
import StoreLinks from './StoreLinks'
import YouTubeEmbed from './YouTubeEmbed'

interface ProjectDetailsProps extends ProjectData {}

const ProjectDetails: React.FC<ProjectDetailsProps> = ({
	date: dateString,
	imagesUrls = [],
	videosUrls = [],
	title,
	subtitle,
	description = [],
	implementationDetails = [],
	markdownContent = null,
	tags = [],
	links = [],
	gitHubUrl = '',
	appleAppStoreUrl = '',
	googlePlayStoreUrl = '',
	itchioUrl = '',
	youtubeVideoIds = [],
	heroImageUrl = null,
	heroVideoUrl = null,
	technology = null,
}) => {
	const date = parseISO(dateString)
	return (
		<div className={styles.detailsView}>
			{youtubeVideoIds.length > 0 && (
				<ProjectDetailsSection mobileFullWidth>
					{youtubeVideoIds.map((videoId) => (
						<div key={videoId} className={styles.youtubeVideos}>
							<YouTubeEmbed videoId={videoId} title={title} />
						</div>
					))}
				</ProjectDetailsSection>
			)}

			<MultimediaSlider imagesUrls={imagesUrls} videosUrls={videosUrls} />

			{heroImageUrl && (
				<ProjectDetailsSection mobileFullWidth>
					{/* eslint-disable-next-line @next/next/no-img-element */}
					<img className={styles.heroImage} src={heroImageUrl} alt="Preview" />
				</ProjectDetailsSection>
			)}

			{heroVideoUrl && (
				<ProjectDetailsSection mobileFullWidth>
					<video
						autoPlay
						loop
						muted
						playsInline
						controls
						className={styles.heroVideo}
					>
						<source src={heroVideoUrl} type="video/mp4" />
					</video>
				</ProjectDetailsSection>
			)}

			<div className={styles.card}>
				<ProjectDetailsSection className={styles.header}>
					<div className={styles.information}>
						<h2 className={styles.title}>
							{technology && (
								// eslint-disable-next-line @next/next/no-img-element
								<img
									className={styles.technology}
									src={`/images/technologies/${technology}.png`}
									alt={technology}
								/>
							)}
							{title}
							<TagRenderer secondary className={styles.date}>
								{format(date, 'yyyy-MM')}
							</TagRenderer>
						</h2>
						<span className={styles.subtitle}>{subtitle}</span>
						<TagsList tags={tags} />
					</div>
					{gitHubUrl && (
						<ExternalLink
							href={gitHubUrl}
							className={styles.gitHubLink}
							Icon={GitHubIcon}
						>
							View on GitHub
						</ExternalLink>
					)}
				</ProjectDetailsSection>

				{(appleAppStoreUrl || googlePlayStoreUrl || itchioUrl) && (
					<ProjectDetailsSection>
						<StoreLinks
							appleAppStoreUrl={appleAppStoreUrl}
							googlePlayStoreUrl={googlePlayStoreUrl}
							itchioUrl={itchioUrl}
						/>
					</ProjectDetailsSection>
				)}

				{links.length > 0 && (
					<ProjectDetailsSection className={styles.externalLinks}>
						<div className={styles.externalLinks}>
							{links.map((link, index) => (
								<ExternalLink key={index} href={link.href}>
									{link.text}
								</ExternalLink>
							))}
						</div>
					</ProjectDetailsSection>
				)}

				{description.length > 0 && (
					<ProjectDetailsSection className={styles.descriptionItems}>
						{description.map((paragraph, index) => (
							<p className={styles.descriptionItem} key={index}>
								{paragraph}
							</p>
						))}
					</ProjectDetailsSection>
				)}

				{implementationDetails.length > 0 && !markdownContent && (
					<ProjectDetailsSection title="Implementation">
						<ul className={styles.implementationDetails}>
							{implementationDetails.map((bullet, index) => (
								<li className={styles.bullet} key={index}>
									{bullet}
								</li>
							))}
						</ul>
					</ProjectDetailsSection>
				)}

				{markdownContent && (
					<MarkdownContent markdownString={markdownContent} />
				)}
			</div>
		</div>
	)
}

export default ProjectDetails
