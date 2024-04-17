This function checks if a given value is not blank. It works with various data types such as strings, numbers, booleans, arrays, and objects.

##### Parameters
* `text_or_object` - The value to check for non-blankness.

##### Examples
* `isNotBlank(null)` Output: `false`
* `isNotBlank('')` Output: `false`
* `isNotBlank('   ')` Output: `false`
* `isNotBlank([])` Output: `false`
* `isNotBlank({})` Output: `false`
* `isNotBlank(0)` Output: `true` 
