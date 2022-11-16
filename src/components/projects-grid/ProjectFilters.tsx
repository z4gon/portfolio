import styles from '../../../styles/components/projects-grid/ProjectFilters.module.sass'

interface ProjectFiltersProps {
    onFilterChanged?: () => void
}

const ProjectFilters: React.FC<ProjectFiltersProps> = () => {
    return <div className={styles.filters}></div>
}

export default ProjectFilters
