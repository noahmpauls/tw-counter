# Tailwind CSS Counter Plugin

A Tailwind CSS plugin that adds utility classes for CSS counters.

## Install

Install the plugin from NPM:

```
npm install --save-dev @noahmpauls/tw-counter
```

In your Tailwind project's `tailwind.config.js` file, add the counter plugin:

```js
// tailwind.config.js

const counter = require('@noahmpauls/counter');

module.exports = {
  content: [
    //...
  ],
  theme: {
    extend: {},
  },
  plugins: [
    counter
  ],
}
```

## Usage

### Examples

Given the following HTML:

```html
<pre class="count-default">
  <code class="count-inc-default before:content-[counter(default)]"> line of code</code>
  <code class="count-inc-default-8 before:content-[counter(default)]"> line of code</code>
  <code class="-count-inc-default-3 before:content-[counter(default)]"> line of code</code>
</pre>
```

The generated text will be:

```
1 line of code
9 line of code
6 line of code
```

#### Using arbitrary values:

Arbitrary values can be used to give a custom name to the counter being used, and to reset/increment by custom values.

Given the following HTML:

```html
<pre class="count-[line_40]">
  <code class="count-inc-[line_3] before:content-[counter(line)]"> line of code</code>
  <code class="-count-inc-[line] before:content-[counter(line)]"> line of code</code>
  <code class="count-inc-[line_17] before:content-[counter(line)]"> line of code</code>
</pre>
```

The generated text will be:

```
43 line of code
42 line of code
59 line of code
```

### Generated Classes

The plugin generates the following utility classes:

*Create/Reset Counters:*
| Class Name | CSS | Description |
| - | - | - |
| `count-default` | `counter-reset: default;` | resets the counter named `default` |
| `count-default-0` | `counter-reset: default 0;` | reset the counter named `default` to 0 explicitly |
| `count-rev-default` | `counter-reset: reversed(default);`| resets the counter named `default` to its reversed starting value (limited browser support) |

*Increment Counters:*
| Class Name | CSS | Description |
| - | - | - |
| `count-inc-default` | `counter-increment: default 1;` | increments the counter named `default` by 1 |
| `-count-inc-default` | `counter-increment: default -1;` | decrements the counter named `default` by 1 |
| `count-inc-default-{#}` | `counter-increment: default {#};` | increments the counter named `default` by the given amount |
| `-count-inc-default-{#}` | `counter-increment: default -{#};` | decrements the couner named `default` by the given amount |

### Theme Customization

Theme customization falls under `count.reset` and `count.inc`:

```js
theme: {
  'count': {
    'reset': {
      'default-5': 'default 5' // `count-default-5` reset the default counter to 5
    },
    'inc': {
      'default': 'default 2' // `count-inc-default` increments the default counter by 2
    }
  }
}
```
