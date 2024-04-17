This function checks if a given value is blank. This includes various data types such as strings, numbers, booleans, arrays, objects, and also `null` or `undefined`.

##### Parameters
* `text_or_object` - The value to check for blankness.

##### Examples
* `isBlank(null)` Output: `true`
* `isBlank('')` Output: `true`
* `isBlank('   ')` Output: `true`
* `isBlank([])` Output: `true`
* `isBlank({})` Output: `true`
* `isBlank(0)` Output: `false` 
