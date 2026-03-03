Checks if a category path starts with (is a child of)
a comparison path. Both values are pipe-separated
category paths. The comparison is case-insensitive.
Returns true if the category value starts with the
comparison value.

##### Parameters
* `categoryValue` - The full category path to check
  (e.g., "Root|Clothing|Shoes").
* `comparisonValue` - The parent path to compare
  against (e.g., "Root|Clothing").

##### Examples
* `similarCategory("Root|Clothing|Shoes",
  "Root|Clothing")` Output: `true`
* `similarCategory("Root|Electronics|Phones",
  "Root|Clothing")` Output: `false`
* `similarCategory($("category_path"),
  "Root|Clothing")` — checks if the source product
  belongs to the Clothing category
