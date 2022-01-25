Find all the numeric values in `value` and tries to convert their unit according to the input parameters: `factor`, `oldUnit`, `newUnit`, `decimalPlaces`

- `factor`: Multiplied by this parameter in case the unit is found, or if no units are specified.
- `oldUnit`: If specified, tries to only find the numeric values with this unit and multiply them with the factor.
- `newUnit`: If specified, the newUnit will replace the oldUnit.
- `decimalPlaces`: If specified, the number will be rounded to this many decimal places.

Please note that `oldUnit` and `newUnit` could be any arbitrary text and do not need to be a real "unit" in physical sense.


**Examples**

- `convertUnit("23 apples and 25 bananas", 1, "apples", "carrots")` &#8594; "23 carrots and 25 bananas"
- `convertUnit("2.3 m", 100, 'm', 'cm')` &#8594; "230 cm"
- `convertUnit("2.3 and 2.4", 100, '', 'cm')` &#8594; "230 cm and 240 cm"
