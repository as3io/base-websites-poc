# Base Websites Proofs-of-Concept

## Requirements
### General
1. SSR (Server-Side Rendering)
2. Apollo GraphQL client (client and server side)
3. Parallel query execution (that can wait for parent query resolution)
4. Basic block query components (e.g. website section query) that can access passed props on both client and server
5. Boilerplate routing (that accepts customization?)
6. Wildcard routing without prefixed resource names (e.g. `/foo` can be resolved to a section resource while `/foo/article/12345678` can resolve to content)
7. Section pages that can be configured per alias (e.g. `some-section-alias` vs. `another-section-alias` vs. `default`)
8. Content pages that can be configured per type (e.g. `press-release` vs. `company` vs. `default`)
9. Ability to control when queries should (or shouldn't) be prefetched from the server (i.e. client-side only queries)
10. Traditional HTTP status codes (404 vs. 500) that can also be triggered when correspondong GraphQL errors are encountered

### Content Page
### Section Page
### Home Page

## Instances

### NextJS (React)

### NuxtJS (Vue)
