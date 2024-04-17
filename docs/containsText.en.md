This function checks if a specific text is present within another text. It can also be used with regular expressions to create more complex search patterns.

##### Parameters
* `text` - The text to search within.
* `textToSearch` - The text or regular expression to search for.

##### Examples
* `containsText("Hello World", "World")` Output: `true`
* `containsText("Hello World", "hello")` Output: `true`
* `containsText("Hello World", /.*orl.*/)` Output: `true` 
