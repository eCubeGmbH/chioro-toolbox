Splits the `text` at the respective positions where a `separator` occurs.

Note: If no `separator` is specified, the text is split after a comma by default.

**Examples**
- (with separator `|`): `splitText("a|b|c", "|")` &#8594; `["a", "b", "c"]`
- (without separator): `splitText("a|b|c")` &#8594; `["a|b|c"]`
- (without separator): `splitText("a,b,c")` &#8594; `["a", "b", "c"]`