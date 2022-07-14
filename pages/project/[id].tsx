import { useRouter } from 'next/router'
import NavBar from '../../src/components/navbar/NavBar'
import { items } from '../../src/components/portfolio/data'
import ProjectDetails from '../../src/components/portfolio/ProjectDetails'

export default function ProjectPage() {
    const router = useRouter()

    const { id } = router.query
    const project = items.find((item) => item.id === id)

    return (
        <>
            <NavBar />
            {project && <ProjectDetails {...project} />}
        </>
    )
}
