Extracts the value of a property from a text. The property is identified by its name and can be separated by a colon or equals sign.

##### Parameters
* `text` - The text to extract the property value from.
* `propertyName` - The name of the property to extract the value of.
* `fallback` - (Optional) A fallback value to return if the property is not found.

##### Examples
* `extractProperty('name: Max', 'name')` Output: `Max`
* `extractProperty('Age = 30 years', 'Age')` Output: `30 years`
* `extractProperty('color: red, size: XL', 'color')` Output: `red`

**Note:** Values must be separated by `,` `;` `|` or newline.
Space-only separation (e.g. `"breed:Maine Coon age:5"`)
does NOT work — use `extractFromText` with `withGroups=true`.
