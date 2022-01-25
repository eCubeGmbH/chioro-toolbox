If `textToSearch_x` was found, `textToReplace_x` will be returned. If `textToSearch_x` was not found, the same procedure
will be performed on `textToSearch_x+1`.

If none of `textToSearch_x`'s produces any result, `fallback` is returned (or an empty text,
if no `fallback` was defined.

**Example**

`
decode(description,
/ladies/i, 'F',
/women/i, 'F',
/gentlemen/i, 'M',
/men/i, 'M',
'uni'
)
`
- "Women's top" &#8594; "F"
- "Men's shoes" &#8594; "M"
- "Fluffy scarf" &#8594; "uni"
