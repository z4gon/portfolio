import { useState } from 'react'
import styles from '../../../styles/components/portfolio/Grid.module.sass'
import { ProjectData } from '../../models/ProjectData'

import ProjectThumbnail from './ProjectThumbnail'

const PAGE_SIZE = 5

interface ProjectsGridProps {
    projects: ProjectData[]
}

const ProjectsGrid: React.FC<ProjectsGridProps> = ({ projects }) => {
    const [page, setPage] = useState(0)

    const loadNextPage = () => setPage((currentPage) => currentPage + 1)

    const hasNext = projects.length > (page + 1) * PAGE_SIZE

    return (
        <main className={styles.container}>
            <div className={styles.grid}>
                {projects.slice(0, (page + 1) * PAGE_SIZE).map((item) => (
                    <ProjectThumbnail key={item.id} {...item} />
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

export default ProjectsGrid
