Checks whether `textToSearch` occurs in the given `text`. `textToSearch` is either one text, a list of texts
or a regular expression, or a list of regular expressions. When a list is provided, at least one of the list items
has to be found for the function to return true.

**Examples**
- (without regex): `containsText("ene mene muh", "mene")` &#8594; true
- (with regex): `containsText("ene mene muh", /m.*e/)` &#8594; true
- (with list): `containsText("ene mene muh", ['ene', 'mene'])` &#8594; true
