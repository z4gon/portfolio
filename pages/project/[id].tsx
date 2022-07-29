import projects from '../../data/projects'
import WithFullScreenCarousel from '../../src/components/images-slider/WithFullScreenCarousel'
import Metatags from '../../src/components/Metatags'
import Page from '../../src/components/page/Page'
import ProjectDetails from '../../src/components/project-details/ProjectDetails'
import { ProjectData } from '../../src/models/ProjectData'

interface ProjectPageProps {
    project: ProjectData
}

export default function ProjectPage({ project }: ProjectPageProps) {
    if (!project) {
        return null
    }

    return (
        <WithFullScreenCarousel>
            <Page>
                <Metatags
                    title={`${project.title} | Project`}
                    description={project.description.join('')}
                    imageUrl={project.metaImageUrl}
                />
                <ProjectDetails {...project} />
            </Page>
        </WithFullScreenCarousel>
    )
}

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.
// https://nextjs.org/docs/basic-features/data-fetching/get-static-props
export async function getStaticProps(context) {
    const id = context.params.id
    const project = projects.find((item) => item.id === id)

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
    const paths = projects.map((item) => ({ params: { id: item.id } }))
    return {
        paths,
        fallback: true, // false or 'blocking'
    }
}
