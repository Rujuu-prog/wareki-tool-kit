# wareki-tool-kit

[![npm version](https://badge.fury.io/js/wareki-tool-kit.svg)](https://badge.fury.io/js/wareki-tool-kit) [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

javascriptとtypescriptのための、和暦と西暦を操作するツールキットです。

## リンク

開発者向け👉[DEVELOP.md](https://github.com/Rujuu-prog/wareki-tool-kit/blob/main/DEVELOP.md)

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
toGregorian('令和1年5月10日') // 2019年5月10日
toGregorian('令和元年5月10日') // 2019年5月10日
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

## 対応済みの和暦

<details><summary>対応済みの和暦一覧</summary>

| 和暦 |  西暦 |
|:-----------|------------:|
| 令和              | 2019|
| 平成              | 1989|
| 昭和              | 1926|
| 大正              | 1912|
| 明治              | 1868|
| 慶応              | 1865|
| 元治              | 1864|
| 文久              | 1861|
| 万延              | 1860|
| 安政              | 1854|
| 嘉永              | 1848|
| 弘化              | 1844|
| 天保              | 1830|
| 文政              | 1818|
| 文化              | 1804|
| 享和              | 1801|
| 寛政              | 1789|
| 天明              | 1781|
| 安永              | 1772|
| 明和              | 1764|
| 宝暦              | 1751|
| 寛延              | 1748|
| 延享              | 1744|
| 寛保              | 1741|
| 元文              | 1736|
| 享保              | 1716|
| 正徳              | 1711|
| 宝永              | 1704|
| 元禄              | 1688|
| 貞享              | 1684|
| 天和              | 1681|
| 延宝              | 1673|
| 寛文              | 1661|
| 万治              | 1658|
| 明暦              | 1655|
| 承応              | 1652|
| 慶安              | 1648|
| 正保              | 1644|
| 寛永              | 1624|
| 元和              | 1615|
</details>

## ライセンス

MIT
