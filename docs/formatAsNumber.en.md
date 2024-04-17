Formats a number according to the formatting rules of the given locale. If no locale is specified, the default locale is used.

##### Parameters
* `value` - The number to format.
* `overrideLocale` - (Optional) A string specifying the locale to use (e.g., 'en-US' for English).

##### Examples
* `formatAsNumber(1234.56)` Output: 1,234.56
* `formatAsNumber(1234.56, 'de-DE')` Output: 1.234,56 
