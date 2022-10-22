import styles from '../../../styles/components/projects-grid/ProjectsGrid.module.sass'
import { ProjectDataMinimal } from '../../models/ProjectData'
import ProjectCard from './ProjectCard'

interface ProjectsGridProps {
    projects: ProjectDataMinimal[]
}

const ProjectsGrid: React.FC<ProjectsGridProps> = ({ projects }) => {
    return (
        <main className={styles.container}>
            <div className={styles.grid}>
                {projects.map((project) => (
                    <ProjectCard key={project.id} {...project} />
                ))}
            </div>
        </main>
    )
}

export default ProjectsGrid
