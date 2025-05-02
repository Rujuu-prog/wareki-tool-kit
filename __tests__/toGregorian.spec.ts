import { toGregorian } from '../src'
import { eraList } from '../src/eraList'

describe('toGregorian', () => {
  test('converts Reiwa 5 to 2023 with default format', () => {
    expect(toGregorian('令和5年3月21日')).toBe('2023年3月21日')
  })

  test('converts Reiwa 5 to 2023 with "/" separator', () => {
    expect(toGregorian('令和5年3月21日', '/')).toBe('2023/3/21')
  })

  test('converts Reiwa 5 to 2023 with "-" separator and padded zeros', () => {
    expect(toGregorian('令和5年3月21日', '-', true)).toBe('2023-03-21')
  })

  test('handles 元 year as year 1 correctly for Showa', () => {
    const era = eraList.find(e => e.name === '昭和')
    const expectedYear = era !== null && era !== undefined ? era.startYear : 1926
    expect(toGregorian('昭和元年12月1日')).toBe(`${expectedYear}年12月1日`)
  })

  test('throws error on invalid date format', () => {
    expect(() => toGregorian('令和5年13月99日')).toThrow('Invalid date')
    expect(() => toGregorian('some random string')).toThrow('Invalid date')
  })

  test('throws error for unsupported era name', () => {
    expect(() => toGregorian('架空5年1月1日')).toThrow('The entered year is not supported.')
  })
})
