Extracts the first word or term appearing directly before a specified text in the input.
Returns an empty string if the text is not found.

##### Parameters
* `value` - The input text to search in.
* `text` - The text to search for.

##### Examples
* `extractTermBeforeText("2 mm Spalttiefe", "Spalttiefe")` Output: `mm`
* `extractTermBeforeText("2mm Spalttiefe", "Spalttiefe")` Output: `2mm`
* `extractTermBeforeText("hello guys", "guys")` Output: `hello`
* `extractTermBeforeText($("dimensions"), "cm")` — extracts the term before "cm" from the source field
