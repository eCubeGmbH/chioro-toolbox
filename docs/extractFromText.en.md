Extracts the first match of a regular expression from a text. If no match is found, an optional fallback value is returned.

##### Parameters
* `text` - The text to extract from.
* `pattern` - A text or regular expression defining the text to extract.
* `fallback` - (Optional) A fallback value to return if no match is found.
* `withGroups` - (Optional) A boolean indicating whether to return the first capturing group of the match.

##### Examples
* `extractFromText('Hello World!', 'World')` Output: `World`
* `extractFromText('Hello World!', /World/)` Output: `World`
* `extractFromText('Hello Mars!', /World/, 'somewhere')` Output: `somewhere`
* `extractFromText('Username: Max', /Username: (.*)/, 'unknown', true)` Output: `Max` 
