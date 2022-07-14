import { items } from './data'

import Thumbnail from './Thumbnail'

import styles from '../../../styles/components/portfolio/Grid.module.sass'
import { useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

const PAGE_SIZE = 5

const Grid: React.FC<{}> = () => {
    const router = useRouter()

    const [page, setPage] = useState(0)

    const loadNextPage = () => {
        setPage((currentPage) => currentPage + 1)
    }

    const hasNext = items.length > page * PAGE_SIZE

    return (
        <main className={styles.container}>
            <div className={styles.grid}>
                {items.slice(0, (page + 1) * PAGE_SIZE).map((item) => (
                    <Thumbnail key={item.id} {...item} />
                ))}
            </div>
            {hasNext && (
                <button className={styles.loadMore} onClick={loadNextPage}>
                    Load More
                </button>
            )}
        </main>
    )
}

export default Grid
