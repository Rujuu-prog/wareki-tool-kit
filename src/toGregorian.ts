import { eraList } from './eraList'

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
