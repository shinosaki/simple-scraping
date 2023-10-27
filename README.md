# simple-scraping
Simple implementation for scraping website on Cloudflare Workers with HTMLRewriter.  
You can get innerText using CSS Selector.  

Cloudflare Workers上で動作する、HTMLRewriterを用いたスクレイピングツールのシンプルな実装。  
CSSセレクタでinnerTextを取得できます。  

## Params / パラメータ
| Param | Description | Example |
| ----- | ----------- | ------- |
| `url`   | Target URL  | `https://news.ycombinator.com/` |
| `selector` | CSS Selector | `.titleline a` |

## Usage / 使い方
Request to `/fetch` endpoint with `GET` method. `?url` and `?selector` parameters are required.
`/fetch`へ`GET`メソッドのリクエストを送ります。`?url`と`?selector`パラメータは必須です。

Get all story titles from HackerNews top page:  
HackerNewsのトップページからストーリのタイトルを取得する:
```bash
$ curl "https://simple-scraping.la1n.workers.dev/fetch?url=https://news.ycombinator.com/&selector=.titleline+>+a"
{
  "innerText": [
    "Let me tell you about me Gear Fabrication Syndrome",
    "Yugoslavia&#x27;s Digital Twin – When a country&#x27;s internet domain outlives the nation",
    "WebSDR – Internet-connected Software-Defined Radios",
    "Ceasing print publication of ACM journals and transactions",
    "Interactive intro to shaders",
    "Trying to make sense of why Otis exploded en route to Acapulco",
    "Takkyu-bin: Luggage forwarding in Japan",
    "How to catch a wild triangle",
    "How bioelectricity could regrow limbs and organs",
    "My Left Kidney",
    "The Cloud Computer",
    "Things I like about Gleam&#x27;s Syntax",
    "On Bus Arbitration on the Unibus and QBUS (2017)",
    "Making PostgreSQL tick: New features in pg_cron",
    "Roombas at the end of the world",
    "Apple Faces Potential Watch Import Ban After Federal Trade Ruling",
    "Imbue (Formerly Generally Intelligent) (YC S17) Is Hiring a Chief of Staff",
    "Now add a walrus: Prompt engineering in DALL-E 3",
    "The Moose Boulder Hoax",
    "Monsters in the Middle Ages",
    "Limewash (2005) [pdf]",
    "How to Exclaim",
    "Dagor Engine and Tools source code from Gaijin Games KFT",
    "Could a near-Earth asteroid be a piece of the moon?",
    "I2P: End-to-end encrypted and anonymous internet",
    "Bird with GPS flies into typhoon",
    "Cold war satellite images reveal unknown Roman forts",
    "Temporal Databases (1986) [pdf]",
    "We have decided to pause driverless operations across all of our fleets",
    "We need to talk about funding"
  ]
}
```

## Deploy / デプロイ
```bash
$ wrangler deploy --minify ./index.js
```

## Author
[shinosaki](https://shinosaki.com/)

## LICENSE
[MIT](./LICENSE)
