This function checks if a text ends with a specific string or regular expression.

##### Parameters
* `text` - The text to be checked.
* `search` - The string or regular expression that the text should end with.

##### Examples
* `endsWith("Hello World", "World")` Output: `true`
* `endsWith("Hello World", /World$/)` Output: `true`
* `endsWith("Hello World", /world$/i)` Output: `true`
* `endsWith("Hello World", "Hello")` Output: `false`
