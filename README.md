# wareki-tool-kit

A collection of tools to manipulate the Japanese and Western calendars for javascript and typescript.

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
// option(Whether to use numerals or kanji for the original number.)
toJapaneseCalendar('2019-03-23', true) // 令和1年3月23日

// ⏬toGregorian
toGregorian('令和2年5月10日') // 2020年5月10日
// option(Separator Select)
toGregorian('令和2年5月10日', '/')// 2020/5/10
toGregorian('令和2年5月10日', '-')// 2020-5-10
```

## License

MIT
