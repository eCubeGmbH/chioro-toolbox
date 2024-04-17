This function checks if at least one of the provided arguments has the value `true`. It iterates through all arguments and returns `true` as soon as one argument is `true`. Otherwise, it returns `false`.

##### Parameters
* `...args`: The arguments to be checked.

##### Examples
* `someOf(false, false, true)` Output: `true`
* `someOf(false, 0, "test")` Output: `false`
* `someOf(1, "test", true)` Output: `true`