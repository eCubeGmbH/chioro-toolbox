This function searches for a specific text within a given text. It can use either a regular expression or a simple text as the search term. The function returns the position of the first match or -1 if the search term is not found.

##### Parameters
* **text** - The text to search within.
* **textToSearch** - The search term, either as a regular expression or as a simple text.

##### Examples
* `locateInText("Hello World", "World")` Output: `6`
* `locateInText("This is a test", /Test/)` Output: `10`
* `locateInText("No match", "Search")` Output: `-1`
