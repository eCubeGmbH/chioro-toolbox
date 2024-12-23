Retrieve a specific entry from a data table using a search value.

##### Parameter
* `Inputtext` - This value is searched for in the data table
* `Datatablename` - The name of the data table to be used
* `Searchcolumn` - The input text is searched for in this column of the data table
* `Returncolumn` - If the input text is found in the search column, the tool returns the entry from this column

##### Example
In the “producttable” data table, the word “dress” is searched for in the “productname” column.
When this term is found, as a result the entry “12345” is returned from the “productID” column of the data table.
* `searchAndTake('dress', 'producttable', 'productname', 'productID')` Output: `12345`