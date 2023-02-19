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

const getProjectFrontMatter = (projectDefinition: ProjectDefinition) => `
---

---
`

export default getProjectFrontMatter
