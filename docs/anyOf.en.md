Returns the first value from a list of arguments that evaluates to true, or an empty string if no such value is found.

##### Parameters
* A list of arguments to be checked for truthiness.

##### Examples
* `anyOf()` Output: ""
* `anyOf(null, 0, "Hello", 123)` Output: "Hello"
* `anyOf(undefined, false, "", NaN)` Output: ""
