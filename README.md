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
| `attr` | [Attribute Name](https://developer.mozilla.org/en-US/docs/Web/API/Element/getAttribute) | `href` |

## Usage / 使い方
Request to `/fetch` endpoint with `GET` method. `?url` and `?selector` parameters are required.
`/fetch`へ`GET`メソッドのリクエストを送ります。`?url`と`?selector`パラメータは必須です。

Get all story titles from HackerNews top page:  
HackerNewsのトップページからストーリのタイトルを取得する:
```bash
$ curl "https://simple-scraping.la1n.workers.dev/fetch?url=https://news.ycombinator.com/&selector=.titleline+>+a&attr=href"
{
  "innerText": [
    "Let me tell you about me Gear Fabrication Syndrome",
    "Yugoslavia&#x27;s Digital Twin – When a country&#x27;s internet domain outlives the nation",
    "Ceasing print publication of ACM journals and transactions",
    "WebSDR – Internet-connected Software-Defined Radios",
    "Interactive intro to shaders",
    "Trying to make sense of why Otis exploded en route to Acapulco",
    "Takkyu-bin: Luggage forwarding in Japan",
    "How to catch a wild triangle",
    "How bioelectricity could regrow limbs and organs",
    "My Left Kidney",
    "The Cloud Computer",
    "The Moose Boulder Hoax",
    "Things I like about Gleam&#x27;s Syntax",
    "Making PostgreSQL tick: New features in pg_cron",
    "Roombas at the end of the world",
    "On Bus Arbitration on the Unibus and QBUS (2017)",
    "Apple Faces Potential Watch Import Ban After Federal Trade Ruling",
    "Now add a walrus: Prompt engineering in DALL-E 3",
    "Imbue (Formerly Generally Intelligent) (YC S17) Is Hiring a Chief of Staff",
    "Monsters in the Middle Ages",
    "Limewash (2005) [pdf]",
    "Dagor Engine and Tools source code from Gaijin Games KFT",
    "How to Exclaim",
    "Could a near-Earth asteroid be a piece of the moon?",
    "I2P: End-to-end encrypted and anonymous internet",
    "Bird with GPS flies into typhoon",
    "Cold war satellite images reveal unknown Roman forts",
    "Temporal Databases (1986) [pdf]",
    "We have decided to pause driverless operations across all of our fleets",
    "We need to talk about funding"
  ],
  "attributes": [
    "https://weenoisemaker.com/blog/2023/10/21/gear-fabrication-syndrome.html",
    "https://www.thedial.world/issue-9/yugolsav-wars-yu-domain-history-icann",
    "https://www.acm.org/publications/ceasing-print",
    "http://www.websdr.org/",
    "https://www.mayerowitz.io/blog/a-journey-into-shaders",
    "https://theeyewall.com/trying-to-make-sense-of-why-otis-exploded-en-route-to-acapulco-this-week/",
    "https://craigmod.com/ridgeline/170/",
    "https://securelist.com/operation-triangulation-catching-wild-triangle/110916/",
    "https://news.uchicago.edu/how-bioelectricity-could-regrow-limbs-and-organs",
    "https://www.astralcodexten.com/p/my-left-kidney",
    "https://oxide.computer/blog/the-cloud-computer",
    "https://www.atlasobscura.com/articles/moose-boulder-debunked",
    "https://erikarow.land/notes/gleam-syntax",
    "https://www.citusdata.com/blog/2023/10/26/making-postgres-tick-new-features-in-pg-cron/",
    "https://spectrum.ieee.org/south-pole-roombas",
    "http://www.froghouse.org/~dab/papers/bus-arbitration/bus-arbitration.html",
    "https://www.wsj.com/tech/apple-faces-potential-watch-import-ban-after-federal-trade-ruling-09cdfccd",
    "https://simonwillison.net/2023/Oct/26/add-a-walrus/",
    "item?id=38033524",
    "https://www.medievalists.net/2023/10/how-to-make-a-monster/",
    "https://www.lime.org/documents/lime_basics/limewash.pdf",
    "https://github.com/GaijinEntertainment/DagorEngine",
    "https://themillions.com/2023/10/how-to-exclaim.html",
    "https://www.spacechatter.com/2023/10/25/moon-fragment-near-earth-asteroid-kamooalewa/",
    "https://github.com/PurpleI2P/i2pd",
    "https://newatlas.com/biology/bird-typhoon-ride/",
    "https://www.theguardian.com/science/2023/oct/26/cold-war-satellite-images-hundreds-unknown-roman-forts",
    "https://www2.cs.arizona.edu/~rts/pubs/Computer.pdf",
    "https://twitter.com/Cruise/status/1717707807460393022",
    "https://octoprint.org/blog/2023/10/26/we-need-to-talk-about-funding/"
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
