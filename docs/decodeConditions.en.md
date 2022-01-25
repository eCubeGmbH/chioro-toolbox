A powerful function to "rekey" to a fixed set of conditions.

- `condition_x` is the condition.
- `toReplace_x` is the value returned if `condition_x` is evaluated as True.

If none of the `condition_x`'s are evaluated as True, `fallback` will be returned (or an empty text,
if no `fallback` was defined.

**Examples**:

- if $('a') is 1 : `decodeConditions($('a') > 10, "yes", $('a') < 5, 'no')` &#8594; "no"
- if $('a') is 11 : `decodeConditions($('a') > 10, "yes", $('a') < 5, 'no')` &#8594; "yes"
- if $('a') is 6 : `decodeConditions($('a') > 10, "yes", $('a') < 5, 'no', "maybe")` &#8594; "maybe"
- if $('a') is 6 : `decodeConditions($('a') > 10, "yes", $('a') < 5, 'no')` &#8594; ""
