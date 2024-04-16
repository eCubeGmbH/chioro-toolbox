Extracts the numerical value directly preceding a specific text within a string. If the text is not found, the entire string is returned.

##### Parameters
* `value` - The string to extract the value from.
* `text` - The text to search for after the numerical value.

##### Examples
* `extractValueBeforeText('Size: 180 cm', 'cm')` Output: `180`
* `extractValueBeforeText('Weight: 75.5 kg', 'kg')` Output: `75.5`
* `extractValueBeforeText('Age: unknown', 'years')` Output: `Age: unknown` 
