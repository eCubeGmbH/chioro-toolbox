Finds an attribute by its localized name from the
product type associated with a category node in a
tree. Walks up the tree from the given node to the
root, checking each node's product type for the
attribute. Returns the first match found.

##### Parameters
* `treeKey` - The key of the category tree.
* `nodeKey` - The key of the category node to start
  searching from.
* `attributeName` - The localized name of the
  attribute to find.
* `locale` - The locale for name matching (e.g.,
  "en", "de", "x-default").

##### Examples
* `getAttributeByNameFromTreeStructure(
  "google_taxonomy", "shoes", "Color", "en")`
  — finds the attribute named "Color" in the shoes
  category or its parents
* `getAttributeByNameFromTreeStructure("my_tree",
  $("category_key"), "Größe", "de")` — finds the
  attribute named "Größe" starting from the source
  category
