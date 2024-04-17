This function checks if a specific value exists within a list of values. It also considers nested arrays and flattens them into a single array for the search.

##### Parameters
* `...args` - A list of values to search within. The first value is the search term, and the remaining values form the list to search.

##### Examples
* `inList(1, [2, 3])` Output: `false`
* `inList(1, [2, [1, 4]])` Output: `true`
* `inList('1', ['1', 2])` Output: `true` 
