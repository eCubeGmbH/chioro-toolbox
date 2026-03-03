Finds an attribute by its key from the product type
associated with a category node in a tree. Walks up
the tree from the given node to the root, checking
each node's product type for the attribute. Returns
the first match found.

##### Parameters
* `treeKey` - The key of the category tree.
* `nodeKey` - The key of the category node to start
  searching from.
* `attributeKey` - The key of the attribute to find.

##### Examples
* `getAttributeByKeyFromTreeStructure(
  "google_taxonomy", "shoes", "color")` — finds the
  color attribute in the shoes category or its
  parents
* `getAttributeByKeyFromTreeStructure("my_tree",
  $("category_key"), "size")` — looks up the size
  attribute starting from the source category
* `extractProperty(
  getAttributeByKeyFromTreeStructure(
  "google_taxonomy", "shoes", "material"), "name")`
  — gets the localized name of the found attribute
