This function extracts the first number found in a text. If no number is found, it returns the provided fallback value.

##### Parameters
* `text` - The text to extract the number from.
* `fallback` - The value to return if no number is found.

##### Examples
* `extractNumberFromText("Your bill is 123.45 €")` Output: `123.45`
* `extractNumberFromText("No results found", 0)` Output: `0` 
