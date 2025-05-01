import { eraList } from './eraList'

/**
 * Converts a Japanese date string to a Gregorian date string.
 *
 * @param dateString - The Japanese date string to be converted (e.g. "令和3年02月12日").
 * @param separate - The separator to use for the Gregorian date string. Defaults to 'k', which will use the format "YYYY年MM月DD日". Use any other character for a custom separator (e.g. '-' for "YYYY-MM-DD").
 * @param isPadZero - Whether to pad the month and day with a leading zero if they are less than 10. Defaults to false.
 * @returns - The Gregorian date string in the format specified by the `separate` parameter.
 * @throws {Error} If the input `dateString` does not match the expected format (e.g., '令和5年3月21日').
 * @throws {Error} If the extracted era name is not listed in `eraList`.
 * @throws {Error} If the converted Gregorian date is invalid (e.g., 2月30日など存在しない日).
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
export function toGregorian (
  dateString: string,
  separate: string = 'k',
  isPadZero: boolean = false
): string {
  // Replace "元" with "1" if present in the dateString
  const dateStringReplaced = dateString.replace(/元/, '1')

  const eraNames = eraList.map((e) => e.name).join('|')
  const regex = new RegExp(`^(${eraNames})(\\d+)年(\\d+)月(\\d+)日$`)
  const matches = dateStringReplaced.match(regex)

  if (matches == null) {
    const eraNameFallbackRegex = /^(.+?)\d+年\d+月\d+日$/
    const nameOnlyMatch = dateStringReplaced.match(eraNameFallbackRegex)
    if (nameOnlyMatch !== null) {
      const maybeEra = nameOnlyMatch[1]
      if (!eraList.some((e) => e.name === maybeEra)) {
        throw new Error('The entered year is not supported.')
      }
    }
    throw new Error('Invalid date') // パターンがそもそも一致しない
  }

  const eraName = matches[1]
  const yearInEra = parseInt(matches[2], 10)
  const month = parseInt(matches[3], 10)
  const day = parseInt(matches[4], 10)

  const era = eraList.find((e) => e.name === eraName)
  // この時点で eraName は必ず eraList に含まれているが、念のためのチェック（今後削除するかも）
  if (era === undefined) {
    throw new Error('The entered year is not supported.')
  }

  const gregorianYear = era.startYear + yearInEra - 1

  // 実際に存在する日付かチェック（例：2月30日はNG）
  const testDate = new Date(gregorianYear, month - 1, day)
  if (
    testDate.getFullYear() !== gregorianYear ||
    testDate.getMonth() !== month - 1 ||
    testDate.getDate() !== day
  ) {
    throw new Error('Invalid date')
  }

  const paddedMonth = isPadZero ? String(month).padStart(2, '0') : month
  const paddedDay = isPadZero ? String(day).padStart(2, '0') : day

  if (separate === 'k') {
    return `${gregorianYear}年${paddedMonth}月${paddedDay}日`
  } else {
    return `${gregorianYear}${separate}${paddedMonth}${separate}${paddedDay}`
  }
}
