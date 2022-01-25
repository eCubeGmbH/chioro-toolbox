Extracts part of the input text with the length `length` from the input `text`, starting with the character at `position`.

If the `position` is negative, it is counted from the end.

(Note: The numbering of the characters starts with 0, i.e. `position` specifies how many characters are to be `skipped`).

**Examples:**

- `textAtPosition('ene mene muh', 4, 2)` &#8594; 'me'.
- `textAtPosition('ene mene muh', -3, 2)` &#8594; 'mu'.
