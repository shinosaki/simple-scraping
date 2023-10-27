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

## Example / 例
Get all story titles and links from HackerNews top page:  
HackerNewsのトップページからストーリのタイトルとリンクを取得する:  
[Link](https://simple-scraping.la1n.workers.dev/fetch?url=https://news.ycombinator.com/&selector=.titleline+%3E+a&attr=href)
```bash
$ curl "https://simple-scraping.la1n.workers.dev/fetch?url=https://news.ycombinator.com/&selector=.titleline+>+a&attr=href"
{
  "innerText": [
    "Let me tell you about me Gear Fabrication Syndrome",
    "Yugoslavia&#x27;s Digital Twin – When a country&#x27;s internet domain outlives the nation",
    "Ceasing print publication of ACM journals and transactions",
    .....
  ],
  "attributes": [
    "https://weenoisemaker.com/blog/2023/10/21/gear-fabrication-syndrome.html",
    "https://www.thedial.world/issue-9/yugolsav-wars-yu-domain-history-icann",
    "https://www.acm.org/publications/ceasing-print",
    .....
  ]
}
```

Get all press release titles and links from Cabinet Office, Government of Japan:  
内閣府の報道発表資料のタイトルとリンクを取得する:  
[Link](https://simple-scraping.la1n.workers.dev/fetch?url=https://www.cao.go.jp/press/houdou.html&selector=.title+>+a&attr=href)
```bash
$ curl "https://simple-scraping.la1n.workers.dev/fetch?url=https://www.cao.go.jp/press/houdou.html&selector=.title+>+a&attr=href"
```

## Deploy / デプロイ
```bash
$ wrangler deploy --minify ./index.js
```

## Author
[shinosaki](https://shinosaki.com/)

## LICENSE
[MIT](./LICENSE)
