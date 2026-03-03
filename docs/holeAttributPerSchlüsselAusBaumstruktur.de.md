Findet ein Attribut anhand seines Schlüssels aus dem
Produkttyp, der einem Kategorie-Knoten in einem Baum
zugeordnet ist. Geht den Baum vom angegebenen Knoten
zur Wurzel hinauf und prüft den Produkttyp jedes
Knotens auf das Attribut. Gibt den ersten Treffer
zurück.

##### Parameter
* `treeKey` - Der Schlüssel des Kategoriebaums.
* `nodeKey` - Der Schlüssel des Kategorie-Knotens,
  ab dem gesucht werden soll.
* `attributeKey` - Der Schlüssel des zu findenden
  Attributs.

##### Beispiele
* `holeAttributPerSchlüsselAusBaumstruktur(
  "google_taxonomy", "shoes", "color")` — findet
  das Farb-Attribut in der Schuh-Kategorie oder
  deren Eltern
* `holeAttributPerSchlüsselAusBaumstruktur(
  "my_tree", $("category_key"), "size")` — sucht
  das Größen-Attribut ab der Quell-Kategorie
