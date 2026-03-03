Matches a sequence of category names against a
category tree, walking down from the root. Returns a
result object indicating how far the path was matched,
what's missing, and what alternatives are available at
the point where matching stopped.

##### Parameters
* `treeKey` - The key of the category tree.
* `locale` - The locale for name matching (e.g.,
  "en", "de", "x-default").
* `pathElements...` - One or more category names to
  match, from root to leaf. Can also be passed as
  an array.

##### Return Value
Returns an object with:
* `ok` - true if the full path was matched
* `key` - the key of the last matched category
* `wanted` - the requested path elements
* `matched` - the path elements that were found
* `tail` - remaining unmatched path elements
* `missing` - the first unmatched element
* `alternatives` - available child names at the
  point where matching stopped

##### Examples
* `matchCategoryByNamePath("google_taxonomy",
  "en", "All Products", "Clothing", "Shoes")`
  — matches each level and returns result object
* `matchCategoryByNamePath("my_tree", "x-default",
  ["Electronics", "Phones", "Smartphones"])`
  — accepts an array of path elements
* `extractProperty(matchCategoryByNamePath(
  "google_taxonomy", "en", "Clothing", "Shoes"),
  "key")` — gets the key of the matched category
