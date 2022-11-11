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

const ProjectsGrid: React.FC<ProjectsGridProps> = ({
    title,
    projects,
    pageSize = PAGE_SIZE,
}) => {
    const [page, setPage] = useState(0)

    const hasNext = projects.length > (page + 1) * pageSize

    const loadNextPage = () => {
        if (!hasNext) {
            return
        }

        setPage((currentPage) => currentPage + 1)
    }

    const projectsToList = projects.slice(0, (page + 1) * pageSize)

    return (
        <main className={styles.container}>
            {title && <h2 className={styles.title}>{title}</h2>}
            <div className={styles.grid}>
                {projectsToList.map((project) => (
                    <ProjectCard key={project.id} {...project} />
                ))}
            </div>
            {hasNext && (
                <div className={styles.actions}>
                    <Button onClick={() => loadNextPage()}>Show More</Button>
                </div>
            )}
        </main>
    )
}

export default ProjectsGrid
