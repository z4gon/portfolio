import { Tag } from '../src/models/enums/Tag'
import { Technology } from '../src/models/enums/Technology'
import { LinkData } from '../src/models/LinkData'
import { ProjectData } from '../src/models/ProjectData'

interface GenerateProjectDataArgs {
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
}

const generateProjectData = ({
    id,
    aliases = [],
    date,
    imagesNames = [],
    videosNames = [],
    youtubeVideoIds = [],
    primaryImageName = null,
    primaryVideoName = null,
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
    technology = null,
}: GenerateProjectDataArgs): ProjectData => {
    const thumbnailImageUrl = `/videos/thumbnails/${id}.mp4`
    const imagesFolder = `/images/projects/${id}`
    const videosFolder = `/videos/projects/${id}`

    const data: ProjectData = {
        id,
        aliases,
        date,
        thumbnailUrl: thumbnailImageUrl,
        metaImageUrl: thumbnailImageUrl,
        imagesUrls: imagesNames.map((name) => `${imagesFolder}/${name}`),
        videosUrls: videosNames.map((name) => `${videosFolder}/${name}`),
        youtubeVideoIds,
        primaryImageUrl: primaryImageName
            ? `${imagesFolder}/${primaryImageName}`
            : null,
        primaryVideoUrl: primaryVideoName
            ? `${videosFolder}/${primaryVideoName}`
            : null,
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
        technology,
    }

    return data
}

export default generateProjectData
