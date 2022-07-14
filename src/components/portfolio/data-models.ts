export interface ProjectData {
    id: string
    thumbnailUrl: string
    imagesUrls: string[]
    youtubeVideoId?: string
    title: string
    subtitle: string
    text: string
    links: ProjectLink[]
    appleAppStoreUrl?: string
    googlePlayStoreUrl?: string
}

export interface ProjectLink {
    href: string
    text: string
}
