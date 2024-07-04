A value from the data table is checked for occurrences in the attribute. If the value is found,
a return value can be retrieved from any column.

##### Parameter
* `valueToMatch` - This attribute is to be searched for
* `lookupTableName` - The name of the data table from which the value is to be retrieved.
* `columnToCompare` - The name of the column in the data table that contains the value to be searched for.
* `columnToRetrieveValueFrom` - The name of the column in the data table from which the value is to be retrieved.
* `default`- If nothing is found, this value is returned

##### Examples
* `searchMatch('apple pie', 'producttable', 'productname', 'productID', 'noID')` Output: `12345`
* `searchMatch('#FF0000', 'colortable', 'hexcode', 'colorname', 'colorless')` Output: `Red`
