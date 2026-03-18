Searches for a text or pattern in the input and returns the first match. If no match is found, an optional fallback value is returned.

##### When to use?
When a source field contains structured text and only a specific part is needed — e.g. a number from "Weight: 500g", a unit from "1.5 kg flour", or a property from a combined description field.

##### Parameters
* `text` - The text to extract from.
* `pattern` - A plain string or regular expression (RegExp) defining what to search for.
* `fallback` - (Optional) A value to return if no match is found.
* `withGroups` - (Optional) When `true`, returns only the content of the first capturing group `(...)` in the pattern instead of the full match. Useful when you need context in the pattern to locate the right position, but only want a specific part of the match.

##### Examples
* `extractFromText('Hello World!', 'World')` Output: `World`
* `extractFromText('Hello Mars!', /World/, 'somewhere')` Output: `somewhere`

##### Example with withGroups
Suppose a supplier provides weight information as `"Weight: 500g"` and you want to extract just the number `500` — without the unit and without the label.

Without `withGroups`: The pattern `/\d+g/` matches `"500g"` — the unit is still included.

With `withGroups`: The pattern `/Weight: (\d+)g/` describes the full context, but the parentheses `(\d+)` mark what you actually want. With `withGroups=true`, the function returns only `"500"`.

* `extractFromText('Weight: 500g', /Weight: (\d+)g/, '', true)` Output: `500`
* `extractFromText('Calories: 250 kcal', /Calories: (\d+) kcal/, '', true)` Output: `250`
* `extractFromText('Username: Max', /Username: (.*)/, 'unknown', true)` Output: `Max`
