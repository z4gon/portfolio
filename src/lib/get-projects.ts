import { join } from 'path'
import { ProjectData, ProjectDataMinimal } from '../models/ProjectData'
import FilesParser, { ParserFunction } from './FilesParser'

const directory = join(process.cwd(), 'data/projects')
const filesParser = new FilesParser<ProjectDataMinimal | ProjectData>(directory)

export const getProjectIds = (): string[] => filesParser.getFileNames()

const projectParser: ParserFunction<ProjectDataMinimal | ProjectData> = (
	fileNameNoExt,
	frontMatterData,
	markdownContent,
	full: boolean = false
) => {
	var id = fileNameNoExt

	const {
		aliases,
		priority = 0,
		title,
		subtitle,
		description = [],
		implementationDetails,
		tags,
		technology,
		category,
		date,
		imagesNames = [],
		videosNames = [],
		youtubeVideoIds = [],
		primaryImageName,
		primaryVideoName,
		isPrivateRepo = false,
		gitHubUrl = null,
		links = [],
		appleAppStoreUrl = null,
		googlePlayStoreUrl = null,
	} = frontMatterData

	const thumbnailVideoUrl = `/videos/thumbnails/${id}.mp4`
	const metaImageUrl = `/images/thumbnails/${id}.gif`
	const imagesFolder = `/images/projects/${id}`
	const videosFolder = `/videos/projects/${id}`

	let project = {
		id,
		priority,
		date,
		aliases: aliases || [],
		title,
		thumbnailUrl: thumbnailVideoUrl,
		tags,
		technology,
		category,
	}

	if (full) {
		project = {
			...project,
			// @ts-ignore
			metaImageUrl: metaImageUrl,
			imagesUrls: imagesNames.map((name) => `${imagesFolder}/${name}`),
			videosUrls: videosNames.map((name) => `${videosFolder}/${name}`),
			youtubeVideoIds,
			primaryImageUrl: primaryImageName
				? `${imagesFolder}/${primaryImageName}`
				: null,
			primaryVideoUrl: primaryVideoName
				? `${videosFolder}/${primaryVideoName}`
				: null,
			subtitle,
			description,
			implementationDetails,
			gitHubUrl: isPrivateRepo
				? null
				: gitHubUrl || `https://github.com/z4gon/${id}`,
			links,
			appleAppStoreUrl,
			googlePlayStoreUrl,
			markdownContent,
		}
	}

	return project
}

export const getProjectById = (id: string, full: boolean = false) =>
	filesParser.parseFile(id, projectParser, full)

export const getAllProjects = (): ProjectDataMinimal[] =>
	filesParser.parseAllFiles(projectParser)
