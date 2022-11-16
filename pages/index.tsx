import { useState } from 'react'
import { filter } from 'lodash'
import projects from '../data/projects'
import Metatags from '../src/components/Metatags'
import Container from '../src/components/page/Container'
import Page from '../src/components/page/Page'
import ProjectFilters from '../src/components/projects-grid/ProjectFilters'
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

    const onFiltersChanged = (filterResults: ProjectDataMinimal[]) =>
        setFilteredProjects(filterResults)

    return (
        <Page>
            <Metatags />
            <Container>
                <Spacer amount="3.5em" />
                <ProjectFilters
                    allProjects={projects}
                    onFiltersChanged={onFiltersChanged}
                />
                <Spacer amount="1em" />
                {categories.map((category) => {
                    const categoryProjects = filter(
                        filteredProjects,
                        (x) => x.category === category
                    )

                    return (
                        <ProjectsGrid
                            key={category}
                            title={category.toString()}
                            projects={categoryProjects}
                            pageSize={PAGE_SIZE}
                        />
                    )
                })}
                <Spacer amount="3.5em" />
            </Container>
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
