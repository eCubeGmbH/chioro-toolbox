This function is similar to the `decode` function, but it searches for all possible replacements in the input text and returns them as a list.

##### Parameters
* **input** - The text to decode.
* **...args** - A sequence of pairs of search patterns and replacements. A search pattern can be a regular expression or a simple text.
* **fallback (optional)** - The value to add to the list if no search pattern matches.

##### Examples
* `decodeAll("Gloves for Woman or Man", /Woman/i, "W", /M.n/i, "M", /Kids/i, "K")` Output: `["F", "M"]`
* `decodeAll("Gloves for Woman or Man", /Kids/i, "K", /Teens/, "K", "U")` Output: `["U"]`
* `decodeAll("No hit", "Search", "Replace value")` Output: `[]`