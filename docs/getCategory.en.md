Retrieves a category node object from a category tree
by its key. Returns the full category object including
its key, name (localized), path, parentKey, and
children array. Returns null if not found.

##### Parameters
* `treeKey` - The key of the category tree.
* `nodeKey` - The key of the category node to retrieve.

##### Examples
* `getCategory("google_taxonomy", "clothing")`
  — returns the category object for "clothing"
* `extractProperty(getCategory("google_taxonomy",
  "shoes"), "path")` — gets the path of a category
* `extractProperty(getCategory("my_tree",
  $("category_key")), "parentKey")` — gets the
  parent key of the source category
