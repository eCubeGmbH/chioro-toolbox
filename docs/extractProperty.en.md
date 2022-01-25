Attempts to extract a property value from the input text. The following heuristics are used:
1. It searches for the passed name (`propertyName`) followed by an "assignment character" (space, colon or equal sign).
2. Everything between the assignment character and an "end character" (comma, semicolon) or up to the end of the line is returned as the value of the property.
3. If the property is not found, `fallback` is returned (or an empty text if `fallback` is not defined.

**Examples**:

text = "Product properties: Color: red, Size: XL, Notes: do not spin."

- `extractProperty(text, "size")` &#8594; "XL"
- `extractProperty(text, "Notes")` &#8594; "Do not spin".
