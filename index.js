export default {
  async fetch(req, env, ctx) {
    const url = new URL(req.url);

    if (url.pathname !== '/fetch') {
      const html = `<form method="GET" action="/fetch">
        <label>URL: <input name="url" value="https://news.ycombinator.com/" /></label>
        <label>CSS Selector: <input name="selector" value=".titleline a" /></label>
        <button>Get!</button>
      </form>`;
      return new Response(html, { headers: { 'content-type': 'text/html' } });
    };

    const targetURL = url.searchParams.get('url');
    const selector = url.searchParams.get('selector');
    console.log({ targetURL, selector })

    try { new URL(targetURL) } catch {
      return new Response('Invalid URL');
    };

    const innerText = [];
    let tmp = '';
    const rewriter = new HTMLRewriter().on(selector, {
      text(e) {
        tmp += e.text;
        if (e.lastInTextNode) {
          console.log(tmp);
          innerText.push(tmp);
          tmp = '';
        };
      }
    });

    try {
      await rewriter.transform(await fetch(targetURL)).text();
    } catch {
      return new Response('Failed to fetch request');
    };

    return new Response(JSON.stringify({ innerText }, null, '  '), {
      headers: { 'content-type': 'application/json' }
    });
  },
};
