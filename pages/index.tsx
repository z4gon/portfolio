// import Image from 'next/image'
import NavBar from '../src/components/navbar/NavBar'
import { items, PortfolioItemData } from '../src/components/portfolio/data'
import PortfolioGrid from '../src/components/portfolio/Grid'

interface HomeProps {
    items: PortfolioItemData[]
}

export default function Home({ items }: HomeProps) {
    return (
        <>
            <NavBar />
            <PortfolioGrid items={items} />
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
            items,
        },
    }
}
