Determines the first matching term from a list of arguments based on the `decode` function. The function expects at least two arguments, where the first argument is the text to be examined and the following arguments are pairs of search patterns and replacement terms.

##### Parameters
* A list of arguments, where the first argument is the text to be examined and the following arguments are pairs of search patterns (strings or RegExp) and replacement terms.

##### Examples
* `extractFirstTerm('Hello World', /World/, 'Max')` Output: `Max`
* `extractFirstTerm('Name: Max', 'Name:', 'Age:')` Output: `Age:`
* `extractFirstTerm('Size: unknown', /Size/, 'Age:')` Output: `Age:` 
