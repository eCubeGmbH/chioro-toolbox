Findet ein Attribut anhand seines lokalisierten Namens
aus dem Produkttyp, der einem Kategorie-Knoten in
einem Baum zugeordnet ist. Geht den Baum vom
angegebenen Knoten zur Wurzel hinauf und prüft den
Produkttyp jedes Knotens auf das Attribut. Gibt den
ersten Treffer zurück.

##### Parameter
* `treeKey` - Der Schlüssel des Kategoriebaums.
* `nodeKey` - Der Schlüssel des Kategorie-Knotens,
  ab dem gesucht werden soll.
* `attributeName` - Der lokalisierte Name des zu
  findenden Attributs.
* `locale` - Die Sprache für den Namensabgleich
  (z.B. "en", "de", "x-default").

##### Beispiele
* `holeAttributPerNameAusBaumstruktur(
  "google_taxonomy", "shoes", "Color", "en")`
  — findet das Attribut namens "Color" in der
  Schuh-Kategorie oder deren Eltern
* `holeAttributPerNameAusBaumstruktur("my_tree",
  $("category_key"), "Größe", "de")` — findet das
  Attribut namens "Größe" ab der Quell-Kategorie
