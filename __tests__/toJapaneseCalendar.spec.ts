import { toJapaneseCalendar } from '../src'
import { eraList } from '../src/eraList'

describe('toJapaneseCalendar', () => {
    test('converts standard ISO date to Japanese calendar', () => {
        expect(toJapaneseCalendar('2023-03-21')).toBe('令和5年3月21日')
    })

    test('converts slash format date to Japanese calendar', () => {
        expect(toJapaneseCalendar('2023/03/21')).toBe('令和5年3月21日')
    })

    test('converts Japanese format date to Japanese calendar', () => {
        expect(toJapaneseCalendar('2023年3月21日')).toBe('令和5年3月21日')
    })

    test('returns 元年 for first year by default', () => {
        expect(toJapaneseCalendar('2019-05-01')).toBe('令和元年5月1日')
    })

    test('returns 1年 for first year if isFirstYearToNumber = true', () => {
        expect(toJapaneseCalendar('2019-05-01', true)).toBe('令和1年5月1日')
    })

    test('pads month and day if isPadZero = true', () => {
        expect(toJapaneseCalendar('2023-03-01', false, true)).toBe('令和5年03月01日')
    })

    test('throws error for completely invalid format', () => {
        expect(() => toJapaneseCalendar('invalid-date')).toThrow('Invalid date')
    })

    test('throws error for unsupported year (before earliest era)', () => {
        const minYear = Math.min(...eraList.map((e: { startYear: number }) => e.startYear))
        const yearBefore = `${minYear - 1}-01-01`
        expect(() => toJapaneseCalendar(yearBefore)).toThrow('The entered year is not supported.')
    })

    test('throws error for invalid date like 2023-02-30', () => {
        expect(() => toJapaneseCalendar('2023-02-30')).toThrow('Invalid date')
    })
})
