This function applies a regular expression to a text and returns a list of matches found. Depending on whether the regular expression uses the "g" modifier, the list will contain either all matches or only the first match and its groups.

##### Parameters
* `text` - The text to search for matches.
* `pattern` - The regular expression to use for searching. Can be either a string or a RegExp object.
* `withGroups` - A boolean value indicating whether the groups of the regular expression should be included in the result list.

##### Examples
* `extractAllMatchesFromText("The quick brown fox", /fox/i)` Output: `["fox"]`
* `extractAllMatchesFromText("The quick brown fox jumps", /(\w+)\s(\w+)/g)` Output: `["The quick", "brown fox"]`
* `extractAllMatchesFromText("123 Main Street", /(\d+) (\w+) (.*)/)` Output: `["123 Main Street"]` 
