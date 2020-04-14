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

/**
 * Get date string formatted follow each country's format(YYYY-MM-DD)
 * China, Japan, Korea, Taiwan - YYYY-MM-DD
 * US - MM/DD/YYYY
 *
 * @param dateString- Parsable string by dayjs
 * @param locale- User's language
 */
export const convertDateByCountryPreferTimeFormat = (
  dateString: string,
  locale: string
): string => {
  if (locale === 'en') {
    return dayjs(dateString).format('MMM DD, YYYY')
  }
  return dayjs(dateString).format('YYYY-MM-DD')
}

export const getLatestUpdateAt = (data: DataType[]): string => {
  return dayjs(data.reduce((a, b) => (a.date > b.date ? a : b)).date).format(
    'YYYY/MM/DD HH:mm'
  )
}
