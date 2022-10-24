import { useState } from 'react'
import styles from '../../../styles/components/projects-grid/ProjectsGrid.module.sass'
import { ProjectDataMinimal } from '../../models/ProjectData'
import ProjectCard from './ProjectCard'

interface ProjectsGridProps {
    projects: ProjectDataMinimal[]
}

const PAGE_SIZE = 12

const ProjectsGrid: React.FC<ProjectsGridProps> = ({ projects }) => {
    const [page, setPage] = useState(0)

    const hasNext = projects.length > (page + 1) * PAGE_SIZE

    const loadNextPage = () => {
        if (!hasNext) {
            return
        }

        setPage((currentPage) => currentPage + 1)
    }

    // const projectsToList = projects.slice(0, (page + 1) * PAGE_SIZE)
    const projectsToList = projects

    return (
        <main className={styles.container}>
            <div className={styles.grid}>
                {projectsToList.map((project) => (
                    <ProjectCard key={project.id} {...project} />
                ))}
            </div>
        </main>
    )
}

export default ProjectsGrid
