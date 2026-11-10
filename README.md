# js-vue-lab

My study lab on the way from mid-level to senior frontend developer: JavaScript, Vue 3 and TypeScript concepts, written as small examples with tests.

## Structure

```
src/concepts/js/__tests__/   # one learning-test file per JS concept (33 JS Concepts)
src/__tests__/               # component tests with Vue Test Utils
```

## Plan

1. JS, Vue and TS fundamentals
2. Testing: Vitest and Playwright
3. Performance: profiling, lazy loading, virtual scrolling
4. Backend basics: Node, PostgreSQL, API design
5. Leadership: code review, docs, technical decisions

## Run

Requires Node `^22.18.0 || >=24.12.0`.

```sh
npm install
npm run test:unit   # Vitest in watch mode
npm run dev
```
