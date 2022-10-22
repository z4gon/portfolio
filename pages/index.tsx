import { useState } from 'react'
import projects from '../data/projects'
import Metatags from '../src/components/Metatags'
import Page from '../src/components/page/Page'
import ProjectsGrid from '../src/components/projects-grid/ProjectsGrid'
import Spacer from '../src/components/Spacer'
import { ProjectDataMinimal } from '../src/models/ProjectData'

interface HomeProps {
    projects: ProjectDataMinimal[]
}

const PAGE_SIZE = 12

export default function Home({ projects }: HomeProps) {
    const [page, setPage] = useState(0)

    const hasNext = projects.length > (page + 1) * PAGE_SIZE

    const loadNextPage = () => {
        if (!hasNext) {
            return
        }

        setPage((currentPage) => currentPage + 1)
    }

    return (
        <Page onScrollToBottom={loadNextPage}>
            <Metatags />
            <Spacer amount="5.5em" />
            <ProjectsGrid
                projects={projects.slice(0, (page + 1) * PAGE_SIZE)}
            />
            <Spacer amount="3.5em" />
        </Page>
    )
}

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.
// https://nextjs.org/docs/basic-features/data-fetching/get-static-props
export async function getStaticProps() {
    return {
        props: {
            // only serialize the needed properties
            projects: projects.map((x) => ({
                id: x.id,
                title: x.title,
                thumbnailUrl: x.thumbnailUrl,
                tags: x.tags,
                technology: x.technology,
                cardConfig: x.cardConfig,
            })),
        },
    }
}
