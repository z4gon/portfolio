import { LinkData } from '../src/models/LinkData'
import { ProjectData } from '../src/models/ProjectData'
import { Tag } from './tags'

interface GenerateProjectDataArgs {
    id: string
    thumbnailImageName: string
    imagesNames: string[]
    date: string
    youtubeVideoIds: string[]
    title: string
    subtitle: string
    description: string[]
    implementationDetails: string[]
    tags: Tag[]
    gitHubUrl?: string
    links?: LinkData[]
    appleAppStoreUrl?: string
    googlePlayStoreUrl?: string
}

const generateProjectData = ({
    id,
    date,
    thumbnailImageName,
    imagesNames,
    youtubeVideoIds,
    title,
    subtitle,
    description,
    implementationDetails,
    tags,
    gitHubUrl = null,
    links = [],
    appleAppStoreUrl = null,
    googlePlayStoreUrl = null,
}: GenerateProjectDataArgs): ProjectData => {
    const imagesFolder = `/images/portfolio/${id}`

    const data: ProjectData = {
        id,
        date,
        thumbnailUrl: `${imagesFolder}/${thumbnailImageName}`,
        metaImageUrl: `${imagesFolder}/${thumbnailImageName}`,
        imagesUrls: imagesNames.map((name) => `${imagesFolder}/${name}`),
        youtubeVideoIds,
        title,
        subtitle,
        description,
        implementationDetails,
        tags,
        gitHubUrl: gitHubUrl || `https://github.com/z4gon/${id}`,
        links,
        appleAppStoreUrl,
        googlePlayStoreUrl,
    }

    return data
}

export default generateProjectData
