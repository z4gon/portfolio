// import Image from 'next/image'
import Head from 'next/head'
import PortfolioItem from '../../src/components/portfolio/Thumbnail'
import NavBar from '../../src/components/navbar/NavBar'
import styles from '../styles/pages/Home.module.sass'
import PortfolioGrid from '../../src/components/portfolio/Grid'
import Details from '../../src/components/portfolio/ProjectDetails'
import { useRouter } from 'next/router'
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
