export default {
  async fetch(req, env, ctx) {
    const url = new URL(req.url);

    if (url.pathname !== '/fetch') {
      const html = `<form method="GET" action="/fetch">
        <label>URL: <input name="url" value="https://news.ycombinator.com/" /></label>
        <label>CSS Selector: <input name="selector" value=".titleline > a" /></label>
        <label>Attribute: <input name="attr" value="href" /></label>
        <button>Get!</button>
      </form>`;
      return new Response(html, { headers: { 'content-type': 'text/html' } });
    };

    const targetURL = url.searchParams.get('url');
    const selector = url.searchParams.get('selector');
    const attributeName = url.searchParams.get('attr');
    console.log({ targetURL, selector, attributeName });

    try { new URL(targetURL) } catch {
      return new Response('Invalid URL');
    };

    const innerText = [], attributes = [];
    let tmp = '';
    const rewriter = new HTMLRewriter().on(selector, {
      element(e) {
        attributes.push(e.getAttribute(attributeName));
      },
      text(t) {
        tmp += t.text;
        if (t.lastInTextNode) {
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

    return new Response(JSON.stringify({ innerText, attributes }, null, '  '), {
      headers: { 'content-type': 'application/json' }
    });
  },
};
