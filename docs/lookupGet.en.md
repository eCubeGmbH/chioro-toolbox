Allows you to retrieve a specific value from a given data table based on a search value.

##### Parameters
* `valueToMatch` - The value to search for in the specified column of the data table.
* `lookupTableName` - The name of the data table from which to retrieve the value.
* `columnToCompare` - The name of the column in the data table to search for the matching value.
* `columnToRetrieveValueFrom` - The name of the column in the data table from which to retrieve the value.

##### Examples
* `lookupGet('Apple Pie', 'product_table', 'product_name', 'product_id')` Output: `12345`
* `lookupGet('#FF0000', 'color_table', 'hex_code', 'color_name')` Output: `Red` 
