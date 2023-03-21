# wareki-tool-kit

javascriptとtypescriptのための、和暦と西暦を操作するツールキットです。

## インストール方法

```bash
npm i wareki-tool-kit
```

```bash
yarn add wareki-tool-kit
```

## 使い方

typescriptとjavascriptで使用できます。

```typescript
import {toJapaneseCalendar, toGregorian} from 'wareki-tool-kit'

// ⏬toJapaneseCalendar
toJapaneseCalendar('2019年03月23日') // 令和元年3月23日
toJapaneseCalendar('2019/03/23') // 令和元年3月23日
toJapaneseCalendar('2019-03-23') // 令和元年3月23日
// オプション(初年度を数字にするか、漢字にするか。デフォルトはfalse。)
toJapaneseCalendar('2019-03-23', true) // 令和1年3月23日
toJapaneseCalendar('2019-03-23', false) // 令和元年3月23日
// オプション2(ゼロ埋め。デフォルトはfalse。)
toJapaneseCalendar('2019-03-03', false, true) // 令和元年03月03日
toJapaneseCalendar('2019-03-03', false, false) // 令和元年3月3日


// ⏬toGregorian
toGregorian('令和2年5月10日') // 2020年5月10日
// オプション1(区切り文字選択。デフォルトは'k'。)
toGregorian('令和2年5月10日', '/')// 2020/5/10
toGregorian('令和2年5月10日', '-')// 2020-5-10
toGregorian('令和2年5月10日', 'k')// 2020年5月10日
// オプション2(ゼロ埋め。デフォルトはfalse。)
toGregorian('令和2年5月9日', 'k', true)// 2020年05月09日
toGregorian('令和2年5月9日', 'k', false)// 2020年5月9日
toGregorian('令和2年5月9日', '/', true)// 2020/05/09
toGregorian('令和2年5月9日', '/', false)// 2020/5/9
```

## ライセンス

MIT
