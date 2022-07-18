import projects from '../data/projects.json'
import Metatags from '../src/components/Metatags'
import Page from '../src/components/page/Page'
import ProjectsGrid from '../src/components/portfolio/ProjectsGrid'
import { ProjectData } from '../src/models/ProjectData'

interface HomeProps {
    projects: ProjectData[]
}

export default function Home({ projects }: HomeProps) {
    return (
        <Page>
            <Metatags />
            <ProjectsGrid projects={projects} />
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
            projects,
        },
    }
}
