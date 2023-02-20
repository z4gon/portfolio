import fs from 'fs'
import { join } from 'path'
import yaml from 'yaml'
import { Category } from '../src/models/enums/Category'
import { Tag } from '../src/models/enums/Tag'
import { Technology } from '../src/models/enums/Technology'
import { LinkData } from '../src/models/LinkData'

export interface ProjectDefinition {
	id: string
	aliases?: string[]
	imagesNames?: string[]
	videosNames?: string[]
	date: string
	youtubeVideoIds?: string[]
	primaryImageName?: string
	primaryVideoName?: string
	title: string
	subtitle: string
	description?: string[]
	implementationDetails: string[]
	tags: Tag[]
	gitHubUrl?: string
	links?: LinkData[]
	appleAppStoreUrl?: string
	googlePlayStoreUrl?: string
	isPrivateRepo?: boolean
	technology?: Technology
	category: Category
}

// the weird new lines are intentional
const getProjectFrontMatter = (projectDefinition: ProjectDefinition) => {
	const { id, ...rest } = projectDefinition
	return `---
${yaml.stringify(rest)}---`
}

// generateAllFrontMatterMdFiles(projects, 'data/projects/')
export const generateAllFrontMatterMdFiles = (
	projects: ProjectDefinition[],
	targetDirectory: string
) => {
	const __dirname = join(process.cwd(), targetDirectory)
	projects.forEach((project) => {
		const { id, ...rest } = project
		fs.appendFile(
			__dirname + `${id}.md`,
			getProjectFrontMatter(project),
			function (err) {
				if (err) {
					// append failed
				} else {
					// done
				}
			}
		)
	})
}

export default getProjectFrontMatter
