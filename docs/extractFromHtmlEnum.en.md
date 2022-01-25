Looks at the input text as an HTML item list and tries to extract a property value. The following heuristics are used:
1. It is assumed that the `propertyName` follows immediately (except for spaces) after the first `li` tag
   and that should be followed by an `assignment character` (space, double-dot or equal sign).
2. Everything between the assignment character and the closing `/li` tag is returned as the value of the property.
   If the property is not found, `fallback` is returned (or empty text if `fallback` is not defined).
