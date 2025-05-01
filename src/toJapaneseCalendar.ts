import { eraList } from './eraList'

/**
 * Convert a given date string to the corresponding Japanese calendar format.
 *
 * @param dateString - The input date string in ISO 8601 ('YYYY-MM-DD'), slash-delimited ('YYYY/MM/DD'), or Japanese ('YYYY年M月D日') format.
 * @param isFirstYearToNumber - Optional flag indicating whether to represent the first year of an era as a number (default is false; the first year will be represented as '元').
 * @param isPadZero - Optional flag to zero-fill month and day if needed (default is false).
 * @returns The date string in the Japanese calendar format (e.g., '令和5年3月21日').
 * @throws {Error} If the input `dateString` is malformed, not supported format, or represents an invalid date (e.g., '2023-02-30').
 * @throws {Error} If the parsed year is before all supported eras in `eraList`.
 * @example
 * // returns '令和5年3月21日'
 * toJapaneseCalendar('2023-03-21');
 * @example
 * // returns '令和元年5月1日'
 * toJapaneseCalendar('2019-05-01');
 * @example
 * // returns '令和1年5月1日'
 * toJapaneseCalendar('2019-05-01', true);
 * @see {@link https://github.com/Rujuu-prog/wareki-tool-kit} for the canonical source repository
 */
export function toJapaneseCalendar (
  dateString: string,
  isFirstYearToNumber: boolean = false,
  isPadZero: boolean = false
): string {
  const date = parseDateString(dateString)

  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()

  const era = eraList
    .slice()
    .sort((a, b) => b.startYear - a.startYear) // 最新の元号からチェック
    .find((era) => year >= era.startYear)

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

/**
 * Parses a date string into a Date object. Supports ISO 8601 ('YYYY-MM-DD'), slash ('YYYY/MM/DD'), and Japanese format ('YYYY年MM月DD日').
 *
 * @param dateString - The input date string
 * @returns Parsed Date object
 * @throws {Error} If the date string format is not recognized or invalid
 */
function parseDateString (dateString: string): Date {
  // Handle YYYY-MM-DD or YYYY/MM/DD
  if (/^\d{4}[/-]\d{1,2}[/-]\d{1,2}$/.test(dateString)) {
    const [y, m, d] = dateString.split(/[/-]/).map(Number)
    const date = new Date(y, m - 1, d)
    if (
      date.getFullYear() === y &&
      date.getMonth() === m - 1 &&
      date.getDate() === d
    ) {
      return date
    }
  }

  // Handle 'YYYY年MM月DD日' format
  const match = dateString.match(/^(\d{4})年(\d{1,2})月(\d{1,2})日$/)
  if (match != null) {
    const year = parseInt(match[1], 10)
    const month = parseInt(match[2], 10) - 1
    const day = parseInt(match[3], 10)
    const date = new Date(year, month, day)
    if (
      date.getFullYear() === year &&
      date.getMonth() === month &&
      date.getDate() === day
    ) {
      return date
    }
  }

  throw new Error('Invalid date')
}
