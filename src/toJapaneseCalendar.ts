import { eraList } from './eraList'

export function toJapaneseCalendar (dateString: string, isFirstYearToNumber: boolean = false): string {
  const date = new Date(dateString)
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
  if (eraYear === 1 && isFirstYearToNumber) {
    return `${era.name}元年${month}月${day}日`
  } else {
    return `${era.name}${eraYear}年${month}月${day}日`
  }
}
