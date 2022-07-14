// import Image from 'next/image'
import { useRouter } from 'next/router'
import NavBar from '../../src/components/navbar/NavBar'
import Details from '../../src/components/portfolio/ProjectDetails'
import { items } from '../../src/components/portfolio/data'

export default function ProjectDetails() {
    const router = useRouter()

    const { id } = router.query
    const project = items.find((item) => item.id === id)

    return (
        <>
            <NavBar />
            {project && <Details {...project} />}
        </>
    )
}
