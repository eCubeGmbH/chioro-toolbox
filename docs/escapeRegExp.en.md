This function escapes special regular expression characters in a string by adding backslashes before them.
This is useful when you need to use dynamic text as a literal pattern in regex-based functions.

##### Parameters
* `string` - The text containing characters to escape.

##### Examples
* `escapeRegExp("price is $5.00")` Output: `"price is \$5\.00"`
* `escapeRegExp("file (copy).txt")` Output: `"file \(copy\)\.txt"`
* `escapeRegExp($("search_term"))` — escapes the source field value for safe use in regex
