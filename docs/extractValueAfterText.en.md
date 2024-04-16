Extracts the numerical value directly following a specific text within a string. If the text is not found, the original string is returned.

##### Parameters
* `value` - The string to extract the value from.
* `text` - The text to search for before the numerical value.

##### Examples
* `extractValueAfterText('Size: 180 cm', 'Size:')` Output: `180`
* `extractValueAfterText('Weight: 75.5 kg', 'Weight:')` Output: `75.5`
* `extractValueAfterText('Age: unknown', 'Age:')` Output: `Age: unknown` 
