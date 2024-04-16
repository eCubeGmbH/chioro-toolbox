This function decodes an input text based on a series of rules. The rules are provided as pairs of search patterns and replacements. The first search pattern that matches the input text determines the replacement that is returned. If no search pattern matches, an optional fallback value is returned or an empty string.

##### Parameters
* **input** - The text to decode.
* **...args** - A sequence of pairs of search patterns and replacements. A search pattern can be a regular expression or a simple text.
* **fallback (optional)** - The value to return if no search pattern matches.

##### Examples
* `decode("Womans shirt in red", /men/i, "M", /woman/i, "W", /kid/i, "K")` Output: `W`
* `decode("Kids shirt in blue", /men/i, "M", /woman/i, "W", /kid/i, "K")` Output: `K`
* `decode("Unisex coat in green", /men/i, "M", /woman/i, "W", /kid/i, "K", "U")` Output: `U`
* `decode("No match")` Output: `""`
