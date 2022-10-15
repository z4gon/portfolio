import { LinkData } from '../src/models/LinkData'
import { ProjectData } from '../src/models/ProjectData'
import { Tag } from './tags'

interface GenerateProjectDataArgs {
    id: string
    thumbnailImageName: string
    metaImageName?: string
    imagesNames: string[]
    date: string
    youtubeVideoIds: string[]
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
}

const generateProjectData = ({
    id,
    date,
    thumbnailImageName,
    metaImageName,
    imagesNames,
    youtubeVideoIds,
    title,
    subtitle,
    description = [],
    implementationDetails,
    tags,
    gitHubUrl = null,
    links = [],
    appleAppStoreUrl = null,
    googlePlayStoreUrl = null,
    isPrivateRepo = false,
}: GenerateProjectDataArgs): ProjectData => {
    const imagesFolder = `/images/portfolio/${id}`

    const data: ProjectData = {
        id,
        date,
        thumbnailUrl: `${imagesFolder}/${thumbnailImageName}`,
        metaImageUrl: `${imagesFolder}/${metaImageName || thumbnailImageName}`,
        imagesUrls: imagesNames.map((name) => `${imagesFolder}/${name}`),
        youtubeVideoIds,
        title,
        subtitle,
        description,
        implementationDetails,
        tags,
        gitHubUrl: isPrivateRepo
            ? null
            : gitHubUrl || `https://github.com/z4gon/${id}`,
        links,
        appleAppStoreUrl,
        googlePlayStoreUrl,
    }

    return data
}

export default generateProjectData
