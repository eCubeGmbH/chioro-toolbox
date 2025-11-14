This function removes empty entries from a list of arguments and returns the cleaned list.
 Emptiness follows the same logic as the `isBlank` function: empty strings (`""`), empty arrays (`[]`), empty objects (`{}`), and `null`/`undefined` are considered empty and will be removed.
 
##### Parameters
* a variable number of values

##### Examples
* `removeEmptyListEntries("Hello", "", null, "World", undefined, [], {})` Output: `["Hello", "World"]`
* `removeEmptyListEntries([1, 2, null, 3], [4, "", null, 5], {}, [])` Output: `[1, 2, 3, 4, 5]`
* `removeEmptyListEntries("", null, undefined, [], {})` Output: `[]`
