import ReactMarkdown from 'react-markdown'
import styles from '../../../styles/components/blog/PostBody.module.sass'

type Props = {
    contentMarkdown: string
}

const PostBody = ({ contentMarkdown }: Props) => {
    return (
        <div className={styles.postBody}>
            <ReactMarkdown>{contentMarkdown}</ReactMarkdown>
        </div>
    )
}

export default PostBody
