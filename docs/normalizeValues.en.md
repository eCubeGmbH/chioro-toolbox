Find all the numeric values and consistently reformat them according to the input parameters: `decimalSeparator` and `decimalPlaces`.

- `decimalSeparator`: "." or "," character to be used as decimal separator.
- `decimalPlaces`: The number of fractional digits after the decimal separator.


**Examples**

- `normalizeValues("23 and 23.225 and some", '.', 1)` &#8594; "23.0 and 23.2 and some"
- `normalizeValues("23.1 and 23.22", '.', 1)` &#8594; "23.1 and 23.2"
