export interface ProjectData {
    id: string
    imageUrl: string
    title: string
    subtitle: string
    text: string
    links: ProjectLink[]
}

export interface ProjectLink {
    href: string
    text: string
}
