import { PropsWithChildren } from 'react'
import classNames from 'classnames'
import styles from '../../../styles/components/page/Container.module.sass'

interface ContainerProps extends PropsWithChildren {
    className?: string
    wide?: boolean
}

const Container: React.FC<ContainerProps> = ({
    children,
    className,
    wide = true,
}) => {
    return (
        <main
            className={classNames(
                styles.container,
                { [styles.wide]: wide },
                { [styles.narrow]: !wide },
                className
            )}
        >
            {children}
        </main>
    )
}

export default Container
