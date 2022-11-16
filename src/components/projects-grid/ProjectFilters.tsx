import { useEffect, useState } from 'react'
import { includes, filter } from 'lodash'
import styles from '../../../styles/components/projects-grid/ProjectFilters.module.sass'
import { ProjectDataMinimal } from '../../models/ProjectData'
import SearchIcon from '../icons/SearchIcon'

interface ProjectFiltersProps {
    allProjects: ProjectDataMinimal[]
    onFiltersChanged: (filterResults: ProjectDataMinimal[]) => void
}

const ProjectFilters: React.FC<ProjectFiltersProps> = ({
    allProjects,
    onFiltersChanged,
}) => {
    const [searchInput, setSearchInput] = useState('')
    const [filterResultsCount, setFilterResoultsCount] = useState(
        allProjects.length
    )

    const onFilter = () => {
        const filterResults: ProjectDataMinimal[] = searchInput
            ? filter(allProjects, (project) =>
                  includes(
                      project.title.toLowerCase(),
                      searchInput.toLowerCase()
                  )
              )
            : allProjects

        setFilterResoultsCount(filterResults.length)
        onFiltersChanged(filterResults)
    }

    useEffect(() => {
        onFilter()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchInput])

    const onSearchChange = (searchInput: string) => {
        setSearchInput(searchInput)
        onFilter()
    }

    return (
        <div className={styles.filters}>
            <div className={styles.searchBox}>
                <input
                    type="text"
                    placeholder="Search for projects"
                    onChange={(e) => onSearchChange(e.currentTarget.value)}
                />
                <SearchIcon />
            </div>
            <span className={styles.message}>
                {searchInput
                    ? `${filterResultsCount} projects matched search criteria`
                    : `${filterResultsCount} available projects`}
            </span>
        </div>
    )
}

export default ProjectFilters
