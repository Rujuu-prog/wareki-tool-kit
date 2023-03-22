import { eraList } from './eraList'

/**
 * Converts a Japanese date string to a Gregorian date string.
 *
 * @param dateString - The Japanese date string to be converted (e.g. "令和3年02月12日").
 * @param separate - The separator to use for the Gregorian date string. Defaults to 'k', which will use the format "YYYY年MM月DD日". Use any other character for a custom separator (e.g. '-' for "YYYY-MM-DD").
 * @param isPadZero - Whether to pad the month and day with a leading zero if they are less than 10. Defaults to false.
 * @returns - The Gregorian date string in the format specified by the `separate` parameter.
 * @throws - Throws an error if the input `dateString` is invalid or if the year is not supported.
 * @example
 * // returns '2023年3月21日'
 * toGregorian('令和5年3月21日')
 * @example
 * // returns '2023/3/21'
 * toGregorian('令和5年3月21日', '/')
 * @example
 * // returns '2023-3-21'
 * toGregorian('令和5年3月21日', '-')
 * @example
 * // returns '2023-03-21'
 * toGregorian('令和5年3月21日', '-', true)
 * @see {@link https://github.com/Rujuu-prog/wareki-tool-kit} for the canonical source repository
 */
export function toGregorian (dateString: string, separate: string = 'k', isPadZero: boolean = false): string {
  const eraNames = eraList.map((e) => e.name).join('|')
  const regex = new RegExp(`^(${eraNames})(\\d+)年(\\d+)月(\\d+)日$`)
  const matches = dateString.match(regex)

  if (matches == null) {
    throw new Error('Invalid date')
  }

  const eraName = matches[1]
  const yearInEra = parseInt(matches[2], 10)
  const month = parseInt(matches[3], 10)
  const day = parseInt(matches[4], 10)

  const era = eraList.find((e) => e.name === eraName)
  if (era === undefined) {
    throw new Error('The entered year is not supported.')
  }

  const gregorianYear = era.startYear + yearInEra - 1

  const paddedMonth = isPadZero ? String(month).padStart(2, '0') : month
  const paddedDay = isPadZero ? String(day).padStart(2, '0') : day

  // 区切り文字切り替え
  if (separate === 'k') {
    return `${gregorianYear}年${paddedMonth}月${paddedDay}日`
  } else {
    return `${gregorianYear}${separate}${paddedMonth}${separate}${paddedDay}`
  }
}
