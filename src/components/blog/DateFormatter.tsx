import { parseISO, format } from 'date-fns'
import styles from '../../../styles/components/blog/DateFormatter.module.sass'

type Props = {
	dateString: string
	dateFormat?: string
}

const DateFormatter = ({ dateString, dateFormat = 'LLLL	d, yyyy' }: Props) => {
	const date = parseISO(dateString)
	return (
		<time className={styles.dateFormatter} dateTime={dateString}>
			{format(date, dateFormat)}
		</time>
	)
}

export default DateFormatter
