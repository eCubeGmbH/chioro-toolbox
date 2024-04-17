The function converts a given value with a unit to a different unit. It detects numerical values within the text and applies the specified factor to perform the conversion. The function also supports specifying the number of decimal places and replacing the old unit with the new unit in the text.

##### Parameters
* `value` - The text containing the value and unit (e.g., "100 km").
* `factor` - The factor by which the numerical value is multiplied to perform the conversion.
* `oldUnit` - (Optional) The old unit to be replaced.
* `newUnit` - (Optional) The new unit to be used.
* `deciPlaces` - (Optional) The number of decimal places to display in the result.

##### Examples
- `convertUnit("23 apples and 25 bananas", 1, "apples", "carrots")` Output: "23 carrots and 25 bananas"
- `convertUnit("2.3 m", 100, 'm', 'cm')` Output: "230 cm"
- `convertUnit("2.3 and 2.4", 100, '', 'cm')` Output: "230 cm and 240 cm"