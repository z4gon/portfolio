import { useState } from 'react'
import { filter, orderBy } from 'lodash'
import Metatags from '../src/components/Metatags'
import Container from '../src/components/page/Container'
import Page from '../src/components/page/Page'
import PageTitle from '../src/components/page/PageTitle'
import ProjectFilters from '../src/components/projects-grid/ProjectFilters'
import ProjectsGrid from '../src/components/projects-grid/ProjectsGrid'
import Spacer from '../src/components/Spacer'
import { getAllProjects } from '../src/lib/get-projects'
import { Category } from '../src/models/enums/Category'
import { ProjectDataMinimal } from '../src/models/ProjectData'

interface HomeProps {
  projects: ProjectDataMinimal[]
}

const PAGE_SIZE = 8

export default function Home({ projects }: HomeProps) {
  const [filteredProjects, setFilteredProjects] = useState(projects)

  const categories = [
    Category.VisualEffects,
    Category.Shaders,
    Category.ComputeShaders,
    Category._3DModelingAnimation,
    Category.PublishedGames,
    Category.GameDev,
  ]

  const onFiltersChanged = (filterResults: ProjectDataMinimal[]) =>
    setFilteredProjects(filterResults)

  return (
    <Page>
      <Metatags />
      <Container>
        <Spacer amount="2em" />
        <PageTitle>Portfolio</PageTitle>
        <Spacer amount="2em" />
        <ProjectFilters
          allProjects={projects}
          onFiltersChanged={onFiltersChanged}
        />
        <Spacer amount="1em" />
        {categories.map((category) => {
          let categoryProjects = filter(
            filteredProjects,
            (x) => x.category === category
          )

          categoryProjects = orderBy(categoryProjects, ['priority'], ['asc'])

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
      projects: getAllProjects(),
    },
  }
}
