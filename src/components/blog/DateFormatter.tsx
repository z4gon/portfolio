import { parseISO, format } from 'date-fns'
import styles from '../../../styles/components/blog/DateFormatter.module.sass'

type Props = {
  dateString: string
}

const DateFormatter = ({ dateString }: Props) => {
  const date = parseISO(dateString)
  return (
    <time className={styles.dateFormatter} dateTime={dateString}>
      {format(date, 'LLLL	d, yyyy')}
    </time>
  )
}

export default DateFormatter
