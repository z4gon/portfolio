import { useState } from 'react'
import styles from '../../../styles/components/portfolio/Grid.module.sass'
import { ProjectData } from './data-models'

import Thumbnail from './Thumbnail'

const PAGE_SIZE = 5

interface GridProps {
    projects: ProjectData[]
}

const Grid: React.FC<GridProps> = ({ projects }) => {
    const [page, setPage] = useState(0)

    const loadNextPage = () => {
        console.log(`loadNextPage page: ${page + 1}`)
        setPage((currentPage) => currentPage + 1)
    }

    const hasNext = projects.length > (page + 1) * PAGE_SIZE

    console.log(`projects.length: ${projects.length}`)
    console.log(`page: ${page}`)

    return (
        <main className={styles.container}>
            <div className={styles.grid}>
                {projects.slice(0, (page + 1) * PAGE_SIZE).map((item) => (
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
