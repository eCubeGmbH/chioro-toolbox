A powerful function to "decode" a fixed set of values.

- `text` is the text to search.
- `textToSearch_x` is the text (or regular expression) to search for.
- `textToReplace_x` is the text that will be returned if `textToSearch1` was found.

If `textToSearch_x` was found, `textToReplace_x` will be returned. If `textToSearch_x` was not found, the same producure will
be performed on `textToSearch_x+1` until a result is found.

If no `textToSearch_x` was found at all, `fallback` is returned (or an empty text,
if no `fallback` was defined.

**Example**

`
decodeAll(description,
/ladies/i, 'F',
/women/i, 'F',
/gentlemen/i, 'M',
/men/i, 'M',
'uni'
)`

- "Women's top" &#8594; "F"
- "Men's shoes" &#8594; "M"
- "Fluffy scarf" &#8594; "uni"
