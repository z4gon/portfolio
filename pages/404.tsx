import projects from '../data/projects'
import Metatags from '../src/components/Metatags'
import Page from '../src/components/page/Page'
import ProjectsGrid from '../src/components/projects-grid/ProjectsGrid'
import Spacer from '../src/components/Spacer'
import { ProjectData } from '../src/models/ProjectData'

import styles from '../styles/pages/404.module.sass'

interface NotFoundProps {
    projects: ProjectData[]
}

export default function NotFound({ projects }: NotFoundProps) {
    return (
        <Page>
            <Metatags />
            <Spacer amount="7em" />

            <h1 className={styles.title}>404</h1>
            <h2 className={styles.subtitle}>Not Found</h2>

            <p className={styles.description}>
                The project you are looking for doesn&apos;t seem to exist...
            </p>
            <p className={styles.description}>
                Here are some other projects you might be interested in:
            </p>

            <Spacer amount="2em" />
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
            projects: projects.slice(0, 4),
        },
    }
}
