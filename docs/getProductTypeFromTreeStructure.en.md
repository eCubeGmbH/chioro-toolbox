Retrieves the product type (schema) associated with a
specific category node in a category tree. Returns the
full product type object including its attributes.

##### Parameters
* `treeKey` - The key of the category tree.
* `nodeKey` - The key of the category node whose
  product type to retrieve.

##### Examples
* `getProductTypeFromTreeStructure("google_taxonomy",
  "shoes")` — returns the product type for the
  "shoes" category
* `extractProperty(
  getProductTypeFromTreeStructure("my_tree",
  $("category_key")), "attributes")` — gets the
  attributes of the category's product type
