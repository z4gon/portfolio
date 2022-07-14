import { useState } from 'react'
import styles from '../../../styles/components/portfolio/Grid.module.sass'
import { PortfolioItemData } from './data'

import Thumbnail from './Thumbnail'

const PAGE_SIZE = 5

interface GridProps {
    items: PortfolioItemData[]
}

const Grid: React.FC<GridProps> = ({ items }) => {
    const [page, setPage] = useState(0)

    const loadNextPage = () => {
        setPage((currentPage) => currentPage + 1)
    }

    const hasNext = items.length > (page + 1) * PAGE_SIZE

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
