This function extracts a value from an HTML string containing an enumeration. It searches for a specific attribute name and returns the corresponding value.

##### Parameters
* `text` - The HTML string containing the enumeration.
* `propertyName` - The name of the attribute whose value should be extracted.
* `fallback` - An optional value to return if the attribute is not found.

##### Examples
* `extractFromHtmlEnum("<li> Name: Max </li>", "Name")` Output: `"Max"`
* `extractFromHtmlEnum("<li> Age: 25 </li>", "Age")` Output: `"25"`
* `extractFromHtmlEnum("<li> City: Berlin </li>", "Country", "Unknown")` Output: `"Unknown"` 
