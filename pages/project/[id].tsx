import { includes } from 'lodash'
import Metatags from '../../src/components/Metatags'
import WithFullScreenCarousel from '../../src/components/multimedia-slider/WithFullScreenCarousel'
import Container from '../../src/components/page/Container'
import Page from '../../src/components/page/Page'
import ProjectDetails from '../../src/components/project-details/ProjectDetails'
import Spacer from '../../src/components/Spacer'
import { getAllProjects, getProjectById } from '../../src/lib/get-projects'
import { ProjectData } from '../../src/models/ProjectData'

interface ProjectPageProps {
  project: ProjectData
}

export default function ProjectPage({ project }: ProjectPageProps) {
  if (!project) {
    return null
  }

  const { id, title, description = [], subtitle, metaImageUrl } = project

  return (
    <WithFullScreenCarousel>
      <Page>
        <Metatags
          title={`${title} | Project`}
          description={description.join('') || subtitle}
          imageUrl={metaImageUrl}
          pathUrl={`/project/${id}`}
        />
        <Container wide={false}>
          <Spacer amount="3.5em" />
          <ProjectDetails {...project} />
        </Container>
      </Page>
    </WithFullScreenCarousel>
  )
}

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.
// https://nextjs.org/docs/basic-features/data-fetching/get-static-props
export async function getStaticProps(context) {
  const urlId = context.params.id
  const projectMinimal = getAllProjects().find(
    ({ id, aliases = [] }) => urlId === id || includes(aliases, urlId)
  )

  // https://nextjs.org/docs/api-reference/data-fetching/get-static-props#notfound
  if (!projectMinimal) {
    return {
      notFound: true,
    }
  }

  const project = getProjectById(projectMinimal.id, true)

  return {
    props: {
      project,
    },
  }
}

// The paths key determines which paths will be pre-rendered.
// For example, suppose that you have a page that uses Dynamic Routes named pages/posts/[id].js.
// https://nextjs.org/docs/basic-features/data-fetching/get-static-paths
export async function getStaticPaths() {
  const idsAndAliases = getAllProjects()
    .map(({ id, aliases = [] }) => [id, ...aliases])
    .reduce((subArray, finalArray) => finalArray.concat(subArray), [])

  const paths = idsAndAliases.map((id) => ({ params: { id: id } }))

  return {
    paths,
    fallback: false, // false or 'blocking'
  }
}
