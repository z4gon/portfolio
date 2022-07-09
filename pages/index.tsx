// import Image from 'next/image'
import Head from 'next/head'
import PortfolioItem from '../src/components/PortfolioItem'
import NavBar from '../src/components/NavBar'
import styles from '../styles/Home.module.sass'

export default function Home() {
    return (
        <>
            <NavBar />
            <main className={styles.portfolio}>
                <Head>
                    <title>z4gon | Portfolio</title>
                </Head>

                <h1>Portfolio</h1>

                <ul>
                    <PortfolioItem
                        imageUrl="images/portfolio/starcat.gif"
                        title="The Star Cat"
                        subtitle="Published Mobile Game"
                        text="Solo indie developer on the project. Managed
                            everything from conception, art & programming until
                            deployment in AppStore and PlayStore. A stylish 2D
                            Side-Scroller / Shoot 'Em Up developed with the
                            Unity game engine."
                        links={[
                            {
                                href: 'https://apps.apple.com/us/app/the-star-cat/id1544668944',
                                text: 'Go to AppStore',
                            },
                            {
                                href: 'https://play.google.com/store/apps/details?id=com.NightOwlGames.Starcat',
                                text: 'Go to PlayStore',
                            },
                            {
                                href: 'https://nochegames.com',
                                text: 'Noche Games',
                            },
                        ]}
                    />
                </ul>
            </main>
        </>
    )
}
