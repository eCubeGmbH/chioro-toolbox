**Description**  
Searches a lookup table for a value that matches a regular expression and returns the corresponding value from another column.

**Parameters**  
* `valueToMatch` - The value to match against the regular expressions in the lookup table.
* `lookupTableName` - The name of the lookup table.
* `columnContainingRegex` - (Optional) The name of the column containing the regular expressions. Default: 'key'.
* `columnToRetrieveValueFrom` - (Optional) The name of the column to retrieve the value from. Default: 'value'.

**Examples**  
* **Input:** "apple" **Call:** `lookupGetRegExp("apple", "fruits", "name", "color")` **Output:** "red"
* **Input:** "12345" **Call:** `lookupGetRegExp("12345", "products", "id", "price")` **Output:** "19.99" 
z