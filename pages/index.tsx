// import Image from 'next/image'
import Head from 'next/head'
import PortfolioItem from '../src/components/portfolio/Thumbnail'
import NavBar from '../src/components/navbar/NavBar'
import styles from '../styles/pages/Home.module.sass'
import PortfolioGrid from '../src/components/portfolio/Grid'

export default function Home() {
    return (
        <>
            <NavBar />
            <PortfolioGrid />
        </>
    )
}
