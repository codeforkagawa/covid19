import dayjs from 'dayjs'

type DataType = {
  date: string
}

/**
 * Get datetime string formatted ISO8601(YYYY-MM-DDTHH:mm:ss)
 *
 * @param dateString - Parsable string by dayjs
 */
export const convertDatetimeToISO8601Format = (dateString: string): string => {
  return dayjs(dateString).format('YYYY-MM-DDTHH:mm:ss')
}

/**
 * Get date string formatted ISO8601(YYYY-MM-DD)
 *
 * @param dateString- Parsable string by dayjs
 */
export const convertDateToISO8601Format = (dateString: string): string => {
  return dayjs(dateString).format('YYYY-MM-DD')
}

export const getLatestUpdateAt = (data: DataType[]): string => {
  return dayjs(data.reduce((a, b) => (a.date > b.date ? a : b)).date).format(
    'YYYY/MM/DD HH:mm'
  )
}
