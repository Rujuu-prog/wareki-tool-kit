import { eraList } from './eraList'

/**
Convert a given date string to the corresponding Japanese calendar format.
@param dateString - The input date string in ISO 8601 format (e.g., '2023-03-21', '2023/03/21').
@param isFirstYearToNumber - Optional flag indicating whether to represent the first year of an era as a number (default is false; the first year will be represented as '元').
@param isPadZero - Optional flag to zero fill (default is false; Not Zero-Filled).
@returns The date string in the Japanese calendar format (e.g., '令和5年3月21日').
@throws If the input date string is invalid or the year is not supported.
@example
// returns '令和5年3月21日'
toJapaneseCalendar('2023-03-21');
@example
// returns '令和元年5月1日'
toJapaneseCalendar('2019-05-01');
@example
// returns '令和1年5月1日'
toJapaneseCalendar('2019-05-01', true);
@see {@link https://github.com/Rujuu-prog/wareki-tool-kit} for the canonical source repository
*/
export function toJapaneseCalendar (dateString: string, isFirstYearToNumber: boolean = false, isPadZero: boolean = false): string {
  const date = parseDateString(dateString)
  // const date = new Date(dateString)
  if (isNaN(date.getTime())) {
    throw new Error('Invalid date')
  }
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()

  const era = eraList.find((era) => year >= era.startYear)
  if (era == null) {
    throw new Error('The entered year is not supported.')
  }
  const eraYear = year - era.startYear + 1
  const paddedMonth = isPadZero ? String(month).padStart(2, '0') : month
  const paddedDay = isPadZero ? String(day).padStart(2, '0') : day
  if (eraYear === 1 && !isFirstYearToNumber) {
    return `${era.name}元年${paddedMonth}月${paddedDay}日`
  } else {
    return `${era.name}${eraYear}年${paddedMonth}月${paddedDay}日`
  }
}

function parseDateString (dateString: string): Date {
  // Try ISO 8601 format (e.g., '2023-03-21', '2023/03/21')
  let date = new Date(dateString)
  if (!isNaN(date.getTime())) {
    return date
  }

  // Try 'YYYY年MM月DD日' format
  const match = dateString.match(/^(\d{4})年(\d{1,2})月(\d{1,2})日$/)
  if (match != null) {
    const year = parseInt(match[1], 10)
    const month = parseInt(match[2], 10) - 1 // Note: month is 0-indexed in JavaScript Date objects
    const day = parseInt(match[3], 10)
    date = new Date(year, month, day)
    if (!isNaN(date.getTime())) {
      return date
    }
  }

  throw new Error('Invalid date')
}
