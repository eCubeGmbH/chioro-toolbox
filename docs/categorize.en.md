Uses AI to automatically categorize a product into a
category tree based on descriptive text. Sends the text
to the backend categorization engine which returns the
best matching category node key.

##### Parameters
* `attributes` - A text describing the product (e.g.,
  product name, description, or other attributes that
  help identify the category).
* `categoryTreeKey` - The key of the category tree to
  categorize into.

##### Examples
* `categorize($("product_name"), "google_taxonomy")`
  — categorizes the product by its name into the
  Google taxonomy tree
* `categorize($("description"), "custom_categories")`
  — categorizes based on product description
* `categorize(joinText(" ", $("name"), $("color"),
  $("material")), "google_taxonomy")` — combines
  multiple fields for better categorization accuracy
