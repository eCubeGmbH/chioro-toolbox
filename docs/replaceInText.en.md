Replaces text within a string or array of strings. Supports both simple string replacements and regular expressions.

##### Parameters
* `text` - The string or array of strings in which to replace text.
* `textToSearch` - The string or regular expression to search for.
* `replaceWith` - The string to replace the found text with.

##### Examples
* `replaceInText("Good Morning", "Morning", "Evening")` Output: "Good Evening"
* `replaceInText("This is a sentence", /sentence/g, "paragraph")` Output: "This is a paragraph"
* `replaceInText(["Apple", "Banana", "Cherry"], /a/g, "o")` Output: ["Opple", "Bonono", "Cherry"] 
