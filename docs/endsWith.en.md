Check if the `text` ends with specific characters (`search`).
`search` can be a text or a regular expression.

**Beispiele**
- `endsWith("super", /e./)` &#8594; `true`
- `endsWith("SupeR", /er/i)` &#8594; `true`
- `endsWith("Super", "er")` &#8594; `true`
- `endsWith("Super", "up)` &#8594; `false`
