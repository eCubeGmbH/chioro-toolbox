Gibt den lokalisierten Namen eines Kategorie-Knotens
zurück. Sucht die Kategorie anhand ihres Schlüssels
im angegebenen Baum und gibt den Namen für die
angegebene Sprache zurück.

##### Parameter
* `treeKey` - Der Schlüssel des Kategoriebaums.
* `nodeKey` - Der Schlüssel des Kategorie-Knotens.
* `locale (optional)` - Die Sprache für den Namen
  (z.B. "en", "de"). Standard ist "x-default".

##### Beispiele
* `kategorieName("google_taxonomy", "shoes")`
  — gibt den Standardnamen der Kategorie "shoes"
  zurück
* `kategorieName("google_taxonomy", "shoes", "de")`
  — gibt den deutschen Namen der Kategorie zurück
* `kategorieName("my_tree", $("category_key"))`
  — gibt den Namen für den Quell-Kategorie-Schlüssel
  zurück
