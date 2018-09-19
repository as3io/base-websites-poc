# Website Proofs-of-Concept

## Requirements
### General
- SSR (Server-Side Rendering)
- Apollo GraphQL (client and server side)
- Parallel query execution (that can wait for parent query resolution)
- Basic block query components (e.g. website section query) that can access passed props on both client and server
- Boilerplate routing (that accepts customization?)
- Wildcard routing _without_ prefixed resource names (e.g. `/foo` can be resolved to a section resource while `/foo/article/12345678` can resolve to content)
- Ensure renamed content slugs can properly 301-redirect (legacy/hardcoded redirects should _not_ be handled by the application)
- Section pages that can be configured per alias (e.g. `some-section-alias` vs. `another-section-alias` vs. `default`)
- Content pages that can be configured per type (e.g. `press-release` vs. `company` vs. `default`)
- Ability to control when queries should (or shouldn't) be loaded on the server (i.e. client-side only queries)
- Traditional HTTP status codes (404 vs. 500) that can also be triggered when correspondong GraphQL errors are encountered
- Preferably can prefetch the corresponding `href` when anchor-click intent is shown (e.g. a URL is hovered over)
- Loading states for router transitions and per-component queries
- Metadata handling (e.g. description and social/opengraph tags)
- Rel link handling, (e.g. canonical and next/previous)
- Static content serving for items like `favicon.ico`, `robots.txt` and `manifest.json`
- Dynamic pages that "mimic" static content, e.g. `sitemap.xml`
- CSS _should_ be compiled into a single, minified file, but should not block the page render
- Images should display when in-view, be responsive, and properly handle DPR (e.g. using `<picture>` and/or `<img srcset="">`)
- Enable GraphQL APQ (automatic persisted queries) and explore CDN caching (also, enable gzipping for responses)
- Google Search Console data structures for pages
- AMP Support (?)
- RSS/Atom Support (?)
- Semantic HTML Elements (e.g. `<article>`, `<main>`, `<section>`, etc)
