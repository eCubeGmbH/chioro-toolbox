Check if the `text` starts with specific characters (`search`).
`search` can be a text or a regular expression.

**Examples**
- `startWith("search", /s../)` &#8594; `true`
- `startWith("search", "se")` &#8594; `true`
- `startWith("Search", /s../i)` &#8594; `true`
- `startWith("Search", "ar)` &#8594; `false`