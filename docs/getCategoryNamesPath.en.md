Converts a pipe-separated category path of node keys
into a pipe-separated path of localized category
names. Returns null if the path does not contain a
pipe separator.

##### Parameters
* `treeKey` - The key of the category tree.
* `categoryPath` - A pipe-separated path of category
  node keys (e.g., "root|clothing|shoes").
* `locale (optional)` - The locale for the names
  (e.g., "en", "de"). Defaults to "x-default".

##### Examples
* `getCategoryNamesPath("google_taxonomy",
  "root|clothing|shoes")` — returns something like
  "All Products|Clothing|Shoes"
* `getCategoryNamesPath("google_taxonomy",
  $("category_path"), "de")` — converts the source
  category path to German names
