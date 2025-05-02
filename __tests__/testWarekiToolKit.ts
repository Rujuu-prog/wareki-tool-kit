import { toJapaneseCalendar, toGregorian } from '../src'

// ⏬ toJapaneseCalendar
console.log(toJapaneseCalendar('2019年03月23日')) // => 令和元年3月23日
console.log(toJapaneseCalendar('2019/03/23')) // => 令和元年3月23日
console.log(toJapaneseCalendar('2019-03-23')) // => 令和元年3月23日

// option1 (元年を数字にする)
console.log(toJapaneseCalendar('2019-03-23', true)) // => 令和1年3月23日
console.log(toJapaneseCalendar('2019-03-23', false)) // => 令和元年3月23日

// option2 (ゼロ埋め)
console.log(toJapaneseCalendar('2019-03-03', false, true)) // => 令和元年03月03日
console.log(toJapaneseCalendar('2019-03-03', false, false)) // => 令和元年3月3日

// ⏬ toGregorian
console.log(toGregorian('令和2年5月10日')) // => 2020年5月10日
console.log(toGregorian('令和1年5月10日')) // => 2019年5月10日
console.log(toGregorian('令和元年5月10日')) // => 2019年5月10日

// option (区切り文字)
console.log(toGregorian('令和2年5月10日', '/')) // => 2020/5/10
console.log(toGregorian('令和2年5月10日', '-')) // => 2020-5-10
console.log(toGregorian('令和2年5月10日', 'k')) // => 2020年5月10日

// option2 (ゼロ埋め)
console.log(toGregorian('令和2年5月9日', 'k', true)) // => 2020年05月09日
console.log(toGregorian('令和2年5月9日', 'k', false))// => 2020年5月9日
console.log(toGregorian('令和2年5月9日', '/', true)) // => 2020/05/09
console.log(toGregorian('令和2年5月9日', '/', false)) // => 2020/5/9
