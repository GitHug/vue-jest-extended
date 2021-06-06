# Vue Jest Extended

[![Build Status](https://travis-ci.org/githug/vue-jest-extended.svg?branch=master)](https://travis-ci.org/githug/vue-jest-extended) [![dependencies Status](https://david-dm.org/githug/vue-jest-extended/status.svg)](https://david-dm.org/githug/vue-jest-extended) [![devDependencies Status](https://david-dm.org/githug/vue-jest-extended/dev-status.svg)](https://david-dm.org/githug/vue-jest-extended?type=dev) [![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

**Jest extensions compatible with Vue Test Utils** ✨

⚠️ Designed to work with Vue 2.x ⚠️

# Features

* `.toHaveEmitted` - Check if a @vue/test-utils wrapper has emitted the given event
* `.toHaveEmittedPayload` - Check if a @vue/test-utils has emitted an event with the given payload
# Install
```
yarn add -D vue-jest-extended
```
# Setup
In your jest configuration:

## From Jest v24
```
"jest": {
  ...
   "setupFilesAfterEnv": ["vue-jest-extended"]
  ...
}
```

## Jest v23 or previous
```
"jest": {
  ...
  "setupTestFrameworkScriptFile": "vue-jest-extended"
  ...
}
```

alternatively if you want to combine these matchers with other matchers in your project
```
"jest": {
  ...
  "setupTestFrameworkScriptFile": "./extensions.js"
  ...
}
```
```
/* extensions.js */

import 'vue-jest-extended;
// require('vue-jest-extended);
```


# License
MIT
