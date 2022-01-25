Searches for `textToSearch` in the given `text` and returns the position of the first found location
or -1 if the text was not found.
A regular expression ("regex") can also be given as `textToSearch`.

**Examples**
- (without regex): `locateInText("ene mene muh", "mene")` &#8594; 4
- (with regex): `locateInText("ene mene muh", /m.*e/)` &#8594; 4
