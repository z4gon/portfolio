import NavBar from '../../src/components/navbar/NavBar'
import { items, PortfolioItemData } from '../../src/components/portfolio/data'
import ProjectDetails from '../../src/components/portfolio/ProjectDetails'

interface ProjectPageProps {
    project: PortfolioItemData
}

export default function ProjectPage({ project }: ProjectPageProps) {
    return (
        <>
            <NavBar />
            {project && <ProjectDetails {...project} />}
        </>
    )
}

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.
// https://nextjs.org/docs/basic-features/data-fetching/get-static-props
export async function getStaticProps(context) {
    const id = context.params.id
    const project = items.find((item) => item.id === id)

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
    return {
        paths: [...items.map((item) => ({ params: { id: item.id } }))],
        fallback: true, // false or 'blocking'
    }
}
