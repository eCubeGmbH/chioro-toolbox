Applies the regular expression `pattern` to the given text.
If `pattern` "matches", the first matching occurrence is returned.
If not, `fallback` is returned, or an empty text if `fallback` is not specified.

**Examples**
- `extractFromText("ene men1 muh", /m.*1/)` &#8594; 'men1'
- `extractFromText("ene mene muh", /ene (\w+) muh/)` &#8594; 'mene'
- `extractFromText("ene mene muh", /tomato/, "then just not")` &#8594; 'then just not'
