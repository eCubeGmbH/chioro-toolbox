Finds an attribute in a product type (schema) by its
localized name. Returns the attribute object with its
key, name, type, and other properties. Returns null
if not found.

##### Parameters
* `productTypeName` - The name of the product type
  (schema) to search in.
* `attributeName` - The localized name of the
  attribute to find.
* `locale` - The locale for name matching (e.g.,
  "en", "de", "x-default").

##### Examples
* `getAttributeByNameFromProductType("T-Shirts",
  "Color", "en")` — finds the attribute named
  "Color" in English
* `getAttributeByNameFromProductType("Shoes",
  "Größe", "de")` — finds the attribute named
  "Größe" in German
* `extractProperty(
  getAttributeByNameFromProductType(
  $("product_type"), "Material", "en"), "key")`
  — gets the key of the matched attribute
