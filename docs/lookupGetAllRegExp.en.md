This function searches a data table for a value that matches a specific pattern. The data table contains a column with regular expressions and another column with the values to be returned if the regular expression matches the search value. All regular expressions in the data table are searched, and all matching values are returned.

##### Parameters
* `valueToMatch` - The value to be compared with the regular expressions in the data table.
* `lookupTableName` - The name of the data table to search.
* `columnContainingRegex` - (Optional) The name of the column containing the regular expressions. The default is "key".
* `columnToRetrieveValueFrom` - (Optional) The name of the column from which to return the value if a match is found. The default is "value".

##### Examples
* `lookupGetAllRegExp("abc", "myTable", "regex", "result")` Output: `Value from 'result' column`
* `lookupGetAllRegExp("123", "lookupTable")` Output: `Value from 'value' column`