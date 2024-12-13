Values from the data table are checked for occurrences in the input text. If a match is found,
a return value can be retrieved from any column.

##### Parameter
* `Inputtext` - This attribute is to be searched for
* `Datatablename` - Data table from which the values are to be retrieved
* `Patterncolumn` - Column in the data table that contains the values to be searched for.
* `Returncolumn` - The value from this column is returned in the event of a hit
* `Default` - If nothing is found, this value is returned (optional)

##### Example
The “producttable” data table is scrolled through the “productname” column. The entry “dress” comes by and is compared with the
input text “This is a dress”. “Dress” appears in the input text, this is a match.
As a result, the entry “12345” is returned from the “productID” column of the data table.
* `lookupGetMatch('This is a dress', 'producttable', 'productname', 'productID', 'noID')` Output: `12345`
