Finds an attribute in a product type (schema) by its
key. Returns the attribute object with its key, name
(localized), type, and other properties. Returns null
if not found.

##### Parameters
* `productTypeName` - The name of the product type
  (schema) to search in.
* `attributeKey` - The key of the attribute to find.

##### Examples
* `getAttributeByKeyFromProductType("T-Shirts",
  "color")` — returns the color attribute object
* `extractProperty(
  getAttributeByKeyFromProductType("Shoes",
  "size"), "name")` — gets the localized name of
  the size attribute
* `getAttributeByKeyFromProductType(
  $("product_type"), "material")` — looks up an
  attribute using the source product type
