Überprüft ob der `text` mit bestimmten Zeichen (`search`) beginnt.
`search` kann hierbei ein Text oder ein Regulärer Ausdruck sein.

**Beispiele**
- `startWith("suche", /s../)` &#8594; `true`
- `startWith("suche", "su")` &#8594; `true`
- `startWith("Super", /s../i)` &#8594; `true`
- `startWith("Super", "up)` &#8594; `false`