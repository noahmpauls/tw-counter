const plugin = require('tailwindcss/plugin');

module.exports = plugin(function ({ matchUtilities, theme }) {
  // Create reset utilities.
  matchUtilities(
    {
      'count': (value) => ({
        'counter-reset': `${value}`
      }),
      'count-rev': (value) => {
        let [name, num] = value.split(' ');
        return ({
          'counter-reset': `reversed(${name})${(num) ? ` ${num}` : ""}`
        });
      },
    },
    { values: theme('count.reset') }
  );

  // Create increment utilities.
  matchUtilities(
    {
      'count-inc': (value) => ({
        'counter-increment': `${value}`
      })
    },
    { values: theme('count.inc') }
  );
},
{
  theme: {
    'count': {
      'reset': {
        'default': 'default',
        'default-0': 'default 0',
      },
      'inc': {
        ...incrementClasses("default", 10, false),
        ...incrementClasses("default", 10, true),
      }
    }
  }
});

/**
 * Generate utility class names and corresponding counter-increment values.
 * 
 * @param {string} counterName name of counter being incremented
 * @param {number} maxInclusive positive integer specifying inclusive range of
 *  possible increment values
 * @param {boolean} isNegative whether to generate negative increments
 * @returns an object mapping utility class names to CSS counter-increment
 *  values
 */
function incrementClasses(counterName, maxInclusive, isNegative) {
  classes = {};
  for (let i = 1; i <= maxInclusive; i++) {
    let counter = `${isNegative ? '-' : ""}${counterName}`;
    let key = (i == 1)
      ? counter
      : `${counter}-${i}`;
    let value = `${counterName} ${isNegative ? '-' : ''}${i}`;
    classes[key] = value;
  }
  return classes;
}