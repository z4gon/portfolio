import { useState } from 'react'
import styles from '../../../styles/components/projects-grid/ProjectsGrid.module.sass'
import { ProjectDataMinimal } from '../../models/ProjectData'
import Button from '../Button'
import ProjectCard from './ProjectCard'

interface ProjectsGridProps {
    title?: string
    projects: ProjectDataMinimal[]
    pageSize?: number
}

const PAGE_SIZE = 12
const PAGE_JUMP = 4

const ProjectsGrid: React.FC<ProjectsGridProps> = ({
    title,
    projects,
    pageSize = PAGE_SIZE,
}) => {
    const [page, setPage] = useState(0)

    const hasNext = projects.length > (page + 1) * pageSize

    const loadMore = () => {
        if (!hasNext) {
            return
        }

        setPage((currentPage) => currentPage + PAGE_JUMP)
    }

    if (projects.length == 0) {
        return null
    }

    const thumbnailsShowing = projects.slice(0, (page + 1) * pageSize)

    return (
        <div className={styles.gridWrapper}>
            {title && (
                <div className={styles.titleWrapper}>
                    <h2 className={styles.title}>{title}</h2>
                    <span className={styles.projectCount}>{`${
                        projects.length
                    } project${projects.length > 1 ? 's' : ''}`}</span>
                </div>
            )}

            <div className={styles.grid}>
                {thumbnailsShowing.map((project) => (
                    <ProjectCard key={project.id} {...project} />
                ))}
            </div>

            {hasNext && (
                <div className={styles.actions}>
                    <p>{`Showing ${thumbnailsShowing.length} of ${projects.length}`}</p>
                    <Button onClick={() => loadMore()}>Show More</Button>
                </div>
            )}
        </div>
    )
}

export default ProjectsGrid
