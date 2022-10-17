import { useState } from 'react'
import styles from '../../../styles/components/projects-grid/ProjectsGrid.module.sass'
import { ProjectData } from '../../models/ProjectData'
import Button from '../Button'
import ProjectCard from './ProjectCard'

const PAGE_SIZE = 12

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
                {projects.slice(0, (page + 1) * PAGE_SIZE).map((project) => (
                    <ProjectCard key={project.id} {...project} />
                ))}
            </div>
            {hasNext && (
                <div className={styles.actions}>
                    <Button onClick={loadNextPage}>Load More</Button>
                </div>
            )}
        </main>
    )
}

export default ProjectsGrid
