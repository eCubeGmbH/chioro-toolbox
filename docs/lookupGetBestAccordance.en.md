Values from the data table are compared with the input text.
The degree of match is specified with a value from 0 to 100.
Any column of the data table is given in brackets for the best match.

##### Parameter
* `Inputtext` - This attribute is to be used for the search
* `Datatablename` - Data table to be used for the search
* `Patterncolumn` - Column in the data table containing the values to be compared.
* `Returncolumn` - The value from this column is returned in the event of a match
* `Default` - If nothing is found, this value is returned (optional)

##### Example
In the “producttable” data table, the “productname” column is scrolled through. The input text “dress” is compared with the
entries and a degree of the match and the return column in brackets are returned for each row
* `searchMatch('dress', 'producttable', 'productname', 'productname', 'noID')` Output: `41.2 (dress in red)`
