This function returns either the provided parameter value or a default value if the parameter is blank.

##### Parameters
* `param` - The parameter to check.
* `def` - The default value to return if the parameter is blank.

##### Examples
* `defaultValue('Hello', 'World')` Output: `'Hello'`
* `defaultValue('', 'empty')` Output: `'empty'`
* `defaultValue(null, 0)` Output: `0`
