# wareki-tool-kit

A collection of tools to manipulate the Japanese and Western calendars for javascript and typescript.

## Link

日本語のREADME.md👉[JP-README.md](https://github.com/Rujuu-prog/wareki-tool-kit/blob/main/JP-README.md)

## Installation

```bash
npm install wareki-tool-kit
```

```bash
yarn add wareki-tool-kit
```

## Usage

javascript and typescript are supported.

```typescript
import {toJapaneseCalendar, toGregorian} from 'wareki-tool-kit'

// ⏬toJapaneseCalendar
toJapaneseCalendar('2019年03月23日') // 令和元年3月23日
toJapaneseCalendar('2019/03/23') // 令和元年3月23日
toJapaneseCalendar('2019-03-23') // 令和元年3月23日
// option1(Whether to use numerals or kanji for the original number. Default is false.)
toJapaneseCalendar('2019-03-23', true) // 令和1年3月23日
toJapaneseCalendar('2019-03-23', false) // 令和元年3月23日
// option2(zero-fill. Default is false.)
toJapaneseCalendar('2019-03-03', false, true) // 令和元年03月03日
toJapaneseCalendar('2019-03-03', false, false) // 令和元年3月3日


// ⏬toGregorian
toGregorian('令和2年5月10日') // 2020年5月10日
// option(Separator select. Default is 'k'.)
toGregorian('令和2年5月10日', '/')// 2020/5/10
toGregorian('令和2年5月10日', '-')// 2020-5-10
toGregorian('令和2年5月10日', 'k')// 2020年5月10日
// option2(zero-fill. Default is false.)
toGregorian('令和2年5月9日', 'k', true)// 2020年05月09日
toGregorian('令和2年5月9日', 'k', false)// 2020年5月9日
toGregorian('令和2年5月9日', '/', true)// 2020/05/09
toGregorian('令和2年5月9日', '/', false)// 2020/5/9
```

## Supported Japanese calendar

<details><summary>Supported List</summary>

| Japanese Calendar |  AD |
|:-----------|------------:|
| 令和       | 2019        |
| 平成       | 1989        |
| 昭和       | 1926        |
| 大正       | 1912        |
| 明治       | 1868        |
| 慶応       | 1865        |
| 元治       | 1864        |
| 文久       | 1861        |
| 万延       | 1860        |
| 安政       | 1854        |
| 嘉永       | 1848        |
| 弘化       | 1844        |
| 天保       | 1830        |
</details>

## License

MIT
