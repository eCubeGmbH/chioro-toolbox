This function calculates the similarity between two strings as a percentage using
Levenshtein distance. The result is returned as a string with two decimal places.

##### Parameters
* `str1` - The first string to compare.
* `str2` - The second string to compare.

##### Examples
* `getSimilarityPercentage("hello", "hallo")` Output: `"80.00"`
* `getSimilarityPercentage("Nike", "Nike")` Output: `"100.00"`
* `getSimilarityPercentage($("brand"), "Nike")` — compares the source brand field against a known value
