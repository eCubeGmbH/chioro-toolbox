Retrieves a product type (schema) by its name. Returns
the full product type object including its attributes
array. Each attribute has key, name (localized), type,
and other properties.

##### Parameters
* `productTypeName` - The name of the product type
  (schema) to retrieve.

##### Examples
* `getProductType("T-Shirts")` — returns the
  product type object for T-Shirts
* `extractProperty(getProductType("Shoes"),
  "attributes")` — gets the list of attributes
  for the Shoes product type
* `getProductType($("product_type"))` — retrieves
  the product type from a source field
