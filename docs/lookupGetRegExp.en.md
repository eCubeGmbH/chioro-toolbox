This function searches a data table for a value that matches a specific pattern.
The data table contains a column with regular expressions and another column with the values to be returned if the regular expression matches the search value.
Only the first match is returned.

##### Parameters
* `Inputtext` - This value is searched for in the data table
* `Datatablename` - The name of the data table to be used
* `Patterncolumn` - The input text is searched for in this column of the data table
* `Returncolumn` - If the input text is found in the search column, the tool returns the entry from this column

##### Example
The entries in the data table column “regex” are compared with the input text “abc”. If a
If a match is found, the entry from the “result” column is returned.
* `sucheUndNimmRegExp(“abc”, “meineTabelle”, “regex”, “result”)` Output: `Value from 'result' column`
