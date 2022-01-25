Überprüft ob der `text` mit bestimmten Zeichen (`search`) endet.
`search` kann hierbei ein Text oder ein Regulärer Ausdruck sein.

**Beispiele**
- `endsWith("super", /e./)` &#8594; `true`
- `endsWith("SupeR", /er/i)` &#8594; `true`
- `endsWith("Super", "er")` &#8594; `true`
- `endsWith("Super", "up)` &#8594; `false`
