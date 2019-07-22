# Vue Jest Extended

[![Build Status](https://travis-ci.org/githug/vue-jest-extended.svg?branch=master)](https://travis-ci.org/githug/vue-jest-extended) [![dependencies Status](https://david-dm.org/githug/vue-jest-extended/status.svg)](https://david-dm.org/githug/vue-jest-extended) [![devDependencies Status](https://david-dm.org/githug/vue-jest-extended/dev-status.svg)](https://david-dm.org/githug/vue-jest-extended?type=dev) [![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

**Jest extensions compatible with Vue Test Utils** ✨

# Features

* `.toHaveEmitted` - Check if a @vue/test-utils wrapper has emitted the given event
* `.toHaveEmittedPayload` - Check if a @vue/test-utils has emitted an event with the given payload

# Commands
- `npm run clean` - Remove `lib/` directory
- `npm test` - Run tests with linting and coverage results.
- `npm test:only` - Run tests without linting or coverage.
- `npm test:watch` - You can even re-run tests on file changes!
- `npm test:prod` - Run tests with minified code.
- `npm run lint` - Run ESlint with airbnb-config
- `npm run cover` - Get coverage report for your code.
- `npm run build` - Babel will transpile ES6 => ES5 and minify the code.
- `npm run prepare` - Hook for npm. Do all the checks before publishing your module.

# License
MIT
