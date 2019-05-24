# svelte-preprocess-scss
Svelte rollup preprocessor for Pug

## Usage


```javascript
// rollup.config.js
import svelte from 'rollup-plugin-svelte';
import pugConverter from '../where_plugin_placed.js';
...

export default {
  ...
  plugins: [
    ...
    svelte({
      preprocess: {
        markup: pugConverter(),
      },
    }),
  ],
};
```

**Using in .svelte**

```javascript
<template lang="pug">
.wrapper
    h1 {Hello}
</template>
```
