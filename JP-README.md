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
// オプション(初年度を数字にするか、漢字にするか。trueなら数字になる。)
toJapaneseCalendar('2019-03-23', true) // 令和1年3月23日

// ⏬toGregorian
toGregorian('令和2年5月10日') // 2020年5月10日
// オプション(区切り文字選択)
toGregorian('令和2年5月10日', '/')// 2020/5/10
toGregorian('令和2年5月10日', '-')// 2020-5-10
```

## ライセンス

MIT
