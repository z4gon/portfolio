import { useState } from 'react'
import projects from '../data/projects'
import Metatags from '../src/components/Metatags'
import Page from '../src/components/page/Page'
import ProjectsGrid from '../src/components/projects-grid/ProjectsGrid'
import Spacer from '../src/components/Spacer'
import { Category } from '../src/models/enums/Category'
import { ProjectDataMinimal } from '../src/models/ProjectData'

interface HomeProps {
    projects: ProjectDataMinimal[]
}

const PAGE_SIZE = 4

export default function Home({ projects }: HomeProps) {
    const [filteredProjects, setFilteredProjects] = useState(projects)

    const categories = [
        Category.VisualEffects,
        Category.Shaders,
        Category.ComputeShaders,
        Category._3DModelingAnimation,
        Category.PublishedGames,
    ]

    return (
        <Page>
            <Metatags />
            <Spacer amount="3.5em" />
            {categories.map((category) => {
                const filteredProjects = projects.filter(
                    (x) => x.category === category
                )

                return (
                    <ProjectsGrid
                        key={category}
                        title={category.toString()}
                        projects={filteredProjects}
                        pageSize={PAGE_SIZE}
                    />
                )
            })}
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
                category: x.category,
            })),
        },
    }
}
