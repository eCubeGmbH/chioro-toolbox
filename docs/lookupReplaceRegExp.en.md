Allows you to search and replace values in a string based on defined rules within a data table.

##### Parameters
* `lookupTableName` - The name of the data table containing the search and replace patterns.
* `columnContainingRegex` - The name of the column in the data table containing the regular expression for the search.
* `columnToRetrieveValueFrom` - The name of the column in the data table containing the replacement value.
* `valueToMatch` - The string in which to perform the search and replace.

##### Examples
* `replaceUsingLookup('product_table', 'product_name', 'product_id', 'Apple Pie')` Output: `12345`
* `replaceUsingLookup('color_table', 'hex_code', 'color_name', '#FF0000')` Output: `Red` 
