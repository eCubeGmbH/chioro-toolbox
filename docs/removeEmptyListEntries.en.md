This function removes empty entries from a list of arguments and returns the cleaned list.

##### Parameters
* a variable number of values

##### Examples
* `removeEmptyListEntries("Hello", null, "World", undefined)` Output: `["Hello", "World"]`
* `removeEmptyListEntries([1, 2, null, 3], [4, null, 5])` Output: `[1, 2, 3, 4, 5]`
* `removeEmptyListEntries()` Output: `[]` 
