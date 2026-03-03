Returns the localized name of a category node. Looks
up the category by its key in the given tree and
returns the name for the specified locale.

##### Parameters
* `treeKey` - The key of the category tree.
* `nodeKey` - The key of the category node.
* `locale (optional)` - The locale for the name
  (e.g., "en", "de"). Defaults to "x-default".

##### Examples
* `getCategoryName("google_taxonomy", "shoes")`
  — returns the default name of the "shoes" category
* `getCategoryName("google_taxonomy", "shoes", "de")`
  — returns the German name of the category
* `getCategoryName("my_tree", $("category_key"))`
  — returns the name for the source category key
