Returns the pipe-separated path of a category node
from the root to the specified node. Looks up the
category by its key and returns its path property.

##### Parameters
* `treeKey` - The key of the category tree.
* `nodeKey` - The key of the category node.

##### Examples
* `getCategoryPath("google_taxonomy", "shoes")`
  — returns something like "root|clothing|shoes"
* `getCategoryPath("my_tree", $("category_key"))`
  — gets the full path of the source category
