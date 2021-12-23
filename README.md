# @causaly/isnt

A collection of common runtime predicates that TypeScript actually understands.

![Build Status](https://github.com/causaly/isnt/actions/workflows/ci.yml/badge.svg?branch=main)

#### Features

- Simple API;
- Extensive tests;
- Isomorphic library, works on the browser or Node.js.

## Installation

```bash
npm install @causaly/isnt
```

#### Requirements

- Node.js v.14+

## Quick start

```typescript
import { isNotNull } from '@causaly/isnt';

// given an array containing null and number values
const array = [1, 2, null]; // ts infers Array<null | number>

// ...remove null values by using isNotNull
const arrayWithoutNull = array.filter(isNotNull); // ts infers Array<number>
```

## API

- [isNotEmptyArray](./lib/isNotEmptyArray.ts)
- [isNotEmptyString](./lib/isNotEmptyArray.ts)
- [isNotNull](./lib/isNotEmptyArray.ts)
- [isNotUndefined](./lib/isNotEmptyArray.ts)

## Motivation

It's easy to perform a check using lodash or vanilla JavaScript, e.g.

```javascript
const array = [1, 2, null].filter(Boolean);
```

The example above will filter out the `null` value as expected (because `null` is considered to be faulty).

However, TypeScript will NOT _infer_ the correct type [[playground link](https://www.typescriptlang.org/play?#code/MYewdgzgLgBAhgJwXAnjAvDA2gRgDQwBMBYArgDbkC6AdAGYCW5UApggBQBCII5LcYAJQBuIA)]. It will _understand_ the type of array as being `Array<null | number>` instead of `Array<null>`.

`@causaly/isnt` provides a simple API to test for predicates, while making TypeScript _understand_.

## Contribute

Source code contributions are most welcome, as long as the linter is satisfied.

#### We are hiring

Causaly is building the world's largest biomedical knowledge platform, using technologies such as TypeScript, React and Node.js. Find out more about our openings at https://apply.workable.com/causaly/.

## License

MIT
