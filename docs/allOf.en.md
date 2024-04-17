This function checks if all provided arguments have the value `true`. If no arguments are provided, the function returns `false`.

##### Parameters
* `...args` - Any number of arguments to be checked.

##### Examples
* `allOf(true, 1 === 1, 'test' !== '')` Output: `true`
* `allOf(true, false, 1 === 1)` Output: `false`
* `allOf()` Output: `false` 
