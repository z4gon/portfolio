import { LinkData } from '../src/models/LinkData'
import { ProjectCardConfig } from '../src/models/ProjectCardConfig'
import { ProjectData } from '../src/models/ProjectData'
import { Tag } from './tags'

interface GenerateProjectDataArgs {
    id: string
    aliases?: string[]
    thumbnailImageName: string
    metaImageName?: string
    imagesNames: string[]
    date: string
    youtubeVideoIds?: string[]
    previewImageName?: string
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
    cardConfig?: ProjectCardConfig
}

const generateProjectData = ({
    id,
    aliases = [],
    date,
    thumbnailImageName,
    metaImageName,
    imagesNames,
    youtubeVideoIds = [],
    previewImageName = null,
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
    cardConfig = {
        backgroundSize: '120%',
        backgroundPosition: '0px 0px',
        gradientColor: 'rgb(0, 96, 115)',
    },
}: GenerateProjectDataArgs): ProjectData => {
    const imagesFolder = `/images/portfolio/${id}`

    const data: ProjectData = {
        id,
        aliases,
        date,
        thumbnailUrl: `${imagesFolder}/${thumbnailImageName}`,
        metaImageUrl: `${imagesFolder}/${metaImageName || thumbnailImageName}`,
        imagesUrls: imagesNames.map((name) => `${imagesFolder}/${name}`),
        youtubeVideoIds,
        previewImageUrl: `${imagesFolder}/${previewImageName}`,
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
        cardConfig,
    }

    return data
}

export default generateProjectData
