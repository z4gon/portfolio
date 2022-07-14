// import Image from 'next/image'
import projects from '../data/projects.json'
import NavBar from '../src/components/navbar/NavBar'
import { ProjectData } from '../src/components/portfolio/data-models'
import PortfolioGrid from '../src/components/portfolio/Grid'

interface HomeProps {
    projects: ProjectData[]
}

export default function Home({ projects }: HomeProps) {
    return (
        <>
            <NavBar />
            <PortfolioGrid projects={projects} />
            {`projects length: ${projects.length}`}
        </>
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
