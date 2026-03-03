Extracts the first word or term appearing directly after a specified text in the input.
Returns an empty string if the text is not found.

##### Parameters
* `value` - The input text to search in.
* `text` - The text to search for.

##### Examples
* `extractTermAfterText("some mangos and some apples", "some")` Output: `mangos`
* `extractTermAfterText("red 2mm thing", "red")` Output: `2mm`
* `extractTermAfterText("red things", "blue")` Output: ``
* `extractTermAfterText($("description"), "color:")` — extracts the term following "color:" from the source field
