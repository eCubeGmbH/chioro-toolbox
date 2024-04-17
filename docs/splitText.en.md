Splits a text into individual elements based on a separator and removes any leading or trailing whitespace.

##### Parameters
* `text` - The text to be split.
* `separator` - (Optional) The separator to be used for splitting the text. Defaults to a comma (",").

##### Examples
* `splitText("Apple, Pear, Banana")` Output: `["Apple", "Pear", "Banana"]`
* `splitText("one; two; three", ";")` Output: `["one", "two", "three"]`
