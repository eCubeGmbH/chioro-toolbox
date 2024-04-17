Converts a given text value into a number, respecting the formatting of the text value according to the specified or default locale.

##### Parameters
* `value` - The text value to be converted into a number.
* `overrideLocale` - (Optional) The locale to be used for interpreting the text value.

##### Examples
* `textToNumber('1.234,56')` Output: `1234.56`
* `textToNumber('1,234.56', 'en-US')` Output: `1234.56` 
