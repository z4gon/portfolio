import { includes, filter } from 'lodash'
import styles from '../../../styles/components/projects-grid/ProjectFilters.module.sass'
import { ProjectDataMinimal } from '../../models/ProjectData'

interface ProjectFiltersProps {
    allProjects: ProjectDataMinimal[]
    onFiltersChanged?: (filterResults: ProjectDataMinimal[]) => void
}

const ProjectFilters: React.FC<ProjectFiltersProps> = ({
    allProjects,
    onFiltersChanged,
}) => {
    const onFilter = (searchInput: string) => {
        const filterResults = filter(allProjects, (p) =>
            includes(p.title.toLowerCase(), searchInput.toLowerCase())
        )

        onFiltersChanged(filterResults)
    }

    return (
        <div className={styles.filters}>
            <div>
                <input
                    type="text"
                    onChange={(e) => onFilter(e.currentTarget.value)}
                />
            </div>
        </div>
    )
}

export default ProjectFilters
